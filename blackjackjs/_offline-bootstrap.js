(() => {
  "use strict";
  const RUNTIME_MAP = {"https://oli8.github.io/BlackJackJs/js/card.js":"_assets/fee2186bb360aa81c7e2.js","/BlackJackJs/js/card.js":"_assets/fee2186bb360aa81c7e2.js","/js/card.js":"_assets/fee2186bb360aa81c7e2.js","/card.js":"_assets/fee2186bb360aa81c7e2.js","https://oli8.github.io/BlackJackJs/js/conf.js":"_assets/9b0b9ce64bb385516cd4.js","/BlackJackJs/js/conf.js":"_assets/9b0b9ce64bb385516cd4.js","/js/conf.js":"_assets/9b0b9ce64bb385516cd4.js","/conf.js":"_assets/9b0b9ce64bb385516cd4.js","https://oli8.github.io/BlackJackJs/style.css":"_assets/f1489689f342c4e93988.css","/BlackJackJs/style.css":"_assets/f1489689f342c4e93988.css","/style.css":"_assets/f1489689f342c4e93988.css","https://oli8.github.io/BlackJackJs/js/game.js":"_assets/b45d0cc70a648ffbd943.js","/BlackJackJs/js/game.js":"_assets/b45d0cc70a648ffbd943.js","/js/game.js":"_assets/b45d0cc70a648ffbd943.js","/game.js":"_assets/b45d0cc70a648ffbd943.js","https://oli8.github.io/BlackJackJs/js/button.js":"_assets/4545bad576d6bae9c79c.js","/BlackJackJs/js/button.js":"_assets/4545bad576d6bae9c79c.js","/js/button.js":"_assets/4545bad576d6bae9c79c.js","/button.js":"_assets/4545bad576d6bae9c79c.js","https://oli8.github.io/BlackJackJs/js/CreateJSTextInput.js":"_assets/8422a3ab2fe87a55eb82.js","/BlackJackJs/js/CreateJSTextInput.js":"_assets/8422a3ab2fe87a55eb82.js","/js/CreateJSTextInput.js":"_assets/8422a3ab2fe87a55eb82.js","/CreateJSTextInput.js":"_assets/8422a3ab2fe87a55eb82.js","https://oli8.github.io/BlackJackJs/js/create.js":"_assets/575c82f23dbb9285df2f.js","/BlackJackJs/js/create.js":"_assets/575c82f23dbb9285df2f.js","/js/create.js":"_assets/575c82f23dbb9285df2f.js","/create.js":"_assets/575c82f23dbb9285df2f.js","https://buttons.github.io/buttons.js":"_assets/e1238a1f9e4e466283e2.js","/buttons.js":"_assets/e1238a1f9e4e466283e2.js","https://oli8.github.io/BlackJackJs/assets/PNG/background.png":"_assets/9574ecbe0b4a1218dc6c.png","/BlackJackJs/assets/PNG/background.png":"_assets/9574ecbe0b4a1218dc6c.png","/assets/PNG/background.png":"_assets/9574ecbe0b4a1218dc6c.png","/PNG/background.png":"_assets/9574ecbe0b4a1218dc6c.png","/background.png":"_assets/9574ecbe0b4a1218dc6c.png","https://oli8.github.io/BlackJackJs/assets/sounds/sfx_shieldUp.ogg":"_assets/e93f1f4ae0c3398184d3.ogg","/BlackJackJs/assets/sounds/sfx_shieldUp.ogg":"_assets/e93f1f4ae0c3398184d3.ogg","/assets/sounds/sfx_shieldUp.ogg":"_assets/e93f1f4ae0c3398184d3.ogg","/sounds/sfx_shieldUp.ogg":"_assets/e93f1f4ae0c3398184d3.ogg","/sfx_shieldUp.ogg":"_assets/e93f1f4ae0c3398184d3.ogg","https://oli8.github.io/BlackJackJs/assets/sounds/sfx_lose.ogg":"_assets/3c45d210cd8466f47533.ogg","/BlackJackJs/assets/sounds/sfx_lose.ogg":"_assets/3c45d210cd8466f47533.ogg","/assets/sounds/sfx_lose.ogg":"_assets/3c45d210cd8466f47533.ogg","/sounds/sfx_lose.ogg":"_assets/3c45d210cd8466f47533.ogg","/sfx_lose.ogg":"_assets/3c45d210cd8466f47533.ogg","https://oli8.github.io/BlackJackJs/assets/Bonus/cardPlace1.ogg":"_assets/f43576f02058e11ac605.ogg","/BlackJackJs/assets/Bonus/cardPlace1.ogg":"_assets/f43576f02058e11ac605.ogg","/assets/Bonus/cardPlace1.ogg":"_assets/f43576f02058e11ac605.ogg","/Bonus/cardPlace1.ogg":"_assets/f43576f02058e11ac605.ogg","/cardPlace1.ogg":"_assets/f43576f02058e11ac605.ogg","https://oli8.github.io/BlackJackJs/assets/Bonus/chipsCollide1.ogg":"_assets/4b5aa8e6e7cd409c5e3d.ogg","/BlackJackJs/assets/Bonus/chipsCollide1.ogg":"_assets/4b5aa8e6e7cd409c5e3d.ogg","/assets/Bonus/chipsCollide1.ogg":"_assets/4b5aa8e6e7cd409c5e3d.ogg","/Bonus/chipsCollide1.ogg":"_assets/4b5aa8e6e7cd409c5e3d.ogg","/chipsCollide1.ogg":"_assets/4b5aa8e6e7cd409c5e3d.ogg"};
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
