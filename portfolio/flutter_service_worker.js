'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "795e5ce8ba4bd5e1ad96043dfbb31123",
"assets/assets/images/projects/client.png": "b0598c59e7e26b9aaae7090e6a539a1f",
"assets/assets/images/projects/employee.png": "1c9a73d17e3f61b0b1343c3b31b0ca72",
"assets/assets/images/projects/server.png": "ac3d070ad513f867aa8e304c35415b6d",
"assets/assets/images/social/email.png": "7a97194d3c075caa1a2f2fb89f793d4e",
"assets/assets/images/social/github.png": "46fd5ca3c4a5cbcad97fd9b11d845f48",
"assets/assets/images/social/instagram.png": "db9e28760b4c72ee51d5c2c7b0772823",
"assets/assets/images/social/linkedin-logo.png": "95e6c045dd5f8ea3ed14fc2de308d115",
"assets/assets/images/social/medium.png": "276ae11521896bd9a529e02aad79ff71",
"assets/assets/images/technology/android.png": "e140305f2fa06fc41f0e98a41eb78add",
"assets/assets/images/technology/c.png": "6801cc7be44b06f69f9ecd6f89caff01",
"assets/assets/images/technology/dart.png": "153857b7cec1036f2aea206e5d8af515",
"assets/assets/images/technology/docker.png": "8606c08f552c606e3582ec61c622cbb7",
"assets/assets/images/technology/fastapi.png": "7db7c635cbab18349b30b4f413a05aa3",
"assets/assets/images/technology/firebase.png": "d139ba1e59d9bcc1ed86617547dd51ee",
"assets/assets/images/technology/flask.png": "6766bf31c556d3b6e0e9326404ca37f2",
"assets/assets/images/technology/flutter.png": "47e4c5ea380dc3b9241ee7b4f8b65c20",
"assets/assets/images/technology/git.png": "f05758fc42f6d8e2e65f8fcdd9bb9bee",
"assets/assets/images/technology/java.png": "68d4aa2b277b3cbf8d879fabf157f587",
"assets/assets/images/technology/kotlin.png": "f8808e95bd13ff8cd63b95634f9da4da",
"assets/assets/images/technology/linux.png": "a0be2cf55085f4bd74b26bda029b635d",
"assets/assets/images/technology/mqtt.png": "eba67a6f1ce9cb16c4902b60baf1559f",
"assets/assets/images/technology/onnx.png": "1b3139ed0d78890d1972b7a6665a55ba",
"assets/assets/images/technology/psql.png": "e6303633d26c3426c4c3d679af6c47c5",
"assets/assets/images/technology/python.png": "6606c48fbf49fc629449aa11170b8c1c",
"assets/assets/images/technology/raws/1200px-C_Programming_Language.svg.png": "875e243185a83046c4bd0711102e9b86",
"assets/assets/images/technology/raws/5847f981cef1014c0b5e48be.png": "ab40d02f0aa8bf85de12fd45bda5b0c0",
"assets/assets/images/technology/raws/58480979cef1014c0b5e4901.png": "4eb1819dc863ef386e09d86e9f482a9f",
"assets/assets/images/technology/raws/58480e82cef1014c0b5e4927.png": "c204f91a3adf3d731309be986c4d1960",
"assets/assets/images/technology/raws/Android_Studio_Icon_3.6.svg.png": "be2f304fca36150ba5d624eac0160f41",
"assets/assets/images/technology/raws/Dart-logo.png": "a675cb93b75d5f1656c920dceecdcb38",
"assets/assets/images/technology/raws/docker-logo-CF97D0124B-seeklogo.com.png": "d2b89813eec93a004293dc8a723803b6",
"assets/assets/images/technology/raws/fastapi-logo-541BAA112F-seeklogo.com.png": "257a1e7655c3fa4f163b641ddbafef38",
"assets/assets/images/technology/raws/Kotlin_Icon.png": "3f3182e761cf45dcd05a2e745f917ce4",
"assets/assets/images/technology/raws/mqtt.png": "43eceaa7b9afdba40e8788fc850ffb18",
"assets/assets/images/technology/raws/onnx-icon-color.png": "f8a3889c8f96c8b5bbb5c09a0b7e3dc8",
"assets/assets/images/technology/raws/Postgresql_elephant.svg.png": "cb8612b24825ecab4dd04864a8b60baa",
"assets/assets/images/technology/raws/Tensorflow_logo.svg.png": "70c4d5a7b3960b4fcd964048b7e6f656",
"assets/assets/images/technology/tensorflow.png": "72982586fe0fab95aab0fc4b27715bfc",
"assets/assets/main.png": "e876f53769d4c7131adc21c3fbb9a8da",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "91b608e4a24a155dee40f53d0b12d8c0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "89314500a6a963ccd40de1f349429ae7",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a2e66bdbd46562ee4359eb0f61ae5d63",
"/": "a2e66bdbd46562ee4359eb0f61ae5d63",
"main.dart.js": "36ebb67f9ba598875273cff654d40e4f",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
