(() => {
  "use strict";
  const RUNTIME_MAP = {"https://lanceewing.github.io/the-kings-missing-page/Game.css":"_assets/0ad533a98d6ca50da563.css","/the-kings-missing-page/Game.css":"_assets/0ad533a98d6ca50da563.css","/Game.css":"_assets/0ad533a98d6ca50da563.css","https://lanceewing.github.io/the-kings-missing-page/Logic.js":"_assets/251efffaf79c36c3d4d4.js","/the-kings-missing-page/Logic.js":"_assets/251efffaf79c36c3d4d4.js","/Logic.js":"_assets/251efffaf79c36c3d4d4.js","https://lanceewing.github.io/the-kings-missing-page/Util.js":"_assets/c6eed7907f2b74fcc4a2.js","/the-kings-missing-page/Util.js":"_assets/c6eed7907f2b74fcc4a2.js","/Util.js":"_assets/c6eed7907f2b74fcc4a2.js","https://lanceewing.github.io/the-kings-missing-page/Sprite.js":"_assets/96db61430f8c285d8590.js","/the-kings-missing-page/Sprite.js":"_assets/96db61430f8c285d8590.js","/Sprite.js":"_assets/96db61430f8c285d8590.js","https://lanceewing.github.io/the-kings-missing-page/Actor.js":"_assets/f1d90259c7a6b75eae73.js","/the-kings-missing-page/Actor.js":"_assets/f1d90259c7a6b75eae73.js","/Actor.js":"_assets/f1d90259c7a6b75eae73.js","https://lanceewing.github.io/the-kings-missing-page/Ego.js":"_assets/04a462ccd0600f91d56b.js","/the-kings-missing-page/Ego.js":"_assets/04a462ccd0600f91d56b.js","/Ego.js":"_assets/04a462ccd0600f91d56b.js","https://lanceewing.github.io/the-kings-missing-page/player-small.js":"_assets/ec0c2b4c9facd16ccd6d.js","/the-kings-missing-page/player-small.js":"_assets/ec0c2b4c9facd16ccd6d.js","/player-small.js":"_assets/ec0c2b4c9facd16ccd6d.js","https://lanceewing.github.io/the-kings-missing-page/Sound.js":"_assets/d893328b2108a20cdbab.js","/the-kings-missing-page/Sound.js":"_assets/d893328b2108a20cdbab.js","/Sound.js":"_assets/d893328b2108a20cdbab.js","https://lanceewing.github.io/the-kings-missing-page/Game.js":"_assets/c5230916811e49783f62.js","/the-kings-missing-page/Game.js":"_assets/c5230916811e49783f62.js","/Game.js":"_assets/c5230916811e49783f62.js"};
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
