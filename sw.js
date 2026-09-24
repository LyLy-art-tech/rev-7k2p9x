/* Réseau d'abord, cache en secours : le site se met à jour tout seul,
   et continue de fonctionner hors connexion. */
const CACHE = 'revisions-v3';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icone.png', 'icone-180.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if(e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then(res => { const cp = res.clone(); caches.open(CACHE).then(c => c.put(e.request, cp)); return res; })
      .catch(() => caches.match(e.request).then(r => r || caches.match('index.html')))
  );
});
