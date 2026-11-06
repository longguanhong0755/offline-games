(() => {
  "use strict";
  const RUNTIME_MAP = {"https://stepheneb.github.io/elm-2048/static/css/main.6ad822cf.chunk.css":"_assets/79f346bde7f71d44e984.css","/elm-2048/static/css/main.6ad822cf.chunk.css":"_assets/79f346bde7f71d44e984.css","/static/css/main.6ad822cf.chunk.css":"_assets/79f346bde7f71d44e984.css","/css/main.6ad822cf.chunk.css":"_assets/79f346bde7f71d44e984.css","/main.6ad822cf.chunk.css":"_assets/79f346bde7f71d44e984.css","https://stepheneb.github.io/elm-2048/static/js/runtime~main.d5fa866e.js":"_assets/e649418f6bc0083d1db2.js","/elm-2048/static/js/runtime~main.d5fa866e.js":"_assets/e649418f6bc0083d1db2.js","/static/js/runtime~main.d5fa866e.js":"_assets/e649418f6bc0083d1db2.js","/js/runtime~main.d5fa866e.js":"_assets/e649418f6bc0083d1db2.js","/runtime~main.d5fa866e.js":"_assets/e649418f6bc0083d1db2.js","https://stepheneb.github.io/elm-2048/static/js/vendors~main.b17b319b.chunk.js":"_assets/074dce78007403db25ca.js","/elm-2048/static/js/vendors~main.b17b319b.chunk.js":"_assets/074dce78007403db25ca.js","/static/js/vendors~main.b17b319b.chunk.js":"_assets/074dce78007403db25ca.js","/js/vendors~main.b17b319b.chunk.js":"_assets/074dce78007403db25ca.js","/vendors~main.b17b319b.chunk.js":"_assets/074dce78007403db25ca.js","https://stepheneb.github.io/elm-2048/static/js/main.81c1e22a.chunk.js":"_assets/2ff100a31161196029fb.js","/elm-2048/static/js/main.81c1e22a.chunk.js":"_assets/2ff100a31161196029fb.js","/static/js/main.81c1e22a.chunk.js":"_assets/2ff100a31161196029fb.js","/js/main.81c1e22a.chunk.js":"_assets/2ff100a31161196029fb.js","/main.81c1e22a.chunk.js":"_assets/2ff100a31161196029fb.js","https://stepheneb.github.io/elm-2048/static/media/ClearSans-Bold-webfont.92762598.woff":"_assets/b16e36cc53aa72023c67.woff","/elm-2048/static/media/ClearSans-Bold-webfont.92762598.woff":"_assets/b16e36cc53aa72023c67.woff","/static/media/ClearSans-Bold-webfont.92762598.woff":"_assets/b16e36cc53aa72023c67.woff","/media/ClearSans-Bold-webfont.92762598.woff":"_assets/b16e36cc53aa72023c67.woff","/ClearSans-Bold-webfont.92762598.woff":"_assets/b16e36cc53aa72023c67.woff","https://stepheneb.github.io/elm-2048/static/media/ClearSans-Regular-webfont.72f3056d.woff":"_assets/8c94cd2fdc93f5a86f17.woff","/elm-2048/static/media/ClearSans-Regular-webfont.72f3056d.woff":"_assets/8c94cd2fdc93f5a86f17.woff","/static/media/ClearSans-Regular-webfont.72f3056d.woff":"_assets/8c94cd2fdc93f5a86f17.woff","/media/ClearSans-Regular-webfont.72f3056d.woff":"_assets/8c94cd2fdc93f5a86f17.woff","/ClearSans-Regular-webfont.72f3056d.woff":"_assets/8c94cd2fdc93f5a86f17.woff"};
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
