(() => {
  "use strict";
  const RUNTIME_MAP = {"https://dgolddragon28.github.io/Unangband/assets/css/style.css?v=70ca6de7b7e454052c5eb0dd9b0cc1e1c15b27c4":"_assets/f6a11f3bad576c1f76a6.css","/Unangband/assets/css/style.css":"_assets/f6a11f3bad576c1f76a6.css","/Unangband/assets/css/style.css?v=70ca6de7b7e454052c5eb0dd9b0cc1e1c15b27c4":"_assets/f6a11f3bad576c1f76a6.css","/assets/css/style.css":"_assets/f6a11f3bad576c1f76a6.css","/css/style.css":"_assets/f6a11f3bad576c1f76a6.css","/style.css":"_assets/f6a11f3bad576c1f76a6.css","https://dgolddragon28.github.io/Unangband/assets/css/style.css":"_assets/f6a11f3bad576c1f76a6.css","https://dgolddragon28.github.io/Unangband/assets/js/respond.js":"_assets/8956b2b57e667404fc8d.js","/Unangband/assets/js/respond.js":"_assets/8956b2b57e667404fc8d.js","/assets/js/respond.js":"_assets/8956b2b57e667404fc8d.js","/js/respond.js":"_assets/8956b2b57e667404fc8d.js","/respond.js":"_assets/8956b2b57e667404fc8d.js","https://code.jquery.com/jquery-1.12.4.min.js":"_assets/668b046d12db350ccba6.js","/jquery-1.12.4.min.js":"_assets/668b046d12db350ccba6.js","https://dgolddragon28.github.io/Unangband/assets/images/nav-bg.gif":"_assets/578a10f05b34ae6bb8b4.gif","/Unangband/assets/images/nav-bg.gif":"_assets/578a10f05b34ae6bb8b4.gif","/assets/images/nav-bg.gif":"_assets/578a10f05b34ae6bb8b4.gif","/images/nav-bg.gif":"_assets/578a10f05b34ae6bb8b4.gif","/nav-bg.gif":"_assets/578a10f05b34ae6bb8b4.gif","https://dgolddragon28.github.io/Unangband/assets/images/bullet.png":"_assets/7e1e6f6cb70bc5b1e434.png","/Unangband/assets/images/bullet.png":"_assets/7e1e6f6cb70bc5b1e434.png","/assets/images/bullet.png":"_assets/7e1e6f6cb70bc5b1e434.png","/images/bullet.png":"_assets/7e1e6f6cb70bc5b1e434.png","/bullet.png":"_assets/7e1e6f6cb70bc5b1e434.png","https://dgolddragon28.github.io/Unangband/assets/fonts/OpenSans-Light-webfont.woff":"_assets/1266c4071d9d742556f7.woff","/Unangband/assets/fonts/OpenSans-Light-webfont.woff":"_assets/1266c4071d9d742556f7.woff","/assets/fonts/OpenSans-Light-webfont.woff":"_assets/1266c4071d9d742556f7.woff","/fonts/OpenSans-Light-webfont.woff":"_assets/1266c4071d9d742556f7.woff","/OpenSans-Light-webfont.woff":"_assets/1266c4071d9d742556f7.woff","https://dgolddragon28.github.io/Unangband/assets/images/hr.gif":"_assets/ac414d4843b7d3e4d118.gif","/Unangband/assets/images/hr.gif":"_assets/ac414d4843b7d3e4d118.gif","/assets/images/hr.gif":"_assets/ac414d4843b7d3e4d118.gif","/images/hr.gif":"_assets/ac414d4843b7d3e4d118.gif","/hr.gif":"_assets/ac414d4843b7d3e4d118.gif","https://dgolddragon28.github.io/Unangband/assets/fonts/OpenSans-Regular-webfont.woff":"_assets/fe640f52967c9e03a524.woff","/Unangband/assets/fonts/OpenSans-Regular-webfont.woff":"_assets/fe640f52967c9e03a524.woff","/assets/fonts/OpenSans-Regular-webfont.woff":"_assets/fe640f52967c9e03a524.woff","/fonts/OpenSans-Regular-webfont.woff":"_assets/fe640f52967c9e03a524.woff","/OpenSans-Regular-webfont.woff":"_assets/fe640f52967c9e03a524.woff","https://dgolddragon28.github.io/Unangband/assets/fonts/OpenSans-Bold-webfont.woff":"_assets/d887ffaa65b934c37c3e.woff","/Unangband/assets/fonts/OpenSans-Bold-webfont.woff":"_assets/d887ffaa65b934c37c3e.woff","/assets/fonts/OpenSans-Bold-webfont.woff":"_assets/d887ffaa65b934c37c3e.woff","/fonts/OpenSans-Bold-webfont.woff":"_assets/d887ffaa65b934c37c3e.woff","/OpenSans-Bold-webfont.woff":"_assets/d887ffaa65b934c37c3e.woff"};
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
