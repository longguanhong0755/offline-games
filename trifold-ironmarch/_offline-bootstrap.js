(() => {
  "use strict";
  const RUNTIME_MAP = {"https://rtalado.github.io/trifold-ironmarch/css/style.css":"_assets/4d03ebee890ff251f6cd.css","/trifold-ironmarch/css/style.css":"_assets/4d03ebee890ff251f6cd.css","/css/style.css":"_assets/4d03ebee890ff251f6cd.css","/style.css":"_assets/4d03ebee890ff251f6cd.css","https://rtalado.github.io/trifold-ironmarch/js/lore.js":"_assets/28db3ef4a44f31887950.js","/trifold-ironmarch/js/lore.js":"_assets/28db3ef4a44f31887950.js","/js/lore.js":"_assets/28db3ef4a44f31887950.js","/lore.js":"_assets/28db3ef4a44f31887950.js","https://rtalado.github.io/trifold-ironmarch/js/core.js":"_assets/4911d508f22ca24c027c.js","/trifold-ironmarch/js/core.js":"_assets/4911d508f22ca24c027c.js","/js/core.js":"_assets/4911d508f22ca24c027c.js","/core.js":"_assets/4911d508f22ca24c027c.js","https://rtalado.github.io/trifold-ironmarch/js/defs.js":"_assets/2dfa8ee5423c16d2a4ee.js","/trifold-ironmarch/js/defs.js":"_assets/2dfa8ee5423c16d2a4ee.js","/js/defs.js":"_assets/2dfa8ee5423c16d2a4ee.js","/defs.js":"_assets/2dfa8ee5423c16d2a4ee.js","https://rtalado.github.io/trifold-ironmarch/js/sim.js":"_assets/139f9e0118e4681df9ca.js","/trifold-ironmarch/js/sim.js":"_assets/139f9e0118e4681df9ca.js","/js/sim.js":"_assets/139f9e0118e4681df9ca.js","/sim.js":"_assets/139f9e0118e4681df9ca.js","https://rtalado.github.io/trifold-ironmarch/js/combat.js":"_assets/ea3ec6090978107d2826.js","/trifold-ironmarch/js/combat.js":"_assets/ea3ec6090978107d2826.js","/js/combat.js":"_assets/ea3ec6090978107d2826.js","/combat.js":"_assets/ea3ec6090978107d2826.js","https://rtalado.github.io/trifold-ironmarch/js/meta.js":"_assets/552749182c426fbbfd8a.js","/trifold-ironmarch/js/meta.js":"_assets/552749182c426fbbfd8a.js","/js/meta.js":"_assets/552749182c426fbbfd8a.js","/meta.js":"_assets/552749182c426fbbfd8a.js","https://rtalado.github.io/trifold-ironmarch/js/run.js":"_assets/da1b27d20abc267109ab.js","/trifold-ironmarch/js/run.js":"_assets/da1b27d20abc267109ab.js","/js/run.js":"_assets/da1b27d20abc267109ab.js","/run.js":"_assets/da1b27d20abc267109ab.js","https://rtalado.github.io/trifold-ironmarch/js/render.js":"_assets/cb6edcbf326c73e99a0f.js","/trifold-ironmarch/js/render.js":"_assets/cb6edcbf326c73e99a0f.js","/js/render.js":"_assets/cb6edcbf326c73e99a0f.js","/render.js":"_assets/cb6edcbf326c73e99a0f.js","https://rtalado.github.io/trifold-ironmarch/js/sprites.js":"_assets/208973db36491a1f89c1.js","/trifold-ironmarch/js/sprites.js":"_assets/208973db36491a1f89c1.js","/js/sprites.js":"_assets/208973db36491a1f89c1.js","/sprites.js":"_assets/208973db36491a1f89c1.js","https://rtalado.github.io/trifold-ironmarch/js/main.js":"_assets/c4a7e6857e4fef74a6d1.js","/trifold-ironmarch/js/main.js":"_assets/c4a7e6857e4fef74a6d1.js","/js/main.js":"_assets/c4a7e6857e4fef74a6d1.js","/main.js":"_assets/c4a7e6857e4fef74a6d1.js","https://rtalado.github.io/trifold-ironmarch/js/ui.js":"_assets/f6264f7f2deb0381c03b.js","/trifold-ironmarch/js/ui.js":"_assets/f6264f7f2deb0381c03b.js","/js/ui.js":"_assets/f6264f7f2deb0381c03b.js","/ui.js":"_assets/f6264f7f2deb0381c03b.js"};
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
