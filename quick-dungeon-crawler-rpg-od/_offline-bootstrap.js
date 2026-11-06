(() => {
  "use strict";
  const RUNTIME_MAP = {"https://dungeon.werkstattl.com/assets/css/rpg-awesome.min.css":"_assets/444bf79dabe1e138d5a0.css","/assets/css/rpg-awesome.min.css":"_assets/444bf79dabe1e138d5a0.css","/css/rpg-awesome.min.css":"_assets/444bf79dabe1e138d5a0.css","/rpg-awesome.min.css":"_assets/444bf79dabe1e138d5a0.css","https://dungeon.werkstattl.com/assets/css/all.min.css":"_assets/6752b9ba151a25703b2e.css","/assets/css/all.min.css":"_assets/6752b9ba151a25703b2e.css","/css/all.min.css":"_assets/6752b9ba151a25703b2e.css","/all.min.css":"_assets/6752b9ba151a25703b2e.css","https://dungeon.werkstattl.com/assets/css/style.css":"_assets/d9c0ce63abc04476b624.css","/assets/css/style.css":"_assets/d9c0ce63abc04476b624.css","/css/style.css":"_assets/d9c0ce63abc04476b624.css","/style.css":"_assets/d9c0ce63abc04476b624.css","https://dungeon.werkstattl.com/assets/js/legacy-support.js":"_assets/01461ade92635023afc5.js","/assets/js/legacy-support.js":"_assets/01461ade92635023afc5.js","/js/legacy-support.js":"_assets/01461ade92635023afc5.js","/legacy-support.js":"_assets/01461ade92635023afc5.js","https://dungeon.werkstattl.com/assets/js/howler.min.js":"_assets/736c339444c88baad593.js","/assets/js/howler.min.js":"_assets/736c339444c88baad593.js","/js/howler.min.js":"_assets/736c339444c88baad593.js","/howler.min.js":"_assets/736c339444c88baad593.js","https://dungeon.werkstattl.com/assets/js/progression.js":"_assets/b9e91c0308fb801eaf76.js","/assets/js/progression.js":"_assets/b9e91c0308fb801eaf76.js","/js/progression.js":"_assets/b9e91c0308fb801eaf76.js","/progression.js":"_assets/b9e91c0308fb801eaf76.js","https://dungeon.werkstattl.com/assets/icon/logo.webp":"_assets/b1c58187f7b6ae21ae0e.webp","/assets/icon/logo.webp":"_assets/b1c58187f7b6ae21ae0e.webp","/icon/logo.webp":"_assets/b1c58187f7b6ae21ae0e.webp","/logo.webp":"_assets/b1c58187f7b6ae21ae0e.webp","https://dungeon.werkstattl.com/assets/js/utility.js":"_assets/9e54a9da420c64023da4.js","/assets/js/utility.js":"_assets/9e54a9da420c64023da4.js","/js/utility.js":"_assets/9e54a9da420c64023da4.js","/utility.js":"_assets/9e54a9da420c64023da4.js","https://dungeon.werkstattl.com/assets/js/affixes.js":"_assets/a833a168afc4f116e8fd.js","/assets/js/affixes.js":"_assets/a833a168afc4f116e8fd.js","/js/affixes.js":"_assets/a833a168afc4f116e8fd.js","/affixes.js":"_assets/a833a168afc4f116e8fd.js","https://dungeon.werkstattl.com/assets/js/titles.js":"_assets/21f7e66fff3e2b7a640a.js","/assets/js/titles.js":"_assets/21f7e66fff3e2b7a640a.js","/js/titles.js":"_assets/21f7e66fff3e2b7a640a.js","/titles.js":"_assets/21f7e66fff3e2b7a640a.js","https://dungeon.werkstattl.com/assets/js/music.js":"_assets/00ebc09c8bcb66c7abf4.js","/assets/js/music.js":"_assets/00ebc09c8bcb66c7abf4.js","/js/music.js":"_assets/00ebc09c8bcb66c7abf4.js","/music.js":"_assets/00ebc09c8bcb66c7abf4.js","https://dungeon.werkstattl.com/assets/js/elements.js":"_assets/cffaa8d72701e45c0db6.js","/assets/js/elements.js":"_assets/cffaa8d72701e45c0db6.js","/js/elements.js":"_assets/cffaa8d72701e45c0db6.js","/elements.js":"_assets/cffaa8d72701e45c0db6.js","https://dungeon.werkstattl.com/assets/js/player.js":"_assets/8405979278a272ba4a0f.js","/assets/js/player.js":"_assets/8405979278a272ba4a0f.js","/js/player.js":"_assets/8405979278a272ba4a0f.js","/player.js":"_assets/8405979278a272ba4a0f.js","https://dungeon.werkstattl.com/assets/js/equipment.js":"_assets/f7a96449c843e90baae5.js","/assets/js/equipment.js":"_assets/f7a96449c843e90baae5.js","/js/equipment.js":"_assets/f7a96449c843e90baae5.js","/equipment.js":"_assets/f7a96449c843e90baae5.js","https://dungeon.werkstattl.com/assets/js/forge.js":"_assets/1613f0cb8169b4a2afe7.js","/assets/js/forge.js":"_assets/1613f0cb8169b4a2afe7.js","/js/forge.js":"_assets/1613f0cb8169b4a2afe7.js","/forge.js":"_assets/1613f0cb8169b4a2afe7.js","https://dungeon.werkstattl.com/assets/js/companion.js":"_assets/f82f26dce80dce176dd4.js","/assets/js/companion.js":"_assets/f82f26dce80dce176dd4.js","/js/companion.js":"_assets/f82f26dce80dce176dd4.js","/companion.js":"_assets/f82f26dce80dce176dd4.js","https://dungeon.werkstattl.com/assets/js/screen-wake-lock.js":"_assets/92efcf595b0548fb3be7.js","/assets/js/screen-wake-lock.js":"_assets/92efcf595b0548fb3be7.js","/js/screen-wake-lock.js":"_assets/92efcf595b0548fb3be7.js","/screen-wake-lock.js":"_assets/92efcf595b0548fb3be7.js","https://dungeon.werkstattl.com/assets/js/automode.js":"_assets/283c7543edf5b8f1fddf.js","/assets/js/automode.js":"_assets/283c7543edf5b8f1fddf.js","/js/automode.js":"_assets/283c7543edf5b8f1fddf.js","/automode.js":"_assets/283c7543edf5b8f1fddf.js","https://dungeon.werkstattl.com/assets/js/combat.js":"_assets/2b07afdf6bb289f10535.js","/assets/js/combat.js":"_assets/2b07afdf6bb289f10535.js","/js/combat.js":"_assets/2b07afdf6bb289f10535.js","/combat.js":"_assets/2b07afdf6bb289f10535.js","https://dungeon.werkstattl.com/assets/js/dungeon.js":"_assets/83b915ec04b67d913143.js","/assets/js/dungeon.js":"_assets/83b915ec04b67d913143.js","/js/dungeon.js":"_assets/83b915ec04b67d913143.js","/dungeon.js":"_assets/83b915ec04b67d913143.js","https://dungeon.werkstattl.com/assets/js/language.js":"_assets/b9a14556aaf83feb8bb8.js","/assets/js/language.js":"_assets/b9a14556aaf83feb8bb8.js","/js/language.js":"_assets/b9a14556aaf83feb8bb8.js","/language.js":"_assets/b9a14556aaf83feb8bb8.js","https://dungeon.werkstattl.com/assets/js/main.js":"_assets/1904d6b957c8e6640d7a.js","/assets/js/main.js":"_assets/1904d6b957c8e6640d7a.js","/js/main.js":"_assets/1904d6b957c8e6640d7a.js","/main.js":"_assets/1904d6b957c8e6640d7a.js","https://dungeon.werkstattl.com/assets/js/enemy.js":"_assets/6e2e1d07eb5352742fc9.js","/assets/js/enemy.js":"_assets/6e2e1d07eb5352742fc9.js","/js/enemy.js":"_assets/6e2e1d07eb5352742fc9.js","/enemy.js":"_assets/6e2e1d07eb5352742fc9.js","https://dungeon.werkstattl.com/assets/js/bestiary.js":"_assets/59ca8554e56493cee820.js","/assets/js/bestiary.js":"_assets/59ca8554e56493cee820.js","/js/bestiary.js":"_assets/59ca8554e56493cee820.js","/bestiary.js":"_assets/59ca8554e56493cee820.js","https://dungeon.werkstattl.com/assets/js/native.js":"_assets/5c658859a556b21751c1.js","/assets/js/native.js":"_assets/5c658859a556b21751c1.js","/js/native.js":"_assets/5c658859a556b21751c1.js","/native.js":"_assets/5c658859a556b21751c1.js","https://dungeon.werkstattl.com/assets/locales/en.json":"_assets/cf8aa2fd2c5b2bf026ca.json","/assets/locales/en.json":"_assets/cf8aa2fd2c5b2bf026ca.json","/locales/en.json":"_assets/cf8aa2fd2c5b2bf026ca.json","/en.json":"_assets/cf8aa2fd2c5b2bf026ca.json","https://dungeon.werkstattl.com/assets/bgm/dungeon.webm":"_assets/37a54f10f2a3ae7c0ece.webm","/assets/bgm/dungeon.webm":"_assets/37a54f10f2a3ae7c0ece.webm","/bgm/dungeon.webm":"_assets/37a54f10f2a3ae7c0ece.webm","/dungeon.webm":"_assets/37a54f10f2a3ae7c0ece.webm","https://dungeon.werkstattl.com/assets/sfx/equip.webm":"_assets/c99cb7bc318da028d27e.webm","/assets/sfx/equip.webm":"_assets/c99cb7bc318da028d27e.webm","/sfx/equip.webm":"_assets/c99cb7bc318da028d27e.webm","/equip.webm":"_assets/c99cb7bc318da028d27e.webm","https://dungeon.werkstattl.com/assets/sfx/decline.webm":"_assets/fcc92488683662011e4d.webm","/assets/sfx/decline.webm":"_assets/fcc92488683662011e4d.webm","/sfx/decline.webm":"_assets/fcc92488683662011e4d.webm","/decline.webm":"_assets/fcc92488683662011e4d.webm","https://dungeon.werkstattl.com/assets/sfx/combat_end.webm":"_assets/8036a99276cda5556aac.webm","/assets/sfx/combat_end.webm":"_assets/8036a99276cda5556aac.webm","/sfx/combat_end.webm":"_assets/8036a99276cda5556aac.webm","/combat_end.webm":"_assets/8036a99276cda5556aac.webm","https://dungeon.werkstattl.com/assets/sfx/attack.webm":"_assets/0bbf6675caac0a19c863.webm","/assets/sfx/attack.webm":"_assets/0bbf6675caac0a19c863.webm","/sfx/attack.webm":"_assets/0bbf6675caac0a19c863.webm","/attack.webm":"_assets/0bbf6675caac0a19c863.webm","https://dungeon.werkstattl.com/assets/sfx/unequip.webm":"_assets/9b35cba42537da0d4e57.webm","/assets/sfx/unequip.webm":"_assets/9b35cba42537da0d4e57.webm","/sfx/unequip.webm":"_assets/9b35cba42537da0d4e57.webm","/unequip.webm":"_assets/9b35cba42537da0d4e57.webm","https://dungeon.werkstattl.com/assets/sfx/denied.webm":"_assets/898bf4cc7261ef0dd325.webm","/assets/sfx/denied.webm":"_assets/898bf4cc7261ef0dd325.webm","/sfx/denied.webm":"_assets/898bf4cc7261ef0dd325.webm","/denied.webm":"_assets/898bf4cc7261ef0dd325.webm","https://dungeon.werkstattl.com/assets/sfx/item_use.webm":"_assets/19d82229708655ce5a0f.webm","/assets/sfx/item_use.webm":"_assets/19d82229708655ce5a0f.webm","/sfx/item_use.webm":"_assets/19d82229708655ce5a0f.webm","/item_use.webm":"_assets/19d82229708655ce5a0f.webm","https://dungeon.werkstattl.com/assets/sfx/buff.webm":"_assets/451052e385ed949b69d1.webm","/assets/sfx/buff.webm":"_assets/451052e385ed949b69d1.webm","/sfx/buff.webm":"_assets/451052e385ed949b69d1.webm","/buff.webm":"_assets/451052e385ed949b69d1.webm","https://dungeon.werkstattl.com/assets/sfx/sell.webm":"_assets/9d66267f37a6d30a2238.webm","/assets/sfx/sell.webm":"_assets/9d66267f37a6d30a2238.webm","/sfx/sell.webm":"_assets/9d66267f37a6d30a2238.webm","/sell.webm":"_assets/9d66267f37a6d30a2238.webm","https://dungeon.werkstattl.com/assets/sfx/pause.webm":"_assets/8e24e20d63cecdcfe240.webm","/assets/sfx/pause.webm":"_assets/8e24e20d63cecdcfe240.webm","/sfx/pause.webm":"_assets/8e24e20d63cecdcfe240.webm","/pause.webm":"_assets/8e24e20d63cecdcfe240.webm","https://dungeon.werkstattl.com/assets/sfx/confirm.webm":"_assets/78a836b2f31b0e9e42bf.webm","/assets/sfx/confirm.webm":"_assets/78a836b2f31b0e9e42bf.webm","/sfx/confirm.webm":"_assets/78a836b2f31b0e9e42bf.webm","/confirm.webm":"_assets/78a836b2f31b0e9e42bf.webm","https://dungeon.werkstattl.com/assets/sfx/encounter.webm":"_assets/49085650d20e007e70c2.webm","/assets/sfx/encounter.webm":"_assets/49085650d20e007e70c2.webm","/sfx/encounter.webm":"_assets/49085650d20e007e70c2.webm","/encounter.webm":"_assets/49085650d20e007e70c2.webm","https://dungeon.werkstattl.com/assets/locales/zh.json":"_assets/f2bd97f36563c221482b.json","/assets/locales/zh.json":"_assets/f2bd97f36563c221482b.json","/locales/zh.json":"_assets/f2bd97f36563c221482b.json","/zh.json":"_assets/f2bd97f36563c221482b.json","https://dungeon.werkstattl.com/assets/sfx/unpause.webm":"_assets/1565aa9bee8c05fbc04b.webm","/assets/sfx/unpause.webm":"_assets/1565aa9bee8c05fbc04b.webm","/sfx/unpause.webm":"_assets/1565aa9bee8c05fbc04b.webm","/unpause.webm":"_assets/1565aa9bee8c05fbc04b.webm","https://dungeon.werkstattl.com/assets/sfx/hover.webm":"_assets/b00e88bba7334186df0c.webm","/assets/sfx/hover.webm":"_assets/b00e88bba7334186df0c.webm","/sfx/hover.webm":"_assets/b00e88bba7334186df0c.webm","/hover.webm":"_assets/b00e88bba7334186df0c.webm","https://dungeon.werkstattl.com/assets/fonts/GermaniaOne-Regular.ttf":"_assets/08e25987528001cb8067.ttf","/assets/fonts/GermaniaOne-Regular.ttf":"_assets/08e25987528001cb8067.ttf","/fonts/GermaniaOne-Regular.ttf":"_assets/08e25987528001cb8067.ttf","/GermaniaOne-Regular.ttf":"_assets/08e25987528001cb8067.ttf","https://dungeon.werkstattl.com/assets/sfx/level_up.webm":"_assets/5b6ef818c3c2df0073b4.webm","/assets/sfx/level_up.webm":"_assets/5b6ef818c3c2df0073b4.webm","/sfx/level_up.webm":"_assets/5b6ef818c3c2df0073b4.webm","/level_up.webm":"_assets/5b6ef818c3c2df0073b4.webm","https://dungeon.werkstattl.com/assets/bgm/battle_main.webm":"_assets/11c5d413a7d57d4332b3.webm","/assets/bgm/battle_main.webm":"_assets/11c5d413a7d57d4332b3.webm","/bgm/battle_main.webm":"_assets/11c5d413a7d57d4332b3.webm","/battle_main.webm":"_assets/11c5d413a7d57d4332b3.webm","https://dungeon.werkstattl.com/assets/bgm/battle_boss.webm":"_assets/5dd4b1ca74268d5bba84.webm","/assets/bgm/battle_boss.webm":"_assets/5dd4b1ca74268d5bba84.webm","/bgm/battle_boss.webm":"_assets/5dd4b1ca74268d5bba84.webm","/battle_boss.webm":"_assets/5dd4b1ca74268d5bba84.webm"};
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
