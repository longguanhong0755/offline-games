(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Drum_Kit_Game/styles.css":"_assets/480e83721cf79092c891.css","/GameZone/Games/Drum_Kit_Game/styles.css":"_assets/480e83721cf79092c891.css","/Games/Drum_Kit_Game/styles.css":"_assets/480e83721cf79092c891.css","/Drum_Kit_Game/styles.css":"_assets/480e83721cf79092c891.css","/styles.css":"_assets/480e83721cf79092c891.css","https://kunjgit.github.io/GameZone/Games/Drum_Kit_Game/script.js":"_assets/d9b7b98f140d0438f995.js","/GameZone/Games/Drum_Kit_Game/script.js":"_assets/d9b7b98f140d0438f995.js","/Games/Drum_Kit_Game/script.js":"_assets/d9b7b98f140d0438f995.js","/Drum_Kit_Game/script.js":"_assets/d9b7b98f140d0438f995.js","/script.js":"_assets/d9b7b98f140d0438f995.js","https://fonts.googleapis.com/css?family=Arvo":"_assets/8a56edf63bbf133e9f43.css","/css":"_assets/8a56edf63bbf133e9f43.css","/css?family=Arvo":"_assets/8a56edf63bbf133e9f43.css","https://fonts.googleapis.com/css":"_assets/8a56edf63bbf133e9f43.css","https://kunjgit.github.io/GameZone/Games/Drum_Kit_Game/images/tom1.png":"_assets/712c9267c6fc9c774d80.png","/GameZone/Games/Drum_Kit_Game/images/tom1.png":"_assets/712c9267c6fc9c774d80.png","/Games/Drum_Kit_Game/images/tom1.png":"_assets/712c9267c6fc9c774d80.png","/Drum_Kit_Game/images/tom1.png":"_assets/712c9267c6fc9c774d80.png","/images/tom1.png":"_assets/712c9267c6fc9c774d80.png","/tom1.png":"_assets/712c9267c6fc9c774d80.png","https://kunjgit.github.io/GameZone/Games/Drum_Kit_Game/images/tom2.png":"_assets/f90324913f7b7e039bce.png","/GameZone/Games/Drum_Kit_Game/images/tom2.png":"_assets/f90324913f7b7e039bce.png","/Games/Drum_Kit_Game/images/tom2.png":"_assets/f90324913f7b7e039bce.png","/Drum_Kit_Game/images/tom2.png":"_assets/f90324913f7b7e039bce.png","/images/tom2.png":"_assets/f90324913f7b7e039bce.png","/tom2.png":"_assets/f90324913f7b7e039bce.png","https://kunjgit.github.io/GameZone/Games/Drum_Kit_Game/images/tom3.png":"_assets/ed91df8b1203ec2942cd.png","/GameZone/Games/Drum_Kit_Game/images/tom3.png":"_assets/ed91df8b1203ec2942cd.png","/Games/Drum_Kit_Game/images/tom3.png":"_assets/ed91df8b1203ec2942cd.png","/Drum_Kit_Game/images/tom3.png":"_assets/ed91df8b1203ec2942cd.png","/images/tom3.png":"_assets/ed91df8b1203ec2942cd.png","/tom3.png":"_assets/ed91df8b1203ec2942cd.png","https://kunjgit.github.io/GameZone/Games/Drum_Kit_Game/images/tom4.png":"_assets/f5df0c29d0a96224c847.png","/GameZone/Games/Drum_Kit_Game/images/tom4.png":"_assets/f5df0c29d0a96224c847.png","/Games/Drum_Kit_Game/images/tom4.png":"_assets/f5df0c29d0a96224c847.png","/Drum_Kit_Game/images/tom4.png":"_assets/f5df0c29d0a96224c847.png","/images/tom4.png":"_assets/f5df0c29d0a96224c847.png","/tom4.png":"_assets/f5df0c29d0a96224c847.png","https://kunjgit.github.io/GameZone/Games/Drum_Kit_Game/images/snare.png":"_assets/fa362238bdb61df68c53.png","/GameZone/Games/Drum_Kit_Game/images/snare.png":"_assets/fa362238bdb61df68c53.png","/Games/Drum_Kit_Game/images/snare.png":"_assets/fa362238bdb61df68c53.png","/Drum_Kit_Game/images/snare.png":"_assets/fa362238bdb61df68c53.png","/images/snare.png":"_assets/fa362238bdb61df68c53.png","/snare.png":"_assets/fa362238bdb61df68c53.png","https://kunjgit.github.io/GameZone/Games/Drum_Kit_Game/images/kick.png":"_assets/ac7ef0b5f16a9cd58ce5.png","/GameZone/Games/Drum_Kit_Game/images/kick.png":"_assets/ac7ef0b5f16a9cd58ce5.png","/Games/Drum_Kit_Game/images/kick.png":"_assets/ac7ef0b5f16a9cd58ce5.png","/Drum_Kit_Game/images/kick.png":"_assets/ac7ef0b5f16a9cd58ce5.png","/images/kick.png":"_assets/ac7ef0b5f16a9cd58ce5.png","/kick.png":"_assets/ac7ef0b5f16a9cd58ce5.png","https://kunjgit.github.io/GameZone/Games/Drum_Kit_Game/images/crash.png":"_assets/786b88bc2d93905fd839.png","/GameZone/Games/Drum_Kit_Game/images/crash.png":"_assets/786b88bc2d93905fd839.png","/Games/Drum_Kit_Game/images/crash.png":"_assets/786b88bc2d93905fd839.png","/Drum_Kit_Game/images/crash.png":"_assets/786b88bc2d93905fd839.png","/images/crash.png":"_assets/786b88bc2d93905fd839.png","/crash.png":"_assets/786b88bc2d93905fd839.png","https://fonts.gstatic.com/s/arvo/v23/tDbD2oWUg0MKqScQ7Q.woff2":"_assets/b4eb4284188dcd4a4643.woff2","/s/arvo/v23/tDbD2oWUg0MKqScQ7Q.woff2":"_assets/b4eb4284188dcd4a4643.woff2","/arvo/v23/tDbD2oWUg0MKqScQ7Q.woff2":"_assets/b4eb4284188dcd4a4643.woff2","/v23/tDbD2oWUg0MKqScQ7Q.woff2":"_assets/b4eb4284188dcd4a4643.woff2","/tDbD2oWUg0MKqScQ7Q.woff2":"_assets/b4eb4284188dcd4a4643.woff2"};
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
