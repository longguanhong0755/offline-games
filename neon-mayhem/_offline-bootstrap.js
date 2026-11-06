(() => {
  "use strict";
  const RUNTIME_MAP = {"https://pranshuparmar.github.io/neon-mayhem/js/haptics.js":"_assets/d8850b0c7cdf64b178c7.js","/neon-mayhem/js/haptics.js":"_assets/d8850b0c7cdf64b178c7.js","/js/haptics.js":"_assets/d8850b0c7cdf64b178c7.js","/haptics.js":"_assets/d8850b0c7cdf64b178c7.js","https://pranshuparmar.github.io/neon-mayhem/js/analytics.js":"_assets/e65ce666c90dafe47a96.js","/neon-mayhem/js/analytics.js":"_assets/e65ce666c90dafe47a96.js","/js/analytics.js":"_assets/e65ce666c90dafe47a96.js","/analytics.js":"_assets/e65ce666c90dafe47a96.js","https://pranshuparmar.github.io/neon-mayhem/js/utils.js":"_assets/7b4cfbb5aa76e9b1f959.js","/neon-mayhem/js/utils.js":"_assets/7b4cfbb5aa76e9b1f959.js","/js/utils.js":"_assets/7b4cfbb5aa76e9b1f959.js","/utils.js":"_assets/7b4cfbb5aa76e9b1f959.js","https://pranshuparmar.github.io/neon-mayhem/js/chaos.js":"_assets/3916d25cd5ed017ce032.js","/neon-mayhem/js/chaos.js":"_assets/3916d25cd5ed017ce032.js","/js/chaos.js":"_assets/3916d25cd5ed017ce032.js","/chaos.js":"_assets/3916d25cd5ed017ce032.js","https://pranshuparmar.github.io/neon-mayhem/js/cast.js":"_assets/c97ae04c92cd5ed90bc0.js","/neon-mayhem/js/cast.js":"_assets/c97ae04c92cd5ed90bc0.js","/js/cast.js":"_assets/c97ae04c92cd5ed90bc0.js","/cast.js":"_assets/c97ae04c92cd5ed90bc0.js","https://pranshuparmar.github.io/neon-mayhem/js/city.js":"_assets/e090b8ac163cf97decb0.js","/neon-mayhem/js/city.js":"_assets/e090b8ac163cf97decb0.js","/js/city.js":"_assets/e090b8ac163cf97decb0.js","/city.js":"_assets/e090b8ac163cf97decb0.js","https://pranshuparmar.github.io/neon-mayhem/js/audio.js":"_assets/a2221c747f972e5138f6.js","/neon-mayhem/js/audio.js":"_assets/a2221c747f972e5138f6.js","/js/audio.js":"_assets/a2221c747f972e5138f6.js","/audio.js":"_assets/a2221c747f972e5138f6.js","https://pranshuparmar.github.io/neon-mayhem/js/peds.js":"_assets/be40ea12fa424870df9c.js","/neon-mayhem/js/peds.js":"_assets/be40ea12fa424870df9c.js","/js/peds.js":"_assets/be40ea12fa424870df9c.js","/peds.js":"_assets/be40ea12fa424870df9c.js","https://pranshuparmar.github.io/neon-mayhem/js/isla.js":"_assets/1d7668584734162573ee.js","/neon-mayhem/js/isla.js":"_assets/1d7668584734162573ee.js","/js/isla.js":"_assets/1d7668584734162573ee.js","/isla.js":"_assets/1d7668584734162573ee.js","https://pranshuparmar.github.io/neon-mayhem/js/player.js":"_assets/043861c0304d1b5b7c1d.js","/neon-mayhem/js/player.js":"_assets/043861c0304d1b5b7c1d.js","/js/player.js":"_assets/043861c0304d1b5b7c1d.js","/player.js":"_assets/043861c0304d1b5b7c1d.js","https://pranshuparmar.github.io/neon-mayhem/js/vehicles.js":"_assets/10a48e7ecf2384943a40.js","/neon-mayhem/js/vehicles.js":"_assets/10a48e7ecf2384943a40.js","/js/vehicles.js":"_assets/10a48e7ecf2384943a40.js","/vehicles.js":"_assets/10a48e7ecf2384943a40.js","https://pranshuparmar.github.io/neon-mayhem/js/arsenal.js":"_assets/05549cbf653ae9dfaab6.js","/neon-mayhem/js/arsenal.js":"_assets/05549cbf653ae9dfaab6.js","/js/arsenal.js":"_assets/05549cbf653ae9dfaab6.js","/arsenal.js":"_assets/05549cbf653ae9dfaab6.js","https://pranshuparmar.github.io/neon-mayhem/js/combat.js":"_assets/ba17645bfd582afb8080.js","/neon-mayhem/js/combat.js":"_assets/ba17645bfd582afb8080.js","/js/combat.js":"_assets/ba17645bfd582afb8080.js","/combat.js":"_assets/ba17645bfd582afb8080.js","https://pranshuparmar.github.io/neon-mayhem/js/weather.js":"_assets/8ceab99db104cd98b010.js","/neon-mayhem/js/weather.js":"_assets/8ceab99db104cd98b010.js","/js/weather.js":"_assets/8ceab99db104cd98b010.js","/weather.js":"_assets/8ceab99db104cd98b010.js","https://pranshuparmar.github.io/neon-mayhem/js/aircraft.js":"_assets/6219b04b6045915773a7.js","/neon-mayhem/js/aircraft.js":"_assets/6219b04b6045915773a7.js","/js/aircraft.js":"_assets/6219b04b6045915773a7.js","/aircraft.js":"_assets/6219b04b6045915773a7.js","https://pranshuparmar.github.io/neon-mayhem/js/ambience.js":"_assets/ffba718ce5cb2127bf03.js","/neon-mayhem/js/ambience.js":"_assets/ffba718ce5cb2127bf03.js","/js/ambience.js":"_assets/ffba718ce5cb2127bf03.js","/ambience.js":"_assets/ffba718ce5cb2127bf03.js","https://pranshuparmar.github.io/neon-mayhem/js/sealife.js":"_assets/9da9d20c37c282fa5690.js","/neon-mayhem/js/sealife.js":"_assets/9da9d20c37c282fa5690.js","/js/sealife.js":"_assets/9da9d20c37c282fa5690.js","/sealife.js":"_assets/9da9d20c37c282fa5690.js","https://pranshuparmar.github.io/neon-mayhem/js/lib/three.min.js":"_assets/9274bbcec8d96168626c.js","/neon-mayhem/js/lib/three.min.js":"_assets/9274bbcec8d96168626c.js","/js/lib/three.min.js":"_assets/9274bbcec8d96168626c.js","/lib/three.min.js":"_assets/9274bbcec8d96168626c.js","/three.min.js":"_assets/9274bbcec8d96168626c.js","https://pranshuparmar.github.io/neon-mayhem/js/streetlife.js":"_assets/d05e95798955763b0474.js","/neon-mayhem/js/streetlife.js":"_assets/d05e95798955763b0474.js","/js/streetlife.js":"_assets/d05e95798955763b0474.js","/streetlife.js":"_assets/d05e95798955763b0474.js","https://pranshuparmar.github.io/neon-mayhem/js/herald.js":"_assets/91887f88e4b62cec5c1d.js","/neon-mayhem/js/herald.js":"_assets/91887f88e4b62cec5c1d.js","/js/herald.js":"_assets/91887f88e4b62cec5c1d.js","/herald.js":"_assets/91887f88e4b62cec5c1d.js","https://pranshuparmar.github.io/neon-mayhem/js/gangs.js":"_assets/bb154ef2573f7279b6eb.js","/neon-mayhem/js/gangs.js":"_assets/bb154ef2573f7279b6eb.js","/js/gangs.js":"_assets/bb154ef2573f7279b6eb.js","/gangs.js":"_assets/bb154ef2573f7279b6eb.js","https://pranshuparmar.github.io/neon-mayhem/js/strangers.js":"_assets/1ea3eb3126c4d6db062d.js","/neon-mayhem/js/strangers.js":"_assets/1ea3eb3126c4d6db062d.js","/js/strangers.js":"_assets/1ea3eb3126c4d6db062d.js","/strangers.js":"_assets/1ea3eb3126c4d6db062d.js","https://pranshuparmar.github.io/neon-mayhem/js/business.js":"_assets/c77d07fdfca9becdc7b3.js","/neon-mayhem/js/business.js":"_assets/c77d07fdfca9becdc7b3.js","/js/business.js":"_assets/c77d07fdfca9becdc7b3.js","/business.js":"_assets/c77d07fdfca9becdc7b3.js","https://pranshuparmar.github.io/neon-mayhem/js/heist.js":"_assets/dd99026366d9c219b2b3.js","/neon-mayhem/js/heist.js":"_assets/dd99026366d9c219b2b3.js","/js/heist.js":"_assets/dd99026366d9c219b2b3.js","/heist.js":"_assets/dd99026366d9c219b2b3.js","https://pranshuparmar.github.io/neon-mayhem/js/export.js":"_assets/efa6243259cd6b28e087.js","/neon-mayhem/js/export.js":"_assets/efa6243259cd6b28e087.js","/js/export.js":"_assets/efa6243259cd6b28e087.js","/export.js":"_assets/efa6243259cd6b28e087.js","https://pranshuparmar.github.io/neon-mayhem/js/army.js":"_assets/33cef747cdbfd3cf602c.js","/neon-mayhem/js/army.js":"_assets/33cef747cdbfd3cf602c.js","/js/army.js":"_assets/33cef747cdbfd3cf602c.js","/army.js":"_assets/33cef747cdbfd3cf602c.js","https://pranshuparmar.github.io/neon-mayhem/js/police.js":"_assets/b96339a75ce9a6450d62.js","/neon-mayhem/js/police.js":"_assets/b96339a75ce9a6450d62.js","/js/police.js":"_assets/b96339a75ce9a6450d62.js","/police.js":"_assets/b96339a75ce9a6450d62.js","https://pranshuparmar.github.io/neon-mayhem/js/tapes.js":"_assets/e0c9fd08a8bd86e7e8dd.js","/neon-mayhem/js/tapes.js":"_assets/e0c9fd08a8bd86e7e8dd.js","/js/tapes.js":"_assets/e0c9fd08a8bd86e7e8dd.js","/tapes.js":"_assets/e0c9fd08a8bd86e7e8dd.js","https://pranshuparmar.github.io/neon-mayhem/js/lola.js":"_assets/200efbb0d40118541718.js","/neon-mayhem/js/lola.js":"_assets/200efbb0d40118541718.js","/js/lola.js":"_assets/200efbb0d40118541718.js","/lola.js":"_assets/200efbb0d40118541718.js","https://pranshuparmar.github.io/neon-mayhem/js/missions.js":"_assets/7e1148cb7bc62725853d.js","/neon-mayhem/js/missions.js":"_assets/7e1148cb7bc62725853d.js","/js/missions.js":"_assets/7e1148cb7bc62725853d.js","/missions.js":"_assets/7e1148cb7bc62725853d.js","https://pranshuparmar.github.io/neon-mayhem/js/photo.js":"_assets/b36ed8092828ae88575d.js","/neon-mayhem/js/photo.js":"_assets/b36ed8092828ae88575d.js","/js/photo.js":"_assets/b36ed8092828ae88575d.js","/photo.js":"_assets/b36ed8092828ae88575d.js","https://pranshuparmar.github.io/neon-mayhem/js/dj.js":"_assets/5c300d5427bef216bafb.js","/neon-mayhem/js/dj.js":"_assets/5c300d5427bef216bafb.js","/js/dj.js":"_assets/5c300d5427bef216bafb.js","/dj.js":"_assets/5c300d5427bef216bafb.js","https://pranshuparmar.github.io/neon-mayhem/js/hud.js":"_assets/1fba441b294498986839.js","/neon-mayhem/js/hud.js":"_assets/1fba441b294498986839.js","/js/hud.js":"_assets/1fba441b294498986839.js","/hud.js":"_assets/1fba441b294498986839.js","https://pranshuparmar.github.io/neon-mayhem/js/scenes.js":"_assets/e149adb54513f9b45ab6.js","/neon-mayhem/js/scenes.js":"_assets/e149adb54513f9b45ab6.js","/js/scenes.js":"_assets/e149adb54513f9b45ab6.js","/scenes.js":"_assets/e149adb54513f9b45ab6.js","https://pranshuparmar.github.io/neon-mayhem/js/cheats.js":"_assets/7015f335dfeeff6408b8.js","/neon-mayhem/js/cheats.js":"_assets/7015f335dfeeff6408b8.js","/js/cheats.js":"_assets/7015f335dfeeff6408b8.js","/cheats.js":"_assets/7015f335dfeeff6408b8.js","https://pranshuparmar.github.io/neon-mayhem/js/share.js":"_assets/b919bb3301ef6b8338b5.js","/neon-mayhem/js/share.js":"_assets/b919bb3301ef6b8338b5.js","/js/share.js":"_assets/b919bb3301ef6b8338b5.js","/share.js":"_assets/b919bb3301ef6b8338b5.js","https://pranshuparmar.github.io/neon-mayhem/js/derby.js":"_assets/21bd5c59e2a48ef007f2.js","/neon-mayhem/js/derby.js":"_assets/21bd5c59e2a48ef007f2.js","/js/derby.js":"_assets/21bd5c59e2a48ef007f2.js","/derby.js":"_assets/21bd5c59e2a48ef007f2.js","https://pranshuparmar.github.io/neon-mayhem/js/shops.js":"_assets/f0d5c28c56f17ec98425.js","/neon-mayhem/js/shops.js":"_assets/f0d5c28c56f17ec98425.js","/js/shops.js":"_assets/f0d5c28c56f17ec98425.js","/shops.js":"_assets/f0d5c28c56f17ec98425.js","https://pranshuparmar.github.io/neon-mayhem/js/interiors.js":"_assets/a510e6aa04db68ad97f9.js","/neon-mayhem/js/interiors.js":"_assets/a510e6aa04db68ad97f9.js","/js/interiors.js":"_assets/a510e6aa04db68ad97f9.js","/interiors.js":"_assets/a510e6aa04db68ad97f9.js","https://pranshuparmar.github.io/neon-mayhem/js/rc.js":"_assets/5be9e13c7bbe4cbacb86.js","/neon-mayhem/js/rc.js":"_assets/5be9e13c7bbe4cbacb86.js","/js/rc.js":"_assets/5be9e13c7bbe4cbacb86.js","/rc.js":"_assets/5be9e13c7bbe4cbacb86.js","https://pranshuparmar.github.io/neon-mayhem/js/robbery.js":"_assets/0f05b37db6668d87e2ca.js","/neon-mayhem/js/robbery.js":"_assets/0f05b37db6668d87e2ca.js","/js/robbery.js":"_assets/0f05b37db6668d87e2ca.js","/robbery.js":"_assets/0f05b37db6668d87e2ca.js","https://pranshuparmar.github.io/neon-mayhem/js/landmarks.js":"_assets/3379325f2c421595cc38.js","/neon-mayhem/js/landmarks.js":"_assets/3379325f2c421595cc38.js","/js/landmarks.js":"_assets/3379325f2c421595cc38.js","/landmarks.js":"_assets/3379325f2c421595cc38.js","https://pranshuparmar.github.io/neon-mayhem/js/guide.js":"_assets/c21efcc1221ab3732cb0.js","/neon-mayhem/js/guide.js":"_assets/c21efcc1221ab3732cb0.js","/js/guide.js":"_assets/c21efcc1221ab3732cb0.js","/guide.js":"_assets/c21efcc1221ab3732cb0.js","https://pranshuparmar.github.io/neon-mayhem/js/touch.js":"_assets/366a092079f8a29ad185.js","/neon-mayhem/js/touch.js":"_assets/366a092079f8a29ad185.js","/js/touch.js":"_assets/366a092079f8a29ad185.js","/touch.js":"_assets/366a092079f8a29ad185.js","https://pranshuparmar.github.io/neon-mayhem/js/main.js":"_assets/13aca26108258f256c2c.js","/neon-mayhem/js/main.js":"_assets/13aca26108258f256c2c.js","/js/main.js":"_assets/13aca26108258f256c2c.js","/main.js":"_assets/13aca26108258f256c2c.js","https://pranshuparmar.github.io/neon-mayhem/js/controls.js":"_assets/199cd2fa37bc7aa01ed6.js","/neon-mayhem/js/controls.js":"_assets/199cd2fa37bc7aa01ed6.js","/js/controls.js":"_assets/199cd2fa37bc7aa01ed6.js","/controls.js":"_assets/199cd2fa37bc7aa01ed6.js"};
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
