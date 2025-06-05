"use client"

import { useEffect } from "react"
import { Workbox } from "workbox-window"
import { usePathname } from "next/navigation"

declare global {
  interface Window {
    workbox: Workbox
  }
}

const CACHE_NAME = "axie-studio-v1"
const OFFLINE_URL = "/offline"

const urlsToCache = [
  "/",
  "/en",
  "/offline",
  "/en/offline",
  "/manifest.json",
  "/icon.png",
  "/logo192.png",
  "/logo512.png",
  "/maskable-icon.png",
  "/apple-icon.png"
]

export function ServiceWorkerRegistration() {
  const pathname = usePathname()

  useEffect(() => {
    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      const wb = new Workbox("/sw.js")
      window.workbox = wb

      wb.addEventListener("installed", (event: { isUpdate?: boolean }) => {
        if (event.isUpdate) {
          if (confirm("New app update available! Reload to update?")) {
            window.location.reload()
          }
        }
      })

      wb.addEventListener("waiting", () => {
        wb.messageSW({ type: "SKIP_WAITING" })
      })

      // Handle i18n routes
      const basePath = pathname?.startsWith('/en') ? '/en' : ''
      const swUrl = `${basePath}/sw.js`

      wb.register(swUrl)
        .then((registration) => {
          console.log("Service Worker registered:", registration)
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error)
        })
    }
  }, [pathname])

  return null
}

// Service worker script (sw.js will be generated at build time)
// This is just the registration component