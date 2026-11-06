(() => {
  "use strict";
  const RUNTIME_MAP = {"https://danziger.github.io/slotjs/main.c8ee9c067209c44ff38c.css":"_assets/6d7f4e5a7ecaff5750ea.css","/slotjs/main.c8ee9c067209c44ff38c.css":"_assets/6d7f4e5a7ecaff5750ea.css","/main.c8ee9c067209c44ff38c.css":"_assets/6d7f4e5a7ecaff5750ea.css","https://danziger.github.io/slotjs/logo/slotjs-t-e-64.png":"_assets/e730a971f0dddcbc08a1.png","/slotjs/logo/slotjs-t-e-64.png":"_assets/e730a971f0dddcbc08a1.png","/logo/slotjs-t-e-64.png":"_assets/e730a971f0dddcbc08a1.png","/slotjs-t-e-64.png":"_assets/e730a971f0dddcbc08a1.png","https://danziger.github.io/slotjs/gmzcodes/gmzcodes-t-e-32.png":"_assets/adc5edd8a836a06be1f4.png","/slotjs/gmzcodes/gmzcodes-t-e-32.png":"_assets/adc5edd8a836a06be1f4.png","/gmzcodes/gmzcodes-t-e-32.png":"_assets/adc5edd8a836a06be1f4.png","/gmzcodes-t-e-32.png":"_assets/adc5edd8a836a06be1f4.png","https://danziger.github.io/slotjs/github/github-s-e-16.png":"_assets/bf93572fcb2af26eb80c.png","/slotjs/github/github-s-e-16.png":"_assets/bf93572fcb2af26eb80c.png","/github/github-s-e-16.png":"_assets/bf93572fcb2af26eb80c.png","/github-s-e-16.png":"_assets/bf93572fcb2af26eb80c.png","https://danziger.github.io/slotjs/main.10ce6742c8fccf624118.js":"_assets/ead69bb552f59acb8389.js","/slotjs/main.10ce6742c8fccf624118.js":"_assets/ead69bb552f59acb8389.js","/main.10ce6742c8fccf624118.js":"_assets/ead69bb552f59acb8389.js","https://plausible.io/js/plausible.js":"_assets/5a861fb6b5713ec9bed6.js","/js/plausible.js":"_assets/5a861fb6b5713ec9bed6.js","/plausible.js":"_assets/5a861fb6b5713ec9bed6.js","https://danziger.github.io/slotjs/sounds/blip.mp3":"_assets/bbf57e40837294d3fc9d.mp3","/slotjs/sounds/blip.mp3":"_assets/bbf57e40837294d3fc9d.mp3","/sounds/blip.mp3":"_assets/bbf57e40837294d3fc9d.mp3","/blip.mp3":"_assets/bbf57e40837294d3fc9d.mp3","https://danziger.github.io/slotjs/sounds/coin.mp3":"_assets/491d7268e602ca005686.mp3","/slotjs/sounds/coin.mp3":"_assets/491d7268e602ca005686.mp3","/sounds/coin.mp3":"_assets/491d7268e602ca005686.mp3","/coin.mp3":"_assets/491d7268e602ca005686.mp3","https://danziger.github.io/slotjs/sounds/stop.mp3":"_assets/e22df819aca7812d482a.mp3","/slotjs/sounds/stop.mp3":"_assets/e22df819aca7812d482a.mp3","/sounds/stop.mp3":"_assets/e22df819aca7812d482a.mp3","/stop.mp3":"_assets/e22df819aca7812d482a.mp3","https://danziger.github.io/slotjs/sounds/win.mp3":"_assets/03c9081da41ffef01b5b.mp3","/slotjs/sounds/win.mp3":"_assets/03c9081da41ffef01b5b.mp3","/sounds/win.mp3":"_assets/03c9081da41ffef01b5b.mp3","/win.mp3":"_assets/03c9081da41ffef01b5b.mp3","https://danziger.github.io/slotjs/sounds/unlucky.mp3":"_assets/8e9946b5824a193f55c8.mp3","/slotjs/sounds/unlucky.mp3":"_assets/8e9946b5824a193f55c8.mp3","/sounds/unlucky.mp3":"_assets/8e9946b5824a193f55c8.mp3","/unlucky.mp3":"_assets/8e9946b5824a193f55c8.mp3"};
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
