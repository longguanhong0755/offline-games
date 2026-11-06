(() => {
  "use strict";
  const RUNTIME_MAP = {"https://flo-bit.dev/ball-game/_app/immutable/assets/2.gmoaW73z.css":"_assets/2388fa6746bd04bcb3b2.css","/ball-game/_app/immutable/assets/2.gmoaW73z.css":"_assets/2388fa6746bd04bcb3b2.css","/_app/immutable/assets/2.gmoaW73z.css":"_assets/2388fa6746bd04bcb3b2.css","/immutable/assets/2.gmoaW73z.css":"_assets/2388fa6746bd04bcb3b2.css","/assets/2.gmoaW73z.css":"_assets/2388fa6746bd04bcb3b2.css","/2.gmoaW73z.css":"_assets/2388fa6746bd04bcb3b2.css","https://flo-bit.dev/ball-game/_app/immutable/assets/0.L0IujDBR.css":"_assets/31fede43befdc59f17ba.css","/ball-game/_app/immutable/assets/0.L0IujDBR.css":"_assets/31fede43befdc59f17ba.css","/_app/immutable/assets/0.L0IujDBR.css":"_assets/31fede43befdc59f17ba.css","/immutable/assets/0.L0IujDBR.css":"_assets/31fede43befdc59f17ba.css","/assets/0.L0IujDBR.css":"_assets/31fede43befdc59f17ba.css","/0.L0IujDBR.css":"_assets/31fede43befdc59f17ba.css","https://flo-bit.dev/ball-game/_app/immutable/chunks/entry.qX0dmMol.js":"_assets/4a1aa0bc1721f5213f45.js","/ball-game/_app/immutable/chunks/entry.qX0dmMol.js":"_assets/4a1aa0bc1721f5213f45.js","/_app/immutable/chunks/entry.qX0dmMol.js":"_assets/4a1aa0bc1721f5213f45.js","/immutable/chunks/entry.qX0dmMol.js":"_assets/4a1aa0bc1721f5213f45.js","/chunks/entry.qX0dmMol.js":"_assets/4a1aa0bc1721f5213f45.js","/entry.qX0dmMol.js":"_assets/4a1aa0bc1721f5213f45.js","https://flo-bit.dev/ball-game/_app/immutable/chunks/scheduler.OJdXt0am.js":"_assets/c5913d13790835b0fc79.js","/ball-game/_app/immutable/chunks/scheduler.OJdXt0am.js":"_assets/c5913d13790835b0fc79.js","/_app/immutable/chunks/scheduler.OJdXt0am.js":"_assets/c5913d13790835b0fc79.js","/immutable/chunks/scheduler.OJdXt0am.js":"_assets/c5913d13790835b0fc79.js","/chunks/scheduler.OJdXt0am.js":"_assets/c5913d13790835b0fc79.js","/scheduler.OJdXt0am.js":"_assets/c5913d13790835b0fc79.js","https://flo-bit.dev/ball-game/_app/immutable/entry/start.9TB7zvB9.js":"_assets/ca1be26ce5b38c8491e4.js","/ball-game/_app/immutable/entry/start.9TB7zvB9.js":"_assets/ca1be26ce5b38c8491e4.js","/_app/immutable/entry/start.9TB7zvB9.js":"_assets/ca1be26ce5b38c8491e4.js","/immutable/entry/start.9TB7zvB9.js":"_assets/ca1be26ce5b38c8491e4.js","/entry/start.9TB7zvB9.js":"_assets/ca1be26ce5b38c8491e4.js","/start.9TB7zvB9.js":"_assets/ca1be26ce5b38c8491e4.js","https://flo-bit.dev/ball-game/_app/immutable/entry/app.3HvN1akc.js":"_assets/b4ca6a8d0589992f474c.js","/ball-game/_app/immutable/entry/app.3HvN1akc.js":"_assets/b4ca6a8d0589992f474c.js","/_app/immutable/entry/app.3HvN1akc.js":"_assets/b4ca6a8d0589992f474c.js","/immutable/entry/app.3HvN1akc.js":"_assets/b4ca6a8d0589992f474c.js","/entry/app.3HvN1akc.js":"_assets/b4ca6a8d0589992f474c.js","/app.3HvN1akc.js":"_assets/b4ca6a8d0589992f474c.js","https://flo-bit.dev/ball-game/_app/immutable/chunks/index._VKHMomn.js":"_assets/7a7f3aa22d552d9dbb87.js","/ball-game/_app/immutable/chunks/index._VKHMomn.js":"_assets/7a7f3aa22d552d9dbb87.js","/_app/immutable/chunks/index._VKHMomn.js":"_assets/7a7f3aa22d552d9dbb87.js","/immutable/chunks/index._VKHMomn.js":"_assets/7a7f3aa22d552d9dbb87.js","/chunks/index._VKHMomn.js":"_assets/7a7f3aa22d552d9dbb87.js","/index._VKHMomn.js":"_assets/7a7f3aa22d552d9dbb87.js","https://flo-bit.dev/ball-game/_app/immutable/nodes/0.gbekKl10.js":"_assets/d80529887d237268f183.js","/ball-game/_app/immutable/nodes/0.gbekKl10.js":"_assets/d80529887d237268f183.js","/_app/immutable/nodes/0.gbekKl10.js":"_assets/d80529887d237268f183.js","/immutable/nodes/0.gbekKl10.js":"_assets/d80529887d237268f183.js","/nodes/0.gbekKl10.js":"_assets/d80529887d237268f183.js","/0.gbekKl10.js":"_assets/d80529887d237268f183.js","https://flo-bit.dev/ball-game/_app/immutable/chunks/stores.pFDaV_HU.js":"_assets/33607a04de498222d9b1.js","/ball-game/_app/immutable/chunks/stores.pFDaV_HU.js":"_assets/33607a04de498222d9b1.js","/_app/immutable/chunks/stores.pFDaV_HU.js":"_assets/33607a04de498222d9b1.js","/immutable/chunks/stores.pFDaV_HU.js":"_assets/33607a04de498222d9b1.js","/chunks/stores.pFDaV_HU.js":"_assets/33607a04de498222d9b1.js","/stores.pFDaV_HU.js":"_assets/33607a04de498222d9b1.js","https://flo-bit.dev/ball-game/_app/immutable/nodes/1.DH0WE12V.js":"_assets/5fb6621c39c3010659a3.js","/ball-game/_app/immutable/nodes/1.DH0WE12V.js":"_assets/5fb6621c39c3010659a3.js","/_app/immutable/nodes/1.DH0WE12V.js":"_assets/5fb6621c39c3010659a3.js","/immutable/nodes/1.DH0WE12V.js":"_assets/5fb6621c39c3010659a3.js","/nodes/1.DH0WE12V.js":"_assets/5fb6621c39c3010659a3.js","/1.DH0WE12V.js":"_assets/5fb6621c39c3010659a3.js","https://flo-bit.dev/ball-game/_app/immutable/nodes/2.D5eAgNv5.js":"_assets/66305baf52c1f20f5a7a.js","/ball-game/_app/immutable/nodes/2.D5eAgNv5.js":"_assets/66305baf52c1f20f5a7a.js","/_app/immutable/nodes/2.D5eAgNv5.js":"_assets/66305baf52c1f20f5a7a.js","/immutable/nodes/2.D5eAgNv5.js":"_assets/66305baf52c1f20f5a7a.js","/nodes/2.D5eAgNv5.js":"_assets/66305baf52c1f20f5a7a.js","/2.D5eAgNv5.js":"_assets/66305baf52c1f20f5a7a.js"};
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
