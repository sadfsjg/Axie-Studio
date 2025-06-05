"use client"

import { useEffect, useState } from "react"
import { isIOS, isAndroid, isChrome, isSafari, isStandalone } from "@/utils/device-detection"
import { usePwaInstall as useContextPwaInstall } from "@/components/pwa/install-context"

export function usePwaInstall() {
  const context = useContextPwaInstall()
  const [hasCheckedStorage, setHasCheckedStorage] = useState(false)

  // Check if the app is already installed via localStorage
  useEffect(() => {
    if (typeof window !== "undefined" && !hasCheckedStorage) {
      const isAppInstalled = localStorage.getItem("pwa-installed") === "true" || isStandalone()

      if (isAppInstalled && context) {
        context.isInstalled = true
      }

      setHasCheckedStorage(true)
    }
  }, [context, hasCheckedStorage])

  // Enhanced canInstall check
  const canInstall = (): boolean => {
    // Already installed
    if (context?.isInstalled || isStandalone()) return false

    // Has native install prompt
    if (context?.canInstall) return true

    // iOS Safari can install PWAs
    if (isIOS() && isSafari()) return true

    // Android browsers
    if (isAndroid()) return true

    // Desktop Chrome/Edge
    if (isChrome() || navigator.userAgent.includes("Edg")) return true

    return false
  }

  // Enhanced promptInstall with better error handling and events
  const promptInstall = async (): Promise<boolean> => {
    try {
      if (context?.promptInstall) {
        await context.promptInstall()
        // Listen for appinstalled event
        return new Promise((resolve) => {
          window.addEventListener('appinstalled', () => {
            localStorage.setItem("pwa-installed", "true")
            resolve(true)
          }, { once: true })
        })
      } else {
        // Fallback for when context is not available
        if (isIOS() && isSafari()) {
          // Show iOS installation modal with icons
          return showInstallModal({
            title: "Installera Axie Studio",
            steps: [
              {
                text: "Tryck på Dela-knappen",
                icon: "share"
              },
              {
                text: "Välj 'Lägg till på hemskärmen'",
                icon: "add_to_home_screen"
              }
            ],
            icon: "/apple-icon.png"
          })
        } else if (isAndroid()) {
          // Show Android installation modal
          return showInstallModal({
            title: "Installera Axie Studio",
            steps: [
              {
                text: "Tryck på menyn (⋮)",
                icon: "more_vert"
              },
              {
                text: "Välj 'Installera app'",
                icon: "install_desktop"
              }
            ],
            icon: "/icon.png"
          })
        } else {
          // Show generic installation modal
          return showInstallModal({
            title: "Installera Axie Studio",
            steps: [
              {
                text: "Leta efter install-ikonen",
                icon: "download"
              },
              {
                text: "Klicka på 'Installera'",
                icon: "install_mobile"
              }
            ],
            icon: "/logo192.png"
          })
        }
      }
    } catch (error) {
      console.error("PWA installation failed:", error)
      // Show fallback instructions
      // Same improved modal for error case
      if (isIOS() && isSafari()) {
        return showInstallModal({
          title: "Installera Axie Studio",
          steps: [
            {
              text: "Tryck på Dela-knappen",
              icon: "share"
            },
            {
              text: "Välj 'Lägg till på hemskärmen'",
              icon: "add_to_home_screen"
            }
          ],
          icon: "/apple-icon.png"
        })
      } else if (isAndroid()) {
        return showInstallModal({
          title: "Installera Axie Studio",
          steps: [
            {
              text: "Tryck på menyn (⋮)",
              icon: "more_vert"
            },
            {
              text: "Välj 'Installera app'",
              icon: "install_desktop"
            }
          ],
          icon: "/icon.png"
        })
      } else {
        return showInstallModal({
          title: "Installera Axie Studio",
          steps: [
            {
              text: "Leta efter install-ikonen",
              icon: "download"
            },
            {
              text: "Klicka på 'Installera'",
              icon: "install_mobile"
            }
          ],
          icon: "/logo192.png"
        })
      }
    }
    return false
  }

  // Return the context with enhanced functionality
  return {
    ...context,
    canInstall: canInstall(),
    promptInstall,
  }
}
