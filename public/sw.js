// Service Worker with automatic cache versioning
// Update this version number or timestamp when deploying new changes
const APP_VERSION = '2.0.0';
const CACHE_VERSION = `v${APP_VERSION}-${Date.now()}`;
const CACHE_NAME = `courtney-fortune-cache-${CACHE_VERSION}`;
const RUNTIME_CACHE = `courtney-fortune-runtime-${CACHE_VERSION}`;

// Assets to cache immediately on install
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
];

// Install event - cache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - aggressively clear ALL old caches and notify clients
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      // Delete all caches that don't match current version
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME && name !== RUNTIME_CACHE)
          .map((name) => {
            console.log('Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    })
    .then(() => self.clients.claim())
    .then(() => {
      // Notify all clients that cache has been cleared
      return self.clients.matchAll().then((clients) => {
        clients.forEach((client) => {
          client.postMessage({
            type: 'CACHE_UPDATED',
            version: APP_VERSION,
            message: 'New version available. The page will reload to apply updates.'
          });
        });
      });
    })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip external requests (Vimeo, Supabase, etc.)
  if (!url.origin.includes(self.location.origin)) {
    return;
  }

  // Cache-first strategy for static assets
  if (
    url.pathname.startsWith('/lovable-uploads/') ||
    url.pathname.startsWith('/assets/') ||
    url.pathname.match(/\.(woff|woff2|ttf|ico|svg|pdf|png|jpg|jpeg|gif|webp)$/)
  ) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        
        return fetch(request).then((response) => {
          // Don't cache non-successful responses
          if (!response || response.status !== 200 || response.type === 'error') {
            return response;
          }

          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseToCache);
          });

          return response;
        });
      })
    );
    return;
  }

  // Network-first strategy for HTML/API calls with runtime cache
  event.respondWith(
    fetch(request)
      .then((response) => {
        // Don't cache non-successful responses
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }

        const responseToCache = response.clone();
        caches.open(RUNTIME_CACHE).then((cache) => {
          cache.put(request, responseToCache);
        });

        return response;
      })
      .catch(() => {
        // Fallback to cache if network fails
        return caches.match(request);
      })
  );
});
