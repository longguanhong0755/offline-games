(() => {
  "use strict";
  const RUNTIME_MAP = {"https://candybox2.github.io/candybox/scripts/htmlInteraction.js":"_assets/70b88cbb1a958fc2c5ad.js","/candybox/scripts/htmlInteraction.js":"_assets/70b88cbb1a958fc2c5ad.js","/scripts/htmlInteraction.js":"_assets/70b88cbb1a958fc2c5ad.js","/htmlInteraction.js":"_assets/70b88cbb1a958fc2c5ad.js","https://candybox2.github.io/candybox/libs/jquery-2.1.3.min.js":"_assets/2051d61446d4dbffb037.js","/candybox/libs/jquery-2.1.3.min.js":"_assets/2051d61446d4dbffb037.js","/libs/jquery-2.1.3.min.js":"_assets/2051d61446d4dbffb037.js","/jquery-2.1.3.min.js":"_assets/2051d61446d4dbffb037.js","https://candybox2.github.io/candybox/scripts/base_js_additions.js":"_assets/82eeaf47fe1f5d17f21e.js","/candybox/scripts/base_js_additions.js":"_assets/82eeaf47fe1f5d17f21e.js","/scripts/base_js_additions.js":"_assets/82eeaf47fe1f5d17f21e.js","/base_js_additions.js":"_assets/82eeaf47fe1f5d17f21e.js","https://candybox2.github.io/candybox/scripts/random.js":"_assets/25f2f1e6177f39c4b3ce.js","/candybox/scripts/random.js":"_assets/25f2f1e6177f39c4b3ce.js","/scripts/random.js":"_assets/25f2f1e6177f39c4b3ce.js","/random.js":"_assets/25f2f1e6177f39c4b3ce.js","https://candybox2.github.io/candybox/scripts/speech.js":"_assets/01e7cf2a7c23b67dd33f.js","/candybox/scripts/speech.js":"_assets/01e7cf2a7c23b67dd33f.js","/scripts/speech.js":"_assets/01e7cf2a7c23b67dd33f.js","/speech.js":"_assets/01e7cf2a7c23b67dd33f.js","https://candybox2.github.io/candybox/scripts/buttons.js":"_assets/ea254446c5d1009e627b.js","/candybox/scripts/buttons.js":"_assets/ea254446c5d1009e627b.js","/scripts/buttons.js":"_assets/ea254446c5d1009e627b.js","/buttons.js":"_assets/ea254446c5d1009e627b.js","https://candybox2.github.io/candybox/scripts/tabs.js":"_assets/1c64d309448b4c3a7ea7.js","/candybox/scripts/tabs.js":"_assets/1c64d309448b4c3a7ea7.js","/scripts/tabs.js":"_assets/1c64d309448b4c3a7ea7.js","/tabs.js":"_assets/1c64d309448b4c3a7ea7.js","https://candybox2.github.io/candybox/scripts/damage.js":"_assets/1584c4041fada0f2cd59.js","/candybox/scripts/damage.js":"_assets/1584c4041fada0f2cd59.js","/scripts/damage.js":"_assets/1584c4041fada0f2cd59.js","/damage.js":"_assets/1584c4041fada0f2cd59.js","https://candybox2.github.io/candybox/scripts/land.js":"_assets/ee7aca94cf3ab06dc567.js","/candybox/scripts/land.js":"_assets/ee7aca94cf3ab06dc567.js","/scripts/land.js":"_assets/ee7aca94cf3ab06dc567.js","/land.js":"_assets/ee7aca94cf3ab06dc567.js","https://candybox2.github.io/candybox/scripts/sword.js":"_assets/3aff99ea3edc9ceb6ca0.js","/candybox/scripts/sword.js":"_assets/3aff99ea3edc9ceb6ca0.js","/scripts/sword.js":"_assets/3aff99ea3edc9ceb6ca0.js","/sword.js":"_assets/3aff99ea3edc9ceb6ca0.js","https://candybox2.github.io/candybox/scripts/shop.js":"_assets/cbf3c67e28da702637d8.js","/candybox/scripts/shop.js":"_assets/cbf3c67e28da702637d8.js","/scripts/shop.js":"_assets/cbf3c67e28da702637d8.js","/shop.js":"_assets/cbf3c67e28da702637d8.js","https://candybox2.github.io/candybox/scripts/quest.js":"_assets/0fc978a31616dfce6818.js","/candybox/scripts/quest.js":"_assets/0fc978a31616dfce6818.js","/scripts/quest.js":"_assets/0fc978a31616dfce6818.js","/quest.js":"_assets/0fc978a31616dfce6818.js","https://candybox2.github.io/candybox/scripts/status.js":"_assets/4a59364566c40eb9d8de.js","/candybox/scripts/status.js":"_assets/4a59364566c40eb9d8de.js","/scripts/status.js":"_assets/4a59364566c40eb9d8de.js","/status.js":"_assets/4a59364566c40eb9d8de.js","https://candybox2.github.io/candybox/scripts/mountGoblin.js":"_assets/dd72af7a583c3b5eee1b.js","/candybox/scripts/mountGoblin.js":"_assets/dd72af7a583c3b5eee1b.js","/scripts/mountGoblin.js":"_assets/dd72af7a583c3b5eee1b.js","/mountGoblin.js":"_assets/dd72af7a583c3b5eee1b.js","https://candybox2.github.io/candybox/scripts/drops.js":"_assets/a5c60fb140b697fda3f4.js","/candybox/scripts/drops.js":"_assets/a5c60fb140b697fda3f4.js","/scripts/drops.js":"_assets/a5c60fb140b697fda3f4.js","/drops.js":"_assets/a5c60fb140b697fda3f4.js","https://candybox2.github.io/candybox/scripts/peacefulForest.js":"_assets/0582c7283a3b048f123a.js","/candybox/scripts/peacefulForest.js":"_assets/0582c7283a3b048f123a.js","/scripts/peacefulForest.js":"_assets/0582c7283a3b048f123a.js","/peacefulForest.js":"_assets/0582c7283a3b048f123a.js","https://candybox2.github.io/candybox/scripts/inventory.js":"_assets/21197835b5c9ba4429b1.js","/candybox/scripts/inventory.js":"_assets/21197835b5c9ba4429b1.js","/scripts/inventory.js":"_assets/21197835b5c9ba4429b1.js","/inventory.js":"_assets/21197835b5c9ba4429b1.js","https://candybox2.github.io/candybox/scripts/castleEntrance.js":"_assets/f6b9ae1fb4c1fbf1f909.js","/candybox/scripts/castleEntrance.js":"_assets/f6b9ae1fb4c1fbf1f909.js","/scripts/castleEntrance.js":"_assets/f6b9ae1fb4c1fbf1f909.js","/castleEntrance.js":"_assets/f6b9ae1fb4c1fbf1f909.js","https://candybox2.github.io/candybox/scripts/underwaterCave.js":"_assets/1ea4b77149964745b72d.js","/candybox/scripts/underwaterCave.js":"_assets/1ea4b77149964745b72d.js","/scripts/underwaterCave.js":"_assets/1ea4b77149964745b72d.js","/underwaterCave.js":"_assets/1ea4b77149964745b72d.js","https://candybox2.github.io/candybox/scripts/castleStairs.js":"_assets/26f4482c26f76a7224b3.js","/candybox/scripts/castleStairs.js":"_assets/26f4482c26f76a7224b3.js","/scripts/castleStairs.js":"_assets/26f4482c26f76a7224b3.js","/castleStairs.js":"_assets/26f4482c26f76a7224b3.js","https://candybox2.github.io/candybox/scripts/cowLevel.js":"_assets/7ca43ccb7abf9652278c.js","/candybox/scripts/cowLevel.js":"_assets/7ca43ccb7abf9652278c.js","/scripts/cowLevel.js":"_assets/7ca43ccb7abf9652278c.js","/cowLevel.js":"_assets/7ca43ccb7abf9652278c.js","https://candybox2.github.io/candybox/scripts/sea.js":"_assets/2bfe89efc8965244bd64.js","/candybox/scripts/sea.js":"_assets/2bfe89efc8965244bd64.js","/scripts/sea.js":"_assets/2bfe89efc8965244bd64.js","/sea.js":"_assets/2bfe89efc8965244bd64.js","https://candybox2.github.io/candybox/scripts/castleKeep.js":"_assets/51edd46305b092596858.js","/candybox/scripts/castleKeep.js":"_assets/51edd46305b092596858.js","/scripts/castleKeep.js":"_assets/51edd46305b092596858.js","/castleKeep.js":"_assets/51edd46305b092596858.js","https://candybox2.github.io/candybox/scripts/hell.js":"_assets/fd608094e9fba3997437.js","/candybox/scripts/hell.js":"_assets/fd608094e9fba3997437.js","/scripts/hell.js":"_assets/fd608094e9fba3997437.js","/hell.js":"_assets/fd608094e9fba3997437.js","https://candybox2.github.io/candybox/scripts/yourself.js":"_assets/9911f4a97f7e6accbfb4.js","/candybox/scripts/yourself.js":"_assets/9911f4a97f7e6accbfb4.js","/scripts/yourself.js":"_assets/9911f4a97f7e6accbfb4.js","/yourself.js":"_assets/9911f4a97f7e6accbfb4.js","https://candybox2.github.io/candybox/scripts/developperGarden.js":"_assets/d1464d239dfef2ff6a9b.js","/candybox/scripts/developperGarden.js":"_assets/d1464d239dfef2ff6a9b.js","/scripts/developperGarden.js":"_assets/d1464d239dfef2ff6a9b.js","/developperGarden.js":"_assets/d1464d239dfef2ff6a9b.js","https://candybox2.github.io/candybox/scripts/chuckNorris.js":"_assets/16ccadb2cd96c71666fb.js","/candybox/scripts/chuckNorris.js":"_assets/16ccadb2cd96c71666fb.js","/scripts/chuckNorris.js":"_assets/16ccadb2cd96c71666fb.js","/chuckNorris.js":"_assets/16ccadb2cd96c71666fb.js","https://candybox2.github.io/candybox/scripts/desert.js":"_assets/78fbb914ee470da81503.js","/candybox/scripts/desert.js":"_assets/78fbb914ee470da81503.js","/scripts/desert.js":"_assets/78fbb914ee470da81503.js","/desert.js":"_assets/78fbb914ee470da81503.js","https://candybox2.github.io/candybox/scripts/developperMoat.js":"_assets/5bc55e7612b45812f7b7.js","/candybox/scripts/developperMoat.js":"_assets/5bc55e7612b45812f7b7.js","/scripts/developperMoat.js":"_assets/5bc55e7612b45812f7b7.js","/developperMoat.js":"_assets/5bc55e7612b45812f7b7.js","https://candybox2.github.io/candybox/scripts/potions.js":"_assets/2c67cc537eae009e825f.js","/candybox/scripts/potions.js":"_assets/2c67cc537eae009e825f.js","/scripts/potions.js":"_assets/2c67cc537eae009e825f.js","/potions.js":"_assets/2c67cc537eae009e825f.js","https://candybox2.github.io/candybox/scripts/developperComputer.js":"_assets/992e46321cc777ab631b.js","/candybox/scripts/developperComputer.js":"_assets/992e46321cc777ab631b.js","/scripts/developperComputer.js":"_assets/992e46321cc777ab631b.js","/developperComputer.js":"_assets/992e46321cc777ab631b.js","https://candybox2.github.io/candybox/scripts/candies.js":"_assets/4ae34cfaebcd28f0b3de.js","/candybox/scripts/candies.js":"_assets/4ae34cfaebcd28f0b3de.js","/scripts/candies.js":"_assets/4ae34cfaebcd28f0b3de.js","/candies.js":"_assets/4ae34cfaebcd28f0b3de.js","https://candybox2.github.io/candybox/scripts/chocolateBars.js":"_assets/33d20da44dadd99652c9.js","/candybox/scripts/chocolateBars.js":"_assets/33d20da44dadd99652c9.js","/scripts/chocolateBars.js":"_assets/33d20da44dadd99652c9.js","/chocolateBars.js":"_assets/33d20da44dadd99652c9.js","https://candybox2.github.io/candybox/scripts/lollipops.js":"_assets/bfbb176897d16621fbaf.js","/candybox/scripts/lollipops.js":"_assets/bfbb176897d16621fbaf.js","/scripts/lollipops.js":"_assets/bfbb176897d16621fbaf.js","/lollipops.js":"_assets/bfbb176897d16621fbaf.js","https://candybox2.github.io/candybox/scripts/farm.js":"_assets/5bdf7de0be6e747364d2.js","/candybox/scripts/farm.js":"_assets/5bdf7de0be6e747364d2.js","/scripts/farm.js":"_assets/5bdf7de0be6e747364d2.js","/farm.js":"_assets/5bdf7de0be6e747364d2.js","https://candybox2.github.io/candybox/scripts/spells.js":"_assets/8c20119cdd2872823f45.js","/candybox/scripts/spells.js":"_assets/8c20119cdd2872823f45.js","/scripts/spells.js":"_assets/8c20119cdd2872823f45.js","/spells.js":"_assets/8c20119cdd2872823f45.js","https://candybox2.github.io/candybox/scripts/objects.js":"_assets/d178b45cbd6169c7f7ba.js","/candybox/scripts/objects.js":"_assets/d178b45cbd6169c7f7ba.js","/scripts/objects.js":"_assets/d178b45cbd6169c7f7ba.js","/objects.js":"_assets/d178b45cbd6169c7f7ba.js","https://candybox2.github.io/candybox/scripts/swamp.js":"_assets/988a5fb4da0d487ce0e1.js","/candybox/scripts/swamp.js":"_assets/988a5fb4da0d487ce0e1.js","/scripts/swamp.js":"_assets/988a5fb4da0d487ce0e1.js","/swamp.js":"_assets/988a5fb4da0d487ce0e1.js","https://candybox2.github.io/candybox/scripts/wishingWell.js":"_assets/d44df0a395ee88715380.js","/candybox/scripts/wishingWell.js":"_assets/d44df0a395ee88715380.js","/scripts/wishingWell.js":"_assets/d44df0a395ee88715380.js","/wishingWell.js":"_assets/d44df0a395ee88715380.js","https://candybox2.github.io/candybox/scripts/save.js":"_assets/16a7b931bb05ec3c7422.js","/candybox/scripts/save.js":"_assets/16a7b931bb05ec3c7422.js","/scripts/save.js":"_assets/16a7b931bb05ec3c7422.js","/save.js":"_assets/16a7b931bb05ec3c7422.js","https://candybox2.github.io/candybox/scripts/hut.js":"_assets/36670015dd7cc939ba6c.js","/candybox/scripts/hut.js":"_assets/36670015dd7cc939ba6c.js","/scripts/hut.js":"_assets/36670015dd7cc939ba6c.js","/hut.js":"_assets/36670015dd7cc939ba6c.js","https://candybox2.github.io/candybox/libs/modernizr.js":"_assets/ff37506c8b9cb362d85f.js","/candybox/libs/modernizr.js":"_assets/ff37506c8b9cb362d85f.js","/libs/modernizr.js":"_assets/ff37506c8b9cb362d85f.js","/modernizr.js":"_assets/ff37506c8b9cb362d85f.js","https://candybox2.github.io/candybox/scripts/forge.js":"_assets/ba03c597748b3cbcd929.js","/candybox/scripts/forge.js":"_assets/ba03c597748b3cbcd929.js","/scripts/forge.js":"_assets/ba03c597748b3cbcd929.js","/forge.js":"_assets/ba03c597748b3cbcd929.js","https://candybox2.github.io/candybox/scripts/load.js":"_assets/3de39aa0aba5b75d1eb4.js","/candybox/scripts/load.js":"_assets/3de39aa0aba5b75d1eb4.js","/scripts/load.js":"_assets/3de39aa0aba5b75d1eb4.js","/load.js":"_assets/3de39aa0aba5b75d1eb4.js","https://candybox2.github.io/candybox/scripts/cauldron.js":"_assets/b1d95d72ba47b2da26ac.js","/candybox/scripts/cauldron.js":"_assets/b1d95d72ba47b2da26ac.js","/scripts/cauldron.js":"_assets/b1d95d72ba47b2da26ac.js","/cauldron.js":"_assets/b1d95d72ba47b2da26ac.js","https://candybox2.github.io/candybox/scripts/darkMode.js":"_assets/88da868b1638f3eaeb29.js","/candybox/scripts/darkMode.js":"_assets/88da868b1638f3eaeb29.js","/scripts/darkMode.js":"_assets/88da868b1638f3eaeb29.js","/darkMode.js":"_assets/88da868b1638f3eaeb29.js","https://candybox2.github.io/candybox/scripts/cookie.js":"_assets/4142622983222dacfb33.js","/candybox/scripts/cookie.js":"_assets/4142622983222dacfb33.js","/scripts/cookie.js":"_assets/4142622983222dacfb33.js","/cookie.js":"_assets/4142622983222dacfb33.js","https://candybox2.github.io/candybox/scripts/candiesConverter.js":"_assets/8b775cbb35dfba790076.js","/candybox/scripts/candiesConverter.js":"_assets/8b775cbb35dfba790076.js","/scripts/candiesConverter.js":"_assets/8b775cbb35dfba790076.js","/candiesConverter.js":"_assets/8b775cbb35dfba790076.js","https://candybox2.github.io/candybox/scripts/main.js":"_assets/0f99a3b46cbc41d57bcb.js","/candybox/scripts/main.js":"_assets/0f99a3b46cbc41d57bcb.js","/scripts/main.js":"_assets/0f99a3b46cbc41d57bcb.js","/main.js":"_assets/0f99a3b46cbc41d57bcb.js","https://candybox2.github.io/candybox/scripts/computer.js":"_assets/22d0605eb8a888d6ff0b.js","/candybox/scripts/computer.js":"_assets/22d0605eb8a888d6ff0b.js","/scripts/computer.js":"_assets/22d0605eb8a888d6ff0b.js","/computer.js":"_assets/22d0605eb8a888d6ff0b.js","https://candybox2.github.io/candybox/libs/FileSaver.js":"_assets/5d4bed959c0593fb0e5a.js","/candybox/libs/FileSaver.js":"_assets/5d4bed959c0593fb0e5a.js","/libs/FileSaver.js":"_assets/5d4bed959c0593fb0e5a.js","/FileSaver.js":"_assets/5d4bed959c0593fb0e5a.js","https://candybox2.github.io/candybox/design.css":"_assets/d9b1a10c2f420919992d.css","/candybox/design.css":"_assets/d9b1a10c2f420919992d.css","/design.css":"_assets/d9b1a10c2f420919992d.css"};
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
