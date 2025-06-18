"use client"

import { useEffect } from "react"
import { usePwaInstall } from "@/hooks/use-pwa-install"
import { isIOS, isAndroid, isChrome, isSafari } from "@/utils/device-detection"

export function PwaInstallDetector() {
  const { canInstall, isInstalled, promptInstall, showInstallPrompt } = usePwaInstall()

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return

    // Don't show if already installed
    if (isInstalled) return

    // Check if we should show based on previous interactions
    const hasSeenPrompt = localStorage.getItem("pwa-prompt-seen") === "true"
    const lastPromptTime = localStorage.getItem("pwa-last-prompt-time")
    const now = Date.now()

    // Only show once per day if they've seen it before
    if (hasSeenPrompt && lastPromptTime && now - Number.parseInt(lastPromptTime) < 24 * 60 * 60 * 1000) {
      return
    }

    // Detect if this is a good time to show the prompt
    const handleUserInteraction = () => {
      // If user has spent at least 30 seconds on the site and has interacted
      if (canInstall) {
        // Wait a bit after interaction
        setTimeout(() => {
          // For iOS Safari, show popup
          if (isIOS() && isSafari()) {
            showInstallPrompt("popup")
          }
          // For Android Chrome, show banner
          else if (isAndroid() && isChrome()) {
            showInstallPrompt("banner")
          }
          // For desktop Chrome, show button
          else if (isChrome()) {
            showInstallPrompt("button")
          }

          // Record that we've shown the prompt
          localStorage.setItem("pwa-prompt-seen", "true")
          localStorage.setItem("pwa-last-prompt-time", now.toString())
        }, 2000)

        // Remove the event listeners
        window.removeEventListener("click", handleUserInteraction)
        window.removeEventListener("scroll", handleUserInteraction)
        window.removeEventListener("touchstart", handleUserInteraction)
      }
    }

    // Set a timeout to check after 30 seconds
    const timer = setTimeout(() => {
      // Add event listeners for user interaction
      window.addEventListener("click", handleUserInteraction, { once: true })
      window.addEventListener("scroll", handleUserInteraction, { once: true })
      window.addEventListener("touchstart", handleUserInteraction, { once: true })
    }, 30000)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("click", handleUserInteraction)
      window.removeEventListener("scroll", handleUserInteraction)
      window.removeEventListener("touchstart", handleUserInteraction)
    }
  }, [canInstall, isInstalled, showInstallPrompt])

  // This component doesn't render anything visible
  return null
}