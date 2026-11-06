(() => {
  "use strict";
  const RUNTIME_MAP = {"https://emily1799.github.io/TypeFun/interface.css":"_assets/a4483310254d7504c02d.css","/TypeFun/interface.css":"_assets/a4483310254d7504c02d.css","/interface.css":"_assets/a4483310254d7504c02d.css","https://emily1799.github.io/TypeFun/assets/correct-mark.png":"_assets/ac01c228d3bbbc4eba4a.png","/TypeFun/assets/correct-mark.png":"_assets/ac01c228d3bbbc4eba4a.png","/assets/correct-mark.png":"_assets/ac01c228d3bbbc4eba4a.png","/correct-mark.png":"_assets/ac01c228d3bbbc4eba4a.png","https://emily1799.github.io/TypeFun/assets/Typefun.png":"_assets/7e81f774236a8c1df31d.png","/TypeFun/assets/Typefun.png":"_assets/7e81f774236a8c1df31d.png","/assets/Typefun.png":"_assets/7e81f774236a8c1df31d.png","/Typefun.png":"_assets/7e81f774236a8c1df31d.png","https://emily1799.github.io/TypeFun/assets/error-mark.png":"_assets/12a2ce9ff87701226cea.png","/TypeFun/assets/error-mark.png":"_assets/12a2ce9ff87701226cea.png","/assets/error-mark.png":"_assets/12a2ce9ff87701226cea.png","/error-mark.png":"_assets/12a2ce9ff87701226cea.png","https://emily1799.github.io/TypeFun/main.js":"_assets/d1221fc490b2c1a6aec3.js","/TypeFun/main.js":"_assets/d1221fc490b2c1a6aec3.js","/main.js":"_assets/d1221fc490b2c1a6aec3.js","https://emily1799.github.io/TypeFun/assets/computer.png":"_assets/904ef82003edca883f51.png","/TypeFun/assets/computer.png":"_assets/904ef82003edca883f51.png","/assets/computer.png":"_assets/904ef82003edca883f51.png","/computer.png":"_assets/904ef82003edca883f51.png","https://emily1799.github.io/TypeFun/assets/typist.png":"_assets/eb81761bae955ec7fa06.png","/TypeFun/assets/typist.png":"_assets/eb81761bae955ec7fa06.png","/assets/typist.png":"_assets/eb81761bae955ec7fa06.png","/typist.png":"_assets/eb81761bae955ec7fa06.png","https://emily1799.github.io/TypeFun/assets/monkey.png":"_assets/a0ce1baa77425bbb90d2.png","/TypeFun/assets/monkey.png":"_assets/a0ce1baa77425bbb90d2.png","/assets/monkey.png":"_assets/a0ce1baa77425bbb90d2.png","/monkey.png":"_assets/a0ce1baa77425bbb90d2.png"};
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
