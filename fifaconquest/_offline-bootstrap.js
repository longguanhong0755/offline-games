(() => {
  "use strict";
  const RUNTIME_MAP = {"https://mmd-marcelo.github.io/fifaconquest/styles/index.css":"_assets/42a4d8c28d2fcc6770e8.css","/fifaconquest/styles/index.css":"_assets/42a4d8c28d2fcc6770e8.css","/styles/index.css":"_assets/42a4d8c28d2fcc6770e8.css","/index.css":"_assets/42a4d8c28d2fcc6770e8.css","https://mmd-marcelo.github.io/fifaconquest/data/teams.js":"_assets/0e82ff0820377a5ad984.js","/fifaconquest/data/teams.js":"_assets/0e82ff0820377a5ad984.js","/data/teams.js":"_assets/0e82ff0820377a5ad984.js","/teams.js":"_assets/0e82ff0820377a5ad984.js","https://mmd-marcelo.github.io/fifaconquest/assets/logos/LOGO-LETTER.SVG":"_assets/c61edc8d4cbafdb3cc6d.svg","/fifaconquest/assets/logos/LOGO-LETTER.SVG":"_assets/c61edc8d4cbafdb3cc6d.svg","/assets/logos/LOGO-LETTER.SVG":"_assets/c61edc8d4cbafdb3cc6d.svg","/logos/LOGO-LETTER.SVG":"_assets/c61edc8d4cbafdb3cc6d.svg","/LOGO-LETTER.SVG":"_assets/c61edc8d4cbafdb3cc6d.svg","https://mmd-marcelo.github.io/fifaconquest/assets/logos/chess-logo.svg":"_assets/a1357c10b12b44d8708c.svg","/fifaconquest/assets/logos/chess-logo.svg":"_assets/a1357c10b12b44d8708c.svg","/assets/logos/chess-logo.svg":"_assets/a1357c10b12b44d8708c.svg","/logos/chess-logo.svg":"_assets/a1357c10b12b44d8708c.svg","/chess-logo.svg":"_assets/a1357c10b12b44d8708c.svg","https://mmd-marcelo.github.io/fifaconquest/data/map-data.js":"_assets/d05c916d23b5e5062e00.js","/fifaconquest/data/map-data.js":"_assets/d05c916d23b5e5062e00.js","/data/map-data.js":"_assets/d05c916d23b5e5062e00.js","/map-data.js":"_assets/d05c916d23b5e5062e00.js","https://mmd-marcelo.github.io/fifaconquest/desafios/es.js":"_assets/bec84381570c3dfe13f6.js","/fifaconquest/desafios/es.js":"_assets/bec84381570c3dfe13f6.js","/desafios/es.js":"_assets/bec84381570c3dfe13f6.js","/es.js":"_assets/bec84381570c3dfe13f6.js","https://mmd-marcelo.github.io/fifaconquest/desafios/desafios.js":"_assets/9cabbfef9bb73030bef8.js","/fifaconquest/desafios/desafios.js":"_assets/9cabbfef9bb73030bef8.js","/desafios/desafios.js":"_assets/9cabbfef9bb73030bef8.js","/desafios.js":"_assets/9cabbfef9bb73030bef8.js","https://mmd-marcelo.github.io/fifaconquest/desafios/pt.js":"_assets/162e344d01f0d9eee675.js","/fifaconquest/desafios/pt.js":"_assets/162e344d01f0d9eee675.js","/desafios/pt.js":"_assets/162e344d01f0d9eee675.js","/pt.js":"_assets/162e344d01f0d9eee675.js","https://mmd-marcelo.github.io/fifaconquest/desafios/it.js":"_assets/71755a191fd76c48e8fd.js","/fifaconquest/desafios/it.js":"_assets/71755a191fd76c48e8fd.js","/desafios/it.js":"_assets/71755a191fd76c48e8fd.js","/it.js":"_assets/71755a191fd76c48e8fd.js","https://mmd-marcelo.github.io/fifaconquest/lang/manifest.js":"_assets/635833a164d42fe55fac.js","/fifaconquest/lang/manifest.js":"_assets/635833a164d42fe55fac.js","/lang/manifest.js":"_assets/635833a164d42fe55fac.js","/manifest.js":"_assets/635833a164d42fe55fac.js","https://mmd-marcelo.github.io/fifaconquest/desafios/en.js":"_assets/e6af339eed4709577251.js","/fifaconquest/desafios/en.js":"_assets/e6af339eed4709577251.js","/desafios/en.js":"_assets/e6af339eed4709577251.js","/en.js":"_assets/e6af339eed4709577251.js","https://mmd-marcelo.github.io/fifaconquest/lang/pt.js":"_assets/6d632d59eacf9b97b182.js","/fifaconquest/lang/pt.js":"_assets/6d632d59eacf9b97b182.js","/lang/pt.js":"_assets/6d632d59eacf9b97b182.js","https://mmd-marcelo.github.io/fifaconquest/js/game.js":"_assets/da9edd8258ea8f0cb4a3.js","/fifaconquest/js/game.js":"_assets/da9edd8258ea8f0cb4a3.js","/js/game.js":"_assets/da9edd8258ea8f0cb4a3.js","/game.js":"_assets/da9edd8258ea8f0cb4a3.js","https://mmd-marcelo.github.io/fifaconquest/desafios/fr.js":"_assets/4424991cc36fb0a0d7f3.js","/fifaconquest/desafios/fr.js":"_assets/4424991cc36fb0a0d7f3.js","/desafios/fr.js":"_assets/4424991cc36fb0a0d7f3.js","/fr.js":"_assets/4424991cc36fb0a0d7f3.js","https://mmd-marcelo.github.io/fifaconquest/js/sidebar.js":"_assets/b1e90a6d70cf0ccec3eb.js","/fifaconquest/js/sidebar.js":"_assets/b1e90a6d70cf0ccec3eb.js","/js/sidebar.js":"_assets/b1e90a6d70cf0ccec3eb.js","/sidebar.js":"_assets/b1e90a6d70cf0ccec3eb.js","https://mmd-marcelo.github.io/fifaconquest/js/battle.js":"_assets/75818cdd0b9bd6ed95e3.js","/fifaconquest/js/battle.js":"_assets/75818cdd0b9bd6ed95e3.js","/js/battle.js":"_assets/75818cdd0b9bd6ed95e3.js","/battle.js":"_assets/75818cdd0b9bd6ed95e3.js","https://mmd-marcelo.github.io/fifaconquest/js/bonus-chess.js":"_assets/8961c8ac6a692cd7c1d6.js","/fifaconquest/js/bonus-chess.js":"_assets/8961c8ac6a692cd7c1d6.js","/js/bonus-chess.js":"_assets/8961c8ac6a692cd7c1d6.js","/bonus-chess.js":"_assets/8961c8ac6a692cd7c1d6.js","https://mmd-marcelo.github.io/fifaconquest/js/map.js":"_assets/1e9c273e759d4f27c14f.js","/fifaconquest/js/map.js":"_assets/1e9c273e759d4f27c14f.js","/js/map.js":"_assets/1e9c273e759d4f27c14f.js","/map.js":"_assets/1e9c273e759d4f27c14f.js","https://mmd-marcelo.github.io/fifaconquest/js/bootstrap.js":"_assets/d234755895c66bf3d4f1.js","/fifaconquest/js/bootstrap.js":"_assets/d234755895c66bf3d4f1.js","/js/bootstrap.js":"_assets/d234755895c66bf3d4f1.js","/bootstrap.js":"_assets/d234755895c66bf3d4f1.js","https://mmd-marcelo.github.io/fifaconquest/styles/01-base.css":"_assets/04175116c1ff296e8aa3.css","/fifaconquest/styles/01-base.css":"_assets/04175116c1ff296e8aa3.css","/styles/01-base.css":"_assets/04175116c1ff296e8aa3.css","/01-base.css":"_assets/04175116c1ff296e8aa3.css","https://mmd-marcelo.github.io/fifaconquest/styles/02-setup.css":"_assets/9aedef9aaced1c6590ed.css","/fifaconquest/styles/02-setup.css":"_assets/9aedef9aaced1c6590ed.css","/styles/02-setup.css":"_assets/9aedef9aaced1c6590ed.css","/02-setup.css":"_assets/9aedef9aaced1c6590ed.css","https://mmd-marcelo.github.io/fifaconquest/styles/03-game-layout.css":"_assets/280d62fda0d0dd04c501.css","/fifaconquest/styles/03-game-layout.css":"_assets/280d62fda0d0dd04c501.css","/styles/03-game-layout.css":"_assets/280d62fda0d0dd04c501.css","/03-game-layout.css":"_assets/280d62fda0d0dd04c501.css","https://mmd-marcelo.github.io/fifaconquest/styles/04-map.css":"_assets/2cacb2fa53dc61062abb.css","/fifaconquest/styles/04-map.css":"_assets/2cacb2fa53dc61062abb.css","/styles/04-map.css":"_assets/2cacb2fa53dc61062abb.css","/04-map.css":"_assets/2cacb2fa53dc61062abb.css","https://mmd-marcelo.github.io/fifaconquest/styles/05-sidebar.css":"_assets/fd837d18fa3eef8739de.css","/fifaconquest/styles/05-sidebar.css":"_assets/fd837d18fa3eef8739de.css","/styles/05-sidebar.css":"_assets/fd837d18fa3eef8739de.css","/05-sidebar.css":"_assets/fd837d18fa3eef8739de.css","https://mmd-marcelo.github.io/fifaconquest/styles/06-modals.css":"_assets/4bd8208cb547ba8c8e7c.css","/fifaconquest/styles/06-modals.css":"_assets/4bd8208cb547ba8c8e7c.css","/styles/06-modals.css":"_assets/4bd8208cb547ba8c8e7c.css","/06-modals.css":"_assets/4bd8208cb547ba8c8e7c.css","https://mmd-marcelo.github.io/fifaconquest/styles/08-responsive-and-score.css":"_assets/9cf2a925414f4d4c658a.css","/fifaconquest/styles/08-responsive-and-score.css":"_assets/9cf2a925414f4d4c658a.css","/styles/08-responsive-and-score.css":"_assets/9cf2a925414f4d4c658a.css","/08-responsive-and-score.css":"_assets/9cf2a925414f4d4c658a.css","https://mmd-marcelo.github.io/fifaconquest/styles/07-panels-and-actions.css":"_assets/199f63c05b5275875233.css","/fifaconquest/styles/07-panels-and-actions.css":"_assets/199f63c05b5275875233.css","/styles/07-panels-and-actions.css":"_assets/199f63c05b5275875233.css","/07-panels-and-actions.css":"_assets/199f63c05b5275875233.css","https://mmd-marcelo.github.io/fifaconquest/styles/09-theme.css":"_assets/341a43bdef5d4ff8e64c.css","/fifaconquest/styles/09-theme.css":"_assets/341a43bdef5d4ff8e64c.css","/styles/09-theme.css":"_assets/341a43bdef5d4ff8e64c.css","/09-theme.css":"_assets/341a43bdef5d4ff8e64c.css","https://mmd-marcelo.github.io/fifaconquest/styles/10-bonus-chess.css":"_assets/975ccca5374ddeacfd32.css","/fifaconquest/styles/10-bonus-chess.css":"_assets/975ccca5374ddeacfd32.css","/styles/10-bonus-chess.css":"_assets/975ccca5374ddeacfd32.css","/10-bonus-chess.css":"_assets/975ccca5374ddeacfd32.css","https://mmd-marcelo.github.io/fifaconquest/data/world-geojson.js":"_assets/212fb9a83d5023874a1a.js","/fifaconquest/data/world-geojson.js":"_assets/212fb9a83d5023874a1a.js","/data/world-geojson.js":"_assets/212fb9a83d5023874a1a.js","/world-geojson.js":"_assets/212fb9a83d5023874a1a.js","https://mmd-marcelo.github.io/fifaconquest/assets/fonts/cabin/static/Cabin-Bold.ttf":"_assets/30aa1342d8f8ca7509fd.ttf","/fifaconquest/assets/fonts/cabin/static/Cabin-Bold.ttf":"_assets/30aa1342d8f8ca7509fd.ttf","/assets/fonts/cabin/static/Cabin-Bold.ttf":"_assets/30aa1342d8f8ca7509fd.ttf","/fonts/cabin/static/Cabin-Bold.ttf":"_assets/30aa1342d8f8ca7509fd.ttf","/cabin/static/Cabin-Bold.ttf":"_assets/30aa1342d8f8ca7509fd.ttf","/static/Cabin-Bold.ttf":"_assets/30aa1342d8f8ca7509fd.ttf","/Cabin-Bold.ttf":"_assets/30aa1342d8f8ca7509fd.ttf","https://mmd-marcelo.github.io/fifaconquest/assets/fonts/cabin/static/Cabin-Regular.ttf":"_assets/e47570f20877067f12cb.ttf","/fifaconquest/assets/fonts/cabin/static/Cabin-Regular.ttf":"_assets/e47570f20877067f12cb.ttf","/assets/fonts/cabin/static/Cabin-Regular.ttf":"_assets/e47570f20877067f12cb.ttf","/fonts/cabin/static/Cabin-Regular.ttf":"_assets/e47570f20877067f12cb.ttf","/cabin/static/Cabin-Regular.ttf":"_assets/e47570f20877067f12cb.ttf","/static/Cabin-Regular.ttf":"_assets/e47570f20877067f12cb.ttf","/Cabin-Regular.ttf":"_assets/e47570f20877067f12cb.ttf","https://mmd-marcelo.github.io/fifaconquest/assets/fonts/cabin/static/Cabin_Condensed-Bold.ttf":"_assets/203224842542a7bbf96e.ttf","/fifaconquest/assets/fonts/cabin/static/Cabin_Condensed-Bold.ttf":"_assets/203224842542a7bbf96e.ttf","/assets/fonts/cabin/static/Cabin_Condensed-Bold.ttf":"_assets/203224842542a7bbf96e.ttf","/fonts/cabin/static/Cabin_Condensed-Bold.ttf":"_assets/203224842542a7bbf96e.ttf","/cabin/static/Cabin_Condensed-Bold.ttf":"_assets/203224842542a7bbf96e.ttf","/static/Cabin_Condensed-Bold.ttf":"_assets/203224842542a7bbf96e.ttf","/Cabin_Condensed-Bold.ttf":"_assets/203224842542a7bbf96e.ttf"};
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
