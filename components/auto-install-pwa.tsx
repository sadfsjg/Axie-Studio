"use client"

import { useEffect, useState } from "react"
import { usePwaInstall } from "@/hooks/use-pwa-install"
import { PremiumPwaInstallPopup } from "@/components/premium-pwa-install-popup"
import { isIOS, isAndroid, isChrome, isSafari } from "@/utils/device-detection"

interface AutoInstallPwaProps {
  autoPrompt?: boolean
  delay?: number
  showOnlyOnce?: boolean
}

export function AutoInstallPwa({ autoPrompt = true, delay = 6000, showOnlyOnce = true }: AutoInstallPwaProps) {
  const { canInstall, isInstalled, promptInstall } = usePwaInstall()
  const [showPopup, setShowPopup] = useState(false)
  const [installType, setInstallType] = useState<"ios" | "android" | "chrome" | "other" | null>(null)

  // Determine device type for installation instructions
  useEffect(() => {
    if (isIOS() && isSafari()) {
      setInstallType("ios")
    } else if (isAndroid() && isChrome()) {
      setInstallType("android")
    } else if (isChrome()) {
      setInstallType("chrome")
    } else {
      setInstallType("other")
    }
  }, [])

  // Auto-prompt logic
  useEffect(() => {
    if (!autoPrompt || isInstalled || !canInstall) return

    // Check if user has previously seen the prompt
    const hasSeenPrompt = showOnlyOnce ? localStorage.getItem("pwa-prompt-seen") : null
    const lastPromptTime = localStorage.getItem("pwa-last-prompt-time")
    const now = Date.now()

    // Only show once per day if they've seen it before
    const shouldShowPrompt =
      !hasSeenPrompt || (lastPromptTime && now - Number.parseInt(lastPromptTime) > 24 * 60 * 60 * 1000)

    if (!shouldShowPrompt) return

    // Wait for user to interact with the page
    const handleUserInteraction = () => {
      // Set a timeout to show the prompt after the specified delay
      const timer = setTimeout(() => {
        // For Android and Chrome desktop, try native prompt first
        if (installType === "android" || installType === "chrome") {
          promptInstall().catch(() => {
            // If native prompt fails, show our custom popup
            setShowPopup(true)
          })
        } else {
          // For iOS and others, show our custom popup
          setShowPopup(true)
        }

        // Record that we've shown the prompt
        if (showOnlyOnce) {
          localStorage.setItem("pwa-prompt-seen", "true")
        }
        localStorage.setItem("pwa-last-prompt-time", now.toString())

        // Remove the event listeners
        window.removeEventListener("click", handleUserInteraction)
        window.removeEventListener("scroll", handleUserInteraction)
        window.removeEventListener("touchstart", handleUserInteraction)
      }, delay)

      return () => clearTimeout(timer)
    }

    // Add event listeners for user interaction
    window.addEventListener("click", handleUserInteraction, { once: true })
    window.addEventListener("scroll", handleUserInteraction, { once: true })
    window.addEventListener("touchstart", handleUserInteraction, { once: true })

    return () => {
      window.removeEventListener("click", handleUserInteraction)
      window.removeEventListener("scroll", handleUserInteraction)
      window.removeEventListener("touchstart", handleUserInteraction)
    }
  }, [autoPrompt, canInstall, isInstalled, promptInstall, delay, showOnlyOnce, installType])

  // Handle installation
  const handleInstall = () => {
    if (installType === "ios") {
      // Can't programmatically install on iOS, just keep showing instructions
    } else {
      promptInstall().catch(() => {
        // If native prompt fails, keep showing our custom popup
      })
    }
  }

  // Handle dismissal
  const handleDismiss = () => {
    setShowPopup(false)
  }

  if (!showPopup) return null

  return (
    <PremiumPwaInstallPopup onDismiss={handleDismiss} onInstall={handleInstall} installInstructions={installType} />
  )
}