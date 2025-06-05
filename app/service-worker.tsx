"use client"

import { useEffect } from "react"

export function ServiceWorkerRegistration() {
  useEffect(() => {
    // Register service worker as soon as possible
    if ("serviceWorker" in navigator) {
      // Use the window load event to reduce competition for browser resources
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js", {
            scope: "/",
            // Use type: 'module' for faster parsing
            type: "module",
            // Update service worker immediately
            updateViaCache: "none",
          })
          .then((registration) => {
            console.log("ServiceWorker registration successful with scope: ", registration.scope)

            // Check for updates immediately
            registration.update()
          })
          .catch((err) => {
            console.log("ServiceWorker registration failed: ", err)
          })
      })
    }
  }, [])

  return null
}
