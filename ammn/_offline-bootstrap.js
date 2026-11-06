(() => {
  "use strict";
  const RUNTIME_MAP = {"http://dpaz.github.io/AMMN/main.css":"_assets/a14d81410e4c63b0c6e4.css","/AMMN/main.css":"_assets/a14d81410e4c63b0c6e4.css","/main.css":"_assets/a14d81410e4c63b0c6e4.css","http://dpaz.github.io/AMMN/resources.js":"_assets/aa961056b48f0b4886bc.js","/AMMN/resources.js":"_assets/aa961056b48f0b4886bc.js","/resources.js":"_assets/aa961056b48f0b4886bc.js","https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css":"_assets/d31bef450ee67b64f9b7.css","/bootstrap/3.3.2/css/bootstrap.min.css":"_assets/d31bef450ee67b64f9b7.css","/3.3.2/css/bootstrap.min.css":"_assets/d31bef450ee67b64f9b7.css","/css/bootstrap.min.css":"_assets/d31bef450ee67b64f9b7.css","/bootstrap.min.css":"_assets/d31bef450ee67b64f9b7.css","https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js":"_assets/c8eeec83fe8bf655eeed.js","/bootstrap/3.3.2/js/bootstrap.min.js":"_assets/c8eeec83fe8bf655eeed.js","/3.3.2/js/bootstrap.min.js":"_assets/c8eeec83fe8bf655eeed.js","/js/bootstrap.min.js":"_assets/c8eeec83fe8bf655eeed.js","/bootstrap.min.js":"_assets/c8eeec83fe8bf655eeed.js","http://dpaz.github.io/AMMN/main.js":"_assets/dbec508165741142ee7f.js","/AMMN/main.js":"_assets/dbec508165741142ee7f.js","/main.js":"_assets/dbec508165741142ee7f.js","http://dpaz.github.io/AMMN/jobs.js":"_assets/08e5e2e6c40ada69a6bb.js","/AMMN/jobs.js":"_assets/08e5e2e6c40ada69a6bb.js","/jobs.js":"_assets/08e5e2e6c40ada69a6bb.js","http://code.jquery.com/jquery-1.11.2.min.js":"_assets/2ecd295d295bec062ced.js","/jquery-1.11.2.min.js":"_assets/2ecd295d295bec062ced.js","http://dpaz.github.io/AMMN/koala.js":"_assets/340522a3931abf41e13d.js","/AMMN/koala.js":"_assets/340522a3931abf41e13d.js","/koala.js":"_assets/340522a3931abf41e13d.js","http://dpaz.github.io/AMMN/city.js":"_assets/a7bce217cc5996961689.js","/AMMN/city.js":"_assets/a7bce217cc5996961689.js","/city.js":"_assets/a7bce217cc5996961689.js"};
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
