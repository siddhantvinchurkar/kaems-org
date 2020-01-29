/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "87827ca3ff1e5ed50baadd8ce9e66c14"
  },
  {
    "url": "index.html",
    "revision": "eda49b52b4d62306aa4c7dac8f909779"
  },
  {
    "url": "manifest.json",
    "revision": "4241034aef62eae90c513869ca4cef97"
  },
  {
    "url": "privacy/index.html",
    "revision": "df656041b4d6d201bdd6f2e764b53f9e"
  },
  {
    "url": "resources/images/404.webp",
    "revision": "0d6ca04f8ceb6d96213aaa60d23266be"
  },
  {
    "url": "resources/images/contact_images/amitha_anand_512.webp",
    "revision": "c05c996d99684072560d428f32f587cf"
  },
  {
    "url": "resources/images/contact_images/suchetha_kuloor_512.webp",
    "revision": "361da3b2629945c925dd0e9c872e0327"
  },
  {
    "url": "resources/images/icons/favicon_144.png",
    "revision": "56a84827ede19249f9f38e12033b2cfd"
  },
  {
    "url": "resources/images/icons/favicon_192.png",
    "revision": "788fbe7428d8f5dd723180b9ff286280"
  },
  {
    "url": "resources/images/icons/favicon_192.webp",
    "revision": "19bfffdb229be915b1f4cfe9e4541d9c"
  },
  {
    "url": "resources/images/icons/favicon_48.png",
    "revision": "35ade1564bb29c8a9535e3abc141442c"
  },
  {
    "url": "resources/images/icons/favicon_512.png",
    "revision": "3cdd7c4cbbc5073a55fbe5c257ff8b2c"
  },
  {
    "url": "resources/images/icons/favicon_512.webp",
    "revision": "35414a30e9b5a3ffffe7951416131d7d"
  },
  {
    "url": "resources/images/icons/favicon_72.png",
    "revision": "a948e08a7ae9c6d81df9c86605f776d5"
  },
  {
    "url": "resources/images/icons/favicon_96.png",
    "revision": "5751ff8e77ecb7f3acb78bbdada41666"
  },
  {
    "url": "resources/images/icons/og_512.jpg",
    "revision": "1e3579ffa3b7de6ecd7f7e3cb95c8a5a"
  },
  {
    "url": "resources/images/image_1/1366x768.webp",
    "revision": "852ea6442a5d4129d9f8e850f89cbe99"
  },
  {
    "url": "resources/images/image_1/1920x1080.webp",
    "revision": "28d06cfe9f6cf9097186c6aaf28884f7"
  },
  {
    "url": "resources/images/image_1/432x768.webp",
    "revision": "47ba2a8b1a608a19859c9a526aad6ef6"
  },
  {
    "url": "resources/scripts/firebase-analytics.js",
    "revision": "326350755aa2a2bf3c73ae9e75886d34"
  },
  {
    "url": "resources/scripts/firebase-app.js",
    "revision": "308a195c508c4d00cf441236020a6292"
  },
  {
    "url": "resources/scripts/jquery.min.js",
    "revision": "8f2bd55d31c72d762702c6023f425c5d"
  },
  {
    "url": "resources/scripts/lazysizes.min.js",
    "revision": "d8513e7860f747ccf55c52308943beab"
  },
  {
    "url": "resources/scripts/main.js",
    "revision": "37ead03cc19079432bca65b4e8b93615"
  },
  {
    "url": "resources/scripts/materialize-passive-listener-mod.min.js",
    "revision": "b339732d61f433f326d5f6279626e5aa"
  },
  {
    "url": "resources/scripts/sweetalert.js",
    "revision": "609aa78f6cbd0b9a45a3b1f893c99db8"
  },
  {
    "url": "resources/sounds/hmm.wav",
    "revision": "14784a2ef1c717eb2ae055ea5703f415"
  },
  {
    "url": "resources/styles/main.css",
    "revision": "9c70a33fe35271e98b5a5a804564616a"
  },
  {
    "url": "resources/styles/materialize.min.css",
    "revision": "1035ecff3f17989aa89f6bb37efa21ed"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
