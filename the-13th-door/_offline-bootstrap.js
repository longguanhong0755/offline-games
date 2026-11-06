(() => {
  "use strict";
  const RUNTIME_MAP = {"https://lanceewing.github.io/the-13th-door/Game.css":"_assets/df8ef9dc7a46f9edd816.css","/the-13th-door/Game.css":"_assets/df8ef9dc7a46f9edd816.css","/Game.css":"_assets/df8ef9dc7a46f9edd816.css","https://lanceewing.github.io/the-13th-door/Util.js":"_assets/1db53cab860f6cb88af8.js","/the-13th-door/Util.js":"_assets/1db53cab860f6cb88af8.js","/Util.js":"_assets/1db53cab860f6cb88af8.js","https://lanceewing.github.io/the-13th-door/Logic.js":"_assets/a115d94c0c7dfed491ff.js","/the-13th-door/Logic.js":"_assets/a115d94c0c7dfed491ff.js","/Logic.js":"_assets/a115d94c0c7dfed491ff.js","https://lanceewing.github.io/the-13th-door/Sprite.js":"_assets/487ffe4e72da0a54a364.js","/the-13th-door/Sprite.js":"_assets/487ffe4e72da0a54a364.js","/Sprite.js":"_assets/487ffe4e72da0a54a364.js","https://lanceewing.github.io/the-13th-door/Ego.js":"_assets/4536f1c38c55595e543b.js","/the-13th-door/Ego.js":"_assets/4536f1c38c55595e543b.js","/Ego.js":"_assets/4536f1c38c55595e543b.js","https://lanceewing.github.io/the-13th-door/jsfxr.js":"_assets/18ca13666626e05ea55c.js","/the-13th-door/jsfxr.js":"_assets/18ca13666626e05ea55c.js","/jsfxr.js":"_assets/18ca13666626e05ea55c.js","https://lanceewing.github.io/the-13th-door/Sound.js":"_assets/7eef6fdcef8684fec8d8.js","/the-13th-door/Sound.js":"_assets/7eef6fdcef8684fec8d8.js","/Sound.js":"_assets/7eef6fdcef8684fec8d8.js","https://lanceewing.github.io/the-13th-door/Game.js":"_assets/e4aae4220329316d71b0.js","/the-13th-door/Game.js":"_assets/e4aae4220329316d71b0.js","/Game.js":"_assets/e4aae4220329316d71b0.js","https://lanceewing.github.io/the-13th-door/player-small.js":"_assets/ec0c2b4c9facd16ccd6d.js","/the-13th-door/player-small.js":"_assets/ec0c2b4c9facd16ccd6d.js","/player-small.js":"_assets/ec0c2b4c9facd16ccd6d.js"};
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
