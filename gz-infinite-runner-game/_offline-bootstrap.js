(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Infinite_Runner_Game/style.css":"_assets/fcc94fefa0509f8fbe2a.css","/GameZone/Games/Infinite_Runner_Game/style.css":"_assets/fcc94fefa0509f8fbe2a.css","/Games/Infinite_Runner_Game/style.css":"_assets/fcc94fefa0509f8fbe2a.css","/Infinite_Runner_Game/style.css":"_assets/fcc94fefa0509f8fbe2a.css","/style.css":"_assets/fcc94fefa0509f8fbe2a.css","https://kunjgit.github.io/GameZone/Games/Infinite_Runner_Game/script.js":"_assets/eca03d40c25700096f98.js","/GameZone/Games/Infinite_Runner_Game/script.js":"_assets/eca03d40c25700096f98.js","/Games/Infinite_Runner_Game/script.js":"_assets/eca03d40c25700096f98.js","/Infinite_Runner_Game/script.js":"_assets/eca03d40c25700096f98.js","/script.js":"_assets/eca03d40c25700096f98.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/all.min.css":"_assets/d87ddf917b7a1449ab45.css","https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js":"_assets/d2b82e612d2a812e8be2.js","/ajax/libs/modernizr/2.8.3/modernizr.min.js":"_assets/d2b82e612d2a812e8be2.js","/libs/modernizr/2.8.3/modernizr.min.js":"_assets/d2b82e612d2a812e8be2.js","/modernizr/2.8.3/modernizr.min.js":"_assets/d2b82e612d2a812e8be2.js","/2.8.3/modernizr.min.js":"_assets/d2b82e612d2a812e8be2.js","/modernizr.min.js":"_assets/d2b82e612d2a812e8be2.js","https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css":"_assets/b76ffbb2665f82b493e0.css","/ajax/libs/normalize/5.0.0/normalize.min.css":"_assets/b76ffbb2665f82b493e0.css","/libs/normalize/5.0.0/normalize.min.css":"_assets/b76ffbb2665f82b493e0.css","/normalize/5.0.0/normalize.min.css":"_assets/b76ffbb2665f82b493e0.css","/5.0.0/normalize.min.css":"_assets/b76ffbb2665f82b493e0.css","/normalize.min.css":"_assets/b76ffbb2665f82b493e0.css","https://cdnjs.cloudflare.com/ajax/libs/sketch.js/1.0.0/sketch.min.js":"_assets/e661c8a93760bf2273a8.js","/ajax/libs/sketch.js/1.0.0/sketch.min.js":"_assets/e661c8a93760bf2273a8.js","/libs/sketch.js/1.0.0/sketch.min.js":"_assets/e661c8a93760bf2273a8.js","/sketch.js/1.0.0/sketch.min.js":"_assets/e661c8a93760bf2273a8.js","/1.0.0/sketch.min.js":"_assets/e661c8a93760bf2273a8.js","/sketch.min.js":"_assets/e661c8a93760bf2273a8.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2"};
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
