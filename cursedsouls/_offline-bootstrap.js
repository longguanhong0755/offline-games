(() => {
  "use strict";
  const RUNTIME_MAP = {"https://bozar.github.io/cursedSouls/style.css":"_assets/88cc5a97d43a0fdaa364.css","/cursedSouls/style.css":"_assets/88cc5a97d43a0fdaa364.css","/style.css":"_assets/88cc5a97d43a0fdaa364.css","https://bozar.github.io/cursedSouls/scripts/main.js":"_assets/fc4bd94536d1dc5a640a.js","/cursedSouls/scripts/main.js":"_assets/fc4bd94536d1dc5a640a.js","/scripts/main.js":"_assets/fc4bd94536d1dc5a640a.js","/main.js":"_assets/fc4bd94536d1dc5a640a.js","https://bozar.github.io/cursedSouls/scripts/rot.min.js":"_assets/90dff6a44706f30a14c0.js","/cursedSouls/scripts/rot.min.js":"_assets/90dff6a44706f30a14c0.js","/scripts/rot.min.js":"_assets/90dff6a44706f30a14c0.js","/rot.min.js":"_assets/90dff6a44706f30a14c0.js","https://bozar.github.io/cursedSouls/scripts/screenFactory.js":"_assets/9b068da58fea3c890b5d.js","/cursedSouls/scripts/screenFactory.js":"_assets/9b068da58fea3c890b5d.js","/scripts/screenFactory.js":"_assets/9b068da58fea3c890b5d.js","/screenFactory.js":"_assets/9b068da58fea3c890b5d.js","https://bozar.github.io/cursedSouls/scripts/keyInput.js":"_assets/5c21b832ecd77b7ff495.js","/cursedSouls/scripts/keyInput.js":"_assets/5c21b832ecd77b7ff495.js","/scripts/keyInput.js":"_assets/5c21b832ecd77b7ff495.js","/keyInput.js":"_assets/5c21b832ecd77b7ff495.js","https://bozar.github.io/cursedSouls/scripts/screenLayout.js":"_assets/b9263f26f77e028e0e7e.js","/cursedSouls/scripts/screenLayout.js":"_assets/b9263f26f77e028e0e7e.js","/scripts/screenLayout.js":"_assets/b9263f26f77e028e0e7e.js","/screenLayout.js":"_assets/b9263f26f77e028e0e7e.js","https://bozar.github.io/cursedSouls/scripts/screenInGame.js":"_assets/05f83febf3593c2a4658.js","/cursedSouls/scripts/screenInGame.js":"_assets/05f83febf3593c2a4658.js","/scripts/screenInGame.js":"_assets/05f83febf3593c2a4658.js","/screenInGame.js":"_assets/05f83febf3593c2a4658.js","https://bozar.github.io/cursedSouls/scripts/entityFactory.js":"_assets/aa532ba788e299c9120f.js","/cursedSouls/scripts/entityFactory.js":"_assets/aa532ba788e299c9120f.js","/scripts/entityFactory.js":"_assets/aa532ba788e299c9120f.js","/entityFactory.js":"_assets/aa532ba788e299c9120f.js","https://bozar.github.io/cursedSouls/scripts/monsterAI.js":"_assets/ec0f24a20dd02042c536.js","/cursedSouls/scripts/monsterAI.js":"_assets/ec0f24a20dd02042c536.js","/scripts/monsterAI.js":"_assets/ec0f24a20dd02042c536.js","/monsterAI.js":"_assets/ec0f24a20dd02042c536.js","https://bozar.github.io/cursedSouls/scripts/component.js":"_assets/645720f8a426a8e49300.js","/cursedSouls/scripts/component.js":"_assets/645720f8a426a8e49300.js","/scripts/component.js":"_assets/645720f8a426a8e49300.js","/component.js":"_assets/645720f8a426a8e49300.js","https://bozar.github.io/cursedSouls/scripts/entity.js":"_assets/eeb8e697f3fb0e9867b4.js","/cursedSouls/scripts/entity.js":"_assets/eeb8e697f3fb0e9867b4.js","/scripts/entity.js":"_assets/eeb8e697f3fb0e9867b4.js","/entity.js":"_assets/eeb8e697f3fb0e9867b4.js","https://bozar.github.io/cursedSouls/scripts/achievement.js":"_assets/ebcddd713f28de48d776.js","/cursedSouls/scripts/achievement.js":"_assets/ebcddd713f28de48d776.js","/scripts/achievement.js":"_assets/ebcddd713f28de48d776.js","/achievement.js":"_assets/ebcddd713f28de48d776.js","https://bozar.github.io/cursedSouls/scripts/saveLoad.js":"_assets/d0788fbb33ab8bd72593.js","/cursedSouls/scripts/saveLoad.js":"_assets/d0788fbb33ab8bd72593.js","/scripts/saveLoad.js":"_assets/d0788fbb33ab8bd72593.js","/saveLoad.js":"_assets/d0788fbb33ab8bd72593.js","https://bozar.github.io/cursedSouls/scripts/text.js":"_assets/356adeb420e3c3742a21.js","/cursedSouls/scripts/text.js":"_assets/356adeb420e3c3742a21.js","/scripts/text.js":"_assets/356adeb420e3c3742a21.js","/text.js":"_assets/356adeb420e3c3742a21.js","https://bozar.github.io/cursedSouls/scripts/system.js":"_assets/3afd0e96aa54280f6531.js","/cursedSouls/scripts/system.js":"_assets/3afd0e96aa54280f6531.js","/scripts/system.js":"_assets/3afd0e96aa54280f6531.js","/system.js":"_assets/3afd0e96aa54280f6531.js"};
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
