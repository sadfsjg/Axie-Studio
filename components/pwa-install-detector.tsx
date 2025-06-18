"use client"

import { useEffect } from "react"
import { usePwaInstall } from "@/hooks/use-pwa-install"
import { isIOS, isAndroid, isChrome, isSafari } from "@/utils/device-detection"

export function PwaInstallDetector() {
  const { canInstall, isInstalled, promptInstall } = usePwaInstall()

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return

    // Don't show if already installed
    if (isInstalled) return

    // Check if we should show based on previous interactions
    const lastPromptTime = localStorage.getItem("pwa-last-prompt-time")
    const now = Date.now()

    // Only show once per day
    if (lastPromptTime && now - Number.parseInt(lastPromptTime) < 24 * 60 * 60 * 1000) {
      return
    }

    // Detect if this is a good time to show the prompt
    const detectInstallOpportunity = () => {
      // If user has spent at least 30 seconds on the site
      if (document.visibilityState === "visible" && canInstall) {
        // For iOS Safari, show popup
        if (isIOS() && isSafari()) {
          showInstallInstructions("ios")
        }
        // For Android Chrome, show banner
        else if (isAndroid() && isChrome()) {
          showInstallInstructions("android")
        }
        // For desktop Chrome, show button
        else if (isChrome()) {
          showInstallInstructions("chrome")
        }

        // Record that we've shown the prompt
        localStorage.setItem("pwa-last-prompt-time", now.toString())

        // Remove the event listener
        document.removeEventListener("visibilitychange", detectInstallOpportunity)
      }
    }

    // Function to show install instructions based on device
    const showInstallInstructions = (device: string) => {
      // This could trigger a modal or banner with instructions
      const event = new CustomEvent("showPwaInstall", { detail: { device } })
      window.dispatchEvent(event)
    }

    // Set a timeout to check after 30 seconds
    const timer = setTimeout(() => {
      detectInstallOpportunity()
      // Also listen for visibility changes (user comes back to the tab)
      document.addEventListener("visibilitychange", detectInstallOpportunity)
    }, 30000)

    return () => {
      clearTimeout(timer)
      document.removeEventListener("visibilitychange", detectInstallOpportunity)
    }
  }, [canInstall, isInstalled, promptInstall])

  // This component doesn't render anything visible
  return null
}