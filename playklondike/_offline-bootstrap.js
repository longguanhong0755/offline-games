(() => {
  "use strict";
  const RUNTIME_MAP = {"https://www.playklondike.org/_next/static/immutable/media/2a65768255d6b625-s.p.2r-cuu_7locvx.woff2":"_assets/5d91eb5d522a03081946.woff2","/_next/static/immutable/media/2a65768255d6b625-s.p.2r-cuu_7locvx.woff2":"_assets/5d91eb5d522a03081946.woff2","https://www.playklondike.org/_next/static/immutable/chunks/0-h2ahck_bckk.css":"_assets/3753912a74415bcd4d41.css","/_next/static/immutable/chunks/0-h2ahck_bckk.css":"_assets/3753912a74415bcd4d41.css","https://www.playklondike.org/_next/static/immutable/media/8c2eb9ceedecfc8e-s.p.1c4v1kyduoipm.woff2":"_assets/6b102ab35aa1f2b31578.woff2","/_next/static/immutable/media/8c2eb9ceedecfc8e-s.p.1c4v1kyduoipm.woff2":"_assets/6b102ab35aa1f2b31578.woff2","https://www.playklondike.org/_next/static/immutable/chunks/0me9nfydeuqpf.js":"_assets/f47c3e5030b523cfc25a.js","/_next/static/immutable/chunks/0me9nfydeuqpf.js":"_assets/f47c3e5030b523cfc25a.js","https://www.playklondike.org/_next/static/immutable/chunks/3ss8h788aqmfb.js":"_assets/b8b354b251972f175def.js","/_next/static/immutable/chunks/3ss8h788aqmfb.js":"_assets/b8b354b251972f175def.js","https://www.playklondike.org/_next/static/immutable/chunks/19jx5r15o5cmz.js":"_assets/066761a0902295f7726b.js","/_next/static/immutable/chunks/19jx5r15o5cmz.js":"_assets/066761a0902295f7726b.js","https://www.playklondike.org/_next/static/immutable/chunks/turbopack-0g9ubns1litsx.js":"_assets/a2ee0fb74677539c74c7.js","/_next/static/immutable/chunks/turbopack-0g9ubns1litsx.js":"_assets/a2ee0fb74677539c74c7.js","https://www.playklondike.org/_next/static/immutable/chunks/1n8lullg5sm2p.js":"_assets/af4998c6bff0602d0d01.js","/_next/static/immutable/chunks/1n8lullg5sm2p.js":"_assets/af4998c6bff0602d0d01.js","https://www.playklondike.org/_next/static/immutable/chunks/1cnkkkhl1ww4h.js":"_assets/fcbfa237c7fc3186d1eb.js","/_next/static/immutable/chunks/1cnkkkhl1ww4h.js":"_assets/fcbfa237c7fc3186d1eb.js","https://www.playklondike.org/_next/static/immutable/chunks/3zi8rlk1p9wqg.js":"_assets/58c82ec960b7d58c2fce.js","/_next/static/immutable/chunks/3zi8rlk1p9wqg.js":"_assets/58c82ec960b7d58c2fce.js","https://www.playklondike.org/_next/static/immutable/chunks/1e_m1q4lf8z3g.js":"_assets/f86e84ab0f544a10f1c9.js","/_next/static/immutable/chunks/1e_m1q4lf8z3g.js":"_assets/f86e84ab0f544a10f1c9.js","https://www.playklondike.org/_next/static/immutable/chunks/0jzc5kx6i69hb.js":"_assets/631771194a8f52a4dc6c.js","/_next/static/immutable/chunks/0jzc5kx6i69hb.js":"_assets/631771194a8f52a4dc6c.js","https://www.playklondike.org/?_rsc=5CB68i4pnAekjehf":"_assets/decb7417aaeb54ef0469.htc","/":"_assets/3e181358e45b6bbedd4f.htc","/?_rsc=5CB68i4pnAekjehf":"_assets/decb7417aaeb54ef0469.htc","https://www.playklondike.org/":"_assets/3e181358e45b6bbedd4f.htc","https://www.playklondike.org/_vercel/speed-insights/script.js":"_assets/c703720710415599d2f0.js","/_vercel/speed-insights/script.js":"_assets/c703720710415599d2f0.js","https://www.playklondike.org/rules?_rsc=5CB68i4pnAekjehf":"_assets/402816ab8c24213bf3c6.htc","/rules":"_assets/5f3060d775e75b6b30ea.htc","/rules?_rsc=5CB68i4pnAekjehf":"_assets/402816ab8c24213bf3c6.htc","https://www.playklondike.org/rules":"_assets/5f3060d775e75b6b30ea.htc","https://www.playklondike.org/strategy?_rsc=5CB68i4pnAekjehf":"_assets/1eb72b087b11889a850b.htc","/strategy":"_assets/243c02504f27963696d8.htc","/strategy?_rsc=5CB68i4pnAekjehf":"_assets/1eb72b087b11889a850b.htc","https://www.playklondike.org/strategy":"_assets/243c02504f27963696d8.htc","https://www.playklondike.org/odds?_rsc=5CB68i4pnAekjehf":"_assets/630fec607e9e589d7120.htc","/odds":"_assets/27831bf0c3e68fae27c4.htc","/odds?_rsc=5CB68i4pnAekjehf":"_assets/630fec607e9e589d7120.htc","https://www.playklondike.org/odds":"_assets/27831bf0c3e68fae27c4.htc","https://www.playklondike.org/_vercel/insights/script.js":"_assets/050e35bf7e6e96590f2a.js","/_vercel/insights/script.js":"_assets/050e35bf7e6e96590f2a.js","https://www.playklondike.org/_next/static/immutable/chunks/1mnly8nj7zakh.js":"_assets/3e9793ef536d017214d8.js","/_next/static/immutable/chunks/1mnly8nj7zakh.js":"_assets/3e9793ef536d017214d8.js","https://www.playklondike.org/_next/static/immutable/chunks/3b4r_52x96_zd.js":"_assets/45bdf46206d7a04dcc3b.js","/_next/static/immutable/chunks/3b4r_52x96_zd.js":"_assets/45bdf46206d7a04dcc3b.js","https://www.playklondike.org/variations?_rsc=5CB68i4pnAekjehf":"_assets/c32386f3bd1bd14101d5.htc","/variations":"_assets/8faaabd6f96aae74fa94.htc","/variations?_rsc=5CB68i4pnAekjehf":"_assets/c32386f3bd1bd14101d5.htc","https://www.playklondike.org/variations":"_assets/8faaabd6f96aae74fa94.htc","https://www.playklondike.org/?_rsc=yIp22O3xgPPxC28X":"_assets/285869aa3df6cad042dc.htc","/?_rsc=yIp22O3xgPPxC28X":"_assets/285869aa3df6cad042dc.htc","https://www.playklondike.org/rules?_rsc=2IFelhbi8cdAQJjP":"_assets/5f3060d775e75b6b30ea.htc","/rules?_rsc=2IFelhbi8cdAQJjP":"_assets/5f3060d775e75b6b30ea.htc","https://www.playklondike.org/?_rsc=8nTjltbQWvg6NcbE":"_assets/3e181358e45b6bbedd4f.htc","/?_rsc=8nTjltbQWvg6NcbE":"_assets/3e181358e45b6bbedd4f.htc","https://www.playklondike.org/_next/static/immutable/media/ac34884600cd8d5d-s.444o2y6he09-k.woff2":"_assets/367df5ed02b082e3fad9.woff2","/_next/static/immutable/media/ac34884600cd8d5d-s.444o2y6he09-k.woff2":"_assets/367df5ed02b082e3fad9.woff2","https://www.playklondike.org/strategy?_rsc=i4AfqHvlIZf2sVuU":"_assets/243c02504f27963696d8.htc","/strategy?_rsc=i4AfqHvlIZf2sVuU":"_assets/243c02504f27963696d8.htc","https://www.playklondike.org/odds?_rsc=U7k5P1a2Zv_l_xU_":"_assets/27831bf0c3e68fae27c4.htc","/odds?_rsc=U7k5P1a2Zv_l_xU_":"_assets/27831bf0c3e68fae27c4.htc","https://www.playklondike.org/variations?_rsc=tU9Ia6B0P-9RWZ_T":"_assets/8faaabd6f96aae74fa94.htc","/variations?_rsc=tU9Ia6B0P-9RWZ_T":"_assets/8faaabd6f96aae74fa94.htc"};
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
