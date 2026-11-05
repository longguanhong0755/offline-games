(() => {
  "use strict";
  const RUNTIME_MAP = {"https://g.w3technic.com/games/2048-original/jquery-3.4.1.min.js":"_assets/0925e8ad7bd971391a8b.js","/games/2048-original/jquery-3.4.1.min.js":"_assets/0925e8ad7bd971391a8b.js","/2048-original/jquery-3.4.1.min.js":"_assets/0925e8ad7bd971391a8b.js","/jquery-3.4.1.min.js":"_assets/0925e8ad7bd971391a8b.js","https://g.w3technic.com/games/2048-original/c2runtime.js":"_assets/5d6df6693e1c400e9d56.js","/games/2048-original/c2runtime.js":"_assets/5d6df6693e1c400e9d56.js","/2048-original/c2runtime.js":"_assets/5d6df6693e1c400e9d56.js","/c2runtime.js":"_assets/5d6df6693e1c400e9d56.js","https://g.w3technic.com/games/2048-original/data.js":"_assets/a00ee564fca66857f67a.js","/games/2048-original/data.js":"_assets/a00ee564fca66857f67a.js","/2048-original/data.js":"_assets/a00ee564fca66857f67a.js","/data.js":"_assets/a00ee564fca66857f67a.js","https://g.w3technic.com/games/2048-original/offlineClient.js":"_assets/c23af70fed3a2e281e9f.js","/games/2048-original/offlineClient.js":"_assets/c23af70fed3a2e281e9f.js","/2048-original/offlineClient.js":"_assets/c23af70fed3a2e281e9f.js","/offlineClient.js":"_assets/c23af70fed3a2e281e9f.js","https://g.w3technic.com/games/2048-original/images/arrow-sheet0.png":"_assets/871f29df0f1e9d4e1502.webp","/games/2048-original/images/arrow-sheet0.png":"_assets/871f29df0f1e9d4e1502.webp","/2048-original/images/arrow-sheet0.png":"_assets/871f29df0f1e9d4e1502.webp","/images/arrow-sheet0.png":"_assets/871f29df0f1e9d4e1502.webp","/arrow-sheet0.png":"_assets/871f29df0f1e9d4e1502.webp","https://g.w3technic.com/games/2048-original/loading-logo.png":"_assets/8aa90e18b0b03ed9bca0.webp","/games/2048-original/loading-logo.png":"_assets/8aa90e18b0b03ed9bca0.webp","/2048-original/loading-logo.png":"_assets/8aa90e18b0b03ed9bca0.webp","/loading-logo.png":"_assets/8aa90e18b0b03ed9bca0.webp","https://g.w3technic.com/games/2048-original/images/arrow-sheet1.png":"_assets/f8c6b7a1612412103eca.webp","/games/2048-original/images/arrow-sheet1.png":"_assets/f8c6b7a1612412103eca.webp","/2048-original/images/arrow-sheet1.png":"_assets/f8c6b7a1612412103eca.webp","/images/arrow-sheet1.png":"_assets/f8c6b7a1612412103eca.webp","/arrow-sheet1.png":"_assets/f8c6b7a1612412103eca.webp","https://g.w3technic.com/games/2048-original/images/highscore-sheet0.png":"_assets/822496a17141d44c3f2d.webp","/games/2048-original/images/highscore-sheet0.png":"_assets/822496a17141d44c3f2d.webp","/2048-original/images/highscore-sheet0.png":"_assets/822496a17141d44c3f2d.webp","/images/highscore-sheet0.png":"_assets/822496a17141d44c3f2d.webp","/highscore-sheet0.png":"_assets/822496a17141d44c3f2d.webp","https://g.w3technic.com/games/2048-original/images/background-sheet0.png":"_assets/21dde687d87513eb9a9d.webp","/games/2048-original/images/background-sheet0.png":"_assets/21dde687d87513eb9a9d.webp","/2048-original/images/background-sheet0.png":"_assets/21dde687d87513eb9a9d.webp","/images/background-sheet0.png":"_assets/21dde687d87513eb9a9d.webp","/background-sheet0.png":"_assets/21dde687d87513eb9a9d.webp","https://g.w3technic.com/games/2048-original/images/tittle-sheet0.png":"_assets/40db205b46511f51804c.webp","/games/2048-original/images/tittle-sheet0.png":"_assets/40db205b46511f51804c.webp","/2048-original/images/tittle-sheet0.png":"_assets/40db205b46511f51804c.webp","/images/tittle-sheet0.png":"_assets/40db205b46511f51804c.webp","/tittle-sheet0.png":"_assets/40db205b46511f51804c.webp","https://g.w3technic.com/games/2048-original/images/start-sheet0.png":"_assets/274a4ab322899fd6e453.webp","/games/2048-original/images/start-sheet0.png":"_assets/274a4ab322899fd6e453.webp","/2048-original/images/start-sheet0.png":"_assets/274a4ab322899fd6e453.webp","/images/start-sheet0.png":"_assets/274a4ab322899fd6e453.webp","/start-sheet0.png":"_assets/274a4ab322899fd6e453.webp","https://g.w3technic.com/games/2048-original/images/thumb-sheet0.png":"_assets/5825ecaa6259cab0ba19.webp","/games/2048-original/images/thumb-sheet0.png":"_assets/5825ecaa6259cab0ba19.webp","/2048-original/images/thumb-sheet0.png":"_assets/5825ecaa6259cab0ba19.webp","/images/thumb-sheet0.png":"_assets/5825ecaa6259cab0ba19.webp","/thumb-sheet0.png":"_assets/5825ecaa6259cab0ba19.webp","https://g.w3technic.com/games/2048-original/images/thumb-sheet1.png":"_assets/05ee7ae724242d560e4d.webp","/games/2048-original/images/thumb-sheet1.png":"_assets/05ee7ae724242d560e4d.webp","/2048-original/images/thumb-sheet1.png":"_assets/05ee7ae724242d560e4d.webp","/images/thumb-sheet1.png":"_assets/05ee7ae724242d560e4d.webp","/thumb-sheet1.png":"_assets/05ee7ae724242d560e4d.webp","https://g.w3technic.com/games/2048-original/images/thumb-sheet2.png":"_assets/4347ca6ea3fcbf93ebd1.webp","/games/2048-original/images/thumb-sheet2.png":"_assets/4347ca6ea3fcbf93ebd1.webp","/2048-original/images/thumb-sheet2.png":"_assets/4347ca6ea3fcbf93ebd1.webp","/images/thumb-sheet2.png":"_assets/4347ca6ea3fcbf93ebd1.webp","/thumb-sheet2.png":"_assets/4347ca6ea3fcbf93ebd1.webp","https://g.w3technic.com/games/2048-original/images/levels-sheet0.png":"_assets/794d448aa97cf400c4d0.webp","/games/2048-original/images/levels-sheet0.png":"_assets/794d448aa97cf400c4d0.webp","/2048-original/images/levels-sheet0.png":"_assets/794d448aa97cf400c4d0.webp","/images/levels-sheet0.png":"_assets/794d448aa97cf400c4d0.webp","/levels-sheet0.png":"_assets/794d448aa97cf400c4d0.webp","https://g.w3technic.com/games/2048-original/media/sfx_harpoon.ogg":"_assets/d593de52f4740f8958d2.ogg","/games/2048-original/media/sfx_harpoon.ogg":"_assets/d593de52f4740f8958d2.ogg","/2048-original/media/sfx_harpoon.ogg":"_assets/d593de52f4740f8958d2.ogg","/media/sfx_harpoon.ogg":"_assets/d593de52f4740f8958d2.ogg","/sfx_harpoon.ogg":"_assets/d593de52f4740f8958d2.ogg","https://g.w3technic.com/games/2048-original/media/sfx_box_fish.ogg":"_assets/584eb1baaa78ef25be2a.ogg","/games/2048-original/media/sfx_box_fish.ogg":"_assets/584eb1baaa78ef25be2a.ogg","/2048-original/media/sfx_box_fish.ogg":"_assets/584eb1baaa78ef25be2a.ogg","/media/sfx_box_fish.ogg":"_assets/584eb1baaa78ef25be2a.ogg","/sfx_box_fish.ogg":"_assets/584eb1baaa78ef25be2a.ogg","https://g.w3technic.com/games/2048-original/media/click.ogg":"_assets/426c2e3979bd5cc6040b.ogg","/games/2048-original/media/click.ogg":"_assets/426c2e3979bd5cc6040b.ogg","/2048-original/media/click.ogg":"_assets/426c2e3979bd5cc6040b.ogg","/media/click.ogg":"_assets/426c2e3979bd5cc6040b.ogg","/click.ogg":"_assets/426c2e3979bd5cc6040b.ogg","https://g.w3technic.com/games/2048-original/media/sfx_coin.ogg":"_assets/e1ef9ef2829e31c5ffb4.ogg","/games/2048-original/media/sfx_coin.ogg":"_assets/e1ef9ef2829e31c5ffb4.ogg","/2048-original/media/sfx_coin.ogg":"_assets/e1ef9ef2829e31c5ffb4.ogg","/media/sfx_coin.ogg":"_assets/e1ef9ef2829e31c5ffb4.ogg","/sfx_coin.ogg":"_assets/e1ef9ef2829e31c5ffb4.ogg","https://g.w3technic.com/games/2048-original/images/back-sheet0.png":"_assets/60c10b6657ec7fee0e2a.webp","/games/2048-original/images/back-sheet0.png":"_assets/60c10b6657ec7fee0e2a.webp","/2048-original/images/back-sheet0.png":"_assets/60c10b6657ec7fee0e2a.webp","/images/back-sheet0.png":"_assets/60c10b6657ec7fee0e2a.webp","/back-sheet0.png":"_assets/60c10b6657ec7fee0e2a.webp","https://g.w3technic.com/games/2048-original/images/restart-sheet0.png":"_assets/8d78894769e82e212676.webp","/games/2048-original/images/restart-sheet0.png":"_assets/8d78894769e82e212676.webp","/2048-original/images/restart-sheet0.png":"_assets/8d78894769e82e212676.webp","/images/restart-sheet0.png":"_assets/8d78894769e82e212676.webp","/restart-sheet0.png":"_assets/8d78894769e82e212676.webp","https://g.w3technic.com/games/2048-original/images/block-sheet0.png":"_assets/2d310abf919012e629bf.webp","/games/2048-original/images/block-sheet0.png":"_assets/2d310abf919012e629bf.webp","/2048-original/images/block-sheet0.png":"_assets/2d310abf919012e629bf.webp","/images/block-sheet0.png":"_assets/2d310abf919012e629bf.webp","/block-sheet0.png":"_assets/2d310abf919012e629bf.webp","https://g.w3technic.com/games/2048-original/images/block-sheet1.png":"_assets/fae0028c8b3655ec6e16.webp","/games/2048-original/images/block-sheet1.png":"_assets/fae0028c8b3655ec6e16.webp","/2048-original/images/block-sheet1.png":"_assets/fae0028c8b3655ec6e16.webp","/images/block-sheet1.png":"_assets/fae0028c8b3655ec6e16.webp","/block-sheet1.png":"_assets/fae0028c8b3655ec6e16.webp","https://g.w3technic.com/games/2048-original/images/frame-sheet0.png":"_assets/3804278b94bcfd724ad8.webp","/games/2048-original/images/frame-sheet0.png":"_assets/3804278b94bcfd724ad8.webp","/2048-original/images/frame-sheet0.png":"_assets/3804278b94bcfd724ad8.webp","/images/frame-sheet0.png":"_assets/3804278b94bcfd724ad8.webp","/frame-sheet0.png":"_assets/3804278b94bcfd724ad8.webp","https://g.w3technic.com/games/2048-original/images/frame-sheet1.png":"_assets/031b5300baa5bed0b00d.webp","/games/2048-original/images/frame-sheet1.png":"_assets/031b5300baa5bed0b00d.webp","/2048-original/images/frame-sheet1.png":"_assets/031b5300baa5bed0b00d.webp","/images/frame-sheet1.png":"_assets/031b5300baa5bed0b00d.webp","/frame-sheet1.png":"_assets/031b5300baa5bed0b00d.webp","https://g.w3technic.com/games/2048-original/images/frame-sheet2.png":"_assets/987848bd76ae2f2f6016.webp","/games/2048-original/images/frame-sheet2.png":"_assets/987848bd76ae2f2f6016.webp","/2048-original/images/frame-sheet2.png":"_assets/987848bd76ae2f2f6016.webp","/images/frame-sheet2.png":"_assets/987848bd76ae2f2f6016.webp","/frame-sheet2.png":"_assets/987848bd76ae2f2f6016.webp","https://g.w3technic.com/games/2048-original/images/score-sheet0.png":"_assets/a92decd17db12fd48deb.webp","/games/2048-original/images/score-sheet0.png":"_assets/a92decd17db12fd48deb.webp","/2048-original/images/score-sheet0.png":"_assets/a92decd17db12fd48deb.webp","/images/score-sheet0.png":"_assets/a92decd17db12fd48deb.webp","/score-sheet0.png":"_assets/a92decd17db12fd48deb.webp","https://g.w3technic.com/games/2048-original/images/high-sheet0.png":"_assets/26abd5a33cbc32dfc70a.webp","/games/2048-original/images/high-sheet0.png":"_assets/26abd5a33cbc32dfc70a.webp","/2048-original/images/high-sheet0.png":"_assets/26abd5a33cbc32dfc70a.webp","/images/high-sheet0.png":"_assets/26abd5a33cbc32dfc70a.webp","/high-sheet0.png":"_assets/26abd5a33cbc32dfc70a.webp","https://g.w3technic.com/games/2048-original/images/gametittle-sheet0.png":"_assets/18c5d96c657bb7240025.webp","/games/2048-original/images/gametittle-sheet0.png":"_assets/18c5d96c657bb7240025.webp","/2048-original/images/gametittle-sheet0.png":"_assets/18c5d96c657bb7240025.webp","/images/gametittle-sheet0.png":"_assets/18c5d96c657bb7240025.webp","/gametittle-sheet0.png":"_assets/18c5d96c657bb7240025.webp","https://g.w3technic.com/games/2048-original/images/scores-sheet0.png":"_assets/5edc4d96c806bc91164a.webp","/games/2048-original/images/scores-sheet0.png":"_assets/5edc4d96c806bc91164a.webp","/2048-original/images/scores-sheet0.png":"_assets/5edc4d96c806bc91164a.webp","/images/scores-sheet0.png":"_assets/5edc4d96c806bc91164a.webp","/scores-sheet0.png":"_assets/5edc4d96c806bc91164a.webp","https://g.w3technic.com/games/2048-original/images/highfont.png":"_assets/0cc01d0e06f151db4509.webp","/games/2048-original/images/highfont.png":"_assets/0cc01d0e06f151db4509.webp","/2048-original/images/highfont.png":"_assets/0cc01d0e06f151db4509.webp","/images/highfont.png":"_assets/0cc01d0e06f151db4509.webp","/highfont.png":"_assets/0cc01d0e06f151db4509.webp","https://g.w3technic.com/games/2048-original/images/scorefont.png":"_assets/40d48b1ab5122f81dd55.webp","/games/2048-original/images/scorefont.png":"_assets/40d48b1ab5122f81dd55.webp","/2048-original/images/scorefont.png":"_assets/40d48b1ab5122f81dd55.webp","/images/scorefont.png":"_assets/40d48b1ab5122f81dd55.webp","/scorefont.png":"_assets/40d48b1ab5122f81dd55.webp","https://g.w3technic.com/games/2048-original/images/tile-sheet0.png":"_assets/30fc333ca17a6d200fcb.webp","/games/2048-original/images/tile-sheet0.png":"_assets/30fc333ca17a6d200fcb.webp","/2048-original/images/tile-sheet0.png":"_assets/30fc333ca17a6d200fcb.webp","/images/tile-sheet0.png":"_assets/30fc333ca17a6d200fcb.webp","/tile-sheet0.png":"_assets/30fc333ca17a6d200fcb.webp","https://g.w3technic.com/games/2048-original/images/chess-sheet0.png":"_assets/7baa14fceb6999c6f729.webp","/games/2048-original/images/chess-sheet0.png":"_assets/7baa14fceb6999c6f729.webp","/2048-original/images/chess-sheet0.png":"_assets/7baa14fceb6999c6f729.webp","/images/chess-sheet0.png":"_assets/7baa14fceb6999c6f729.webp","/chess-sheet0.png":"_assets/7baa14fceb6999c6f729.webp"};
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

  // Neutralize every external link, including links created by the game at runtime.
  function offlineNeutralizeLink(anchor) {
    if (!anchor || !anchor.getAttribute) return;
    const raw = anchor.getAttribute("href");
    if (!raw) return;
    try {
      const target = new URL(raw, document.baseURI);
      if (target.origin !== location.origin) {
        anchor.removeAttribute("href");
        anchor.removeAttribute("target");
        anchor.style.pointerEvents = "none";
      }
    } catch (_) {}
  }
  function offlineScanLinks(root) {
    if (!root || !root.querySelectorAll) return;
    root.querySelectorAll("a[href]").forEach(offlineNeutralizeLink);
    if (root.matches && root.matches("a[href]")) offlineNeutralizeLink(root);
  }
  document.addEventListener("DOMContentLoaded", () => offlineScanLinks(document), { once: true });
  new MutationObserver((records) => {
    for (const record of records) {
      if (record.type === "attributes") offlineNeutralizeLink(record.target);
      for (const node of record.addedNodes || []) offlineScanLinks(node);
    }
  }).observe(document.documentElement, { subtree: true, childList: true, attributes: true, attributeFilter: ["href"] });

})();
