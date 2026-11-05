(() => {
  "use strict";
  const RUNTIME_MAP = {"https://2048.io/assets/index-K0yX4IXL.css":"_assets/4724ec53a7c4b41205a7.css","/assets/index-K0yX4IXL.css":"_assets/4724ec53a7c4b41205a7.css","https://2048.io/assets/index-Cd1jmwBe.js":"_assets/6b9ab9cfd0243d083d3a.js","/assets/index-Cd1jmwBe.js":"_assets/6b9ab9cfd0243d083d3a.js","https://2048.io/assets/ClearSans-Bold-webfont-CsJVQqIs.woff":"_assets/b16e36cc53aa72023c67.woff","/assets/ClearSans-Bold-webfont-CsJVQqIs.woff":"_assets/b16e36cc53aa72023c67.woff","https://2048.io/assets/ClearSans-Regular-webfont-AndVGWF5.woff":"_assets/8c94cd2fdc93f5a86f17.woff","/assets/ClearSans-Regular-webfont-AndVGWF5.woff":"_assets/8c94cd2fdc93f5a86f17.woff","https://2048.io/theme/stars.svg":"_assets/ad89477feeb6896fdc39.svg","/theme/stars.svg":"_assets/ad89477feeb6896fdc39.svg","https://2048.io/theme/moon.svg":"_assets/e09db593bed7a9d28434.svg","/theme/moon.svg":"_assets/e09db593bed7a9d28434.svg","https://2048.io/theme/sun.svg":"_assets/6c7fb8e86686fc9c6b8b.svg","/theme/sun.svg":"_assets/6c7fb8e86686fc9c6b8b.svg","https://2048.io/theme/clouds.svg":"_assets/67a921a31ed2f555e4b8.svg","/theme/clouds.svg":"_assets/67a921a31ed2f555e4b8.svg"};
  const ROOT = new URL(".", document.currentScript.src);
  const nativeFetch = window.fetch.bind(window);
  const nativeOpen = XMLHttpRequest.prototype.open;

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
