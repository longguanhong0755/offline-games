(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kevinleedrum.github.io/vlackjack/assets/index-BPxplBhL.css":"_assets/32274d8f71a0e8923faa.css","/vlackjack/assets/index-BPxplBhL.css":"_assets/32274d8f71a0e8923faa.css","/assets/index-BPxplBhL.css":"_assets/32274d8f71a0e8923faa.css","/index-BPxplBhL.css":"_assets/32274d8f71a0e8923faa.css","https://kevinleedrum.github.io/vlackjack/assets/index-CuFKv9Bp.js":"_assets/767b030e8f1693f05bd6.js","/vlackjack/assets/index-CuFKv9Bp.js":"_assets/767b030e8f1693f05bd6.js","/assets/index-CuFKv9Bp.js":"_assets/767b030e8f1693f05bd6.js","/index-CuFKv9Bp.js":"_assets/767b030e8f1693f05bd6.js","https://kevinleedrum.github.io/vlackjack/assets/757328__steaq__ui-hover-item-NmFonoa5.mp3":"_assets/8ce2ccce026c652c2058.mp3","/vlackjack/assets/757328__steaq__ui-hover-item-NmFonoa5.mp3":"_assets/8ce2ccce026c652c2058.mp3","/assets/757328__steaq__ui-hover-item-NmFonoa5.mp3":"_assets/8ce2ccce026c652c2058.mp3","/757328__steaq__ui-hover-item-NmFonoa5.mp3":"_assets/8ce2ccce026c652c2058.mp3","https://kevinleedrum.github.io/vlackjack/assets/159698__qubodup__scroll-step-hover-sound-for-user-interface-DG_15QWl.mp3":"_assets/78aa30648aa259476b6f.mp3","/vlackjack/assets/159698__qubodup__scroll-step-hover-sound-for-user-interface-DG_15QWl.mp3":"_assets/78aa30648aa259476b6f.mp3","/assets/159698__qubodup__scroll-step-hover-sound-for-user-interface-DG_15QWl.mp3":"_assets/78aa30648aa259476b6f.mp3","/159698__qubodup__scroll-step-hover-sound-for-user-interface-DG_15QWl.mp3":"_assets/78aa30648aa259476b6f.mp3","https://kevinleedrum.github.io/vlackjack/assets/619832__cogfirestudios__puzzle-game-victory-melody-BTz0ctpY.mp3":"_assets/d4cefbb88f2feb50e734.mp3","/vlackjack/assets/619832__cogfirestudios__puzzle-game-victory-melody-BTz0ctpY.mp3":"_assets/d4cefbb88f2feb50e734.mp3","/assets/619832__cogfirestudios__puzzle-game-victory-melody-BTz0ctpY.mp3":"_assets/d4cefbb88f2feb50e734.mp3","/619832__cogfirestudios__puzzle-game-victory-melody-BTz0ctpY.mp3":"_assets/d4cefbb88f2feb50e734.mp3","https://kevinleedrum.github.io/vlackjack/assets/619840__cogfirestudios__achievement-accomplish-jingle-app-ui-CAVOW7lp.mp3":"_assets/b4690c4d198805aae5ac.mp3","/vlackjack/assets/619840__cogfirestudios__achievement-accomplish-jingle-app-ui-CAVOW7lp.mp3":"_assets/b4690c4d198805aae5ac.mp3","/assets/619840__cogfirestudios__achievement-accomplish-jingle-app-ui-CAVOW7lp.mp3":"_assets/b4690c4d198805aae5ac.mp3","/619840__cogfirestudios__achievement-accomplish-jingle-app-ui-CAVOW7lp.mp3":"_assets/b4690c4d198805aae5ac.mp3","https://kevinleedrum.github.io/vlackjack/assets/636642__cogfirestudios__app-ui-puzzle-game-CUcUBGWm.mp3":"_assets/4fefd3dddb5df257d5a7.mp3","/vlackjack/assets/636642__cogfirestudios__app-ui-puzzle-game-CUcUBGWm.mp3":"_assets/4fefd3dddb5df257d5a7.mp3","/assets/636642__cogfirestudios__app-ui-puzzle-game-CUcUBGWm.mp3":"_assets/4fefd3dddb5df257d5a7.mp3","/636642__cogfirestudios__app-ui-puzzle-game-CUcUBGWm.mp3":"_assets/4fefd3dddb5df257d5a7.mp3","https://kevinleedrum.github.io/vlackjack/assets/636624__cogfirestudios__deep-hit-DXQz53HT.mp3":"_assets/943517a0f8e3e1f22c43.mp3","/vlackjack/assets/636624__cogfirestudios__deep-hit-DXQz53HT.mp3":"_assets/943517a0f8e3e1f22c43.mp3","/assets/636624__cogfirestudios__deep-hit-DXQz53HT.mp3":"_assets/943517a0f8e3e1f22c43.mp3","/636624__cogfirestudios__deep-hit-DXQz53HT.mp3":"_assets/943517a0f8e3e1f22c43.mp3","https://kevinleedrum.github.io/vlackjack/assets/636635__cogfirestudios__app-ui-puzzle-game-DBxRGWWT.mp3":"_assets/eeccc8ff9455f7719a11.mp3","/vlackjack/assets/636635__cogfirestudios__app-ui-puzzle-game-DBxRGWWT.mp3":"_assets/eeccc8ff9455f7719a11.mp3","/assets/636635__cogfirestudios__app-ui-puzzle-game-DBxRGWWT.mp3":"_assets/eeccc8ff9455f7719a11.mp3","/636635__cogfirestudios__app-ui-puzzle-game-DBxRGWWT.mp3":"_assets/eeccc8ff9455f7719a11.mp3","https://kevinleedrum.github.io/vlackjack/assets/636649__cogfirestudios__ui-app-DmWz7BsX.mp3":"_assets/75915f7de7af69acd0c8.mp3","/vlackjack/assets/636649__cogfirestudios__ui-app-DmWz7BsX.mp3":"_assets/75915f7de7af69acd0c8.mp3","/assets/636649__cogfirestudios__ui-app-DmWz7BsX.mp3":"_assets/75915f7de7af69acd0c8.mp3","/636649__cogfirestudios__ui-app-DmWz7BsX.mp3":"_assets/75915f7de7af69acd0c8.mp3","https://kevinleedrum.github.io/vlackjack/assets/636659__cogfirestudios__ui-achievement-puzzle-game-application-BJEQr0a1.mp3":"_assets/da5792676e93353f72e7.mp3","/vlackjack/assets/636659__cogfirestudios__ui-achievement-puzzle-game-application-BJEQr0a1.mp3":"_assets/da5792676e93353f72e7.mp3","/assets/636659__cogfirestudios__ui-achievement-puzzle-game-application-BJEQr0a1.mp3":"_assets/da5792676e93353f72e7.mp3","/636659__cogfirestudios__ui-achievement-puzzle-game-application-BJEQr0a1.mp3":"_assets/da5792676e93353f72e7.mp3","https://kevinleedrum.github.io/vlackjack/assets/636647__cogfirestudios__ui-app-Dc-n66m5.mp3":"_assets/bb594d7deaafab4b9c2b.mp3","/vlackjack/assets/636647__cogfirestudios__ui-app-Dc-n66m5.mp3":"_assets/bb594d7deaafab4b9c2b.mp3","/assets/636647__cogfirestudios__ui-app-Dc-n66m5.mp3":"_assets/bb594d7deaafab4b9c2b.mp3","/636647__cogfirestudios__ui-app-Dc-n66m5.mp3":"_assets/bb594d7deaafab4b9c2b.mp3","https://kevinleedrum.github.io/vlackjack/assets/636674__cogfirestudios__app-ui-sound-ByyT7r-c.mp3":"_assets/9266702869306ef15e11.mp3","/vlackjack/assets/636674__cogfirestudios__app-ui-sound-ByyT7r-c.mp3":"_assets/9266702869306ef15e11.mp3","/assets/636674__cogfirestudios__app-ui-sound-ByyT7r-c.mp3":"_assets/9266702869306ef15e11.mp3","/636674__cogfirestudios__app-ui-sound-ByyT7r-c.mp3":"_assets/9266702869306ef15e11.mp3","https://kevinleedrum.github.io/vlackjack/assets/636677__cogfirestudios__app-ui-sound-CKEfOCUs.mp3":"_assets/270ddadcb336d2103c5f.mp3","/vlackjack/assets/636677__cogfirestudios__app-ui-sound-CKEfOCUs.mp3":"_assets/270ddadcb336d2103c5f.mp3","/assets/636677__cogfirestudios__app-ui-sound-CKEfOCUs.mp3":"_assets/270ddadcb336d2103c5f.mp3","/636677__cogfirestudios__app-ui-sound-CKEfOCUs.mp3":"_assets/270ddadcb336d2103c5f.mp3","https://kevinleedrum.github.io/vlackjack/assets/636655__cogfirestudios__ui-achievement-puzzle-game-application-jTr6NO-t.mp3":"_assets/ede9f4abdda72e171e68.mp3","/vlackjack/assets/636655__cogfirestudios__ui-achievement-puzzle-game-application-jTr6NO-t.mp3":"_assets/ede9f4abdda72e171e68.mp3","/assets/636655__cogfirestudios__ui-achievement-puzzle-game-application-jTr6NO-t.mp3":"_assets/ede9f4abdda72e171e68.mp3","/636655__cogfirestudios__ui-achievement-puzzle-game-application-jTr6NO-t.mp3":"_assets/ede9f4abdda72e171e68.mp3","https://kevinleedrum.github.io/vlackjack/fonts/big_shoulders_display.woff2":"_assets/97526057ab8cf974b532.woff2","/vlackjack/fonts/big_shoulders_display.woff2":"_assets/97526057ab8cf974b532.woff2","/fonts/big_shoulders_display.woff2":"_assets/97526057ab8cf974b532.woff2","/big_shoulders_display.woff2":"_assets/97526057ab8cf974b532.woff2","https://kevinleedrum.github.io/vlackjack/assets/636634__cogfirestudios__app-ui-puzzle-game-BwT1vrML.mp3":"_assets/021d0591e4d79867ecdd.mp3","/vlackjack/assets/636634__cogfirestudios__app-ui-puzzle-game-BwT1vrML.mp3":"_assets/021d0591e4d79867ecdd.mp3","/assets/636634__cogfirestudios__app-ui-puzzle-game-BwT1vrML.mp3":"_assets/021d0591e4d79867ecdd.mp3","/636634__cogfirestudios__app-ui-puzzle-game-BwT1vrML.mp3":"_assets/021d0591e4d79867ecdd.mp3"};
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
