(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Ant_Smasher/style.css":"_assets/7c8443411068f4895156.css","/GameZone/Games/Ant_Smasher/style.css":"_assets/7c8443411068f4895156.css","/Games/Ant_Smasher/style.css":"_assets/7c8443411068f4895156.css","/Ant_Smasher/style.css":"_assets/7c8443411068f4895156.css","/style.css":"_assets/7c8443411068f4895156.css","https://kunjgit.github.io/GameZone/Games/Ant_Smasher/script.js":"_assets/1d29ed6edcbfbe06e192.js","/GameZone/Games/Ant_Smasher/script.js":"_assets/1d29ed6edcbfbe06e192.js","/Games/Ant_Smasher/script.js":"_assets/1d29ed6edcbfbe06e192.js","/Ant_Smasher/script.js":"_assets/1d29ed6edcbfbe06e192.js","/script.js":"_assets/1d29ed6edcbfbe06e192.js","https://fonts.googleapis.com/css?family=Amatic+SC:400,700":"_assets/b26a8018e3d3cc01d6d9.css","/css":"_assets/b26a8018e3d3cc01d6d9.css","/css?family=Amatic+SC:400,700":"_assets/b26a8018e3d3cc01d6d9.css","https://fonts.googleapis.com/css":"_assets/b26a8018e3d3cc01d6d9.css","https://kunjgit.github.io/GameZone/assets/images/Ant_Smasher_dirt.svg":"_assets/2f38c064b08bd3b9222e.svg","/GameZone/assets/images/Ant_Smasher_dirt.svg":"_assets/2f38c064b08bd3b9222e.svg","/assets/images/Ant_Smasher_dirt.svg":"_assets/2f38c064b08bd3b9222e.svg","/images/Ant_Smasher_dirt.svg":"_assets/2f38c064b08bd3b9222e.svg","/Ant_Smasher_dirt.svg":"_assets/2f38c064b08bd3b9222e.svg","https://kunjgit.github.io/GameZone/assets/images/Ant_Smasher.png":"_assets/e40c38c22479b74b39f8.png","/GameZone/assets/images/Ant_Smasher.png":"_assets/e40c38c22479b74b39f8.png","/assets/images/Ant_Smasher.png":"_assets/e40c38c22479b74b39f8.png","/images/Ant_Smasher.png":"_assets/e40c38c22479b74b39f8.png","/Ant_Smasher.png":"_assets/e40c38c22479b74b39f8.png","https://fonts.gstatic.com/s/amaticsc/v28/TUZ3zwprpvBS1izr_vOMscGKfrUC.woff2":"_assets/5d37fcdf66e96bde406d.woff2","/s/amaticsc/v28/TUZ3zwprpvBS1izr_vOMscGKfrUC.woff2":"_assets/5d37fcdf66e96bde406d.woff2","/amaticsc/v28/TUZ3zwprpvBS1izr_vOMscGKfrUC.woff2":"_assets/5d37fcdf66e96bde406d.woff2","/v28/TUZ3zwprpvBS1izr_vOMscGKfrUC.woff2":"_assets/5d37fcdf66e96bde406d.woff2","/TUZ3zwprpvBS1izr_vOMscGKfrUC.woff2":"_assets/5d37fcdf66e96bde406d.woff2","https://fonts.gstatic.com/s/amaticsc/v28/TUZyzwprpvBS1izr_vOECuSf.woff2":"_assets/9ee1dd0b37fcea476e41.woff2","/s/amaticsc/v28/TUZyzwprpvBS1izr_vOECuSf.woff2":"_assets/9ee1dd0b37fcea476e41.woff2","/amaticsc/v28/TUZyzwprpvBS1izr_vOECuSf.woff2":"_assets/9ee1dd0b37fcea476e41.woff2","/v28/TUZyzwprpvBS1izr_vOECuSf.woff2":"_assets/9ee1dd0b37fcea476e41.woff2","/TUZyzwprpvBS1izr_vOECuSf.woff2":"_assets/9ee1dd0b37fcea476e41.woff2"};
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
