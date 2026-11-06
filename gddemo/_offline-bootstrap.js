(() => {
  "use strict";
  const RUNTIME_MAP = {"https://boomlings.eu.org/assets/fonts/allersubset.woff2":"_assets/fb6ee40abf6dfbd578c9.woff2","/assets/fonts/allersubset.woff2":"_assets/fb6ee40abf6dfbd578c9.woff2","/fonts/allersubset.woff2":"_assets/fb6ee40abf6dfbd578c9.woff2","/allersubset.woff2":"_assets/fb6ee40abf6dfbd578c9.woff2","https://boomlings.eu.org/dist.js":"_assets/72f4dd75774bd483f5ce.js","/dist.js":"_assets/72f4dd75774bd483f5ce.js","https://boomlings.eu.org/assets/data/GJ_WebSheet.json":"_assets/beaac05ea1ba57e684ed.json","/assets/data/GJ_WebSheet.json":"_assets/beaac05ea1ba57e684ed.json","/data/GJ_WebSheet.json":"_assets/beaac05ea1ba57e684ed.json","/GJ_WebSheet.json":"_assets/beaac05ea1ba57e684ed.json","https://boomlings.eu.org/assets/fonts/goldFont.fnt":"_assets/64881976417aa20eac08.fnt","/assets/fonts/goldFont.fnt":"_assets/64881976417aa20eac08.fnt","/fonts/goldFont.fnt":"_assets/64881976417aa20eac08.fnt","/goldFont.fnt":"_assets/64881976417aa20eac08.fnt","https://boomlings.eu.org/assets/images/game_bg_01_001.png":"_assets/48539475959fb7cd6258.png","/assets/images/game_bg_01_001.png":"_assets/48539475959fb7cd6258.png","/images/game_bg_01_001.png":"_assets/48539475959fb7cd6258.png","/game_bg_01_001.png":"_assets/48539475959fb7cd6258.png","https://boomlings.eu.org/assets/images/GJ_WebSheet.png":"_assets/a84a7990c0afa867ee72.png","/assets/images/GJ_WebSheet.png":"_assets/a84a7990c0afa867ee72.png","/images/GJ_WebSheet.png":"_assets/a84a7990c0afa867ee72.png","/GJ_WebSheet.png":"_assets/a84a7990c0afa867ee72.png","https://boomlings.eu.org/assets/images/sliderBar.png":"_assets/a59efe0df7e201ea1a1d.png","/assets/images/sliderBar.png":"_assets/a59efe0df7e201ea1a1d.png","/images/sliderBar.png":"_assets/a59efe0df7e201ea1a1d.png","/sliderBar.png":"_assets/a59efe0df7e201ea1a1d.png","https://boomlings.eu.org/assets/fonts/goldFont.png":"_assets/e0a010cec8953a938d18.png","/assets/fonts/goldFont.png":"_assets/e0a010cec8953a938d18.png","/fonts/goldFont.png":"_assets/e0a010cec8953a938d18.png","/goldFont.png":"_assets/e0a010cec8953a938d18.png","https://boomlings.eu.org/assets/data/splashes.txt":"_assets/b9365bd94c54a85001a3.txt","/assets/data/splashes.txt":"_assets/b9365bd94c54a85001a3.txt","/data/splashes.txt":"_assets/b9365bd94c54a85001a3.txt","/splashes.txt":"_assets/b9365bd94c54a85001a3.txt","https://boomlings.eu.org/assets/fonts/bigFont.fnt":"_assets/18e34544683bd704f68a.fnt","/assets/fonts/bigFont.fnt":"_assets/18e34544683bd704f68a.fnt","/fonts/bigFont.fnt":"_assets/18e34544683bd704f68a.fnt","/bigFont.fnt":"_assets/18e34544683bd704f68a.fnt","https://boomlings.eu.org/assets/fonts/bigFont.png":"_assets/137c453f3948e6a5f9cc.png","/assets/fonts/bigFont.png":"_assets/137c453f3948e6a5f9cc.png","/fonts/bigFont.png":"_assets/137c453f3948e6a5f9cc.png","/bigFont.png":"_assets/137c453f3948e6a5f9cc.png","https://boomlings.eu.org/assets/data/level.txt":"_assets/f9f6b459751ddfb4ff91.txt","/assets/data/level.txt":"_assets/f9f6b459751ddfb4ff91.txt","/data/level.txt":"_assets/f9f6b459751ddfb4ff91.txt","/level.txt":"_assets/f9f6b459751ddfb4ff91.txt","https://boomlings.eu.org/assets/data/objects.json":"_assets/402455ac3521209b52bc.json","/assets/data/objects.json":"_assets/402455ac3521209b52bc.json","/data/objects.json":"_assets/402455ac3521209b52bc.json","/objects.json":"_assets/402455ac3521209b52bc.json","https://boomlings.eu.org/assets/audio/endStart_02.ogg":"_assets/d3e9e9b73f966da92f89.ogg","/assets/audio/endStart_02.ogg":"_assets/d3e9e9b73f966da92f89.ogg","/audio/endStart_02.ogg":"_assets/d3e9e9b73f966da92f89.ogg","/endStart_02.ogg":"_assets/d3e9e9b73f966da92f89.ogg","https://boomlings.eu.org/assets/audio/playSound_01.ogg":"_assets/02768783586da5892663.ogg","/assets/audio/playSound_01.ogg":"_assets/02768783586da5892663.ogg","/audio/playSound_01.ogg":"_assets/02768783586da5892663.ogg","/playSound_01.ogg":"_assets/02768783586da5892663.ogg","https://boomlings.eu.org/assets/audio/explode_11.ogg":"_assets/481a8b5aa9e943d6c225.ogg","/assets/audio/explode_11.ogg":"_assets/481a8b5aa9e943d6c225.ogg","/audio/explode_11.ogg":"_assets/481a8b5aa9e943d6c225.ogg","/explode_11.ogg":"_assets/481a8b5aa9e943d6c225.ogg","https://boomlings.eu.org/assets/audio/quitSound_01.ogg":"_assets/703ed2a1c59868166260.ogg","/assets/audio/quitSound_01.ogg":"_assets/703ed2a1c59868166260.ogg","/audio/quitSound_01.ogg":"_assets/703ed2a1c59868166260.ogg","/quitSound_01.ogg":"_assets/703ed2a1c59868166260.ogg","https://boomlings.eu.org/assets/audio/highscoreGet02.ogg":"_assets/69493b39de7286b213eb.ogg","/assets/audio/highscoreGet02.ogg":"_assets/69493b39de7286b213eb.ogg","/audio/highscoreGet02.ogg":"_assets/69493b39de7286b213eb.ogg","/highscoreGet02.ogg":"_assets/69493b39de7286b213eb.ogg","https://boomlings.eu.org/assets/images/GJ_square02.png":"_assets/d216b7eabdd285d473af.png","/assets/images/GJ_square02.png":"_assets/d216b7eabdd285d473af.png","/images/GJ_square02.png":"_assets/d216b7eabdd285d473af.png","/GJ_square02.png":"_assets/d216b7eabdd285d473af.png","https://boomlings.eu.org/assets/images/square04_001.png":"_assets/25de1c2e28be47001e80.png","/assets/images/square04_001.png":"_assets/25de1c2e28be47001e80.png","/images/square04_001.png":"_assets/25de1c2e28be47001e80.png","/square04_001.png":"_assets/25de1c2e28be47001e80.png","https://boomlings.eu.org/assets/audio/StereoMadness.mp3":"_assets/69c8356d4459f376732c.mp3","/assets/audio/StereoMadness.mp3":"_assets/69c8356d4459f376732c.mp3","/audio/StereoMadness.mp3":"_assets/69c8356d4459f376732c.mp3","/StereoMadness.mp3":"_assets/69c8356d4459f376732c.mp3"};
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
