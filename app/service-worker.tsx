"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function ServiceWorkerRegistration() {
  const pathname = usePathname()
  const [updateAvailable, setUpdateAvailable] = useState(false)
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null)
  
  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') return
    
    // Check if we're in StackBlitz environment
    const isStackBlitz = 
      window.location.hostname.includes('stackblitz') || 
      window.location.hostname.includes('webcontainer')
    
    if (isStackBlitz) {
      console.log("Service Worker registration skipped: Running in StackBlitz environment")
      return
    }
    
    if ("serviceWorker" in navigator) {
      // Use the window load event to reduce competition for browser resources
      const registerServiceWorker = async () => {
        try {
          const reg = await navigator.serviceWorker.register('/service-worker.js', {
            scope: '/',
            updateViaCache: 'none' // Don't use cached service worker
          })
          
          console.log("Service Worker registered successfully:", reg.scope)
          setRegistration(reg)
          
          // Check if there's a waiting service worker
          if (reg.waiting) {
            setUpdateAvailable(true)
          }
          
          // Listen for new service workers
          reg.addEventListener('updatefound', () => {
            const newWorker = reg.installing
            if (!newWorker) return
            
            // Track state changes of the new service worker
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                setUpdateAvailable(true)
              }
            })
          })
          
          // Set up periodic updates
          const checkForUpdates = () => {
            reg.update().catch(err => {
              console.warn('Service worker update check failed:', err)
            })
          }
          
          // Check for updates every hour
          const updateInterval = setInterval(checkForUpdates, 60 * 60 * 1000)
          
          // Also check when the page becomes visible again
          document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
              checkForUpdates()
            }
          })
          
          return () => clearInterval(updateInterval)
        } catch (error) {
          console.warn("Service Worker registration failed:", error)
        }
      }
      
      // Register when the page loads
      window.addEventListener('load', registerServiceWorker)
      
      // Handle controller changes (when a new service worker takes over)
      let refreshing = false
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (refreshing) return
        refreshing = true
        window.location.reload()
      })
      
      // Listen for messages from the service worker
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'UPDATE_AVAILABLE') {
          setUpdateAvailable(true)
        }
        
        if (event.data && event.data.type === 'APP_INSTALLED') {
          // Update UI to reflect installed state
          localStorage.setItem('pwa-installed', 'true')
        }
      })
      
      // Clean up
      return () => {
        window.removeEventListener('load', registerServiceWorker)
      }
    }
  }, [])
  
  // Function to apply updates when available
  const applyUpdate = () => {
    if (!registration || !registration.waiting) return
    
    // Send message to waiting service worker to skip waiting
    registration.waiting.postMessage({ type: 'SKIP_WAITING' })
    setUpdateAvailable(false)
  }
  
  // Render update notification if needed
  if (updateAvailable) {
    return (
      <div className="fixed bottom-4 left-4 z-50 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
        <p>A new version is available!</p>
        <button 
          onClick={applyUpdate}
          className="mt-2 bg-white text-blue-600 px-4 py-2 rounded font-medium"
        >
          Update now
        </button>
      </div>
    )
  }
  
  return null
}