(() => {
  "use strict";
  const RUNTIME_MAP = {"https://90spixeldev.github.io/Dress_Up_Game/css/dress-up.css":"_assets/09c6a2a15a3c82e175a5.css","/Dress_Up_Game/css/dress-up.css":"_assets/09c6a2a15a3c82e175a5.css","/css/dress-up.css":"_assets/09c6a2a15a3c82e175a5.css","/dress-up.css":"_assets/09c6a2a15a3c82e175a5.css","https://90spixeldev.github.io/Dress_Up_Game/js/DUDemo.js":"_assets/85e7d00be9ffc6b471e0.js","/Dress_Up_Game/js/DUDemo.js":"_assets/85e7d00be9ffc6b471e0.js","/js/DUDemo.js":"_assets/85e7d00be9ffc6b471e0.js","/DUDemo.js":"_assets/85e7d00be9ffc6b471e0.js","https://90spixeldev.github.io/Dress_Up_Game/img/bg.png":"_assets/8a3cdc43d332a05ddce6.png","/Dress_Up_Game/img/bg.png":"_assets/8a3cdc43d332a05ddce6.png","/img/bg.png":"_assets/8a3cdc43d332a05ddce6.png","/bg.png":"_assets/8a3cdc43d332a05ddce6.png","https://90spixeldev.github.io/Dress_Up_Game/img/base/base_1.png":"_assets/e51ca9ca3a11c7623f82.png","/Dress_Up_Game/img/base/base_1.png":"_assets/e51ca9ca3a11c7623f82.png","/img/base/base_1.png":"_assets/e51ca9ca3a11c7623f82.png","/base/base_1.png":"_assets/e51ca9ca3a11c7623f82.png","/base_1.png":"_assets/e51ca9ca3a11c7623f82.png","https://90spixeldev.github.io/Dress_Up_Game/img/hair/hair_1.png":"_assets/f090b386a45139b63ea2.png","/Dress_Up_Game/img/hair/hair_1.png":"_assets/f090b386a45139b63ea2.png","/img/hair/hair_1.png":"_assets/f090b386a45139b63ea2.png","/hair/hair_1.png":"_assets/f090b386a45139b63ea2.png","/hair_1.png":"_assets/f090b386a45139b63ea2.png","https://90spixeldev.github.io/Dress_Up_Game/img/top/top_1.png":"_assets/0ce212f5ef7886f55e20.png","/Dress_Up_Game/img/top/top_1.png":"_assets/0ce212f5ef7886f55e20.png","/img/top/top_1.png":"_assets/0ce212f5ef7886f55e20.png","/top/top_1.png":"_assets/0ce212f5ef7886f55e20.png","/top_1.png":"_assets/0ce212f5ef7886f55e20.png","https://90spixeldev.github.io/Dress_Up_Game/img/bottom/bottom_1.png":"_assets/b5f433a4d1e4933b4387.png","/Dress_Up_Game/img/bottom/bottom_1.png":"_assets/b5f433a4d1e4933b4387.png","/img/bottom/bottom_1.png":"_assets/b5f433a4d1e4933b4387.png","/bottom/bottom_1.png":"_assets/b5f433a4d1e4933b4387.png","/bottom_1.png":"_assets/b5f433a4d1e4933b4387.png","https://90spixeldev.github.io/Dress_Up_Game/img/shoes/shoes_1.png":"_assets/e5fbbbb84f97f0cac3f2.png","/Dress_Up_Game/img/shoes/shoes_1.png":"_assets/e5fbbbb84f97f0cac3f2.png","/img/shoes/shoes_1.png":"_assets/e5fbbbb84f97f0cac3f2.png","/shoes/shoes_1.png":"_assets/e5fbbbb84f97f0cac3f2.png","/shoes_1.png":"_assets/e5fbbbb84f97f0cac3f2.png","https://90spixeldev.github.io/Dress_Up_Game/img/test/next-btn.png":"_assets/69d370baecbcb1b79825.png","/Dress_Up_Game/img/test/next-btn.png":"_assets/69d370baecbcb1b79825.png","/img/test/next-btn.png":"_assets/69d370baecbcb1b79825.png","/test/next-btn.png":"_assets/69d370baecbcb1b79825.png","/next-btn.png":"_assets/69d370baecbcb1b79825.png","https://90spixeldev.github.io/Dress_Up_Game/img/test/prev-btn.png":"_assets/ed1382c2eea7aa945566.png","/Dress_Up_Game/img/test/prev-btn.png":"_assets/ed1382c2eea7aa945566.png","/img/test/prev-btn.png":"_assets/ed1382c2eea7aa945566.png","/test/prev-btn.png":"_assets/ed1382c2eea7aa945566.png","/prev-btn.png":"_assets/ed1382c2eea7aa945566.png"};
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
