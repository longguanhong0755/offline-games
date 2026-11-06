(() => {
  "use strict";
  const RUNTIME_MAP = {"https://sercanpaspal.github.io/jumplama/static/css/main.55cd0fb3.chunk.css":"_assets/af2b7d271ffff12cd598.css","/jumplama/static/css/main.55cd0fb3.chunk.css":"_assets/af2b7d271ffff12cd598.css","/static/css/main.55cd0fb3.chunk.css":"_assets/af2b7d271ffff12cd598.css","/css/main.55cd0fb3.chunk.css":"_assets/af2b7d271ffff12cd598.css","/main.55cd0fb3.chunk.css":"_assets/af2b7d271ffff12cd598.css","https://sercanpaspal.github.io/jumplama/static/js/main.426988ce.chunk.js":"_assets/016b8554fc7f7b2943b7.js","/jumplama/static/js/main.426988ce.chunk.js":"_assets/016b8554fc7f7b2943b7.js","/static/js/main.426988ce.chunk.js":"_assets/016b8554fc7f7b2943b7.js","/js/main.426988ce.chunk.js":"_assets/016b8554fc7f7b2943b7.js","/main.426988ce.chunk.js":"_assets/016b8554fc7f7b2943b7.js","https://fonts.googleapis.com/css?family=Bangers&display=swap&subset=latin-ext":"_assets/d715f2bba1e0e6c3d991.css","/css":"_assets/d715f2bba1e0e6c3d991.css","/css?family=Bangers&display=swap&subset=latin-ext":"_assets/d715f2bba1e0e6c3d991.css","https://fonts.googleapis.com/css":"_assets/d715f2bba1e0e6c3d991.css","https://sercanpaspal.github.io/jumplama/static/js/2.76a03bfc.chunk.js":"_assets/2a2b05e373d27c29bdee.js","/jumplama/static/js/2.76a03bfc.chunk.js":"_assets/2a2b05e373d27c29bdee.js","/static/js/2.76a03bfc.chunk.js":"_assets/2a2b05e373d27c29bdee.js","/js/2.76a03bfc.chunk.js":"_assets/2a2b05e373d27c29bdee.js","/2.76a03bfc.chunk.js":"_assets/2a2b05e373d27c29bdee.js","https://fonts.gstatic.com/s/bangers/v25/FeVQS0BTqb0h60ACH55Q2A.woff2":"_assets/04f54ff42ea2b8fc50b4.woff2","/s/bangers/v25/FeVQS0BTqb0h60ACH55Q2A.woff2":"_assets/04f54ff42ea2b8fc50b4.woff2","/bangers/v25/FeVQS0BTqb0h60ACH55Q2A.woff2":"_assets/04f54ff42ea2b8fc50b4.woff2","/v25/FeVQS0BTqb0h60ACH55Q2A.woff2":"_assets/04f54ff42ea2b8fc50b4.woff2","/FeVQS0BTqb0h60ACH55Q2A.woff2":"_assets/04f54ff42ea2b8fc50b4.woff2","https://sercanpaspal.github.io/jumplama/static/media/block.f7a0aaaf.png":"_assets/a2130a4e7f4bde43ab5d.png","/jumplama/static/media/block.f7a0aaaf.png":"_assets/a2130a4e7f4bde43ab5d.png","/static/media/block.f7a0aaaf.png":"_assets/a2130a4e7f4bde43ab5d.png","/media/block.f7a0aaaf.png":"_assets/a2130a4e7f4bde43ab5d.png","/block.f7a0aaaf.png":"_assets/a2130a4e7f4bde43ab5d.png","https://sercanpaspal.github.io/jumplama/static/media/red-bonus.6fe51ce6.png":"_assets/f46b197d5b37928db690.png","/jumplama/static/media/red-bonus.6fe51ce6.png":"_assets/f46b197d5b37928db690.png","/static/media/red-bonus.6fe51ce6.png":"_assets/f46b197d5b37928db690.png","/media/red-bonus.6fe51ce6.png":"_assets/f46b197d5b37928db690.png","/red-bonus.6fe51ce6.png":"_assets/f46b197d5b37928db690.png"};
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
