"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { isIOS, isAndroid, isChrome, isSafari } from "@/utils/device-detection"

type InstallPromptEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>
}

type InstallInstructions = {
  title: string
  steps: string[]
  images?: string[]
  platform: "ios" | "android" | "desktop" | "other"
}

type InstallContextType = {
  canInstall: boolean
  isInstalled: boolean
  promptInstall: () => Promise<void>
  installInstructions: InstallInstructions | null
  showInstallPrompt: (type?: "popup" | "banner" | "button") => void
  hideInstallPrompt: () => void
  installPromptVisible: boolean
  installPromptType: "popup" | "banner" | "button"
}

const InstallContext = createContext<InstallContextType | undefined>(undefined)

export function PwaInstallProvider({ children }: { children: ReactNode }) {
  const [deferredPrompt, setDeferredPrompt] = useState<InstallPromptEvent | null>(null)
  const [isInstalled, setIsInstalled] = useState(false)
  const [installPromptVisible, setInstallPromptVisible] = useState(false)
  const [installPromptType, setInstallPromptType] = useState<"popup" | "banner" | "button">("popup")
  const [hasInteracted, setHasInteracted] = useState(false)

  // Detect if app can be installed
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as InstallPromptEvent)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)

    // Check if already installed
    if (
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true ||
      localStorage.getItem("pwa-installed") === "true"
    ) {
      setIsInstalled(true)
    }

    // Set up interaction detection
    const handleInteraction = () => {
      setHasInteracted(true)
    }

    window.addEventListener("click", handleInteraction, { once: true })
    window.addEventListener("touchstart", handleInteraction, { once: true })
    window.addEventListener("scroll", handleInteraction, { once: true })

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
      window.removeEventListener("click", handleInteraction)
      window.removeEventListener("touchstart", handleInteraction)
      window.removeEventListener("scroll", handleInteraction)
    }
  }, [])

  // Handle app installed event
  useEffect(() => {
    const handleAppInstalled = () => {
      setIsInstalled(true)
      setDeferredPrompt(null)
      setInstallPromptVisible(false)
      localStorage.setItem("pwa-installed", "true")
    }

    window.addEventListener("appinstalled", handleAppInstalled)

    return () => {
      window.removeEventListener("appinstalled", handleAppInstalled)
    }
  }, [])

  // Check if PWA can be installed
  const canInstallPwa = (): boolean => {
    if (isInstalled) return false

    // Chrome/Edge with beforeinstallprompt support
    if (deferredPrompt) return true

    // iOS Safari (manual installation)
    if (isIOS() && isSafari()) return true

    // Android browsers (manual or automatic)
    if (isAndroid()) return true

    // Desktop Chrome/Edge
    if (!isAndroid() && !isIOS() && (isChrome() || navigator.userAgent.includes("Edg"))) return true

    return false
  }

  // Enhanced prompt installation with better error handling
  const promptInstall = async (): Promise<void> => {
    try {
      // For Chrome/Edge with native beforeinstallprompt - 1-click installation
      if (deferredPrompt) {
        await deferredPrompt.prompt()
        const { outcome } = await deferredPrompt.userChoice

        if (outcome === "accepted") {
          setDeferredPrompt(null)
          setIsInstalled(true)
          localStorage.setItem("pwa-installed", "true")
        }
        return
      }

      // For iOS Safari, show instructions
      if (isIOS() && isSafari()) {
        showInstallPrompt("popup")
        return
      }

      // For Android browsers, show instructions
      if (isAndroid()) {
        showInstallPrompt("popup")
        return
      }

      // For desktop browsers without beforeinstallprompt
      if (!isAndroid() && !isIOS()) {
        showInstallPrompt("popup")
        return
      }

      // If we get here, installation is not supported
      throw new Error("PWA installation not supported on this device/browser")
    } catch (error) {
      console.error("PWA installation error:", error)
      // Always show instructions as fallback
      showInstallPrompt("popup")
    }
  }

  // Get device-specific installation instructions
  const getInstallInstructions = (): InstallInstructions | null => {
    if (isIOS() && isSafari()) {
      return {
        title: "Install on iOS",
        steps: ["Tap the 'Share' icon", "Select 'Add to Home Screen'"],
        images: ["/ios-safari-add-to-home-screen.png"],
        platform: "ios",
      }
    }

    if (isAndroid()) {
      return {
        title: "Install on Android",
        steps: ["Tap the menu (three dots)", "Select 'Install app' or 'Add to Home Screen'"],
        images: ["/android-pwa-install.png"],
        platform: "android",
      }
    }

    if (!isAndroid() && !isIOS()) {
      return {
        title: "Install on Desktop",
        steps: ["Look for the install icon in the address bar", "Click 'Install' when prompted"],
        images: ["/desktop-pwa-installation.png"],
        platform: "desktop",
      }
    }

    return {
      title: "Install App",
      steps: ["Open this page in Chrome, Safari, or Edge to install the app"],
      platform: "other",
    }
  }

  const showInstallPrompt = (type: "popup" | "banner" | "button" = "popup") => {
    setInstallPromptType(type)
    setInstallPromptVisible(true)
  }

  const hideInstallPrompt = () => {
    setInstallPromptVisible(false)
  }

  return (
    <InstallContext.Provider
      value={{
        canInstall: canInstallPwa(),
        isInstalled,
        promptInstall,
        installInstructions: getInstallInstructions(),
        showInstallPrompt,
        hideInstallPrompt,
        installPromptVisible,
        installPromptType,
      }}
    >
      {children}
    </InstallContext.Provider>
  )
}

export function usePwaInstall() {
  const context = useContext(InstallContext)

  if (context === undefined) {
    // Return a fallback object instead of throwing an error
    return {
      canInstall: false,
      isInstalled: false,
      promptInstall: async () => {
        console.warn("PWA install context not available")
      },
      installInstructions: null,
      showInstallPrompt: () => {},
      hideInstallPrompt: () => {},
      installPromptVisible: false,
      installPromptType: "popup" as const,
    }
  }

  return context
}
