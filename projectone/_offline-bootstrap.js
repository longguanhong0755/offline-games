(() => {
  "use strict";
  const RUNTIME_MAP = {"https://franciscofhdias.github.io/ProjectOne/css/style.css":"_assets/404e7fc07c4412ffb3e5.css","/ProjectOne/css/style.css":"_assets/404e7fc07c4412ffb3e5.css","/css/style.css":"_assets/404e7fc07c4412ffb3e5.css","/style.css":"_assets/404e7fc07c4412ffb3e5.css","https://franciscofhdias.github.io/ProjectOne/js/app.js":"_assets/ce2ee86faec6123489f6.js","/ProjectOne/js/app.js":"_assets/ce2ee86faec6123489f6.js","/js/app.js":"_assets/ce2ee86faec6123489f6.js","/app.js":"_assets/ce2ee86faec6123489f6.js","https://franciscofhdias.github.io/ProjectOne/images/PinClipart.com_space-invaders-clip-art_1780038.png":"_assets/b9d71d5eb72068fe4a47.png","/ProjectOne/images/PinClipart.com_space-invaders-clip-art_1780038.png":"_assets/b9d71d5eb72068fe4a47.png","/images/PinClipart.com_space-invaders-clip-art_1780038.png":"_assets/b9d71d5eb72068fe4a47.png","/PinClipart.com_space-invaders-clip-art_1780038.png":"_assets/b9d71d5eb72068fe4a47.png","https://franciscofhdias.github.io/ProjectOne/sound/017_9.wav":"_assets/121ea6020a09030fb0f3.wav","/ProjectOne/sound/017_9.wav":"_assets/121ea6020a09030fb0f3.wav","/sound/017_9.wav":"_assets/121ea6020a09030fb0f3.wav","/017_9.wav":"_assets/121ea6020a09030fb0f3.wav","https://franciscofhdias.github.io/ProjectOne/images/PinClipart.com_santa-sleigh-clip-art_1080856.png":"_assets/427fe72d3d2c6b94ea74.png","/ProjectOne/images/PinClipart.com_santa-sleigh-clip-art_1080856.png":"_assets/427fe72d3d2c6b94ea74.png","/images/PinClipart.com_santa-sleigh-clip-art_1080856.png":"_assets/427fe72d3d2c6b94ea74.png","/PinClipart.com_santa-sleigh-clip-art_1080856.png":"_assets/427fe72d3d2c6b94ea74.png","https://franciscofhdias.github.io/ProjectOne/sound/003_12.wav":"_assets/85d4a26aba7175c34942.wav","/ProjectOne/sound/003_12.wav":"_assets/85d4a26aba7175c34942.wav","/sound/003_12.wav":"_assets/85d4a26aba7175c34942.wav","/003_12.wav":"_assets/85d4a26aba7175c34942.wav","https://franciscofhdias.github.io/ProjectOne/sound/001_1.wav":"_assets/fb090bde915f23b5b431.wav","/ProjectOne/sound/001_1.wav":"_assets/fb090bde915f23b5b431.wav","/sound/001_1.wav":"_assets/fb090bde915f23b5b431.wav","/001_1.wav":"_assets/fb090bde915f23b5b431.wav","https://franciscofhdias.github.io/ProjectOne/sound/014_6.wav":"_assets/d96d37b6931102aa6772.wav","/ProjectOne/sound/014_6.wav":"_assets/d96d37b6931102aa6772.wav","/sound/014_6.wav":"_assets/d96d37b6931102aa6772.wav","/014_6.wav":"_assets/d96d37b6931102aa6772.wav","https://franciscofhdias.github.io/ProjectOne/sound/ufo_lowpitch.wav":"_assets/1aa034fc47cc4c994f38.wav","/ProjectOne/sound/ufo_lowpitch.wav":"_assets/1aa034fc47cc4c994f38.wav","/sound/ufo_lowpitch.wav":"_assets/1aa034fc47cc4c994f38.wav","/ufo_lowpitch.wav":"_assets/1aa034fc47cc4c994f38.wav","https://franciscofhdias.github.io/ProjectOne/images/5d30598cb8616.png":"_assets/d9e115e8346ae501a25c.png","/ProjectOne/images/5d30598cb8616.png":"_assets/d9e115e8346ae501a25c.png","/images/5d30598cb8616.png":"_assets/d9e115e8346ae501a25c.png","/5d30598cb8616.png":"_assets/d9e115e8346ae501a25c.png","https://franciscofhdias.github.io/ProjectOne/images/5d3058b105000.png":"_assets/478d7168943eab98a50b.png","/ProjectOne/images/5d3058b105000.png":"_assets/478d7168943eab98a50b.png","/images/5d3058b105000.png":"_assets/478d7168943eab98a50b.png","/5d3058b105000.png":"_assets/478d7168943eab98a50b.png"};
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
