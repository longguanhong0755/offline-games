(() => {
  "use strict";
  const RUNTIME_MAP = {"https://parzibyte.me/blog/assets/css/stylesheet.8fe10233a706bc87f2e08b3cf97b8bd4c0a80f10675a143675d59212121037c0.css":"_assets/8fe10233a706bc87f2e0.css","/blog/assets/css/stylesheet.8fe10233a706bc87f2e08b3cf97b8bd4c0a80f10675a143675d59212121037c0.css":"_assets/8fe10233a706bc87f2e0.css","/assets/css/stylesheet.8fe10233a706bc87f2e08b3cf97b8bd4c0a80f10675a143675d59212121037c0.css":"_assets/8fe10233a706bc87f2e0.css","/css/stylesheet.8fe10233a706bc87f2e08b3cf97b8bd4c0a80f10675a143675d59212121037c0.css":"_assets/8fe10233a706bc87f2e0.css","/stylesheet.8fe10233a706bc87f2e08b3cf97b8bd4c0a80f10675a143675d59212121037c0.css":"_assets/8fe10233a706bc87f2e0.css","https://parzibyte.me/blog/css/styles.min.7599211aa9896a1105a594e5afc305bd24710a1a66c0ceb70e776fb3b9916ef8.css":"_assets/7599211aa9896a1105a5.css","/blog/css/styles.min.7599211aa9896a1105a594e5afc305bd24710a1a66c0ceb70e776fb3b9916ef8.css":"_assets/7599211aa9896a1105a5.css","/css/styles.min.7599211aa9896a1105a594e5afc305bd24710a1a66c0ceb70e776fb3b9916ef8.css":"_assets/7599211aa9896a1105a5.css","/styles.min.7599211aa9896a1105a594e5afc305bd24710a1a66c0ceb70e776fb3b9916ef8.css":"_assets/7599211aa9896a1105a5.css","https://parzibyte.me/blog/posts/tetris-javascript-open-source/Tetris-en-JavaScript-Bienvenida-al-juego_hu_dc84962749d85036.webp":"_assets/d1fb79d51a50cb0e1f95.webp","/blog/posts/tetris-javascript-open-source/Tetris-en-JavaScript-Bienvenida-al-juego_hu_dc84962749d85036.webp":"_assets/d1fb79d51a50cb0e1f95.webp","/posts/tetris-javascript-open-source/Tetris-en-JavaScript-Bienvenida-al-juego_hu_dc84962749d85036.webp":"_assets/d1fb79d51a50cb0e1f95.webp","/tetris-javascript-open-source/Tetris-en-JavaScript-Bienvenida-al-juego_hu_dc84962749d85036.webp":"_assets/d1fb79d51a50cb0e1f95.webp","/Tetris-en-JavaScript-Bienvenida-al-juego_hu_dc84962749d85036.webp":"_assets/d1fb79d51a50cb0e1f95.webp","https://parzibyte.me/blog/posts/tetris-javascript-open-source/Juego-de-bloques-terminado-jugador-pierde_hu_415b41c6a842954e.webp":"_assets/9e2cb2a45b42ff319702.webp","/blog/posts/tetris-javascript-open-source/Juego-de-bloques-terminado-jugador-pierde_hu_415b41c6a842954e.webp":"_assets/9e2cb2a45b42ff319702.webp","/posts/tetris-javascript-open-source/Juego-de-bloques-terminado-jugador-pierde_hu_415b41c6a842954e.webp":"_assets/9e2cb2a45b42ff319702.webp","/tetris-javascript-open-source/Juego-de-bloques-terminado-jugador-pierde_hu_415b41c6a842954e.webp":"_assets/9e2cb2a45b42ff319702.webp","/Juego-de-bloques-terminado-jugador-pierde_hu_415b41c6a842954e.webp":"_assets/9e2cb2a45b42ff319702.webp","https://parzibyte.me/blog/posts/tetris-javascript-open-source/Eliminar-filas-llenas-en-juego-de-bloques-con-JavaScript_hu_500eaf9c5860d9cf.webp":"_assets/1961926a175ff6c527e1.webp","/blog/posts/tetris-javascript-open-source/Eliminar-filas-llenas-en-juego-de-bloques-con-JavaScript_hu_500eaf9c5860d9cf.webp":"_assets/1961926a175ff6c527e1.webp","/posts/tetris-javascript-open-source/Eliminar-filas-llenas-en-juego-de-bloques-con-JavaScript_hu_500eaf9c5860d9cf.webp":"_assets/1961926a175ff6c527e1.webp","/tetris-javascript-open-source/Eliminar-filas-llenas-en-juego-de-bloques-con-JavaScript_hu_500eaf9c5860d9cf.webp":"_assets/1961926a175ff6c527e1.webp","/Eliminar-filas-llenas-en-juego-de-bloques-con-JavaScript_hu_500eaf9c5860d9cf.webp":"_assets/1961926a175ff6c527e1.webp","https://parzibyte.me/blog/posts/tetris-javascript-open-source/Jugando-Tetris-en-JavaScript-juego-open-source_hu_ac06e070b1947484.webp":"_assets/e611ce305dc1f3744185.webp","/blog/posts/tetris-javascript-open-source/Jugando-Tetris-en-JavaScript-juego-open-source_hu_ac06e070b1947484.webp":"_assets/e611ce305dc1f3744185.webp","/posts/tetris-javascript-open-source/Jugando-Tetris-en-JavaScript-juego-open-source_hu_ac06e070b1947484.webp":"_assets/e611ce305dc1f3744185.webp","/tetris-javascript-open-source/Jugando-Tetris-en-JavaScript-juego-open-source_hu_ac06e070b1947484.webp":"_assets/e611ce305dc1f3744185.webp","/Jugando-Tetris-en-JavaScript-juego-open-source_hu_ac06e070b1947484.webp":"_assets/e611ce305dc1f3744185.webp"};
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
