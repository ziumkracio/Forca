const cacheName = 'forca-v1';
const filesToCache = [
  '/Forca/',
  '/Forca/index.html',
  '/Forca/style.css',
  '/Forca/script.js',
  '/Forca/manifest.json',
  '/Forca/icon-192.png',
  '/Forca/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
