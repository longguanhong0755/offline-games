(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Ghost_busting_game/style.css":"_assets/e8c0d6a1248e601c4430.css","/GameZone/Games/Ghost_busting_game/style.css":"_assets/e8c0d6a1248e601c4430.css","/Games/Ghost_busting_game/style.css":"_assets/e8c0d6a1248e601c4430.css","/Ghost_busting_game/style.css":"_assets/e8c0d6a1248e601c4430.css","/style.css":"_assets/e8c0d6a1248e601c4430.css","https://fonts.googleapis.com/css?family=Lato":"_assets/ad32e4d561f51f807163.css","/css":"_assets/ad32e4d561f51f807163.css","/css?family=Lato":"_assets/ad32e4d561f51f807163.css","https://fonts.googleapis.com/css":"_assets/ad32e4d561f51f807163.css","https://kunjgit.github.io/GameZone/Games/Ghost_busting_game/back1.jpg":"_assets/249285ee02ecd4dab192.jpg","/GameZone/Games/Ghost_busting_game/back1.jpg":"_assets/249285ee02ecd4dab192.jpg","/Games/Ghost_busting_game/back1.jpg":"_assets/249285ee02ecd4dab192.jpg","/Ghost_busting_game/back1.jpg":"_assets/249285ee02ecd4dab192.jpg","/back1.jpg":"_assets/249285ee02ecd4dab192.jpg","https://fonts.gstatic.com/s/lato/v25/S6uyw4BMUTPHjx4wXg.woff2":"_assets/918b7dc3e2e2d015c16c.woff2","/s/lato/v25/S6uyw4BMUTPHjx4wXg.woff2":"_assets/918b7dc3e2e2d015c16c.woff2","/lato/v25/S6uyw4BMUTPHjx4wXg.woff2":"_assets/918b7dc3e2e2d015c16c.woff2","/v25/S6uyw4BMUTPHjx4wXg.woff2":"_assets/918b7dc3e2e2d015c16c.woff2","/S6uyw4BMUTPHjx4wXg.woff2":"_assets/918b7dc3e2e2d015c16c.woff2","https://kunjgit.github.io/GameZone/Games/Ghost_busting_game/background.jpg":"_assets/e1f8ea99251f879e561b.jpg","/GameZone/Games/Ghost_busting_game/background.jpg":"_assets/e1f8ea99251f879e561b.jpg","/Games/Ghost_busting_game/background.jpg":"_assets/e1f8ea99251f879e561b.jpg","/Ghost_busting_game/background.jpg":"_assets/e1f8ea99251f879e561b.jpg","/background.jpg":"_assets/e1f8ea99251f879e561b.jpg"};
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
