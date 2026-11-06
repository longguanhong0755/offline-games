(() => {
  "use strict";
  const RUNTIME_MAP = {"http://zanejs.com/plants-union-game/libs/stats.min.js":"_assets/c82b45746688aca6d551.js","/plants-union-game/libs/stats.min.js":"_assets/c82b45746688aca6d551.js","/libs/stats.min.js":"_assets/c82b45746688aca6d551.js","/stats.min.js":"_assets/c82b45746688aca6d551.js","http://zanejs.com/plants-union-game/libs/rawinflate.min.js":"_assets/88eefeecf557e183c190.js","/plants-union-game/libs/rawinflate.min.js":"_assets/88eefeecf557e183c190.js","/libs/rawinflate.min.js":"_assets/88eefeecf557e183c190.js","/rawinflate.min.js":"_assets/88eefeecf557e183c190.js","http://zanejs.com/plants-union-game/libs/pixi.min.js":"_assets/2f456cc4c3e4267d26c9.js","/plants-union-game/libs/pixi.min.js":"_assets/2f456cc4c3e4267d26c9.js","/libs/pixi.min.js":"_assets/2f456cc4c3e4267d26c9.js","/pixi.min.js":"_assets/2f456cc4c3e4267d26c9.js","http://zanejs.com/plants-union-game/css/app.css":"_assets/08fc3c6a49afdf46f195.css","/plants-union-game/css/app.css":"_assets/08fc3c6a49afdf46f195.css","/css/app.css":"_assets/08fc3c6a49afdf46f195.css","/app.css":"_assets/08fc3c6a49afdf46f195.css","http://zanejs.com/plants-union-game/libs/fairygui.min.js":"_assets/641ac780fd0ee5f6721c.js","/plants-union-game/libs/fairygui.min.js":"_assets/641ac780fd0ee5f6721c.js","/libs/fairygui.min.js":"_assets/641ac780fd0ee5f6721c.js","/fairygui.min.js":"_assets/641ac780fd0ee5f6721c.js","http://zanejs.com/plants-union-game/libs/tweenjs.min.js":"_assets/7715129fd7fcdf767ea7.js","/plants-union-game/libs/tweenjs.min.js":"_assets/7715129fd7fcdf767ea7.js","/libs/tweenjs.min.js":"_assets/7715129fd7fcdf767ea7.js","/tweenjs.min.js":"_assets/7715129fd7fcdf767ea7.js","http://zanejs.com/plants-union-game/images/bg.png":"_assets/42558ac83218d28d0dc8.png","/plants-union-game/images/bg.png":"_assets/42558ac83218d28d0dc8.png","/images/bg.png":"_assets/42558ac83218d28d0dc8.png","/bg.png":"_assets/42558ac83218d28d0dc8.png","http://zanejs.com/plants-union-game/js/app.js":"_assets/5793d5a26c77a28eb983.js","/plants-union-game/js/app.js":"_assets/5793d5a26c77a28eb983.js","/js/app.js":"_assets/5793d5a26c77a28eb983.js","/app.js":"_assets/5793d5a26c77a28eb983.js","http://zanejs.com/plants-union-game/images/background.jpg":"_assets/9a933e388ef47fa23b6c.jpg","/plants-union-game/images/background.jpg":"_assets/9a933e388ef47fa23b6c.jpg","/images/background.jpg":"_assets/9a933e388ef47fa23b6c.jpg","/background.jpg":"_assets/9a933e388ef47fa23b6c.jpg","http://zanejs.com/plants-union-game/fgui/loading.fui":"_assets/2fe54b1741348546bf26.fui","/plants-union-game/fgui/loading.fui":"_assets/2fe54b1741348546bf26.fui","/fgui/loading.fui":"_assets/2fe54b1741348546bf26.fui","/loading.fui":"_assets/2fe54b1741348546bf26.fui","http://zanejs.com/plants-union-game/fgui/loading@atlas0.png":"_assets/a8742c116441308f93fd.png","/plants-union-game/fgui/loading@atlas0.png":"_assets/a8742c116441308f93fd.png","/fgui/loading@atlas0.png":"_assets/a8742c116441308f93fd.png","/loading@atlas0.png":"_assets/a8742c116441308f93fd.png","http://zanejs.com/plants-union-game/fgui/background.fui":"_assets/7b32fd3c4b561ada1a53.fui","/plants-union-game/fgui/background.fui":"_assets/7b32fd3c4b561ada1a53.fui","/fgui/background.fui":"_assets/7b32fd3c4b561ada1a53.fui","/background.fui":"_assets/7b32fd3c4b561ada1a53.fui","http://zanejs.com/plants-union-game/fgui/main.fui":"_assets/430569f11c54e7ae6342.fui","/plants-union-game/fgui/main.fui":"_assets/430569f11c54e7ae6342.fui","/fgui/main.fui":"_assets/430569f11c54e7ae6342.fui","/main.fui":"_assets/430569f11c54e7ae6342.fui","http://zanejs.com/plants-union-game/fgui/main@atlas0.png":"_assets/5030a8e7426e89103f65.png","/plants-union-game/fgui/main@atlas0.png":"_assets/5030a8e7426e89103f65.png","/fgui/main@atlas0.png":"_assets/5030a8e7426e89103f65.png","/main@atlas0.png":"_assets/5030a8e7426e89103f65.png","http://zanejs.com/plants-union-game/images/bg/hallbg0.jpg":"_assets/45ddb9cb137ff964e2e8.jpg","/plants-union-game/images/bg/hallbg0.jpg":"_assets/45ddb9cb137ff964e2e8.jpg","/images/bg/hallbg0.jpg":"_assets/45ddb9cb137ff964e2e8.jpg","/bg/hallbg0.jpg":"_assets/45ddb9cb137ff964e2e8.jpg","/hallbg0.jpg":"_assets/45ddb9cb137ff964e2e8.jpg"};
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
