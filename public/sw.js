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

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-aa1f2d01cb6b46dfe620.js"
  },
  {
    "url": "app-d543638b3d02d51d565e.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-554b9a695eb29cca4f78.js"
  },
  {
    "url": "index.html",
    "revision": "8b21a11065d3b9739a84432b1eff73cf"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "73c7332966c2311b43ffa1ed578c0ad5"
  },
  {
    "url": "3.5b45ca12df3e7aa2ab91.css"
  },
  {
    "url": "1.ec4af2b85f6e8b7b01e2.css"
  },
  {
    "url": "0.996290fd3efb0f900abd.css"
  },
  {
    "url": "component---src-pages-index-jsx-ca811d37e8c652f4f42a.js"
  },
  {
    "url": "2-f1ac7eed66141fc92f3f.js"
  },
  {
    "url": "0-f538097f4393b4f08fb4.js"
  },
  {
    "url": "3-6a7f571d55f7c8de61c7.js"
  },
  {
    "url": "1-0c2d0a0e57f4a359de12.js"
  },
  {
    "url": "static/d/191/path---index-6a9-TxmwpQFqDAACVe4GjcQovq4Zhfo.json",
    "revision": "902d1a7a39de31df7d91c9e5fb43d9d5"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "f0901f94d7f7c0af191e8bb2607f1371"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});