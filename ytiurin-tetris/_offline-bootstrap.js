(() => {
  "use strict";
  const RUNTIME_MAP = {"https://buttons.github.io/buttons.js":"_assets/e1238a1f9e4e466283e2.js","/buttons.js":"_assets/e1238a1f9e4e466283e2.js","https://ytiurin.github.io/tetris/public/all.js":"_assets/00fab0aa7122a6baf2e3.js","/tetris/public/all.js":"_assets/00fab0aa7122a6baf2e3.js","/public/all.js":"_assets/00fab0aa7122a6baf2e3.js","/all.js":"_assets/00fab0aa7122a6baf2e3.js","https://ytiurin.github.io/tetris/public/key1.ogg":"_assets/15bf4ad8ecb6723768d7.ogg","/tetris/public/key1.ogg":"_assets/15bf4ad8ecb6723768d7.ogg","/public/key1.ogg":"_assets/15bf4ad8ecb6723768d7.ogg","/key1.ogg":"_assets/15bf4ad8ecb6723768d7.ogg","https://ytiurin.github.io/tetris/public/key2.ogg":"_assets/1ef8cc5521a00f6b0cd5.ogg","/tetris/public/key2.ogg":"_assets/1ef8cc5521a00f6b0cd5.ogg","/public/key2.ogg":"_assets/1ef8cc5521a00f6b0cd5.ogg","/key2.ogg":"_assets/1ef8cc5521a00f6b0cd5.ogg","https://ytiurin.github.io/tetris/public/key3.ogg":"_assets/9b450c860235ee8989f7.ogg","/tetris/public/key3.ogg":"_assets/9b450c860235ee8989f7.ogg","/public/key3.ogg":"_assets/9b450c860235ee8989f7.ogg","/key3.ogg":"_assets/9b450c860235ee8989f7.ogg","https://ytiurin.github.io/tetris/public/styles.css":"_assets/f6ec080106adbe8d1b38.css","/tetris/public/styles.css":"_assets/f6ec080106adbe8d1b38.css","/public/styles.css":"_assets/f6ec080106adbe8d1b38.css","/styles.css":"_assets/f6ec080106adbe8d1b38.css","https://ytiurin.github.io/tetris/public/key4.ogg":"_assets/fbaa07a5d2b24580ebca.ogg","/tetris/public/key4.ogg":"_assets/fbaa07a5d2b24580ebca.ogg","/public/key4.ogg":"_assets/fbaa07a5d2b24580ebca.ogg","/key4.ogg":"_assets/fbaa07a5d2b24580ebca.ogg","https://ytiurin.github.io/tetris/public/space.ogg":"_assets/81275a0e23d01b441394.ogg","/tetris/public/space.ogg":"_assets/81275a0e23d01b441394.ogg","/public/space.ogg":"_assets/81275a0e23d01b441394.ogg","/space.ogg":"_assets/81275a0e23d01b441394.ogg","https://ytiurin.github.io/tetris/public/DejaVuSansMono.ttf":"_assets/944ba205220f65e792b6.ttf","/tetris/public/DejaVuSansMono.ttf":"_assets/944ba205220f65e792b6.ttf","/public/DejaVuSansMono.ttf":"_assets/944ba205220f65e792b6.ttf","/DejaVuSansMono.ttf":"_assets/944ba205220f65e792b6.ttf","https://ytiurin.github.io/tetris/public/ambience.ogg":"_assets/80ad161694183f9d8885.ogg","/tetris/public/ambience.ogg":"_assets/80ad161694183f9d8885.ogg","/public/ambience.ogg":"_assets/80ad161694183f9d8885.ogg","/ambience.ogg":"_assets/80ad161694183f9d8885.ogg","https://ytiurin.github.io/tetris/public/beep.ogg":"_assets/5ff7ae8bb87597eaceca.ogg","/tetris/public/beep.ogg":"_assets/5ff7ae8bb87597eaceca.ogg","/public/beep.ogg":"_assets/5ff7ae8bb87597eaceca.ogg","/beep.ogg":"_assets/5ff7ae8bb87597eaceca.ogg"};
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
