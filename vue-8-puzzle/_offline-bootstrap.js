(() => {
  "use strict";
  const RUNTIME_MAP = {"https://meganetaaan.github.io/vue-8-puzzle/static/css/app.7402486f3b6e84d9223621bec3521f06.css":"_assets/05d20cbd633cd0aff07f.css","/vue-8-puzzle/static/css/app.7402486f3b6e84d9223621bec3521f06.css":"_assets/05d20cbd633cd0aff07f.css","/static/css/app.7402486f3b6e84d9223621bec3521f06.css":"_assets/05d20cbd633cd0aff07f.css","/css/app.7402486f3b6e84d9223621bec3521f06.css":"_assets/05d20cbd633cd0aff07f.css","/app.7402486f3b6e84d9223621bec3521f06.css":"_assets/05d20cbd633cd0aff07f.css","https://meganetaaan.github.io/vue-8-puzzle/static/js/app.b8735673bbe240ba52f8.js":"_assets/5ecef34492890550338a.js","/vue-8-puzzle/static/js/app.b8735673bbe240ba52f8.js":"_assets/5ecef34492890550338a.js","/static/js/app.b8735673bbe240ba52f8.js":"_assets/5ecef34492890550338a.js","/js/app.b8735673bbe240ba52f8.js":"_assets/5ecef34492890550338a.js","/app.b8735673bbe240ba52f8.js":"_assets/5ecef34492890550338a.js","https://meganetaaan.github.io/vue-8-puzzle/static/js/manifest.22a64dda0ae02ab6e3d9.js":"_assets/ce0d59fb824202d22a02.js","/vue-8-puzzle/static/js/manifest.22a64dda0ae02ab6e3d9.js":"_assets/ce0d59fb824202d22a02.js","/static/js/manifest.22a64dda0ae02ab6e3d9.js":"_assets/ce0d59fb824202d22a02.js","/js/manifest.22a64dda0ae02ab6e3d9.js":"_assets/ce0d59fb824202d22a02.js","/manifest.22a64dda0ae02ab6e3d9.js":"_assets/ce0d59fb824202d22a02.js","https://meganetaaan.github.io/vue-8-puzzle/static/js/vendor.632462252a456b64c1b2.js":"_assets/669db7f32ff4acbc41fe.js","/vue-8-puzzle/static/js/vendor.632462252a456b64c1b2.js":"_assets/669db7f32ff4acbc41fe.js","/static/js/vendor.632462252a456b64c1b2.js":"_assets/669db7f32ff4acbc41fe.js","/js/vendor.632462252a456b64c1b2.js":"_assets/669db7f32ff4acbc41fe.js","/vendor.632462252a456b64c1b2.js":"_assets/669db7f32ff4acbc41fe.js","https://meganetaaan.github.io/vue-8-puzzle/static/media/cat.ae00415.webm":"_assets/d748d27b116e83473994.webm","/vue-8-puzzle/static/media/cat.ae00415.webm":"_assets/d748d27b116e83473994.webm","/static/media/cat.ae00415.webm":"_assets/d748d27b116e83473994.webm","/media/cat.ae00415.webm":"_assets/d748d27b116e83473994.webm","/cat.ae00415.webm":"_assets/d748d27b116e83473994.webm"};
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
