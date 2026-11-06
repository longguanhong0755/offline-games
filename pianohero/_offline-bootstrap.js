(() => {
  "use strict";
  const RUNTIME_MAP = {"https://ksalehi.github.io/PianoHero/lib/css/style.css":"_assets/e5833fa4a7d6cbf9c234.css","/PianoHero/lib/css/style.css":"_assets/e5833fa4a7d6cbf9c234.css","/lib/css/style.css":"_assets/e5833fa4a7d6cbf9c234.css","/css/style.css":"_assets/e5833fa4a7d6cbf9c234.css","/style.css":"_assets/e5833fa4a7d6cbf9c234.css","https://ksalehi.github.io/PianoHero/vendor/keymaster.js":"_assets/82e07804acda2c5542b7.js","/PianoHero/vendor/keymaster.js":"_assets/82e07804acda2c5542b7.js","/vendor/keymaster.js":"_assets/82e07804acda2c5542b7.js","/keymaster.js":"_assets/82e07804acda2c5542b7.js","https://ksalehi.github.io/PianoHero/lib/bundle.js":"_assets/c2b9639110ede2a37c6a.js","/PianoHero/lib/bundle.js":"_assets/c2b9639110ede2a37c6a.js","/lib/bundle.js":"_assets/c2b9639110ede2a37c6a.js","/bundle.js":"_assets/c2b9639110ede2a37c6a.js","https://fonts.googleapis.com/css?family=Roboto:400,100":"_assets/c250c3e097236f583ba8.css","/css":"_assets/55fe2e05389330de37d5.css","/css?family=Roboto:400,100":"_assets/c250c3e097236f583ba8.css","https://fonts.googleapis.com/css":"_assets/55fe2e05389330de37d5.css","https://fonts.googleapis.com/css?family=Orbitron:400,700":"_assets/55fe2e05389330de37d5.css","/css?family=Orbitron:400,700":"_assets/55fe2e05389330de37d5.css","https://ksalehi.github.io/PianoHero/lib/css/white_mute_off.png":"_assets/ce1317afeb2c0446ece8.png","/PianoHero/lib/css/white_mute_off.png":"_assets/ce1317afeb2c0446ece8.png","/lib/css/white_mute_off.png":"_assets/ce1317afeb2c0446ece8.png","/css/white_mute_off.png":"_assets/ce1317afeb2c0446ece8.png","/white_mute_off.png":"_assets/ce1317afeb2c0446ece8.png","https://fonts.gstatic.com/s/orbitron/v35/yMJRMIlzdpvBhQQL_Qq7dy0.woff2":"_assets/c25a9f9da5d9f3db1bf2.woff2","/s/orbitron/v35/yMJRMIlzdpvBhQQL_Qq7dy0.woff2":"_assets/c25a9f9da5d9f3db1bf2.woff2","/orbitron/v35/yMJRMIlzdpvBhQQL_Qq7dy0.woff2":"_assets/c25a9f9da5d9f3db1bf2.woff2","/v35/yMJRMIlzdpvBhQQL_Qq7dy0.woff2":"_assets/c25a9f9da5d9f3db1bf2.woff2","/yMJRMIlzdpvBhQQL_Qq7dy0.woff2":"_assets/c25a9f9da5d9f3db1bf2.woff2","https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2":"_assets/1404ca348bd75ef836f4.woff2","/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2":"_assets/1404ca348bd75ef836f4.woff2","/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2":"_assets/1404ca348bd75ef836f4.woff2","/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2":"_assets/1404ca348bd75ef836f4.woff2","/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2":"_assets/1404ca348bd75ef836f4.woff2"};
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
