(() => {
  "use strict";
  const RUNTIME_MAP = {"http://game.giantshaft.com/scripts/angular.min.js":"_assets/dfe502c8612a658bf3f6.js","/scripts/angular.min.js":"_assets/dfe502c8612a658bf3f6.js","/angular.min.js":"_assets/dfe502c8612a658bf3f6.js","http://game.giantshaft.com/scripts/jquery-1.11.1.min.js":"_assets/540bc6dec1dd4b92ea4d.js","/scripts/jquery-1.11.1.min.js":"_assets/540bc6dec1dd4b92ea4d.js","/jquery-1.11.1.min.js":"_assets/540bc6dec1dd4b92ea4d.js","http://game.giantshaft.com/scripts/angular-route.min.js":"_assets/f4f8f511e64b5dab11be.js","/scripts/angular-route.min.js":"_assets/f4f8f511e64b5dab11be.js","/angular-route.min.js":"_assets/f4f8f511e64b5dab11be.js","http://game.giantshaft.com/scripts/idleGame.js":"_assets/e10de911b1c72ea8c4ad.js","/scripts/idleGame.js":"_assets/e10de911b1c72ea8c4ad.js","/idleGame.js":"_assets/e10de911b1c72ea8c4ad.js","http://game.giantshaft.com/scripts/aes.js":"_assets/fc7e184beeda61bf6427.js","/scripts/aes.js":"_assets/fc7e184beeda61bf6427.js","/aes.js":"_assets/fc7e184beeda61bf6427.js","http://game.giantshaft.com/scripts/jquery-ui-1.10.4.min.js":"_assets/600759407fde32ff7bd3.js","/scripts/jquery-ui-1.10.4.min.js":"_assets/600759407fde32ff7bd3.js","/jquery-ui-1.10.4.min.js":"_assets/600759407fde32ff7bd3.js","http://game.giantshaft.com/css/reset.css":"_assets/2bd61fab7dd5e62af38b.css","/css/reset.css":"_assets/2bd61fab7dd5e62af38b.css","/reset.css":"_assets/2bd61fab7dd5e62af38b.css","http://game.giantshaft.com/css/main.css":"_assets/cf246b1cc810bf5bed84.css","/css/main.css":"_assets/cf246b1cc810bf5bed84.css","/main.css":"_assets/cf246b1cc810bf5bed84.css","http://game.giantshaft.com/css/store.css":"_assets/bd6d0e4e3e2d2aa42f15.css","/css/store.css":"_assets/bd6d0e4e3e2d2aa42f15.css","/store.css":"_assets/bd6d0e4e3e2d2aa42f15.css","http://game.giantshaft.com/css/space.css":"_assets/75d7d9d2bf2ab04ae653.css","/css/space.css":"_assets/75d7d9d2bf2ab04ae653.css","/space.css":"_assets/75d7d9d2bf2ab04ae653.css","http://game.giantshaft.com/css/overlay.css":"_assets/1947316e942d732cd2ef.css","/css/overlay.css":"_assets/1947316e942d732cd2ef.css","/overlay.css":"_assets/1947316e942d732cd2ef.css","http://game.giantshaft.com/css/jquery-ui-1.10.4.min.css":"_assets/ab582d2eff86e510ce6c.css","/css/jquery-ui-1.10.4.min.css":"_assets/ab582d2eff86e510ce6c.css","/jquery-ui-1.10.4.min.css":"_assets/ab582d2eff86e510ce6c.css","http://game.giantshaft.com/scripts/gameService.js":"_assets/2780b4e88365311e6ca9.js","/scripts/gameService.js":"_assets/2780b4e88365311e6ca9.js","/gameService.js":"_assets/2780b4e88365311e6ca9.js","http://game.giantshaft.com/scripts/playerService.js":"_assets/0877a6493c9410e958a8.js","/scripts/playerService.js":"_assets/0877a6493c9410e958a8.js","/playerService.js":"_assets/0877a6493c9410e958a8.js","http://game.giantshaft.com/scripts/cacheService.js":"_assets/be0177026e7294fc95f4.js","/scripts/cacheService.js":"_assets/be0177026e7294fc95f4.js","/cacheService.js":"_assets/be0177026e7294fc95f4.js","http://game.giantshaft.com/scripts/knowledge.js":"_assets/034f1397daee585e6b2a.js","/scripts/knowledge.js":"_assets/034f1397daee585e6b2a.js","/knowledge.js":"_assets/034f1397daee585e6b2a.js","http://game.giantshaft.com/scripts/gameLoop.js":"_assets/9ac7c5156ab75b1e9fdc.js","/scripts/gameLoop.js":"_assets/9ac7c5156ab75b1e9fdc.js","/gameLoop.js":"_assets/9ac7c5156ab75b1e9fdc.js","http://game.giantshaft.com/scripts/business.js":"_assets/0d6598f59761ee9f41cd.js","/scripts/business.js":"_assets/0d6598f59761ee9f41cd.js","/business.js":"_assets/0d6598f59761ee9f41cd.js","http://game.giantshaft.com/scripts/menu.js":"_assets/4eb679908479bba8a9ef.js","/scripts/menu.js":"_assets/4eb679908479bba8a9ef.js","/menu.js":"_assets/4eb679908479bba8a9ef.js","http://game.giantshaft.com/scripts/stats.js":"_assets/2199990472583e6ad057.js","/scripts/stats.js":"_assets/2199990472583e6ad057.js","/stats.js":"_assets/2199990472583e6ad057.js","http://game.giantshaft.com/scripts/overlay.js":"_assets/c85784431ea4acd1b087.js","/scripts/overlay.js":"_assets/c85784431ea4acd1b087.js","/overlay.js":"_assets/c85784431ea4acd1b087.js","http://game.giantshaft.com/scripts/space.js":"_assets/c90b6cf7770ce16e92cb.js","/scripts/space.js":"_assets/c90b6cf7770ce16e92cb.js","/space.js":"_assets/c90b6cf7770ce16e92cb.js","http://game.giantshaft.com/scripts/spaceStory.js":"_assets/bbb605559992d25f193b.js","/scripts/spaceStory.js":"_assets/bbb605559992d25f193b.js","/spaceStory.js":"_assets/bbb605559992d25f193b.js","http://game.giantshaft.com/scripts/help.js":"_assets/20989c0695c92395008c.js","/scripts/help.js":"_assets/20989c0695c92395008c.js","/help.js":"_assets/20989c0695c92395008c.js","http://game.giantshaft.com/version.txt":"_assets/6b86b273ff34fce19d6b.txt","/version.txt":"_assets/6b86b273ff34fce19d6b.txt","http://game.giantshaft.com/images/icons/facebook.png":"_assets/5cda38e89193f2042a6b.png","/images/icons/facebook.png":"_assets/5cda38e89193f2042a6b.png","/icons/facebook.png":"_assets/5cda38e89193f2042a6b.png","/facebook.png":"_assets/5cda38e89193f2042a6b.png","http://game.giantshaft.com/images/logo.jpg":"_assets/76453adcd7fad81ac4b0.jpg","/images/logo.jpg":"_assets/76453adcd7fad81ac4b0.jpg","/logo.jpg":"_assets/76453adcd7fad81ac4b0.jpg","http://game.giantshaft.com/images/icons/tumblr.png":"_assets/abfb72e25dab869c4dae.png","/images/icons/tumblr.png":"_assets/abfb72e25dab869c4dae.png","/icons/tumblr.png":"_assets/abfb72e25dab869c4dae.png","/tumblr.png":"_assets/abfb72e25dab869c4dae.png","http://game.giantshaft.com/images/icons/github.png":"_assets/073a6a032983b7040bff.png","/images/icons/github.png":"_assets/073a6a032983b7040bff.png","/icons/github.png":"_assets/073a6a032983b7040bff.png","/github.png":"_assets/073a6a032983b7040bff.png","http://game.giantshaft.com/images/arrow.png":"_assets/bbbb44f638ce1b4f9333.png","/images/arrow.png":"_assets/bbbb44f638ce1b4f9333.png","/arrow.png":"_assets/bbbb44f638ce1b4f9333.png","http://game.giantshaft.com/images/icons/help.png":"_assets/583faa488d29bc1bc845.png","/images/icons/help.png":"_assets/583faa488d29bc1bc845.png","/icons/help.png":"_assets/583faa488d29bc1bc845.png","/help.png":"_assets/583faa488d29bc1bc845.png","http://game.giantshaft.com/images/clippy.png":"_assets/6d08fc006723241de0f1.png","/images/clippy.png":"_assets/6d08fc006723241de0f1.png","/clippy.png":"_assets/6d08fc006723241de0f1.png","http://game.giantshaft.com/images/clippyTip.png":"_assets/069cf213cadbe947eda4.png","/images/clippyTip.png":"_assets/069cf213cadbe947eda4.png","/clippyTip.png":"_assets/069cf213cadbe947eda4.png","http://game.giantshaft.com/images/skyscraper.jpg":"_assets/c85487362c00c364b1b5.jpg","/images/skyscraper.jpg":"_assets/c85487362c00c364b1b5.jpg","/skyscraper.jpg":"_assets/c85487362c00c364b1b5.jpg"};
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
