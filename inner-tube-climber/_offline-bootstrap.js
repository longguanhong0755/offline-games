(() => {
  "use strict";
  const RUNTIME_MAP = {"https://snoringcat.games/styles/main.css":"_assets/840d4c1dea87012df1c4.css","/styles/main.css":"_assets/840d4c1dea87012df1c4.css","/main.css":"_assets/840d4c1dea87012df1c4.css","https://snoringcat.games/scripts/main.js":"_assets/abbe2ea64cef2c24d6f7.js","/scripts/main.js":"_assets/abbe2ea64cef2c24d6f7.js","/main.js":"_assets/abbe2ea64cef2c24d6f7.js","https://snoringcat.games/scripts/shared.js":"_assets/7c70c536d75b17f59af1.js","/scripts/shared.js":"_assets/7c70c536d75b17f59af1.js","/shared.js":"_assets/7c70c536d75b17f59af1.js","https://snoringcat.games/scripts/snoring-cat-ascii.js":"_assets/e168f3baa36c67d24cd3.js","/scripts/snoring-cat-ascii.js":"_assets/e168f3baa36c67d24cd3.js","/snoring-cat-ascii.js":"_assets/e168f3baa36c67d24cd3.js","https://snoringcat.games/scripts/js-konami-code.js":"_assets/d4da5626dacda898dfef.js","/scripts/js-konami-code.js":"_assets/d4da5626dacda898dfef.js","/js-konami-code.js":"_assets/d4da5626dacda898dfef.js","https://s3-us-west-2.amazonaws.com/snoringcat.games/zzz-tiled-colored-faded.png":"_assets/96e44d32b5eabaefc4dc.png","/snoringcat.games/zzz-tiled-colored-faded.png":"_assets/96e44d32b5eabaefc4dc.png","/zzz-tiled-colored-faded.png":"_assets/96e44d32b5eabaefc4dc.png","https://s3-us-west-2.amazonaws.com/snoringcat.games/surfacer-icon.png":"_assets/c84a1fc4f31a821fe592.png","/snoringcat.games/surfacer-icon.png":"_assets/c84a1fc4f31a821fe592.png","/surfacer-icon.png":"_assets/c84a1fc4f31a821fe592.png","https://s3-us-west-2.amazonaws.com/snoringcat.games/icon-512.png":"_assets/9d43f52658ae9d44133d.png","/snoringcat.games/icon-512.png":"_assets/9d43f52658ae9d44133d.png","/icon-512.png":"_assets/9d43f52658ae9d44133d.png","https://s3-us-west-2.amazonaws.com/snoringcat.games/chevron.png":"_assets/3c0a16e6594060d545e9.png","/snoringcat.games/chevron.png":"_assets/3c0a16e6594060d545e9.png","/chevron.png":"_assets/3c0a16e6594060d545e9.png","https://s3-us-west-2.amazonaws.com/snoringcat.games/scaffolder-icon.png":"_assets/4e342ceec952fd2cfa8d.png","/snoringcat.games/scaffolder-icon.png":"_assets/4e342ceec952fd2cfa8d.png","/scaffolder-icon.png":"_assets/4e342ceec952fd2cfa8d.png","https://js-konami-code.s3.us-west-2.amazonaws.com/contra_title.mp3":"_assets/f20da27328cd8f6107d4.mp3","/contra_title.mp3":"_assets/f20da27328cd8f6107d4.mp3","https://s3-us-west-2.amazonaws.com/snoringcat.games/godot-icon.png":"_assets/ee83ec8d4e699cb01733.png","/snoringcat.games/godot-icon.png":"_assets/ee83ec8d4e699cb01733.png","/godot-icon.png":"_assets/ee83ec8d4e699cb01733.png","https://s3-us-west-2.amazonaws.com/snoringcat.games/surface-tiler.png":"_assets/773692b62dff369ef042.png","/snoringcat.games/surface-tiler.png":"_assets/773692b62dff369ef042.png","/surface-tiler.png":"_assets/773692b62dff369ef042.png","https://s3-us-west-2.amazonaws.com/snoringcat.games/icon-32.png":"_assets/3235175eefe2c0e2b61e.png","/snoringcat.games/icon-32.png":"_assets/3235175eefe2c0e2b61e.png","/icon-32.png":"_assets/3235175eefe2c0e2b61e.png","https://s3-us-west-2.amazonaws.com/snoringcat.games/inner-tube-climber-icon.png":"_assets/d53b44ff5e6f47591c12.png","/snoringcat.games/inner-tube-climber-icon.png":"_assets/d53b44ff5e6f47591c12.png","/inner-tube-climber-icon.png":"_assets/d53b44ff5e6f47591c12.png","https://s3-us-west-2.amazonaws.com/snoringcat.games/github-icon.png":"_assets/8ee9773c9b2fd4028e36.png","/snoringcat.games/github-icon.png":"_assets/8ee9773c9b2fd4028e36.png","/github-icon.png":"_assets/8ee9773c9b2fd4028e36.png","https://s3-us-west-2.amazonaws.com/snoringcat.games/inner-tube-climber-logo.png":"_assets/1d07ddf89dd81003878d.png","/snoringcat.games/inner-tube-climber-logo.png":"_assets/1d07ddf89dd81003878d.png","/inner-tube-climber-logo.png":"_assets/1d07ddf89dd81003878d.png","https://s3-us-west-2.amazonaws.com/snoringcat.games/play-store-badge.png":"_assets/8fefcab9b86ae1497971.png","/snoringcat.games/play-store-badge.png":"_assets/8fefcab9b86ae1497971.png","/play-store-badge.png":"_assets/8fefcab9b86ae1497971.png","https://s3-us-west-2.amazonaws.com/snoringcat.games/inner-tube-climber-screenshot.png":"_assets/191e2c3d5fb16c325a42.png","/snoringcat.games/inner-tube-climber-screenshot.png":"_assets/191e2c3d5fb16c325a42.png","/inner-tube-climber-screenshot.png":"_assets/191e2c3d5fb16c325a42.png","https://s3-us-west-2.amazonaws.com/snoringcat.games/app-store-badge.png":"_assets/41a1f3d3706d844dc1b3.png","/snoringcat.games/app-store-badge.png":"_assets/41a1f3d3706d844dc1b3.png","/app-store-badge.png":"_assets/41a1f3d3706d844dc1b3.png","https://s3-us-west-2.amazonaws.com/snoringcat.games/ludum-dare-icon.png":"_assets/600d457a5f8864f51e57.png","/snoringcat.games/ludum-dare-icon.png":"_assets/600d457a5f8864f51e57.png","/ludum-dare-icon.png":"_assets/600d457a5f8864f51e57.png","https://s3-us-west-2.amazonaws.com/snoringcat.games/meteor-power-icon.png":"_assets/806ba0f4b82100754cc6.png","/snoringcat.games/meteor-power-icon.png":"_assets/806ba0f4b82100754cc6.png","/meteor-power-icon.png":"_assets/806ba0f4b82100754cc6.png","https://s3-us-west-2.amazonaws.com/snoringcat.games/squirrel-away-icon.png":"_assets/69363a1c240ec064642f.png","/snoringcat.games/squirrel-away-icon.png":"_assets/69363a1c240ec064642f.png","/squirrel-away-icon.png":"_assets/69363a1c240ec064642f.png","https://s3-us-west-2.amazonaws.com/snoringcat.games/meteor-power-logo.png":"_assets/2c02d0e080321e3ec630.png","/snoringcat.games/meteor-power-logo.png":"_assets/2c02d0e080321e3ec630.png","/meteor-power-logo.png":"_assets/2c02d0e080321e3ec630.png","https://s3-us-west-2.amazonaws.com/snoringcat.games/itchio-icon.png":"_assets/750e5871a0c0bddbf6c1.png","/snoringcat.games/itchio-icon.png":"_assets/750e5871a0c0bddbf6c1.png","/itchio-icon.png":"_assets/750e5871a0c0bddbf6c1.png","https://s3-us-west-2.amazonaws.com/snoringcat.games/dark-time-logo.png":"_assets/e4e7595ff5de2b4c4e4f.png","/snoringcat.games/dark-time-logo.png":"_assets/e4e7595ff5de2b4c4e4f.png","/dark-time-logo.png":"_assets/e4e7595ff5de2b4c4e4f.png","https://s3-us-west-2.amazonaws.com/snoringcat.games/dark-time-screenshot.png":"_assets/a4592f5112af1bb9aee3.png","/snoringcat.games/dark-time-screenshot.png":"_assets/a4592f5112af1bb9aee3.png","/dark-time-screenshot.png":"_assets/a4592f5112af1bb9aee3.png","https://s3-us-west-2.amazonaws.com/snoringcat.games/youtube-icon.png":"_assets/4777b7ac11928da8f217.png","/snoringcat.games/youtube-icon.png":"_assets/4777b7ac11928da8f217.png","/youtube-icon.png":"_assets/4777b7ac11928da8f217.png","https://s3-us-west-2.amazonaws.com/snoringcat.games/chrome-web-store-icon.png":"_assets/7fffcd1b927a229df216.png","/snoringcat.games/chrome-web-store-icon.png":"_assets/7fffcd1b927a229df216.png","/chrome-web-store-icon.png":"_assets/7fffcd1b927a229df216.png","https://s3-us-west-2.amazonaws.com/snoringcat.games/twitter-icon.png":"_assets/e34e75841b32da8306e3.png","/snoringcat.games/twitter-icon.png":"_assets/e34e75841b32da8306e3.png","/twitter-icon.png":"_assets/e34e75841b32da8306e3.png","https://s3-us-west-2.amazonaws.com/snoringcat.games/facebook-icon.png":"_assets/f3a629fa997be54882fb.png","/snoringcat.games/facebook-icon.png":"_assets/f3a629fa997be54882fb.png","/facebook-icon.png":"_assets/f3a629fa997be54882fb.png","https://s3-us-west-2.amazonaws.com/snoringcat.games/dev-icon.png":"_assets/c11e5615c662dd044cbe.png","/snoringcat.games/dev-icon.png":"_assets/c11e5615c662dd044cbe.png","/dev-icon.png":"_assets/c11e5615c662dd044cbe.png","https://s3-us-west-2.amazonaws.com/snoringcat.games/levi-icon.png":"_assets/a1d214450360cfff166f.png","/snoringcat.games/levi-icon.png":"_assets/a1d214450360cfff166f.png","/levi-icon.png":"_assets/a1d214450360cfff166f.png"};
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
