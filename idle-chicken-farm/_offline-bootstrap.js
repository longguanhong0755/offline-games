(() => {
  "use strict";
  const RUNTIME_MAP = {"https://fonts.googleapis.com/css?family=Livvic&display=swap":"_assets/8ef737199d6c98e6f6a3.css","/css":"_assets/8ef737199d6c98e6f6a3.css","/css?family=Livvic&display=swap":"_assets/8ef737199d6c98e6f6a3.css","https://fonts.googleapis.com/css":"_assets/8ef737199d6c98e6f6a3.css","https://kobawan.github.io/idle-chicken-farm/static/css/main.0e3363e8.chunk.css":"_assets/f07d5ed9599c2e4f8a34.css","/idle-chicken-farm/static/css/main.0e3363e8.chunk.css":"_assets/f07d5ed9599c2e4f8a34.css","/static/css/main.0e3363e8.chunk.css":"_assets/f07d5ed9599c2e4f8a34.css","/css/main.0e3363e8.chunk.css":"_assets/f07d5ed9599c2e4f8a34.css","/main.0e3363e8.chunk.css":"_assets/f07d5ed9599c2e4f8a34.css","https://kobawan.github.io/idle-chicken-farm/static/js/main.960d8bc7.chunk.js":"_assets/f254190e650367c0c0bc.js","/idle-chicken-farm/static/js/main.960d8bc7.chunk.js":"_assets/f254190e650367c0c0bc.js","/static/js/main.960d8bc7.chunk.js":"_assets/f254190e650367c0c0bc.js","/js/main.960d8bc7.chunk.js":"_assets/f254190e650367c0c0bc.js","/main.960d8bc7.chunk.js":"_assets/f254190e650367c0c0bc.js","https://kobawan.github.io/idle-chicken-farm/static/js/2.97baf073.chunk.js":"_assets/5bfafea4290a245cef04.js","/idle-chicken-farm/static/js/2.97baf073.chunk.js":"_assets/5bfafea4290a245cef04.js","/static/js/2.97baf073.chunk.js":"_assets/5bfafea4290a245cef04.js","/js/2.97baf073.chunk.js":"_assets/5bfafea4290a245cef04.js","/2.97baf073.chunk.js":"_assets/5bfafea4290a245cef04.js","https://fonts.gstatic.com/s/livvic/v15/rnCp-x1S2hzjrlfXaOM7.woff2":"_assets/3a15a095aeebc9aca2ea.woff2","/s/livvic/v15/rnCp-x1S2hzjrlfXaOM7.woff2":"_assets/3a15a095aeebc9aca2ea.woff2","/livvic/v15/rnCp-x1S2hzjrlfXaOM7.woff2":"_assets/3a15a095aeebc9aca2ea.woff2","/v15/rnCp-x1S2hzjrlfXaOM7.woff2":"_assets/3a15a095aeebc9aca2ea.woff2","/rnCp-x1S2hzjrlfXaOM7.woff2":"_assets/3a15a095aeebc9aca2ea.woff2","https://kobawan.github.io/idle-chicken-farm/static/media/farm_sprite.aab29c37.png":"_assets/c686ebdf4554a8d75f2b.png","/idle-chicken-farm/static/media/farm_sprite.aab29c37.png":"_assets/c686ebdf4554a8d75f2b.png","/static/media/farm_sprite.aab29c37.png":"_assets/c686ebdf4554a8d75f2b.png","/media/farm_sprite.aab29c37.png":"_assets/c686ebdf4554a8d75f2b.png","/farm_sprite.aab29c37.png":"_assets/c686ebdf4554a8d75f2b.png","https://kobawan.github.io/idle-chicken-farm/static/media/farmBg.507ab01a.png":"_assets/46a97ea70575d62955c3.png","/idle-chicken-farm/static/media/farmBg.507ab01a.png":"_assets/46a97ea70575d62955c3.png","/static/media/farmBg.507ab01a.png":"_assets/46a97ea70575d62955c3.png","/media/farmBg.507ab01a.png":"_assets/46a97ea70575d62955c3.png","/farmBg.507ab01a.png":"_assets/46a97ea70575d62955c3.png"};
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
