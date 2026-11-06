(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Goal_Rush/css/style.css":"_assets/f1eb531912c21b1c0930.css","/GameZone/Games/Goal_Rush/css/style.css":"_assets/f1eb531912c21b1c0930.css","/Games/Goal_Rush/css/style.css":"_assets/f1eb531912c21b1c0930.css","/Goal_Rush/css/style.css":"_assets/f1eb531912c21b1c0930.css","/css/style.css":"_assets/f1eb531912c21b1c0930.css","/style.css":"_assets/f1eb531912c21b1c0930.css","https://kunjgit.github.io/GameZone/Games/Goal_Rush/img/help.png":"_assets/7f8c6a131162d519e7de.png","/GameZone/Games/Goal_Rush/img/help.png":"_assets/7f8c6a131162d519e7de.png","/Games/Goal_Rush/img/help.png":"_assets/7f8c6a131162d519e7de.png","/Goal_Rush/img/help.png":"_assets/7f8c6a131162d519e7de.png","/img/help.png":"_assets/7f8c6a131162d519e7de.png","/help.png":"_assets/7f8c6a131162d519e7de.png","https://kunjgit.github.io/GameZone/Games/Goal_Rush/js/SAT.js":"_assets/dbdff53a6884c308ca44.js","/GameZone/Games/Goal_Rush/js/SAT.js":"_assets/dbdff53a6884c308ca44.js","/Games/Goal_Rush/js/SAT.js":"_assets/dbdff53a6884c308ca44.js","/Goal_Rush/js/SAT.js":"_assets/dbdff53a6884c308ca44.js","/js/SAT.js":"_assets/dbdff53a6884c308ca44.js","/SAT.js":"_assets/dbdff53a6884c308ca44.js","https://kunjgit.github.io/GameZone/Games/Goal_Rush/js/football.js":"_assets/ffbf2e9b3eae3f4163a4.js","/GameZone/Games/Goal_Rush/js/football.js":"_assets/ffbf2e9b3eae3f4163a4.js","/Games/Goal_Rush/js/football.js":"_assets/ffbf2e9b3eae3f4163a4.js","/Goal_Rush/js/football.js":"_assets/ffbf2e9b3eae3f4163a4.js","/js/football.js":"_assets/ffbf2e9b3eae3f4163a4.js","/football.js":"_assets/ffbf2e9b3eae3f4163a4.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/all.min.css":"_assets/d87ddf917b7a1449ab45.css","https://kunjgit.github.io/GameZone/Games/Goal_Rush/img/pitch3.png":"_assets/647beae2c454d6de7346.png","/GameZone/Games/Goal_Rush/img/pitch3.png":"_assets/647beae2c454d6de7346.png","/Games/Goal_Rush/img/pitch3.png":"_assets/647beae2c454d6de7346.png","/Goal_Rush/img/pitch3.png":"_assets/647beae2c454d6de7346.png","/img/pitch3.png":"_assets/647beae2c454d6de7346.png","/pitch3.png":"_assets/647beae2c454d6de7346.png","https://kunjgit.github.io/GameZone/Games/Goal_Rush/img/splash.png":"_assets/b3e6fb29f28c8fb20f0a.png","/GameZone/Games/Goal_Rush/img/splash.png":"_assets/b3e6fb29f28c8fb20f0a.png","/Games/Goal_Rush/img/splash.png":"_assets/b3e6fb29f28c8fb20f0a.png","/Goal_Rush/img/splash.png":"_assets/b3e6fb29f28c8fb20f0a.png","/img/splash.png":"_assets/b3e6fb29f28c8fb20f0a.png","/splash.png":"_assets/b3e6fb29f28c8fb20f0a.png","https://kunjgit.github.io/GameZone/Games/Goal_Rush/img/background.png":"_assets/23db61515abb882f113b.png","/GameZone/Games/Goal_Rush/img/background.png":"_assets/23db61515abb882f113b.png","/Games/Goal_Rush/img/background.png":"_assets/23db61515abb882f113b.png","/Goal_Rush/img/background.png":"_assets/23db61515abb882f113b.png","/img/background.png":"_assets/23db61515abb882f113b.png","/background.png":"_assets/23db61515abb882f113b.png","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2"};
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
