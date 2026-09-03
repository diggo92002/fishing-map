const CACHE_NAME = 'fishing-log-pwa-v0.25.0';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/icons/apple-touch-icon.png',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/icon-maskable-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('fishing-log-pwa-') && k !== CACHE_NAME).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // OpenStreetMap 圖磚保持一般網路請求，不做離線大量快取。
  if (url.hostname.includes('tile.openstreetmap.org')) return;

  // 本站：cache-first，背景更新。
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(req).then(cached => {
        const fresh = fetch(req).then(resp => {
          if (resp && resp.ok) caches.open(CACHE_NAME).then(c => c.put(req, resp.clone()));
          return resp;
        }).catch(() => cached);
        return cached || fresh;
      })
    );
    return;
  }

  // Leaflet CDN：首次成功載入後快取，之後可離線開啟介面；地圖圖磚仍需網路。
  if (url.hostname === 'unpkg.com') {
    event.respondWith(
      caches.match(req).then(cached => cached || fetch(req).then(resp => {
        const copy = resp.clone();
        caches.open(CACHE_NAME).then(c => c.put(req, copy));
        return resp;
      }))
    );
  }
});
