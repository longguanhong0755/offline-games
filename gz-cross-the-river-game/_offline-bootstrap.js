(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Cross_The_River_Game/css/main.css":"_assets/62f30f0434fb001bf5d3.css","/GameZone/Games/Cross_The_River_Game/css/main.css":"_assets/62f30f0434fb001bf5d3.css","/Games/Cross_The_River_Game/css/main.css":"_assets/62f30f0434fb001bf5d3.css","/Cross_The_River_Game/css/main.css":"_assets/62f30f0434fb001bf5d3.css","/css/main.css":"_assets/62f30f0434fb001bf5d3.css","/main.css":"_assets/62f30f0434fb001bf5d3.css","https://kunjgit.github.io/GameZone/Games/Cross_The_River_Game/js/prompt.js":"_assets/659bd8ea8e0859a6913f.js","/GameZone/Games/Cross_The_River_Game/js/prompt.js":"_assets/659bd8ea8e0859a6913f.js","/Games/Cross_The_River_Game/js/prompt.js":"_assets/659bd8ea8e0859a6913f.js","/Cross_The_River_Game/js/prompt.js":"_assets/659bd8ea8e0859a6913f.js","/js/prompt.js":"_assets/659bd8ea8e0859a6913f.js","/prompt.js":"_assets/659bd8ea8e0859a6913f.js","https://kunjgit.github.io/GameZone/Games/Cross_The_River_Game/js/Passenger.js":"_assets/416d49372fba943b97f1.js","/GameZone/Games/Cross_The_River_Game/js/Passenger.js":"_assets/416d49372fba943b97f1.js","/Games/Cross_The_River_Game/js/Passenger.js":"_assets/416d49372fba943b97f1.js","/Cross_The_River_Game/js/Passenger.js":"_assets/416d49372fba943b97f1.js","/js/Passenger.js":"_assets/416d49372fba943b97f1.js","/Passenger.js":"_assets/416d49372fba943b97f1.js","https://kunjgit.github.io/GameZone/Games/Cross_The_River_Game/js/Boat.js":"_assets/34ea8474e8ca726153de.js","/GameZone/Games/Cross_The_River_Game/js/Boat.js":"_assets/34ea8474e8ca726153de.js","/Games/Cross_The_River_Game/js/Boat.js":"_assets/34ea8474e8ca726153de.js","/Cross_The_River_Game/js/Boat.js":"_assets/34ea8474e8ca726153de.js","/js/Boat.js":"_assets/34ea8474e8ca726153de.js","/Boat.js":"_assets/34ea8474e8ca726153de.js","https://kunjgit.github.io/GameZone/Games/Cross_The_River_Game/js/main.js":"_assets/9f055d67f85331cefb30.js","/GameZone/Games/Cross_The_River_Game/js/main.js":"_assets/9f055d67f85331cefb30.js","/Games/Cross_The_River_Game/js/main.js":"_assets/9f055d67f85331cefb30.js","/Cross_The_River_Game/js/main.js":"_assets/9f055d67f85331cefb30.js","/js/main.js":"_assets/9f055d67f85331cefb30.js","/main.js":"_assets/9f055d67f85331cefb30.js","https://kunjgit.github.io/GameZone/Games/Cross_The_River_Game/img/farmer.png":"_assets/7033952887434be977bc.png","/GameZone/Games/Cross_The_River_Game/img/farmer.png":"_assets/7033952887434be977bc.png","/Games/Cross_The_River_Game/img/farmer.png":"_assets/7033952887434be977bc.png","/Cross_The_River_Game/img/farmer.png":"_assets/7033952887434be977bc.png","/img/farmer.png":"_assets/7033952887434be977bc.png","/farmer.png":"_assets/7033952887434be977bc.png","https://kunjgit.github.io/GameZone/Games/Cross_The_River_Game/img/wolf.png":"_assets/d6d40ed7607c8c97bbbf.png","/GameZone/Games/Cross_The_River_Game/img/wolf.png":"_assets/d6d40ed7607c8c97bbbf.png","/Games/Cross_The_River_Game/img/wolf.png":"_assets/d6d40ed7607c8c97bbbf.png","/Cross_The_River_Game/img/wolf.png":"_assets/d6d40ed7607c8c97bbbf.png","/img/wolf.png":"_assets/d6d40ed7607c8c97bbbf.png","/wolf.png":"_assets/d6d40ed7607c8c97bbbf.png","https://kunjgit.github.io/GameZone/Games/Cross_The_River_Game/img/goat.png":"_assets/b27198d56dad69517492.png","/GameZone/Games/Cross_The_River_Game/img/goat.png":"_assets/b27198d56dad69517492.png","/Games/Cross_The_River_Game/img/goat.png":"_assets/b27198d56dad69517492.png","/Cross_The_River_Game/img/goat.png":"_assets/b27198d56dad69517492.png","/img/goat.png":"_assets/b27198d56dad69517492.png","/goat.png":"_assets/b27198d56dad69517492.png","https://kunjgit.github.io/GameZone/Games/Cross_The_River_Game/img/boat.png":"_assets/a095c24ee33d064b0527.png","/GameZone/Games/Cross_The_River_Game/img/boat.png":"_assets/a095c24ee33d064b0527.png","/Games/Cross_The_River_Game/img/boat.png":"_assets/a095c24ee33d064b0527.png","/Cross_The_River_Game/img/boat.png":"_assets/a095c24ee33d064b0527.png","/img/boat.png":"_assets/a095c24ee33d064b0527.png","/boat.png":"_assets/a095c24ee33d064b0527.png","https://kunjgit.github.io/GameZone/Games/Cross_The_River_Game/img/cabbage.png":"_assets/1f1b4caec02f8952a05a.png","/GameZone/Games/Cross_The_River_Game/img/cabbage.png":"_assets/1f1b4caec02f8952a05a.png","/Games/Cross_The_River_Game/img/cabbage.png":"_assets/1f1b4caec02f8952a05a.png","/Cross_The_River_Game/img/cabbage.png":"_assets/1f1b4caec02f8952a05a.png","/img/cabbage.png":"_assets/1f1b4caec02f8952a05a.png","/cabbage.png":"_assets/1f1b4caec02f8952a05a.png"};
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
