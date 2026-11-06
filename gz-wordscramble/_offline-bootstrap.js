(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/wordScramble/styles.css":"_assets/9f3959a1048d185518ed.css","/GameZone/Games/wordScramble/styles.css":"_assets/9f3959a1048d185518ed.css","/Games/wordScramble/styles.css":"_assets/9f3959a1048d185518ed.css","/wordScramble/styles.css":"_assets/9f3959a1048d185518ed.css","/styles.css":"_assets/9f3959a1048d185518ed.css","https://kunjgit.github.io/GameZone/Games/wordScramble/assets/giphy.gif":"_assets/a5ede3fa03f1abf7bbe2.gif","/GameZone/Games/wordScramble/assets/giphy.gif":"_assets/a5ede3fa03f1abf7bbe2.gif","/Games/wordScramble/assets/giphy.gif":"_assets/a5ede3fa03f1abf7bbe2.gif","/wordScramble/assets/giphy.gif":"_assets/a5ede3fa03f1abf7bbe2.gif","/assets/giphy.gif":"_assets/a5ede3fa03f1abf7bbe2.gif","/giphy.gif":"_assets/a5ede3fa03f1abf7bbe2.gif","https://kunjgit.github.io/GameZone/Games/wordScramble/assets/logo.png":"_assets/cc4fb0e7bf2518003c05.png","/GameZone/Games/wordScramble/assets/logo.png":"_assets/cc4fb0e7bf2518003c05.png","/Games/wordScramble/assets/logo.png":"_assets/cc4fb0e7bf2518003c05.png","/wordScramble/assets/logo.png":"_assets/cc4fb0e7bf2518003c05.png","/assets/logo.png":"_assets/cc4fb0e7bf2518003c05.png","/logo.png":"_assets/cc4fb0e7bf2518003c05.png","https://kunjgit.github.io/GameZone/Games/wordScramble/assets/game-start.mp3":"_assets/1e95917a5fa832bd31ea.mp3","/GameZone/Games/wordScramble/assets/game-start.mp3":"_assets/1e95917a5fa832bd31ea.mp3","/Games/wordScramble/assets/game-start.mp3":"_assets/1e95917a5fa832bd31ea.mp3","/wordScramble/assets/game-start.mp3":"_assets/1e95917a5fa832bd31ea.mp3","/assets/game-start.mp3":"_assets/1e95917a5fa832bd31ea.mp3","/game-start.mp3":"_assets/1e95917a5fa832bd31ea.mp3","https://kunjgit.github.io/GameZone/Games/wordScramble/script.js":"_assets/2f6d4510895a3826f16e.js","/GameZone/Games/wordScramble/script.js":"_assets/2f6d4510895a3826f16e.js","/Games/wordScramble/script.js":"_assets/2f6d4510895a3826f16e.js","/wordScramble/script.js":"_assets/2f6d4510895a3826f16e.js","/script.js":"_assets/2f6d4510895a3826f16e.js","https://kunjgit.github.io/GameZone/Games/wordScramble/assets/background.jpg":"_assets/5f83e5a3c3c4f9f263da.jpg","/GameZone/Games/wordScramble/assets/background.jpg":"_assets/5f83e5a3c3c4f9f263da.jpg","/Games/wordScramble/assets/background.jpg":"_assets/5f83e5a3c3c4f9f263da.jpg","/wordScramble/assets/background.jpg":"_assets/5f83e5a3c3c4f9f263da.jpg","/assets/background.jpg":"_assets/5f83e5a3c3c4f9f263da.jpg","/background.jpg":"_assets/5f83e5a3c3c4f9f263da.jpg"};
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
