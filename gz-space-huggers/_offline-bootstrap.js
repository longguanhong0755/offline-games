(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Space_Huggers/engine/engineUtil.js":"_assets/448ff65dc1c72e5c198f.js","/GameZone/Games/Space_Huggers/engine/engineUtil.js":"_assets/448ff65dc1c72e5c198f.js","/Games/Space_Huggers/engine/engineUtil.js":"_assets/448ff65dc1c72e5c198f.js","/Space_Huggers/engine/engineUtil.js":"_assets/448ff65dc1c72e5c198f.js","/engine/engineUtil.js":"_assets/448ff65dc1c72e5c198f.js","/engineUtil.js":"_assets/448ff65dc1c72e5c198f.js","https://kunjgit.github.io/GameZone/Games/Space_Huggers/engine/engineDebug.js":"_assets/38c514c5ca771e61b6f8.js","/GameZone/Games/Space_Huggers/engine/engineDebug.js":"_assets/38c514c5ca771e61b6f8.js","/Games/Space_Huggers/engine/engineDebug.js":"_assets/38c514c5ca771e61b6f8.js","/Space_Huggers/engine/engineDebug.js":"_assets/38c514c5ca771e61b6f8.js","/engine/engineDebug.js":"_assets/38c514c5ca771e61b6f8.js","/engineDebug.js":"_assets/38c514c5ca771e61b6f8.js","https://kunjgit.github.io/GameZone/Games/Space_Huggers/engine/engine.js":"_assets/35a2873b9adb8eb268fa.js","/GameZone/Games/Space_Huggers/engine/engine.js":"_assets/35a2873b9adb8eb268fa.js","/Games/Space_Huggers/engine/engine.js":"_assets/35a2873b9adb8eb268fa.js","/Space_Huggers/engine/engine.js":"_assets/35a2873b9adb8eb268fa.js","/engine/engine.js":"_assets/35a2873b9adb8eb268fa.js","/engine.js":"_assets/35a2873b9adb8eb268fa.js","https://kunjgit.github.io/GameZone/Games/Space_Huggers/engine/engineObject.js":"_assets/b02fe2122288e3c68b2a.js","/GameZone/Games/Space_Huggers/engine/engineObject.js":"_assets/b02fe2122288e3c68b2a.js","/Games/Space_Huggers/engine/engineObject.js":"_assets/b02fe2122288e3c68b2a.js","/Space_Huggers/engine/engineObject.js":"_assets/b02fe2122288e3c68b2a.js","/engine/engineObject.js":"_assets/b02fe2122288e3c68b2a.js","/engineObject.js":"_assets/b02fe2122288e3c68b2a.js","https://kunjgit.github.io/GameZone/Games/Space_Huggers/engine/engineWebGL.js":"_assets/7d5fac6d04a32f8feea3.js","/GameZone/Games/Space_Huggers/engine/engineWebGL.js":"_assets/7d5fac6d04a32f8feea3.js","/Games/Space_Huggers/engine/engineWebGL.js":"_assets/7d5fac6d04a32f8feea3.js","/Space_Huggers/engine/engineWebGL.js":"_assets/7d5fac6d04a32f8feea3.js","/engine/engineWebGL.js":"_assets/7d5fac6d04a32f8feea3.js","/engineWebGL.js":"_assets/7d5fac6d04a32f8feea3.js","https://kunjgit.github.io/GameZone/Games/Space_Huggers/engine/engineInput.js":"_assets/2ccd711e3b992f73e767.js","/GameZone/Games/Space_Huggers/engine/engineInput.js":"_assets/2ccd711e3b992f73e767.js","/Games/Space_Huggers/engine/engineInput.js":"_assets/2ccd711e3b992f73e767.js","/Space_Huggers/engine/engineInput.js":"_assets/2ccd711e3b992f73e767.js","/engine/engineInput.js":"_assets/2ccd711e3b992f73e767.js","/engineInput.js":"_assets/2ccd711e3b992f73e767.js","https://kunjgit.github.io/GameZone/Games/Space_Huggers/engine/engineDraw.js":"_assets/02ff026cf56ee9ed10c2.js","/GameZone/Games/Space_Huggers/engine/engineDraw.js":"_assets/02ff026cf56ee9ed10c2.js","/Games/Space_Huggers/engine/engineDraw.js":"_assets/02ff026cf56ee9ed10c2.js","/Space_Huggers/engine/engineDraw.js":"_assets/02ff026cf56ee9ed10c2.js","/engine/engineDraw.js":"_assets/02ff026cf56ee9ed10c2.js","/engineDraw.js":"_assets/02ff026cf56ee9ed10c2.js","https://kunjgit.github.io/GameZone/Games/Space_Huggers/engine/engineAudio.js":"_assets/afd6fc60ab4daeba8eb4.js","/GameZone/Games/Space_Huggers/engine/engineAudio.js":"_assets/afd6fc60ab4daeba8eb4.js","/Games/Space_Huggers/engine/engineAudio.js":"_assets/afd6fc60ab4daeba8eb4.js","/Space_Huggers/engine/engineAudio.js":"_assets/afd6fc60ab4daeba8eb4.js","/engine/engineAudio.js":"_assets/afd6fc60ab4daeba8eb4.js","/engineAudio.js":"_assets/afd6fc60ab4daeba8eb4.js","https://kunjgit.github.io/GameZone/Games/Space_Huggers/engine/engineTileLayer.js":"_assets/c371f68ab544d1a8c78b.js","/GameZone/Games/Space_Huggers/engine/engineTileLayer.js":"_assets/c371f68ab544d1a8c78b.js","/Games/Space_Huggers/engine/engineTileLayer.js":"_assets/c371f68ab544d1a8c78b.js","/Space_Huggers/engine/engineTileLayer.js":"_assets/c371f68ab544d1a8c78b.js","/engine/engineTileLayer.js":"_assets/c371f68ab544d1a8c78b.js","/engineTileLayer.js":"_assets/c371f68ab544d1a8c78b.js","https://kunjgit.github.io/GameZone/Games/Space_Huggers/engine/engineParticle.js":"_assets/8f12e4d0a218123d627e.js","/GameZone/Games/Space_Huggers/engine/engineParticle.js":"_assets/8f12e4d0a218123d627e.js","/Games/Space_Huggers/engine/engineParticle.js":"_assets/8f12e4d0a218123d627e.js","/Space_Huggers/engine/engineParticle.js":"_assets/8f12e4d0a218123d627e.js","/engine/engineParticle.js":"_assets/8f12e4d0a218123d627e.js","/engineParticle.js":"_assets/8f12e4d0a218123d627e.js","https://kunjgit.github.io/GameZone/Games/Space_Huggers/appObjects.js":"_assets/3559b580492b5958625a.js","/GameZone/Games/Space_Huggers/appObjects.js":"_assets/3559b580492b5958625a.js","/Games/Space_Huggers/appObjects.js":"_assets/3559b580492b5958625a.js","/Space_Huggers/appObjects.js":"_assets/3559b580492b5958625a.js","/appObjects.js":"_assets/3559b580492b5958625a.js","https://kunjgit.github.io/GameZone/Games/Space_Huggers/appCharacters.js":"_assets/b53386a5ebc159e8569d.js","/GameZone/Games/Space_Huggers/appCharacters.js":"_assets/b53386a5ebc159e8569d.js","/Games/Space_Huggers/appCharacters.js":"_assets/b53386a5ebc159e8569d.js","/Space_Huggers/appCharacters.js":"_assets/b53386a5ebc159e8569d.js","/appCharacters.js":"_assets/b53386a5ebc159e8569d.js","https://kunjgit.github.io/GameZone/Games/Space_Huggers/appEffects.js":"_assets/fb1b93f0aaee4eb7ac52.js","/GameZone/Games/Space_Huggers/appEffects.js":"_assets/fb1b93f0aaee4eb7ac52.js","/Games/Space_Huggers/appEffects.js":"_assets/fb1b93f0aaee4eb7ac52.js","/Space_Huggers/appEffects.js":"_assets/fb1b93f0aaee4eb7ac52.js","/appEffects.js":"_assets/fb1b93f0aaee4eb7ac52.js","https://kunjgit.github.io/GameZone/Games/Space_Huggers/appLevel.js":"_assets/81e9c12fe3d3e7e02d19.js","/GameZone/Games/Space_Huggers/appLevel.js":"_assets/81e9c12fe3d3e7e02d19.js","/Games/Space_Huggers/appLevel.js":"_assets/81e9c12fe3d3e7e02d19.js","/Space_Huggers/appLevel.js":"_assets/81e9c12fe3d3e7e02d19.js","/appLevel.js":"_assets/81e9c12fe3d3e7e02d19.js","https://kunjgit.github.io/GameZone/Games/Space_Huggers/app.js":"_assets/eaaeb587306946de9a76.js","/GameZone/Games/Space_Huggers/app.js":"_assets/eaaeb587306946de9a76.js","/Games/Space_Huggers/app.js":"_assets/eaaeb587306946de9a76.js","/Space_Huggers/app.js":"_assets/eaaeb587306946de9a76.js","/app.js":"_assets/eaaeb587306946de9a76.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/all.min.css":"_assets/d87ddf917b7a1449ab45.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2"};
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
