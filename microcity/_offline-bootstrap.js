(() => {
  "use strict";
  const RUNTIME_MAP = {"https://eliot-akira.github.io/microcity/index.min.css?1671356360568":"_assets/34042a982db2a5dfe58a.css","/microcity/index.min.css":"_assets/34042a982db2a5dfe58a.css","/microcity/index.min.css?1671356360568":"_assets/34042a982db2a5dfe58a.css","/index.min.css":"_assets/34042a982db2a5dfe58a.css","https://eliot-akira.github.io/microcity/index.min.css":"_assets/34042a982db2a5dfe58a.css","https://eliot-akira.github.io/microcity/images/tools/police.png":"_assets/3c29946b3cd6cebdd4cb.png","/microcity/images/tools/police.png":"_assets/3c29946b3cd6cebdd4cb.png","/images/tools/police.png":"_assets/3c29946b3cd6cebdd4cb.png","/tools/police.png":"_assets/3c29946b3cd6cebdd4cb.png","/police.png":"_assets/3c29946b3cd6cebdd4cb.png","https://eliot-akira.github.io/microcity/images/tools/airport.png":"_assets/28b1374347d6603c9b93.png","/microcity/images/tools/airport.png":"_assets/28b1374347d6603c9b93.png","/images/tools/airport.png":"_assets/28b1374347d6603c9b93.png","/tools/airport.png":"_assets/28b1374347d6603c9b93.png","/airport.png":"_assets/28b1374347d6603c9b93.png","https://eliot-akira.github.io/microcity/vendor/jquery-3.6.1.min.js":"_assets/a3cf00c109d907e543bc.js","/microcity/vendor/jquery-3.6.1.min.js":"_assets/a3cf00c109d907e543bc.js","/vendor/jquery-3.6.1.min.js":"_assets/a3cf00c109d907e543bc.js","/jquery-3.6.1.min.js":"_assets/a3cf00c109d907e543bc.js","https://eliot-akira.github.io/microcity/images/tools/bulldozer.png":"_assets/78791658bf0d8aef533f.png","/microcity/images/tools/bulldozer.png":"_assets/78791658bf0d8aef533f.png","/images/tools/bulldozer.png":"_assets/78791658bf0d8aef533f.png","/tools/bulldozer.png":"_assets/78791658bf0d8aef533f.png","/bulldozer.png":"_assets/78791658bf0d8aef533f.png","https://eliot-akira.github.io/microcity/images/tools/road.png":"_assets/4569a263ffd0d35144c6.png","/microcity/images/tools/road.png":"_assets/4569a263ffd0d35144c6.png","/images/tools/road.png":"_assets/4569a263ffd0d35144c6.png","/tools/road.png":"_assets/4569a263ffd0d35144c6.png","/road.png":"_assets/4569a263ffd0d35144c6.png","https://eliot-akira.github.io/microcity/images/tools/nuclear.png":"_assets/18e8b22b3d1db135b4eb.png","/microcity/images/tools/nuclear.png":"_assets/18e8b22b3d1db135b4eb.png","/images/tools/nuclear.png":"_assets/18e8b22b3d1db135b4eb.png","/tools/nuclear.png":"_assets/18e8b22b3d1db135b4eb.png","/nuclear.png":"_assets/18e8b22b3d1db135b4eb.png","https://eliot-akira.github.io/microcity/images/tools/port.png":"_assets/06091af2c4d8111ec8fe.png","/microcity/images/tools/port.png":"_assets/06091af2c4d8111ec8fe.png","/images/tools/port.png":"_assets/06091af2c4d8111ec8fe.png","/tools/port.png":"_assets/06091af2c4d8111ec8fe.png","/port.png":"_assets/06091af2c4d8111ec8fe.png","https://eliot-akira.github.io/microcity/images/tools/wire.png":"_assets/4daf6abc61a4a4ba6a80.png","/microcity/images/tools/wire.png":"_assets/4daf6abc61a4a4ba6a80.png","/images/tools/wire.png":"_assets/4daf6abc61a4a4ba6a80.png","/tools/wire.png":"_assets/4daf6abc61a4a4ba6a80.png","/wire.png":"_assets/4daf6abc61a4a4ba6a80.png","https://eliot-akira.github.io/microcity/images/tools/coal.png":"_assets/3cf2eac73b75334d3cf4.png","/microcity/images/tools/coal.png":"_assets/3cf2eac73b75334d3cf4.png","/images/tools/coal.png":"_assets/3cf2eac73b75334d3cf4.png","/tools/coal.png":"_assets/3cf2eac73b75334d3cf4.png","/coal.png":"_assets/3cf2eac73b75334d3cf4.png","https://eliot-akira.github.io/microcity/images/tools/rail.png":"_assets/c6932a70e61217fdb74c.png","/microcity/images/tools/rail.png":"_assets/c6932a70e61217fdb74c.png","/images/tools/rail.png":"_assets/c6932a70e61217fdb74c.png","/tools/rail.png":"_assets/c6932a70e61217fdb74c.png","/rail.png":"_assets/c6932a70e61217fdb74c.png","https://eliot-akira.github.io/microcity/images/tools/stadium.png":"_assets/9a9d778a89b99030eeab.png","/microcity/images/tools/stadium.png":"_assets/9a9d778a89b99030eeab.png","/images/tools/stadium.png":"_assets/9a9d778a89b99030eeab.png","/tools/stadium.png":"_assets/9a9d778a89b99030eeab.png","/stadium.png":"_assets/9a9d778a89b99030eeab.png","https://eliot-akira.github.io/microcity/images/tools/fire.png":"_assets/9507265d920f9c15a248.png","/microcity/images/tools/fire.png":"_assets/9507265d920f9c15a248.png","/images/tools/fire.png":"_assets/9507265d920f9c15a248.png","/tools/fire.png":"_assets/9507265d920f9c15a248.png","/fire.png":"_assets/9507265d920f9c15a248.png","https://eliot-akira.github.io/microcity/images/tools/commercial.png":"_assets/04c9fdf68a3f8363a79d.png","/microcity/images/tools/commercial.png":"_assets/04c9fdf68a3f8363a79d.png","/images/tools/commercial.png":"_assets/04c9fdf68a3f8363a79d.png","/tools/commercial.png":"_assets/04c9fdf68a3f8363a79d.png","/commercial.png":"_assets/04c9fdf68a3f8363a79d.png","https://eliot-akira.github.io/microcity/images/tools/park.png":"_assets/225d692f7ea541df4346.png","/microcity/images/tools/park.png":"_assets/225d692f7ea541df4346.png","/images/tools/park.png":"_assets/225d692f7ea541df4346.png","/tools/park.png":"_assets/225d692f7ea541df4346.png","/park.png":"_assets/225d692f7ea541df4346.png","https://eliot-akira.github.io/microcity/images/tools/industrial.png":"_assets/28ab64942615b87ba3ed.png","/microcity/images/tools/industrial.png":"_assets/28ab64942615b87ba3ed.png","/images/tools/industrial.png":"_assets/28ab64942615b87ba3ed.png","/tools/industrial.png":"_assets/28ab64942615b87ba3ed.png","/industrial.png":"_assets/28ab64942615b87ba3ed.png","https://eliot-akira.github.io/microcity/images/tools/residential.png":"_assets/162ba5d2f25da1e92008.png","/microcity/images/tools/residential.png":"_assets/162ba5d2f25da1e92008.png","/images/tools/residential.png":"_assets/162ba5d2f25da1e92008.png","/tools/residential.png":"_assets/162ba5d2f25da1e92008.png","/residential.png":"_assets/162ba5d2f25da1e92008.png","https://eliot-akira.github.io/microcity/images/tools/query.png":"_assets/699d9adedf130ef0c9d4.png","/microcity/images/tools/query.png":"_assets/699d9adedf130ef0c9d4.png","/images/tools/query.png":"_assets/699d9adedf130ef0c9d4.png","/tools/query.png":"_assets/699d9adedf130ef0c9d4.png","/query.png":"_assets/699d9adedf130ef0c9d4.png","https://eliot-akira.github.io/microcity/index.min.js?1671356360568":"_assets/9e7cc5d89e329d973bf0.js","/microcity/index.min.js":"_assets/9e7cc5d89e329d973bf0.js","/microcity/index.min.js?1671356360568":"_assets/9e7cc5d89e329d973bf0.js","/index.min.js":"_assets/9e7cc5d89e329d973bf0.js","https://eliot-akira.github.io/microcity/index.min.js":"_assets/9e7cc5d89e329d973bf0.js","https://eliot-akira.github.io/microcity/images/tiles/earth.png":"_assets/a88d41c3d73e7ab14f80.png","/microcity/images/tiles/earth.png":"_assets/a88d41c3d73e7ab14f80.png","/images/tiles/earth.png":"_assets/a88d41c3d73e7ab14f80.png","/tiles/earth.png":"_assets/a88d41c3d73e7ab14f80.png","/earth.png":"_assets/a88d41c3d73e7ab14f80.png","https://eliot-akira.github.io/microcity/images/sprites.png":"_assets/c3e9dcb16c3daa73f06d.png","/microcity/images/sprites.png":"_assets/c3e9dcb16c3daa73f06d.png","/images/sprites.png":"_assets/c3e9dcb16c3daa73f06d.png","/sprites.png":"_assets/c3e9dcb16c3daa73f06d.png"};
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
