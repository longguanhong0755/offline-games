(() => {
  "use strict";
  const RUNTIME_MAP = {"http://ondras.github.io/trw/js/game.js":"_assets/6799332481d281a7a9e4.js","/trw/js/game.js":"_assets/6799332481d281a7a9e4.js","/js/game.js":"_assets/6799332481d281a7a9e4.js","/game.js":"_assets/6799332481d281a7a9e4.js","http://ondras.github.io/trw/js/common/promise-request.js":"_assets/7f473062a17821d90727.js","/trw/js/common/promise-request.js":"_assets/7f473062a17821d90727.js","/js/common/promise-request.js":"_assets/7f473062a17821d90727.js","/common/promise-request.js":"_assets/7f473062a17821d90727.js","/promise-request.js":"_assets/7f473062a17821d90727.js","http://ondras.github.io/trw/js/common/levelmanager.js":"_assets/928eb40b31361d464c88.js","/trw/js/common/levelmanager.js":"_assets/928eb40b31361d464c88.js","/js/common/levelmanager.js":"_assets/928eb40b31361d464c88.js","/common/levelmanager.js":"_assets/928eb40b31361d464c88.js","/levelmanager.js":"_assets/928eb40b31361d464c88.js","http://ondras.github.io/trw/js/common/rot.js":"_assets/aaf23aaa8f740f01be42.js","/trw/js/common/rot.js":"_assets/aaf23aaa8f740f01be42.js","/js/common/rot.js":"_assets/aaf23aaa8f740f01be42.js","/common/rot.js":"_assets/aaf23aaa8f740f01be42.js","/rot.js":"_assets/aaf23aaa8f740f01be42.js","http://ondras.github.io/trw/js/common/promise.js":"_assets/18088dd264a413bcffef.js","/trw/js/common/promise.js":"_assets/18088dd264a413bcffef.js","/js/common/promise.js":"_assets/18088dd264a413bcffef.js","/common/promise.js":"_assets/18088dd264a413bcffef.js","/promise.js":"_assets/18088dd264a413bcffef.js","http://ondras.github.io/trw/js/common/level.js":"_assets/20d7cd04a62037b7432c.js","/trw/js/common/level.js":"_assets/20d7cd04a62037b7432c.js","/js/common/level.js":"_assets/20d7cd04a62037b7432c.js","/common/level.js":"_assets/20d7cd04a62037b7432c.js","/level.js":"_assets/20d7cd04a62037b7432c.js","http://ondras.github.io/trw/js/common/entity.js":"_assets/1ed710e6c2aa42f5ea12.js","/trw/js/common/entity.js":"_assets/1ed710e6c2aa42f5ea12.js","/js/common/entity.js":"_assets/1ed710e6c2aa42f5ea12.js","/common/entity.js":"_assets/1ed710e6c2aa42f5ea12.js","/entity.js":"_assets/1ed710e6c2aa42f5ea12.js","http://ondras.github.io/trw/css/style.css":"_assets/76ed69ea25df8a007208.css","/trw/css/style.css":"_assets/76ed69ea25df8a007208.css","/css/style.css":"_assets/76ed69ea25df8a007208.css","/style.css":"_assets/76ed69ea25df8a007208.css","http://ondras.github.io/trw/js/common/repository.js":"_assets/5bd8c83c67eba521a77b.js","/trw/js/common/repository.js":"_assets/5bd8c83c67eba521a77b.js","/js/common/repository.js":"_assets/5bd8c83c67eba521a77b.js","/common/repository.js":"_assets/5bd8c83c67eba521a77b.js","/repository.js":"_assets/5bd8c83c67eba521a77b.js","http://ondras.github.io/trw/js/common/cell.js":"_assets/b9f64d0e7b8f441d89b1.js","/trw/js/common/cell.js":"_assets/b9f64d0e7b8f441d89b1.js","/js/common/cell.js":"_assets/b9f64d0e7b8f441d89b1.js","/common/cell.js":"_assets/b9f64d0e7b8f441d89b1.js","/cell.js":"_assets/b9f64d0e7b8f441d89b1.js","http://ondras.github.io/trw/js/common/being.js":"_assets/b74f2f7406e647be0e68.js","/trw/js/common/being.js":"_assets/b74f2f7406e647be0e68.js","/js/common/being.js":"_assets/b74f2f7406e647be0e68.js","/common/being.js":"_assets/b74f2f7406e647be0e68.js","/being.js":"_assets/b74f2f7406e647be0e68.js","http://ondras.github.io/trw/js/common/item.js":"_assets/4aafbed88a15c7b21e05.js","/trw/js/common/item.js":"_assets/4aafbed88a15c7b21e05.js","/js/common/item.js":"_assets/4aafbed88a15c7b21e05.js","/common/item.js":"_assets/4aafbed88a15c7b21e05.js","/item.js":"_assets/4aafbed88a15c7b21e05.js","http://ondras.github.io/trw/js/common/lib/healingpotion.js":"_assets/0579b37499121996666c.js","/trw/js/common/lib/healingpotion.js":"_assets/0579b37499121996666c.js","/js/common/lib/healingpotion.js":"_assets/0579b37499121996666c.js","/common/lib/healingpotion.js":"_assets/0579b37499121996666c.js","/lib/healingpotion.js":"_assets/0579b37499121996666c.js","/healingpotion.js":"_assets/0579b37499121996666c.js","http://ondras.github.io/trw/js/common/lib/food.js":"_assets/d44bfc26169b404d9628.js","/trw/js/common/lib/food.js":"_assets/d44bfc26169b404d9628.js","/js/common/lib/food.js":"_assets/d44bfc26169b404d9628.js","/common/lib/food.js":"_assets/d44bfc26169b404d9628.js","/lib/food.js":"_assets/d44bfc26169b404d9628.js","/food.js":"_assets/d44bfc26169b404d9628.js","http://ondras.github.io/trw/js/common/lib/door.js":"_assets/739563136b3175064b01.js","/trw/js/common/lib/door.js":"_assets/739563136b3175064b01.js","/js/common/lib/door.js":"_assets/739563136b3175064b01.js","/common/lib/door.js":"_assets/739563136b3175064b01.js","/lib/door.js":"_assets/739563136b3175064b01.js","/door.js":"_assets/739563136b3175064b01.js","http://ondras.github.io/trw/js/common/lib/weapon.js":"_assets/f0b1ce3f273ac3840d31.js","/trw/js/common/lib/weapon.js":"_assets/f0b1ce3f273ac3840d31.js","/js/common/lib/weapon.js":"_assets/f0b1ce3f273ac3840d31.js","/common/lib/weapon.js":"_assets/f0b1ce3f273ac3840d31.js","/lib/weapon.js":"_assets/f0b1ce3f273ac3840d31.js","/weapon.js":"_assets/f0b1ce3f273ac3840d31.js","http://ondras.github.io/trw/js/common/lib/armor.js":"_assets/51ee661006d39564ad7e.js","/trw/js/common/lib/armor.js":"_assets/51ee661006d39564ad7e.js","/js/common/lib/armor.js":"_assets/51ee661006d39564ad7e.js","/common/lib/armor.js":"_assets/51ee661006d39564ad7e.js","/lib/armor.js":"_assets/51ee661006d39564ad7e.js","/armor.js":"_assets/51ee661006d39564ad7e.js","http://ondras.github.io/trw/js/common/lib/beings.js":"_assets/dc9aaf706d15dec1bd51.js","/trw/js/common/lib/beings.js":"_assets/dc9aaf706d15dec1bd51.js","/js/common/lib/beings.js":"_assets/dc9aaf706d15dec1bd51.js","/common/lib/beings.js":"_assets/dc9aaf706d15dec1bd51.js","/lib/beings.js":"_assets/dc9aaf706d15dec1bd51.js","/beings.js":"_assets/dc9aaf706d15dec1bd51.js","http://ondras.github.io/trw/js/common/lib/cells.js":"_assets/10917aeab7e3e58bed07.js","/trw/js/common/lib/cells.js":"_assets/10917aeab7e3e58bed07.js","/js/common/lib/cells.js":"_assets/10917aeab7e3e58bed07.js","/common/lib/cells.js":"_assets/10917aeab7e3e58bed07.js","/lib/cells.js":"_assets/10917aeab7e3e58bed07.js","/cells.js":"_assets/10917aeab7e3e58bed07.js","http://ondras.github.io/trw/js/common/lib/items.js":"_assets/cd4d05dec5336fc417d6.js","/trw/js/common/lib/items.js":"_assets/cd4d05dec5336fc417d6.js","/js/common/lib/items.js":"_assets/cd4d05dec5336fc417d6.js","/common/lib/items.js":"_assets/cd4d05dec5336fc417d6.js","/lib/items.js":"_assets/cd4d05dec5336fc417d6.js","/items.js":"_assets/cd4d05dec5336fc417d6.js","http://ondras.github.io/trw/js/ai.js":"_assets/e9bb7e7ed97410e2b9e5.js","/trw/js/ai.js":"_assets/e9bb7e7ed97410e2b9e5.js","/js/ai.js":"_assets/e9bb7e7ed97410e2b9e5.js","/ai.js":"_assets/e9bb7e7ed97410e2b9e5.js","http://ondras.github.io/trw/js/intro.js":"_assets/f74b309930f74c5de364.js","/trw/js/intro.js":"_assets/f74b309930f74c5de364.js","/js/intro.js":"_assets/f74b309930f74c5de364.js","/intro.js":"_assets/f74b309930f74c5de364.js","http://ondras.github.io/trw/js/story.js":"_assets/4388a4c5d9d7bba2c6fd.js","/trw/js/story.js":"_assets/4388a4c5d9d7bba2c6fd.js","/js/story.js":"_assets/4388a4c5d9d7bba2c6fd.js","/story.js":"_assets/4388a4c5d9d7bba2c6fd.js","http://ondras.github.io/trw/js/status.js":"_assets/3b45053439b945a94de0.js","/trw/js/status.js":"_assets/3b45053439b945a94de0.js","/js/status.js":"_assets/3b45053439b945a94de0.js","/status.js":"_assets/3b45053439b945a94de0.js","http://ondras.github.io/trw/js/stats.js":"_assets/ecb6baa7ef68ce29704d.js","/trw/js/stats.js":"_assets/ecb6baa7ef68ce29704d.js","/js/stats.js":"_assets/ecb6baa7ef68ce29704d.js","/stats.js":"_assets/ecb6baa7ef68ce29704d.js","http://ondras.github.io/trw/js/display.js":"_assets/547cafe49eb0ba5f664f.js","/trw/js/display.js":"_assets/547cafe49eb0ba5f664f.js","/js/display.js":"_assets/547cafe49eb0ba5f664f.js","/display.js":"_assets/547cafe49eb0ba5f664f.js","http://ondras.github.io/trw/js/legend.js":"_assets/2e31c9f508ae0f85adce.js","/trw/js/legend.js":"_assets/2e31c9f508ae0f85adce.js","/js/legend.js":"_assets/2e31c9f508ae0f85adce.js","/legend.js":"_assets/2e31c9f508ae0f85adce.js","http://ondras.github.io/trw/js/lib/gate.js":"_assets/fbe46b3bcaf1b87d8446.js","/trw/js/lib/gate.js":"_assets/fbe46b3bcaf1b87d8446.js","/js/lib/gate.js":"_assets/fbe46b3bcaf1b87d8446.js","/lib/gate.js":"_assets/fbe46b3bcaf1b87d8446.js","/gate.js":"_assets/fbe46b3bcaf1b87d8446.js","http://ondras.github.io/trw/js/player.js":"_assets/40fc9eaedaac80bd5f2c.js","/trw/js/player.js":"_assets/40fc9eaedaac80bd5f2c.js","/js/player.js":"_assets/40fc9eaedaac80bd5f2c.js","/player.js":"_assets/40fc9eaedaac80bd5f2c.js","http://ondras.github.io/trw/js/lib/bride.js":"_assets/c19946a3a749e71b04c4.js","/trw/js/lib/bride.js":"_assets/c19946a3a749e71b04c4.js","/js/lib/bride.js":"_assets/c19946a3a749e71b04c4.js","/lib/bride.js":"_assets/c19946a3a749e71b04c4.js","/bride.js":"_assets/c19946a3a749e71b04c4.js","http://ondras.github.io/trw/js/lib/beings.js":"_assets/b37ca3f4de5177c67876.js","/trw/js/lib/beings.js":"_assets/b37ca3f4de5177c67876.js","/js/lib/beings.js":"_assets/b37ca3f4de5177c67876.js","http://ondras.github.io/trw/js/lib/cells.js":"_assets/a9de77b068247390f743.js","/trw/js/lib/cells.js":"_assets/a9de77b068247390f743.js","/js/lib/cells.js":"_assets/a9de77b068247390f743.js","http://ondras.github.io/trw/js/lib/items.js":"_assets/96529d4f433998916ff2.js","/trw/js/lib/items.js":"_assets/96529d4f433998916ff2.js","/js/lib/items.js":"_assets/96529d4f433998916ff2.js","http://ondras.github.io/trw/levels/forest.js":"_assets/be99f2d6e3b6e6aeb5c2.js","/trw/levels/forest.js":"_assets/be99f2d6e3b6e6aeb5c2.js","/levels/forest.js":"_assets/be99f2d6e3b6e6aeb5c2.js","/forest.js":"_assets/be99f2d6e3b6e6aeb5c2.js","http://ondras.github.io/trw/levels/dungeon.js":"_assets/1ab394ee4f7eb62f8e82.js","/trw/levels/dungeon.js":"_assets/1ab394ee4f7eb62f8e82.js","/levels/dungeon.js":"_assets/1ab394ee4f7eb62f8e82.js","/dungeon.js":"_assets/1ab394ee4f7eb62f8e82.js","http://ondras.github.io/trw/levels/castle.js":"_assets/054e20cf3de1def695df.js","/trw/levels/castle.js":"_assets/054e20cf3de1def695df.js","/levels/castle.js":"_assets/054e20cf3de1def695df.js","/castle.js":"_assets/054e20cf3de1def695df.js","http://ondras.github.io/trw/levels/chapel.js":"_assets/3cd7d144a61040c7c7ef.js","/trw/levels/chapel.js":"_assets/3cd7d144a61040c7c7ef.js","/levels/chapel.js":"_assets/3cd7d144a61040c7c7ef.js","/chapel.js":"_assets/3cd7d144a61040c7c7ef.js","http://ondras.github.io/trw/css/text.css":"_assets/754afc89197aa7a5b7be.css","/trw/css/text.css":"_assets/754afc89197aa7a5b7be.css","/css/text.css":"_assets/754afc89197aa7a5b7be.css","/text.css":"_assets/754afc89197aa7a5b7be.css","http://ondras.github.io/trw/css/level.css":"_assets/a6436f0bdd70b174225f.css","/trw/css/level.css":"_assets/a6436f0bdd70b174225f.css","/css/level.css":"_assets/a6436f0bdd70b174225f.css","/level.css":"_assets/a6436f0bdd70b174225f.css","http://ondras.github.io/trw/css/intro.css":"_assets/c8d70a96532f1f812ff3.css","/trw/css/intro.css":"_assets/c8d70a96532f1f812ff3.css","/css/intro.css":"_assets/c8d70a96532f1f812ff3.css","/intro.css":"_assets/c8d70a96532f1f812ff3.css"};
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
