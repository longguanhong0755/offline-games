(() => {
  "use strict";
  const RUNTIME_MAP = {"https://gravwell.liquidelectron.com/main.js":"_assets/90b97f72d100eba6cfe3.js","/main.js":"_assets/90b97f72d100eba6cfe3.js","https://gravwell.liquidelectron.com/textures/Space/space_py.jpg":"_assets/1b243c42646a53f0c61e.jpg","/textures/Space/space_py.jpg":"_assets/1b243c42646a53f0c61e.jpg","/Space/space_py.jpg":"_assets/1b243c42646a53f0c61e.jpg","/space_py.jpg":"_assets/1b243c42646a53f0c61e.jpg","https://gravwell.liquidelectron.com/textures/Space/space_px.jpg":"_assets/bb06225ef0d6cdb6013b.jpg","/textures/Space/space_px.jpg":"_assets/bb06225ef0d6cdb6013b.jpg","/Space/space_px.jpg":"_assets/bb06225ef0d6cdb6013b.jpg","/space_px.jpg":"_assets/bb06225ef0d6cdb6013b.jpg","https://gravwell.liquidelectron.com/textures/Space/space_pz.jpg":"_assets/183921652de45aa813ec.jpg","/textures/Space/space_pz.jpg":"_assets/183921652de45aa813ec.jpg","/Space/space_pz.jpg":"_assets/183921652de45aa813ec.jpg","/space_pz.jpg":"_assets/183921652de45aa813ec.jpg","https://gravwell.liquidelectron.com/textures/Space/space_ny.jpg":"_assets/bfd36218a75b3d5ea401.jpg","/textures/Space/space_ny.jpg":"_assets/bfd36218a75b3d5ea401.jpg","/Space/space_ny.jpg":"_assets/bfd36218a75b3d5ea401.jpg","/space_ny.jpg":"_assets/bfd36218a75b3d5ea401.jpg","https://gravwell.liquidelectron.com/textures/Space/space_nx.jpg":"_assets/04af8e5f73e5b8eede1c.jpg","/textures/Space/space_nx.jpg":"_assets/04af8e5f73e5b8eede1c.jpg","/Space/space_nx.jpg":"_assets/04af8e5f73e5b8eede1c.jpg","/space_nx.jpg":"_assets/04af8e5f73e5b8eede1c.jpg","https://gravwell.liquidelectron.com/textures/Space/space_nz.jpg":"_assets/60c2b4bac37c34b15480.jpg","/textures/Space/space_nz.jpg":"_assets/60c2b4bac37c34b15480.jpg","/Space/space_nz.jpg":"_assets/60c2b4bac37c34b15480.jpg","/space_nz.jpg":"_assets/60c2b4bac37c34b15480.jpg","https://gravwell.liquidelectron.com/textures/explosion-3.png":"_assets/948517f45a211ebb5cf0.png","/textures/explosion-3.png":"_assets/948517f45a211ebb5cf0.png","/explosion-3.png":"_assets/948517f45a211ebb5cf0.png","https://gravwell.liquidelectron.com/img/TitleLogo.png":"_assets/18ddc07a24886273cadd.png","/img/TitleLogo.png":"_assets/18ddc07a24886273cadd.png","/TitleLogo.png":"_assets/18ddc07a24886273cadd.png"};
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
