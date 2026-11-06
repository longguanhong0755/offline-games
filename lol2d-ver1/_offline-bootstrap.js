(() => {
  "use strict";
  const RUNTIME_MAP = {"https://lol2d.github.io/LOL2D-ver1/css/style.css":"_assets/5325405e9062c7a887bb.css","/LOL2D-ver1/css/style.css":"_assets/5325405e9062c7a887bb.css","/css/style.css":"_assets/5325405e9062c7a887bb.css","/style.css":"_assets/5325405e9062c7a887bb.css","https://lol2d.github.io/LOL2D-ver1/library/scenemanager.js":"_assets/db7c71164a8ded048a7e.js","/LOL2D-ver1/library/scenemanager.js":"_assets/db7c71164a8ded048a7e.js","/library/scenemanager.js":"_assets/db7c71164a8ded048a7e.js","/scenemanager.js":"_assets/db7c71164a8ded048a7e.js","https://lol2d.github.io/LOL2D-ver1/js/classes/Effects.js":"_assets/893e389c1e4ebc974de7.js","/LOL2D-ver1/js/classes/Effects.js":"_assets/893e389c1e4ebc974de7.js","/js/classes/Effects.js":"_assets/893e389c1e4ebc974de7.js","/classes/Effects.js":"_assets/893e389c1e4ebc974de7.js","/Effects.js":"_assets/893e389c1e4ebc974de7.js","https://lol2d.github.io/LOL2D-ver1/main.js":"_assets/34b5364db2c3807eee67.js","/LOL2D-ver1/main.js":"_assets/34b5364db2c3807eee67.js","/main.js":"_assets/34b5364db2c3807eee67.js","https://lol2d.github.io/LOL2D-ver1/js/scenes/loading.js":"_assets/f3520d84a6d7e68892e1.js","/LOL2D-ver1/js/scenes/loading.js":"_assets/f3520d84a6d7e68892e1.js","/js/scenes/loading.js":"_assets/f3520d84a6d7e68892e1.js","/scenes/loading.js":"_assets/f3520d84a6d7e68892e1.js","/loading.js":"_assets/f3520d84a6d7e68892e1.js","https://lol2d.github.io/LOL2D-ver1/js/utils.js":"_assets/467484db9e4075887e12.js","/LOL2D-ver1/js/utils.js":"_assets/467484db9e4075887e12.js","/js/utils.js":"_assets/467484db9e4075887e12.js","/utils.js":"_assets/467484db9e4075887e12.js","https://lol2d.github.io/LOL2D-ver1/library/p5.collide.min.js":"_assets/af6001fa48de95100724.js","/LOL2D-ver1/library/p5.collide.min.js":"_assets/af6001fa48de95100724.js","/library/p5.collide.min.js":"_assets/af6001fa48de95100724.js","/p5.collide.min.js":"_assets/af6001fa48de95100724.js","https://lol2d.github.io/LOL2D-ver1/js/classes/ObjectsInGame.js":"_assets/78c463b1d277fa339f8c.js","/LOL2D-ver1/js/classes/ObjectsInGame.js":"_assets/78c463b1d277fa339f8c.js","/js/classes/ObjectsInGame.js":"_assets/78c463b1d277fa339f8c.js","/classes/ObjectsInGame.js":"_assets/78c463b1d277fa339f8c.js","/ObjectsInGame.js":"_assets/78c463b1d277fa339f8c.js","https://lol2d.github.io/LOL2D-ver1/js/classes/Charaters.js":"_assets/ae5c44f67a8dc0788b92.js","/LOL2D-ver1/js/classes/Charaters.js":"_assets/ae5c44f67a8dc0788b92.js","/js/classes/Charaters.js":"_assets/ae5c44f67a8dc0788b92.js","/classes/Charaters.js":"_assets/ae5c44f67a8dc0788b92.js","/Charaters.js":"_assets/ae5c44f67a8dc0788b92.js","https://lol2d.github.io/LOL2D-ver1/js/classes/Abilities.js":"_assets/f73318685397908b30cf.js","/LOL2D-ver1/js/classes/Abilities.js":"_assets/f73318685397908b30cf.js","/js/classes/Abilities.js":"_assets/f73318685397908b30cf.js","/classes/Abilities.js":"_assets/f73318685397908b30cf.js","/Abilities.js":"_assets/f73318685397908b30cf.js","https://lol2d.github.io/LOL2D-ver1/js/scenes/game.js":"_assets/f94c8e35c53a06cd1db9.js","/LOL2D-ver1/js/scenes/game.js":"_assets/f94c8e35c53a06cd1db9.js","/js/scenes/game.js":"_assets/f94c8e35c53a06cd1db9.js","/scenes/game.js":"_assets/f94c8e35c53a06cd1db9.js","/game.js":"_assets/f94c8e35c53a06cd1db9.js","https://lol2d.github.io/LOL2D-ver1/js/classes/GameMap.js":"_assets/2c3fae35fbd1d499c9df.js","/LOL2D-ver1/js/classes/GameMap.js":"_assets/2c3fae35fbd1d499c9df.js","/js/classes/GameMap.js":"_assets/2c3fae35fbd1d499c9df.js","/classes/GameMap.js":"_assets/2c3fae35fbd1d499c9df.js","/GameMap.js":"_assets/2c3fae35fbd1d499c9df.js","https://lol2d.github.io/LOL2D-ver1/js/variables.js":"_assets/f7294f022c5a3fbd12cd.js","/LOL2D-ver1/js/variables.js":"_assets/f7294f022c5a3fbd12cd.js","/js/variables.js":"_assets/f7294f022c5a3fbd12cd.js","/variables.js":"_assets/f7294f022c5a3fbd12cd.js","https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js":"_assets/3e0d5d8be7c1179dd16e.js","/ajax/libs/p5.js/1.0.0/p5.min.js":"_assets/3e0d5d8be7c1179dd16e.js","/libs/p5.js/1.0.0/p5.min.js":"_assets/3e0d5d8be7c1179dd16e.js","/p5.js/1.0.0/p5.min.js":"_assets/3e0d5d8be7c1179dd16e.js","/1.0.0/p5.min.js":"_assets/3e0d5d8be7c1179dd16e.js","/p5.min.js":"_assets/3e0d5d8be7c1179dd16e.js","https://cdn.jsdelivr.net/npm/sweetalert2@9":"_assets/1cea8f5e200fcfc0e1d1.js","/npm/sweetalert2@9":"_assets/1cea8f5e200fcfc0e1d1.js","/sweetalert2@9":"_assets/1cea8f5e200fcfc0e1d1.js","https://counter3.stat.ovh/private/freecounterstat.php?c=7a6ey27xhu5aqhfkx4fwsj1p83rcme5w":"_assets/9e2046fdb24a2ed685d3.png","/private/freecounterstat.php":"_assets/9e2046fdb24a2ed685d3.png","/private/freecounterstat.php?c=7a6ey27xhu5aqhfkx4fwsj1p83rcme5w":"_assets/9e2046fdb24a2ed685d3.png","/freecounterstat.php":"_assets/9e2046fdb24a2ed685d3.png","https://counter3.stat.ovh/private/freecounterstat.php":"_assets/9e2046fdb24a2ed685d3.png","https://lol2d.github.io/LOL2D-ver1/images/rocket2.png":"_assets/61528e55a665b4e5dfdf.png","/LOL2D-ver1/images/rocket2.png":"_assets/61528e55a665b4e5dfdf.png","/images/rocket2.png":"_assets/61528e55a665b4e5dfdf.png","/rocket2.png":"_assets/61528e55a665b4e5dfdf.png","https://lol2d.github.io/LOL2D-ver1/images/troiAnhSang.png":"_assets/a8e307b780938b71bf07.png","/LOL2D-ver1/images/troiAnhSang.png":"_assets/a8e307b780938b71bf07.png","/images/troiAnhSang.png":"_assets/a8e307b780938b71bf07.png","/troiAnhSang.png":"_assets/a8e307b780938b71bf07.png","https://lol2d.github.io/LOL2D-ver1/images/locXoay.png":"_assets/2b60d97a781c7038dcf9.png","/LOL2D-ver1/images/locXoay.png":"_assets/2b60d97a781c7038dcf9.png","/images/locXoay.png":"_assets/2b60d97a781c7038dcf9.png","/locXoay.png":"_assets/2b60d97a781c7038dcf9.png","https://lol2d.github.io/LOL2D-ver1/images/bantay.png":"_assets/55d155683d1406793a7b.png","/LOL2D-ver1/images/bantay.png":"_assets/55d155683d1406793a7b.png","/images/bantay.png":"_assets/55d155683d1406793a7b.png","/bantay.png":"_assets/55d155683d1406793a7b.png","https://lol2d.github.io/LOL2D-ver1/images/character/yasuo.png":"_assets/2e60eed4d83f054802af.png","/LOL2D-ver1/images/character/yasuo.png":"_assets/2e60eed4d83f054802af.png","/images/character/yasuo.png":"_assets/2e60eed4d83f054802af.png","/character/yasuo.png":"_assets/2e60eed4d83f054802af.png","/yasuo.png":"_assets/2e60eed4d83f054802af.png","https://lol2d.github.io/LOL2D-ver1/images/character/jinx.png":"_assets/517a4ba09f3549e53567.png","/LOL2D-ver1/images/character/jinx.png":"_assets/517a4ba09f3549e53567.png","/images/character/jinx.png":"_assets/517a4ba09f3549e53567.png","/character/jinx.png":"_assets/517a4ba09f3549e53567.png","/jinx.png":"_assets/517a4ba09f3549e53567.png","https://lol2d.github.io/LOL2D-ver1/images/character/lux.png":"_assets/10564ad693fdc95f8232.png","/LOL2D-ver1/images/character/lux.png":"_assets/10564ad693fdc95f8232.png","/images/character/lux.png":"_assets/10564ad693fdc95f8232.png","/character/lux.png":"_assets/10564ad693fdc95f8232.png","/lux.png":"_assets/10564ad693fdc95f8232.png","https://lol2d.github.io/LOL2D-ver1/images/character/blitzcrank.png":"_assets/8d763b2ec19884ce6fce.png","/LOL2D-ver1/images/character/blitzcrank.png":"_assets/8d763b2ec19884ce6fce.png","/images/character/blitzcrank.png":"_assets/8d763b2ec19884ce6fce.png","/character/blitzcrank.png":"_assets/8d763b2ec19884ce6fce.png","/blitzcrank.png":"_assets/8d763b2ec19884ce6fce.png","https://lol2d.github.io/LOL2D-ver1/images/objects/tree.png":"_assets/01600ea8372d07ed5392.png","/LOL2D-ver1/images/objects/tree.png":"_assets/01600ea8372d07ed5392.png","/images/objects/tree.png":"_assets/01600ea8372d07ed5392.png","/objects/tree.png":"_assets/01600ea8372d07ed5392.png","/tree.png":"_assets/01600ea8372d07ed5392.png"};
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
