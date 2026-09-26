// The old site shipped gatsby-plugin-offline, whose service worker keeps
// serving the cached old site (including the swap page) to returning visitors.
// Browsers re-fetch /sw.js to check for updates; this version wipes the caches,
// unregisters itself and reloads open tabs so they get the current site.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map(key => caches.delete(key)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach(client => client.navigate(client.url));
    })()
  );
});
