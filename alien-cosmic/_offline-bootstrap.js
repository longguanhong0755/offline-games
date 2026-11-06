(() => {
  "use strict";
  const RUNTIME_MAP = {"https://bestdeejay-design.github.io/alien-cosmic/style.css":"_assets/2b27a349fe823e16c447.css","/alien-cosmic/style.css":"_assets/2b27a349fe823e16c447.css","/style.css":"_assets/2b27a349fe823e16c447.css","https://bestdeejay-design.github.io/alien-cosmic/assets/hero-art.svg":"_assets/043d82705d016d308be2.svg","/alien-cosmic/assets/hero-art.svg":"_assets/043d82705d016d308be2.svg","/assets/hero-art.svg":"_assets/043d82705d016d308be2.svg","/hero-art.svg":"_assets/043d82705d016d308be2.svg","https://bestdeejay-design.github.io/alien-cosmic/js/game.js":"_assets/da3d3444901dfb25a69e.js","/alien-cosmic/js/game.js":"_assets/da3d3444901dfb25a69e.js","/js/game.js":"_assets/da3d3444901dfb25a69e.js","/game.js":"_assets/da3d3444901dfb25a69e.js","https://bestdeejay-design.github.io/alien-cosmic/js/input.js":"_assets/2ab9815042b4982c352b.js","/alien-cosmic/js/input.js":"_assets/2ab9815042b4982c352b.js","/js/input.js":"_assets/2ab9815042b4982c352b.js","/input.js":"_assets/2ab9815042b4982c352b.js","https://bestdeejay-design.github.io/alien-cosmic/js/ai.js":"_assets/5d65cbf013bd13b0635a.js","/alien-cosmic/js/ai.js":"_assets/5d65cbf013bd13b0635a.js","/js/ai.js":"_assets/5d65cbf013bd13b0635a.js","/ai.js":"_assets/5d65cbf013bd13b0635a.js","https://bestdeejay-design.github.io/alien-cosmic/js/config.js":"_assets/15d8b5616dca51f61074.js","/alien-cosmic/js/config.js":"_assets/15d8b5616dca51f61074.js","/js/config.js":"_assets/15d8b5616dca51f61074.js","/config.js":"_assets/15d8b5616dca51f61074.js","https://bestdeejay-design.github.io/alien-cosmic/js/map.js":"_assets/e4b971d64d737d7bab6e.js","/alien-cosmic/js/map.js":"_assets/e4b971d64d737d7bab6e.js","/js/map.js":"_assets/e4b971d64d737d7bab6e.js","/map.js":"_assets/e4b971d64d737d7bab6e.js","https://bestdeejay-design.github.io/alien-cosmic/js/ui.js":"_assets/a479657fd463841ae485.js","/alien-cosmic/js/ui.js":"_assets/a479657fd463841ae485.js","/js/ui.js":"_assets/a479657fd463841ae485.js","/ui.js":"_assets/a479657fd463841ae485.js","https://bestdeejay-design.github.io/alien-cosmic/js/units.js":"_assets/6481df60c2c40831729e.js","/alien-cosmic/js/units.js":"_assets/6481df60c2c40831729e.js","/js/units.js":"_assets/6481df60c2c40831729e.js","/units.js":"_assets/6481df60c2c40831729e.js","https://bestdeejay-design.github.io/alien-cosmic/js/audio.js":"_assets/23dc76dd8916ae526f9a.js","/alien-cosmic/js/audio.js":"_assets/23dc76dd8916ae526f9a.js","/js/audio.js":"_assets/23dc76dd8916ae526f9a.js","/audio.js":"_assets/23dc76dd8916ae526f9a.js","https://bestdeejay-design.github.io/alien-cosmic/js/buildings.js":"_assets/b7e2956bc94ec86f7d62.js","/alien-cosmic/js/buildings.js":"_assets/b7e2956bc94ec86f7d62.js","/js/buildings.js":"_assets/b7e2956bc94ec86f7d62.js","/buildings.js":"_assets/b7e2956bc94ec86f7d62.js","https://bestdeejay-design.github.io/alien-cosmic/js/missions.js":"_assets/681679bd172b40559be6.js","/alien-cosmic/js/missions.js":"_assets/681679bd172b40559be6.js","/js/missions.js":"_assets/681679bd172b40559be6.js","/missions.js":"_assets/681679bd172b40559be6.js","https://bestdeejay-design.github.io/alien-cosmic/js/i18n.js":"_assets/935a4de994ea8e9efef8.js","/alien-cosmic/js/i18n.js":"_assets/935a4de994ea8e9efef8.js","/js/i18n.js":"_assets/935a4de994ea8e9efef8.js","/i18n.js":"_assets/935a4de994ea8e9efef8.js","https://bestdeejay-design.github.io/alien-cosmic/js/fog.js":"_assets/3c39040d3dc2016ee589.js","/alien-cosmic/js/fog.js":"_assets/3c39040d3dc2016ee589.js","/js/fog.js":"_assets/3c39040d3dc2016ee589.js","/fog.js":"_assets/3c39040d3dc2016ee589.js","https://bestdeejay-design.github.io/alien-cosmic/js/profile.js":"_assets/1cfd9291b4306187047d.js","/alien-cosmic/js/profile.js":"_assets/1cfd9291b4306187047d.js","/js/profile.js":"_assets/1cfd9291b4306187047d.js","/profile.js":"_assets/1cfd9291b4306187047d.js","https://bestdeejay-design.github.io/alien-cosmic/js/lore.js":"_assets/8ff5ea742ec19ce7e3dd.js","/alien-cosmic/js/lore.js":"_assets/8ff5ea742ec19ce7e3dd.js","/js/lore.js":"_assets/8ff5ea742ec19ce7e3dd.js","/lore.js":"_assets/8ff5ea742ec19ce7e3dd.js","https://bestdeejay-design.github.io/alien-cosmic/js/pathfinding.js":"_assets/21f942e1419316a36bed.js","/alien-cosmic/js/pathfinding.js":"_assets/21f942e1419316a36bed.js","/js/pathfinding.js":"_assets/21f942e1419316a36bed.js","/pathfinding.js":"_assets/21f942e1419316a36bed.js","https://bestdeejay-design.github.io/alien-cosmic/locales/ru.js":"_assets/e91d8eef7ffbc2c12468.js","/alien-cosmic/locales/ru.js":"_assets/e91d8eef7ffbc2c12468.js","/locales/ru.js":"_assets/e91d8eef7ffbc2c12468.js","/ru.js":"_assets/e91d8eef7ffbc2c12468.js"};
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
