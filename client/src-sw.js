const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

// Cache HTML pages
const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// TODO: Implement asset caching
// Cache JS, CSS, and other assets with CacheFirst strategy
const assetCache = new CacheFirst({
  cacheName: 'asset-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxEntries: 50, // Adjust this number based on your needs
      maxAgeSeconds: 7 * 24 * 60 * 60, // Cache assets for one week
    }),
  ],
});

// Register route for caching assets
registerRoute(
  ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
  assetCache
);

// handle other asset types like images or fonts if needed
registerRoute(
  ({ request }) => ['image', 'font'].includes(request.destination),
  new StaleWhileRevalidate({
    cacheName: 'media-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 50, // Adjust this number based on your needs
        maxAgeSeconds: 30 * 24 * 60 * 60, // Cache media for one month
      }),
    ],
  })
);

// Optionally, implement fallback for offline
offlineFallback({
  fallbackURL: '/index.html',
});