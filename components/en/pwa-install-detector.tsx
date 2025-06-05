"use client"

import { useEffect, useState } from "react"
import { usePwaInstall } from "@/hooks/use-pwa-install"
import { PremiumPwaInstallPopup } from "./premium-pwa-install-popup"
import { PwaInstallMiniButton } from "./pwa-install-mini-button"

interface PwaInstallDetectorProps {
  showSmartBanner?: boolean
  showPopup?: boolean
  showMiniButton?: boolean
  delay?: number
}

export function PwaInstallDetector({
  showSmartBanner = false, // Changed to false
  showPopup = true,
  showMiniButton = true,
  delay = 3000,
}: PwaInstallDetectorProps) {
  const { canInstall, isInstalled, promptInstall, installInstructions } = usePwaInstall()
  const [showInstallUI, setShowInstallUI] = useState(false)
  const [showPopupState, setShowPopupState] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    // Don't show install UI if already installed
    if (isInstalled) return

    // Check if user has previously dismissed the prompt
    const hasUserDismissedPrompt = localStorage.getItem("pwa-install-dismissed")
    const lastDismissed = localStorage.getItem("pwa-install-dismissed-time")

    // If user has dismissed within the last 7 days, don't show
    if (hasUserDismissedPrompt && lastDismissed) {
      const dismissedTime = Number.parseInt(lastDismissed, 10)
      const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000

      if (Date.now() - dismissedTime < sevenDaysInMs) {
        return
      }
    }

    // Show install UI after delay
    const timer = setTimeout(() => {
      if (canInstall) {
        setShowInstallUI(true)

        // Show popup after user has been on the site for a while
        if (showPopup) {
          const popupTimer = setTimeout(() => {
            if (!hasInteracted) {
              setShowPopupState(true)
            }
          }, 30000) // Show popup after 30 seconds

          return () => clearTimeout(popupTimer)
        }
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [canInstall, isInstalled, delay, showPopup, hasInteracted])

  const handleDismiss = () => {
    setShowInstallUI(false)
    setShowPopupState(false)
    setHasInteracted(true)

    // Store dismissal in localStorage
    localStorage.setItem("pwa-install-dismissed", "true")
    localStorage.setItem("pwa-install-dismissed-time", Date.now().toString())
  }

  const handleInstall = async () => {
    setHasInteracted(true)

    if (installInstructions === "chrome" || installInstructions === "android") {
      const installed = await promptInstall()
      if (installed) {
        setShowInstallUI(false)
        setShowPopupState(false)
      }
    } else {
      // For Safari and other browsers, keep the instructions visible
      setShowPopupState(true)
    }
  }

  if (!showInstallUI || isInstalled) return null

  return (
    <>
      {showPopupState && (
        <PremiumPwaInstallPopup
          onClose={handleDismiss}
          onInstall={promptInstall}
          installInstructions={installInstructions}
        />
      )}

      {showMiniButton && !showPopupState && <PwaInstallMiniButton onClick={() => setShowPopupState(true)} />}
    </>
  )
}
