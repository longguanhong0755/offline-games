(() => {
  "use strict";
  const RUNTIME_MAP = {"https://fonts.googleapis.com/css?family=Roboto:100":"_assets/3c8a7d85d0c3489c5b77.css","/css":"_assets/3c8a7d85d0c3489c5b77.css","/css?family=Roboto:100":"_assets/3c8a7d85d0c3489c5b77.css","https://fonts.googleapis.com/css":"_assets/3c8a7d85d0c3489c5b77.css","https://sheeptester.github.io/mars/styles.css":"_assets/a919549f3b07609deebd.css","/mars/styles.css":"_assets/a919549f3b07609deebd.css","/styles.css":"_assets/a919549f3b07609deebd.css","https://sheeptester.github.io/mars/ripples.js":"_assets/8de7c4d5e36b2762eed2.js","/mars/ripples.js":"_assets/8de7c4d5e36b2762eed2.js","/ripples.js":"_assets/8de7c4d5e36b2762eed2.js","https://sheeptester.github.io/mars/game.js":"_assets/5dbeb21b6507112b5175.js","/mars/game.js":"_assets/5dbeb21b6507112b5175.js","/game.js":"_assets/5dbeb21b6507112b5175.js","https://sheeptester.github.io/mars/images/logo.svg":"_assets/9c716f08f323923d923d.svg","/mars/images/logo.svg":"_assets/9c716f08f323923d923d.svg","/images/logo.svg":"_assets/9c716f08f323923d923d.svg","/logo.svg":"_assets/9c716f08f323923d923d.svg","https://sheeptester.github.io/mars/dom-helper.js":"_assets/f451017705a24c6ac1e1.js","/mars/dom-helper.js":"_assets/f451017705a24c6ac1e1.js","/dom-helper.js":"_assets/f451017705a24c6ac1e1.js","https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbFmUiAo.woff2":"_assets/4c8752031eaedd31ccd7.woff2","/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbFmUiAo.woff2":"_assets/4c8752031eaedd31ccd7.woff2","/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbFmUiAo.woff2":"_assets/4c8752031eaedd31ccd7.woff2","/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbFmUiAo.woff2":"_assets/4c8752031eaedd31ccd7.woff2","/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbFmUiAo.woff2":"_assets/4c8752031eaedd31ccd7.woff2","https://sheeptester.github.io/mars/images/blurry-mars.png":"_assets/85ec5e5491a5eac2288b.png","/mars/images/blurry-mars.png":"_assets/85ec5e5491a5eac2288b.png","/images/blurry-mars.png":"_assets/85ec5e5491a5eac2288b.png","/blurry-mars.png":"_assets/85ec5e5491a5eac2288b.png","https://sheeptester.github.io/mars/images/player.svg":"_assets/e4d24535a9e0fe5a32c4.svg","/mars/images/player.svg":"_assets/e4d24535a9e0fe5a32c4.svg","/images/player.svg":"_assets/e4d24535a9e0fe5a32c4.svg","/player.svg":"_assets/e4d24535a9e0fe5a32c4.svg"};
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
