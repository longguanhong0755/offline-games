(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Tech_Memory_Block/home.css":"_assets/1a32dc94beb2c7898a01.css","/GameZone/Games/Tech_Memory_Block/home.css":"_assets/1a32dc94beb2c7898a01.css","/Games/Tech_Memory_Block/home.css":"_assets/1a32dc94beb2c7898a01.css","/Tech_Memory_Block/home.css":"_assets/1a32dc94beb2c7898a01.css","/home.css":"_assets/1a32dc94beb2c7898a01.css","https://kunjgit.github.io/GameZone/Games/Tech_Memory_Block/home.js":"_assets/cbccdb3dca03fe375502.js","/GameZone/Games/Tech_Memory_Block/home.js":"_assets/cbccdb3dca03fe375502.js","/Games/Tech_Memory_Block/home.js":"_assets/cbccdb3dca03fe375502.js","/Tech_Memory_Block/home.js":"_assets/cbccdb3dca03fe375502.js","/home.js":"_assets/cbccdb3dca03fe375502.js","https://kunjgit.github.io/GameZone/Games/Tech_Memory_Block/restart.png":"_assets/a6f3786f59f1a0e6c34d.png","/GameZone/Games/Tech_Memory_Block/restart.png":"_assets/a6f3786f59f1a0e6c34d.png","/Games/Tech_Memory_Block/restart.png":"_assets/a6f3786f59f1a0e6c34d.png","/Tech_Memory_Block/restart.png":"_assets/a6f3786f59f1a0e6c34d.png","/restart.png":"_assets/a6f3786f59f1a0e6c34d.png","https://kunjgit.github.io/GameZone/Games/Tech_Memory_Block/help.png":"_assets/2585fe1bd6f74319253e.png","/GameZone/Games/Tech_Memory_Block/help.png":"_assets/2585fe1bd6f74319253e.png","/Games/Tech_Memory_Block/help.png":"_assets/2585fe1bd6f74319253e.png","/Tech_Memory_Block/help.png":"_assets/2585fe1bd6f74319253e.png","/help.png":"_assets/2585fe1bd6f74319253e.png","https://kunjgit.github.io/GameZone/Games/Tech_Memory_Block/Pacifico-Regular.ttf":"_assets/d088008aa13be6801634.ttf","/GameZone/Games/Tech_Memory_Block/Pacifico-Regular.ttf":"_assets/d088008aa13be6801634.ttf","/Games/Tech_Memory_Block/Pacifico-Regular.ttf":"_assets/d088008aa13be6801634.ttf","/Tech_Memory_Block/Pacifico-Regular.ttf":"_assets/d088008aa13be6801634.ttf","/Pacifico-Regular.ttf":"_assets/d088008aa13be6801634.ttf","https://kunjgit.github.io/GameZone/Games/Tech_Memory_Block/Roboto-Thin.ttf":"_assets/dcac562815b575e6b821.ttf","/GameZone/Games/Tech_Memory_Block/Roboto-Thin.ttf":"_assets/dcac562815b575e6b821.ttf","/Games/Tech_Memory_Block/Roboto-Thin.ttf":"_assets/dcac562815b575e6b821.ttf","/Tech_Memory_Block/Roboto-Thin.ttf":"_assets/dcac562815b575e6b821.ttf","/Roboto-Thin.ttf":"_assets/dcac562815b575e6b821.ttf"};
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
