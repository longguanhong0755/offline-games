(() => {
  "use strict";
  const RUNTIME_MAP = {"https://jakesgordon.com/css/content.min.3e2d7b97d42c95ba054e3494c23f53f1122a32e0130973eccbe3cc89b9353074.css":"_assets/3e2d7b97d42c95ba054e.css","/css/content.min.3e2d7b97d42c95ba054e3494c23f53f1122a32e0130973eccbe3cc89b9353074.css":"_assets/3e2d7b97d42c95ba054e.css","/content.min.3e2d7b97d42c95ba054e3494c23f53f1122a32e0130973eccbe3cc89b9353074.css":"_assets/3e2d7b97d42c95ba054e.css","https://jakesgordon.com/writing/tiny-platformer/thumb.png":"_assets/3681f918d7ed64da1209.png","/writing/tiny-platformer/thumb.png":"_assets/3681f918d7ed64da1209.png","/tiny-platformer/thumb.png":"_assets/3681f918d7ed64da1209.png","/thumb.png":"_assets/3681f918d7ed64da1209.png","https://jakesgordon.com/writing/tiny-platformer/tiles.png":"_assets/2f50f7d9bbdbc0de7fe3.png","/writing/tiny-platformer/tiles.png":"_assets/2f50f7d9bbdbc0de7fe3.png","/tiny-platformer/tiles.png":"_assets/2f50f7d9bbdbc0de7fe3.png","/tiles.png":"_assets/2f50f7d9bbdbc0de7fe3.png","https://jakesgordon.com/writing/tiny-platformer/occupied.png":"_assets/fd77be1e9a9ea35dc2d1.png","/writing/tiny-platformer/occupied.png":"_assets/fd77be1e9a9ea35dc2d1.png","/tiny-platformer/occupied.png":"_assets/fd77be1e9a9ea35dc2d1.png","/occupied.png":"_assets/fd77be1e9a9ea35dc2d1.png","https://jakesgordon.com/writing/tiny-platformer/tiled.png":"_assets/233e425f9291a57796a3.png","/writing/tiny-platformer/tiled.png":"_assets/233e425f9291a57796a3.png","/tiny-platformer/tiled.png":"_assets/233e425f9291a57796a3.png","/tiled.png":"_assets/233e425f9291a57796a3.png","https://jakesgordon.com/css/font-awesome.min.cf0e8b56385b94680100bf876e6a4d12c836ffa92665ae8a6079dfcf55dd052a.css":"_assets/cf0e8b56385b94680100.css","/css/font-awesome.min.cf0e8b56385b94680100bf876e6a4d12c836ffa92665ae8a6079dfcf55dd052a.css":"_assets/cf0e8b56385b94680100.css","/font-awesome.min.cf0e8b56385b94680100bf876e6a4d12c836ffa92665ae8a6079dfcf55dd052a.css":"_assets/cf0e8b56385b94680100.css","https://jakesgordon.com/webfonts/font-awesome-v5.13.0/fa-brands-400.woff2":"_assets/80c7d8d88a91688aa18a.woff2","/webfonts/font-awesome-v5.13.0/fa-brands-400.woff2":"_assets/80c7d8d88a91688aa18a.woff2","/font-awesome-v5.13.0/fa-brands-400.woff2":"_assets/80c7d8d88a91688aa18a.woff2","/fa-brands-400.woff2":"_assets/80c7d8d88a91688aa18a.woff2","https://jakesgordon.com/webfonts/font-awesome-v5.13.0/fa-light-300.woff2":"_assets/9a8ed4a9ae2e4bf2af86.woff2","/webfonts/font-awesome-v5.13.0/fa-light-300.woff2":"_assets/9a8ed4a9ae2e4bf2af86.woff2","/font-awesome-v5.13.0/fa-light-300.woff2":"_assets/9a8ed4a9ae2e4bf2af86.woff2","/fa-light-300.woff2":"_assets/9a8ed4a9ae2e4bf2af86.woff2","https://jakesgordon.com/webfonts/font-awesome-v5.13.0/fa-duotone-900.woff2":"_assets/14eedb5ff04a43f5b353.woff2","/webfonts/font-awesome-v5.13.0/fa-duotone-900.woff2":"_assets/14eedb5ff04a43f5b353.woff2","/font-awesome-v5.13.0/fa-duotone-900.woff2":"_assets/14eedb5ff04a43f5b353.woff2","/fa-duotone-900.woff2":"_assets/14eedb5ff04a43f5b353.woff2"};
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
