self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('forca-cache').then(function(cache) {
      return cache.addAll([
        'Forca_PWA.html',
        'manifest.json',
        'service-worker.js',
        'arcade-game-collect-point-epic-stock-media-1-00-00.mp3',
        'error-warning-login-denied-132113 (2).mp3',
        'game-over-arcade-6435.mp3',
        'game-level-complete-143022.mp3'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});