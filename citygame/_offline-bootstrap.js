(() => {
  "use strict";
  const RUNTIME_MAP = {"https://giraluna.github.io/citygame/css/normalize.css":"_assets/a10844d60cd0fd12d194.css","/citygame/css/normalize.css":"_assets/a10844d60cd0fd12d194.css","/css/normalize.css":"_assets/a10844d60cd0fd12d194.css","/normalize.css":"_assets/a10844d60cd0fd12d194.css","https://giraluna.github.io/citygame/dist/main.css":"_assets/3695068764f43b24e636.css","/citygame/dist/main.css":"_assets/3695068764f43b24e636.css","/dist/main.css":"_assets/3695068764f43b24e636.css","/main.css":"_assets/3695068764f43b24e636.css","https://giraluna.github.io/citygame/lib/pixi.dev.js":"_assets/ed1bb42d6522cdd68ac5.js","/citygame/lib/pixi.dev.js":"_assets/ed1bb42d6522cdd68ac5.js","/lib/pixi.dev.js":"_assets/ed1bb42d6522cdd68ac5.js","/pixi.dev.js":"_assets/ed1bb42d6522cdd68ac5.js","https://giraluna.github.io/citygame/lib/tween.min.js":"_assets/d84b26461c2901910637.js","/citygame/lib/tween.min.js":"_assets/d84b26461c2901910637.js","/lib/tween.min.js":"_assets/d84b26461c2901910637.js","/tween.min.js":"_assets/d84b26461c2901910637.js","https://giraluna.github.io/citygame/lib/lz-string-1.3.3.js":"_assets/c4f471a30b5b369f42ad.js","/citygame/lib/lz-string-1.3.3.js":"_assets/c4f471a30b5b369f42ad.js","/lib/lz-string-1.3.3.js":"_assets/c4f471a30b5b369f42ad.js","/lz-string-1.3.3.js":"_assets/c4f471a30b5b369f42ad.js","https://giraluna.github.io/citygame/lib/react-0.11.0.js":"_assets/74bc362fad1903e593cc.js","/citygame/lib/react-0.11.0.js":"_assets/74bc362fad1903e593cc.js","/lib/react-0.11.0.js":"_assets/74bc362fad1903e593cc.js","/react-0.11.0.js":"_assets/74bc362fad1903e593cc.js","https://giraluna.github.io/citygame/dist/citygame.js":"_assets/367bef8a6bc243fa4966.js","/citygame/dist/citygame.js":"_assets/367bef8a6bc243fa4966.js","/dist/citygame.js":"_assets/367bef8a6bc243fa4966.js","/citygame.js":"_assets/367bef8a6bc243fa4966.js","https://giraluna.github.io/citygame/img/sprites.json":"_assets/9a0131689b7ecae2ede8.json","/citygame/img/sprites.json":"_assets/9a0131689b7ecae2ede8.json","/img/sprites.json":"_assets/9a0131689b7ecae2ede8.json","/sprites.json":"_assets/9a0131689b7ecae2ede8.json","https://giraluna.github.io/citygame/img/sprites.png":"_assets/8a42e2d9f74ca43fdcb4.png","/citygame/img/sprites.png":"_assets/8a42e2d9f74ca43fdcb4.png","/img/sprites.png":"_assets/8a42e2d9f74ca43fdcb4.png","/sprites.png":"_assets/8a42e2d9f74ca43fdcb4.png"};
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
