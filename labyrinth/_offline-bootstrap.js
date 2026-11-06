(() => {
  "use strict";
  const RUNTIME_MAP = {"https://okkindel.github.io/projects/maze/src/map.js":"_assets/0e5b47b953ba1c335375.js","/projects/maze/src/map.js":"_assets/0e5b47b953ba1c335375.js","/maze/src/map.js":"_assets/0e5b47b953ba1c335375.js","/src/map.js":"_assets/0e5b47b953ba1c335375.js","/map.js":"_assets/0e5b47b953ba1c335375.js","https://okkindel.github.io/projects/maze/src/renderer.js":"_assets/cde1a2440d5145a6986e.js","/projects/maze/src/renderer.js":"_assets/cde1a2440d5145a6986e.js","/maze/src/renderer.js":"_assets/cde1a2440d5145a6986e.js","/src/renderer.js":"_assets/cde1a2440d5145a6986e.js","/renderer.js":"_assets/cde1a2440d5145a6986e.js","https://okkindel.github.io/projects/maze/src/enemies.js":"_assets/51177027734ce566dc64.js","/projects/maze/src/enemies.js":"_assets/51177027734ce566dc64.js","/maze/src/enemies.js":"_assets/51177027734ce566dc64.js","/src/enemies.js":"_assets/51177027734ce566dc64.js","/enemies.js":"_assets/51177027734ce566dc64.js","https://okkindel.github.io/projects/maze/src/init.js":"_assets/d4a7f06fab99bd1303a5.js","/projects/maze/src/init.js":"_assets/d4a7f06fab99bd1303a5.js","/maze/src/init.js":"_assets/d4a7f06fab99bd1303a5.js","/src/init.js":"_assets/d4a7f06fab99bd1303a5.js","/init.js":"_assets/d4a7f06fab99bd1303a5.js","https://okkindel.github.io/projects/maze/src/sprites.js":"_assets/c9ea718038fdf9309ccb.js","/projects/maze/src/sprites.js":"_assets/c9ea718038fdf9309ccb.js","/maze/src/sprites.js":"_assets/c9ea718038fdf9309ccb.js","/src/sprites.js":"_assets/c9ea718038fdf9309ccb.js","/sprites.js":"_assets/c9ea718038fdf9309ccb.js","https://okkindel.github.io/projects/maze/src/player.js":"_assets/318f780c92f60c1bba75.js","/projects/maze/src/player.js":"_assets/318f780c92f60c1bba75.js","/maze/src/player.js":"_assets/318f780c92f60c1bba75.js","/src/player.js":"_assets/318f780c92f60c1bba75.js","/player.js":"_assets/318f780c92f60c1bba75.js","https://okkindel.github.io/projects/maze/src/styles.css":"_assets/9aa32c5496572d5c67e8.css","/projects/maze/src/styles.css":"_assets/9aa32c5496572d5c67e8.css","/maze/src/styles.css":"_assets/9aa32c5496572d5c67e8.css","/src/styles.css":"_assets/9aa32c5496572d5c67e8.css","/styles.css":"_assets/9aa32c5496572d5c67e8.css","https://okkindel.github.io/projects/maze/src/assets/ceiling.jpg":"_assets/1e6d1b60eded354c4b7f.jpg","/projects/maze/src/assets/ceiling.jpg":"_assets/1e6d1b60eded354c4b7f.jpg","/maze/src/assets/ceiling.jpg":"_assets/1e6d1b60eded354c4b7f.jpg","/src/assets/ceiling.jpg":"_assets/1e6d1b60eded354c4b7f.jpg","/assets/ceiling.jpg":"_assets/1e6d1b60eded354c4b7f.jpg","/ceiling.jpg":"_assets/1e6d1b60eded354c4b7f.jpg","https://okkindel.github.io/projects/maze/src/assets/walls.png":"_assets/8a613f4170f90d17967e.png","/projects/maze/src/assets/walls.png":"_assets/8a613f4170f90d17967e.png","/maze/src/assets/walls.png":"_assets/8a613f4170f90d17967e.png","/src/assets/walls.png":"_assets/8a613f4170f90d17967e.png","/assets/walls.png":"_assets/8a613f4170f90d17967e.png","/walls.png":"_assets/8a613f4170f90d17967e.png","https://okkindel.github.io/projects/maze/src/assets/bush.png":"_assets/ce60debb6176b8fc699b.png","/projects/maze/src/assets/bush.png":"_assets/ce60debb6176b8fc699b.png","/maze/src/assets/bush.png":"_assets/ce60debb6176b8fc699b.png","/src/assets/bush.png":"_assets/ce60debb6176b8fc699b.png","/assets/bush.png":"_assets/ce60debb6176b8fc699b.png","/bush.png":"_assets/ce60debb6176b8fc699b.png","https://okkindel.github.io/projects/maze/src/assets/rat.png":"_assets/3b73e09805ce9e39aa62.png","/projects/maze/src/assets/rat.png":"_assets/3b73e09805ce9e39aa62.png","/maze/src/assets/rat.png":"_assets/3b73e09805ce9e39aa62.png","/src/assets/rat.png":"_assets/3b73e09805ce9e39aa62.png","/assets/rat.png":"_assets/3b73e09805ce9e39aa62.png","/rat.png":"_assets/3b73e09805ce9e39aa62.png"};
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
