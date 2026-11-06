(() => {
  "use strict";
  const RUNTIME_MAP = {"http://barchok.com/p/vodka/bootstrap/css/bootstrap-responsive.css":"_assets/1f3112f166cce8e516d3.html","/p/vodka/bootstrap/css/bootstrap-responsive.css":"_assets/1f3112f166cce8e516d3.html","/vodka/bootstrap/css/bootstrap-responsive.css":"_assets/1f3112f166cce8e516d3.html","/bootstrap/css/bootstrap-responsive.css":"_assets/1f3112f166cce8e516d3.html","/css/bootstrap-responsive.css":"_assets/1f3112f166cce8e516d3.html","/bootstrap-responsive.css":"_assets/1f3112f166cce8e516d3.html","http://barchok.com/p/vodka/script/game.js":"_assets/baa18b92b162a1a4d5c7.js","/p/vodka/script/game.js":"_assets/baa18b92b162a1a4d5c7.js","/vodka/script/game.js":"_assets/baa18b92b162a1a4d5c7.js","/script/game.js":"_assets/baa18b92b162a1a4d5c7.js","/game.js":"_assets/baa18b92b162a1a4d5c7.js","http://barchok.com/p/vodka/script/angular.min.js":"_assets/fb8df05a1857fa52de1f.js","/p/vodka/script/angular.min.js":"_assets/fb8df05a1857fa52de1f.js","/vodka/script/angular.min.js":"_assets/fb8df05a1857fa52de1f.js","/script/angular.min.js":"_assets/fb8df05a1857fa52de1f.js","/angular.min.js":"_assets/fb8df05a1857fa52de1f.js","http://barchok.com/p/vodka/bootstrap/css/bootstrap.theme.min.css":"_assets/514b8450deecdfc0b432.css","/p/vodka/bootstrap/css/bootstrap.theme.min.css":"_assets/514b8450deecdfc0b432.css","/vodka/bootstrap/css/bootstrap.theme.min.css":"_assets/514b8450deecdfc0b432.css","/bootstrap/css/bootstrap.theme.min.css":"_assets/514b8450deecdfc0b432.css","/css/bootstrap.theme.min.css":"_assets/514b8450deecdfc0b432.css","/bootstrap.theme.min.css":"_assets/514b8450deecdfc0b432.css","http://fonts.googleapis.com/css?family=Droid+Sans:400,700":"_assets/dbb20e0532ca1e5c5abd.css","/css":"_assets/dbb20e0532ca1e5c5abd.css","/css?family=Droid+Sans:400,700":"_assets/dbb20e0532ca1e5c5abd.css","http://fonts.googleapis.com/css":"_assets/dbb20e0532ca1e5c5abd.css","http://barchok.com/p/vodka/bootstrap/img/glyphicons-halflings-white.png":"_assets/f0e0d95a9c8abcdfabf4.png","/p/vodka/bootstrap/img/glyphicons-halflings-white.png":"_assets/f0e0d95a9c8abcdfabf4.png","/vodka/bootstrap/img/glyphicons-halflings-white.png":"_assets/f0e0d95a9c8abcdfabf4.png","/bootstrap/img/glyphicons-halflings-white.png":"_assets/f0e0d95a9c8abcdfabf4.png","/img/glyphicons-halflings-white.png":"_assets/f0e0d95a9c8abcdfabf4.png","/glyphicons-halflings-white.png":"_assets/f0e0d95a9c8abcdfabf4.png","http://fonts.gstatic.com/s/droidsans/v19/SlGVmQWMvZQIdix7AFxXkHNSbQ.woff2":"_assets/7a291479495fbb281655.woff2","/s/droidsans/v19/SlGVmQWMvZQIdix7AFxXkHNSbQ.woff2":"_assets/7a291479495fbb281655.woff2","/droidsans/v19/SlGVmQWMvZQIdix7AFxXkHNSbQ.woff2":"_assets/7a291479495fbb281655.woff2","/v19/SlGVmQWMvZQIdix7AFxXkHNSbQ.woff2":"_assets/7a291479495fbb281655.woff2","/SlGVmQWMvZQIdix7AFxXkHNSbQ.woff2":"_assets/7a291479495fbb281655.woff2"};
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
