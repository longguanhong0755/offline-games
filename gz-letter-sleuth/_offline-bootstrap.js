(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Letter_Sleuth/style.css":"_assets/c4c1b3fac7bd69afb3a9.css","/GameZone/Games/Letter_Sleuth/style.css":"_assets/c4c1b3fac7bd69afb3a9.css","/Games/Letter_Sleuth/style.css":"_assets/c4c1b3fac7bd69afb3a9.css","/Letter_Sleuth/style.css":"_assets/c4c1b3fac7bd69afb3a9.css","/style.css":"_assets/c4c1b3fac7bd69afb3a9.css","https://kunjgit.github.io/GameZone/Games/Letter_Sleuth/script.js":"_assets/b78d7dbbdef06036fee9.js","/GameZone/Games/Letter_Sleuth/script.js":"_assets/b78d7dbbdef06036fee9.js","/Games/Letter_Sleuth/script.js":"_assets/b78d7dbbdef06036fee9.js","/Letter_Sleuth/script.js":"_assets/b78d7dbbdef06036fee9.js","/script.js":"_assets/b78d7dbbdef06036fee9.js","https://kunjgit.github.io/GameZone/Games/Letter_Sleuth/assets/logo.png":"_assets/c3a4204e9acb269fe525.png","/GameZone/Games/Letter_Sleuth/assets/logo.png":"_assets/c3a4204e9acb269fe525.png","/Games/Letter_Sleuth/assets/logo.png":"_assets/c3a4204e9acb269fe525.png","/Letter_Sleuth/assets/logo.png":"_assets/c3a4204e9acb269fe525.png","/assets/logo.png":"_assets/c3a4204e9acb269fe525.png","/logo.png":"_assets/c3a4204e9acb269fe525.png","https://kunjgit.github.io/GameZone/Games/Letter_Sleuth/assets/correct.mp3":"_assets/0281b156f9b155e02044.mp3","/GameZone/Games/Letter_Sleuth/assets/correct.mp3":"_assets/0281b156f9b155e02044.mp3","/Games/Letter_Sleuth/assets/correct.mp3":"_assets/0281b156f9b155e02044.mp3","/Letter_Sleuth/assets/correct.mp3":"_assets/0281b156f9b155e02044.mp3","/assets/correct.mp3":"_assets/0281b156f9b155e02044.mp3","/correct.mp3":"_assets/0281b156f9b155e02044.mp3","https://kunjgit.github.io/GameZone/Games/Letter_Sleuth/assets/incorrect.mp3":"_assets/1ac25b4a2dfd6b1094fc.mp3","/GameZone/Games/Letter_Sleuth/assets/incorrect.mp3":"_assets/1ac25b4a2dfd6b1094fc.mp3","/Games/Letter_Sleuth/assets/incorrect.mp3":"_assets/1ac25b4a2dfd6b1094fc.mp3","/Letter_Sleuth/assets/incorrect.mp3":"_assets/1ac25b4a2dfd6b1094fc.mp3","/assets/incorrect.mp3":"_assets/1ac25b4a2dfd6b1094fc.mp3","/incorrect.mp3":"_assets/1ac25b4a2dfd6b1094fc.mp3","https://kunjgit.github.io/GameZone/Games/Letter_Sleuth/assets/lose.mp3":"_assets/5d447fd30bd408ca63a8.mp3","/GameZone/Games/Letter_Sleuth/assets/lose.mp3":"_assets/5d447fd30bd408ca63a8.mp3","/Games/Letter_Sleuth/assets/lose.mp3":"_assets/5d447fd30bd408ca63a8.mp3","/Letter_Sleuth/assets/lose.mp3":"_assets/5d447fd30bd408ca63a8.mp3","/assets/lose.mp3":"_assets/5d447fd30bd408ca63a8.mp3","/lose.mp3":"_assets/5d447fd30bd408ca63a8.mp3","https://kunjgit.github.io/GameZone/Games/Letter_Sleuth/assets/win.mp3":"_assets/dbc791784f00695bafa7.mp3","/GameZone/Games/Letter_Sleuth/assets/win.mp3":"_assets/dbc791784f00695bafa7.mp3","/Games/Letter_Sleuth/assets/win.mp3":"_assets/dbc791784f00695bafa7.mp3","/Letter_Sleuth/assets/win.mp3":"_assets/dbc791784f00695bafa7.mp3","/assets/win.mp3":"_assets/dbc791784f00695bafa7.mp3","/win.mp3":"_assets/dbc791784f00695bafa7.mp3"};
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
