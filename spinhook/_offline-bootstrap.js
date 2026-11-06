(() => {
  "use strict";
  const RUNTIME_MAP = {"https://spinhook.ir/style.css":"_assets/cae1e588693c6d4cda65.css","/style.css":"_assets/cae1e588693c6d4cda65.css","https://spinhook.ir/libs/tailwindcss.js":"_assets/176e894661aa9cdc9a5c.js","/libs/tailwindcss.js":"_assets/176e894661aa9cdc9a5c.js","/tailwindcss.js":"_assets/176e894661aa9cdc9a5c.js","https://spinhook.ir/script.js":"_assets/49ced4b18bcf59aa75b1.js","/script.js":"_assets/49ced4b18bcf59aa75b1.js","https://spinhook.ir/libs/phaser.min.js":"_assets/66348b1b5141e49b7d5e.js","/libs/phaser.min.js":"_assets/66348b1b5141e49b7d5e.js","/phaser.min.js":"_assets/66348b1b5141e49b7d5e.js","https://spinhook.ir/assets/fonts/Orbitron-Black.ttf":"_assets/6085d23cdc834b71abdb.ttf","/assets/fonts/Orbitron-Black.ttf":"_assets/6085d23cdc834b71abdb.ttf","/fonts/Orbitron-Black.ttf":"_assets/6085d23cdc834b71abdb.ttf","/Orbitron-Black.ttf":"_assets/6085d23cdc834b71abdb.ttf","https://spinhook.ir/assets/fonts/ShareTechMono-Regular.ttf":"_assets/911a85f56c44e8a71245.ttf","/assets/fonts/ShareTechMono-Regular.ttf":"_assets/911a85f56c44e8a71245.ttf","/fonts/ShareTechMono-Regular.ttf":"_assets/911a85f56c44e8a71245.ttf","/ShareTechMono-Regular.ttf":"_assets/911a85f56c44e8a71245.ttf","https://spinhook.ir/assets/fonts/Orbitron-Bold.ttf":"_assets/69403fffca24d8e5d3c5.ttf","/assets/fonts/Orbitron-Bold.ttf":"_assets/69403fffca24d8e5d3c5.ttf","/fonts/Orbitron-Bold.ttf":"_assets/69403fffca24d8e5d3c5.ttf","/Orbitron-Bold.ttf":"_assets/69403fffca24d8e5d3c5.ttf","https://spinhook.ir/assets/sounds/attach.wav":"_assets/64db231ed72a28168b6a.wav","/assets/sounds/attach.wav":"_assets/64db231ed72a28168b6a.wav","/sounds/attach.wav":"_assets/64db231ed72a28168b6a.wav","/attach.wav":"_assets/64db231ed72a28168b6a.wav","https://spinhook.ir/assets/sounds/death.wav":"_assets/3fef84b81efdcb8b01b9.wav","/assets/sounds/death.wav":"_assets/3fef84b81efdcb8b01b9.wav","/sounds/death.wav":"_assets/3fef84b81efdcb8b01b9.wav","/death.wav":"_assets/3fef84b81efdcb8b01b9.wav"};
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
