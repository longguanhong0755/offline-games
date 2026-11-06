(() => {
  "use strict";
  const RUNTIME_MAP = {"https://lambdacorporation.github.io/game.css":"_assets/02190fb4bb9c7d7bb449.css","/game.css":"_assets/02190fb4bb9c7d7bb449.css","https://www.zonerama.com/photos/305922329_781x781_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/photos/305922329_781x781_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/305922329_781x781_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","https://www.zonerama.com/photos/306620945_783x781_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/photos/306620945_783x781_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/306620945_783x781_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","https://www.zonerama.com/photos/305936147_1075x716_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/photos/305936147_1075x716_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/305936147_1075x716_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","https://www.zonerama.com/photos/307057927_520x520_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/photos/307057927_520x520_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/307057927_520x520_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","https://eu.zonerama.com/photos/307901321_781x781_16_timestamp(637790569718870000).jpg":"_assets/2e0f3e25b34514b1a639.jpg","/photos/307901321_781x781_16_timestamp(637790569718870000).jpg":"_assets/2e0f3e25b34514b1a639.jpg","/307901321_781x781_16_timestamp(637790569718870000).jpg":"_assets/2e0f3e25b34514b1a639.jpg","https://www.zonerama.com/photos/307122871_901x817.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/photos/307122871_901x817.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/307122871_901x817.jpg":"_assets/2e0f3e25b34514b1a639.jpg","https://eu.zonerama.com/photos/307912387_250x250_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/photos/307912387_250x250_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/307912387_250x250_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","https://eu.zonerama.com/photos/307899384_270x270_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/photos/307899384_270x270_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/307899384_270x270_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","https://eu.zonerama.com/photos/308394657_300x285_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/photos/308394657_300x285_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/308394657_300x285_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","https://eu.zonerama.com/photos/310086275_853x853.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/photos/310086275_853x853.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/310086275_853x853.jpg":"_assets/2e0f3e25b34514b1a639.jpg","https://lambdacorporation.github.io/game.js":"_assets/92dc3613c9527cee8d4e.js","/game.js":"_assets/92dc3613c9527cee8d4e.js","https://eu.zonerama.com/photos/308556789_665x665.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/photos/308556789_665x665.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/308556789_665x665.jpg":"_assets/2e0f3e25b34514b1a639.jpg","https://eu.zonerama.com/photos/310084933_825x781_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/photos/310084933_825x781_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/310084933_825x781_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","https://eu.zonerama.com/photos/310086022_781x781_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/photos/310086022_781x781_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/310086022_781x781_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","https://eu.zonerama.com/photos/308551522_210x210_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/photos/308551522_210x210_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/308551522_210x210_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","https://eu.zonerama.com/photos/310087203_607x607.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/photos/310087203_607x607.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/310087203_607x607.jpg":"_assets/2e0f3e25b34514b1a639.jpg","https://eu.zonerama.com/photos/309467301_228x228_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/photos/309467301_228x228_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/309467301_228x228_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","https://eu.zonerama.com/photos/309717738_228x228_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/photos/309717738_228x228_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/309717738_228x228_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","https://eu.zonerama.com/photos/309480410_228x228_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/photos/309480410_228x228_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg","/309480410_228x228_16.jpg":"_assets/2e0f3e25b34514b1a639.jpg"};
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
