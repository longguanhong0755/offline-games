(() => {
  "use strict";
  const RUNTIME_MAP = {"https://alexwills37.github.io/WebTetris/textures/right-arrow.png":"_assets/b5586a8e43c97c26c117.png","/WebTetris/textures/right-arrow.png":"_assets/b5586a8e43c97c26c117.png","/textures/right-arrow.png":"_assets/b5586a8e43c97c26c117.png","/right-arrow.png":"_assets/b5586a8e43c97c26c117.png","https://alexwills37.github.io/WebTetris/textures/down-arrow.png":"_assets/527846e8f67318a197f6.png","/WebTetris/textures/down-arrow.png":"_assets/527846e8f67318a197f6.png","/textures/down-arrow.png":"_assets/527846e8f67318a197f6.png","/down-arrow.png":"_assets/527846e8f67318a197f6.png","https://alexwills37.github.io/WebTetris/assets/index-CwydD5EL.css":"_assets/7b31cbc1d1775a6378dc.css","/WebTetris/assets/index-CwydD5EL.css":"_assets/7b31cbc1d1775a6378dc.css","/assets/index-CwydD5EL.css":"_assets/7b31cbc1d1775a6378dc.css","/index-CwydD5EL.css":"_assets/7b31cbc1d1775a6378dc.css","https://alexwills37.github.io/WebTetris/assets/index-C9kjf0oc.js":"_assets/b9ae9cfee7b6eaf4a1c6.js","/WebTetris/assets/index-C9kjf0oc.js":"_assets/b9ae9cfee7b6eaf4a1c6.js","/assets/index-C9kjf0oc.js":"_assets/b9ae9cfee7b6eaf4a1c6.js","/index-C9kjf0oc.js":"_assets/b9ae9cfee7b6eaf4a1c6.js","https://alexwills37.github.io/WebTetris/textures/hold.png":"_assets/ab02d122cacd5e00e593.png","/WebTetris/textures/hold.png":"_assets/ab02d122cacd5e00e593.png","/textures/hold.png":"_assets/ab02d122cacd5e00e593.png","/hold.png":"_assets/ab02d122cacd5e00e593.png","https://alexwills37.github.io/WebTetris/textures/hard-drop.png":"_assets/414d3482d5462f2a0bda.png","/WebTetris/textures/hard-drop.png":"_assets/414d3482d5462f2a0bda.png","/textures/hard-drop.png":"_assets/414d3482d5462f2a0bda.png","/hard-drop.png":"_assets/414d3482d5462f2a0bda.png","https://alexwills37.github.io/WebTetris/textures/anti-rotate.png":"_assets/2405ed480d75454e7c41.png","/WebTetris/textures/anti-rotate.png":"_assets/2405ed480d75454e7c41.png","/textures/anti-rotate.png":"_assets/2405ed480d75454e7c41.png","/anti-rotate.png":"_assets/2405ed480d75454e7c41.png","https://alexwills37.github.io/WebTetris/textures/pause.png":"_assets/66b09b6e35941468dfb9.png","/WebTetris/textures/pause.png":"_assets/66b09b6e35941468dfb9.png","/textures/pause.png":"_assets/66b09b6e35941468dfb9.png","/pause.png":"_assets/66b09b6e35941468dfb9.png","https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap":"_assets/87d1d8a8741544694acd.css","/css2":"_assets/87d1d8a8741544694acd.css","/css2?family=Quicksand:wght@300..700&display=swap":"_assets/87d1d8a8741544694acd.css","https://fonts.googleapis.com/css2":"_assets/87d1d8a8741544694acd.css","https://alexwills37.github.io/WebTetris/textures/block.png":"_assets/4f0ce456367fa4020cb6.png","/WebTetris/textures/block.png":"_assets/4f0ce456367fa4020cb6.png","/textures/block.png":"_assets/4f0ce456367fa4020cb6.png","/block.png":"_assets/4f0ce456367fa4020cb6.png","https://alexwills37.github.io/WebTetris/textures/outline.png":"_assets/5f96f4223ce82fda8ee2.png","/WebTetris/textures/outline.png":"_assets/5f96f4223ce82fda8ee2.png","/textures/outline.png":"_assets/5f96f4223ce82fda8ee2.png","/outline.png":"_assets/5f96f4223ce82fda8ee2.png","https://fonts.gstatic.com/s/quicksand/v37/6xKtdSZaM9iE8KbpRA_hK1QN.woff2":"_assets/2add7d60b1cd2ab84c99.woff2","/s/quicksand/v37/6xKtdSZaM9iE8KbpRA_hK1QN.woff2":"_assets/2add7d60b1cd2ab84c99.woff2","/quicksand/v37/6xKtdSZaM9iE8KbpRA_hK1QN.woff2":"_assets/2add7d60b1cd2ab84c99.woff2","/v37/6xKtdSZaM9iE8KbpRA_hK1QN.woff2":"_assets/2add7d60b1cd2ab84c99.woff2","/6xKtdSZaM9iE8KbpRA_hK1QN.woff2":"_assets/2add7d60b1cd2ab84c99.woff2"};
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
