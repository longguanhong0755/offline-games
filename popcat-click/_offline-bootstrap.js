(() => {
  "use strict";
  const RUNTIME_MAP = {"https://syafwan000.github.io/popcat-click/public/assets/close-mouth.png":"_assets/0649cd64963060d98899.png","/popcat-click/public/assets/close-mouth.png":"_assets/0649cd64963060d98899.png","/public/assets/close-mouth.png":"_assets/0649cd64963060d98899.png","/assets/close-mouth.png":"_assets/0649cd64963060d98899.png","/close-mouth.png":"_assets/0649cd64963060d98899.png","https://syafwan000.github.io/popcat-click/public/js/main.js":"_assets/95a75746973a24358f57.js","/popcat-click/public/js/main.js":"_assets/95a75746973a24358f57.js","/public/js/main.js":"_assets/95a75746973a24358f57.js","/js/main.js":"_assets/95a75746973a24358f57.js","/main.js":"_assets/95a75746973a24358f57.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/all.min.css":"_assets/d87ddf917b7a1449ab45.css","https://syafwan000.github.io/popcat-click/public/assets/windah.gif":"_assets/3a1db73e9a69b394680a.gif","/popcat-click/public/assets/windah.gif":"_assets/3a1db73e9a69b394680a.gif","/public/assets/windah.gif":"_assets/3a1db73e9a69b394680a.gif","/assets/windah.gif":"_assets/3a1db73e9a69b394680a.gif","/windah.gif":"_assets/3a1db73e9a69b394680a.gif","https://syafwan000.github.io/popcat-click/public/js/modal.js":"_assets/e45b1b588f944ea3e38c.js","/popcat-click/public/js/modal.js":"_assets/e45b1b588f944ea3e38c.js","/public/js/modal.js":"_assets/e45b1b588f944ea3e38c.js","/js/modal.js":"_assets/e45b1b588f944ea3e38c.js","/modal.js":"_assets/e45b1b588f944ea3e38c.js","https://syafwan000.github.io/popcat-click/public/css/main.css":"_assets/121ee3888c249adbe08d.css","/popcat-click/public/css/main.css":"_assets/121ee3888c249adbe08d.css","/public/css/main.css":"_assets/121ee3888c249adbe08d.css","/css/main.css":"_assets/121ee3888c249adbe08d.css","/main.css":"_assets/121ee3888c249adbe08d.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-brands-400.woff2":"_assets/43c072c16c9ee6d67acd.woff2","/ajax/libs/font-awesome/5.15.3/webfonts/fa-brands-400.woff2":"_assets/43c072c16c9ee6d67acd.woff2","/libs/font-awesome/5.15.3/webfonts/fa-brands-400.woff2":"_assets/43c072c16c9ee6d67acd.woff2","/font-awesome/5.15.3/webfonts/fa-brands-400.woff2":"_assets/43c072c16c9ee6d67acd.woff2","/5.15.3/webfonts/fa-brands-400.woff2":"_assets/43c072c16c9ee6d67acd.woff2","/webfonts/fa-brands-400.woff2":"_assets/43c072c16c9ee6d67acd.woff2","/fa-brands-400.woff2":"_assets/43c072c16c9ee6d67acd.woff2","https://syafwan000.github.io/popcat-click/public/assets/background.png":"_assets/c194df6dc4d964ced4f9.png","/popcat-click/public/assets/background.png":"_assets/c194df6dc4d964ced4f9.png","/public/assets/background.png":"_assets/c194df6dc4d964ced4f9.png","/assets/background.png":"_assets/c194df6dc4d964ced4f9.png","/background.png":"_assets/c194df6dc4d964ced4f9.png"};
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
