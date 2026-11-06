(() => {
  "use strict";
  const RUNTIME_MAP = {"https://space-shooter-shadrouh.netlify.app/style.css":"_assets/7f1e0f27959c933b7c58.css","/style.css":"_assets/7f1e0f27959c933b7c58.css","https://space-shooter-shadrouh.netlify.app/script.js":"_assets/97b1ad1b5aa6ccd191d5.js","/script.js":"_assets/97b1ad1b5aa6ccd191d5.js","https://space-shooter-shadrouh.netlify.app/mp3/explosion.mp3":"_assets/c8b79eed565d49892d26.mp3","/mp3/explosion.mp3":"_assets/c8b79eed565d49892d26.mp3","/explosion.mp3":"_assets/c8b79eed565d49892d26.mp3","https://space-shooter-shadrouh.netlify.app/mp3/shoot.mp3":"_assets/0e18ddb6fe941d0ea82c.mp3","/mp3/shoot.mp3":"_assets/0e18ddb6fe941d0ea82c.mp3","/shoot.mp3":"_assets/0e18ddb6fe941d0ea82c.mp3","https://space-shooter-shadrouh.netlify.app/mp3/gameover.mp3":"_assets/6c877031a235a47111b0.mp3","/mp3/gameover.mp3":"_assets/6c877031a235a47111b0.mp3","/gameover.mp3":"_assets/6c877031a235a47111b0.mp3","https://space-shooter-shadrouh.netlify.app/mp3/background_music.mp3":"_assets/fb1f050aa328d335b3d0.mp3","/mp3/background_music.mp3":"_assets/fb1f050aa328d335b3d0.mp3","/background_music.mp3":"_assets/fb1f050aa328d335b3d0.mp3","https://space-shooter-shadrouh.netlify.app/assets/enemy.png":"_assets/495d1ef9fcf6e756282b.png","/assets/enemy.png":"_assets/495d1ef9fcf6e756282b.png","/enemy.png":"_assets/495d1ef9fcf6e756282b.png","https://space-shooter-shadrouh.netlify.app/assets/player.png":"_assets/fae1ecf986ba4bcbbe04.png","/assets/player.png":"_assets/fae1ecf986ba4bcbbe04.png","/player.png":"_assets/fae1ecf986ba4bcbbe04.png","https://space-shooter-shadrouh.netlify.app/assets/background.png":"_assets/1c9278552d308af2deca.png","/assets/background.png":"_assets/1c9278552d308af2deca.png","/background.png":"_assets/1c9278552d308af2deca.png","https://space-shooter-shadrouh.netlify.app/assets/bullet.png":"_assets/c5d3d79787541d80d6d6.png","/assets/bullet.png":"_assets/c5d3d79787541d80d6d6.png","/bullet.png":"_assets/c5d3d79787541d80d6d6.png"};
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
