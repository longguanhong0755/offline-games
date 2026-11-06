(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Get_The_Pigeon/helpers.js":"_assets/cb14b741d5593adc2972.js","/GameZone/Games/Get_The_Pigeon/helpers.js":"_assets/cb14b741d5593adc2972.js","/Games/Get_The_Pigeon/helpers.js":"_assets/cb14b741d5593adc2972.js","/Get_The_Pigeon/helpers.js":"_assets/cb14b741d5593adc2972.js","/helpers.js":"_assets/cb14b741d5593adc2972.js","https://kunjgit.github.io/GameZone/Games/Get_The_Pigeon/boid.js":"_assets/dfb2f8e3d177c81da3db.js","/GameZone/Games/Get_The_Pigeon/boid.js":"_assets/dfb2f8e3d177c81da3db.js","/Games/Get_The_Pigeon/boid.js":"_assets/dfb2f8e3d177c81da3db.js","/Get_The_Pigeon/boid.js":"_assets/dfb2f8e3d177c81da3db.js","/boid.js":"_assets/dfb2f8e3d177c81da3db.js","https://kunjgit.github.io/GameZone/Games/Get_The_Pigeon/drago.js":"_assets/d90535ad26acf3c56b2f.js","/GameZone/Games/Get_The_Pigeon/drago.js":"_assets/d90535ad26acf3c56b2f.js","/Games/Get_The_Pigeon/drago.js":"_assets/d90535ad26acf3c56b2f.js","/Get_The_Pigeon/drago.js":"_assets/d90535ad26acf3c56b2f.js","/drago.js":"_assets/d90535ad26acf3c56b2f.js","https://kunjgit.github.io/GameZone/Games/Get_The_Pigeon/balloon.js":"_assets/fa4ce1c76de8f72e05bd.js","/GameZone/Games/Get_The_Pigeon/balloon.js":"_assets/fa4ce1c76de8f72e05bd.js","/Games/Get_The_Pigeon/balloon.js":"_assets/fa4ce1c76de8f72e05bd.js","/Get_The_Pigeon/balloon.js":"_assets/fa4ce1c76de8f72e05bd.js","/balloon.js":"_assets/fa4ce1c76de8f72e05bd.js","https://kunjgit.github.io/GameZone/Games/Get_The_Pigeon/plane.js":"_assets/f37526322a8a972adaf8.js","/GameZone/Games/Get_The_Pigeon/plane.js":"_assets/f37526322a8a972adaf8.js","/Games/Get_The_Pigeon/plane.js":"_assets/f37526322a8a972adaf8.js","/Get_The_Pigeon/plane.js":"_assets/f37526322a8a972adaf8.js","/plane.js":"_assets/f37526322a8a972adaf8.js","https://kunjgit.github.io/GameZone/Games/Get_The_Pigeon/game.js":"_assets/191811e0b437b171fa12.js","/GameZone/Games/Get_The_Pigeon/game.js":"_assets/191811e0b437b171fa12.js","/Games/Get_The_Pigeon/game.js":"_assets/191811e0b437b171fa12.js","/Get_The_Pigeon/game.js":"_assets/191811e0b437b171fa12.js","/game.js":"_assets/191811e0b437b171fa12.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/all.min.css":"_assets/d87ddf917b7a1449ab45.css","https://aframe.io/releases/0.8.2/aframe.min.js":"_assets/c10fe375aa92d00fbb4d.js","/releases/0.8.2/aframe.min.js":"_assets/c10fe375aa92d00fbb4d.js","/0.8.2/aframe.min.js":"_assets/c10fe375aa92d00fbb4d.js","/aframe.min.js":"_assets/c10fe375aa92d00fbb4d.js","https://cdn.aframe.io/fonts/Roboto-msdf.json":"_assets/217b4e06b3a9caf5d07c.json","/fonts/Roboto-msdf.json":"_assets/217b4e06b3a9caf5d07c.json","/Roboto-msdf.json":"_assets/217b4e06b3a9caf5d07c.json","https://cdn.aframe.io/fonts/Roboto-msdf.png":"_assets/b738616df3178050bb52.png","/fonts/Roboto-msdf.png":"_assets/b738616df3178050bb52.png","/Roboto-msdf.png":"_assets/b738616df3178050bb52.png","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2"};
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
