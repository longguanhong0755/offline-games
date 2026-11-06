(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/MazeGame/style.css":"_assets/550f8605783507101cc3.css","/GameZone/Games/MazeGame/style.css":"_assets/550f8605783507101cc3.css","/Games/MazeGame/style.css":"_assets/550f8605783507101cc3.css","/MazeGame/style.css":"_assets/550f8605783507101cc3.css","/style.css":"_assets/550f8605783507101cc3.css","https://kunjgit.github.io/GameZone/Games/MazeGame/script.js":"_assets/e9663b57422e3e0c5cd1.js","/GameZone/Games/MazeGame/script.js":"_assets/e9663b57422e3e0c5cd1.js","/Games/MazeGame/script.js":"_assets/e9663b57422e3e0c5cd1.js","/MazeGame/script.js":"_assets/e9663b57422e3e0c5cd1.js","/script.js":"_assets/e9663b57422e3e0c5cd1.js","https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js":"_assets/160a426ff2894252cd7c.js","/ajax/libs/jquery/3.3.1/jquery.min.js":"_assets/160a426ff2894252cd7c.js","/libs/jquery/3.3.1/jquery.min.js":"_assets/160a426ff2894252cd7c.js","/jquery/3.3.1/jquery.min.js":"_assets/160a426ff2894252cd7c.js","/3.3.1/jquery.min.js":"_assets/160a426ff2894252cd7c.js","/jquery.min.js":"_assets/160a426ff2894252cd7c.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/all.min.css":"_assets/d87ddf917b7a1449ab45.css","https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.18/jquery.touchSwipe.min.js":"_assets/a10d7edb8fd307f469be.js","/ajax/libs/jquery.touchswipe/1.6.18/jquery.touchSwipe.min.js":"_assets/a10d7edb8fd307f469be.js","/libs/jquery.touchswipe/1.6.18/jquery.touchSwipe.min.js":"_assets/a10d7edb8fd307f469be.js","/jquery.touchswipe/1.6.18/jquery.touchSwipe.min.js":"_assets/a10d7edb8fd307f469be.js","/1.6.18/jquery.touchSwipe.min.js":"_assets/a10d7edb8fd307f469be.js","/jquery.touchSwipe.min.js":"_assets/a10d7edb8fd307f469be.js","https://fonts.googleapis.com/css2?family=Poppins&display=swap":"_assets/88bfd1ed6464662c9423.css","/css2":"_assets/88bfd1ed6464662c9423.css","/css2?family=Poppins&display=swap":"_assets/88bfd1ed6464662c9423.css","https://fonts.googleapis.com/css2":"_assets/88bfd1ed6464662c9423.css","https://fonts.gstatic.com/s/poppins/v24/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","/s/poppins/v24/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","/poppins/v24/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","/v24/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","/pxiEyp8kv8JHgFVrJJfecg.woff2":"_assets/7d93459d86585bfcdbb7.woff2","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","https://kunjgit.github.io/GameZone/Games/MazeGame/key.png?1793919727967":"_assets/5061860eedd55198a28f.png","/GameZone/Games/MazeGame/key.png":"_assets/5061860eedd55198a28f.png","/GameZone/Games/MazeGame/key.png?1793919727967":"_assets/5061860eedd55198a28f.png","/Games/MazeGame/key.png":"_assets/5061860eedd55198a28f.png","/MazeGame/key.png":"_assets/5061860eedd55198a28f.png","/key.png":"_assets/5061860eedd55198a28f.png","https://kunjgit.github.io/GameZone/Games/MazeGame/key.png":"_assets/5061860eedd55198a28f.png","https://kunjgit.github.io/GameZone/Games/MazeGame/home.png?1793919727967":"_assets/bd7aedb88f354797a7b8.png","/GameZone/Games/MazeGame/home.png":"_assets/bd7aedb88f354797a7b8.png","/GameZone/Games/MazeGame/home.png?1793919727967":"_assets/bd7aedb88f354797a7b8.png","/Games/MazeGame/home.png":"_assets/bd7aedb88f354797a7b8.png","/MazeGame/home.png":"_assets/bd7aedb88f354797a7b8.png","/home.png":"_assets/bd7aedb88f354797a7b8.png","https://kunjgit.github.io/GameZone/Games/MazeGame/home.png":"_assets/bd7aedb88f354797a7b8.png"};
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
