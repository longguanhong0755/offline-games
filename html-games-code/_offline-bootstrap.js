(() => {
  "use strict";
  const RUNTIME_MAP = {"https://www.htmlgamescode.com/fonts/lilitaone-latin.woff2":"_assets/8d6cd0f298738a92ca9b.woff2","/fonts/lilitaone-latin.woff2":"_assets/8d6cd0f298738a92ca9b.woff2","/lilitaone-latin.woff2":"_assets/8d6cd0f298738a92ca9b.woff2","https://www.htmlgamescode.com/css/site.css?v=mvewojz1":"_assets/f422f6a03a7f4d994953.css","/css/site.css":"_assets/f422f6a03a7f4d994953.css","/css/site.css?v=mvewojz1":"_assets/f422f6a03a7f4d994953.css","/site.css":"_assets/f422f6a03a7f4d994953.css","https://www.htmlgamescode.com/css/site.css":"_assets/f422f6a03a7f4d994953.css","https://www.htmlgamescode.com/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js":"_assets/2595496fe48df6fcf9b1.js","/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js":"_assets/2595496fe48df6fcf9b1.js","/scripts/5c5dd728/cloudflare-static/email-decode.min.js":"_assets/2595496fe48df6fcf9b1.js","/5c5dd728/cloudflare-static/email-decode.min.js":"_assets/2595496fe48df6fcf9b1.js","/cloudflare-static/email-decode.min.js":"_assets/2595496fe48df6fcf9b1.js","/email-decode.min.js":"_assets/2595496fe48df6fcf9b1.js","https://www.htmlgamescode.com/fonts/fredoka-latin.woff2":"_assets/27d49d7c8362279bf812.woff2","/fonts/fredoka-latin.woff2":"_assets/27d49d7c8362279bf812.woff2","/fredoka-latin.woff2":"_assets/27d49d7c8362279bf812.woff2","https://www.htmlgamescode.com/favicon-48.png":"_assets/91dae2f3fd6ab48d4c0e.png","/favicon-48.png":"_assets/91dae2f3fd6ab48d4c0e.png","https://www.htmlgamescode.com/js/site.js?v=mvewojz1":"_assets/484121e09f9405363f72.js","/js/site.js":"_assets/484121e09f9405363f72.js","/js/site.js?v=mvewojz1":"_assets/484121e09f9405363f72.js","/site.js":"_assets/484121e09f9405363f72.js","https://www.htmlgamescode.com/js/site.js":"_assets/484121e09f9405363f72.js"};
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
