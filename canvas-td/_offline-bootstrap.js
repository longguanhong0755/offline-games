(() => {
  "use strict";
  const RUNTIME_MAP = {"https://canvas-td.teddy.io/index.css":"_assets/83fe9278a7ffcd624aca.css","/index.css":"_assets/83fe9278a7ffcd624aca.css","https://canvas-td.teddy.io/images/logo.png":"_assets/145c0a52b8c72449291c.png","/images/logo.png":"_assets/145c0a52b8c72449291c.png","/logo.png":"_assets/145c0a52b8c72449291c.png","https://fonts.googleapis.com/css?family=Droid+Sans+Mono":"_assets/b53fd2f247b7ac40322a.css","/css":"_assets/b53fd2f247b7ac40322a.css","/css?family=Droid+Sans+Mono":"_assets/b53fd2f247b7ac40322a.css","https://fonts.googleapis.com/css":"_assets/b53fd2f247b7ac40322a.css","https://canvas-td.teddy.io/scripts/utils.js":"_assets/162b03a9b5dd962f72bf.js","/scripts/utils.js":"_assets/162b03a9b5dd962f72bf.js","/utils.js":"_assets/162b03a9b5dd962f72bf.js","https://canvas-td.teddy.io/scripts/defs.js":"_assets/215ee5295997b5e0f542.js","/scripts/defs.js":"_assets/215ee5295997b5e0f542.js","/defs.js":"_assets/215ee5295997b5e0f542.js","https://canvas-td.teddy.io/images/maps/loopy.png":"_assets/889387b15edbdd328fc4.png","/images/maps/loopy.png":"_assets/889387b15edbdd328fc4.png","/maps/loopy.png":"_assets/889387b15edbdd328fc4.png","/loopy.png":"_assets/889387b15edbdd328fc4.png","https://canvas-td.teddy.io/scripts/game.js":"_assets/88a2f318cb8bfda7d22d.js","/scripts/game.js":"_assets/88a2f318cb8bfda7d22d.js","/game.js":"_assets/88a2f318cb8bfda7d22d.js","https://canvas-td.teddy.io/images/turrets/missile.png":"_assets/5500a08d1f08842e67de.png","/images/turrets/missile.png":"_assets/5500a08d1f08842e67de.png","/turrets/missile.png":"_assets/5500a08d1f08842e67de.png","/missile.png":"_assets/5500a08d1f08842e67de.png","https://canvas-td.teddy.io/images/maps/backtrack.png":"_assets/40a88ac7aed87e3e6935.png","/images/maps/backtrack.png":"_assets/40a88ac7aed87e3e6935.png","/maps/backtrack.png":"_assets/40a88ac7aed87e3e6935.png","/backtrack.png":"_assets/40a88ac7aed87e3e6935.png","https://canvas-td.teddy.io/scripts/ui.js":"_assets/6ab65f30d068c32567b2.js","/scripts/ui.js":"_assets/6ab65f30d068c32567b2.js","/ui.js":"_assets/6ab65f30d068c32567b2.js","https://canvas-td.teddy.io/images/turrets/laser.png":"_assets/c92a7f2210d2908a7b49.png","/images/turrets/laser.png":"_assets/c92a7f2210d2908a7b49.png","/turrets/laser.png":"_assets/c92a7f2210d2908a7b49.png","/laser.png":"_assets/c92a7f2210d2908a7b49.png","https://canvas-td.teddy.io/images/maps/dash.png":"_assets/6993d419d3733dbb58d6.png","/images/maps/dash.png":"_assets/6993d419d3733dbb58d6.png","/maps/dash.png":"_assets/6993d419d3733dbb58d6.png","/dash.png":"_assets/6993d419d3733dbb58d6.png","https://canvas-td.teddy.io/images/turrets/tazer.png":"_assets/0f4b3ff4f47fad4c6280.png","/images/turrets/tazer.png":"_assets/0f4b3ff4f47fad4c6280.png","/turrets/tazer.png":"_assets/0f4b3ff4f47fad4c6280.png","/tazer.png":"_assets/0f4b3ff4f47fad4c6280.png","https://canvas-td.teddy.io/images/turrets/mortar.png":"_assets/d1839e4de81bf092e6fa.png","/images/turrets/mortar.png":"_assets/d1839e4de81bf092e6fa.png","/turrets/mortar.png":"_assets/d1839e4de81bf092e6fa.png","/mortar.png":"_assets/d1839e4de81bf092e6fa.png","https://fonts.gstatic.com/s/droidsansmono/v21/6NUO8FuJNQ2MbkrZ5-J8lKFrp7pRef2r.woff2":"_assets/fb0fd8f6c68ef27e7f8c.woff2","/s/droidsansmono/v21/6NUO8FuJNQ2MbkrZ5-J8lKFrp7pRef2r.woff2":"_assets/fb0fd8f6c68ef27e7f8c.woff2","/droidsansmono/v21/6NUO8FuJNQ2MbkrZ5-J8lKFrp7pRef2r.woff2":"_assets/fb0fd8f6c68ef27e7f8c.woff2","/v21/6NUO8FuJNQ2MbkrZ5-J8lKFrp7pRef2r.woff2":"_assets/fb0fd8f6c68ef27e7f8c.woff2","/6NUO8FuJNQ2MbkrZ5-J8lKFrp7pRef2r.woff2":"_assets/fb0fd8f6c68ef27e7f8c.woff2"};
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
