(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Catch%20Him/styles/reset.css":"_assets/6bf0ea8c0533c0535b3d.css","/GameZone/Games/Catch%20Him/styles/reset.css":"_assets/6bf0ea8c0533c0535b3d.css","/Games/Catch%20Him/styles/reset.css":"_assets/6bf0ea8c0533c0535b3d.css","/Catch%20Him/styles/reset.css":"_assets/6bf0ea8c0533c0535b3d.css","/styles/reset.css":"_assets/6bf0ea8c0533c0535b3d.css","/reset.css":"_assets/6bf0ea8c0533c0535b3d.css","https://kunjgit.github.io/GameZone/Games/Catch%20Him/images/player.png":"_assets/f03b553f6b20a6a91a4a.png","/GameZone/Games/Catch%20Him/images/player.png":"_assets/f03b553f6b20a6a91a4a.png","/Games/Catch%20Him/images/player.png":"_assets/f03b553f6b20a6a91a4a.png","/Catch%20Him/images/player.png":"_assets/f03b553f6b20a6a91a4a.png","/images/player.png":"_assets/f03b553f6b20a6a91a4a.png","/player.png":"_assets/f03b553f6b20a6a91a4a.png","https://kunjgit.github.io/GameZone/Games/Catch%20Him/scripts/engine.js":"_assets/1db4b29a275ff526575e.js","/GameZone/Games/Catch%20Him/scripts/engine.js":"_assets/1db4b29a275ff526575e.js","/Games/Catch%20Him/scripts/engine.js":"_assets/1db4b29a275ff526575e.js","/Catch%20Him/scripts/engine.js":"_assets/1db4b29a275ff526575e.js","/scripts/engine.js":"_assets/1db4b29a275ff526575e.js","/engine.js":"_assets/1db4b29a275ff526575e.js","https://kunjgit.github.io/GameZone/Games/Catch%20Him/styles/main.css":"_assets/b4613d676e32a0e7d5a7.css","/GameZone/Games/Catch%20Him/styles/main.css":"_assets/b4613d676e32a0e7d5a7.css","/Games/Catch%20Him/styles/main.css":"_assets/b4613d676e32a0e7d5a7.css","/Catch%20Him/styles/main.css":"_assets/b4613d676e32a0e7d5a7.css","/styles/main.css":"_assets/b4613d676e32a0e7d5a7.css","/main.css":"_assets/b4613d676e32a0e7d5a7.css","https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Press+Start+2P&display=swap":"_assets/7d79fd7ff491f7907111.css","/css2":"_assets/7d79fd7ff491f7907111.css","/css2?family=Bebas+Neue&family=Press+Start+2P&display=swap":"_assets/7d79fd7ff491f7907111.css","https://fonts.googleapis.com/css2":"_assets/7d79fd7ff491f7907111.css","https://kunjgit.github.io/GameZone/Games/Catch%20Him/images/ralph.png":"_assets/9aa856842c09f6e2934d.png","/GameZone/Games/Catch%20Him/images/ralph.png":"_assets/9aa856842c09f6e2934d.png","/Games/Catch%20Him/images/ralph.png":"_assets/9aa856842c09f6e2934d.png","/Catch%20Him/images/ralph.png":"_assets/9aa856842c09f6e2934d.png","/images/ralph.png":"_assets/9aa856842c09f6e2934d.png","/ralph.png":"_assets/9aa856842c09f6e2934d.png","https://fonts.gstatic.com/s/pressstart2p/v16/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2":"_assets/afec86997fdaf54af1f5.woff2","/s/pressstart2p/v16/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2":"_assets/afec86997fdaf54af1f5.woff2","/pressstart2p/v16/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2":"_assets/afec86997fdaf54af1f5.woff2","/v16/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2":"_assets/afec86997fdaf54af1f5.woff2","/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2":"_assets/afec86997fdaf54af1f5.woff2","https://kunjgit.github.io/GameZone/Games/Catch%20Him/images/wall.png":"_assets/95a961bb93c1a5c56de9.png","/GameZone/Games/Catch%20Him/images/wall.png":"_assets/95a961bb93c1a5c56de9.png","/Games/Catch%20Him/images/wall.png":"_assets/95a961bb93c1a5c56de9.png","/Catch%20Him/images/wall.png":"_assets/95a961bb93c1a5c56de9.png","/images/wall.png":"_assets/95a961bb93c1a5c56de9.png","/wall.png":"_assets/95a961bb93c1a5c56de9.png"};
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
