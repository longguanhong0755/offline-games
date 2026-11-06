(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/TriHand_Tactics/styles.css":"_assets/5ab454a2d357fb1d08f1.css","/GameZone/Games/TriHand_Tactics/styles.css":"_assets/5ab454a2d357fb1d08f1.css","/Games/TriHand_Tactics/styles.css":"_assets/5ab454a2d357fb1d08f1.css","/TriHand_Tactics/styles.css":"_assets/5ab454a2d357fb1d08f1.css","/styles.css":"_assets/5ab454a2d357fb1d08f1.css","https://kunjgit.github.io/GameZone/Games/TriHand_Tactics/images/paper-emoji.png":"_assets/531736c4bdc834d0b162.png","/GameZone/Games/TriHand_Tactics/images/paper-emoji.png":"_assets/531736c4bdc834d0b162.png","/Games/TriHand_Tactics/images/paper-emoji.png":"_assets/531736c4bdc834d0b162.png","/TriHand_Tactics/images/paper-emoji.png":"_assets/531736c4bdc834d0b162.png","/images/paper-emoji.png":"_assets/531736c4bdc834d0b162.png","/paper-emoji.png":"_assets/531736c4bdc834d0b162.png","https://kunjgit.github.io/GameZone/Games/TriHand_Tactics/images/scissors-emoji.png":"_assets/6a09f1b47f19606ea507.png","/GameZone/Games/TriHand_Tactics/images/scissors-emoji.png":"_assets/6a09f1b47f19606ea507.png","/Games/TriHand_Tactics/images/scissors-emoji.png":"_assets/6a09f1b47f19606ea507.png","/TriHand_Tactics/images/scissors-emoji.png":"_assets/6a09f1b47f19606ea507.png","/images/scissors-emoji.png":"_assets/6a09f1b47f19606ea507.png","/scissors-emoji.png":"_assets/6a09f1b47f19606ea507.png","https://kunjgit.github.io/GameZone/Games/TriHand_Tactics/images/rock-emoji.png":"_assets/5e68115386265bd2e980.png","/GameZone/Games/TriHand_Tactics/images/rock-emoji.png":"_assets/5e68115386265bd2e980.png","/Games/TriHand_Tactics/images/rock-emoji.png":"_assets/5e68115386265bd2e980.png","/TriHand_Tactics/images/rock-emoji.png":"_assets/5e68115386265bd2e980.png","/images/rock-emoji.png":"_assets/5e68115386265bd2e980.png","/rock-emoji.png":"_assets/5e68115386265bd2e980.png","https://readme-typing-svg.demolab.com/?font=Arial&weight=600&size=35&pause=1000&color=F2F2F7&center=true&random=false&width=435&lines=Choose+Your+Move...":"_assets/6bd1032b7b8b826b9dc8.svg","/":"_assets/6bd1032b7b8b826b9dc8.svg","/?font=Arial&weight=600&size=35&pause=1000&color=F2F2F7&center=true&random=false&width=435&lines=Choose+Your+Move...":"_assets/6bd1032b7b8b826b9dc8.svg","https://readme-typing-svg.demolab.com/":"_assets/6bd1032b7b8b826b9dc8.svg","https://kunjgit.github.io/GameZone/Games/TriHand_Tactics/script.js":"_assets/b5af1efa43430a8a0432.js","/GameZone/Games/TriHand_Tactics/script.js":"_assets/b5af1efa43430a8a0432.js","/Games/TriHand_Tactics/script.js":"_assets/b5af1efa43430a8a0432.js","/TriHand_Tactics/script.js":"_assets/b5af1efa43430a8a0432.js","/script.js":"_assets/b5af1efa43430a8a0432.js"};
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
