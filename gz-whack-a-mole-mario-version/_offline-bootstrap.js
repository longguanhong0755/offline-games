(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Whack_a_Mole_Mario_Version/whackamole.css":"_assets/e3aaa7425a19d7b916ca.css","/GameZone/Games/Whack_a_Mole_Mario_Version/whackamole.css":"_assets/e3aaa7425a19d7b916ca.css","/Games/Whack_a_Mole_Mario_Version/whackamole.css":"_assets/e3aaa7425a19d7b916ca.css","/Whack_a_Mole_Mario_Version/whackamole.css":"_assets/e3aaa7425a19d7b916ca.css","/whackamole.css":"_assets/e3aaa7425a19d7b916ca.css","https://kunjgit.github.io/GameZone/Games/Whack_a_Mole_Mario_Version/whackamole.js":"_assets/db413a604416d2367a19.js","/GameZone/Games/Whack_a_Mole_Mario_Version/whackamole.js":"_assets/db413a604416d2367a19.js","/Games/Whack_a_Mole_Mario_Version/whackamole.js":"_assets/db413a604416d2367a19.js","/Whack_a_Mole_Mario_Version/whackamole.js":"_assets/db413a604416d2367a19.js","/whackamole.js":"_assets/db413a604416d2367a19.js","https://kunjgit.github.io/GameZone/Games/Whack_a_Mole_Mario_Version/mario-bg.jpg":"_assets/a7efb84c44ec795bdbb0.jpg","/GameZone/Games/Whack_a_Mole_Mario_Version/mario-bg.jpg":"_assets/a7efb84c44ec795bdbb0.jpg","/Games/Whack_a_Mole_Mario_Version/mario-bg.jpg":"_assets/a7efb84c44ec795bdbb0.jpg","/Whack_a_Mole_Mario_Version/mario-bg.jpg":"_assets/a7efb84c44ec795bdbb0.jpg","/mario-bg.jpg":"_assets/a7efb84c44ec795bdbb0.jpg","https://kunjgit.github.io/GameZone/Games/Whack_a_Mole_Mario_Version/soil.png":"_assets/e0fcc0785e639a02c178.png","/GameZone/Games/Whack_a_Mole_Mario_Version/soil.png":"_assets/e0fcc0785e639a02c178.png","/Games/Whack_a_Mole_Mario_Version/soil.png":"_assets/e0fcc0785e639a02c178.png","/Whack_a_Mole_Mario_Version/soil.png":"_assets/e0fcc0785e639a02c178.png","/soil.png":"_assets/e0fcc0785e639a02c178.png","https://kunjgit.github.io/GameZone/Games/Whack_a_Mole_Mario_Version/restart.png":"_assets/5542905f7b92689be788.png","/GameZone/Games/Whack_a_Mole_Mario_Version/restart.png":"_assets/5542905f7b92689be788.png","/Games/Whack_a_Mole_Mario_Version/restart.png":"_assets/5542905f7b92689be788.png","/Whack_a_Mole_Mario_Version/restart.png":"_assets/5542905f7b92689be788.png","/restart.png":"_assets/5542905f7b92689be788.png","https://kunjgit.github.io/GameZone/Games/Whack_a_Mole_Mario_Version/pipe.png":"_assets/ca180e6027a4e0855b97.png","/GameZone/Games/Whack_a_Mole_Mario_Version/pipe.png":"_assets/ca180e6027a4e0855b97.png","/Games/Whack_a_Mole_Mario_Version/pipe.png":"_assets/ca180e6027a4e0855b97.png","/Whack_a_Mole_Mario_Version/pipe.png":"_assets/ca180e6027a4e0855b97.png","/pipe.png":"_assets/ca180e6027a4e0855b97.png","https://kunjgit.github.io/GameZone/Games/Whack_a_Mole_Mario_Version/monty-mole.png":"_assets/b0d0855b22c9b2b55e33.png","/GameZone/Games/Whack_a_Mole_Mario_Version/monty-mole.png":"_assets/b0d0855b22c9b2b55e33.png","/Games/Whack_a_Mole_Mario_Version/monty-mole.png":"_assets/b0d0855b22c9b2b55e33.png","/Whack_a_Mole_Mario_Version/monty-mole.png":"_assets/b0d0855b22c9b2b55e33.png","/monty-mole.png":"_assets/b0d0855b22c9b2b55e33.png","https://kunjgit.github.io/GameZone/Games/Whack_a_Mole_Mario_Version/piranha-plant.png":"_assets/6de0c2ec5bbddde6dac4.png","/GameZone/Games/Whack_a_Mole_Mario_Version/piranha-plant.png":"_assets/6de0c2ec5bbddde6dac4.png","/Games/Whack_a_Mole_Mario_Version/piranha-plant.png":"_assets/6de0c2ec5bbddde6dac4.png","/Whack_a_Mole_Mario_Version/piranha-plant.png":"_assets/6de0c2ec5bbddde6dac4.png","/piranha-plant.png":"_assets/6de0c2ec5bbddde6dac4.png"};
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
