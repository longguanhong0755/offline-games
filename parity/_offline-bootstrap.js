(() => {
  "use strict";
  const RUNTIME_MAP = {"https://www.abefehr.com/parity/styles/style.css":"_assets/7b4dabdfeb5ed9aff205.css","/parity/styles/style.css":"_assets/7b4dabdfeb5ed9aff205.css","/styles/style.css":"_assets/7b4dabdfeb5ed9aff205.css","/style.css":"_assets/7b4dabdfeb5ed9aff205.css","https://www.abefehr.com/parity/images/reset.png":"_assets/ccf1b9c08ee8796a5fbf.png","/parity/images/reset.png":"_assets/ccf1b9c08ee8796a5fbf.png","/images/reset.png":"_assets/ccf1b9c08ee8796a5fbf.png","/reset.png":"_assets/ccf1b9c08ee8796a5fbf.png","https://www.abefehr.com/parity/scripts/production.min.js":"_assets/bc8a04afa1f07f2fd3e2.js","/parity/scripts/production.min.js":"_assets/bc8a04afa1f07f2fd3e2.js","/scripts/production.min.js":"_assets/bc8a04afa1f07f2fd3e2.js","/production.min.js":"_assets/bc8a04afa1f07f2fd3e2.js","https://fonts.googleapis.com/css?family=Poiret+One|Open+Sans":"_assets/e13f3075b11c6164fcf8.css","/css":"_assets/e13f3075b11c6164fcf8.css","/css?family=Poiret+One|Open+Sans":"_assets/e13f3075b11c6164fcf8.css","https://fonts.googleapis.com/css":"_assets/e13f3075b11c6164fcf8.css","https://www.abefehr.com/parity/styles/mobile.css":"_assets/c089fe07b67a98cde6f6.css","/parity/styles/mobile.css":"_assets/c089fe07b67a98cde6f6.css","/styles/mobile.css":"_assets/c089fe07b67a98cde6f6.css","/mobile.css":"_assets/c089fe07b67a98cde6f6.css","https://www.abefehr.com/parity/story.json":"_assets/b53cd0bc9fbb767bad4c.json","/parity/story.json":"_assets/b53cd0bc9fbb767bad4c.json","/story.json":"_assets/b53cd0bc9fbb767bad4c.json","https://fonts.gstatic.com/s/poiretone/v18/UqyVK80NJXN4zfRgbdfbo55cVw.woff2":"_assets/a6361b9b4bd84cd02407.woff2","/s/poiretone/v18/UqyVK80NJXN4zfRgbdfbo55cVw.woff2":"_assets/a6361b9b4bd84cd02407.woff2","/poiretone/v18/UqyVK80NJXN4zfRgbdfbo55cVw.woff2":"_assets/a6361b9b4bd84cd02407.woff2","/v18/UqyVK80NJXN4zfRgbdfbo55cVw.woff2":"_assets/a6361b9b4bd84cd02407.woff2","/UqyVK80NJXN4zfRgbdfbo55cVw.woff2":"_assets/a6361b9b4bd84cd02407.woff2"};
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
