const CACHE_NAME = 'fishing-record-v1.1.0';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  // 地圖圖磚數量龐大，不寫入離線快取，避免佔滿手機空間。
  if (url.hostname.endsWith('tile.openstreetmap.org')) {
    event.respondWith(fetch(event.request).catch(() => Response.error()));
    return;
  }
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      const copy = response.clone();
      // Keep app assets and the Leaflet CDN library before returning the response.
      if (response.ok || response.type === 'opaque') {
        return caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)).then(() => response).catch(() => response);
      }
      return response;
    }).catch(() => event.request.mode === 'navigate' ? caches.match('./index.html') : Response.error()))
  );
});
