(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kodywang1994.github.io/game-box/dist/static/css/app.e54c288d2f267633de02939856e03dd6.css":"_assets/4cd4f42ebf31c0bd7aad.css","/game-box/dist/static/css/app.e54c288d2f267633de02939856e03dd6.css":"_assets/4cd4f42ebf31c0bd7aad.css","/dist/static/css/app.e54c288d2f267633de02939856e03dd6.css":"_assets/4cd4f42ebf31c0bd7aad.css","/static/css/app.e54c288d2f267633de02939856e03dd6.css":"_assets/4cd4f42ebf31c0bd7aad.css","/css/app.e54c288d2f267633de02939856e03dd6.css":"_assets/4cd4f42ebf31c0bd7aad.css","/app.e54c288d2f267633de02939856e03dd6.css":"_assets/4cd4f42ebf31c0bd7aad.css","https://kodywang1994.github.io/game-box/dist/static/js/manifest.3ad1d5771e9b13dbdad2.js":"_assets/0ccc5ee5b3895d477446.js","/game-box/dist/static/js/manifest.3ad1d5771e9b13dbdad2.js":"_assets/0ccc5ee5b3895d477446.js","/dist/static/js/manifest.3ad1d5771e9b13dbdad2.js":"_assets/0ccc5ee5b3895d477446.js","/static/js/manifest.3ad1d5771e9b13dbdad2.js":"_assets/0ccc5ee5b3895d477446.js","/js/manifest.3ad1d5771e9b13dbdad2.js":"_assets/0ccc5ee5b3895d477446.js","/manifest.3ad1d5771e9b13dbdad2.js":"_assets/0ccc5ee5b3895d477446.js","https://kodywang1994.github.io/game-box/dist/static/js/vendor.11d7e313c35e6830f1a2.js":"_assets/15d6d11cac84308dc737.js","/game-box/dist/static/js/vendor.11d7e313c35e6830f1a2.js":"_assets/15d6d11cac84308dc737.js","/dist/static/js/vendor.11d7e313c35e6830f1a2.js":"_assets/15d6d11cac84308dc737.js","/static/js/vendor.11d7e313c35e6830f1a2.js":"_assets/15d6d11cac84308dc737.js","/js/vendor.11d7e313c35e6830f1a2.js":"_assets/15d6d11cac84308dc737.js","/vendor.11d7e313c35e6830f1a2.js":"_assets/15d6d11cac84308dc737.js","https://kodywang1994.github.io/game-box/dist/static/js/app.affe9760bc193a4b22ae.js":"_assets/48a82a47dfa7a54cc60b.js","/game-box/dist/static/js/app.affe9760bc193a4b22ae.js":"_assets/48a82a47dfa7a54cc60b.js","/dist/static/js/app.affe9760bc193a4b22ae.js":"_assets/48a82a47dfa7a54cc60b.js","/static/js/app.affe9760bc193a4b22ae.js":"_assets/48a82a47dfa7a54cc60b.js","/js/app.affe9760bc193a4b22ae.js":"_assets/48a82a47dfa7a54cc60b.js","/app.affe9760bc193a4b22ae.js":"_assets/48a82a47dfa7a54cc60b.js","https://images.pexels.com/photos/18174/reflection-pad-gaming-gamepad.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260":"_assets/986d6c6a473ad931c909.avif","/photos/18174/reflection-pad-gaming-gamepad.jpg":"_assets/986d6c6a473ad931c909.avif","/photos/18174/reflection-pad-gaming-gamepad.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260":"_assets/986d6c6a473ad931c909.avif","/18174/reflection-pad-gaming-gamepad.jpg":"_assets/986d6c6a473ad931c909.avif","/reflection-pad-gaming-gamepad.jpg":"_assets/986d6c6a473ad931c909.avif","https://images.pexels.com/photos/18174/reflection-pad-gaming-gamepad.jpg":"_assets/986d6c6a473ad931c909.avif"};
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
