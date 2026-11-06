(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Harmony_Mixer/style.css":"_assets/1642e307c9455568ba90.css","/GameZone/Games/Harmony_Mixer/style.css":"_assets/1642e307c9455568ba90.css","/Games/Harmony_Mixer/style.css":"_assets/1642e307c9455568ba90.css","/Harmony_Mixer/style.css":"_assets/1642e307c9455568ba90.css","/style.css":"_assets/1642e307c9455568ba90.css","https://kunjgit.github.io/GameZone/Games/Harmony_Mixer/Assets/logo.svg":"_assets/4b30c9eac80b1304e4d5.svg","/GameZone/Games/Harmony_Mixer/Assets/logo.svg":"_assets/4b30c9eac80b1304e4d5.svg","/Games/Harmony_Mixer/Assets/logo.svg":"_assets/4b30c9eac80b1304e4d5.svg","/Harmony_Mixer/Assets/logo.svg":"_assets/4b30c9eac80b1304e4d5.svg","/Assets/logo.svg":"_assets/4b30c9eac80b1304e4d5.svg","/logo.svg":"_assets/4b30c9eac80b1304e4d5.svg","https://kunjgit.github.io/GameZone/Games/Harmony_Mixer/Assets/Upload.png":"_assets/84bf14ad6227905b014f.png","/GameZone/Games/Harmony_Mixer/Assets/Upload.png":"_assets/84bf14ad6227905b014f.png","/Games/Harmony_Mixer/Assets/Upload.png":"_assets/84bf14ad6227905b014f.png","/Harmony_Mixer/Assets/Upload.png":"_assets/84bf14ad6227905b014f.png","/Assets/Upload.png":"_assets/84bf14ad6227905b014f.png","/Upload.png":"_assets/84bf14ad6227905b014f.png","https://kunjgit.github.io/GameZone/Games/Harmony_Mixer/Assets/Play-button.png":"_assets/d3f2c1cb6e207eb596cb.png","/GameZone/Games/Harmony_Mixer/Assets/Play-button.png":"_assets/d3f2c1cb6e207eb596cb.png","/Games/Harmony_Mixer/Assets/Play-button.png":"_assets/d3f2c1cb6e207eb596cb.png","/Harmony_Mixer/Assets/Play-button.png":"_assets/d3f2c1cb6e207eb596cb.png","/Assets/Play-button.png":"_assets/d3f2c1cb6e207eb596cb.png","/Play-button.png":"_assets/d3f2c1cb6e207eb596cb.png","https://kunjgit.github.io/GameZone/Games/Harmony_Mixer/Assets/Reset.png":"_assets/0260d8bd507027e4e3c3.png","/GameZone/Games/Harmony_Mixer/Assets/Reset.png":"_assets/0260d8bd507027e4e3c3.png","/Games/Harmony_Mixer/Assets/Reset.png":"_assets/0260d8bd507027e4e3c3.png","/Harmony_Mixer/Assets/Reset.png":"_assets/0260d8bd507027e4e3c3.png","/Assets/Reset.png":"_assets/0260d8bd507027e4e3c3.png","/Reset.png":"_assets/0260d8bd507027e4e3c3.png","https://kunjgit.github.io/GameZone/Games/Harmony_Mixer/Assets/Pause-button.png":"_assets/fb5fc34d5c7705685bfa.png","/GameZone/Games/Harmony_Mixer/Assets/Pause-button.png":"_assets/fb5fc34d5c7705685bfa.png","/Games/Harmony_Mixer/Assets/Pause-button.png":"_assets/fb5fc34d5c7705685bfa.png","/Harmony_Mixer/Assets/Pause-button.png":"_assets/fb5fc34d5c7705685bfa.png","/Assets/Pause-button.png":"_assets/fb5fc34d5c7705685bfa.png","/Pause-button.png":"_assets/fb5fc34d5c7705685bfa.png","https://kunjgit.github.io/GameZone/Games/Harmony_Mixer/script.js":"_assets/d50e24133a2b6fc4142a.js","/GameZone/Games/Harmony_Mixer/script.js":"_assets/d50e24133a2b6fc4142a.js","/Games/Harmony_Mixer/script.js":"_assets/d50e24133a2b6fc4142a.js","/Harmony_Mixer/script.js":"_assets/d50e24133a2b6fc4142a.js","/script.js":"_assets/d50e24133a2b6fc4142a.js","https://fonts.googleapis.com/css2?family=Bad+Script&family=Sacramento&family=Tenor+Sans&display=swap":"_assets/4884c08c2564bd97e703.css","/css2":"_assets/4884c08c2564bd97e703.css","/css2?family=Bad+Script&family=Sacramento&family=Tenor+Sans&display=swap":"_assets/4884c08c2564bd97e703.css","https://fonts.googleapis.com/css2":"_assets/4884c08c2564bd97e703.css","https://kunjgit.github.io/GameZone/Games/Harmony_Mixer/Assets/Background.svg":"_assets/83fc0904fd42987a34e3.svg","/GameZone/Games/Harmony_Mixer/Assets/Background.svg":"_assets/83fc0904fd42987a34e3.svg","/Games/Harmony_Mixer/Assets/Background.svg":"_assets/83fc0904fd42987a34e3.svg","/Harmony_Mixer/Assets/Background.svg":"_assets/83fc0904fd42987a34e3.svg","/Assets/Background.svg":"_assets/83fc0904fd42987a34e3.svg","/Background.svg":"_assets/83fc0904fd42987a34e3.svg","https://fonts.gstatic.com/s/tenorsans/v21/bx6ANxqUneKx06UkIXISn3V4Cg.woff2":"_assets/f0519cf59735526c06d7.woff2","/s/tenorsans/v21/bx6ANxqUneKx06UkIXISn3V4Cg.woff2":"_assets/f0519cf59735526c06d7.woff2","/tenorsans/v21/bx6ANxqUneKx06UkIXISn3V4Cg.woff2":"_assets/f0519cf59735526c06d7.woff2","/v21/bx6ANxqUneKx06UkIXISn3V4Cg.woff2":"_assets/f0519cf59735526c06d7.woff2","/bx6ANxqUneKx06UkIXISn3V4Cg.woff2":"_assets/f0519cf59735526c06d7.woff2"};
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
