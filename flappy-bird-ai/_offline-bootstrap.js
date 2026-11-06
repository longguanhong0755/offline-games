(() => {
  "use strict";
  const RUNTIME_MAP = {"https://imskr.github.io/Flappy-Bird-AI/css/style.css":"_assets/0497c28955f84eac9cac.css","/Flappy-Bird-AI/css/style.css":"_assets/0497c28955f84eac9cac.css","/css/style.css":"_assets/0497c28955f84eac9cac.css","/style.css":"_assets/0497c28955f84eac9cac.css","https://imskr.github.io/Flappy-Bird-AI/neuralnetwork/matrix.js":"_assets/ce60ec7b01b50e87037e.js","/Flappy-Bird-AI/neuralnetwork/matrix.js":"_assets/ce60ec7b01b50e87037e.js","/neuralnetwork/matrix.js":"_assets/ce60ec7b01b50e87037e.js","/matrix.js":"_assets/ce60ec7b01b50e87037e.js","https://imskr.github.io/Flappy-Bird-AI/sketch.js":"_assets/cd34dc17c04a077ccadb.js","/Flappy-Bird-AI/sketch.js":"_assets/cd34dc17c04a077ccadb.js","/sketch.js":"_assets/cd34dc17c04a077ccadb.js","https://imskr.github.io/Flappy-Bird-AI/neuralnetwork/nn.js":"_assets/9c6810885be70e6a8a14.js","/Flappy-Bird-AI/neuralnetwork/nn.js":"_assets/9c6810885be70e6a8a14.js","/neuralnetwork/nn.js":"_assets/9c6810885be70e6a8a14.js","/nn.js":"_assets/9c6810885be70e6a8a14.js","https://imskr.github.io/Flappy-Bird-AI/bird.js":"_assets/cc59bbdbf4bc5144967d.js","/Flappy-Bird-AI/bird.js":"_assets/cc59bbdbf4bc5144967d.js","/bird.js":"_assets/cc59bbdbf4bc5144967d.js","https://imskr.github.io/Flappy-Bird-AI/ga.js":"_assets/a6283b7ec0af41c65aef.js","/Flappy-Bird-AI/ga.js":"_assets/a6283b7ec0af41c65aef.js","/ga.js":"_assets/a6283b7ec0af41c65aef.js","https://imskr.github.io/Flappy-Bird-AI/pipe.js":"_assets/13ebb705fe9a2944c082.js","/Flappy-Bird-AI/pipe.js":"_assets/13ebb705fe9a2944c082.js","/pipe.js":"_assets/13ebb705fe9a2944c082.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css":"_assets/799aeb25cc0373fdee0e.css","/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css":"_assets/799aeb25cc0373fdee0e.css","/libs/font-awesome/4.7.0/css/font-awesome.min.css":"_assets/799aeb25cc0373fdee0e.css","/font-awesome/4.7.0/css/font-awesome.min.css":"_assets/799aeb25cc0373fdee0e.css","/4.7.0/css/font-awesome.min.css":"_assets/799aeb25cc0373fdee0e.css","/css/font-awesome.min.css":"_assets/799aeb25cc0373fdee0e.css","/font-awesome.min.css":"_assets/799aeb25cc0373fdee0e.css","https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/addons/p5.dom.min.js":"_assets/cb67d5999dca8488801d.js","/ajax/libs/p5.js/0.6.0/addons/p5.dom.min.js":"_assets/cb67d5999dca8488801d.js","/libs/p5.js/0.6.0/addons/p5.dom.min.js":"_assets/cb67d5999dca8488801d.js","/p5.js/0.6.0/addons/p5.dom.min.js":"_assets/cb67d5999dca8488801d.js","/0.6.0/addons/p5.dom.min.js":"_assets/cb67d5999dca8488801d.js","/addons/p5.dom.min.js":"_assets/cb67d5999dca8488801d.js","/p5.dom.min.js":"_assets/cb67d5999dca8488801d.js","https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/p5.min.js":"_assets/183bafd797aa4292ea5a.js","/ajax/libs/p5.js/0.6.0/p5.min.js":"_assets/183bafd797aa4292ea5a.js","/libs/p5.js/0.6.0/p5.min.js":"_assets/183bafd797aa4292ea5a.js","/p5.js/0.6.0/p5.min.js":"_assets/183bafd797aa4292ea5a.js","/0.6.0/p5.min.js":"_assets/183bafd797aa4292ea5a.js","/p5.min.js":"_assets/183bafd797aa4292ea5a.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0":"_assets/2adefcbc041e7d18fcf2.woff2","/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2":"_assets/2adefcbc041e7d18fcf2.woff2","/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0":"_assets/2adefcbc041e7d18fcf2.woff2","/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2":"_assets/2adefcbc041e7d18fcf2.woff2","/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2":"_assets/2adefcbc041e7d18fcf2.woff2","/4.7.0/fonts/fontawesome-webfont.woff2":"_assets/2adefcbc041e7d18fcf2.woff2","/fonts/fontawesome-webfont.woff2":"_assets/2adefcbc041e7d18fcf2.woff2","/fontawesome-webfont.woff2":"_assets/2adefcbc041e7d18fcf2.woff2","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2":"_assets/2adefcbc041e7d18fcf2.woff2","https://imskr.github.io/Flappy-Bird-AI/assets/bird1.png":"_assets/5b64cbbcf81fb53ab09c.png","/Flappy-Bird-AI/assets/bird1.png":"_assets/5b64cbbcf81fb53ab09c.png","/assets/bird1.png":"_assets/5b64cbbcf81fb53ab09c.png","/bird1.png":"_assets/5b64cbbcf81fb53ab09c.png","https://imskr.github.io/Flappy-Bird-AI/assets/pipebg.png":"_assets/3bd02ca45ae66229a5f3.png","/Flappy-Bird-AI/assets/pipebg.png":"_assets/3bd02ca45ae66229a5f3.png","/assets/pipebg.png":"_assets/3bd02ca45ae66229a5f3.png","/pipebg.png":"_assets/3bd02ca45ae66229a5f3.png","https://imskr.github.io/Flappy-Bird-AI/assets/background.jpg":"_assets/3f4203389a869acf1f66.jpg","/Flappy-Bird-AI/assets/background.jpg":"_assets/3f4203389a869acf1f66.jpg","/assets/background.jpg":"_assets/3f4203389a869acf1f66.jpg","/background.jpg":"_assets/3f4203389a869acf1f66.jpg"};
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
