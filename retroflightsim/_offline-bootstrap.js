(() => {
  "use strict";
  const RUNTIME_MAP = {"https://ruben3d.github.io/retroflightsim/dist/style.css":"_assets/2ee6e0f4bcc85aeccd0c.css","/retroflightsim/dist/style.css":"_assets/2ee6e0f4bcc85aeccd0c.css","/dist/style.css":"_assets/2ee6e0f4bcc85aeccd0c.css","/style.css":"_assets/2ee6e0f4bcc85aeccd0c.css","https://ruben3d.github.io/retroflightsim/dist/bundle.js":"_assets/26c0a0d02ed63aa83f4b.js","/retroflightsim/dist/bundle.js":"_assets/26c0a0d02ed63aa83f4b.js","/dist/bundle.js":"_assets/26c0a0d02ed63aa83f4b.js","/bundle.js":"_assets/26c0a0d02ed63aa83f4b.js","https://ruben3d.github.io/retroflightsim/dist/assets/engine-loop-01.ogg":"_assets/575bb7c4cd54b66581b7.ogg","/retroflightsim/dist/assets/engine-loop-01.ogg":"_assets/575bb7c4cd54b66581b7.ogg","/dist/assets/engine-loop-01.ogg":"_assets/575bb7c4cd54b66581b7.ogg","/assets/engine-loop-01.ogg":"_assets/575bb7c4cd54b66581b7.ogg","/engine-loop-01.ogg":"_assets/575bb7c4cd54b66581b7.ogg","https://ruben3d.github.io/retroflightsim/dist/assets/f22_shadow.glb":"_assets/98fa6c47224066b35e60.glb","/retroflightsim/dist/assets/f22_shadow.glb":"_assets/98fa6c47224066b35e60.glb","/dist/assets/f22_shadow.glb":"_assets/98fa6c47224066b35e60.glb","/assets/f22_shadow.glb":"_assets/98fa6c47224066b35e60.glb","/f22_shadow.glb":"_assets/98fa6c47224066b35e60.glb","https://ruben3d.github.io/retroflightsim/dist/assets/f22.glb":"_assets/9838b0bf0ffb64aeff59.glb","/retroflightsim/dist/assets/f22.glb":"_assets/9838b0bf0ffb64aeff59.glb","/dist/assets/f22.glb":"_assets/9838b0bf0ffb64aeff59.glb","/assets/f22.glb":"_assets/9838b0bf0ffb64aeff59.glb","/f22.glb":"_assets/9838b0bf0ffb64aeff59.glb","https://ruben3d.github.io/retroflightsim/dist/assets/engine-loop-02.ogg":"_assets/6cda648c54886a4d15a7.ogg","/retroflightsim/dist/assets/engine-loop-02.ogg":"_assets/6cda648c54886a4d15a7.ogg","/dist/assets/engine-loop-02.ogg":"_assets/6cda648c54886a4d15a7.ogg","/assets/engine-loop-02.ogg":"_assets/6cda648c54886a4d15a7.ogg","/engine-loop-02.ogg":"_assets/6cda648c54886a4d15a7.ogg","https://ruben3d.github.io/retroflightsim/dist/assets/f22_flaperon_left.glb":"_assets/f16d6b63bbed3bb4a5ec.glb","/retroflightsim/dist/assets/f22_flaperon_left.glb":"_assets/f16d6b63bbed3bb4a5ec.glb","/dist/assets/f22_flaperon_left.glb":"_assets/f16d6b63bbed3bb4a5ec.glb","/assets/f22_flaperon_left.glb":"_assets/f16d6b63bbed3bb4a5ec.glb","/f22_flaperon_left.glb":"_assets/f16d6b63bbed3bb4a5ec.glb","https://ruben3d.github.io/retroflightsim/dist/assets/f22_flaperon_right.glb":"_assets/f96009a4316d650e6c76.glb","/retroflightsim/dist/assets/f22_flaperon_right.glb":"_assets/f96009a4316d650e6c76.glb","/dist/assets/f22_flaperon_right.glb":"_assets/f96009a4316d650e6c76.glb","/assets/f22_flaperon_right.glb":"_assets/f96009a4316d650e6c76.glb","/f22_flaperon_right.glb":"_assets/f96009a4316d650e6c76.glb","https://ruben3d.github.io/retroflightsim/dist/assets/f22_elevator_left.glb":"_assets/37b236838378a1b0c928.glb","/retroflightsim/dist/assets/f22_elevator_left.glb":"_assets/37b236838378a1b0c928.glb","/dist/assets/f22_elevator_left.glb":"_assets/37b236838378a1b0c928.glb","/assets/f22_elevator_left.glb":"_assets/37b236838378a1b0c928.glb","/f22_elevator_left.glb":"_assets/37b236838378a1b0c928.glb","https://ruben3d.github.io/retroflightsim/dist/assets/runway01.gltf":"_assets/abc826a199c47af879e3.gltf","/retroflightsim/dist/assets/runway01.gltf":"_assets/abc826a199c47af879e3.gltf","/dist/assets/runway01.gltf":"_assets/abc826a199c47af879e3.gltf","/assets/runway01.gltf":"_assets/abc826a199c47af879e3.gltf","/runway01.gltf":"_assets/abc826a199c47af879e3.gltf","https://ruben3d.github.io/retroflightsim/dist/assets/f22_landinggear.glb":"_assets/32d8ec1df00da15a0443.glb","/retroflightsim/dist/assets/f22_landinggear.glb":"_assets/32d8ec1df00da15a0443.glb","/dist/assets/f22_landinggear.glb":"_assets/32d8ec1df00da15a0443.glb","/assets/f22_landinggear.glb":"_assets/32d8ec1df00da15a0443.glb","/f22_landinggear.glb":"_assets/32d8ec1df00da15a0443.glb","https://ruben3d.github.io/retroflightsim/dist/assets/f22_rudder_right.glb":"_assets/81a391b841454f2559ad.glb","/retroflightsim/dist/assets/f22_rudder_right.glb":"_assets/81a391b841454f2559ad.glb","/dist/assets/f22_rudder_right.glb":"_assets/81a391b841454f2559ad.glb","/assets/f22_rudder_right.glb":"_assets/81a391b841454f2559ad.glb","/f22_rudder_right.glb":"_assets/81a391b841454f2559ad.glb","https://ruben3d.github.io/retroflightsim/dist/assets/f22_elevator_right.glb":"_assets/dfe4d3a31224cf63fb4f.glb","/retroflightsim/dist/assets/f22_elevator_right.glb":"_assets/dfe4d3a31224cf63fb4f.glb","/dist/assets/f22_elevator_right.glb":"_assets/dfe4d3a31224cf63fb4f.glb","/assets/f22_elevator_right.glb":"_assets/dfe4d3a31224cf63fb4f.glb","/f22_elevator_right.glb":"_assets/dfe4d3a31224cf63fb4f.glb","https://ruben3d.github.io/retroflightsim/dist/assets/farm01.gltf":"_assets/05c4e4e023972d22c6e3.gltf","/retroflightsim/dist/assets/farm01.gltf":"_assets/05c4e4e023972d22c6e3.gltf","/dist/assets/farm01.gltf":"_assets/05c4e4e023972d22c6e3.gltf","/assets/farm01.gltf":"_assets/05c4e4e023972d22c6e3.gltf","/farm01.gltf":"_assets/05c4e4e023972d22c6e3.gltf","https://ruben3d.github.io/retroflightsim/dist/assets/map.gltf":"_assets/b7f74310b0d3cba7b393.gltf","/retroflightsim/dist/assets/map.gltf":"_assets/b7f74310b0d3cba7b393.gltf","/dist/assets/map.gltf":"_assets/b7f74310b0d3cba7b393.gltf","/assets/map.gltf":"_assets/b7f74310b0d3cba7b393.gltf","/map.gltf":"_assets/b7f74310b0d3cba7b393.gltf","https://ruben3d.github.io/retroflightsim/dist/assets/f22_rudder_left.glb":"_assets/cbc958340f867f839605.glb","/retroflightsim/dist/assets/f22_rudder_left.glb":"_assets/cbc958340f867f839605.glb","/dist/assets/f22_rudder_left.glb":"_assets/cbc958340f867f839605.glb","/assets/f22_rudder_left.glb":"_assets/cbc958340f867f839605.glb","/f22_rudder_left.glb":"_assets/cbc958340f867f839605.glb","https://ruben3d.github.io/retroflightsim/dist/assets/hangar01.gltf":"_assets/496d0bd08f50dda23d96.gltf","/retroflightsim/dist/assets/hangar01.gltf":"_assets/496d0bd08f50dda23d96.gltf","/dist/assets/hangar01.gltf":"_assets/496d0bd08f50dda23d96.gltf","/assets/hangar01.gltf":"_assets/496d0bd08f50dda23d96.gltf","/hangar01.gltf":"_assets/496d0bd08f50dda23d96.gltf","https://ruben3d.github.io/retroflightsim/dist/assets/control01.gltf":"_assets/255073dda26498b0bcd1.gltf","/retroflightsim/dist/assets/control01.gltf":"_assets/255073dda26498b0bcd1.gltf","/dist/assets/control01.gltf":"_assets/255073dda26498b0bcd1.gltf","/assets/control01.gltf":"_assets/255073dda26498b0bcd1.gltf","/control01.gltf":"_assets/255073dda26498b0bcd1.gltf","https://ruben3d.github.io/retroflightsim/dist/assets/refinery_towers01.gltf":"_assets/d1b1b667d1f131c58fb4.gltf","/retroflightsim/dist/assets/refinery_towers01.gltf":"_assets/d1b1b667d1f131c58fb4.gltf","/dist/assets/refinery_towers01.gltf":"_assets/d1b1b667d1f131c58fb4.gltf","/assets/refinery_towers01.gltf":"_assets/d1b1b667d1f131c58fb4.gltf","/refinery_towers01.gltf":"_assets/d1b1b667d1f131c58fb4.gltf","https://ruben3d.github.io/retroflightsim/dist/assets/f22_scenery.glb":"_assets/9c13c657f4ecc1853622.glb","/retroflightsim/dist/assets/f22_scenery.glb":"_assets/9c13c657f4ecc1853622.glb","/dist/assets/f22_scenery.glb":"_assets/9c13c657f4ecc1853622.glb","/assets/f22_scenery.glb":"_assets/9c13c657f4ecc1853622.glb","/f22_scenery.glb":"_assets/9c13c657f4ecc1853622.glb","https://ruben3d.github.io/retroflightsim/dist/assets/refinery_depot01.gltf":"_assets/e76dabb23e7c00d224de.gltf","/retroflightsim/dist/assets/refinery_depot01.gltf":"_assets/e76dabb23e7c00d224de.gltf","/dist/assets/refinery_depot01.gltf":"_assets/e76dabb23e7c00d224de.gltf","/assets/refinery_depot01.gltf":"_assets/e76dabb23e7c00d224de.gltf","/refinery_depot01.gltf":"_assets/e76dabb23e7c00d224de.gltf","https://ruben3d.github.io/retroflightsim/dist/assets/refinery_depot02.gltf":"_assets/aa440a27da478afbf58d.gltf","/retroflightsim/dist/assets/refinery_depot02.gltf":"_assets/aa440a27da478afbf58d.gltf","/dist/assets/refinery_depot02.gltf":"_assets/aa440a27da478afbf58d.gltf","/assets/refinery_depot02.gltf":"_assets/aa440a27da478afbf58d.gltf","/refinery_depot02.gltf":"_assets/aa440a27da478afbf58d.gltf","https://ruben3d.github.io/retroflightsim/dist/assets/font-hud-small.png":"_assets/6041a363b7e881873d38.png","/retroflightsim/dist/assets/font-hud-small.png":"_assets/6041a363b7e881873d38.png","/dist/assets/font-hud-small.png":"_assets/6041a363b7e881873d38.png","/assets/font-hud-small.png":"_assets/6041a363b7e881873d38.png","/font-hud-small.png":"_assets/6041a363b7e881873d38.png","https://ruben3d.github.io/retroflightsim/dist/assets/font-hud-large.png":"_assets/3c8aa5348b81c83bb1a2.png","/retroflightsim/dist/assets/font-hud-large.png":"_assets/3c8aa5348b81c83bb1a2.png","/dist/assets/font-hud-large.png":"_assets/3c8aa5348b81c83bb1a2.png","/assets/font-hud-large.png":"_assets/3c8aa5348b81c83bb1a2.png","/font-hud-large.png":"_assets/3c8aa5348b81c83bb1a2.png","https://ruben3d.github.io/retroflightsim/dist/assets/font-hud-medium.png":"_assets/7ae14b84913332bde2c4.png","/retroflightsim/dist/assets/font-hud-medium.png":"_assets/7ae14b84913332bde2c4.png","/dist/assets/font-hud-medium.png":"_assets/7ae14b84913332bde2c4.png","/assets/font-hud-medium.png":"_assets/7ae14b84913332bde2c4.png","/font-hud-medium.png":"_assets/7ae14b84913332bde2c4.png","https://ruben3d.github.io/retroflightsim/dist/assets/samradar01.glb":"_assets/8125b1503e24bf0e7ec6.glb","/retroflightsim/dist/assets/samradar01.glb":"_assets/8125b1503e24bf0e7ec6.glb","/dist/assets/samradar01.glb":"_assets/8125b1503e24bf0e7ec6.glb","/assets/samradar01.glb":"_assets/8125b1503e24bf0e7ec6.glb","/samradar01.glb":"_assets/8125b1503e24bf0e7ec6.glb"};
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
