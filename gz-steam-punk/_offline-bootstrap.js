(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Steam_Punk/style.css":"_assets/3de9eb4bee8b4ea64c0c.css","/GameZone/Games/Steam_Punk/style.css":"_assets/3de9eb4bee8b4ea64c0c.css","/Games/Steam_Punk/style.css":"_assets/3de9eb4bee8b4ea64c0c.css","/Steam_Punk/style.css":"_assets/3de9eb4bee8b4ea64c0c.css","/style.css":"_assets/3de9eb4bee8b4ea64c0c.css","https://fonts.googleapis.com/css2?family=Bangers&display=swap":"_assets/d715f2bba1e0e6c3d991.css","/css2":"_assets/d715f2bba1e0e6c3d991.css","/css2?family=Bangers&display=swap":"_assets/d715f2bba1e0e6c3d991.css","https://fonts.googleapis.com/css2":"_assets/d715f2bba1e0e6c3d991.css","https://kunjgit.github.io/GameZone/Games/Steam_Punk/assets/player.png":"_assets/5746ef34da34a902e758.png","/GameZone/Games/Steam_Punk/assets/player.png":"_assets/5746ef34da34a902e758.png","/Games/Steam_Punk/assets/player.png":"_assets/5746ef34da34a902e758.png","/Steam_Punk/assets/player.png":"_assets/5746ef34da34a902e758.png","/assets/player.png":"_assets/5746ef34da34a902e758.png","/player.png":"_assets/5746ef34da34a902e758.png","https://kunjgit.github.io/GameZone/Games/Steam_Punk/assets/angler1.png":"_assets/e1cf0623f415e3f513c7.png","/GameZone/Games/Steam_Punk/assets/angler1.png":"_assets/e1cf0623f415e3f513c7.png","/Games/Steam_Punk/assets/angler1.png":"_assets/e1cf0623f415e3f513c7.png","/Steam_Punk/assets/angler1.png":"_assets/e1cf0623f415e3f513c7.png","/assets/angler1.png":"_assets/e1cf0623f415e3f513c7.png","/angler1.png":"_assets/e1cf0623f415e3f513c7.png","https://kunjgit.github.io/GameZone/Games/Steam_Punk/script.js":"_assets/2eeaa1c31a4b99d20b37.js","/GameZone/Games/Steam_Punk/script.js":"_assets/2eeaa1c31a4b99d20b37.js","/Games/Steam_Punk/script.js":"_assets/2eeaa1c31a4b99d20b37.js","/Steam_Punk/script.js":"_assets/2eeaa1c31a4b99d20b37.js","/script.js":"_assets/2eeaa1c31a4b99d20b37.js","https://kunjgit.github.io/GameZone/Games/Steam_Punk/assets/projectile.png":"_assets/2e1734b988bd23713b52.png","/GameZone/Games/Steam_Punk/assets/projectile.png":"_assets/2e1734b988bd23713b52.png","/Games/Steam_Punk/assets/projectile.png":"_assets/2e1734b988bd23713b52.png","/Steam_Punk/assets/projectile.png":"_assets/2e1734b988bd23713b52.png","/assets/projectile.png":"_assets/2e1734b988bd23713b52.png","/projectile.png":"_assets/2e1734b988bd23713b52.png","https://kunjgit.github.io/GameZone/Games/Steam_Punk/assets/angler2.png":"_assets/5fdac5183b1f73fff52c.png","/GameZone/Games/Steam_Punk/assets/angler2.png":"_assets/5fdac5183b1f73fff52c.png","/Games/Steam_Punk/assets/angler2.png":"_assets/5fdac5183b1f73fff52c.png","/Steam_Punk/assets/angler2.png":"_assets/5fdac5183b1f73fff52c.png","/assets/angler2.png":"_assets/5fdac5183b1f73fff52c.png","/angler2.png":"_assets/5fdac5183b1f73fff52c.png","https://kunjgit.github.io/GameZone/Games/Steam_Punk/assets/lucky.png":"_assets/3189717c632f3d4a5c8c.png","/GameZone/Games/Steam_Punk/assets/lucky.png":"_assets/3189717c632f3d4a5c8c.png","/Games/Steam_Punk/assets/lucky.png":"_assets/3189717c632f3d4a5c8c.png","/Steam_Punk/assets/lucky.png":"_assets/3189717c632f3d4a5c8c.png","/assets/lucky.png":"_assets/3189717c632f3d4a5c8c.png","/lucky.png":"_assets/3189717c632f3d4a5c8c.png","https://kunjgit.github.io/GameZone/Games/Steam_Punk/assets/drone.png":"_assets/4f216c9f13b8e190e8ea.png","/GameZone/Games/Steam_Punk/assets/drone.png":"_assets/4f216c9f13b8e190e8ea.png","/Games/Steam_Punk/assets/drone.png":"_assets/4f216c9f13b8e190e8ea.png","/Steam_Punk/assets/drone.png":"_assets/4f216c9f13b8e190e8ea.png","/assets/drone.png":"_assets/4f216c9f13b8e190e8ea.png","/drone.png":"_assets/4f216c9f13b8e190e8ea.png","https://kunjgit.github.io/GameZone/Games/Steam_Punk/assets/gears.png":"_assets/afeb5cd9662cbcc3d1ab.png","/GameZone/Games/Steam_Punk/assets/gears.png":"_assets/afeb5cd9662cbcc3d1ab.png","/Games/Steam_Punk/assets/gears.png":"_assets/afeb5cd9662cbcc3d1ab.png","/Steam_Punk/assets/gears.png":"_assets/afeb5cd9662cbcc3d1ab.png","/assets/gears.png":"_assets/afeb5cd9662cbcc3d1ab.png","/gears.png":"_assets/afeb5cd9662cbcc3d1ab.png","https://kunjgit.github.io/GameZone/Games/Steam_Punk/assets/layer1.png":"_assets/f724a0db5977f193e7f2.png","/GameZone/Games/Steam_Punk/assets/layer1.png":"_assets/f724a0db5977f193e7f2.png","/Games/Steam_Punk/assets/layer1.png":"_assets/f724a0db5977f193e7f2.png","/Steam_Punk/assets/layer1.png":"_assets/f724a0db5977f193e7f2.png","/assets/layer1.png":"_assets/f724a0db5977f193e7f2.png","/layer1.png":"_assets/f724a0db5977f193e7f2.png","https://kunjgit.github.io/GameZone/Games/Steam_Punk/assets/hivewhale.png":"_assets/7bb84e6876e676bf3988.png","/GameZone/Games/Steam_Punk/assets/hivewhale.png":"_assets/7bb84e6876e676bf3988.png","/Games/Steam_Punk/assets/hivewhale.png":"_assets/7bb84e6876e676bf3988.png","/Steam_Punk/assets/hivewhale.png":"_assets/7bb84e6876e676bf3988.png","/assets/hivewhale.png":"_assets/7bb84e6876e676bf3988.png","/hivewhale.png":"_assets/7bb84e6876e676bf3988.png","https://kunjgit.github.io/GameZone/Games/Steam_Punk/assets/layer2.png":"_assets/f267b5302155791ea394.png","/GameZone/Games/Steam_Punk/assets/layer2.png":"_assets/f267b5302155791ea394.png","/Games/Steam_Punk/assets/layer2.png":"_assets/f267b5302155791ea394.png","/Steam_Punk/assets/layer2.png":"_assets/f267b5302155791ea394.png","/assets/layer2.png":"_assets/f267b5302155791ea394.png","/layer2.png":"_assets/f267b5302155791ea394.png","https://kunjgit.github.io/GameZone/Games/Steam_Punk/assets/layer3.png":"_assets/b69a87f3f2ffe7e2c912.png","/GameZone/Games/Steam_Punk/assets/layer3.png":"_assets/b69a87f3f2ffe7e2c912.png","/Games/Steam_Punk/assets/layer3.png":"_assets/b69a87f3f2ffe7e2c912.png","/Steam_Punk/assets/layer3.png":"_assets/b69a87f3f2ffe7e2c912.png","/assets/layer3.png":"_assets/b69a87f3f2ffe7e2c912.png","/layer3.png":"_assets/b69a87f3f2ffe7e2c912.png","https://kunjgit.github.io/GameZone/Games/Steam_Punk/assets/layer4.png":"_assets/2a22a6e548e536eee8aa.png","/GameZone/Games/Steam_Punk/assets/layer4.png":"_assets/2a22a6e548e536eee8aa.png","/Games/Steam_Punk/assets/layer4.png":"_assets/2a22a6e548e536eee8aa.png","/Steam_Punk/assets/layer4.png":"_assets/2a22a6e548e536eee8aa.png","/assets/layer4.png":"_assets/2a22a6e548e536eee8aa.png","/layer4.png":"_assets/2a22a6e548e536eee8aa.png","https://fonts.gstatic.com/s/bangers/v25/FeVQS0BTqb0h60ACH55Q2A.woff2":"_assets/04f54ff42ea2b8fc50b4.woff2","/s/bangers/v25/FeVQS0BTqb0h60ACH55Q2A.woff2":"_assets/04f54ff42ea2b8fc50b4.woff2","/bangers/v25/FeVQS0BTqb0h60ACH55Q2A.woff2":"_assets/04f54ff42ea2b8fc50b4.woff2","/v25/FeVQS0BTqb0h60ACH55Q2A.woff2":"_assets/04f54ff42ea2b8fc50b4.woff2","/FeVQS0BTqb0h60ACH55Q2A.woff2":"_assets/04f54ff42ea2b8fc50b4.woff2"};
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
