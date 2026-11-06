(() => {
  "use strict";
  const RUNTIME_MAP = {"https://puyovs.com/main.dd7191ca.css":"_assets/bd38930770da7cf3d10a.css","/main.dd7191ca.css":"_assets/bd38930770da7cf3d10a.css","https://puyovs.com/bootstrap.min.44d065ef.js":"_assets/86c5f6efe0f532b714fb.js","/bootstrap.min.44d065ef.js":"_assets/86c5f6efe0f532b714fb.js","https://puyovs.com/jquery.min.dda4bbf8.js":"_assets/7460aed14c8d611c3f8b.js","/jquery.min.dda4bbf8.js":"_assets/7460aed14c8d611c3f8b.js","https://puyovs.com/logo_big.66ddc2e8.png":"_assets/919eb31c58e2ff9d0304.png","/logo_big.66ddc2e8.png":"_assets/919eb31c58e2ff9d0304.png","https://puyovs.com/bootstrap.06028d63.css":"_assets/956657a3401900e71178.css","/bootstrap.06028d63.css":"_assets/956657a3401900e71178.css","https://puyovs.com/navbar_bg.b15b60f4.png":"_assets/9643c7019aa75742c714.png","/navbar_bg.b15b60f4.png":"_assets/9643c7019aa75742c714.png","https://puyovs.com/noise.70c61b00.png":"_assets/91f8d06b6aba3ef31dca.png","/noise.70c61b00.png":"_assets/91f8d06b6aba3ef31dca.png","https://puyovs.com/logo.b3b0b2b9.png":"_assets/4ef62dbd7ab85dcfa4a8.png","/logo.b3b0b2b9.png":"_assets/4ef62dbd7ab85dcfa4a8.png","https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif":"_assets/33a91bd6d378215fcd41.gif","/en_US/i/btn/btn_donateCC_LG.gif":"_assets/33a91bd6d378215fcd41.gif","/i/btn/btn_donateCC_LG.gif":"_assets/33a91bd6d378215fcd41.gif","/btn/btn_donateCC_LG.gif":"_assets/33a91bd6d378215fcd41.gif","/btn_donateCC_LG.gif":"_assets/33a91bd6d378215fcd41.gif","https://www.paypalobjects.com/nl_NL/i/scr/pixel.gif":"_assets/2dfe28cbdb83f01c940d.gif","/nl_NL/i/scr/pixel.gif":"_assets/2dfe28cbdb83f01c940d.gif","/i/scr/pixel.gif":"_assets/2dfe28cbdb83f01c940d.gif","/scr/pixel.gif":"_assets/2dfe28cbdb83f01c940d.gif","/pixel.gif":"_assets/2dfe28cbdb83f01c940d.gif"};
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
