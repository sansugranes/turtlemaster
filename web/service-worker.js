//importScripts('http://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

const cacheName = 'cache-v1';
const resourcesToPrecache = [
    '/',
    '/index.html',
    '/src/media/turtle.gif',
    '/src/js/database.js',
    '/src/js/start.js',
    '/src/js/turtle.js',
    '/src/js/select.js',
    '/src/js/eventDispatcher.js',
    '/src/js/main.js',
    '/src/js/modules/threedView.js',
    '/src/js/lib/GLTFLoader.js',
    '/src/js/lib/utf8.js',
    '/src/html/customLogin.html',
    '/src/html/login.html',
    '/src/html/select.html',
    '/src/html/threedView.html',
    '/src/css/basic.css',
    '/src/css/main.css',
    '/src/css/select.css',
    'https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css'
];

self.addEventListener('install', event => {
    console.log('Service worker install event!');
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(resourcesToPrecache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request).then(cachedResponse => {
        return cachedResponse || fetch(event.request);
    }));
});

// if (workbox) {
//     console.log("Yay! Workbox is loaded !");
//     workbox.precaching.precacheAndRoute([]);
//     /*  cache images in the e.g others folder; edit to other folders you got
//        and config in the sw-config.js file
//         */
//     workbox.routing.registerRoute(
//         /(.*)others(.*)\.(?:png|gif|jpg)/,
//         new workbox.strategies.CacheFirst({
//             cacheName: "images",
//             plugins: [
//                 new workbox.expiration.ExpirationPlugin({
//                     maxEntries: 50,
//                     maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
//                 })
//             ]
//         })
//     );
//     /* Make your JS and CSS âš¡ fast by returning the assets from the cache,
//   while making sure they are updated in the background for the next use.
//   */
//     workbox.routing.registerRoute(
//         // cache js, css, scc files
//         /.*\.(?:css|js|scss|)/,
//         // use cache but update in the background ASAP
//         new workbox.strategies.StaleWhileRevalidate({
//             // use a custom cache name
//             cacheName: "assets",
//         })
//     );
//     // cache google fonts
//     workbox.routing.registerRoute(
//         new RegExp("https://fonts.(?:googleapis|gstatic).com/(.*)"),
//         new workbox.strategies.CacheFirst({
//             cacheName: "google-fonts",
//             plugins: [
//                 new workbox.cacheableResponse.CacheableResponsePlugin({
//                     statuses: [0, 200],
//                 }),
//             ],
//         })
//     );
//     // add offline analytics
//     workbox.googleAnalytics.initialize();
//     /* Install a new service worker and have it update
//     and control a web page as soon as possible
//     */
//     workbox.core.skipWaiting();
//     workbox.core.clientsClaim();
// } else {
//     console.log("Oops! Workbox didn't load ðŸ‘º");
// }