(() => {
  "use strict";
  const RUNTIME_MAP = {"https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js":"_assets/d4d5669220045e130b79.js","/firebasejs/8.4.1/firebase-app.js":"_assets/d4d5669220045e130b79.js","/8.4.1/firebase-app.js":"_assets/d4d5669220045e130b79.js","/firebase-app.js":"_assets/d4d5669220045e130b79.js","https://justcasuallyjames.github.io/dogelon-much/static/css/main.6ab3e3e7.chunk.css":"_assets/d418d29a5ecd6117e9ef.css","/dogelon-much/static/css/main.6ab3e3e7.chunk.css":"_assets/d418d29a5ecd6117e9ef.css","/static/css/main.6ab3e3e7.chunk.css":"_assets/d418d29a5ecd6117e9ef.css","/css/main.6ab3e3e7.chunk.css":"_assets/d418d29a5ecd6117e9ef.css","/main.6ab3e3e7.chunk.css":"_assets/d418d29a5ecd6117e9ef.css","https://www.gstatic.com/firebasejs/8.4.1/firebase-firestore.js":"_assets/274d4cb91de5640797a4.js","/firebasejs/8.4.1/firebase-firestore.js":"_assets/274d4cb91de5640797a4.js","/8.4.1/firebase-firestore.js":"_assets/274d4cb91de5640797a4.js","/firebase-firestore.js":"_assets/274d4cb91de5640797a4.js","https://justcasuallyjames.github.io/dogelon-much/static/js/main.acf05cff.chunk.js":"_assets/dd28ab34e6b8686ea584.js","/dogelon-much/static/js/main.acf05cff.chunk.js":"_assets/dd28ab34e6b8686ea584.js","/static/js/main.acf05cff.chunk.js":"_assets/dd28ab34e6b8686ea584.js","/js/main.acf05cff.chunk.js":"_assets/dd28ab34e6b8686ea584.js","/main.acf05cff.chunk.js":"_assets/dd28ab34e6b8686ea584.js","https://justcasuallyjames.github.io/dogelon-much/static/js/2.fd808a55.chunk.js":"_assets/0598435f709d2155797b.js","/dogelon-much/static/js/2.fd808a55.chunk.js":"_assets/0598435f709d2155797b.js","/static/js/2.fd808a55.chunk.js":"_assets/0598435f709d2155797b.js","/js/2.fd808a55.chunk.js":"_assets/0598435f709d2155797b.js","/2.fd808a55.chunk.js":"_assets/0598435f709d2155797b.js","https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css":"_assets/d699f303990ce9bd7d7c.css","/bootstrap/3.3.1/css/bootstrap.min.css":"_assets/d699f303990ce9bd7d7c.css","/3.3.1/css/bootstrap.min.css":"_assets/d699f303990ce9bd7d7c.css","/css/bootstrap.min.css":"_assets/d699f303990ce9bd7d7c.css","/bootstrap.min.css":"_assets/d699f303990ce9bd7d7c.css"};
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
