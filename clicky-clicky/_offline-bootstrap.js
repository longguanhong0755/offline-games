(() => {
  "use strict";
  const RUNTIME_MAP = {"https://fonts.googleapis.com/css?family=Roboto":"_assets/8222a773282c84b36fcb.css","/css":"_assets/8222a773282c84b36fcb.css","/css?family=Roboto":"_assets/8222a773282c84b36fcb.css","https://fonts.googleapis.com/css":"_assets/8222a773282c84b36fcb.css","https://p1k5up.github.io/Clicky-Clicky/hud.css":"_assets/f719b5eba78c00fc0703.css","/Clicky-Clicky/hud.css":"_assets/f719b5eba78c00fc0703.css","/hud.css":"_assets/f719b5eba78c00fc0703.css","https://p1k5up.github.io/Clicky-Clicky/style.css":"_assets/b7d2d28e6e0b6d9e94fb.css","/Clicky-Clicky/style.css":"_assets/b7d2d28e6e0b6d9e94fb.css","/style.css":"_assets/b7d2d28e6e0b6d9e94fb.css","https://p1k5up.github.io/Clicky-Clicky/scripts/main.js":"_assets/1395024e696f85718262.js","/Clicky-Clicky/scripts/main.js":"_assets/1395024e696f85718262.js","/scripts/main.js":"_assets/1395024e696f85718262.js","/main.js":"_assets/1395024e696f85718262.js","https://p1k5up.github.io/Clicky-Clicky/scripts/hud.js":"_assets/e006374a63f32851c53f.js","/Clicky-Clicky/scripts/hud.js":"_assets/e006374a63f32851c53f.js","/scripts/hud.js":"_assets/e006374a63f32851c53f.js","/hud.js":"_assets/e006374a63f32851c53f.js","https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmUiAo.woff2":"_assets/425c0713a8176f92273d.woff2","/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmUiAo.woff2":"_assets/425c0713a8176f92273d.woff2","/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmUiAo.woff2":"_assets/425c0713a8176f92273d.woff2","/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmUiAo.woff2":"_assets/425c0713a8176f92273d.woff2","/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmUiAo.woff2":"_assets/425c0713a8176f92273d.woff2","https://p1k5up.github.io/Clicky-Clicky/fonts/fontsans.otf":"_assets/9de9429d12247a798706.otf","/Clicky-Clicky/fonts/fontsans.otf":"_assets/9de9429d12247a798706.otf","/fonts/fontsans.otf":"_assets/9de9429d12247a798706.otf","/fontsans.otf":"_assets/9de9429d12247a798706.otf","https://p1k5up.github.io/Clicky-Clicky/fonts/fontcurvy.otf":"_assets/7a35a877eb678ddbed1a.otf","/Clicky-Clicky/fonts/fontcurvy.otf":"_assets/7a35a877eb678ddbed1a.otf","/fonts/fontcurvy.otf":"_assets/7a35a877eb678ddbed1a.otf","/fontcurvy.otf":"_assets/7a35a877eb678ddbed1a.otf"};
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
