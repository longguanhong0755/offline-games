(() => {
  "use strict";
  const RUNTIME_MAP = {"https://fabianacampanari.github.io/Top-Trumps/script.js":"_assets/5ac87e05a63ad758275a.js","/Top-Trumps/script.js":"_assets/5ac87e05a63ad758275a.js","/script.js":"_assets/5ac87e05a63ad758275a.js","https://fabianacampanari.github.io/Top-Trumps/style.css":"_assets/1ed1a940026795763a09.css","/Top-Trumps/style.css":"_assets/1ed1a940026795763a09.css","/style.css":"_assets/1ed1a940026795763a09.css","https://images6.alphacoders.com/681/681840.jpg":"_assets/86668cdfdc3f4071fe86.jpg","/681/681840.jpg":"_assets/86668cdfdc3f4071fe86.jpg","/681840.jpg":"_assets/86668cdfdc3f4071fe86.jpg","https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap":"_assets/2f724e67205c4b47bb25.css","/css2":"_assets/2f724e67205c4b47bb25.css","/css2?family=Poppins:wght@200;400;700&display=swap":"_assets/2f724e67205c4b47bb25.css","https://fonts.googleapis.com/css2":"_assets/2f724e67205c4b47bb25.css","https://images5.alphacoders.com/430/430918.jpg":"_assets/03cd8d6c9a8e337637a2.jpg","/430/430918.jpg":"_assets/03cd8d6c9a8e337637a2.jpg","/430918.jpg":"_assets/03cd8d6c9a8e337637a2.jpg","https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2":"_assets/9338e65fc077355c7a87.woff2","/s/poppins/v24/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2":"_assets/9338e65fc077355c7a87.woff2","/poppins/v24/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2":"_assets/9338e65fc077355c7a87.woff2","/v24/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2":"_assets/9338e65fc077355c7a87.woff2","/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2":"_assets/9338e65fc077355c7a87.woff2","https://fonts.gstatic.com/s/poppins/v24/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","/s/poppins/v24/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","/poppins/v24/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","/v24/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","https://images8.alphacoders.com/739/739036.jpg":"_assets/d05557ae4ec76d7ff7de.jpg","/739/739036.jpg":"_assets/d05557ae4ec76d7ff7de.jpg","/739036.jpg":"_assets/d05557ae4ec76d7ff7de.jpg"};
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
