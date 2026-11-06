(() => {
  "use strict";
  const RUNTIME_MAP = {"http://structure.zefiris.su/import/lz-string.min.js":"_assets/4c09d32507760252ea4f.js","/import/lz-string.min.js":"_assets/4c09d32507760252ea4f.js","/lz-string.min.js":"_assets/4c09d32507760252ea4f.js","http://structure.zefiris.su/data/data-story.js":"_assets/73dc0fdda24c3325da54.js","/data/data-story.js":"_assets/73dc0fdda24c3325da54.js","/data-story.js":"_assets/73dc0fdda24c3325da54.js","http://structure.zefiris.su/data/data-skills.js":"_assets/ea7e5ab889a5b64d9f89.js","/data/data-skills.js":"_assets/ea7e5ab889a5b64d9f89.js","/data-skills.js":"_assets/ea7e5ab889a5b64d9f89.js","http://structure.zefiris.su/import/forge-sha256.min.js":"_assets/d515a0b1b14b1aa27531.js","/import/forge-sha256.min.js":"_assets/d515a0b1b14b1aa27531.js","/forge-sha256.min.js":"_assets/d515a0b1b14b1aa27531.js","http://structure.zefiris.su/data/data-themes.js":"_assets/c11f71358556dcc9112b.js","/data/data-themes.js":"_assets/c11f71358556dcc9112b.js","/data-themes.js":"_assets/c11f71358556dcc9112b.js","http://structure.zefiris.su/data/data-buildings.js":"_assets/6da14947a602e551046c.js","/data/data-buildings.js":"_assets/6da14947a602e551046c.js","/data-buildings.js":"_assets/6da14947a602e551046c.js","http://structure.zefiris.su/data/data-settings.js":"_assets/1aace6b28502ac6be17b.js","/data/data-settings.js":"_assets/1aace6b28502ac6be17b.js","/data-settings.js":"_assets/1aace6b28502ac6be17b.js","http://structure.zefiris.su/data/data-artifacts.js":"_assets/90b612a39fb2b06aaa27.js","/data/data-artifacts.js":"_assets/90b612a39fb2b06aaa27.js","/data-artifacts.js":"_assets/90b612a39fb2b06aaa27.js","http://structure.zefiris.su/data/data-guide.js":"_assets/02862eb321741e7425bf.js","/data/data-guide.js":"_assets/02862eb321741e7425bf.js","/data-guide.js":"_assets/02862eb321741e7425bf.js","http://structure.zefiris.su/data/data-worldcore.js":"_assets/7fe51e326bd85c829010.js","/data/data-worldcore.js":"_assets/7fe51e326bd85c829010.js","/data-worldcore.js":"_assets/7fe51e326bd85c829010.js","http://structure.zefiris.su/data/data-world.js":"_assets/d28a5918e511c9a40366.js","/data/data-world.js":"_assets/d28a5918e511c9a40366.js","/data-world.js":"_assets/d28a5918e511c9a40366.js","http://structure.zefiris.su/data/data-spells.js":"_assets/5f317d01a197ef20d3f8.js","/data/data-spells.js":"_assets/5f317d01a197ef20d3f8.js","/data-spells.js":"_assets/5f317d01a197ef20d3f8.js","http://structure.zefiris.su/utility/animations.js":"_assets/e9bb8f8e9fd541ab0cb1.js","/utility/animations.js":"_assets/e9bb8f8e9fd541ab0cb1.js","/animations.js":"_assets/e9bb8f8e9fd541ab0cb1.js","http://structure.zefiris.su/utility/savecompress.js":"_assets/50a3a355e842d1dcb22b.js","/utility/savecompress.js":"_assets/50a3a355e842d1dcb22b.js","/savecompress.js":"_assets/50a3a355e842d1dcb22b.js","http://structure.zefiris.su/utility/viewport.js":"_assets/56301face3622194671e.js","/utility/viewport.js":"_assets/56301face3622194671e.js","/viewport.js":"_assets/56301face3622194671e.js","http://structure.zefiris.su/utility/utility.js":"_assets/f2f7efa3dc030ef8dfda.js","/utility/utility.js":"_assets/f2f7efa3dc030ef8dfda.js","/utility.js":"_assets/f2f7efa3dc030ef8dfda.js","http://structure.zefiris.su/res/game.css":"_assets/b79977f112320cbb785e.css","/res/game.css":"_assets/b79977f112320cbb785e.css","/game.css":"_assets/b79977f112320cbb785e.css","http://structure.zefiris.su/engine/artifacts.js":"_assets/a1d077d2ffa7a2b49da7.js","/engine/artifacts.js":"_assets/a1d077d2ffa7a2b49da7.js","/artifacts.js":"_assets/a1d077d2ffa7a2b49da7.js","http://structure.zefiris.su/utility/mouse.js":"_assets/8daeb06e3099c50dcc8a.js","/utility/mouse.js":"_assets/8daeb06e3099c50dcc8a.js","/mouse.js":"_assets/8daeb06e3099c50dcc8a.js","http://structure.zefiris.su/utility/saves.js":"_assets/829c73a5e0db51b81e07.js","/utility/saves.js":"_assets/829c73a5e0db51b81e07.js","/saves.js":"_assets/829c73a5e0db51b81e07.js","http://structure.zefiris.su/data/data-feats.js":"_assets/2b5b6dab003beea20e35.js","/data/data-feats.js":"_assets/2b5b6dab003beea20e35.js","/data-feats.js":"_assets/2b5b6dab003beea20e35.js","http://structure.zefiris.su/engine/world.js":"_assets/d6b682bdba6e6d97648d.js","/engine/world.js":"_assets/d6b682bdba6e6d97648d.js","/world.js":"_assets/d6b682bdba6e6d97648d.js","http://structure.zefiris.su/engine/slider.js":"_assets/a32b2ddc03456cb76656.js","/engine/slider.js":"_assets/a32b2ddc03456cb76656.js","/slider.js":"_assets/a32b2ddc03456cb76656.js","http://structure.zefiris.su/engine/map.js":"_assets/3627451f31962fbd8ea7.js","/engine/map.js":"_assets/3627451f31962fbd8ea7.js","/map.js":"_assets/3627451f31962fbd8ea7.js","http://structure.zefiris.su/engine/core.js":"_assets/1b44a708a8e05e6282b7.js","/engine/core.js":"_assets/1b44a708a8e05e6282b7.js","/core.js":"_assets/1b44a708a8e05e6282b7.js","http://structure.zefiris.su/engine/point.js":"_assets/05351a268405ab722dca.js","/engine/point.js":"_assets/05351a268405ab722dca.js","/point.js":"_assets/05351a268405ab722dca.js","http://structure.zefiris.su/engine/pulse.js":"_assets/a9ebf42130baff454c19.js","/engine/pulse.js":"_assets/a9ebf42130baff454c19.js","/pulse.js":"_assets/a9ebf42130baff454c19.js","http://structure.zefiris.su/gui/gui-map.js":"_assets/6c3df0848820ca9dabd5.js","/gui/gui-map.js":"_assets/6c3df0848820ca9dabd5.js","/gui-map.js":"_assets/6c3df0848820ca9dabd5.js","http://structure.zefiris.su/gui/gui-artifacts.js":"_assets/c903a1fe8584459e8c9f.js","/gui/gui-artifacts.js":"_assets/c903a1fe8584459e8c9f.js","/gui-artifacts.js":"_assets/c903a1fe8584459e8c9f.js","http://structure.zefiris.su/gui/gui-elements.js":"_assets/2468bc875d59f3662892.js","/gui/gui-elements.js":"_assets/2468bc875d59f3662892.js","/gui-elements.js":"_assets/2468bc875d59f3662892.js","http://structure.zefiris.su/gui/gui-stardust.js":"_assets/c295252e34106d18bfb3.js","/gui/gui-stardust.js":"_assets/c295252e34106d18bfb3.js","/gui-stardust.js":"_assets/c295252e34106d18bfb3.js","http://structure.zefiris.su/gui/gui-world.js":"_assets/a1e3d5ed716c18665c9f.js","/gui/gui-world.js":"_assets/a1e3d5ed716c18665c9f.js","/gui-world.js":"_assets/a1e3d5ed716c18665c9f.js","http://structure.zefiris.su/gui/gui-skills.js":"_assets/7c2fbf1433596b922dd6.js","/gui/gui-skills.js":"_assets/7c2fbf1433596b922dd6.js","/gui-skills.js":"_assets/7c2fbf1433596b922dd6.js","http://structure.zefiris.su/gui/gui-sliders.js":"_assets/3c01103aa0c93f74179f.js","/gui/gui-sliders.js":"_assets/3c01103aa0c93f74179f.js","/gui-sliders.js":"_assets/3c01103aa0c93f74179f.js","http://structure.zefiris.su/gui/gui-menu.js":"_assets/cbdfc22f6f9ebfab3c2b.js","/gui/gui-menu.js":"_assets/cbdfc22f6f9ebfab3c2b.js","/gui-menu.js":"_assets/cbdfc22f6f9ebfab3c2b.js","http://structure.zefiris.su/engine/game.js":"_assets/5ee26026569f66023c66.js","/engine/game.js":"_assets/5ee26026569f66023c66.js","/game.js":"_assets/5ee26026569f66023c66.js","http://structure.zefiris.su/gui/gui-settings.js":"_assets/adae054a9c16dc573658.js","/gui/gui-settings.js":"_assets/adae054a9c16dc573658.js","/gui-settings.js":"_assets/adae054a9c16dc573658.js","http://structure.zefiris.su/gui/gui-about.js":"_assets/f09b060e8a896b7c76b8.js","/gui/gui-about.js":"_assets/f09b060e8a896b7c76b8.js","/gui-about.js":"_assets/f09b060e8a896b7c76b8.js","http://structure.zefiris.su/gui/gui-saves.js":"_assets/cb11dc5891e58dedbba0.js","/gui/gui-saves.js":"_assets/cb11dc5891e58dedbba0.js","/gui-saves.js":"_assets/cb11dc5891e58dedbba0.js","http://structure.zefiris.su/gui/gui-statistics.js":"_assets/3022a2fe6c426c39c636.js","/gui/gui-statistics.js":"_assets/3022a2fe6c426c39c636.js","/gui-statistics.js":"_assets/3022a2fe6c426c39c636.js","http://structure.zefiris.su/gui/gui-achievements.js":"_assets/0db7a902e525b428ef4f.js","/gui/gui-achievements.js":"_assets/0db7a902e525b428ef4f.js","/gui-achievements.js":"_assets/0db7a902e525b428ef4f.js","http://structure.zefiris.su/gui/gui-story.js":"_assets/b63ab4d255d788bc78c2.js","/gui/gui-story.js":"_assets/b63ab4d255d788bc78c2.js","/gui-story.js":"_assets/b63ab4d255d788bc78c2.js","http://structure.zefiris.su/gui/gui.js":"_assets/42c77b81ab4ef6a104b8.js","/gui/gui.js":"_assets/42c77b81ab4ef6a104b8.js","/gui.js":"_assets/42c77b81ab4ef6a104b8.js","http://structure.zefiris.su/gui/gui-management.js":"_assets/e6697949d3cf4914a0b7.js","/gui/gui-management.js":"_assets/e6697949d3cf4914a0b7.js","/gui-management.js":"_assets/e6697949d3cf4914a0b7.js","http://structure.zefiris.su/utility/worker.js":"_assets/3163d840a9b2336ff3fe.js","/utility/worker.js":"_assets/3163d840a9b2336ff3fe.js","/worker.js":"_assets/3163d840a9b2336ff3fe.js","http://structure.zefiris.su/res/structure.woff":"_assets/a3fb9f4594b14792e4f0.woff","/res/structure.woff":"_assets/a3fb9f4594b14792e4f0.woff","/structure.woff":"_assets/a3fb9f4594b14792e4f0.woff","http://structure.zefiris.su/images/spells/summonRandom.png":"_assets/b6b14ea7d9aeb5631040.png","/images/spells/summonRandom.png":"_assets/b6b14ea7d9aeb5631040.png","/spells/summonRandom.png":"_assets/b6b14ea7d9aeb5631040.png","/summonRandom.png":"_assets/b6b14ea7d9aeb5631040.png","http://structure.zefiris.su/images/spells/summonFire.png":"_assets/a0886a910186fc1d5804.png","/images/spells/summonFire.png":"_assets/a0886a910186fc1d5804.png","/spells/summonFire.png":"_assets/a0886a910186fc1d5804.png","/summonFire.png":"_assets/a0886a910186fc1d5804.png","http://structure.zefiris.su/images/spells/summonIce.png":"_assets/d3682f78abef80eb5fc0.png","/images/spells/summonIce.png":"_assets/d3682f78abef80eb5fc0.png","/spells/summonIce.png":"_assets/d3682f78abef80eb5fc0.png","/summonIce.png":"_assets/d3682f78abef80eb5fc0.png","http://structure.zefiris.su/images/spells/summonPower.png":"_assets/b4c608158769ffa1dba3.png","/images/spells/summonPower.png":"_assets/b4c608158769ffa1dba3.png","/spells/summonPower.png":"_assets/b4c608158769ffa1dba3.png","/summonPower.png":"_assets/b4c608158769ffa1dba3.png","http://structure.zefiris.su/images/spells/summonBlood.png":"_assets/3dfe30450b85da5d5b4b.png","/images/spells/summonBlood.png":"_assets/3dfe30450b85da5d5b4b.png","/spells/summonBlood.png":"_assets/3dfe30450b85da5d5b4b.png","/summonBlood.png":"_assets/3dfe30450b85da5d5b4b.png","http://structure.zefiris.su/images/summon.png":"_assets/8bc1af09db74645ba81f.png","/images/summon.png":"_assets/8bc1af09db74645ba81f.png","/summon.png":"_assets/8bc1af09db74645ba81f.png","http://structure.zefiris.su/images/swords.svg":"_assets/5f4025daaffec1e12563.svg","/images/swords.svg":"_assets/5f4025daaffec1e12563.svg","/swords.svg":"_assets/5f4025daaffec1e12563.svg","http://structure.zefiris.su/images/spells/summonAlignment.png":"_assets/c7af6f63c16379af738d.png","/images/spells/summonAlignment.png":"_assets/c7af6f63c16379af738d.png","/spells/summonAlignment.png":"_assets/c7af6f63c16379af738d.png","/summonAlignment.png":"_assets/c7af6f63c16379af738d.png","http://structure.zefiris.su/images/resources/exp.png":"_assets/9d72e550b3de5c83b423.png","/images/resources/exp.png":"_assets/9d72e550b3de5c83b423.png","/resources/exp.png":"_assets/9d72e550b3de5c83b423.png","/exp.png":"_assets/9d72e550b3de5c83b423.png","http://structure.zefiris.su/images/resources/stars.png":"_assets/172ceb490846e1f6f7cd.png","/images/resources/stars.png":"_assets/172ceb490846e1f6f7cd.png","/resources/stars.png":"_assets/172ceb490846e1f6f7cd.png","/stars.png":"_assets/172ceb490846e1f6f7cd.png","http://structure.zefiris.su/images/spells/summonMetal.png":"_assets/aa5e8e1a411181fa7c77.png","/images/spells/summonMetal.png":"_assets/aa5e8e1a411181fa7c77.png","/spells/summonMetal.png":"_assets/aa5e8e1a411181fa7c77.png","/summonMetal.png":"_assets/aa5e8e1a411181fa7c77.png","http://structure.zefiris.su/res/open-sans-400.woff":"_assets/054349dda27b80bb105f.woff","/res/open-sans-400.woff":"_assets/054349dda27b80bb105f.woff","/open-sans-400.woff":"_assets/054349dda27b80bb105f.woff","http://structure.zefiris.su/images/resources/science.png":"_assets/414164ca759700f5599a.png","/images/resources/science.png":"_assets/414164ca759700f5599a.png","/resources/science.png":"_assets/414164ca759700f5599a.png","/science.png":"_assets/414164ca759700f5599a.png","http://structure.zefiris.su/images/resources/stardust.png":"_assets/54b637185556c5a67f38.png","/images/resources/stardust.png":"_assets/54b637185556c5a67f38.png","/resources/stardust.png":"_assets/54b637185556c5a67f38.png","/stardust.png":"_assets/54b637185556c5a67f38.png","http://structure.zefiris.su/images/spells/summonExplosion.png":"_assets/68cd8a61926194ef5921.png","/images/spells/summonExplosion.png":"_assets/68cd8a61926194ef5921.png","/spells/summonExplosion.png":"_assets/68cd8a61926194ef5921.png","/summonExplosion.png":"_assets/68cd8a61926194ef5921.png","http://structure.zefiris.su/images/resources/mana.png":"_assets/f259b166187a4a788568.png","/images/resources/mana.png":"_assets/f259b166187a4a788568.png","/resources/mana.png":"_assets/f259b166187a4a788568.png","/mana.png":"_assets/f259b166187a4a788568.png","http://structure.zefiris.su/images/resources/fears.png":"_assets/2e9738aedf0d5f5f3ba8.png","/images/resources/fears.png":"_assets/2e9738aedf0d5f5f3ba8.png","/resources/fears.png":"_assets/2e9738aedf0d5f5f3ba8.png","/fears.png":"_assets/2e9738aedf0d5f5f3ba8.png","http://structure.zefiris.su/images/resources/clouds.png":"_assets/44870335d91051cb0462.png","/images/resources/clouds.png":"_assets/44870335d91051cb0462.png","/resources/clouds.png":"_assets/44870335d91051cb0462.png","/clouds.png":"_assets/44870335d91051cb0462.png","http://structure.zefiris.su/images/resources/gold.png":"_assets/e98d9e8263f468408a6f.png","/images/resources/gold.png":"_assets/e98d9e8263f468408a6f.png","/resources/gold.png":"_assets/e98d9e8263f468408a6f.png","/gold.png":"_assets/e98d9e8263f468408a6f.png","http://structure.zefiris.su/images/resources/thunderstone.png":"_assets/972caf4c587c39b99e15.png","/images/resources/thunderstone.png":"_assets/972caf4c587c39b99e15.png","/resources/thunderstone.png":"_assets/972caf4c587c39b99e15.png","/thunderstone.png":"_assets/972caf4c587c39b99e15.png","http://structure.zefiris.su/images/artifacts.png":"_assets/98e2458210d005897485.png","/images/artifacts.png":"_assets/98e2458210d005897485.png","/artifacts.png":"_assets/98e2458210d005897485.png","http://structure.zefiris.su/utility/lzworker.js":"_assets/b442e6d273a24542fdfe.js","/utility/lzworker.js":"_assets/b442e6d273a24542fdfe.js","/lzworker.js":"_assets/b442e6d273a24542fdfe.js","http://structure.zefiris.su/res/capture.mp3":"_assets/01eb6ad9f4ff82cae87c.mp3","/res/capture.mp3":"_assets/01eb6ad9f4ff82cae87c.mp3","/capture.mp3":"_assets/01eb6ad9f4ff82cae87c.mp3"};
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
