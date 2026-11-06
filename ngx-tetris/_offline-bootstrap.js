(() => {
  "use strict";
  const RUNTIME_MAP = {"https://chrum.it/pages/ngx-tetris/assets/logo/logo.svg":"_assets/b82abb286790b8abd113.svg","/pages/ngx-tetris/assets/logo/logo.svg":"_assets/b82abb286790b8abd113.svg","/ngx-tetris/assets/logo/logo.svg":"_assets/b82abb286790b8abd113.svg","/assets/logo/logo.svg":"_assets/b82abb286790b8abd113.svg","/logo/logo.svg":"_assets/b82abb286790b8abd113.svg","/logo.svg":"_assets/b82abb286790b8abd113.svg","https://chrum.it/pages/ngx-tetris/runtime.8f9981511aac4c1c.js":"_assets/dd34157c44a948401a65.js","/pages/ngx-tetris/runtime.8f9981511aac4c1c.js":"_assets/dd34157c44a948401a65.js","/ngx-tetris/runtime.8f9981511aac4c1c.js":"_assets/dd34157c44a948401a65.js","/runtime.8f9981511aac4c1c.js":"_assets/dd34157c44a948401a65.js","https://chrum.it/pages/ngx-tetris/styles.3cb4c780c9fc440e.css":"_assets/c5e53e6b082a22ff15f0.css","/pages/ngx-tetris/styles.3cb4c780c9fc440e.css":"_assets/c5e53e6b082a22ff15f0.css","/ngx-tetris/styles.3cb4c780c9fc440e.css":"_assets/c5e53e6b082a22ff15f0.css","/styles.3cb4c780c9fc440e.css":"_assets/c5e53e6b082a22ff15f0.css","https://chrum.it/pages/ngx-tetris/polyfills.582a8bfc55ee411c.js":"_assets/19a94a6f194b731df6c9.js","/pages/ngx-tetris/polyfills.582a8bfc55ee411c.js":"_assets/19a94a6f194b731df6c9.js","/ngx-tetris/polyfills.582a8bfc55ee411c.js":"_assets/19a94a6f194b731df6c9.js","/polyfills.582a8bfc55ee411c.js":"_assets/19a94a6f194b731df6c9.js","https://chrum.it/pages/ngx-tetris/main.9d23bc38c8225e3c.js":"_assets/6e1d773eefbfb89f4824.js","/pages/ngx-tetris/main.9d23bc38c8225e3c.js":"_assets/6e1d773eefbfb89f4824.js","/ngx-tetris/main.9d23bc38c8225e3c.js":"_assets/6e1d773eefbfb89f4824.js","/main.9d23bc38c8225e3c.js":"_assets/6e1d773eefbfb89f4824.js","https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css":"_assets/7633b7c0c97d19e682fe.css","/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css":"_assets/7633b7c0c97d19e682fe.css","/bootstrap@5.0.2/dist/css/bootstrap.min.css":"_assets/7633b7c0c97d19e682fe.css","/dist/css/bootstrap.min.css":"_assets/7633b7c0c97d19e682fe.css","/css/bootstrap.min.css":"_assets/7633b7c0c97d19e682fe.css","/bootstrap.min.css":"_assets/7633b7c0c97d19e682fe.css","https://fonts.gstatic.com/s/kaushanscript/v14/vm8vdRfvXFLG3OLnsO15WYS5DG74wNJVMJ8b.woff2":"_assets/27b6f0be9de78ffbeef0.woff2","/s/kaushanscript/v14/vm8vdRfvXFLG3OLnsO15WYS5DG74wNJVMJ8b.woff2":"_assets/27b6f0be9de78ffbeef0.woff2","/kaushanscript/v14/vm8vdRfvXFLG3OLnsO15WYS5DG74wNJVMJ8b.woff2":"_assets/27b6f0be9de78ffbeef0.woff2","/v14/vm8vdRfvXFLG3OLnsO15WYS5DG74wNJVMJ8b.woff2":"_assets/27b6f0be9de78ffbeef0.woff2","/vm8vdRfvXFLG3OLnsO15WYS5DG74wNJVMJ8b.woff2":"_assets/27b6f0be9de78ffbeef0.woff2"};
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
