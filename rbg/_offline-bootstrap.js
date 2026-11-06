(() => {
  "use strict";
  const RUNTIME_MAP = {"https://osmose.ceo/RBG/assets/index-e8bdd21f.js":"_assets/5edd78f140be3e28df07.js","/RBG/assets/index-e8bdd21f.js":"_assets/5edd78f140be3e28df07.js","/assets/index-e8bdd21f.js":"_assets/5edd78f140be3e28df07.js","/index-e8bdd21f.js":"_assets/5edd78f140be3e28df07.js","https://plausible.io/js/script.js":"_assets/5a861fb6b5713ec9bed6.js","/js/script.js":"_assets/5a861fb6b5713ec9bed6.js","/script.js":"_assets/5a861fb6b5713ec9bed6.js","https://osmose.ceo/RBG/ui/loading_count.png":"_assets/1215ba52419975e49a22.png","/RBG/ui/loading_count.png":"_assets/1215ba52419975e49a22.png","/ui/loading_count.png":"_assets/1215ba52419975e49a22.png","/loading_count.png":"_assets/1215ba52419975e49a22.png","https://osmose.ceo/RBG/ui/spheres.png":"_assets/02c88aa5e07c2cb54151.png","/RBG/ui/spheres.png":"_assets/02c88aa5e07c2cb54151.png","/ui/spheres.png":"_assets/02c88aa5e07c2cb54151.png","/spheres.png":"_assets/02c88aa5e07c2cb54151.png","https://osmose.ceo/RBG/ui/stock_bar.png":"_assets/4f6846676ea23b37503f.png","/RBG/ui/stock_bar.png":"_assets/4f6846676ea23b37503f.png","/ui/stock_bar.png":"_assets/4f6846676ea23b37503f.png","/stock_bar.png":"_assets/4f6846676ea23b37503f.png","https://osmose.ceo/RBG/party/rojo_ground.png":"_assets/eddc88b2b909d420daec.png","/RBG/party/rojo_ground.png":"_assets/eddc88b2b909d420daec.png","/party/rojo_ground.png":"_assets/eddc88b2b909d420daec.png","/rojo_ground.png":"_assets/eddc88b2b909d420daec.png","https://osmose.ceo/RBG/party/rojo.png":"_assets/62451279ce4206c6aa79.png","/RBG/party/rojo.png":"_assets/62451279ce4206c6aa79.png","/party/rojo.png":"_assets/62451279ce4206c6aa79.png","/rojo.png":"_assets/62451279ce4206c6aa79.png","https://osmose.ceo/RBG/effects/enemy_attack.png":"_assets/d86289c5087f495022be.png","/RBG/effects/enemy_attack.png":"_assets/d86289c5087f495022be.png","/effects/enemy_attack.png":"_assets/d86289c5087f495022be.png","/enemy_attack.png":"_assets/d86289c5087f495022be.png","https://osmose.ceo/RBG/party/blue_ground.png":"_assets/d605a128ebbb594be27b.png","/RBG/party/blue_ground.png":"_assets/d605a128ebbb594be27b.png","/party/blue_ground.png":"_assets/d605a128ebbb594be27b.png","/blue_ground.png":"_assets/d605a128ebbb594be27b.png","https://osmose.ceo/RBG/enemies/skelly_ground.png":"_assets/5fe715bdcf57e2271b12.png","/RBG/enemies/skelly_ground.png":"_assets/5fe715bdcf57e2271b12.png","/enemies/skelly_ground.png":"_assets/5fe715bdcf57e2271b12.png","/skelly_ground.png":"_assets/5fe715bdcf57e2271b12.png","https://osmose.ceo/RBG/party/blue.png":"_assets/d97ec12edbb4df33e9bc.png","/RBG/party/blue.png":"_assets/d97ec12edbb4df33e9bc.png","/party/blue.png":"_assets/d97ec12edbb4df33e9bc.png","/blue.png":"_assets/d97ec12edbb4df33e9bc.png","https://osmose.ceo/RBG/effects/party_attacks.png":"_assets/a6aa82d8372fe6aded29.png","/RBG/effects/party_attacks.png":"_assets/a6aa82d8372fe6aded29.png","/effects/party_attacks.png":"_assets/a6aa82d8372fe6aded29.png","/party_attacks.png":"_assets/a6aa82d8372fe6aded29.png","https://osmose.ceo/RBG/party/midori_ground.png":"_assets/9dc90721e36691b582b4.png","/RBG/party/midori_ground.png":"_assets/9dc90721e36691b582b4.png","/party/midori_ground.png":"_assets/9dc90721e36691b582b4.png","/midori_ground.png":"_assets/9dc90721e36691b582b4.png","https://osmose.ceo/RBG/party/midori.png":"_assets/7d951a3c0859a08d885f.png","/RBG/party/midori.png":"_assets/7d951a3c0859a08d885f.png","/party/midori.png":"_assets/7d951a3c0859a08d885f.png","/midori.png":"_assets/7d951a3c0859a08d885f.png","https://osmose.ceo/RBG/ui/portraits.png":"_assets/f4c99c0810555a5ae8a1.png","/RBG/ui/portraits.png":"_assets/f4c99c0810555a5ae8a1.png","/ui/portraits.png":"_assets/f4c99c0810555a5ae8a1.png","/portraits.png":"_assets/f4c99c0810555a5ae8a1.png","https://osmose.ceo/RBG/ui/party_health_bar_frames.png":"_assets/0920d1475c443420d2a2.png","/RBG/ui/party_health_bar_frames.png":"_assets/0920d1475c443420d2a2.png","/ui/party_health_bar_frames.png":"_assets/0920d1475c443420d2a2.png","/party_health_bar_frames.png":"_assets/0920d1475c443420d2a2.png","https://osmose.ceo/RBG/ui/battle_actions.png":"_assets/83f06501c6b4e1da9a44.png","/RBG/ui/battle_actions.png":"_assets/83f06501c6b4e1da9a44.png","/ui/battle_actions.png":"_assets/83f06501c6b4e1da9a44.png","/battle_actions.png":"_assets/83f06501c6b4e1da9a44.png","https://osmose.ceo/RBG/ui/sodapop.fnt":"_assets/9e2e20e7e240c10c03e0.fnt","/RBG/ui/sodapop.fnt":"_assets/9e2e20e7e240c10c03e0.fnt","/ui/sodapop.fnt":"_assets/9e2e20e7e240c10c03e0.fnt","/sodapop.fnt":"_assets/9e2e20e7e240c10c03e0.fnt","https://osmose.ceo/RBG/ui/enemy_health_bar_frame.png":"_assets/dda72fb6a1af9b75bb17.png","/RBG/ui/enemy_health_bar_frame.png":"_assets/dda72fb6a1af9b75bb17.png","/ui/enemy_health_bar_frame.png":"_assets/dda72fb6a1af9b75bb17.png","/enemy_health_bar_frame.png":"_assets/dda72fb6a1af9b75bb17.png","https://osmose.ceo/RBG/ui/dialog_slice.png":"_assets/59b5db3437d9e5f02a72.png","/RBG/ui/dialog_slice.png":"_assets/59b5db3437d9e5f02a72.png","/ui/dialog_slice.png":"_assets/59b5db3437d9e5f02a72.png","/dialog_slice.png":"_assets/59b5db3437d9e5f02a72.png","https://osmose.ceo/RBG/ui/sodapop_0.png":"_assets/175fa973498f9c407f07.png","/RBG/ui/sodapop_0.png":"_assets/175fa973498f9c407f07.png","/ui/sodapop_0.png":"_assets/175fa973498f9c407f07.png","/sodapop_0.png":"_assets/175fa973498f9c407f07.png","https://osmose.ceo/RBG/ui/fullscreen_button.png":"_assets/cd89c7ef8ec74014e795.png","/RBG/ui/fullscreen_button.png":"_assets/cd89c7ef8ec74014e795.png","/ui/fullscreen_button.png":"_assets/cd89c7ef8ec74014e795.png","/fullscreen_button.png":"_assets/cd89c7ef8ec74014e795.png","https://osmose.ceo/RBG/ui/play_button.png":"_assets/33c89ff4f8e1905f5bb0.png","/RBG/ui/play_button.png":"_assets/33c89ff4f8e1905f5bb0.png","/ui/play_button.png":"_assets/33c89ff4f8e1905f5bb0.png","/play_button.png":"_assets/33c89ff4f8e1905f5bb0.png","https://osmose.ceo/RBG/ui/gatekid.png":"_assets/e5610e5c79bb7798a052.png","/RBG/ui/gatekid.png":"_assets/e5610e5c79bb7798a052.png","/ui/gatekid.png":"_assets/e5610e5c79bb7798a052.png","/gatekid.png":"_assets/e5610e5c79bb7798a052.png","https://osmose.ceo/RBG/enemies/skelly.png":"_assets/ec435a09eb6dc917ced0.png","/RBG/enemies/skelly.png":"_assets/ec435a09eb6dc917ced0.png","/enemies/skelly.png":"_assets/ec435a09eb6dc917ced0.png","/skelly.png":"_assets/ec435a09eb6dc917ced0.png","https://osmose.ceo/RBG/ui/github.png":"_assets/701c9e700af1248c53ea.png","/RBG/ui/github.png":"_assets/701c9e700af1248c53ea.png","/ui/github.png":"_assets/701c9e700af1248c53ea.png","/github.png":"_assets/701c9e700af1248c53ea.png","https://osmose.ceo/RBG/ui/battle_border.png":"_assets/cef297c5eab24993742b.png","/RBG/ui/battle_border.png":"_assets/cef297c5eab24993742b.png","/ui/battle_border.png":"_assets/cef297c5eab24993742b.png","/battle_border.png":"_assets/cef297c5eab24993742b.png","https://osmose.ceo/RBG/ui/osmose.png":"_assets/36e80ab11b923b5fd133.png","/RBG/ui/osmose.png":"_assets/36e80ab11b923b5fd133.png","/ui/osmose.png":"_assets/36e80ab11b923b5fd133.png","/osmose.png":"_assets/36e80ab11b923b5fd133.png","https://osmose.ceo/RBG/ui/battle_grid.png":"_assets/fb7213ea6f853a1ae3d0.png","/RBG/ui/battle_grid.png":"_assets/fb7213ea6f853a1ae3d0.png","/ui/battle_grid.png":"_assets/fb7213ea6f853a1ae3d0.png","/battle_grid.png":"_assets/fb7213ea6f853a1ae3d0.png","https://osmose.ceo/RBG/ui/battle_sphere_window.png":"_assets/2e800934760f76c5b081.png","/RBG/ui/battle_sphere_window.png":"_assets/2e800934760f76c5b081.png","/ui/battle_sphere_window.png":"_assets/2e800934760f76c5b081.png","/battle_sphere_window.png":"_assets/2e800934760f76c5b081.png","https://osmose.ceo/RBG/ui/byline.png":"_assets/40abfb953c11998aa979.png","/RBG/ui/byline.png":"_assets/40abfb953c11998aa979.png","/ui/byline.png":"_assets/40abfb953c11998aa979.png","/byline.png":"_assets/40abfb953c11998aa979.png","https://osmose.ceo/RBG/ui/color_stock.png":"_assets/261b35528a04954790f1.png","/RBG/ui/color_stock.png":"_assets/261b35528a04954790f1.png","/ui/color_stock.png":"_assets/261b35528a04954790f1.png","/color_stock.png":"_assets/261b35528a04954790f1.png","https://osmose.ceo/RBG/ui/numbers.fnt":"_assets/9f98d2d6dfdeffd5394a.fnt","/RBG/ui/numbers.fnt":"_assets/9f98d2d6dfdeffd5394a.fnt","/ui/numbers.fnt":"_assets/9f98d2d6dfdeffd5394a.fnt","/numbers.fnt":"_assets/9f98d2d6dfdeffd5394a.fnt","https://osmose.ceo/RBG/audio/swap.mp3":"_assets/29dce57c773d6054f1ad.mp3","/RBG/audio/swap.mp3":"_assets/29dce57c773d6054f1ad.mp3","/audio/swap.mp3":"_assets/29dce57c773d6054f1ad.mp3","/swap.mp3":"_assets/29dce57c773d6054f1ad.mp3","https://osmose.ceo/RBG/ui/numbers.png":"_assets/d98304a812c135223e6c.png","/RBG/ui/numbers.png":"_assets/d98304a812c135223e6c.png","/ui/numbers.png":"_assets/d98304a812c135223e6c.png","/numbers.png":"_assets/d98304a812c135223e6c.png","https://osmose.ceo/RBG/audio/clear.mp3":"_assets/2f369f447d9d0ff5dcdf.mp3","/RBG/audio/clear.mp3":"_assets/2f369f447d9d0ff5dcdf.mp3","/audio/clear.mp3":"_assets/2f369f447d9d0ff5dcdf.mp3","/clear.mp3":"_assets/2f369f447d9d0ff5dcdf.mp3","https://osmose.ceo/RBG/audio/action_appear.mp3":"_assets/373531c43b96e4a2c393.mp3","/RBG/audio/action_appear.mp3":"_assets/373531c43b96e4a2c393.mp3","/audio/action_appear.mp3":"_assets/373531c43b96e4a2c393.mp3","/action_appear.mp3":"_assets/373531c43b96e4a2c393.mp3","https://osmose.ceo/RBG/audio/select.mp3":"_assets/5750eced620540e09d58.mp3","/RBG/audio/select.mp3":"_assets/5750eced620540e09d58.mp3","/audio/select.mp3":"_assets/5750eced620540e09d58.mp3","/select.mp3":"_assets/5750eced620540e09d58.mp3","https://osmose.ceo/RBG/audio/move_cursor.mp3":"_assets/531cca3853e17eb6f924.mp3","/RBG/audio/move_cursor.mp3":"_assets/531cca3853e17eb6f924.mp3","/audio/move_cursor.mp3":"_assets/531cca3853e17eb6f924.mp3","/move_cursor.mp3":"_assets/531cca3853e17eb6f924.mp3","https://osmose.ceo/RBG/audio/text.mp3":"_assets/94b2f9ba98b7316b574a.mp3","/RBG/audio/text.mp3":"_assets/94b2f9ba98b7316b574a.mp3","/audio/text.mp3":"_assets/94b2f9ba98b7316b574a.mp3","/text.mp3":"_assets/94b2f9ba98b7316b574a.mp3","https://osmose.ceo/RBG/audio/rojo_attack.mp3":"_assets/6370722c1848223db627.mp3","/RBG/audio/rojo_attack.mp3":"_assets/6370722c1848223db627.mp3","/audio/rojo_attack.mp3":"_assets/6370722c1848223db627.mp3","/rojo_attack.mp3":"_assets/6370722c1848223db627.mp3","https://osmose.ceo/RBG/audio/blue_attack.mp3":"_assets/055a76241465b0c7a1e5.mp3","/RBG/audio/blue_attack.mp3":"_assets/055a76241465b0c7a1e5.mp3","/audio/blue_attack.mp3":"_assets/055a76241465b0c7a1e5.mp3","/blue_attack.mp3":"_assets/055a76241465b0c7a1e5.mp3","https://osmose.ceo/RBG/audio/midori_attack.mp3":"_assets/213a339576f3905048f3.mp3","/RBG/audio/midori_attack.mp3":"_assets/213a339576f3905048f3.mp3","/audio/midori_attack.mp3":"_assets/213a339576f3905048f3.mp3","/midori_attack.mp3":"_assets/213a339576f3905048f3.mp3","https://osmose.ceo/RBG/audio/enemy_attack.mp3":"_assets/f611b3598b6235b96740.mp3","/RBG/audio/enemy_attack.mp3":"_assets/f611b3598b6235b96740.mp3","/audio/enemy_attack.mp3":"_assets/f611b3598b6235b96740.mp3","/enemy_attack.mp3":"_assets/f611b3598b6235b96740.mp3","https://osmose.ceo/RBG/audio/player_death.mp3":"_assets/2641fec7335f831530f0.mp3","/RBG/audio/player_death.mp3":"_assets/2641fec7335f831530f0.mp3","/audio/player_death.mp3":"_assets/2641fec7335f831530f0.mp3","/player_death.mp3":"_assets/2641fec7335f831530f0.mp3","https://osmose.ceo/RBG/audio/victory.mp3":"_assets/f23f383295ef5e52e3c4.mp3","/RBG/audio/victory.mp3":"_assets/f23f383295ef5e52e3c4.mp3","/audio/victory.mp3":"_assets/f23f383295ef5e52e3c4.mp3","/victory.mp3":"_assets/f23f383295ef5e52e3c4.mp3","https://osmose.ceo/RBG/audio/battle_music_all.mp3":"_assets/4b19534dda30a9152476.mp3","/RBG/audio/battle_music_all.mp3":"_assets/4b19534dda30a9152476.mp3","/audio/battle_music_all.mp3":"_assets/4b19534dda30a9152476.mp3","/battle_music_all.mp3":"_assets/4b19534dda30a9152476.mp3","https://osmose.ceo/RBG/audio/enemy_death.mp3":"_assets/55398940b70fdfc36565.mp3","/RBG/audio/enemy_death.mp3":"_assets/55398940b70fdfc36565.mp3","/audio/enemy_death.mp3":"_assets/55398940b70fdfc36565.mp3","/enemy_death.mp3":"_assets/55398940b70fdfc36565.mp3","https://osmose.ceo/RBG/audio/gameover.mp3":"_assets/2c0aac2b7e9e8accf843.mp3","/RBG/audio/gameover.mp3":"_assets/2c0aac2b7e9e8accf843.mp3","/audio/gameover.mp3":"_assets/2c0aac2b7e9e8accf843.mp3","/gameover.mp3":"_assets/2c0aac2b7e9e8accf843.mp3"};
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
