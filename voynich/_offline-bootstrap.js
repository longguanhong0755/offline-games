(() => {
  "use strict";
  const RUNTIME_MAP = {"https://tjleing.github.io/Voynich/css/lib/noty.css":"_assets/caf16c75a56b7449af55.css","/Voynich/css/lib/noty.css":"_assets/caf16c75a56b7449af55.css","/css/lib/noty.css":"_assets/caf16c75a56b7449af55.css","/lib/noty.css":"_assets/caf16c75a56b7449af55.css","/noty.css":"_assets/caf16c75a56b7449af55.css","https://tjleing.github.io/Voynich/css/voynich.css":"_assets/cd20e370287777832f9c.css","/Voynich/css/voynich.css":"_assets/cd20e370287777832f9c.css","/css/voynich.css":"_assets/cd20e370287777832f9c.css","/voynich.css":"_assets/cd20e370287777832f9c.css","https://tjleing.github.io/Voynich/js/main.js":"_assets/48d6260231284487b3bf.js","/Voynich/js/main.js":"_assets/48d6260231284487b3bf.js","/js/main.js":"_assets/48d6260231284487b3bf.js","/main.js":"_assets/48d6260231284487b3bf.js","https://tjleing.github.io/Voynich/js/lib/noty.min.js":"_assets/a35f4213bd6e1f036387.js","/Voynich/js/lib/noty.min.js":"_assets/a35f4213bd6e1f036387.js","/js/lib/noty.min.js":"_assets/a35f4213bd6e1f036387.js","/lib/noty.min.js":"_assets/a35f4213bd6e1f036387.js","/noty.min.js":"_assets/a35f4213bd6e1f036387.js","https://tjleing.github.io/Voynich/js/Settings.js":"_assets/c44d1ea749ba160dc01c.js","/Voynich/js/Settings.js":"_assets/c44d1ea749ba160dc01c.js","/js/Settings.js":"_assets/c44d1ea749ba160dc01c.js","/Settings.js":"_assets/c44d1ea749ba160dc01c.js","https://tjleing.github.io/Voynich/js/Utils.js":"_assets/19f86650942b96cbe2c5.js","/Voynich/js/Utils.js":"_assets/19f86650942b96cbe2c5.js","/js/Utils.js":"_assets/19f86650942b96cbe2c5.js","/Utils.js":"_assets/19f86650942b96cbe2c5.js","https://tjleing.github.io/Voynich/js/Game.js":"_assets/d0d17b9efa7dd2f10f7d.js","/Voynich/js/Game.js":"_assets/d0d17b9efa7dd2f10f7d.js","/js/Game.js":"_assets/d0d17b9efa7dd2f10f7d.js","/Game.js":"_assets/d0d17b9efa7dd2f10f7d.js","https://tjleing.github.io/Voynich/js/World.js":"_assets/b77325954112952e98bc.js","/Voynich/js/World.js":"_assets/b77325954112952e98bc.js","/js/World.js":"_assets/b77325954112952e98bc.js","/World.js":"_assets/b77325954112952e98bc.js","https://tjleing.github.io/Voynich/js/PrestigeResource.js":"_assets/e1a21877c45563e628a9.js","/Voynich/js/PrestigeResource.js":"_assets/e1a21877c45563e628a9.js","/js/PrestigeResource.js":"_assets/e1a21877c45563e628a9.js","/PrestigeResource.js":"_assets/e1a21877c45563e628a9.js","https://tjleing.github.io/Voynich/js/configs/WorldConfigs.js":"_assets/961de9dca94330c42b69.js","/Voynich/js/configs/WorldConfigs.js":"_assets/961de9dca94330c42b69.js","/js/configs/WorldConfigs.js":"_assets/961de9dca94330c42b69.js","/configs/WorldConfigs.js":"_assets/961de9dca94330c42b69.js","/WorldConfigs.js":"_assets/961de9dca94330c42b69.js","https://tjleing.github.io/Voynich/js/Achievement.js":"_assets/5d5ce45bff06e983c2c0.js","/Voynich/js/Achievement.js":"_assets/5d5ce45bff06e983c2c0.js","/js/Achievement.js":"_assets/5d5ce45bff06e983c2c0.js","/Achievement.js":"_assets/5d5ce45bff06e983c2c0.js","https://tjleing.github.io/Voynich/js/configs/AchievementConfigs.js":"_assets/fe7aaa460d0b838d1d15.js","/Voynich/js/configs/AchievementConfigs.js":"_assets/fe7aaa460d0b838d1d15.js","/js/configs/AchievementConfigs.js":"_assets/fe7aaa460d0b838d1d15.js","/configs/AchievementConfigs.js":"_assets/fe7aaa460d0b838d1d15.js","/AchievementConfigs.js":"_assets/fe7aaa460d0b838d1d15.js","https://tjleing.github.io/Voynich/js/TabSet.js":"_assets/86af13ecc918f6369b9b.js","/Voynich/js/TabSet.js":"_assets/86af13ecc918f6369b9b.js","/js/TabSet.js":"_assets/86af13ecc918f6369b9b.js","/TabSet.js":"_assets/86af13ecc918f6369b9b.js","https://tjleing.github.io/Voynich/js/Stats.js":"_assets/42e21be221770f9a32ea.js","/Voynich/js/Stats.js":"_assets/42e21be221770f9a32ea.js","/js/Stats.js":"_assets/42e21be221770f9a32ea.js","/Stats.js":"_assets/42e21be221770f9a32ea.js","https://tjleing.github.io/Voynich/js/WorldCreatureSet.js":"_assets/0b42492e4db0ba3030ce.js","/Voynich/js/WorldCreatureSet.js":"_assets/0b42492e4db0ba3030ce.js","/js/WorldCreatureSet.js":"_assets/0b42492e4db0ba3030ce.js","/WorldCreatureSet.js":"_assets/0b42492e4db0ba3030ce.js","https://tjleing.github.io/Voynich/js/WorldResourceSet.js":"_assets/19a181aa3afa68f595c7.js","/Voynich/js/WorldResourceSet.js":"_assets/19a181aa3afa68f595c7.js","/js/WorldResourceSet.js":"_assets/19a181aa3afa68f595c7.js","/WorldResourceSet.js":"_assets/19a181aa3afa68f595c7.js","https://tjleing.github.io/Voynich/js/WorldUpgradeSet.js":"_assets/24455067c6299cecf3b2.js","/Voynich/js/WorldUpgradeSet.js":"_assets/24455067c6299cecf3b2.js","/js/WorldUpgradeSet.js":"_assets/24455067c6299cecf3b2.js","/WorldUpgradeSet.js":"_assets/24455067c6299cecf3b2.js","https://tjleing.github.io/Voynich/js/Tab.js":"_assets/c987d10d8dce0cee94de.js","/Voynich/js/Tab.js":"_assets/c987d10d8dce0cee94de.js","/js/Tab.js":"_assets/c987d10d8dce0cee94de.js","/Tab.js":"_assets/c987d10d8dce0cee94de.js","https://tjleing.github.io/Voynich/js/configs/ResourceConfigs.js":"_assets/cd0f3a24550799a96437.js","/Voynich/js/configs/ResourceConfigs.js":"_assets/cd0f3a24550799a96437.js","/js/configs/ResourceConfigs.js":"_assets/cd0f3a24550799a96437.js","/configs/ResourceConfigs.js":"_assets/cd0f3a24550799a96437.js","/ResourceConfigs.js":"_assets/cd0f3a24550799a96437.js","https://tjleing.github.io/Voynich/js/configs/CreatureConfigs.js":"_assets/86546d9316b16cbe90c2.js","/Voynich/js/configs/CreatureConfigs.js":"_assets/86546d9316b16cbe90c2.js","/js/configs/CreatureConfigs.js":"_assets/86546d9316b16cbe90c2.js","/configs/CreatureConfigs.js":"_assets/86546d9316b16cbe90c2.js","/CreatureConfigs.js":"_assets/86546d9316b16cbe90c2.js","https://tjleing.github.io/Voynich/js/Creature.js":"_assets/d6dd7ec709e97cad7896.js","/Voynich/js/Creature.js":"_assets/d6dd7ec709e97cad7896.js","/js/Creature.js":"_assets/d6dd7ec709e97cad7896.js","/Creature.js":"_assets/d6dd7ec709e97cad7896.js","https://tjleing.github.io/Voynich/js/Resource.js":"_assets/724e7f9d90bb235918e5.js","/Voynich/js/Resource.js":"_assets/724e7f9d90bb235918e5.js","/js/Resource.js":"_assets/724e7f9d90bb235918e5.js","/Resource.js":"_assets/724e7f9d90bb235918e5.js","https://tjleing.github.io/Voynich/js/Upgrade.js":"_assets/b8ef501747be33a11b16.js","/Voynich/js/Upgrade.js":"_assets/b8ef501747be33a11b16.js","/js/Upgrade.js":"_assets/b8ef501747be33a11b16.js","/Upgrade.js":"_assets/b8ef501747be33a11b16.js","https://tjleing.github.io/Voynich/js/configs/UpgradeConfigs.js":"_assets/352888dc978c6aedfe3b.js","/Voynich/js/configs/UpgradeConfigs.js":"_assets/352888dc978c6aedfe3b.js","/js/configs/UpgradeConfigs.js":"_assets/352888dc978c6aedfe3b.js","/configs/UpgradeConfigs.js":"_assets/352888dc978c6aedfe3b.js","/UpgradeConfigs.js":"_assets/352888dc978c6aedfe3b.js"};
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
