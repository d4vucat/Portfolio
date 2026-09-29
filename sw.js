/* ════════════════════════════════════════════════
   NHL.dev — Service Worker  v3
   Strategy:
     · HTML documents  → Network-first  (always fresh when online)
     · All other assets → Cache-first   (fast repeat loads)
   Bump SW_CACHE to force a full eviction of old caches.
════════════════════════════════════════════════ */
const SW_CACHE = 'nhl-v3-static';

/* ── Install: open cache (no HTML precache → network-first handles it) ── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(SW_CACHE).then(() => self.skipWaiting())
  );
});

/* ── Activate: delete every cache that isn't ours, claim clients, then
      send SW_UPDATED so index.html auto-reloads to pick up fresh HTML ── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== SW_CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then(clients => {
        clients.forEach(c => c.postMessage({ type: 'SW_UPDATED', cache: SW_CACHE }));
      })
  );
});

/* ── Fetch ── */
self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  /* Always fetch fresh from network — APIs, fonts, CDN scripts */
  const passThrough = [
    'api.github.com',
    'github-contributions-api.jogruber.de',
    'googleapis.com',
    'gstatic.com',
    'cdnjs.cloudflare.com',
    'jsdelivr.net',
    'zenquotes.io',
    'quotable.io',
    'wttr.in',
    'ghchart.rshah.org'
  ];
  if (passThrough.some(h => url.hostname.includes(h))) return;

  const isHTML = request.headers.get('accept')?.includes('text/html');

  if (isHTML) {
    /* ── Network-first for HTML: always serve fresh markup when online ── */
    event.respondWith(
      fetch(request)
        .then(resp => {
          if (resp.ok) {
            caches.open(SW_CACHE).then(c => c.put(request, resp.clone()));
          }
          return resp;
        })
        .catch(() =>
          /* Offline fallback: serve cached HTML if available */
          caches.match(request).then(r => r || caches.match('/'))
        )
    );
  } else {
    /* ── Cache-first for assets: fast repeat loads ── */
    event.respondWith(
      caches.match(request).then(cached => {
        if (cached) return cached;
        return fetch(request).then(resp => {
          if (resp?.ok && resp.type !== 'opaque') {
            caches.open(SW_CACHE).then(c => c.put(request, resp.clone()));
          }
          return resp;
        });
      }).catch(() => caches.match('/'))
    );
  }
});
