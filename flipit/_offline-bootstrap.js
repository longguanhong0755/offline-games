(() => {
  "use strict";
  const RUNTIME_MAP = {"https://fa-rimi.github.io/flipIT/client/src/styles/style.css":"_assets/befa47afcc1e9f85a582.css","/flipIT/client/src/styles/style.css":"_assets/befa47afcc1e9f85a582.css","/client/src/styles/style.css":"_assets/befa47afcc1e9f85a582.css","/src/styles/style.css":"_assets/befa47afcc1e9f85a582.css","/styles/style.css":"_assets/befa47afcc1e9f85a582.css","/style.css":"_assets/befa47afcc1e9f85a582.css","https://fa-rimi.github.io/flipIT/client/images/logos/icons8-github-48.png":"_assets/4b1bd7c0c58eac82b104.png","/flipIT/client/images/logos/icons8-github-48.png":"_assets/4b1bd7c0c58eac82b104.png","/client/images/logos/icons8-github-48.png":"_assets/4b1bd7c0c58eac82b104.png","/images/logos/icons8-github-48.png":"_assets/4b1bd7c0c58eac82b104.png","/logos/icons8-github-48.png":"_assets/4b1bd7c0c58eac82b104.png","/icons8-github-48.png":"_assets/4b1bd7c0c58eac82b104.png","https://fa-rimi.github.io/flipIT/client/src/script.js":"_assets/1c589243871a547a9355.js","/flipIT/client/src/script.js":"_assets/1c589243871a547a9355.js","/client/src/script.js":"_assets/1c589243871a547a9355.js","/src/script.js":"_assets/1c589243871a547a9355.js","/script.js":"_assets/1c589243871a547a9355.js","https://fonts.googleapis.com/css2?family=Poppins:wght@200;500&display=swap":"_assets/27777ab2b79ecd2578ec.css","/css2":"_assets/27777ab2b79ecd2578ec.css","/css2?family=Poppins:wght@200;500&display=swap":"_assets/27777ab2b79ecd2578ec.css","https://fonts.googleapis.com/css2":"_assets/27777ab2b79ecd2578ec.css","https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2":"_assets/cd36de204aca2d5fa263.woff2","/s/poppins/v24/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2":"_assets/cd36de204aca2d5fa263.woff2","/poppins/v24/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2":"_assets/cd36de204aca2d5fa263.woff2","/v24/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2":"_assets/cd36de204aca2d5fa263.woff2","/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2":"_assets/cd36de204aca2d5fa263.woff2","https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLFj_Z1xlFQ.woff2":"_assets/6f0c5725904210758789.woff2","/s/poppins/v24/pxiByp8kv8JHgFVrLFj_Z1xlFQ.woff2":"_assets/6f0c5725904210758789.woff2","/poppins/v24/pxiByp8kv8JHgFVrLFj_Z1xlFQ.woff2":"_assets/6f0c5725904210758789.woff2","/v24/pxiByp8kv8JHgFVrLFj_Z1xlFQ.woff2":"_assets/6f0c5725904210758789.woff2","/pxiByp8kv8JHgFVrLFj_Z1xlFQ.woff2":"_assets/6f0c5725904210758789.woff2"};
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
