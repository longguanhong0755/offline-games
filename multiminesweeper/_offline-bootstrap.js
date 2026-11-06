(() => {
  "use strict";
  const RUNTIME_MAP = {"https://napero.github.io/multiminesweeper/assets/index-DLxIMr7s.css":"_assets/5d637cf9ca4fbbb96ea8.css","/multiminesweeper/assets/index-DLxIMr7s.css":"_assets/5d637cf9ca4fbbb96ea8.css","/assets/index-DLxIMr7s.css":"_assets/5d637cf9ca4fbbb96ea8.css","/index-DLxIMr7s.css":"_assets/5d637cf9ca4fbbb96ea8.css","https://napero.github.io/multiminesweeper/assets/index-B1WG0wK5.js":"_assets/0447dcee47641f0b9238.js","/multiminesweeper/assets/index-B1WG0wK5.js":"_assets/0447dcee47641f0b9238.js","/assets/index-B1WG0wK5.js":"_assets/0447dcee47641f0b9238.js","/index-B1WG0wK5.js":"_assets/0447dcee47641f0b9238.js","https://napero.github.io/multiminesweeper/fonts/ms_sans_serif_bold.woff2":"_assets/5f3fbc5790b315fc158b.woff2","/multiminesweeper/fonts/ms_sans_serif_bold.woff2":"_assets/5f3fbc5790b315fc158b.woff2","/fonts/ms_sans_serif_bold.woff2":"_assets/5f3fbc5790b315fc158b.woff2","/ms_sans_serif_bold.woff2":"_assets/5f3fbc5790b315fc158b.woff2","https://napero.github.io/multiminesweeper/fonts/ms_sans_serif.woff2":"_assets/11b5a68acb6b967d1faa.woff2","/multiminesweeper/fonts/ms_sans_serif.woff2":"_assets/11b5a68acb6b967d1faa.woff2","/fonts/ms_sans_serif.woff2":"_assets/11b5a68acb6b967d1faa.woff2","/ms_sans_serif.woff2":"_assets/11b5a68acb6b967d1faa.woff2","https://napero.github.io/multiminesweeper/sprites/sprites.png":"_assets/ac694d2bbfb2f868bbea.png","/multiminesweeper/sprites/sprites.png":"_assets/ac694d2bbfb2f868bbea.png","/sprites/sprites.png":"_assets/ac694d2bbfb2f868bbea.png","/sprites.png":"_assets/ac694d2bbfb2f868bbea.png","https://napero.github.io/multiminesweeper/sprites/smiley.png":"_assets/a01a4b8ec9d4dd4e5b49.png","/multiminesweeper/sprites/smiley.png":"_assets/a01a4b8ec9d4dd4e5b49.png","/sprites/smiley.png":"_assets/a01a4b8ec9d4dd4e5b49.png","/smiley.png":"_assets/a01a4b8ec9d4dd4e5b49.png","https://napero.github.io/multiminesweeper/sprites/buttons.png":"_assets/7ae506214c62fc7e1bb7.png","/multiminesweeper/sprites/buttons.png":"_assets/7ae506214c62fc7e1bb7.png","/sprites/buttons.png":"_assets/7ae506214c62fc7e1bb7.png","/buttons.png":"_assets/7ae506214c62fc7e1bb7.png"};
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
