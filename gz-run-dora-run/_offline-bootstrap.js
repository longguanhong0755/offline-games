(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Run_Dora_Run/game.js":"_assets/657de05a977a914900de.js","/GameZone/Games/Run_Dora_Run/game.js":"_assets/657de05a977a914900de.js","/Games/Run_Dora_Run/game.js":"_assets/657de05a977a914900de.js","/Run_Dora_Run/game.js":"_assets/657de05a977a914900de.js","/game.js":"_assets/657de05a977a914900de.js","https://kunjgit.github.io/GameZone/Games/Run_Dora_Run/styles.css":"_assets/e6f9c62b64b28d141e53.css","/GameZone/Games/Run_Dora_Run/styles.css":"_assets/e6f9c62b64b28d141e53.css","/Games/Run_Dora_Run/styles.css":"_assets/e6f9c62b64b28d141e53.css","/Run_Dora_Run/styles.css":"_assets/e6f9c62b64b28d141e53.css","/styles.css":"_assets/e6f9c62b64b28d141e53.css","https://kunjgit.github.io/GameZone/Games/Run_Dora_Run/obstacle.png":"_assets/af17a77d0b8398ef70cb.png","/GameZone/Games/Run_Dora_Run/obstacle.png":"_assets/af17a77d0b8398ef70cb.png","/Games/Run_Dora_Run/obstacle.png":"_assets/af17a77d0b8398ef70cb.png","/Run_Dora_Run/obstacle.png":"_assets/af17a77d0b8398ef70cb.png","/obstacle.png":"_assets/af17a77d0b8398ef70cb.png","https://kunjgit.github.io/GameZone/Games/Run_Dora_Run/doraemon.png":"_assets/242379dc125c0d5a66c2.png","/GameZone/Games/Run_Dora_Run/doraemon.png":"_assets/242379dc125c0d5a66c2.png","/Games/Run_Dora_Run/doraemon.png":"_assets/242379dc125c0d5a66c2.png","/Run_Dora_Run/doraemon.png":"_assets/242379dc125c0d5a66c2.png","/doraemon.png":"_assets/242379dc125c0d5a66c2.png","https://kunjgit.github.io/GameZone/Games/Run_Dora_Run/trap.png":"_assets/fb56a471cc990241be25.png","/GameZone/Games/Run_Dora_Run/trap.png":"_assets/fb56a471cc990241be25.png","/Games/Run_Dora_Run/trap.png":"_assets/fb56a471cc990241be25.png","/Run_Dora_Run/trap.png":"_assets/fb56a471cc990241be25.png","/trap.png":"_assets/fb56a471cc990241be25.png","https://kunjgit.github.io/GameZone/Games/Run_Dora_Run/background.png":"_assets/704bd7c463dc1f8301bc.png","/GameZone/Games/Run_Dora_Run/background.png":"_assets/704bd7c463dc1f8301bc.png","/Games/Run_Dora_Run/background.png":"_assets/704bd7c463dc1f8301bc.png","/Run_Dora_Run/background.png":"_assets/704bd7c463dc1f8301bc.png","/background.png":"_assets/704bd7c463dc1f8301bc.png","https://kunjgit.github.io/GameZone/Games/Run_Dora_Run/cake.png":"_assets/6f4de457ffe948583fc5.png","/GameZone/Games/Run_Dora_Run/cake.png":"_assets/6f4de457ffe948583fc5.png","/Games/Run_Dora_Run/cake.png":"_assets/6f4de457ffe948583fc5.png","/Run_Dora_Run/cake.png":"_assets/6f4de457ffe948583fc5.png","/cake.png":"_assets/6f4de457ffe948583fc5.png"};
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
