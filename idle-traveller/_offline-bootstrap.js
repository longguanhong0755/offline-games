(() => {
  "use strict";
  const RUNTIME_MAP = {"https://naoxink.github.io/idle-traveller/css/main.css?1045":"_assets/1db0de1d58b28ff62e42.css","/idle-traveller/css/main.css":"_assets/1db0de1d58b28ff62e42.css","/idle-traveller/css/main.css?1045":"_assets/1db0de1d58b28ff62e42.css","/css/main.css":"_assets/1db0de1d58b28ff62e42.css","/main.css":"_assets/1db0de1d58b28ff62e42.css","https://naoxink.github.io/idle-traveller/css/main.css":"_assets/1db0de1d58b28ff62e42.css","https://naoxink.github.io/idle-traveller/vendor/bootstrap/css/bootstrap.min.css":"_assets/9bf87f7140c085febf88.css","/idle-traveller/vendor/bootstrap/css/bootstrap.min.css":"_assets/9bf87f7140c085febf88.css","/vendor/bootstrap/css/bootstrap.min.css":"_assets/9bf87f7140c085febf88.css","/bootstrap/css/bootstrap.min.css":"_assets/9bf87f7140c085febf88.css","/css/bootstrap.min.css":"_assets/9bf87f7140c085febf88.css","/bootstrap.min.css":"_assets/9bf87f7140c085febf88.css","https://naoxink.github.io/idle-traveller/vendor/font-awesome/css/font-awesome.min.css":"_assets/799aeb25cc0373fdee0e.css","/idle-traveller/vendor/font-awesome/css/font-awesome.min.css":"_assets/799aeb25cc0373fdee0e.css","/vendor/font-awesome/css/font-awesome.min.css":"_assets/799aeb25cc0373fdee0e.css","/font-awesome/css/font-awesome.min.css":"_assets/799aeb25cc0373fdee0e.css","/css/font-awesome.min.css":"_assets/799aeb25cc0373fdee0e.css","/font-awesome.min.css":"_assets/799aeb25cc0373fdee0e.css","https://naoxink.github.io/idle-traveller/vendor/notifIt/js/notifIt.min.js":"_assets/1dee43744a50d37e9bf6.js","/idle-traveller/vendor/notifIt/js/notifIt.min.js":"_assets/1dee43744a50d37e9bf6.js","/vendor/notifIt/js/notifIt.min.js":"_assets/1dee43744a50d37e9bf6.js","/notifIt/js/notifIt.min.js":"_assets/1dee43744a50d37e9bf6.js","/js/notifIt.min.js":"_assets/1dee43744a50d37e9bf6.js","/notifIt.min.js":"_assets/1dee43744a50d37e9bf6.js","https://naoxink.github.io/idle-traveller/vendor/notifIt/css/notifIt.min.css":"_assets/d896e78b8bb662447a46.css","/idle-traveller/vendor/notifIt/css/notifIt.min.css":"_assets/d896e78b8bb662447a46.css","/vendor/notifIt/css/notifIt.min.css":"_assets/d896e78b8bb662447a46.css","/notifIt/css/notifIt.min.css":"_assets/d896e78b8bb662447a46.css","/css/notifIt.min.css":"_assets/d896e78b8bb662447a46.css","/notifIt.min.css":"_assets/d896e78b8bb662447a46.css","https://naoxink.github.io/idle-traveller/vendor/jquery/jquery-3.2.1.min.js":"_assets/87083882cc6015984eb0.js","/idle-traveller/vendor/jquery/jquery-3.2.1.min.js":"_assets/87083882cc6015984eb0.js","/vendor/jquery/jquery-3.2.1.min.js":"_assets/87083882cc6015984eb0.js","/jquery/jquery-3.2.1.min.js":"_assets/87083882cc6015984eb0.js","/jquery-3.2.1.min.js":"_assets/87083882cc6015984eb0.js","https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js":"_assets/5292e677fe712c808634.js","/ajax/libs/popper.js/1.11.0/umd/popper.min.js":"_assets/5292e677fe712c808634.js","/libs/popper.js/1.11.0/umd/popper.min.js":"_assets/5292e677fe712c808634.js","/popper.js/1.11.0/umd/popper.min.js":"_assets/5292e677fe712c808634.js","/1.11.0/umd/popper.min.js":"_assets/5292e677fe712c808634.js","/umd/popper.min.js":"_assets/5292e677fe712c808634.js","/popper.min.js":"_assets/5292e677fe712c808634.js","https://naoxink.github.io/idle-traveller/vendor/bootstrap/js/bootstrap.min.js":"_assets/0e25895d7caaf355a53d.js","/idle-traveller/vendor/bootstrap/js/bootstrap.min.js":"_assets/0e25895d7caaf355a53d.js","/vendor/bootstrap/js/bootstrap.min.js":"_assets/0e25895d7caaf355a53d.js","/bootstrap/js/bootstrap.min.js":"_assets/0e25895d7caaf355a53d.js","/js/bootstrap.min.js":"_assets/0e25895d7caaf355a53d.js","/bootstrap.min.js":"_assets/0e25895d7caaf355a53d.js","https://naoxink.github.io/idle-traveller/js/core.js?1046":"_assets/2fa855cfdc6b0b3634d8.js","/idle-traveller/js/core.js":"_assets/2fa855cfdc6b0b3634d8.js","/idle-traveller/js/core.js?1046":"_assets/2fa855cfdc6b0b3634d8.js","/js/core.js":"_assets/2fa855cfdc6b0b3634d8.js","/core.js":"_assets/2fa855cfdc6b0b3634d8.js","https://naoxink.github.io/idle-traveller/js/core.js":"_assets/2fa855cfdc6b0b3634d8.js","https://naoxink.github.io/idle-traveller/js/stats.js?1046":"_assets/c0be5fbc6d0b985ffb9d.js","/idle-traveller/js/stats.js":"_assets/c0be5fbc6d0b985ffb9d.js","/idle-traveller/js/stats.js?1046":"_assets/c0be5fbc6d0b985ffb9d.js","/js/stats.js":"_assets/c0be5fbc6d0b985ffb9d.js","/stats.js":"_assets/c0be5fbc6d0b985ffb9d.js","https://naoxink.github.io/idle-traveller/js/stats.js":"_assets/c0be5fbc6d0b985ffb9d.js","https://naoxink.github.io/idle-traveller/js/achievements.js?1045":"_assets/ebd7a59fdadf8b8505d1.js","/idle-traveller/js/achievements.js":"_assets/ebd7a59fdadf8b8505d1.js","/idle-traveller/js/achievements.js?1045":"_assets/ebd7a59fdadf8b8505d1.js","/js/achievements.js":"_assets/ebd7a59fdadf8b8505d1.js","/achievements.js":"_assets/ebd7a59fdadf8b8505d1.js","https://naoxink.github.io/idle-traveller/js/achievements.js":"_assets/ebd7a59fdadf8b8505d1.js","https://naoxink.github.io/idle-traveller/js/shop.js?1046":"_assets/30b472332637765e25b5.js","/idle-traveller/js/shop.js":"_assets/30b472332637765e25b5.js","/idle-traveller/js/shop.js?1046":"_assets/30b472332637765e25b5.js","/js/shop.js":"_assets/30b472332637765e25b5.js","/shop.js":"_assets/30b472332637765e25b5.js","https://naoxink.github.io/idle-traveller/js/shop.js":"_assets/30b472332637765e25b5.js","https://naoxink.github.io/idle-traveller/js/upgrades.js?1046":"_assets/2e11ac87abd90c0e8281.js","/idle-traveller/js/upgrades.js":"_assets/2e11ac87abd90c0e8281.js","/idle-traveller/js/upgrades.js?1046":"_assets/2e11ac87abd90c0e8281.js","/js/upgrades.js":"_assets/2e11ac87abd90c0e8281.js","/upgrades.js":"_assets/2e11ac87abd90c0e8281.js","https://naoxink.github.io/idle-traveller/js/upgrades.js":"_assets/2e11ac87abd90c0e8281.js","https://naoxink.github.io/idle-traveller/js/main.js?1046":"_assets/de27eb7dfc076932ee2a.js","/idle-traveller/js/main.js":"_assets/de27eb7dfc076932ee2a.js","/idle-traveller/js/main.js?1046":"_assets/de27eb7dfc076932ee2a.js","/js/main.js":"_assets/de27eb7dfc076932ee2a.js","/main.js":"_assets/de27eb7dfc076932ee2a.js","https://naoxink.github.io/idle-traveller/js/main.js":"_assets/de27eb7dfc076932ee2a.js","https://naoxink.github.io/idle-traveller/vendor/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0":"_assets/2adefcbc041e7d18fcf2.woff2","/idle-traveller/vendor/font-awesome/fonts/fontawesome-webfont.woff2":"_assets/2adefcbc041e7d18fcf2.woff2","/idle-traveller/vendor/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0":"_assets/2adefcbc041e7d18fcf2.woff2","/vendor/font-awesome/fonts/fontawesome-webfont.woff2":"_assets/2adefcbc041e7d18fcf2.woff2","/font-awesome/fonts/fontawesome-webfont.woff2":"_assets/2adefcbc041e7d18fcf2.woff2","/fonts/fontawesome-webfont.woff2":"_assets/2adefcbc041e7d18fcf2.woff2","/fontawesome-webfont.woff2":"_assets/2adefcbc041e7d18fcf2.woff2","https://naoxink.github.io/idle-traveller/vendor/font-awesome/fonts/fontawesome-webfont.woff2":"_assets/2adefcbc041e7d18fcf2.woff2","https://naoxink.github.io/idle-traveller/sound/ding.mp3":"_assets/0472f6d229552d15c661.mp3","/idle-traveller/sound/ding.mp3":"_assets/0472f6d229552d15c661.mp3","/sound/ding.mp3":"_assets/0472f6d229552d15c661.mp3","/ding.mp3":"_assets/0472f6d229552d15c661.mp3"};
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
