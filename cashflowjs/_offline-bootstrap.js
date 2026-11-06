(() => {
  "use strict";
  const RUNTIME_MAP = {"https://sleighs.github.io/CashFlowJs/css/background-svg.css":"_assets/2b52ee105521352855e3.css","/CashFlowJs/css/background-svg.css":"_assets/2b52ee105521352855e3.css","/css/background-svg.css":"_assets/2b52ee105521352855e3.css","/background-svg.css":"_assets/2b52ee105521352855e3.css","https://sleighs.github.io/CashFlowJs/css/style.css":"_assets/9dacbba3c9bb69a2a2f1.css","/CashFlowJs/css/style.css":"_assets/9dacbba3c9bb69a2a2f1.css","/css/style.css":"_assets/9dacbba3c9bb69a2a2f1.css","/style.css":"_assets/9dacbba3c9bb69a2a2f1.css","https://sleighs.github.io/CashFlowJs/src/jquery-3.4.1.js":"_assets/f2a84bc4f4cb8ae04162.js","/CashFlowJs/src/jquery-3.4.1.js":"_assets/f2a84bc4f4cb8ae04162.js","/src/jquery-3.4.1.js":"_assets/f2a84bc4f4cb8ae04162.js","/jquery-3.4.1.js":"_assets/f2a84bc4f4cb8ae04162.js","https://sleighs.github.io/CashFlowJs/js/index.js":"_assets/4681db4f212be476a265.js","/CashFlowJs/js/index.js":"_assets/4681db4f212be476a265.js","/js/index.js":"_assets/4681db4f212be476a265.js","/index.js":"_assets/4681db4f212be476a265.js","https://sleighs.github.io/CashFlowJs/js/fasttrack.js":"_assets/becbc127930b0f32b08c.js","/CashFlowJs/js/fasttrack.js":"_assets/becbc127930b0f32b08c.js","/js/fasttrack.js":"_assets/becbc127930b0f32b08c.js","/fasttrack.js":"_assets/becbc127930b0f32b08c.js","https://sleighs.github.io/CashFlowJs/js/options.js":"_assets/457ad004fb2510ce3c61.js","/CashFlowJs/js/options.js":"_assets/457ad004fb2510ce3c61.js","/js/options.js":"_assets/457ad004fb2510ce3c61.js","/options.js":"_assets/457ad004fb2510ce3c61.js","https://sleighs.github.io/CashFlowJs/js/cards.js":"_assets/80a90f335407f0a6f36f.js","/CashFlowJs/js/cards.js":"_assets/80a90f335407f0a6f36f.js","/js/cards.js":"_assets/80a90f335407f0a6f36f.js","/cards.js":"_assets/80a90f335407f0a6f36f.js","https://sleighs.github.io/CashFlowJs/js/board.js":"_assets/99d8a05730943fbbcdbe.js","/CashFlowJs/js/board.js":"_assets/99d8a05730943fbbcdbe.js","/js/board.js":"_assets/99d8a05730943fbbcdbe.js","/board.js":"_assets/99d8a05730943fbbcdbe.js","https://sleighs.github.io/CashFlowJs/js/display.js":"_assets/4e24ed17a4ba84642591.js","/CashFlowJs/js/display.js":"_assets/4e24ed17a4ba84642591.js","/js/display.js":"_assets/4e24ed17a4ba84642591.js","/display.js":"_assets/4e24ed17a4ba84642591.js","https://sleighs.github.io/CashFlowJs/css/mobile-portrait.css":"_assets/321ed0dd80b85f61429b.css","/CashFlowJs/css/mobile-portrait.css":"_assets/321ed0dd80b85f61429b.css","/css/mobile-portrait.css":"_assets/321ed0dd80b85f61429b.css","/mobile-portrait.css":"_assets/321ed0dd80b85f61429b.css","https://sleighs.github.io/CashFlowJs/css/mobile-landscape.css":"_assets/321ed0dd80b85f61429b.css","/CashFlowJs/css/mobile-landscape.css":"_assets/321ed0dd80b85f61429b.css","/css/mobile-landscape.css":"_assets/321ed0dd80b85f61429b.css","/mobile-landscape.css":"_assets/321ed0dd80b85f61429b.css"};
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
