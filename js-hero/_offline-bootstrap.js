(() => {
  "use strict";
  const RUNTIME_MAP = {"https://jhedev96.github.io/JS-Hero/photos/github_icon.png":"_assets/ead77ec8ee1a4cb65b7a.png","/JS-Hero/photos/github_icon.png":"_assets/ead77ec8ee1a4cb65b7a.png","/photos/github_icon.png":"_assets/ead77ec8ee1a4cb65b7a.png","/github_icon.png":"_assets/ead77ec8ee1a4cb65b7a.png","https://jhedev96.github.io/JS-Hero/css/master.css":"_assets/4a43ad9236ec20e2d239.css","/JS-Hero/css/master.css":"_assets/4a43ad9236ec20e2d239.css","/css/master.css":"_assets/4a43ad9236ec20e2d239.css","/master.css":"_assets/4a43ad9236ec20e2d239.css","https://fonts.googleapis.com/css?family=Roboto:400,700":"_assets/f0664eb298d7ca7c157d.css","/css":"_assets/999e75161a79e63ec342.css","/css?family=Roboto:400,700":"_assets/f0664eb298d7ca7c157d.css","https://fonts.googleapis.com/css":"_assets/999e75161a79e63ec342.css","https://fonts.googleapis.com/css?family=Bangers":"_assets/999e75161a79e63ec342.css","/css?family=Bangers":"_assets/999e75161a79e63ec342.css","https://jhedev96.github.io/JS-Hero/lib/bundle.js":"_assets/4ffeed404383794b0124.js","/JS-Hero/lib/bundle.js":"_assets/4ffeed404383794b0124.js","/lib/bundle.js":"_assets/4ffeed404383794b0124.js","/bundle.js":"_assets/4ffeed404383794b0124.js","https://jhedev96.github.io/JS-Hero/vendor/three.js":"_assets/db9f56ba33f511100f32.js","/JS-Hero/vendor/three.js":"_assets/db9f56ba33f511100f32.js","/vendor/three.js":"_assets/db9f56ba33f511100f32.js","/three.js":"_assets/db9f56ba33f511100f32.js","https://jhedev96.github.io/JS-Hero/photos/stage.jpeg":"_assets/0d516c8872f4262c631c.jpg","/JS-Hero/photos/stage.jpeg":"_assets/0d516c8872f4262c631c.jpg","/photos/stage.jpeg":"_assets/0d516c8872f4262c631c.jpg","/stage.jpeg":"_assets/0d516c8872f4262c631c.jpg","https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2":"_assets/1404ca348bd75ef836f4.woff2","/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2":"_assets/1404ca348bd75ef836f4.woff2","/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2":"_assets/1404ca348bd75ef836f4.woff2","/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2":"_assets/1404ca348bd75ef836f4.woff2","/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2":"_assets/1404ca348bd75ef836f4.woff2","https://fonts.gstatic.com/s/bangers/v25/FeVQS0BTqb0h60ACH55Q2A.woff2":"_assets/04f54ff42ea2b8fc50b4.woff2","/s/bangers/v25/FeVQS0BTqb0h60ACH55Q2A.woff2":"_assets/04f54ff42ea2b8fc50b4.woff2","/bangers/v25/FeVQS0BTqb0h60ACH55Q2A.woff2":"_assets/04f54ff42ea2b8fc50b4.woff2","/v25/FeVQS0BTqb0h60ACH55Q2A.woff2":"_assets/04f54ff42ea2b8fc50b4.woff2","/FeVQS0BTqb0h60ACH55Q2A.woff2":"_assets/04f54ff42ea2b8fc50b4.woff2"};
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
