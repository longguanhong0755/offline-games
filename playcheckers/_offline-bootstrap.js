(() => {
  "use strict";
  const RUNTIME_MAP = {"https://playcheckers.io/_next/static/css/daef9b93f66f0503.css":"_assets/86f0fc5cf3aa87370328.css","/_next/static/css/daef9b93f66f0503.css":"_assets/86f0fc5cf3aa87370328.css","https://playcheckers.io/_next/static/chunks/webpack-36d12a75f0098f30.js":"_assets/a3a8ba9b41ad44054081.js","/_next/static/chunks/webpack-36d12a75f0098f30.js":"_assets/a3a8ba9b41ad44054081.js","https://playcheckers.io/_next/static/chunks/framework-2c79e2a64abdb08b.js":"_assets/f2ae26ff518d9519afd2.js","/_next/static/chunks/framework-2c79e2a64abdb08b.js":"_assets/f2ae26ff518d9519afd2.js","https://playcheckers.io/_next/static/chunks/pages/_app-eacae0c1b5f2680c.js":"_assets/c270e633fcabed321296.js","/_next/static/chunks/pages/_app-eacae0c1b5f2680c.js":"_assets/c270e633fcabed321296.js","https://playcheckers.io/_next/static/chunks/1bfc9850-5715963a3fa290a1.js":"_assets/7ffd420189179981a859.js","/_next/static/chunks/1bfc9850-5715963a3fa290a1.js":"_assets/7ffd420189179981a859.js","https://playcheckers.io/_next/static/chunks/d64684d8-dcb6e83d5ec3d9a8.js":"_assets/1c2c54dca451c8cd2f61.js","/_next/static/chunks/d64684d8-dcb6e83d5ec3d9a8.js":"_assets/1c2c54dca451c8cd2f61.js","https://playcheckers.io/_next/static/chunks/main-8812585ebfdd86d2.js":"_assets/37768e1ad9cfa14c03c7.js","/_next/static/chunks/main-8812585ebfdd86d2.js":"_assets/37768e1ad9cfa14c03c7.js","https://playcheckers.io/_next/static/chunks/29107295-308b8b2c345f6613.js":"_assets/267b6e4931e1f6fecbfe.js","/_next/static/chunks/29107295-308b8b2c345f6613.js":"_assets/267b6e4931e1f6fecbfe.js","https://playcheckers.io/_next/static/chunks/451-816ac3214fc3bf93.js":"_assets/0f512b477d6fe8e84f31.js","/_next/static/chunks/451-816ac3214fc3bf93.js":"_assets/0f512b477d6fe8e84f31.js","https://playcheckers.io/_next/static/chunks/473-cff90ab55044c4e1.js":"_assets/46657711963649fe8e1a.js","/_next/static/chunks/473-cff90ab55044c4e1.js":"_assets/46657711963649fe8e1a.js","https://playcheckers.io/_next/static/chunks/27-276799b404b3253d.js":"_assets/1a3851191b31be641edd.js","/_next/static/chunks/27-276799b404b3253d.js":"_assets/1a3851191b31be641edd.js","https://playcheckers.io/_next/static/chunks/902-da70b7e8797b57c0.js":"_assets/10f0c444c284eb4052b5.js","/_next/static/chunks/902-da70b7e8797b57c0.js":"_assets/10f0c444c284eb4052b5.js","https://playcheckers.io/_next/static/chunks/604-a5b2cc06bc7eaf77.js":"_assets/ef95542e213f0a18b2be.js","/_next/static/chunks/604-a5b2cc06bc7eaf77.js":"_assets/ef95542e213f0a18b2be.js","https://playcheckers.io/_next/static/chunks/964-47082df393ccaa03.js":"_assets/af3d32067bea9e1334ee.js","/_next/static/chunks/964-47082df393ccaa03.js":"_assets/af3d32067bea9e1334ee.js","https://playcheckers.io/_next/static/chunks/pages/index-b91b0b0534883fa4.js":"_assets/d1055c21e58a12222e80.js","/_next/static/chunks/pages/index-b91b0b0534883fa4.js":"_assets/d1055c21e58a12222e80.js","https://playcheckers.io/_next/static/e_qHZGxI-P9LotMbxXUe7/_ssgManifest.js":"_assets/f1ad886d9366cc342853.js","/_next/static/e_qHZGxI-P9LotMbxXUe7/_ssgManifest.js":"_assets/f1ad886d9366cc342853.js","https://playcheckers.io/_next/static/e_qHZGxI-P9LotMbxXUe7/_buildManifest.js":"_assets/b5c5bf09b8d0ed4b42f7.js","/_next/static/e_qHZGxI-P9LotMbxXUe7/_buildManifest.js":"_assets/b5c5bf09b8d0ed4b42f7.js","https://playcheckers.io/red-checkers-piece-small.png":"_assets/322457fc09e9cda5d13a.png","/red-checkers-piece-small.png":"_assets/322457fc09e9cda5d13a.png","https://playcheckers.io/black-checkers-piece-small.png":"_assets/91a3cc6bc9b086ea66ed.png","/black-checkers-piece-small.png":"_assets/91a3cc6bc9b086ea66ed.png"};
  const ROOT = new URL(".", document.currentScript.src);
  const nativeFetch = window.fetch.bind(window);
  const nativeOpen = XMLHttpRequest.prototype.open;
  const nativeAppendChild = Node.prototype.appendChild;
  const nativeInsertBefore = Node.prototype.insertBefore;
  const BLOCKED_FRAGMENTS = [
    "hotjar", "googletagmanager", "google-analytics", "doubleclick",
    "googlesyndication", "pagead2", "cloudflareinsights", "sentry.io",
    "adinplay", "pubnation", "cdn-cgi/challenge-platform", "about:blank"
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

  Node.prototype.appendChild = function(node) {
    if (isBlockedNode(node)) return node;
    return nativeAppendChild.call(this, node);
  };

  Node.prototype.insertBefore = function(node, reference) {
    if (isBlockedNode(node)) return node;
    return nativeInsertBefore.call(this, node, reference);
  };

  function resolveUrl(input) {
    try {
      const raw = typeof input === "string" ? input : input.url;
      const absolute = new URL(raw, document.baseURI).href.split("#")[0];
      const parts = new URL(absolute);
      const local = RUNTIME_MAP[absolute] || RUNTIME_MAP[parts.pathname + parts.search] || RUNTIME_MAP[parts.pathname];
      return local ? new URL(local, ROOT).href : null;
    } catch (_) {
      return null;
    }
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
