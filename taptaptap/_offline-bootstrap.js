(() => {
  "use strict";
  const RUNTIME_MAP = {"https://mahdif.github.io/taptaptap/style/main.css":"_assets/84c398b10a57ea346ded.css","/taptaptap/style/main.css":"_assets/84c398b10a57ea346ded.css","/style/main.css":"_assets/84c398b10a57ea346ded.css","/main.css":"_assets/84c398b10a57ea346ded.css","https://mahdif.github.io/taptaptap/images/timeline-images/jordan-map.png":"_assets/e4f1a5034e06179188fb.png","/taptaptap/images/timeline-images/jordan-map.png":"_assets/e4f1a5034e06179188fb.png","/images/timeline-images/jordan-map.png":"_assets/e4f1a5034e06179188fb.png","/timeline-images/jordan-map.png":"_assets/e4f1a5034e06179188fb.png","/jordan-map.png":"_assets/e4f1a5034e06179188fb.png","https://mahdif.github.io/taptaptap/images/avatar-mahdi-alfarra.jpg":"_assets/5510f747d0138227d932.jpg","/taptaptap/images/avatar-mahdi-alfarra.jpg":"_assets/5510f747d0138227d932.jpg","/images/avatar-mahdi-alfarra.jpg":"_assets/5510f747d0138227d932.jpg","/avatar-mahdi-alfarra.jpg":"_assets/5510f747d0138227d932.jpg","https://mahdif.github.io/taptaptap/images/timeline-images/tiny-project-code.png":"_assets/94df714a910bdb42f352.png","/taptaptap/images/timeline-images/tiny-project-code.png":"_assets/94df714a910bdb42f352.png","/images/timeline-images/tiny-project-code.png":"_assets/94df714a910bdb42f352.png","/timeline-images/tiny-project-code.png":"_assets/94df714a910bdb42f352.png","/tiny-project-code.png":"_assets/94df714a910bdb42f352.png","https://mahdif.github.io/taptaptap/images/timeline-images/my-friend-amr.png":"_assets/6e5e8aa9375e679c5d9e.png","/taptaptap/images/timeline-images/my-friend-amr.png":"_assets/6e5e8aa9375e679c5d9e.png","/images/timeline-images/my-friend-amr.png":"_assets/6e5e8aa9375e679c5d9e.png","/timeline-images/my-friend-amr.png":"_assets/6e5e8aa9375e679c5d9e.png","/my-friend-amr.png":"_assets/6e5e8aa9375e679c5d9e.png","https://mahdif.github.io/taptaptap/images/timeline-images/whac-a-mole-game.png":"_assets/36dddf1ef23c41f4f8e9.png","/taptaptap/images/timeline-images/whac-a-mole-game.png":"_assets/36dddf1ef23c41f4f8e9.png","/images/timeline-images/whac-a-mole-game.png":"_assets/36dddf1ef23c41f4f8e9.png","/timeline-images/whac-a-mole-game.png":"_assets/36dddf1ef23c41f4f8e9.png","/whac-a-mole-game.png":"_assets/36dddf1ef23c41f4f8e9.png","https://mahdif.github.io/taptaptap/images/timeline-images/first-proof-of-concept.png":"_assets/f326a0f2823631c0ef16.png","/taptaptap/images/timeline-images/first-proof-of-concept.png":"_assets/f326a0f2823631c0ef16.png","/images/timeline-images/first-proof-of-concept.png":"_assets/f326a0f2823631c0ef16.png","/timeline-images/first-proof-of-concept.png":"_assets/f326a0f2823631c0ef16.png","/first-proof-of-concept.png":"_assets/f326a0f2823631c0ef16.png","https://mahdif.github.io/taptaptap/images/timeline-images/responsive-love.png":"_assets/f2a876ef2701a87b08ed.png","/taptaptap/images/timeline-images/responsive-love.png":"_assets/f2a876ef2701a87b08ed.png","/images/timeline-images/responsive-love.png":"_assets/f2a876ef2701a87b08ed.png","/timeline-images/responsive-love.png":"_assets/f2a876ef2701a87b08ed.png","/responsive-love.png":"_assets/f2a876ef2701a87b08ed.png","https://mahdif.github.io/taptaptap/images/timeline-images/replacing-emojis-with-images.png":"_assets/37d7fa281c2b36eaff60.png","/taptaptap/images/timeline-images/replacing-emojis-with-images.png":"_assets/37d7fa281c2b36eaff60.png","/images/timeline-images/replacing-emojis-with-images.png":"_assets/37d7fa281c2b36eaff60.png","/timeline-images/replacing-emojis-with-images.png":"_assets/37d7fa281c2b36eaff60.png","/replacing-emojis-with-images.png":"_assets/37d7fa281c2b36eaff60.png","https://mahdif.github.io/taptaptap/images/timeline-images/catch-the-emojis.png":"_assets/e0e5d54744a4f5e05969.png","/taptaptap/images/timeline-images/catch-the-emojis.png":"_assets/e0e5d54744a4f5e05969.png","/images/timeline-images/catch-the-emojis.png":"_assets/e0e5d54744a4f5e05969.png","/timeline-images/catch-the-emojis.png":"_assets/e0e5d54744a4f5e05969.png","/catch-the-emojis.png":"_assets/e0e5d54744a4f5e05969.png","https://mahdif.github.io/taptaptap/images/timeline-images/sound-pool.png":"_assets/39ccd8c6978511aad23c.png","/taptaptap/images/timeline-images/sound-pool.png":"_assets/39ccd8c6978511aad23c.png","/images/timeline-images/sound-pool.png":"_assets/39ccd8c6978511aad23c.png","/timeline-images/sound-pool.png":"_assets/39ccd8c6978511aad23c.png","/sound-pool.png":"_assets/39ccd8c6978511aad23c.png","https://mahdif.github.io/taptaptap/images/timeline-images/end-of-catch-the-emojis.png":"_assets/156ab1c94d416c6bda53.png","/taptaptap/images/timeline-images/end-of-catch-the-emojis.png":"_assets/156ab1c94d416c6bda53.png","/images/timeline-images/end-of-catch-the-emojis.png":"_assets/156ab1c94d416c6bda53.png","/timeline-images/end-of-catch-the-emojis.png":"_assets/156ab1c94d416c6bda53.png","/end-of-catch-the-emojis.png":"_assets/156ab1c94d416c6bda53.png","https://mahdif.github.io/taptaptap/images/timeline-images/mahdi-hates-the-game.png":"_assets/40377678643a795f78e4.png","/taptaptap/images/timeline-images/mahdi-hates-the-game.png":"_assets/40377678643a795f78e4.png","/images/timeline-images/mahdi-hates-the-game.png":"_assets/40377678643a795f78e4.png","/timeline-images/mahdi-hates-the-game.png":"_assets/40377678643a795f78e4.png","/mahdi-hates-the-game.png":"_assets/40377678643a795f78e4.png","https://mahdif.github.io/taptaptap/images/timeline-images/new-game-tap-tap-tap.png":"_assets/875abfddaf35ff2838bc.png","/taptaptap/images/timeline-images/new-game-tap-tap-tap.png":"_assets/875abfddaf35ff2838bc.png","/images/timeline-images/new-game-tap-tap-tap.png":"_assets/875abfddaf35ff2838bc.png","/timeline-images/new-game-tap-tap-tap.png":"_assets/875abfddaf35ff2838bc.png","/new-game-tap-tap-tap.png":"_assets/875abfddaf35ff2838bc.png","https://mahdif.github.io/taptaptap/images/timeline-images/debugging-control-panel.png":"_assets/9cbf304d7ce2be454534.png","/taptaptap/images/timeline-images/debugging-control-panel.png":"_assets/9cbf304d7ce2be454534.png","/images/timeline-images/debugging-control-panel.png":"_assets/9cbf304d7ce2be454534.png","/timeline-images/debugging-control-panel.png":"_assets/9cbf304d7ce2be454534.png","/debugging-control-panel.png":"_assets/9cbf304d7ce2be454534.png","https://mahdif.github.io/taptaptap/images/timeline-images/tap-tap-tap-game-animation.gif":"_assets/3db2093517e30751aa15.gif","/taptaptap/images/timeline-images/tap-tap-tap-game-animation.gif":"_assets/3db2093517e30751aa15.gif","/images/timeline-images/tap-tap-tap-game-animation.gif":"_assets/3db2093517e30751aa15.gif","/timeline-images/tap-tap-tap-game-animation.gif":"_assets/3db2093517e30751aa15.gif","/tap-tap-tap-game-animation.gif":"_assets/3db2093517e30751aa15.gif","https://mahdif.github.io/taptaptap/images/timeline-images/dj-mahdi-al-farra.png":"_assets/47055b09e6710c966368.png","/taptaptap/images/timeline-images/dj-mahdi-al-farra.png":"_assets/47055b09e6710c966368.png","/images/timeline-images/dj-mahdi-al-farra.png":"_assets/47055b09e6710c966368.png","/timeline-images/dj-mahdi-al-farra.png":"_assets/47055b09e6710c966368.png","/dj-mahdi-al-farra.png":"_assets/47055b09e6710c966368.png","https://mahdif.github.io/taptaptap/images/timeline-images/game-objects.png":"_assets/0c444a03ebcbe5c762d6.png","/taptaptap/images/timeline-images/game-objects.png":"_assets/0c444a03ebcbe5c762d6.png","/images/timeline-images/game-objects.png":"_assets/0c444a03ebcbe5c762d6.png","/timeline-images/game-objects.png":"_assets/0c444a03ebcbe5c762d6.png","/game-objects.png":"_assets/0c444a03ebcbe5c762d6.png","https://mahdif.github.io/taptaptap/images/timeline-images/infinite-levels.png":"_assets/4e6fa7110a3dde15ffa4.png","/taptaptap/images/timeline-images/infinite-levels.png":"_assets/4e6fa7110a3dde15ffa4.png","/images/timeline-images/infinite-levels.png":"_assets/4e6fa7110a3dde15ffa4.png","/timeline-images/infinite-levels.png":"_assets/4e6fa7110a3dde15ffa4.png","/infinite-levels.png":"_assets/4e6fa7110a3dde15ffa4.png","https://mahdif.github.io/taptaptap/images/timeline-images/whats-next-react-native.png":"_assets/51ff733339205bf8e346.png","/taptaptap/images/timeline-images/whats-next-react-native.png":"_assets/51ff733339205bf8e346.png","/images/timeline-images/whats-next-react-native.png":"_assets/51ff733339205bf8e346.png","/timeline-images/whats-next-react-native.png":"_assets/51ff733339205bf8e346.png","/whats-next-react-native.png":"_assets/51ff733339205bf8e346.png","https://mahdif.github.io/taptaptap/images/timeline-images/loved-the-game.png":"_assets/a20e7c03143c283afb06.png","/taptaptap/images/timeline-images/loved-the-game.png":"_assets/a20e7c03143c283afb06.png","/images/timeline-images/loved-the-game.png":"_assets/a20e7c03143c283afb06.png","/timeline-images/loved-the-game.png":"_assets/a20e7c03143c283afb06.png","/loved-the-game.png":"_assets/a20e7c03143c283afb06.png","https://mahdif.github.io/taptaptap/images/timeline-images/loved-me.png":"_assets/2d11375da7d691d820e9.png","/taptaptap/images/timeline-images/loved-me.png":"_assets/2d11375da7d691d820e9.png","/images/timeline-images/loved-me.png":"_assets/2d11375da7d691d820e9.png","/timeline-images/loved-me.png":"_assets/2d11375da7d691d820e9.png","/loved-me.png":"_assets/2d11375da7d691d820e9.png","https://mahdif.github.io/taptaptap/images/credits-images/nour-abu-saud.jpg":"_assets/16d91b51bd2ba1aadf4a.jpg","/taptaptap/images/credits-images/nour-abu-saud.jpg":"_assets/16d91b51bd2ba1aadf4a.jpg","/images/credits-images/nour-abu-saud.jpg":"_assets/16d91b51bd2ba1aadf4a.jpg","/credits-images/nour-abu-saud.jpg":"_assets/16d91b51bd2ba1aadf4a.jpg","/nour-abu-saud.jpg":"_assets/16d91b51bd2ba1aadf4a.jpg","https://mahdif.github.io/taptaptap/images/credits-images/amr-zahrawi.png":"_assets/efd3554e5c8fdea81e9f.png","/taptaptap/images/credits-images/amr-zahrawi.png":"_assets/efd3554e5c8fdea81e9f.png","/images/credits-images/amr-zahrawi.png":"_assets/efd3554e5c8fdea81e9f.png","/credits-images/amr-zahrawi.png":"_assets/efd3554e5c8fdea81e9f.png","/amr-zahrawi.png":"_assets/efd3554e5c8fdea81e9f.png","https://mahdif.github.io/taptaptap/images/credits-images/benjamin.png":"_assets/d2ba826679250fb0c519.png","/taptaptap/images/credits-images/benjamin.png":"_assets/d2ba826679250fb0c519.png","/images/credits-images/benjamin.png":"_assets/d2ba826679250fb0c519.png","/credits-images/benjamin.png":"_assets/d2ba826679250fb0c519.png","/benjamin.png":"_assets/d2ba826679250fb0c519.png","https://mahdif.github.io/taptaptap/images/credits-images/ignacio-crespo.jpg":"_assets/b99878a636059aeead33.jpg","/taptaptap/images/credits-images/ignacio-crespo.jpg":"_assets/b99878a636059aeead33.jpg","/images/credits-images/ignacio-crespo.jpg":"_assets/b99878a636059aeead33.jpg","/credits-images/ignacio-crespo.jpg":"_assets/b99878a636059aeead33.jpg","/ignacio-crespo.jpg":"_assets/b99878a636059aeead33.jpg","https://mahdif.github.io/taptaptap/images/credits-images/juan-rios.jpg":"_assets/d63844788b898a06c343.jpg","/taptaptap/images/credits-images/juan-rios.jpg":"_assets/d63844788b898a06c343.jpg","/images/credits-images/juan-rios.jpg":"_assets/d63844788b898a06c343.jpg","/credits-images/juan-rios.jpg":"_assets/d63844788b898a06c343.jpg","/juan-rios.jpg":"_assets/d63844788b898a06c343.jpg","https://mahdif.github.io/taptaptap/images/logo.svg":"_assets/6de9631c55137765f1ec.svg","/taptaptap/images/logo.svg":"_assets/6de9631c55137765f1ec.svg","/images/logo.svg":"_assets/6de9631c55137765f1ec.svg","/logo.svg":"_assets/6de9631c55137765f1ec.svg","https://mahdif.github.io/taptaptap/images/circles-bg.svg":"_assets/2071406823dfbbed8b34.svg","/taptaptap/images/circles-bg.svg":"_assets/2071406823dfbbed8b34.svg","/images/circles-bg.svg":"_assets/2071406823dfbbed8b34.svg","/circles-bg.svg":"_assets/2071406823dfbbed8b34.svg","https://mahdif.github.io/taptaptap/images/desktop-screenshot.png":"_assets/bf7d66c2e477b1765a6d.png","/taptaptap/images/desktop-screenshot.png":"_assets/bf7d66c2e477b1765a6d.png","/images/desktop-screenshot.png":"_assets/bf7d66c2e477b1765a6d.png","/desktop-screenshot.png":"_assets/bf7d66c2e477b1765a6d.png","https://mahdif.github.io/taptaptap/images/mobile-screenshot.png":"_assets/c12d356597afda935017.png","/taptaptap/images/mobile-screenshot.png":"_assets/c12d356597afda935017.png","/images/mobile-screenshot.png":"_assets/c12d356597afda935017.png","/mobile-screenshot.png":"_assets/c12d356597afda935017.png","https://mahdif.github.io/taptaptap/images/arrow-down.svg":"_assets/2e25b774b2dae826c6fe.svg","/taptaptap/images/arrow-down.svg":"_assets/2e25b774b2dae826c6fe.svg","/images/arrow-down.svg":"_assets/2e25b774b2dae826c6fe.svg","/arrow-down.svg":"_assets/2e25b774b2dae826c6fe.svg"};
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
