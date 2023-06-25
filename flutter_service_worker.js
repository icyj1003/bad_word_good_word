'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "449485f87f8f7396b1639ceea3df8169",
".git/config": "c9463e102bdf03ba97061a634d984204",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "fe8c6b59aeb163f056d69c936a3a766c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0069b288dae703e0f0c5b86e19b68c26",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fe024d1490d1cd4bc560fb43afd6ae38",
".git/logs/refs/heads/master": "0712428ee13d85e48b959d269da07d7f",
".git/logs/refs/remotes/origin/master": "6fd24c4461b9dcfa435e6c654c0e6fdf",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/15/49859f537a688adaa45169d8eb16ab52f65c11": "567a66c06e186ef01da136a139f9be3a",
".git/objects/1a/148e67f53f4285db9db4dc3c80240a7cf1e639": "f1ae95c6874ff4445437d60f0e87f9f1",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/1f2c393aa690603c0dcba2fed7b517c2997ee5": "fd557f1b13bf9855161b521c0e7662d0",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/1f/7cd4b68e344b0ecb31f0d61f0730d3b5ca97d0": "19ccba6853677634e655c21b95033729",
".git/objects/20/a63ab45a861f122652453d3fd6c6d8f8952947": "8dcad0ed9534b6eb7014793ab40aa335",
".git/objects/20/ae4e36939a0eecc9939aed055e806598502593": "b274c04dee166ba1d23f2d4b8355c15c",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/27/2ae9ed6e1a4c8b8a16fb5ab59d9325fc79d613": "4eed0b5849d5f6f57bba42c98f764266",
".git/objects/2b/42b86932e411838b2278ff39ca9e65a71c5e48": "3fddb58543ccc47ca39f85c54854e6f9",
".git/objects/2d/ffe99b8637aa4867361ae9d8531d95c3567074": "65dae2d21ce4c97bae2de649f4c60f7a",
".git/objects/31/64d7bf96a91257fc384c02d74e9b6b93cb08f6": "0bc9f5bceb76573fee5c30400ad252d2",
".git/objects/35/38f0e9056ebb453ef3b0de99bde5d608d27bc2": "efdd33e3b31f8131222e35dd4e1a22cd",
".git/objects/35/70cfacc9102f87cf6dd1e23d4ab2775c9a1cc9": "1cbe2692b4a7e49f2830b37ec56db403",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/b22a69b7f4daa5c19468f21fcd8d7e005751bd": "9c156446837cf814aef6bc756ae02fe2",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/c610e82ed3c75eb31c2cd3a76325405e7b43a0": "9df723e088175d975ce1b9e1d3b77358",
".git/objects/38/fb3ab8c0653b2d594b44856503e6204f8cefd7": "d38717bf6c63623c70734ede85f0abb8",
".git/objects/42/f776f6ade971cc121eb8f5d5c3e71847c9a54d": "2142165635c6c98506af7473eb407e8c",
".git/objects/45/89e06d7b4705b53e23afc5bcc98a63dfcd8a02": "80f7d5fb1b2f954e8ece42b16c0a5b2e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/c04efc6d0f50ac3e83b4e9b637234c1201c36f": "62c4d539bcee742a2c3e4935eb450eed",
".git/objects/4a/2600817cc104c06331c3e9e764f9d2a642e68b": "7f78c6e41465f90ee60b3276925bf8ec",
".git/objects/4a/b0c83ee9011ce677ccccd73643dd06d621162f": "b3c3cd6b892f32d3bd6dbf98e9970ad7",
".git/objects/4b/b0f62a8ab75ae4d9c9417c44d44ec0b6d53db1": "d9877577351ba71616c460da0a5585a6",
".git/objects/4f/10e1ccec31cba0aa12cbfde9cd5cb3f49890dd": "765dee7aca9ab84728aaa46e5e7f439e",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/55/7984734a05df1ec8b525583d12b20947148b97": "8d61717f3303d844d93b15b3c2600b3b",
".git/objects/62/117198f7670fe42e765fa793799065b4fdc878": "1b35e0b5f8237e7a3f2248f8952f9894",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/66/a25b90137fadaccb6b54bdfbe10cc0aeb38004": "01da72b9228fea8ccb7778f5dd5cbb1e",
".git/objects/6e/c1895d2c0a84c6046a5681d284561ac7793094": "58e2394a4f94bb6c58829254261397d6",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/78/379ce148cf37abc8af66ecd421a10aa24e881e": "4e62959c2f902937b1bb9ca439c905de",
".git/objects/7f/c6bad668085057dd09f907e77c21ac760746f1": "10b9123ae6f18fcdf25b1d11cf9e8b67",
".git/objects/80/42d9c17c8fbf977d615b4cb41b0320ff4b8b2d": "d4337c8bf6a6645748b0e3676a7db9fb",
".git/objects/83/d6d4f534aba963e7fb448c738b4caeb6d9d9ad": "236dfea04241177f49b440f16c3576fa",
".git/objects/86/4c1a593518391ef7345c6806389d039ee48f49": "c9f78499de79ceaedfd6bb379cc9f979",
".git/objects/87/fbbb9089598f41aa07ed0f8e7858c06769d141": "f1d20a4239806c473d88686f30728c17",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/93/9cd4d52131ed93949aeb56ea072b7b7461b775": "b3983b6244437574a00f60339eb6d097",
".git/objects/a0/e046fc36330c5f6acd90f7d59b9943172d8843": "72eb8c67cc0dc5649988b09ad900aa07",
".git/objects/a3/8505851e69cf5b9c303cd250c85130c2940a45": "c9e9700efb7fa6524a8a193416d47f87",
".git/objects/ac/5c23fd65313d93fb52454e8e3533abd47fd3d0": "c00405b6aa0df6892a3aa26be4b26fbc",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/af/82d005f3d01e25793bf295b0d670cb5ab50c55": "c553697f2408a2d0c51c119926c09903",
".git/objects/b0/f01d4658861cea112b22974cc426e308bd2e63": "cd16c7fa32ac40b85744aeb54c2564f6",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b4/a5d4e9efdff40628848c52b5c17196acd39642": "5f38cc89677063687900ebf7e77b21a1",
".git/objects/b6/cc1b92503f2bf9f520d32e684cf4513107b399": "36d16dfb58394c884d9432f8c2a67f91",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c0/ee619d13f59d557463a0dc10ad180a30aaba46": "e39b9fa8bbae4e7002200b61721f1f8d",
".git/objects/c3/8d9455d8787d4335fd4cbf274e7506145a05e4": "004d7f77ae626c0f173e000711f63d36",
".git/objects/c7/105b8e31be1f4b74cee38dca488f90d9aca13b": "dbb28beeb5feef110ba616bb68d1d0f6",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/75f6a5e0156d49db654a2e490a88853d6b5452": "62463bf03cc5fb9d492f5c2d12c98000",
".git/objects/e4/a44d74fed366797da2994761dc8d2fd6804b5d": "053db8bf6e4dfc5f4df3bc1eb48865a5",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e8/80b9014bed98e5fdf08c088b029495517932cd": "7c56a253481c46aea74a29792d1ac92a",
".git/objects/ea/ce0c356739fb56957afa935c98c309973c50d8": "2b8fb0b37a018aff65247fd1a6dd6315",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/263298d86c77e159d4f05bc8a26e9719fb01e3": "5ef288aacff3cf62cc212d6bd5bf9f63",
".git/objects/f3/4d694287b0f2fda97e3565f7afc7fc806cee67": "090ccd66eda2ef4aca8806363f3dcb25",
".git/objects/f3/58b1471fceb29bd5dfe174fefb29ba5c0f25bc": "d2d4568a57c2388095bcb89d9055b603",
".git/objects/f9/3391caa1b4a8445bc400138d37eac644f8eee1": "ecee5144f94f90153303b1ddba2936db",
".git/objects/fb/28b55842e04299a3405212c0fc81d29b0fcea3": "004b5c3d2159f79f312b24f558540fac",
".git/objects/fd/1e3f32ab503e9543735d9d48f9330998150fd4": "5f905560a5ea2d0f5566a3433d2967df",
".git/objects/fd/9a183d1f54bd971df34f02fab8a18627e78ae4": "e7cecc25d992568beb66827f2591d20a",
".git/refs/heads/master": "00d7f5c69588cec4229d209dc3d5030a",
".git/refs/remotes/origin/master": "00d7f5c69588cec4229d209dc3d5030a",
"assets/AssetManifest.json": "42034a11fd1a5a98f8b2254837f7513f",
"assets/AssetManifest.smcbin": "c1fbe6e2b07be51a4d1da8e7897d1b2c",
"assets/assets/words.txt": "2fcd395a423c4f38b41310cbaf4c1130",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "64eb3ed23822ffa27e5e081852e62a6e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a2c4621126a81723de9c7a0c02092089",
"/": "a2c4621126a81723de9c7a0c02092089",
"main.dart.js": "3bdae1ca9f655fe34c5172b5c7b7a2c3",
"manifest.json": "ac29e5a763d5b478292685b64077b42e",
"version.json": "1dd9936dfc73260063a00ee144e6d85a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
