const CACHE_VERSION = "v2"
const CACHE_NAME = `axie-studio-${CACHE_VERSION}`
const urlsToCache = [
  "/",
  "/en",
  "/manifest.json",
  "/manifest-en.json",
  "/icon.png",
  "/logo192.png",
  "/logo512.png",
  "/images/axie-studio-logo.png",
  "/offline.html",
  "/offline-en.html",
]

// Install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache)
      })
      .then(() => {
        return self.skipWaiting()
      }),
  )
})

// Activate event
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName)
            }
          }),
        )
      })
      .then(() => {
        return self.clients.claim()
      }),
  )
})

// Fetch event
self.addEventListener("fetch", (event) => {
  const requestUrl = new URL(event.request.url)
  const isEnglish = requestUrl.pathname.startsWith("/en")
  
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached version or fetch from network
      return (
        response ||
        fetch(event.request).catch(() => {
          // If both cache and network fail, return appropriate offline page
          if (event.request.destination === "document") {
            return caches.match(isEnglish ? "/offline-en.html" : "/offline.html")
          }
        })
      )
    }),
  )
})

// Handle PWA installation
self.addEventListener("beforeinstallprompt", (event) => {
  // Prevent the mini-infobar from appearing on mobile
  event.preventDefault()
  // Stash the event so it can be triggered later
  self.deferredPrompt = event
})

// Handle successful PWA installation
self.addEventListener("appinstalled", (event) => {
  console.log("PWA was installed successfully")
})
