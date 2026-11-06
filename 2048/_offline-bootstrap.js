(() => {
  "use strict";
  const RUNTIME_MAP = {"https://mahmudnibir.github.io/2048/style.css":"_assets/9b822cb9129314b006c9.css","/2048/style.css":"_assets/9b822cb9129314b006c9.css","/style.css":"_assets/9b822cb9129314b006c9.css","https://mahmudnibir.github.io/2048/script.js":"_assets/9134b8983554d01d55ca.js","/2048/script.js":"_assets/9134b8983554d01d55ca.js","/script.js":"_assets/9134b8983554d01d55ca.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css":"_assets/8d321d88cb97fdedc318.css","/ajax/libs/font-awesome/6.0.0/css/all.min.css":"_assets/8d321d88cb97fdedc318.css","/libs/font-awesome/6.0.0/css/all.min.css":"_assets/8d321d88cb97fdedc318.css","/font-awesome/6.0.0/css/all.min.css":"_assets/8d321d88cb97fdedc318.css","/6.0.0/css/all.min.css":"_assets/8d321d88cb97fdedc318.css","/css/all.min.css":"_assets/8d321d88cb97fdedc318.css","/all.min.css":"_assets/8d321d88cb97fdedc318.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/webfonts/fa-solid-900.woff2":"_assets/1b099f88c06ed0869872.woff2","/ajax/libs/font-awesome/6.0.0/webfonts/fa-solid-900.woff2":"_assets/1b099f88c06ed0869872.woff2","/libs/font-awesome/6.0.0/webfonts/fa-solid-900.woff2":"_assets/1b099f88c06ed0869872.woff2","/font-awesome/6.0.0/webfonts/fa-solid-900.woff2":"_assets/1b099f88c06ed0869872.woff2","/6.0.0/webfonts/fa-solid-900.woff2":"_assets/1b099f88c06ed0869872.woff2","/webfonts/fa-solid-900.woff2":"_assets/1b099f88c06ed0869872.woff2","/fa-solid-900.woff2":"_assets/1b099f88c06ed0869872.woff2","https://mahmudnibir.github.io/2048/sounds/slide.mp3":"_assets/913b47420eaa213dc30c.mp3","/2048/sounds/slide.mp3":"_assets/913b47420eaa213dc30c.mp3","/sounds/slide.mp3":"_assets/913b47420eaa213dc30c.mp3","/slide.mp3":"_assets/913b47420eaa213dc30c.mp3","https://mahmudnibir.github.io/2048/sounds/merge.wav":"_assets/554149b292d96d6ed14c.wav","/2048/sounds/merge.wav":"_assets/554149b292d96d6ed14c.wav","/sounds/merge.wav":"_assets/554149b292d96d6ed14c.wav","/merge.wav":"_assets/554149b292d96d6ed14c.wav","https://mahmudnibir.github.io/2048/sounds/game_over.wav":"_assets/04eb19d056c95fbe4d45.wav","/2048/sounds/game_over.wav":"_assets/04eb19d056c95fbe4d45.wav","/sounds/game_over.wav":"_assets/04eb19d056c95fbe4d45.wav","/game_over.wav":"_assets/04eb19d056c95fbe4d45.wav","https://mahmudnibir.github.io/2048/sounds/button_click.wav":"_assets/6b40a4ad91d121ebf655.wav","/2048/sounds/button_click.wav":"_assets/6b40a4ad91d121ebf655.wav","/sounds/button_click.wav":"_assets/6b40a4ad91d121ebf655.wav","/button_click.wav":"_assets/6b40a4ad91d121ebf655.wav"};
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
