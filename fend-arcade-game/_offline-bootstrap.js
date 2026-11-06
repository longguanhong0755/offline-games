(() => {
  "use strict";
  const RUNTIME_MAP = {"https://sandraisrael.github.io/fend-arcade-game/css/style.css":"_assets/62757c5b07446e6213c1.css","/fend-arcade-game/css/style.css":"_assets/62757c5b07446e6213c1.css","/css/style.css":"_assets/62757c5b07446e6213c1.css","/style.css":"_assets/62757c5b07446e6213c1.css","https://sandraisrael.github.io/fend-arcade-game/js/resources.js":"_assets/e65dcd12f03eb09deda9.js","/fend-arcade-game/js/resources.js":"_assets/e65dcd12f03eb09deda9.js","/js/resources.js":"_assets/e65dcd12f03eb09deda9.js","/resources.js":"_assets/e65dcd12f03eb09deda9.js","https://sandraisrael.github.io/fend-arcade-game/js/app.js":"_assets/3bb30fa6b8aeb52db36a.js","/fend-arcade-game/js/app.js":"_assets/3bb30fa6b8aeb52db36a.js","/js/app.js":"_assets/3bb30fa6b8aeb52db36a.js","/app.js":"_assets/3bb30fa6b8aeb52db36a.js","https://sandraisrael.github.io/fend-arcade-game/js/engine.js":"_assets/5f9f029305d21e72a804.js","/fend-arcade-game/js/engine.js":"_assets/5f9f029305d21e72a804.js","/js/engine.js":"_assets/5f9f029305d21e72a804.js","/engine.js":"_assets/5f9f029305d21e72a804.js","https://fonts.googleapis.com/css?family=Gloria+Hallelujah":"_assets/790158d6c77a9a021900.css","/css":"_assets/fb5bdab8e44bd6eb9973.css","/css?family=Gloria+Hallelujah":"_assets/790158d6c77a9a021900.css","https://fonts.googleapis.com/css":"_assets/fb5bdab8e44bd6eb9973.css","https://fonts.googleapis.com/css?family=Alegreya":"_assets/fb5bdab8e44bd6eb9973.css","/css?family=Alegreya":"_assets/fb5bdab8e44bd6eb9973.css","https://sandraisrael.github.io/fend-arcade-game/images/stone-block.png":"_assets/17505d0c22c44abc4d3f.png","/fend-arcade-game/images/stone-block.png":"_assets/17505d0c22c44abc4d3f.png","/images/stone-block.png":"_assets/17505d0c22c44abc4d3f.png","/stone-block.png":"_assets/17505d0c22c44abc4d3f.png","https://sandraisrael.github.io/fend-arcade-game/images/water-block.png":"_assets/be277b3d023b14c471ac.png","/fend-arcade-game/images/water-block.png":"_assets/be277b3d023b14c471ac.png","/images/water-block.png":"_assets/be277b3d023b14c471ac.png","/water-block.png":"_assets/be277b3d023b14c471ac.png","https://sandraisrael.github.io/fend-arcade-game/images/grass-block.png":"_assets/9a8e82a2856d066ac425.png","/fend-arcade-game/images/grass-block.png":"_assets/9a8e82a2856d066ac425.png","/images/grass-block.png":"_assets/9a8e82a2856d066ac425.png","/grass-block.png":"_assets/9a8e82a2856d066ac425.png","https://sandraisrael.github.io/fend-arcade-game/images/enemy-bug.png":"_assets/18924753bb3ab5965ea3.png","/fend-arcade-game/images/enemy-bug.png":"_assets/18924753bb3ab5965ea3.png","/images/enemy-bug.png":"_assets/18924753bb3ab5965ea3.png","/enemy-bug.png":"_assets/18924753bb3ab5965ea3.png","https://sandraisrael.github.io/fend-arcade-game/images/char-boy.png":"_assets/f3053feeacf4977682c0.png","/fend-arcade-game/images/char-boy.png":"_assets/f3053feeacf4977682c0.png","/images/char-boy.png":"_assets/f3053feeacf4977682c0.png","/char-boy.png":"_assets/f3053feeacf4977682c0.png","https://sandraisrael.github.io/fend-arcade-game/images/char-pink-girl.png":"_assets/0cc39aa5a9003595a9fe.png","/fend-arcade-game/images/char-pink-girl.png":"_assets/0cc39aa5a9003595a9fe.png","/images/char-pink-girl.png":"_assets/0cc39aa5a9003595a9fe.png","/char-pink-girl.png":"_assets/0cc39aa5a9003595a9fe.png","https://fonts.gstatic.com/s/alegreya/v41/4UacrEBBsBhlBjvfkQjt71kZfyBzPgNG9hU4-6qj.woff2":"_assets/7cbcf38a5ef682a8b9e2.woff2","/s/alegreya/v41/4UacrEBBsBhlBjvfkQjt71kZfyBzPgNG9hU4-6qj.woff2":"_assets/7cbcf38a5ef682a8b9e2.woff2","/alegreya/v41/4UacrEBBsBhlBjvfkQjt71kZfyBzPgNG9hU4-6qj.woff2":"_assets/7cbcf38a5ef682a8b9e2.woff2","/v41/4UacrEBBsBhlBjvfkQjt71kZfyBzPgNG9hU4-6qj.woff2":"_assets/7cbcf38a5ef682a8b9e2.woff2","/4UacrEBBsBhlBjvfkQjt71kZfyBzPgNG9hU4-6qj.woff2":"_assets/7cbcf38a5ef682a8b9e2.woff2","https://fonts.gstatic.com/s/gloriahallelujah/v24/LYjYdHv3kUk9BMV96EIswT9DIbW-MIS11zM.woff2":"_assets/90b0ef8d2ed6d4b46b4e.woff2","/s/gloriahallelujah/v24/LYjYdHv3kUk9BMV96EIswT9DIbW-MIS11zM.woff2":"_assets/90b0ef8d2ed6d4b46b4e.woff2","/gloriahallelujah/v24/LYjYdHv3kUk9BMV96EIswT9DIbW-MIS11zM.woff2":"_assets/90b0ef8d2ed6d4b46b4e.woff2","/v24/LYjYdHv3kUk9BMV96EIswT9DIbW-MIS11zM.woff2":"_assets/90b0ef8d2ed6d4b46b4e.woff2","/LYjYdHv3kUk9BMV96EIswT9DIbW-MIS11zM.woff2":"_assets/90b0ef8d2ed6d4b46b4e.woff2","https://sandraisrael.github.io/fend-arcade-game/images/Heart.png":"_assets/a0df931d4ecc40e66aa8.png","/fend-arcade-game/images/Heart.png":"_assets/a0df931d4ecc40e66aa8.png","/images/Heart.png":"_assets/a0df931d4ecc40e66aa8.png","/Heart.png":"_assets/a0df931d4ecc40e66aa8.png","https://sandraisrael.github.io/fend-arcade-game/images/Key.png":"_assets/b70c51811bf9a4ffc51b.png","/fend-arcade-game/images/Key.png":"_assets/b70c51811bf9a4ffc51b.png","/images/Key.png":"_assets/b70c51811bf9a4ffc51b.png","/Key.png":"_assets/b70c51811bf9a4ffc51b.png","https://sandraisrael.github.io/fend-arcade-game/images/Star.png":"_assets/3b1c1c9de3f567cb533b.png","/fend-arcade-game/images/Star.png":"_assets/3b1c1c9de3f567cb533b.png","/images/Star.png":"_assets/3b1c1c9de3f567cb533b.png","/Star.png":"_assets/3b1c1c9de3f567cb533b.png"};
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
