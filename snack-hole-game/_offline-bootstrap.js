(() => {
  "use strict";
  const RUNTIME_MAP = {"https://samadipour.github.io/snack-hole-game/assets/index-R6Nuaa8d.css":"_assets/181ca44c0c059c67d4aa.css","/snack-hole-game/assets/index-R6Nuaa8d.css":"_assets/181ca44c0c059c67d4aa.css","/assets/index-R6Nuaa8d.css":"_assets/181ca44c0c059c67d4aa.css","/index-R6Nuaa8d.css":"_assets/181ca44c0c059c67d4aa.css","https://samadipour.github.io/snack-hole-game/assets/index-BKKoxlgA.js":"_assets/98103b101902e0d0bf44.js","/snack-hole-game/assets/index-BKKoxlgA.js":"_assets/98103b101902e0d0bf44.js","/assets/index-BKKoxlgA.js":"_assets/98103b101902e0d0bf44.js","/index-BKKoxlgA.js":"_assets/98103b101902e0d0bf44.js","https://samadipour.github.io/snack-hole-game/assets/three-CT59q1pD.js":"_assets/f252957e0a6090f76f7d.js","/snack-hole-game/assets/three-CT59q1pD.js":"_assets/f252957e0a6090f76f7d.js","/assets/three-CT59q1pD.js":"_assets/f252957e0a6090f76f7d.js","/three-CT59q1pD.js":"_assets/f252957e0a6090f76f7d.js","https://samadipour.github.io/snack-hole-game/assets/nunito-latin-wght-normal-BzFMHfZw.woff2":"_assets/ba344451eab25b217a16.woff2","/snack-hole-game/assets/nunito-latin-wght-normal-BzFMHfZw.woff2":"_assets/ba344451eab25b217a16.woff2","/assets/nunito-latin-wght-normal-BzFMHfZw.woff2":"_assets/ba344451eab25b217a16.woff2","/nunito-latin-wght-normal-BzFMHfZw.woff2":"_assets/ba344451eab25b217a16.woff2"};
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
