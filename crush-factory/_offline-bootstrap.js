(() => {
  "use strict";
  const RUNTIME_MAP = {"https://johninwork.github.io/crush-factory/css/style.css":"_assets/2a090daedc6e7dca2f05.css","/crush-factory/css/style.css":"_assets/2a090daedc6e7dca2f05.css","/css/style.css":"_assets/2a090daedc6e7dca2f05.css","/style.css":"_assets/2a090daedc6e7dca2f05.css","https://johninwork.github.io/crush-factory/js/base64.js":"_assets/2d1d08682d518edfc0d8.js","/crush-factory/js/base64.js":"_assets/2d1d08682d518edfc0d8.js","/js/base64.js":"_assets/2d1d08682d518edfc0d8.js","/base64.js":"_assets/2d1d08682d518edfc0d8.js","https://johninwork.github.io/crush-factory/js/sound.js":"_assets/76f47b556a199b19c53c.js","/crush-factory/js/sound.js":"_assets/76f47b556a199b19c53c.js","/js/sound.js":"_assets/76f47b556a199b19c53c.js","/sound.js":"_assets/76f47b556a199b19c53c.js","https://johninwork.github.io/crush-factory/js/game.js":"_assets/d1dda5d86dd4c85feace.js","/crush-factory/js/game.js":"_assets/d1dda5d86dd4c85feace.js","/js/game.js":"_assets/d1dda5d86dd4c85feace.js","/game.js":"_assets/d1dda5d86dd4c85feace.js","https://johninwork.github.io/crush-factory/js/icons.js":"_assets/a6bb31f621d8b07159e6.js","/crush-factory/js/icons.js":"_assets/a6bb31f621d8b07159e6.js","/js/icons.js":"_assets/a6bb31f621d8b07159e6.js","/icons.js":"_assets/a6bb31f621d8b07159e6.js","https://johninwork.github.io/crush-factory/js/i18n.js":"_assets/01dc91dbdaf287f9bdb6.js","/crush-factory/js/i18n.js":"_assets/01dc91dbdaf287f9bdb6.js","/js/i18n.js":"_assets/01dc91dbdaf287f9bdb6.js","/i18n.js":"_assets/01dc91dbdaf287f9bdb6.js","https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Nunito:wght@400;500;600;700;800&family=Noto+Sans+SC:wght@400;500;700&family=Noto+Sans+JP:wght@400;500;700&family=Noto+Sans+KR:wght@400;500;700&display=swap":"_assets/a7219dbdd5a768d62b71.css","/css2":"_assets/a7219dbdd5a768d62b71.css","/css2?family=Quicksand:wght@400;500;600;700&family=Nunito:wght@400;500;600;700;800&family=Noto+Sans+SC:wght@400;500;700&family=Noto+Sans+JP:wght@400;500;700&family=Noto+Sans+KR:wght@400;500;700&display=swap":"_assets/a7219dbdd5a768d62b71.css","https://fonts.googleapis.com/css2":"_assets/a7219dbdd5a768d62b71.css","https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.20.0/matter.min.js":"_assets/72d30be0f579eb02ce1e.js","/ajax/libs/matter-js/0.20.0/matter.min.js":"_assets/72d30be0f579eb02ce1e.js","/libs/matter-js/0.20.0/matter.min.js":"_assets/72d30be0f579eb02ce1e.js","/matter-js/0.20.0/matter.min.js":"_assets/72d30be0f579eb02ce1e.js","/0.20.0/matter.min.js":"_assets/72d30be0f579eb02ce1e.js","/matter.min.js":"_assets/72d30be0f579eb02ce1e.js","https://fonts.gstatic.com/s/quicksand/v37/6xKtdSZaM9iE8KbpRA_hK1QN.woff2":"_assets/2add7d60b1cd2ab84c99.woff2","/s/quicksand/v37/6xKtdSZaM9iE8KbpRA_hK1QN.woff2":"_assets/2add7d60b1cd2ab84c99.woff2","/quicksand/v37/6xKtdSZaM9iE8KbpRA_hK1QN.woff2":"_assets/2add7d60b1cd2ab84c99.woff2","/v37/6xKtdSZaM9iE8KbpRA_hK1QN.woff2":"_assets/2add7d60b1cd2ab84c99.woff2","/6xKtdSZaM9iE8KbpRA_hK1QN.woff2":"_assets/2add7d60b1cd2ab84c99.woff2","https://fonts.gstatic.com/s/nunito/v32/XRXV3I6Li01BKofINeaB.woff2":"_assets/ba344451eab25b217a16.woff2","/s/nunito/v32/XRXV3I6Li01BKofINeaB.woff2":"_assets/ba344451eab25b217a16.woff2","/nunito/v32/XRXV3I6Li01BKofINeaB.woff2":"_assets/ba344451eab25b217a16.woff2","/v32/XRXV3I6Li01BKofINeaB.woff2":"_assets/ba344451eab25b217a16.woff2","/XRXV3I6Li01BKofINeaB.woff2":"_assets/ba344451eab25b217a16.woff2","https://fonts.gstatic.com/s/notosanssc/v41/k3kXo84MPvpLmixcA63oeALhLOCT-xWNm8Hqd37g1OkDRZe7lR4sg1IzSy-MNbE9VH8V.113.woff2":"_assets/40290d98d5c121bdbb19.woff2","/s/notosanssc/v41/k3kXo84MPvpLmixcA63oeALhLOCT-xWNm8Hqd37g1OkDRZe7lR4sg1IzSy-MNbE9VH8V.113.woff2":"_assets/40290d98d5c121bdbb19.woff2","/notosanssc/v41/k3kXo84MPvpLmixcA63oeALhLOCT-xWNm8Hqd37g1OkDRZe7lR4sg1IzSy-MNbE9VH8V.113.woff2":"_assets/40290d98d5c121bdbb19.woff2","/v41/k3kXo84MPvpLmixcA63oeALhLOCT-xWNm8Hqd37g1OkDRZe7lR4sg1IzSy-MNbE9VH8V.113.woff2":"_assets/40290d98d5c121bdbb19.woff2","/k3kXo84MPvpLmixcA63oeALhLOCT-xWNm8Hqd37g1OkDRZe7lR4sg1IzSy-MNbE9VH8V.113.woff2":"_assets/40290d98d5c121bdbb19.woff2","https://fonts.gstatic.com/s/notosanssc/v41/k3kXo84MPvpLmixcA63oeALhLOCT-xWNm8Hqd37g1OkDRZe7lR4sg1IzSy-MNbE9VH8V.118.woff2":"_assets/f26330ce4056382832c0.woff2","/s/notosanssc/v41/k3kXo84MPvpLmixcA63oeALhLOCT-xWNm8Hqd37g1OkDRZe7lR4sg1IzSy-MNbE9VH8V.118.woff2":"_assets/f26330ce4056382832c0.woff2","/notosanssc/v41/k3kXo84MPvpLmixcA63oeALhLOCT-xWNm8Hqd37g1OkDRZe7lR4sg1IzSy-MNbE9VH8V.118.woff2":"_assets/f26330ce4056382832c0.woff2","/v41/k3kXo84MPvpLmixcA63oeALhLOCT-xWNm8Hqd37g1OkDRZe7lR4sg1IzSy-MNbE9VH8V.118.woff2":"_assets/f26330ce4056382832c0.woff2","/k3kXo84MPvpLmixcA63oeALhLOCT-xWNm8Hqd37g1OkDRZe7lR4sg1IzSy-MNbE9VH8V.118.woff2":"_assets/f26330ce4056382832c0.woff2","https://fonts.gstatic.com/s/notosanssc/v41/k3kXo84MPvpLmixcA63oeALhLOCT-xWNm8Hqd37g1OkDRZe7lR4sg1IzSy-MNbE9VH8V.119.woff2":"_assets/09b9fa5a9521fbeccb82.woff2","/s/notosanssc/v41/k3kXo84MPvpLmixcA63oeALhLOCT-xWNm8Hqd37g1OkDRZe7lR4sg1IzSy-MNbE9VH8V.119.woff2":"_assets/09b9fa5a9521fbeccb82.woff2","/notosanssc/v41/k3kXo84MPvpLmixcA63oeALhLOCT-xWNm8Hqd37g1OkDRZe7lR4sg1IzSy-MNbE9VH8V.119.woff2":"_assets/09b9fa5a9521fbeccb82.woff2","/v41/k3kXo84MPvpLmixcA63oeALhLOCT-xWNm8Hqd37g1OkDRZe7lR4sg1IzSy-MNbE9VH8V.119.woff2":"_assets/09b9fa5a9521fbeccb82.woff2","/k3kXo84MPvpLmixcA63oeALhLOCT-xWNm8Hqd37g1OkDRZe7lR4sg1IzSy-MNbE9VH8V.119.woff2":"_assets/09b9fa5a9521fbeccb82.woff2","https://fonts.gstatic.com/s/notosanssc/v41/k3kXo84MPvpLmixcA63oeALhLOCT-xWNm8Hqd37g1OkDRZe7lR4sg1IzSy-MNbE9VH8V.117.woff2":"_assets/3d7ced7101c03dfa9bf0.woff2","/s/notosanssc/v41/k3kXo84MPvpLmixcA63oeALhLOCT-xWNm8Hqd37g1OkDRZe7lR4sg1IzSy-MNbE9VH8V.117.woff2":"_assets/3d7ced7101c03dfa9bf0.woff2","/notosanssc/v41/k3kXo84MPvpLmixcA63oeALhLOCT-xWNm8Hqd37g1OkDRZe7lR4sg1IzSy-MNbE9VH8V.117.woff2":"_assets/3d7ced7101c03dfa9bf0.woff2","/v41/k3kXo84MPvpLmixcA63oeALhLOCT-xWNm8Hqd37g1OkDRZe7lR4sg1IzSy-MNbE9VH8V.117.woff2":"_assets/3d7ced7101c03dfa9bf0.woff2","/k3kXo84MPvpLmixcA63oeALhLOCT-xWNm8Hqd37g1OkDRZe7lR4sg1IzSy-MNbE9VH8V.117.woff2":"_assets/3d7ced7101c03dfa9bf0.woff2","https://fonts.gstatic.com/s/notosanssc/v41/k3kXo84MPvpLmixcA63oeALhLOCT-xWNm8Hqd37g1OkDRZe7lR4sg1IzSy-MNbE9VH8V.116.woff2":"_assets/002e502515bee8b9efa1.woff2","/s/notosanssc/v41/k3kXo84MPvpLmixcA63oeALhLOCT-xWNm8Hqd37g1OkDRZe7lR4sg1IzSy-MNbE9VH8V.116.woff2":"_assets/002e502515bee8b9efa1.woff2","/notosanssc/v41/k3kXo84MPvpLmixcA63oeALhLOCT-xWNm8Hqd37g1OkDRZe7lR4sg1IzSy-MNbE9VH8V.116.woff2":"_assets/002e502515bee8b9efa1.woff2","/v41/k3kXo84MPvpLmixcA63oeALhLOCT-xWNm8Hqd37g1OkDRZe7lR4sg1IzSy-MNbE9VH8V.116.woff2":"_assets/002e502515bee8b9efa1.woff2","/k3kXo84MPvpLmixcA63oeALhLOCT-xWNm8Hqd37g1OkDRZe7lR4sg1IzSy-MNbE9VH8V.116.woff2":"_assets/002e502515bee8b9efa1.woff2"};
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
