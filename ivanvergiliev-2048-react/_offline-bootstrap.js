(() => {
  "use strict";
  const RUNTIME_MAP = {"https://ivanvergiliev.github.io/2048-react/built/style.css":"_assets/263961203a3f89c61367.css","/2048-react/built/style.css":"_assets/263961203a3f89c61367.css","/built/style.css":"_assets/263961203a3f89c61367.css","/style.css":"_assets/263961203a3f89c61367.css","https://ivanvergiliev.github.io/2048-react/built/main.css":"_assets/bfb7cf12ecb501aa0898.css","/2048-react/built/main.css":"_assets/bfb7cf12ecb501aa0898.css","/built/main.css":"_assets/bfb7cf12ecb501aa0898.css","/main.css":"_assets/bfb7cf12ecb501aa0898.css","https://ivanvergiliev.github.io/2048-react/built/index.js":"_assets/92484450858278076c6f.js","/2048-react/built/index.js":"_assets/92484450858278076c6f.js","/built/index.js":"_assets/92484450858278076c6f.js","/index.js":"_assets/92484450858278076c6f.js","https://ivanvergiliev.github.io/2048-react/built/board.js":"_assets/de02bb0c7f1822a25bdf.js","/2048-react/built/board.js":"_assets/de02bb0c7f1822a25bdf.js","/built/board.js":"_assets/de02bb0c7f1822a25bdf.js","/board.js":"_assets/de02bb0c7f1822a25bdf.js","https://ivanvergiliev.github.io/2048-react/clear-sans.ttf":"_assets/bb811af889b6a3984944.ttf","/2048-react/clear-sans.ttf":"_assets/bb811af889b6a3984944.ttf","/clear-sans.ttf":"_assets/bb811af889b6a3984944.ttf","https://unpkg.com/react-dom@15.0.1/dist/react-dom.min.js":"_assets/6f7bab960f38ff91b790.js","/react-dom@15.0.1/dist/react-dom.min.js":"_assets/6f7bab960f38ff91b790.js","/dist/react-dom.min.js":"_assets/6f7bab960f38ff91b790.js","/react-dom.min.js":"_assets/6f7bab960f38ff91b790.js","https://unpkg.com/react@15.0.1/dist/react.min.js":"_assets/5f1aa40e3881f0e1d650.js","/react@15.0.1/dist/react.min.js":"_assets/5f1aa40e3881f0e1d650.js","/dist/react.min.js":"_assets/5f1aa40e3881f0e1d650.js","/react.min.js":"_assets/5f1aa40e3881f0e1d650.js"};
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
