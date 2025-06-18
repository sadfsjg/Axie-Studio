"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ServiceWorkerRegistration() {
  const pathname = usePathname()
  
  useEffect(() => {
    // Check if we're in StackBlitz environment
    const isStackBlitz = typeof window !== 'undefined' && 
      (window.location.hostname.includes('stackblitz') || 
       window.location.hostname.includes('webcontainer'))
    
    if (isStackBlitz) {
      console.log("Service Worker registration skipped: Running in StackBlitz environment")
      return
    }
    
    if ("serviceWorker" in navigator) {
      // Register service worker
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
            console.log("Service Worker registered successfully:", registration.scope)
            
            // Check for updates
            registration.update()
            
            // Set up periodic updates
            setInterval(() => {
              registration.update()
              console.log("Checking for Service Worker updates")
            }, 60 * 60 * 1000) // Check every hour
          })
          .catch((error) => {
            console.warn("Service Worker registration failed:", error.message)
            // Don't throw error, just log it as a warning since this might be expected in some environments
          })
      })
      
      // Handle updates
      let refreshing = false
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (refreshing) return
        refreshing = true
        window.location.reload()
      })
      
      // Listen for messages from the service worker
      navigator.serviceWorker.addEventListener("message", (event) => {
        if (event.data && event.data.type === "UPDATE_AVAILABLE") {
          // Show update notification to user
          if (confirm("New version available! Reload to update?")) {
            window.location.reload()
          }
        }
      })
    } else {
      console.log("Service Workers are not supported in this browser")
    }
  }, [pathname])

  return null
}