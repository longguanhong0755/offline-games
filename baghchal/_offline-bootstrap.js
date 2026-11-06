(() => {
  "use strict";
  const RUNTIME_MAP = {"https://sumn2u.github.io/baghchal/main.b0949c1f797125cbae4e.css":"_assets/f165bedaf32358216d7e.css","/baghchal/main.b0949c1f797125cbae4e.css":"_assets/f165bedaf32358216d7e.css","/main.b0949c1f797125cbae4e.css":"_assets/f165bedaf32358216d7e.css","https://sumn2u.github.io/baghchal/520.54e181fae70884485029.js":"_assets/4958465102ec26ac5d42.js","/baghchal/520.54e181fae70884485029.js":"_assets/4958465102ec26ac5d42.js","/520.54e181fae70884485029.js":"_assets/4958465102ec26ac5d42.js","https://sumn2u.github.io/baghchal/main.532eafab7e636e002f02.js":"_assets/c4edc4d259555ba8a21b.js","/baghchal/main.532eafab7e636e002f02.js":"_assets/c4edc4d259555ba8a21b.js","/main.532eafab7e636e002f02.js":"_assets/c4edc4d259555ba8a21b.js","https://sumn2u.github.io/baghchal/assets/4eb81f5e90ce080a6b0d.jpg":"_assets/7fa9311df196e2bbdc0d.jpg","/baghchal/assets/4eb81f5e90ce080a6b0d.jpg":"_assets/7fa9311df196e2bbdc0d.jpg","/assets/4eb81f5e90ce080a6b0d.jpg":"_assets/7fa9311df196e2bbdc0d.jpg","/4eb81f5e90ce080a6b0d.jpg":"_assets/7fa9311df196e2bbdc0d.jpg","https://sumn2u.github.io/baghchal/assets/8a9600b6842b2afeaa07.png":"_assets/052fb4b0f84624534ef6.png","/baghchal/assets/8a9600b6842b2afeaa07.png":"_assets/052fb4b0f84624534ef6.png","/assets/8a9600b6842b2afeaa07.png":"_assets/052fb4b0f84624534ef6.png","/8a9600b6842b2afeaa07.png":"_assets/052fb4b0f84624534ef6.png","https://sumn2u.github.io/baghchal/assets/fdff9c44fe3bac5af3fc.png":"_assets/48403989d5dd8b9c2c7a.png","/baghchal/assets/fdff9c44fe3bac5af3fc.png":"_assets/48403989d5dd8b9c2c7a.png","/assets/fdff9c44fe3bac5af3fc.png":"_assets/48403989d5dd8b9c2c7a.png","/fdff9c44fe3bac5af3fc.png":"_assets/48403989d5dd8b9c2c7a.png","https://sumn2u.github.io/baghchal/assets/d4108bef3650b9d9a588.png":"_assets/0e64ad2cb56bb18cd5e3.png","/baghchal/assets/d4108bef3650b9d9a588.png":"_assets/0e64ad2cb56bb18cd5e3.png","/assets/d4108bef3650b9d9a588.png":"_assets/0e64ad2cb56bb18cd5e3.png","/d4108bef3650b9d9a588.png":"_assets/0e64ad2cb56bb18cd5e3.png","https://sumn2u.github.io/baghchal/assets/2e5caae40ed86ff38bcd.png":"_assets/f6217a14b5b84210f2fa.png","/baghchal/assets/2e5caae40ed86ff38bcd.png":"_assets/f6217a14b5b84210f2fa.png","/assets/2e5caae40ed86ff38bcd.png":"_assets/f6217a14b5b84210f2fa.png","/2e5caae40ed86ff38bcd.png":"_assets/f6217a14b5b84210f2fa.png","https://sumn2u.github.io/baghchal/assets/ce5421549e937cf19334.png":"_assets/d78e7d3c019945604550.png","/baghchal/assets/ce5421549e937cf19334.png":"_assets/d78e7d3c019945604550.png","/assets/ce5421549e937cf19334.png":"_assets/d78e7d3c019945604550.png","/ce5421549e937cf19334.png":"_assets/d78e7d3c019945604550.png","https://sumn2u.github.io/baghchal/assets/751f825b84671d7e1b3b.png":"_assets/5714a7cfab1155d516d8.png","/baghchal/assets/751f825b84671d7e1b3b.png":"_assets/5714a7cfab1155d516d8.png","/assets/751f825b84671d7e1b3b.png":"_assets/5714a7cfab1155d516d8.png","/751f825b84671d7e1b3b.png":"_assets/5714a7cfab1155d516d8.png","https://sumn2u.github.io/baghchal/assets/3561cb235cde6fc9f8b0.png":"_assets/2a57dc34b2fa20d1410c.png","/baghchal/assets/3561cb235cde6fc9f8b0.png":"_assets/2a57dc34b2fa20d1410c.png","/assets/3561cb235cde6fc9f8b0.png":"_assets/2a57dc34b2fa20d1410c.png","/3561cb235cde6fc9f8b0.png":"_assets/2a57dc34b2fa20d1410c.png","https://sumn2u.github.io/baghchal/assets/366e6f06bb06088a6042.png":"_assets/2f5e2deae002d9b70e48.png","/baghchal/assets/366e6f06bb06088a6042.png":"_assets/2f5e2deae002d9b70e48.png","/assets/366e6f06bb06088a6042.png":"_assets/2f5e2deae002d9b70e48.png","/366e6f06bb06088a6042.png":"_assets/2f5e2deae002d9b70e48.png","https://sumn2u.github.io/baghchal/bagchal.mp3":"_assets/ccd02fbb0d77f7005c5c.mp3","/baghchal/bagchal.mp3":"_assets/ccd02fbb0d77f7005c5c.mp3","/bagchal.mp3":"_assets/ccd02fbb0d77f7005c5c.mp3"};
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
