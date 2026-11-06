(() => {
  "use strict";
  const RUNTIME_MAP = {"https://import-this.github.io/supercold/css/supercold.css":"_assets/d48a32c449aeb8a5485e.css","/supercold/css/supercold.css":"_assets/d48a32c449aeb8a5485e.css","/css/supercold.css":"_assets/d48a32c449aeb8a5485e.css","/supercold.css":"_assets/d48a32c449aeb8a5485e.css","https://import-this.github.io/supercold/js/dataview-polyfill.js":"_assets/eb56e15bce277d906989.js","/supercold/js/dataview-polyfill.js":"_assets/eb56e15bce277d906989.js","/js/dataview-polyfill.js":"_assets/eb56e15bce277d906989.js","/dataview-polyfill.js":"_assets/eb56e15bce277d906989.js","https://import-this.github.io/supercold/js/supercold.js":"_assets/ca4b2f65edb408755a62.js","/supercold/js/supercold.js":"_assets/ca4b2f65edb408755a62.js","/js/supercold.js":"_assets/ca4b2f65edb408755a62.js","/supercold.js":"_assets/ca4b2f65edb408755a62.js","https://import-this.github.io/supercold/js/ads.js":"_assets/85293ef7551277155d08.js","/supercold/js/ads.js":"_assets/85293ef7551277155d08.js","/js/ads.js":"_assets/85293ef7551277155d08.js","/ads.js":"_assets/85293ef7551277155d08.js","https://import-this.github.io/supercold/js/phaser-supercold.min.js":"_assets/3363110ec6df80ea8412.js","/supercold/js/phaser-supercold.min.js":"_assets/3363110ec6df80ea8412.js","/js/phaser-supercold.min.js":"_assets/3363110ec6df80ea8412.js","/phaser-supercold.min.js":"_assets/3363110ec6df80ea8412.js","https://import-this.github.io/supercold/audio/superhot.mp3":"_assets/d7c7158091046023053e.mp3","/supercold/audio/superhot.mp3":"_assets/d7c7158091046023053e.mp3","/audio/superhot.mp3":"_assets/d7c7158091046023053e.mp3","/superhot.mp3":"_assets/d7c7158091046023053e.mp3","https://ghbtns.com/github-btn.html?user=import-this&repo=supercold&type=star":"_assets/ea62216563585ae3e3be.html","/github-btn.html":"_assets/ea62216563585ae3e3be.html","/github-btn.html?user=import-this&repo=supercold&type=star":"_assets/ea62216563585ae3e3be.html","https://ghbtns.com/github-btn.html":"_assets/ea62216563585ae3e3be.html"};
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
