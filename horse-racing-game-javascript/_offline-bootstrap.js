(() => {
  "use strict";
  const RUNTIME_MAP = {"https://fkitsantas.github.io/Horse-Racing-Game-JavaScript/game.css":"_assets/99aa72e3038cee094672.css","/Horse-Racing-Game-JavaScript/game.css":"_assets/99aa72e3038cee094672.css","/game.css":"_assets/99aa72e3038cee094672.css","https://fkitsantas.github.io/Horse-Racing-Game-JavaScript/images/tree.png":"_assets/4fcb7a600a823cfea288.png","/Horse-Racing-Game-JavaScript/images/tree.png":"_assets/4fcb7a600a823cfea288.png","/images/tree.png":"_assets/4fcb7a600a823cfea288.png","/tree.png":"_assets/4fcb7a600a823cfea288.png","https://fkitsantas.github.io/Horse-Racing-Game-JavaScript/game.js":"_assets/6e146f5c38a3b4a6100e.js","/Horse-Racing-Game-JavaScript/game.js":"_assets/6e146f5c38a3b4a6100e.js","/game.js":"_assets/6e146f5c38a3b4a6100e.js","https://fkitsantas.github.io/Horse-Racing-Game-JavaScript/images/horse2.png":"_assets/4e8377e137e12249d18c.png","/Horse-Racing-Game-JavaScript/images/horse2.png":"_assets/4e8377e137e12249d18c.png","/images/horse2.png":"_assets/4e8377e137e12249d18c.png","/horse2.png":"_assets/4e8377e137e12249d18c.png","https://fkitsantas.github.io/Horse-Racing-Game-JavaScript/images/head4.png":"_assets/6f9dc1bc3e9a446c8615.png","/Horse-Racing-Game-JavaScript/images/head4.png":"_assets/6f9dc1bc3e9a446c8615.png","/images/head4.png":"_assets/6f9dc1bc3e9a446c8615.png","/head4.png":"_assets/6f9dc1bc3e9a446c8615.png","https://fkitsantas.github.io/Horse-Racing-Game-JavaScript/images/body0.png":"_assets/730631bbf767b50410cd.png","/Horse-Racing-Game-JavaScript/images/body0.png":"_assets/730631bbf767b50410cd.png","/images/body0.png":"_assets/730631bbf767b50410cd.png","/body0.png":"_assets/730631bbf767b50410cd.png","https://fkitsantas.github.io/Horse-Racing-Game-JavaScript/images/head0.png":"_assets/538d2c7245a78f8990ca.png","/Horse-Racing-Game-JavaScript/images/head0.png":"_assets/538d2c7245a78f8990ca.png","/images/head0.png":"_assets/538d2c7245a78f8990ca.png","/head0.png":"_assets/538d2c7245a78f8990ca.png","https://fkitsantas.github.io/Horse-Racing-Game-JavaScript/images/bg.png":"_assets/33ffab7989c21093763e.png","/Horse-Racing-Game-JavaScript/images/bg.png":"_assets/33ffab7989c21093763e.png","/images/bg.png":"_assets/33ffab7989c21093763e.png","/bg.png":"_assets/33ffab7989c21093763e.png","https://fkitsantas.github.io/Horse-Racing-Game-JavaScript/images/body1.png":"_assets/bd9f4cfe5069f523d711.png","/Horse-Racing-Game-JavaScript/images/body1.png":"_assets/bd9f4cfe5069f523d711.png","/images/body1.png":"_assets/bd9f4cfe5069f523d711.png","/body1.png":"_assets/bd9f4cfe5069f523d711.png","https://fkitsantas.github.io/Horse-Racing-Game-JavaScript/images/body4.png":"_assets/b35b745ae3094d326482.png","/Horse-Racing-Game-JavaScript/images/body4.png":"_assets/b35b745ae3094d326482.png","/images/body4.png":"_assets/b35b745ae3094d326482.png","/body4.png":"_assets/b35b745ae3094d326482.png","https://fkitsantas.github.io/Horse-Racing-Game-JavaScript/images/head1.png":"_assets/f19addf453e4c3d3d1a1.png","/Horse-Racing-Game-JavaScript/images/head1.png":"_assets/f19addf453e4c3d3d1a1.png","/images/head1.png":"_assets/f19addf453e4c3d3d1a1.png","/head1.png":"_assets/f19addf453e4c3d3d1a1.png","https://fkitsantas.github.io/Horse-Racing-Game-JavaScript/images/horse4.png":"_assets/e9bd1aed1baa95a2210f.png","/Horse-Racing-Game-JavaScript/images/horse4.png":"_assets/e9bd1aed1baa95a2210f.png","/images/horse4.png":"_assets/e9bd1aed1baa95a2210f.png","/horse4.png":"_assets/e9bd1aed1baa95a2210f.png","https://fkitsantas.github.io/Horse-Racing-Game-JavaScript/images/body3.png":"_assets/7d2b167b1a4750375f09.png","/Horse-Racing-Game-JavaScript/images/body3.png":"_assets/7d2b167b1a4750375f09.png","/images/body3.png":"_assets/7d2b167b1a4750375f09.png","/body3.png":"_assets/7d2b167b1a4750375f09.png","https://fkitsantas.github.io/Horse-Racing-Game-JavaScript/images/mud.png":"_assets/9ea5b55c0647fe101f4d.png","/Horse-Racing-Game-JavaScript/images/mud.png":"_assets/9ea5b55c0647fe101f4d.png","/images/mud.png":"_assets/9ea5b55c0647fe101f4d.png","/mud.png":"_assets/9ea5b55c0647fe101f4d.png","https://fkitsantas.github.io/Horse-Racing-Game-JavaScript/images/horse3.png":"_assets/061373598a79d0c20588.png","/Horse-Racing-Game-JavaScript/images/horse3.png":"_assets/061373598a79d0c20588.png","/images/horse3.png":"_assets/061373598a79d0c20588.png","/horse3.png":"_assets/061373598a79d0c20588.png","https://fkitsantas.github.io/Horse-Racing-Game-JavaScript/images/inner.png":"_assets/0df427a05b1cb461bdeb.png","/Horse-Racing-Game-JavaScript/images/inner.png":"_assets/0df427a05b1cb461bdeb.png","/images/inner.png":"_assets/0df427a05b1cb461bdeb.png","/inner.png":"_assets/0df427a05b1cb461bdeb.png","https://fkitsantas.github.io/Horse-Racing-Game-JavaScript/images/head2.png":"_assets/89ec9325fc5f7a072d7b.png","/Horse-Racing-Game-JavaScript/images/head2.png":"_assets/89ec9325fc5f7a072d7b.png","/images/head2.png":"_assets/89ec9325fc5f7a072d7b.png","/head2.png":"_assets/89ec9325fc5f7a072d7b.png","https://fkitsantas.github.io/Horse-Racing-Game-JavaScript/images/outer.png":"_assets/0416153143e1da62b1eb.png","/Horse-Racing-Game-JavaScript/images/outer.png":"_assets/0416153143e1da62b1eb.png","/images/outer.png":"_assets/0416153143e1da62b1eb.png","/outer.png":"_assets/0416153143e1da62b1eb.png","https://fkitsantas.github.io/Horse-Racing-Game-JavaScript/images/horse1.png":"_assets/99e8bf7c7424ed28568e.png","/Horse-Racing-Game-JavaScript/images/horse1.png":"_assets/99e8bf7c7424ed28568e.png","/images/horse1.png":"_assets/99e8bf7c7424ed28568e.png","/horse1.png":"_assets/99e8bf7c7424ed28568e.png"};
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
