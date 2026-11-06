(() => {
  "use strict";
  const RUNTIME_MAP = {"https://asteriskman7.github.io/SnailGame/index.css":"_assets/29ff26ca424c8e5b267c.css","/SnailGame/index.css":"_assets/29ff26ca424c8e5b267c.css","/index.css":"_assets/29ff26ca424c8e5b267c.css","https://asteriskman7.github.io/SnailGame/walkingSnail.png":"_assets/3cc82644dad5dbcafb86.png","/SnailGame/walkingSnail.png":"_assets/3cc82644dad5dbcafb86.png","/walkingSnail.png":"_assets/3cc82644dad5dbcafb86.png","https://asteriskman7.github.io/SnailGame/grass.jpg":"_assets/3aa51f53feb7891bcc28.jpg","/SnailGame/grass.jpg":"_assets/3aa51f53feb7891bcc28.jpg","/grass.jpg":"_assets/3aa51f53feb7891bcc28.jpg","https://asteriskman7.github.io/SnailGame/coin.png":"_assets/61251f90da4c8392de7b.png","/SnailGame/coin.png":"_assets/61251f90da4c8392de7b.png","/coin.png":"_assets/61251f90da4c8392de7b.png","https://asteriskman7.github.io/SnailGame/snail_koch.png":"_assets/8bd656d2728fe358b174.png","/SnailGame/snail_koch.png":"_assets/8bd656d2728fe358b174.png","/snail_koch.png":"_assets/8bd656d2728fe358b174.png","https://asteriskman7.github.io/SnailGame/noise.js":"_assets/ac4c7d9e441c8a7bdba7.js","/SnailGame/noise.js":"_assets/ac4c7d9e441c8a7bdba7.js","/noise.js":"_assets/ac4c7d9e441c8a7bdba7.js","https://asteriskman7.github.io/SnailGame/snail_hilbert.png":"_assets/45dd4424476c4f9c6a1c.png","/SnailGame/snail_hilbert.png":"_assets/45dd4424476c4f9c6a1c.png","/snail_hilbert.png":"_assets/45dd4424476c4f9c6a1c.png","https://asteriskman7.github.io/SnailGame/koch.js":"_assets/89947b449bb262b0895f.js","/SnailGame/koch.js":"_assets/89947b449bb262b0895f.js","/koch.js":"_assets/89947b449bb262b0895f.js","https://asteriskman7.github.io/SnailGame/buttons.js":"_assets/ef4536dedd5fd750bc14.js","/SnailGame/buttons.js":"_assets/ef4536dedd5fd750bc14.js","/buttons.js":"_assets/ef4536dedd5fd750bc14.js","https://asteriskman7.github.io/SnailGame/letterPaths.js":"_assets/11362d468e305f45da4a.js","/SnailGame/letterPaths.js":"_assets/11362d468e305f45da4a.js","/letterPaths.js":"_assets/11362d468e305f45da4a.js","https://asteriskman7.github.io/SnailGame/hilbert.js":"_assets/a6db4f723887e3c3143a.js","/SnailGame/hilbert.js":"_assets/a6db4f723887e3c3143a.js","/hilbert.js":"_assets/a6db4f723887e3c3143a.js","https://asteriskman7.github.io/SnailGame/walk.js":"_assets/db69d15027213f1922a6.js","/SnailGame/walk.js":"_assets/db69d15027213f1922a6.js","/walk.js":"_assets/db69d15027213f1922a6.js","https://asteriskman7.github.io/SnailGame/fourier.js":"_assets/ea760ee5031a6eb752e9.js","/SnailGame/fourier.js":"_assets/ea760ee5031a6eb752e9.js","/fourier.js":"_assets/ea760ee5031a6eb752e9.js","https://asteriskman7.github.io/SnailGame/snail_fourier.png":"_assets/ad73bd5b7d50ec9548a6.png","/SnailGame/snail_fourier.png":"_assets/ad73bd5b7d50ec9548a6.png","/snail_fourier.png":"_assets/ad73bd5b7d50ec9548a6.png","https://asteriskman7.github.io/SnailGame/index.js":"_assets/6ab8a2e27119be27747d.js","/SnailGame/index.js":"_assets/6ab8a2e27119be27747d.js","/index.js":"_assets/6ab8a2e27119be27747d.js"};
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
