(() => {
  "use strict";
  const RUNTIME_MAP = {"https://shtange.github.io/bushed-bricks/css/style.css":"_assets/923900cb2c731490baf8.css","/bushed-bricks/css/style.css":"_assets/923900cb2c731490baf8.css","/css/style.css":"_assets/923900cb2c731490baf8.css","/style.css":"_assets/923900cb2c731490baf8.css","https://shtange.github.io/bushed-bricks/js/render.js":"_assets/a72b01387e77fb66828f.js","/bushed-bricks/js/render.js":"_assets/a72b01387e77fb66828f.js","/js/render.js":"_assets/a72b01387e77fb66828f.js","/render.js":"_assets/a72b01387e77fb66828f.js","https://shtange.github.io/bushed-bricks/js/controls.js":"_assets/db998dce8611e9c4444c.js","/bushed-bricks/js/controls.js":"_assets/db998dce8611e9c4444c.js","/js/controls.js":"_assets/db998dce8611e9c4444c.js","/controls.js":"_assets/db998dce8611e9c4444c.js","https://shtange.github.io/bushed-bricks/js/colour.js":"_assets/71be2bd48a020133e2c8.js","/bushed-bricks/js/colour.js":"_assets/71be2bd48a020133e2c8.js","/js/colour.js":"_assets/71be2bd48a020133e2c8.js","/colour.js":"_assets/71be2bd48a020133e2c8.js","https://shtange.github.io/bushed-bricks/js/shelter.js":"_assets/f161f08002faa7854e18.js","/bushed-bricks/js/shelter.js":"_assets/f161f08002faa7854e18.js","/js/shelter.js":"_assets/f161f08002faa7854e18.js","/shelter.js":"_assets/f161f08002faa7854e18.js","https://shtange.github.io/bushed-bricks/js/tile.js":"_assets/95e12cec3320007a510d.js","/bushed-bricks/js/tile.js":"_assets/95e12cec3320007a510d.js","/js/tile.js":"_assets/95e12cec3320007a510d.js","/tile.js":"_assets/95e12cec3320007a510d.js","https://shtange.github.io/bushed-bricks/js/gear.js":"_assets/8c051a1899f852ee23b9.js","/bushed-bricks/js/gear.js":"_assets/8c051a1899f852ee23b9.js","/js/gear.js":"_assets/8c051a1899f852ee23b9.js","/gear.js":"_assets/8c051a1899f852ee23b9.js","https://shtange.github.io/bushed-bricks/js/grid.js":"_assets/c6fb6bc56a525fdb25ff.js","/bushed-bricks/js/grid.js":"_assets/c6fb6bc56a525fdb25ff.js","/js/grid.js":"_assets/c6fb6bc56a525fdb25ff.js","/grid.js":"_assets/c6fb6bc56a525fdb25ff.js","https://shtange.github.io/bushed-bricks/js/app.js":"_assets/470772e3f878367f626c.js","/bushed-bricks/js/app.js":"_assets/470772e3f878367f626c.js","/js/app.js":"_assets/470772e3f878367f626c.js","/app.js":"_assets/470772e3f878367f626c.js","https://fonts.googleapis.com/css?family=Amatica+SC:400,700|Chathura:300,400|Comfortaa:300,400,700":"_assets/d528e237bced0fa656a9.css","/css":"_assets/d528e237bced0fa656a9.css","/css?family=Amatica+SC:400,700|Chathura:300,400|Comfortaa:300,400,700":"_assets/d528e237bced0fa656a9.css","https://fonts.googleapis.com/css":"_assets/d528e237bced0fa656a9.css","https://shtange.github.io/bushed-bricks/img/game-bg.png":"_assets/2cfe12b1671e0cdb65df.png","/bushed-bricks/img/game-bg.png":"_assets/2cfe12b1671e0cdb65df.png","/img/game-bg.png":"_assets/2cfe12b1671e0cdb65df.png","/game-bg.png":"_assets/2cfe12b1671e0cdb65df.png","https://fonts.gstatic.com/s/chathura/v22/_gP71R7-rzUuVjim428nq0E.woff2":"_assets/9850f055a4cebc9f497f.woff2","/s/chathura/v22/_gP71R7-rzUuVjim428nq0E.woff2":"_assets/9850f055a4cebc9f497f.woff2","/chathura/v22/_gP71R7-rzUuVjim428nq0E.woff2":"_assets/9850f055a4cebc9f497f.woff2","/v22/_gP71R7-rzUuVjim428nq0E.woff2":"_assets/9850f055a4cebc9f497f.woff2","/_gP71R7-rzUuVjim428nq0E.woff2":"_assets/9850f055a4cebc9f497f.woff2","https://fonts.gstatic.com/s/comfortaa/v47/1Ptsg8LJRfWJmhDAuUs4TYFq.woff2":"_assets/408f20ae9895ceefa460.woff2","/s/comfortaa/v47/1Ptsg8LJRfWJmhDAuUs4TYFq.woff2":"_assets/408f20ae9895ceefa460.woff2","/comfortaa/v47/1Ptsg8LJRfWJmhDAuUs4TYFq.woff2":"_assets/408f20ae9895ceefa460.woff2","/v47/1Ptsg8LJRfWJmhDAuUs4TYFq.woff2":"_assets/408f20ae9895ceefa460.woff2","/1Ptsg8LJRfWJmhDAuUs4TYFq.woff2":"_assets/408f20ae9895ceefa460.woff2","https://fonts.gstatic.com/s/amaticasc/v16/FwZd7-Y3x1wz-V2xaK3D0HCutUSe8Q.woff2":"_assets/f1df95fa10f0917d17cd.woff2","/s/amaticasc/v16/FwZd7-Y3x1wz-V2xaK3D0HCutUSe8Q.woff2":"_assets/f1df95fa10f0917d17cd.woff2","/amaticasc/v16/FwZd7-Y3x1wz-V2xaK3D0HCutUSe8Q.woff2":"_assets/f1df95fa10f0917d17cd.woff2","/v16/FwZd7-Y3x1wz-V2xaK3D0HCutUSe8Q.woff2":"_assets/f1df95fa10f0917d17cd.woff2","/FwZd7-Y3x1wz-V2xaK3D0HCutUSe8Q.woff2":"_assets/f1df95fa10f0917d17cd.woff2"};
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
