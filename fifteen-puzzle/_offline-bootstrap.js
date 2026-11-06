(() => {
  "use strict";
  const RUNTIME_MAP = {"https://icherya.github.io/Fifteen-Puzzle/js/lib.js":"_assets/71c3b3412016f541b567.js","/Fifteen-Puzzle/js/lib.js":"_assets/71c3b3412016f541b567.js","/js/lib.js":"_assets/71c3b3412016f541b567.js","/lib.js":"_assets/71c3b3412016f541b567.js","https://icherya.github.io/Fifteen-Puzzle/style.css":"_assets/e5b7368bf0b51e35e78e.css","/Fifteen-Puzzle/style.css":"_assets/e5b7368bf0b51e35e78e.css","/style.css":"_assets/e5b7368bf0b51e35e78e.css","https://icherya.github.io/Fifteen-Puzzle/img/300px-15-puzzle.jpg":"_assets/8266864e36f29599bc71.jpg","/Fifteen-Puzzle/img/300px-15-puzzle.jpg":"_assets/8266864e36f29599bc71.jpg","/img/300px-15-puzzle.jpg":"_assets/8266864e36f29599bc71.jpg","/300px-15-puzzle.jpg":"_assets/8266864e36f29599bc71.jpg","https://icherya.github.io/Fifteen-Puzzle/js/Cell.js":"_assets/ca6cc2c7e15f603dabb7.js","/Fifteen-Puzzle/js/Cell.js":"_assets/ca6cc2c7e15f603dabb7.js","/js/Cell.js":"_assets/ca6cc2c7e15f603dabb7.js","/Cell.js":"_assets/ca6cc2c7e15f603dabb7.js","https://icherya.github.io/Fifteen-Puzzle/js/Game.js":"_assets/42b3e846fb57a19818c9.js","/Fifteen-Puzzle/js/Game.js":"_assets/42b3e846fb57a19818c9.js","/js/Game.js":"_assets/42b3e846fb57a19818c9.js","/Game.js":"_assets/42b3e846fb57a19818c9.js","https://icherya.github.io/Fifteen-Puzzle/js/NPuzzleSolver.js":"_assets/482760aa1cd007c636f0.js","/Fifteen-Puzzle/js/NPuzzleSolver.js":"_assets/482760aa1cd007c636f0.js","/js/NPuzzleSolver.js":"_assets/482760aa1cd007c636f0.js","/NPuzzleSolver.js":"_assets/482760aa1cd007c636f0.js","https://icherya.github.io/Fifteen-Puzzle/js/index.js":"_assets/1b1c70d6f46c15d232c7.js","/Fifteen-Puzzle/js/index.js":"_assets/1b1c70d6f46c15d232c7.js","/js/index.js":"_assets/1b1c70d6f46c15d232c7.js","/index.js":"_assets/1b1c70d6f46c15d232c7.js","https://icherya.github.io/Fifteen-Puzzle/js/hammer.min.js":"_assets/1809b9d725006c1dacbf.js","/Fifteen-Puzzle/js/hammer.min.js":"_assets/1809b9d725006c1dacbf.js","/js/hammer.min.js":"_assets/1809b9d725006c1dacbf.js","/hammer.min.js":"_assets/1809b9d725006c1dacbf.js"};
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
