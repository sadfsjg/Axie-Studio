"use client"

import { useState, useEffect } from "react"
import { isIOS, isAndroid, isChrome, isSafari, isStandalone } from "@/utils/device-detection"

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>
}

export function usePwaInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [isInstalled, setIsInstalled] = useState(false)
  const [installInstructions, setInstallInstructions] = useState<"ios" | "android" | "chrome" | "other" | null>(null)

  // Detect if app can be installed
  useEffect(() => {
    // Check if already installed
    if (
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true ||
      localStorage.getItem("pwa-installed") === "true"
    ) {
      setIsInstalled(true)
      return
    }

    // Determine device type for installation instructions
    if (isIOS() && isSafari()) {
      setInstallInstructions("ios")
    } else if (isAndroid() && isChrome()) {
      setInstallInstructions("android")
    } else if (isChrome()) {
      setInstallInstructions("chrome")
    } else {
      setInstallInstructions("other")
    }

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)

    // Listen for appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true)
      localStorage.setItem("pwa-installed", "true")
    }

    window.addEventListener("appinstalled", handleAppInstalled)

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
      window.removeEventListener("appinstalled", handleAppInstalled)
    }
  }, [])

  // Function to prompt installation
  const promptInstall = async (): Promise<boolean> => {
    if (deferredPrompt) {
      try {
        await deferredPrompt.prompt()
        const { outcome } = await deferredPrompt.userChoice
        
        if (outcome === "accepted") {
          setDeferredPrompt(null)
          setIsInstalled(true)
          localStorage.setItem("pwa-installed", "true")
          return true
        }
      } catch (error) {
        console.error("Error during installation prompt:", error)
      }
    }
    
    return false
  }

  return {
    canInstall: !!deferredPrompt || (isIOS() && isSafari()) || isAndroid() || isChrome(),
    isInstalled,
    promptInstall,
    installInstructions
  }
}