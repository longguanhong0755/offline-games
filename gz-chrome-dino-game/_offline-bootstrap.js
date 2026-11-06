(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Chrome_Dino_Game/styles.css":"_assets/ae57391663bab11a33ac.css","/GameZone/Games/Chrome_Dino_Game/styles.css":"_assets/ae57391663bab11a33ac.css","/Games/Chrome_Dino_Game/styles.css":"_assets/ae57391663bab11a33ac.css","/Chrome_Dino_Game/styles.css":"_assets/ae57391663bab11a33ac.css","/styles.css":"_assets/ae57391663bab11a33ac.css","https://kunjgit.github.io/GameZone/Games/Chrome_Dino_Game/imgs/ground.png":"_assets/59a43988efd8a9decc20.png","/GameZone/Games/Chrome_Dino_Game/imgs/ground.png":"_assets/59a43988efd8a9decc20.png","/Games/Chrome_Dino_Game/imgs/ground.png":"_assets/59a43988efd8a9decc20.png","/Chrome_Dino_Game/imgs/ground.png":"_assets/59a43988efd8a9decc20.png","/imgs/ground.png":"_assets/59a43988efd8a9decc20.png","/ground.png":"_assets/59a43988efd8a9decc20.png","https://kunjgit.github.io/GameZone/Games/Chrome_Dino_Game/script.js":"_assets/e51874be889db26900d8.js","/GameZone/Games/Chrome_Dino_Game/script.js":"_assets/e51874be889db26900d8.js","/Games/Chrome_Dino_Game/script.js":"_assets/e51874be889db26900d8.js","/Chrome_Dino_Game/script.js":"_assets/e51874be889db26900d8.js","/script.js":"_assets/e51874be889db26900d8.js","https://kunjgit.github.io/GameZone/Games/Chrome_Dino_Game/imgs/dino-stationary.png":"_assets/997a5dc656115cbe74f4.png","/GameZone/Games/Chrome_Dino_Game/imgs/dino-stationary.png":"_assets/997a5dc656115cbe74f4.png","/Games/Chrome_Dino_Game/imgs/dino-stationary.png":"_assets/997a5dc656115cbe74f4.png","/Chrome_Dino_Game/imgs/dino-stationary.png":"_assets/997a5dc656115cbe74f4.png","/imgs/dino-stationary.png":"_assets/997a5dc656115cbe74f4.png","/dino-stationary.png":"_assets/997a5dc656115cbe74f4.png","https://kunjgit.github.io/GameZone/Games/Chrome_Dino_Game/dino.js":"_assets/3203ce06cc5680b57052.js","/GameZone/Games/Chrome_Dino_Game/dino.js":"_assets/3203ce06cc5680b57052.js","/Games/Chrome_Dino_Game/dino.js":"_assets/3203ce06cc5680b57052.js","/Chrome_Dino_Game/dino.js":"_assets/3203ce06cc5680b57052.js","/dino.js":"_assets/3203ce06cc5680b57052.js","https://kunjgit.github.io/GameZone/Games/Chrome_Dino_Game/cactus.js":"_assets/0e75b6a8953eb3199d77.js","/GameZone/Games/Chrome_Dino_Game/cactus.js":"_assets/0e75b6a8953eb3199d77.js","/Games/Chrome_Dino_Game/cactus.js":"_assets/0e75b6a8953eb3199d77.js","/Chrome_Dino_Game/cactus.js":"_assets/0e75b6a8953eb3199d77.js","/cactus.js":"_assets/0e75b6a8953eb3199d77.js","https://kunjgit.github.io/GameZone/Games/Chrome_Dino_Game/ground.js":"_assets/8be1b68c55efadf56a96.js","/GameZone/Games/Chrome_Dino_Game/ground.js":"_assets/8be1b68c55efadf56a96.js","/Games/Chrome_Dino_Game/ground.js":"_assets/8be1b68c55efadf56a96.js","/Chrome_Dino_Game/ground.js":"_assets/8be1b68c55efadf56a96.js","/ground.js":"_assets/8be1b68c55efadf56a96.js","https://kunjgit.github.io/GameZone/Games/Chrome_Dino_Game/updateCustomProperty.js":"_assets/c3b1805a408f29d21631.js","/GameZone/Games/Chrome_Dino_Game/updateCustomProperty.js":"_assets/c3b1805a408f29d21631.js","/Games/Chrome_Dino_Game/updateCustomProperty.js":"_assets/c3b1805a408f29d21631.js","/Chrome_Dino_Game/updateCustomProperty.js":"_assets/c3b1805a408f29d21631.js","/updateCustomProperty.js":"_assets/c3b1805a408f29d21631.js"};
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
