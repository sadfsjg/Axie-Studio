// Service Worker for Axie Studio PWA
const CACHE_NAME = 'axie-studio-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/en',
  '/manifest.json',
  '/manifest-en.json',
  '/icon.png',
  '/logo192.png',
  '/logo512.png',
  '/apple-icon.png',
  '/maskable-icon.png',
  '/favicon.ico',
  '/offline.html',
  '/offline-en.html',
  '/images/axie-studio-logo.png',
  '/app-store-badge.png',
  '/google-play-badge.png'
];

// Install event - cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => {
          return cacheName !== CACHE_NAME;
        }).map((cacheName) => {
          return caches.delete(cacheName);
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Handle navigation requests
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        // If fetch fails, return the appropriate offline page
        const url = new URL(event.request.url);
        return caches.match(url.pathname.startsWith('/en') ? '/offline-en.html' : '/offline.html');
      })
    );
    return;
  }

  // For all other requests, use a stale-while-revalidate strategy
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return cached response if available
      if (cachedResponse) {
        // Update cache in the background
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return networkResponse;
        }).catch(() => {
          // Network request failed, just return the cached response
          return cachedResponse;
        });
        
        return cachedResponse;
      }

      // If not in cache, fetch from network
      return fetch(event.request)
        .then((response) => {
          // Don't cache non-successful responses
          if (!response || response.status !== 200) {
            return response;
          }

          // Clone the response to store in cache
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return response;
        })
        .catch(() => {
          // For image requests, return a fallback image
          if (event.request.destination === 'image') {
            return caches.match('/placeholder.svg');
          }
          
          // For other assets, return whatever is available
          return caches.match('/offline.html');
        });
    })
  );
});

// Handle messages from clients
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Handle app installation
self.addEventListener('appinstalled', (event) => {
  console.log('PWA was installed');
});