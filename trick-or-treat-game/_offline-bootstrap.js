(() => {
  "use strict";
  const RUNTIME_MAP = {"https://teresaromero.github.io/trick-or-treat-game/js/icons.js":"_assets/2c9522a4e0f369b507eb.js","/trick-or-treat-game/js/icons.js":"_assets/2c9522a4e0f369b507eb.js","/js/icons.js":"_assets/2c9522a4e0f369b507eb.js","/icons.js":"_assets/2c9522a4e0f369b507eb.js","https://teresaromero.github.io/trick-or-treat-game/js/sound.js":"_assets/c14ff34ca8753e4ac204.js","/trick-or-treat-game/js/sound.js":"_assets/c14ff34ca8753e4ac204.js","/js/sound.js":"_assets/c14ff34ca8753e4ac204.js","/sound.js":"_assets/c14ff34ca8753e4ac204.js","https://teresaromero.github.io/trick-or-treat-game/js/config.js":"_assets/a46677b3b0b7d2185a06.js","/trick-or-treat-game/js/config.js":"_assets/a46677b3b0b7d2185a06.js","/js/config.js":"_assets/a46677b3b0b7d2185a06.js","/config.js":"_assets/a46677b3b0b7d2185a06.js","https://teresaromero.github.io/trick-or-treat-game/assets/img/001.png":"_assets/25c384ccfddc73f5cfc7.png","/trick-or-treat-game/assets/img/001.png":"_assets/25c384ccfddc73f5cfc7.png","/assets/img/001.png":"_assets/25c384ccfddc73f5cfc7.png","/img/001.png":"_assets/25c384ccfddc73f5cfc7.png","/001.png":"_assets/25c384ccfddc73f5cfc7.png","https://teresaromero.github.io/trick-or-treat-game/js/board.js":"_assets/0597cc6287d590a5eeaf.js","/trick-or-treat-game/js/board.js":"_assets/0597cc6287d590a5eeaf.js","/js/board.js":"_assets/0597cc6287d590a5eeaf.js","/board.js":"_assets/0597cc6287d590a5eeaf.js","https://teresaromero.github.io/trick-or-treat-game/js/assets.js":"_assets/359772f710deb8eb5a0e.js","/trick-or-treat-game/js/assets.js":"_assets/359772f710deb8eb5a0e.js","/js/assets.js":"_assets/359772f710deb8eb5a0e.js","/assets.js":"_assets/359772f710deb8eb5a0e.js","https://teresaromero.github.io/trick-or-treat-game/js/storage.js":"_assets/faa1d3eadd8d0b8645e4.js","/trick-or-treat-game/js/storage.js":"_assets/faa1d3eadd8d0b8645e4.js","/js/storage.js":"_assets/faa1d3eadd8d0b8645e4.js","/storage.js":"_assets/faa1d3eadd8d0b8645e4.js","https://teresaromero.github.io/trick-or-treat-game/js/item.js":"_assets/fbb515aac184f709cdce.js","/trick-or-treat-game/js/item.js":"_assets/fbb515aac184f709cdce.js","/js/item.js":"_assets/fbb515aac184f709cdce.js","/item.js":"_assets/fbb515aac184f709cdce.js","https://teresaromero.github.io/trick-or-treat-game/css/index.css":"_assets/310cf5b8ec243c3b5b43.css","/trick-or-treat-game/css/index.css":"_assets/310cf5b8ec243c3b5b43.css","/css/index.css":"_assets/310cf5b8ec243c3b5b43.css","/index.css":"_assets/310cf5b8ec243c3b5b43.css","https://teresaromero.github.io/trick-or-treat-game/js/analytics.js":"_assets/aefc7a39574b18794dfa.js","/trick-or-treat-game/js/analytics.js":"_assets/aefc7a39574b18794dfa.js","/js/analytics.js":"_assets/aefc7a39574b18794dfa.js","/analytics.js":"_assets/aefc7a39574b18794dfa.js","https://teresaromero.github.io/trick-or-treat-game/js/game.js":"_assets/218f1052c8d6b7fb8381.js","/trick-or-treat-game/js/game.js":"_assets/218f1052c8d6b7fb8381.js","/js/game.js":"_assets/218f1052c8d6b7fb8381.js","/game.js":"_assets/218f1052c8d6b7fb8381.js","https://teresaromero.github.io/trick-or-treat-game/js/hud.js":"_assets/76e76b757a9951c6ffe7.js","/trick-or-treat-game/js/hud.js":"_assets/76e76b757a9951c6ffe7.js","/js/hud.js":"_assets/76e76b757a9951c6ffe7.js","/hud.js":"_assets/76e76b757a9951c6ffe7.js","https://teresaromero.github.io/trick-or-treat-game/js/effects.js":"_assets/5a1df8d6830319b17276.js","/trick-or-treat-game/js/effects.js":"_assets/5a1df8d6830319b17276.js","/js/effects.js":"_assets/5a1df8d6830319b17276.js","/effects.js":"_assets/5a1df8d6830319b17276.js","https://teresaromero.github.io/trick-or-treat-game/js/screens.js":"_assets/c8eef503e4128f9ddb7b.js","/trick-or-treat-game/js/screens.js":"_assets/c8eef503e4128f9ddb7b.js","/js/screens.js":"_assets/c8eef503e4128f9ddb7b.js","/screens.js":"_assets/c8eef503e4128f9ddb7b.js","https://teresaromero.github.io/trick-or-treat-game/assets/fonts/creepster-latin-400.woff2":"_assets/6afd8405a83ad5351f23.woff2","/trick-or-treat-game/assets/fonts/creepster-latin-400.woff2":"_assets/6afd8405a83ad5351f23.woff2","/assets/fonts/creepster-latin-400.woff2":"_assets/6afd8405a83ad5351f23.woff2","/fonts/creepster-latin-400.woff2":"_assets/6afd8405a83ad5351f23.woff2","/creepster-latin-400.woff2":"_assets/6afd8405a83ad5351f23.woff2","https://teresaromero.github.io/trick-or-treat-game/js/main.js":"_assets/bce6582085c164556caa.js","/trick-or-treat-game/js/main.js":"_assets/bce6582085c164556caa.js","/js/main.js":"_assets/bce6582085c164556caa.js","/main.js":"_assets/bce6582085c164556caa.js","https://teresaromero.github.io/trick-or-treat-game/js/session.js":"_assets/b11fd20c2a0f54644368.js","/trick-or-treat-game/js/session.js":"_assets/b11fd20c2a0f54644368.js","/js/session.js":"_assets/b11fd20c2a0f54644368.js","/session.js":"_assets/b11fd20c2a0f54644368.js","https://teresaromero.github.io/trick-or-treat-game/assets/fonts/arvo-latin-400.woff2":"_assets/8d344107e41e88242281.woff2","/trick-or-treat-game/assets/fonts/arvo-latin-400.woff2":"_assets/8d344107e41e88242281.woff2","/assets/fonts/arvo-latin-400.woff2":"_assets/8d344107e41e88242281.woff2","/fonts/arvo-latin-400.woff2":"_assets/8d344107e41e88242281.woff2","/arvo-latin-400.woff2":"_assets/8d344107e41e88242281.woff2","https://gc.zgo.at/count.js":"_assets/792b7abd26c1fb6ae629.js","/count.js":"_assets/792b7abd26c1fb6ae629.js","https://teresaromero.github.io/trick-or-treat-game/assets/img/002.png":"_assets/96ba4602d24e5b59bf43.png","/trick-or-treat-game/assets/img/002.png":"_assets/96ba4602d24e5b59bf43.png","/assets/img/002.png":"_assets/96ba4602d24e5b59bf43.png","/img/002.png":"_assets/96ba4602d24e5b59bf43.png","/002.png":"_assets/96ba4602d24e5b59bf43.png","https://teresaromero.github.io/trick-or-treat-game/assets/img/004.png":"_assets/8894da1f3361d074b6f6.png","/trick-or-treat-game/assets/img/004.png":"_assets/8894da1f3361d074b6f6.png","/assets/img/004.png":"_assets/8894da1f3361d074b6f6.png","/img/004.png":"_assets/8894da1f3361d074b6f6.png","/004.png":"_assets/8894da1f3361d074b6f6.png","https://teresaromero.github.io/trick-or-treat-game/assets/img/003.png":"_assets/adf7e3595a19b086f71d.png","/trick-or-treat-game/assets/img/003.png":"_assets/adf7e3595a19b086f71d.png","/assets/img/003.png":"_assets/adf7e3595a19b086f71d.png","/img/003.png":"_assets/adf7e3595a19b086f71d.png","/003.png":"_assets/adf7e3595a19b086f71d.png","https://teresaromero.github.io/trick-or-treat-game/assets/img/005.png":"_assets/d213273905ef339fa62c.png","/trick-or-treat-game/assets/img/005.png":"_assets/d213273905ef339fa62c.png","/assets/img/005.png":"_assets/d213273905ef339fa62c.png","/img/005.png":"_assets/d213273905ef339fa62c.png","/005.png":"_assets/d213273905ef339fa62c.png","https://teresaromero.github.io/trick-or-treat-game/assets/img/006.png":"_assets/c193674559a1cac87578.png","/trick-or-treat-game/assets/img/006.png":"_assets/c193674559a1cac87578.png","/assets/img/006.png":"_assets/c193674559a1cac87578.png","/img/006.png":"_assets/c193674559a1cac87578.png","/006.png":"_assets/c193674559a1cac87578.png","https://teresaromero.github.io/trick-or-treat-game/assets/img/007.png":"_assets/6a9c7ea79a7544fcad74.png","/trick-or-treat-game/assets/img/007.png":"_assets/6a9c7ea79a7544fcad74.png","/assets/img/007.png":"_assets/6a9c7ea79a7544fcad74.png","/img/007.png":"_assets/6a9c7ea79a7544fcad74.png","/007.png":"_assets/6a9c7ea79a7544fcad74.png","https://teresaromero.github.io/trick-or-treat-game/assets/img/008.png":"_assets/82150b0d959bd4610899.png","/trick-or-treat-game/assets/img/008.png":"_assets/82150b0d959bd4610899.png","/assets/img/008.png":"_assets/82150b0d959bd4610899.png","/img/008.png":"_assets/82150b0d959bd4610899.png","/008.png":"_assets/82150b0d959bd4610899.png","https://teresaromero.github.io/trick-or-treat-game/assets/img/009.png":"_assets/2a6c4f1f27998b6a4ab3.png","/trick-or-treat-game/assets/img/009.png":"_assets/2a6c4f1f27998b6a4ab3.png","/assets/img/009.png":"_assets/2a6c4f1f27998b6a4ab3.png","/img/009.png":"_assets/2a6c4f1f27998b6a4ab3.png","/009.png":"_assets/2a6c4f1f27998b6a4ab3.png","https://teresaromero.github.io/trick-or-treat-game/assets/img/010.png":"_assets/ad21da65d60fe85b125f.png","/trick-or-treat-game/assets/img/010.png":"_assets/ad21da65d60fe85b125f.png","/assets/img/010.png":"_assets/ad21da65d60fe85b125f.png","/img/010.png":"_assets/ad21da65d60fe85b125f.png","/010.png":"_assets/ad21da65d60fe85b125f.png","https://teresaromero.github.io/trick-or-treat-game/assets/img/012.png":"_assets/b0fab130e4899421502e.png","/trick-or-treat-game/assets/img/012.png":"_assets/b0fab130e4899421502e.png","/assets/img/012.png":"_assets/b0fab130e4899421502e.png","/img/012.png":"_assets/b0fab130e4899421502e.png","/012.png":"_assets/b0fab130e4899421502e.png","https://teresaromero.github.io/trick-or-treat-game/assets/img/013.png":"_assets/3abf557b3612ce6efd5e.png","/trick-or-treat-game/assets/img/013.png":"_assets/3abf557b3612ce6efd5e.png","/assets/img/013.png":"_assets/3abf557b3612ce6efd5e.png","/img/013.png":"_assets/3abf557b3612ce6efd5e.png","/013.png":"_assets/3abf557b3612ce6efd5e.png","https://teresaromero.github.io/trick-or-treat-game/assets/img/011.png":"_assets/f0514ea92888b7b42a5b.png","/trick-or-treat-game/assets/img/011.png":"_assets/f0514ea92888b7b42a5b.png","/assets/img/011.png":"_assets/f0514ea92888b7b42a5b.png","/img/011.png":"_assets/f0514ea92888b7b42a5b.png","/011.png":"_assets/f0514ea92888b7b42a5b.png","https://teresaromero.github.io/trick-or-treat-game/assets/img/014.png":"_assets/7e2abf083f7b8300f272.png","/trick-or-treat-game/assets/img/014.png":"_assets/7e2abf083f7b8300f272.png","/assets/img/014.png":"_assets/7e2abf083f7b8300f272.png","/img/014.png":"_assets/7e2abf083f7b8300f272.png","/014.png":"_assets/7e2abf083f7b8300f272.png","https://teresaromero.github.io/trick-or-treat-game/assets/img/016.png":"_assets/d597d88a8c9e8419a7e5.png","/trick-or-treat-game/assets/img/016.png":"_assets/d597d88a8c9e8419a7e5.png","/assets/img/016.png":"_assets/d597d88a8c9e8419a7e5.png","/img/016.png":"_assets/d597d88a8c9e8419a7e5.png","/016.png":"_assets/d597d88a8c9e8419a7e5.png","https://teresaromero.github.io/trick-or-treat-game/assets/img/001-faux.png":"_assets/df6d53bee901419fa7a8.png","/trick-or-treat-game/assets/img/001-faux.png":"_assets/df6d53bee901419fa7a8.png","/assets/img/001-faux.png":"_assets/df6d53bee901419fa7a8.png","/img/001-faux.png":"_assets/df6d53bee901419fa7a8.png","/001-faux.png":"_assets/df6d53bee901419fa7a8.png","https://teresaromero.github.io/trick-or-treat-game/assets/img/015.png":"_assets/988d3b1d3e6ed464366b.png","/trick-or-treat-game/assets/img/015.png":"_assets/988d3b1d3e6ed464366b.png","/assets/img/015.png":"_assets/988d3b1d3e6ed464366b.png","/img/015.png":"_assets/988d3b1d3e6ed464366b.png","/015.png":"_assets/988d3b1d3e6ed464366b.png","https://teresaromero.github.io/trick-or-treat-game/assets/img/002-faux.png":"_assets/d20f4eaf5560bd3e3044.png","/trick-or-treat-game/assets/img/002-faux.png":"_assets/d20f4eaf5560bd3e3044.png","/assets/img/002-faux.png":"_assets/d20f4eaf5560bd3e3044.png","/img/002-faux.png":"_assets/d20f4eaf5560bd3e3044.png","/002-faux.png":"_assets/d20f4eaf5560bd3e3044.png","https://teresaromero.github.io/trick-or-treat-game/assets/img/003-faux.png":"_assets/b2f01094097adb89e129.png","/trick-or-treat-game/assets/img/003-faux.png":"_assets/b2f01094097adb89e129.png","/assets/img/003-faux.png":"_assets/b2f01094097adb89e129.png","/img/003-faux.png":"_assets/b2f01094097adb89e129.png","/003-faux.png":"_assets/b2f01094097adb89e129.png","https://teresaromero.github.io/trick-or-treat-game/assets/img/004-faux.png":"_assets/8963125445bd2913bab7.png","/trick-or-treat-game/assets/img/004-faux.png":"_assets/8963125445bd2913bab7.png","/assets/img/004-faux.png":"_assets/8963125445bd2913bab7.png","/img/004-faux.png":"_assets/8963125445bd2913bab7.png","/004-faux.png":"_assets/8963125445bd2913bab7.png","https://teresaromero.github.io/trick-or-treat-game/assets/img/005-faux.png":"_assets/f5d948a23074744283b1.png","/trick-or-treat-game/assets/img/005-faux.png":"_assets/f5d948a23074744283b1.png","/assets/img/005-faux.png":"_assets/f5d948a23074744283b1.png","/img/005-faux.png":"_assets/f5d948a23074744283b1.png","/005-faux.png":"_assets/f5d948a23074744283b1.png","https://teresaromero.github.io/trick-or-treat-game/assets/img/006-faux.png":"_assets/7b0a4d2e60b7921ec322.png","/trick-or-treat-game/assets/img/006-faux.png":"_assets/7b0a4d2e60b7921ec322.png","/assets/img/006-faux.png":"_assets/7b0a4d2e60b7921ec322.png","/img/006-faux.png":"_assets/7b0a4d2e60b7921ec322.png","/006-faux.png":"_assets/7b0a4d2e60b7921ec322.png","https://teresaromero.github.io/trick-or-treat-game/assets/img/fog1.webp":"_assets/d4d9e7b0f62facfc2ece.webp","/trick-or-treat-game/assets/img/fog1.webp":"_assets/d4d9e7b0f62facfc2ece.webp","/assets/img/fog1.webp":"_assets/d4d9e7b0f62facfc2ece.webp","/img/fog1.webp":"_assets/d4d9e7b0f62facfc2ece.webp","/fog1.webp":"_assets/d4d9e7b0f62facfc2ece.webp","https://teresaromero.github.io/trick-or-treat-game/assets/img/007-faux.png":"_assets/c8983366350128716989.png","/trick-or-treat-game/assets/img/007-faux.png":"_assets/c8983366350128716989.png","/assets/img/007-faux.png":"_assets/c8983366350128716989.png","/img/007-faux.png":"_assets/c8983366350128716989.png","/007-faux.png":"_assets/c8983366350128716989.png","https://teresaromero.github.io/trick-or-treat-game/assets/img/fog2.webp":"_assets/543e79eb2dfd3439acae.webp","/trick-or-treat-game/assets/img/fog2.webp":"_assets/543e79eb2dfd3439acae.webp","/assets/img/fog2.webp":"_assets/543e79eb2dfd3439acae.webp","/img/fog2.webp":"_assets/543e79eb2dfd3439acae.webp","/fog2.webp":"_assets/543e79eb2dfd3439acae.webp","https://teresaromero.github.io/trick-or-treat-game/assets/img/fog3.webp":"_assets/fc9c8913c32e6f725203.webp","/trick-or-treat-game/assets/img/fog3.webp":"_assets/fc9c8913c32e6f725203.webp","/assets/img/fog3.webp":"_assets/fc9c8913c32e6f725203.webp","/img/fog3.webp":"_assets/fc9c8913c32e6f725203.webp","/fog3.webp":"_assets/fc9c8913c32e6f725203.webp"};
  const ROOT = new URL(".", document.currentScript.src);
  const nativeFetch = window.fetch.bind(window);
  const nativeOpen = XMLHttpRequest.prototype.open;
  const nativeAppendChild = Node.prototype.appendChild;
  const nativeInsertBefore = Node.prototype.insertBefore;
  const BLOCKED_FRAGMENTS = [
    "hotjar", "googletagmanager", "google-analytics", "doubleclick",
    "googlesyndication", "pagead2", "cloudflareinsights", "sentry.io",
    "adinplay", "pubnation", "cdn-cgi/challenge-platform", "about:blank",
    "/patch/_cloner", "/patch/gamemonetize", "_cloner-monitor",
    "_cloner-v3", "main.min.js", "adsbygoogle", "/null.html?"
  ];

  function isBlockedNode(node) {
    if (!node || !node.tagName) return false;
    const tag = String(node.tagName).toLowerCase();
    if (!["script", "img", "link", "iframe", "frame", "source", "video", "audio"].includes(tag)) return false;
    const ref = String(node.src || node.href || node.data || "");
    if (!ref) return false;
    const lowered = ref.toLowerCase();
    if (BLOCKED_FRAGMENTS.some(part => lowered.includes(part))) return true;
    try {
      const absolute = new URL(ref, document.baseURI);
      return absolute.origin !== location.origin && absolute.protocol !== "data:" && absolute.protocol !== "blob:";
    } catch (_) {
      return false;
    }
  }

  function localizeNode(node) {
    if (!node || !node.tagName) return node;
    for (const property of ["src", "href", "data"]) {
      if (!(property in node)) continue;
      const local = resolveUrl(node[property]);
      if (local) {
        try { node[property] = local; } catch (_) {}
      }
    }
    return node;
  }

  Node.prototype.appendChild = function(node) {
    localizeNode(node);
    if (isBlockedNode(node)) return node;
    return nativeAppendChild.call(this, node);
  };

  Node.prototype.insertBefore = function(node, reference) {
    localizeNode(node);
    if (isBlockedNode(node)) return node;
    return nativeInsertBefore.call(this, node, reference);
  };

  function resolveUrl(input) {
    try {
      const raw = typeof input === "string" ? input : input.url;
      const absolute = new URL(raw, document.baseURI).href.split("#")[0];
      const parts = new URL(absolute);
      const cleanPath = parts.pathname.replace(/\/+/g, "/");
      let local = RUNTIME_MAP[absolute] || RUNTIME_MAP[cleanPath + parts.search] || RUNTIME_MAP[cleanPath];
      if (!local) {
        const marker = cleanPath.lastIndexOf("/_assets/");
        if (marker >= 0) local = cleanPath.slice(marker + 1);
      }
      return local ? new URL(local, ROOT).href : null;
    } catch (_) {
      return null;
    }
  }

  for (const constructor of [HTMLScriptElement, HTMLImageElement, HTMLMediaElement, HTMLSourceElement, HTMLLinkElement, HTMLIFrameElement]) {
    try {
      const descriptor = Object.getOwnPropertyDescriptor(constructor.prototype, "src");
      if (!descriptor || !descriptor.set || !descriptor.configurable) continue;
      Object.defineProperty(constructor.prototype, "src", {
        configurable: true,
        enumerable: descriptor.enumerable,
        get: descriptor.get,
        set(value) {
          const local = resolveUrl(value);
          return descriptor.set.call(this, local || value);
        },
      });
    } catch (_) {}
  }

  window.fetch = function(input, init) {
    const local = resolveUrl(input);
    if (local) return nativeFetch(local, init);
    try {
      const absolute = new URL(typeof input === "string" ? input : input.url, document.baseURI);
      if (absolute.origin !== location.origin) {
        return Promise.resolve(new Response("", {status: 204, statusText: "Offline mirror"}));
      }
    } catch (_) {}
    return nativeFetch(input, init);
  };

  XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
    const local = resolveUrl(url);
    const nextUrl = local || url;
    return nativeOpen.call(this, method, nextUrl, async === undefined ? true : async, user, password);
  };

  if (navigator.sendBeacon) navigator.sendBeacon = () => false;
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then(items => items.forEach(item => item.unregister())).catch(() => {});
  }
})();
