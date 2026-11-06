(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Ultimate_Football_Manager/styles.css":"_assets/42742f8a9e0e8e0ea63a.css","/GameZone/Games/Ultimate_Football_Manager/styles.css":"_assets/42742f8a9e0e8e0ea63a.css","/Games/Ultimate_Football_Manager/styles.css":"_assets/42742f8a9e0e8e0ea63a.css","/Ultimate_Football_Manager/styles.css":"_assets/42742f8a9e0e8e0ea63a.css","/styles.css":"_assets/42742f8a9e0e8e0ea63a.css","https://kunjgit.github.io/GameZone/Games/Ultimate_Football_Manager/js/teamClass.js":"_assets/aa7b08e247d5d372a06c.js","/GameZone/Games/Ultimate_Football_Manager/js/teamClass.js":"_assets/aa7b08e247d5d372a06c.js","/Games/Ultimate_Football_Manager/js/teamClass.js":"_assets/aa7b08e247d5d372a06c.js","/Ultimate_Football_Manager/js/teamClass.js":"_assets/aa7b08e247d5d372a06c.js","/js/teamClass.js":"_assets/aa7b08e247d5d372a06c.js","/teamClass.js":"_assets/aa7b08e247d5d372a06c.js","https://kunjgit.github.io/GameZone/Games/Ultimate_Football_Manager/js/playerClass.js":"_assets/b50f1d870e0ef5c6ef07.js","/GameZone/Games/Ultimate_Football_Manager/js/playerClass.js":"_assets/b50f1d870e0ef5c6ef07.js","/Games/Ultimate_Football_Manager/js/playerClass.js":"_assets/b50f1d870e0ef5c6ef07.js","/Ultimate_Football_Manager/js/playerClass.js":"_assets/b50f1d870e0ef5c6ef07.js","/js/playerClass.js":"_assets/b50f1d870e0ef5c6ef07.js","/playerClass.js":"_assets/b50f1d870e0ef5c6ef07.js","https://kunjgit.github.io/GameZone/Games/Ultimate_Football_Manager/js/results.js":"_assets/aed1d5e44aa227e5fb24.js","/GameZone/Games/Ultimate_Football_Manager/js/results.js":"_assets/aed1d5e44aa227e5fb24.js","/Games/Ultimate_Football_Manager/js/results.js":"_assets/aed1d5e44aa227e5fb24.js","/Ultimate_Football_Manager/js/results.js":"_assets/aed1d5e44aa227e5fb24.js","/js/results.js":"_assets/aed1d5e44aa227e5fb24.js","/results.js":"_assets/aed1d5e44aa227e5fb24.js","https://kunjgit.github.io/GameZone/Games/Ultimate_Football_Manager/js/main.js":"_assets/f14a70c9b946706df055.js","/GameZone/Games/Ultimate_Football_Manager/js/main.js":"_assets/f14a70c9b946706df055.js","/Games/Ultimate_Football_Manager/js/main.js":"_assets/f14a70c9b946706df055.js","/Ultimate_Football_Manager/js/main.js":"_assets/f14a70c9b946706df055.js","/js/main.js":"_assets/f14a70c9b946706df055.js","/main.js":"_assets/f14a70c9b946706df055.js","https://kunjgit.github.io/GameZone/Games/Ultimate_Football_Manager/js/leagues.js":"_assets/96b8e6aa352a2e96224c.js","/GameZone/Games/Ultimate_Football_Manager/js/leagues.js":"_assets/96b8e6aa352a2e96224c.js","/Games/Ultimate_Football_Manager/js/leagues.js":"_assets/96b8e6aa352a2e96224c.js","/Ultimate_Football_Manager/js/leagues.js":"_assets/96b8e6aa352a2e96224c.js","/js/leagues.js":"_assets/96b8e6aa352a2e96224c.js","/leagues.js":"_assets/96b8e6aa352a2e96224c.js","https://kunjgit.github.io/GameZone/Games/Ultimate_Football_Manager/js/fixture.js":"_assets/09660f9966bb39e7f8ce.js","/GameZone/Games/Ultimate_Football_Manager/js/fixture.js":"_assets/09660f9966bb39e7f8ce.js","/Games/Ultimate_Football_Manager/js/fixture.js":"_assets/09660f9966bb39e7f8ce.js","/Ultimate_Football_Manager/js/fixture.js":"_assets/09660f9966bb39e7f8ce.js","/js/fixture.js":"_assets/09660f9966bb39e7f8ce.js","/fixture.js":"_assets/09660f9966bb39e7f8ce.js","https://kunjgit.github.io/GameZone/Games/Ultimate_Football_Manager/js/engine.js":"_assets/3b7cc055c44f02788e0c.js","/GameZone/Games/Ultimate_Football_Manager/js/engine.js":"_assets/3b7cc055c44f02788e0c.js","/Games/Ultimate_Football_Manager/js/engine.js":"_assets/3b7cc055c44f02788e0c.js","/Ultimate_Football_Manager/js/engine.js":"_assets/3b7cc055c44f02788e0c.js","/js/engine.js":"_assets/3b7cc055c44f02788e0c.js","/engine.js":"_assets/3b7cc055c44f02788e0c.js","https://kunjgit.github.io/GameZone/Games/Ultimate_Football_Manager/js/game.js":"_assets/0b2bdf4fcfc50305e29d.js","/GameZone/Games/Ultimate_Football_Manager/js/game.js":"_assets/0b2bdf4fcfc50305e29d.js","/Games/Ultimate_Football_Manager/js/game.js":"_assets/0b2bdf4fcfc50305e29d.js","/Ultimate_Football_Manager/js/game.js":"_assets/0b2bdf4fcfc50305e29d.js","/js/game.js":"_assets/0b2bdf4fcfc50305e29d.js","/game.js":"_assets/0b2bdf4fcfc50305e29d.js","https://kunjgit.github.io/GameZone/Games/Ultimate_Football_Manager/js/teamTable.js":"_assets/b3906b12abfb10cb6690.js","/GameZone/Games/Ultimate_Football_Manager/js/teamTable.js":"_assets/b3906b12abfb10cb6690.js","/Games/Ultimate_Football_Manager/js/teamTable.js":"_assets/b3906b12abfb10cb6690.js","/Ultimate_Football_Manager/js/teamTable.js":"_assets/b3906b12abfb10cb6690.js","/js/teamTable.js":"_assets/b3906b12abfb10cb6690.js","/teamTable.js":"_assets/b3906b12abfb10cb6690.js","https://kunjgit.github.io/GameZone/Games/Ultimate_Football_Manager/js/playerList.json":"_assets/447061310acd6cf31abf.json","/GameZone/Games/Ultimate_Football_Manager/js/playerList.json":"_assets/447061310acd6cf31abf.json","/Games/Ultimate_Football_Manager/js/playerList.json":"_assets/447061310acd6cf31abf.json","/Ultimate_Football_Manager/js/playerList.json":"_assets/447061310acd6cf31abf.json","/js/playerList.json":"_assets/447061310acd6cf31abf.json","/playerList.json":"_assets/447061310acd6cf31abf.json","https://kunjgit.github.io/GameZone/Games/Ultimate_Football_Manager/assets/images/mario-klassen-70YxSTWa2Zw-unsplash.jpg":"_assets/b3006037bfefee493d56.jpg","/GameZone/Games/Ultimate_Football_Manager/assets/images/mario-klassen-70YxSTWa2Zw-unsplash.jpg":"_assets/b3006037bfefee493d56.jpg","/Games/Ultimate_Football_Manager/assets/images/mario-klassen-70YxSTWa2Zw-unsplash.jpg":"_assets/b3006037bfefee493d56.jpg","/Ultimate_Football_Manager/assets/images/mario-klassen-70YxSTWa2Zw-unsplash.jpg":"_assets/b3006037bfefee493d56.jpg","/assets/images/mario-klassen-70YxSTWa2Zw-unsplash.jpg":"_assets/b3006037bfefee493d56.jpg","/images/mario-klassen-70YxSTWa2Zw-unsplash.jpg":"_assets/b3006037bfefee493d56.jpg","/mario-klassen-70YxSTWa2Zw-unsplash.jpg":"_assets/b3006037bfefee493d56.jpg","https://kunjgit.github.io/GameZone/Games/Ultimate_Football_Manager/js/teams.json":"_assets/e87d9d26ba51beea924c.json","/GameZone/Games/Ultimate_Football_Manager/js/teams.json":"_assets/e87d9d26ba51beea924c.json","/Games/Ultimate_Football_Manager/js/teams.json":"_assets/e87d9d26ba51beea924c.json","/Ultimate_Football_Manager/js/teams.json":"_assets/e87d9d26ba51beea924c.json","/js/teams.json":"_assets/e87d9d26ba51beea924c.json","/teams.json":"_assets/e87d9d26ba51beea924c.json"};
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
