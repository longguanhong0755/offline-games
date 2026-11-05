(() => {
  "use strict";
  const RUNTIME_MAP = {"https://fonts.googleapis.com/css?family=Raleway:400":"_assets/8904a1bdf5e7d09fc04d.css","/css":"_assets/8904a1bdf5e7d09fc04d.css","/css?family=Raleway:400":"_assets/8904a1bdf5e7d09fc04d.css","https://fonts.googleapis.com/css":"_assets/8904a1bdf5e7d09fc04d.css","https://fonts.gstatic.com/s/raleway/v37/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCIPrE.woff2":"_assets/2318962e7930f55b4590.woff2","/s/raleway/v37/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCIPrE.woff2":"_assets/2318962e7930f55b4590.woff2","https://playtictactoe.org/assets/audio/note-high.mp3":"_assets/6f58683841b375dc99d9.mp3","/assets/audio/note-high.mp3":"_assets/6f58683841b375dc99d9.mp3","https://playtictactoe.org/assets/audio/note-low.mp3":"_assets/4dd27788707c9e556f92.mp3","/assets/audio/note-low.mp3":"_assets/4dd27788707c9e556f92.mp3","https://playtictactoe.org/assets/audio/game-over.mp3":"_assets/75b045c2088594eaecdf.mp3","/assets/audio/game-over.mp3":"_assets/75b045c2088594eaecdf.mp3","https://playtictactoe.org/assets/audio/game-over-tie.mp3":"_assets/e91b8580d39f3c7b1b4d.mp3","/assets/audio/game-over-tie.mp3":"_assets/e91b8580d39f3c7b1b4d.mp3"};
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
