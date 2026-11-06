(() => {
  "use strict";
  const RUNTIME_MAP = {"https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap":"_assets/cd685d6a2bf9cf582ca3.css","/css2":"_assets/cd685d6a2bf9cf582ca3.css","/css2?family=Major+Mono+Display&display=swap":"_assets/cd685d6a2bf9cf582ca3.css","https://fonts.googleapis.com/css2":"_assets/cd685d6a2bf9cf582ca3.css","https://spotky1004.com/Incremental-Blocks/index.css?ver=1.2.34":"_assets/af1709d812630847517b.css","/Incremental-Blocks/index.css":"_assets/af1709d812630847517b.css","/Incremental-Blocks/index.css?ver=1.2.34":"_assets/af1709d812630847517b.css","/index.css":"_assets/af1709d812630847517b.css","https://spotky1004.com/Incremental-Blocks/index.css":"_assets/af1709d812630847517b.css","https://spotky1004.com/Incremental-Blocks/vars.js?ver=1.2.34":"_assets/6bb646247896c28a4646.js","/Incremental-Blocks/vars.js":"_assets/6bb646247896c28a4646.js","/Incremental-Blocks/vars.js?ver=1.2.34":"_assets/6bb646247896c28a4646.js","/vars.js":"_assets/6bb646247896c28a4646.js","https://spotky1004.com/Incremental-Blocks/vars.js":"_assets/6bb646247896c28a4646.js","https://spotky1004.com/Incremental-Blocks/index.js?ver=1.2.34":"_assets/bc1564e816d92aea97e5.js","/Incremental-Blocks/index.js":"_assets/bc1564e816d92aea97e5.js","/Incremental-Blocks/index.js?ver=1.2.34":"_assets/bc1564e816d92aea97e5.js","/index.js":"_assets/bc1564e816d92aea97e5.js","https://spotky1004.com/Incremental-Blocks/index.js":"_assets/bc1564e816d92aea97e5.js","https://code.jquery.com/jquery-3.4.1.min.js":"_assets/0925e8ad7bd971391a8b.js","/jquery-3.4.1.min.js":"_assets/0925e8ad7bd971391a8b.js","https://fonts.gstatic.com/s/majormonodisplay/v18/RWmVoLyb5fEqtsfBX9PDZIGr2tFubRh7DXeR.woff2":"_assets/3fcb93251028559c0830.woff2","/s/majormonodisplay/v18/RWmVoLyb5fEqtsfBX9PDZIGr2tFubRh7DXeR.woff2":"_assets/3fcb93251028559c0830.woff2","/majormonodisplay/v18/RWmVoLyb5fEqtsfBX9PDZIGr2tFubRh7DXeR.woff2":"_assets/3fcb93251028559c0830.woff2","/v18/RWmVoLyb5fEqtsfBX9PDZIGr2tFubRh7DXeR.woff2":"_assets/3fcb93251028559c0830.woff2","/RWmVoLyb5fEqtsfBX9PDZIGr2tFubRh7DXeR.woff2":"_assets/3fcb93251028559c0830.woff2","https://spotky1004.com/Incremental-Blocks/Resource/buildBackground.jpg":"_assets/782785d922b80430f05b.jpg","/Incremental-Blocks/Resource/buildBackground.jpg":"_assets/782785d922b80430f05b.jpg","/Resource/buildBackground.jpg":"_assets/782785d922b80430f05b.jpg","/buildBackground.jpg":"_assets/782785d922b80430f05b.jpg"};
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
