(() => {
  "use strict";
  const RUNTIME_MAP = {"http://erichlof.github.io/3dLightCycles/js/ShadowMesh.js":"_assets/953eb607b48048ca6b62.js","/3dLightCycles/js/ShadowMesh.js":"_assets/953eb607b48048ca6b62.js","/js/ShadowMesh.js":"_assets/953eb607b48048ca6b62.js","/ShadowMesh.js":"_assets/953eb607b48048ca6b62.js","http://erichlof.github.io/3dLightCycles/js/threex.FirstPersonControls.js":"_assets/000d099aca3cbcbd6d9b.js","/3dLightCycles/js/threex.FirstPersonControls.js":"_assets/000d099aca3cbcbd6d9b.js","/js/threex.FirstPersonControls.js":"_assets/000d099aca3cbcbd6d9b.js","/threex.FirstPersonControls.js":"_assets/000d099aca3cbcbd6d9b.js","http://erichlof.github.io/3dLightCycles/js/threex.keyboardstate.js":"_assets/1e6fd22324021dbe92d7.js","/3dLightCycles/js/threex.keyboardstate.js":"_assets/1e6fd22324021dbe92d7.js","/js/threex.keyboardstate.js":"_assets/1e6fd22324021dbe92d7.js","/threex.keyboardstate.js":"_assets/1e6fd22324021dbe92d7.js","http://erichlof.github.io/3dLightCycles/js/virtualButtonJoystick.js":"_assets/ed595aefb81323846915.js","/3dLightCycles/js/virtualButtonJoystick.js":"_assets/ed595aefb81323846915.js","/js/virtualButtonJoystick.js":"_assets/ed595aefb81323846915.js","/virtualButtonJoystick.js":"_assets/ed595aefb81323846915.js","http://erichlof.github.io/3dLightCycles/js/enemyAI.js":"_assets/aa812bcc267bfb6b9f04.js","/3dLightCycles/js/enemyAI.js":"_assets/aa812bcc267bfb6b9f04.js","/js/enemyAI.js":"_assets/aa812bcc267bfb6b9f04.js","/enemyAI.js":"_assets/aa812bcc267bfb6b9f04.js","http://erichlof.github.io/3dLightCycles/js/howler.js":"_assets/36440e44c9660d2d0ed2.js","/3dLightCycles/js/howler.js":"_assets/36440e44c9660d2d0ed2.js","/js/howler.js":"_assets/36440e44c9660d2d0ed2.js","/howler.js":"_assets/36440e44c9660d2d0ed2.js","http://erichlof.github.io/3dLightCycles/js/threex.GameTimer.js":"_assets/fcae9606784b8ee1a903.js","/3dLightCycles/js/threex.GameTimer.js":"_assets/fcae9606784b8ee1a903.js","/js/threex.GameTimer.js":"_assets/fcae9606784b8ee1a903.js","/threex.GameTimer.js":"_assets/fcae9606784b8ee1a903.js","http://erichlof.github.io/3dLightCycles/js/3dLightCyclesVariables.js":"_assets/b9f7624b8ba2e1cd5f63.js","/3dLightCycles/js/3dLightCyclesVariables.js":"_assets/b9f7624b8ba2e1cd5f63.js","/js/3dLightCyclesVariables.js":"_assets/b9f7624b8ba2e1cd5f63.js","/3dLightCyclesVariables.js":"_assets/b9f7624b8ba2e1cd5f63.js","http://erichlof.github.io/3dLightCycles/js/three.min.js":"_assets/1f7805e0870ff9428577.js","/3dLightCycles/js/three.min.js":"_assets/1f7805e0870ff9428577.js","/js/three.min.js":"_assets/1f7805e0870ff9428577.js","/three.min.js":"_assets/1f7805e0870ff9428577.js","http://erichlof.github.io/3dLightCycles/images/lineSegment01.png":"_assets/332d8103dc154f32556b.png","/3dLightCycles/images/lineSegment01.png":"_assets/332d8103dc154f32556b.png","/images/lineSegment01.png":"_assets/332d8103dc154f32556b.png","/lineSegment01.png":"_assets/332d8103dc154f32556b.png","http://erichlof.github.io/3dLightCycles/images/explosionFlare.png":"_assets/235ff4cf5658bcbc9a11.png","/3dLightCycles/images/explosionFlare.png":"_assets/235ff4cf5658bcbc9a11.png","/images/explosionFlare.png":"_assets/235ff4cf5658bcbc9a11.png","/explosionFlare.png":"_assets/235ff4cf5658bcbc9a11.png","http://erichlof.github.io/3dLightCycles/images/explosionRings2.png":"_assets/6d52f0aafa5847f581a8.png","/3dLightCycles/images/explosionRings2.png":"_assets/6d52f0aafa5847f581a8.png","/images/explosionRings2.png":"_assets/6d52f0aafa5847f581a8.png","/explosionRings2.png":"_assets/6d52f0aafa5847f581a8.png","http://erichlof.github.io/3dLightCycles/images/grid_floor2.png":"_assets/8d9afd096a751ba2b61f.png","/3dLightCycles/images/grid_floor2.png":"_assets/8d9afd096a751ba2b61f.png","/images/grid_floor2.png":"_assets/8d9afd096a751ba2b61f.png","/grid_floor2.png":"_assets/8d9afd096a751ba2b61f.png","http://erichlof.github.io/3dLightCycles/images/arenaWalls2.png":"_assets/17c83dd2fc5d619d4907.png","/3dLightCycles/images/arenaWalls2.png":"_assets/17c83dd2fc5d619d4907.png","/images/arenaWalls2.png":"_assets/17c83dd2fc5d619d4907.png","/arenaWalls2.png":"_assets/17c83dd2fc5d619d4907.png","http://erichlof.github.io/3dLightCycles/models/classic-1982-tron-light-cycle.json":"_assets/adcea501cf74e26774ba.json","/3dLightCycles/models/classic-1982-tron-light-cycle.json":"_assets/adcea501cf74e26774ba.json","/models/classic-1982-tron-light-cycle.json":"_assets/adcea501cf74e26774ba.json","/classic-1982-tron-light-cycle.json":"_assets/adcea501cf74e26774ba.json"};
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
