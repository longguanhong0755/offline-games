(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Guess_Who/style.css":"_assets/eedf469896f855562bfe.css","/GameZone/Games/Guess_Who/style.css":"_assets/eedf469896f855562bfe.css","/Games/Guess_Who/style.css":"_assets/eedf469896f855562bfe.css","/Guess_Who/style.css":"_assets/eedf469896f855562bfe.css","/style.css":"_assets/eedf469896f855562bfe.css","https://kunjgit.github.io/GameZone/Games/Guess_Who/images/logo-og.png":"_assets/913aed7cd5a8c5dfab14.png","/GameZone/Games/Guess_Who/images/logo-og.png":"_assets/913aed7cd5a8c5dfab14.png","/Games/Guess_Who/images/logo-og.png":"_assets/913aed7cd5a8c5dfab14.png","/Guess_Who/images/logo-og.png":"_assets/913aed7cd5a8c5dfab14.png","/images/logo-og.png":"_assets/913aed7cd5a8c5dfab14.png","/logo-og.png":"_assets/913aed7cd5a8c5dfab14.png","https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;1,100&family=Poiret+One&display=swap":"_assets/d4694d9c3deab40e15bd.css","/css2":"_assets/d4694d9c3deab40e15bd.css","/css2?family=Montserrat:ital,wght@0,300;1,100&family=Poiret+One&display=swap":"_assets/d4694d9c3deab40e15bd.css","https://fonts.googleapis.com/css2":"_assets/d4694d9c3deab40e15bd.css","https://kunjgit.github.io/GameZone/Games/Guess_Who/images/donkeykong.png":"_assets/3c83581db9f303f697a2.png","/GameZone/Games/Guess_Who/images/donkeykong.png":"_assets/3c83581db9f303f697a2.png","/Games/Guess_Who/images/donkeykong.png":"_assets/3c83581db9f303f697a2.png","/Guess_Who/images/donkeykong.png":"_assets/3c83581db9f303f697a2.png","/images/donkeykong.png":"_assets/3c83581db9f303f697a2.png","/donkeykong.png":"_assets/3c83581db9f303f697a2.png","https://kunjgit.github.io/GameZone/Games/Guess_Who/images/luigi.png":"_assets/9762c2b958d94f96380d.png","/GameZone/Games/Guess_Who/images/luigi.png":"_assets/9762c2b958d94f96380d.png","/Games/Guess_Who/images/luigi.png":"_assets/9762c2b958d94f96380d.png","/Guess_Who/images/luigi.png":"_assets/9762c2b958d94f96380d.png","/images/luigi.png":"_assets/9762c2b958d94f96380d.png","/luigi.png":"_assets/9762c2b958d94f96380d.png","https://kunjgit.github.io/GameZone/Games/Guess_Who/images/mario.png":"_assets/38920c3722cecf7f0c85.png","/GameZone/Games/Guess_Who/images/mario.png":"_assets/38920c3722cecf7f0c85.png","/Games/Guess_Who/images/mario.png":"_assets/38920c3722cecf7f0c85.png","/Guess_Who/images/mario.png":"_assets/38920c3722cecf7f0c85.png","/images/mario.png":"_assets/38920c3722cecf7f0c85.png","/mario.png":"_assets/38920c3722cecf7f0c85.png","https://fonts.gstatic.com/s/montserrat/v31/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCs16Hw5aXo.woff2":"_assets/a04fdaaec9f3cd46b0cb.woff2","/s/montserrat/v31/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCs16Hw5aXo.woff2":"_assets/a04fdaaec9f3cd46b0cb.woff2","/montserrat/v31/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCs16Hw5aXo.woff2":"_assets/a04fdaaec9f3cd46b0cb.woff2","/v31/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCs16Hw5aXo.woff2":"_assets/a04fdaaec9f3cd46b0cb.woff2","/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCs16Hw5aXo.woff2":"_assets/a04fdaaec9f3cd46b0cb.woff2","https://kunjgit.github.io/GameZone/Games/Guess_Who/images/bowser.png":"_assets/766e4f74357a41902ae6.png","/GameZone/Games/Guess_Who/images/bowser.png":"_assets/766e4f74357a41902ae6.png","/Games/Guess_Who/images/bowser.png":"_assets/766e4f74357a41902ae6.png","/Guess_Who/images/bowser.png":"_assets/766e4f74357a41902ae6.png","/images/bowser.png":"_assets/766e4f74357a41902ae6.png","/bowser.png":"_assets/766e4f74357a41902ae6.png","https://kunjgit.github.io/GameZone/Games/Guess_Who/images/cloud.png":"_assets/4a33a8e6b0099a6be816.png","/GameZone/Games/Guess_Who/images/cloud.png":"_assets/4a33a8e6b0099a6be816.png","/Games/Guess_Who/images/cloud.png":"_assets/4a33a8e6b0099a6be816.png","/Guess_Who/images/cloud.png":"_assets/4a33a8e6b0099a6be816.png","/images/cloud.png":"_assets/4a33a8e6b0099a6be816.png","/cloud.png":"_assets/4a33a8e6b0099a6be816.png","https://kunjgit.github.io/GameZone/Games/Guess_Who/images/doom.png":"_assets/fb598d7170217ff1e6a8.png","/GameZone/Games/Guess_Who/images/doom.png":"_assets/fb598d7170217ff1e6a8.png","/Games/Guess_Who/images/doom.png":"_assets/fb598d7170217ff1e6a8.png","/Guess_Who/images/doom.png":"_assets/fb598d7170217ff1e6a8.png","/images/doom.png":"_assets/fb598d7170217ff1e6a8.png","/doom.png":"_assets/fb598d7170217ff1e6a8.png","https://kunjgit.github.io/GameZone/Games/Guess_Who/images/jinx.png":"_assets/eeb78c53fceb6c12f462.png","/GameZone/Games/Guess_Who/images/jinx.png":"_assets/eeb78c53fceb6c12f462.png","/Games/Guess_Who/images/jinx.png":"_assets/eeb78c53fceb6c12f462.png","/Guess_Who/images/jinx.png":"_assets/eeb78c53fceb6c12f462.png","/images/jinx.png":"_assets/eeb78c53fceb6c12f462.png","/jinx.png":"_assets/eeb78c53fceb6c12f462.png","https://kunjgit.github.io/GameZone/Games/Guess_Who/images/inkling.png":"_assets/c88bca4f706025d3580a.png","/GameZone/Games/Guess_Who/images/inkling.png":"_assets/c88bca4f706025d3580a.png","/Games/Guess_Who/images/inkling.png":"_assets/c88bca4f706025d3580a.png","/Guess_Who/images/inkling.png":"_assets/c88bca4f706025d3580a.png","/images/inkling.png":"_assets/c88bca4f706025d3580a.png","/inkling.png":"_assets/c88bca4f706025d3580a.png","https://kunjgit.github.io/GameZone/Games/Guess_Who/images/joker.png":"_assets/d23738dc69cf77c1af2d.png","/GameZone/Games/Guess_Who/images/joker.png":"_assets/d23738dc69cf77c1af2d.png","/Games/Guess_Who/images/joker.png":"_assets/d23738dc69cf77c1af2d.png","/Guess_Who/images/joker.png":"_assets/d23738dc69cf77c1af2d.png","/images/joker.png":"_assets/d23738dc69cf77c1af2d.png","/joker.png":"_assets/d23738dc69cf77c1af2d.png","https://kunjgit.github.io/GameZone/Games/Guess_Who/images/ganon.png":"_assets/a3589501b51770f7463a.png","/GameZone/Games/Guess_Who/images/ganon.png":"_assets/a3589501b51770f7463a.png","/Games/Guess_Who/images/ganon.png":"_assets/a3589501b51770f7463a.png","/Guess_Who/images/ganon.png":"_assets/a3589501b51770f7463a.png","/images/ganon.png":"_assets/a3589501b51770f7463a.png","/ganon.png":"_assets/a3589501b51770f7463a.png","https://kunjgit.github.io/GameZone/Games/Guess_Who/images/kratos.png":"_assets/8f7915db438ba7544f92.png","/GameZone/Games/Guess_Who/images/kratos.png":"_assets/8f7915db438ba7544f92.png","/Games/Guess_Who/images/kratos.png":"_assets/8f7915db438ba7544f92.png","/Guess_Who/images/kratos.png":"_assets/8f7915db438ba7544f92.png","/images/kratos.png":"_assets/8f7915db438ba7544f92.png","/kratos.png":"_assets/8f7915db438ba7544f92.png","https://kunjgit.github.io/GameZone/Games/Guess_Who/images/link.png":"_assets/2f139915fb09a7881097.png","/GameZone/Games/Guess_Who/images/link.png":"_assets/2f139915fb09a7881097.png","/Games/Guess_Who/images/link.png":"_assets/2f139915fb09a7881097.png","/Guess_Who/images/link.png":"_assets/2f139915fb09a7881097.png","/images/link.png":"_assets/2f139915fb09a7881097.png","/link.png":"_assets/2f139915fb09a7881097.png","https://kunjgit.github.io/GameZone/Games/Guess_Who/images/leon.png":"_assets/c5a75ad3d1f67ec317e9.png","/GameZone/Games/Guess_Who/images/leon.png":"_assets/c5a75ad3d1f67ec317e9.png","/Games/Guess_Who/images/leon.png":"_assets/c5a75ad3d1f67ec317e9.png","/Guess_Who/images/leon.png":"_assets/c5a75ad3d1f67ec317e9.png","/images/leon.png":"_assets/c5a75ad3d1f67ec317e9.png","/leon.png":"_assets/c5a75ad3d1f67ec317e9.png","https://kunjgit.github.io/GameZone/Games/Guess_Who/images/pacman.png":"_assets/417956c9eb3ff588af0a.png","/GameZone/Games/Guess_Who/images/pacman.png":"_assets/417956c9eb3ff588af0a.png","/Games/Guess_Who/images/pacman.png":"_assets/417956c9eb3ff588af0a.png","/Guess_Who/images/pacman.png":"_assets/417956c9eb3ff588af0a.png","/images/pacman.png":"_assets/417956c9eb3ff588af0a.png","/pacman.png":"_assets/417956c9eb3ff588af0a.png","https://kunjgit.github.io/GameZone/Games/Guess_Who/images/pikachu.png":"_assets/c47bf95843dc165b45d9.png","/GameZone/Games/Guess_Who/images/pikachu.png":"_assets/c47bf95843dc165b45d9.png","/Games/Guess_Who/images/pikachu.png":"_assets/c47bf95843dc165b45d9.png","/Guess_Who/images/pikachu.png":"_assets/c47bf95843dc165b45d9.png","/images/pikachu.png":"_assets/c47bf95843dc165b45d9.png","/pikachu.png":"_assets/c47bf95843dc165b45d9.png","https://kunjgit.github.io/GameZone/Games/Guess_Who/images/masterchief.png":"_assets/7f8d48531ff528be7ad5.png","/GameZone/Games/Guess_Who/images/masterchief.png":"_assets/7f8d48531ff528be7ad5.png","/Games/Guess_Who/images/masterchief.png":"_assets/7f8d48531ff528be7ad5.png","/Guess_Who/images/masterchief.png":"_assets/7f8d48531ff528be7ad5.png","/images/masterchief.png":"_assets/7f8d48531ff528be7ad5.png","/masterchief.png":"_assets/7f8d48531ff528be7ad5.png","https://kunjgit.github.io/GameZone/Games/Guess_Who/images/nathan.png":"_assets/e8768991431263b69d67.png","/GameZone/Games/Guess_Who/images/nathan.png":"_assets/e8768991431263b69d67.png","/Games/Guess_Who/images/nathan.png":"_assets/e8768991431263b69d67.png","/Guess_Who/images/nathan.png":"_assets/e8768991431263b69d67.png","/images/nathan.png":"_assets/e8768991431263b69d67.png","/nathan.png":"_assets/e8768991431263b69d67.png","https://kunjgit.github.io/GameZone/Games/Guess_Who/images/ryu.png":"_assets/92998df5e6b5dd639278.png","/GameZone/Games/Guess_Who/images/ryu.png":"_assets/92998df5e6b5dd639278.png","/Games/Guess_Who/images/ryu.png":"_assets/92998df5e6b5dd639278.png","/Guess_Who/images/ryu.png":"_assets/92998df5e6b5dd639278.png","/images/ryu.png":"_assets/92998df5e6b5dd639278.png","/ryu.png":"_assets/92998df5e6b5dd639278.png","https://kunjgit.github.io/GameZone/Games/Guess_Who/images/steve.png":"_assets/4d796fe4da1f020a23a7.png","/GameZone/Games/Guess_Who/images/steve.png":"_assets/4d796fe4da1f020a23a7.png","/Games/Guess_Who/images/steve.png":"_assets/4d796fe4da1f020a23a7.png","/Guess_Who/images/steve.png":"_assets/4d796fe4da1f020a23a7.png","/images/steve.png":"_assets/4d796fe4da1f020a23a7.png","/steve.png":"_assets/4d796fe4da1f020a23a7.png","https://kunjgit.github.io/GameZone/Games/Guess_Who/images/tracer.png":"_assets/dbc28917042beb48d1aa.png","/GameZone/Games/Guess_Who/images/tracer.png":"_assets/dbc28917042beb48d1aa.png","/Games/Guess_Who/images/tracer.png":"_assets/dbc28917042beb48d1aa.png","/Guess_Who/images/tracer.png":"_assets/dbc28917042beb48d1aa.png","/images/tracer.png":"_assets/dbc28917042beb48d1aa.png","/tracer.png":"_assets/dbc28917042beb48d1aa.png","https://kunjgit.github.io/GameZone/Games/Guess_Who/images/snake.png":"_assets/b114c13860196141a078.png","/GameZone/Games/Guess_Who/images/snake.png":"_assets/b114c13860196141a078.png","/Games/Guess_Who/images/snake.png":"_assets/b114c13860196141a078.png","/Guess_Who/images/snake.png":"_assets/b114c13860196141a078.png","/images/snake.png":"_assets/b114c13860196141a078.png","/snake.png":"_assets/b114c13860196141a078.png","https://kunjgit.github.io/GameZone/Games/Guess_Who/script.js":"_assets/de8c656c44bb26a7009c.js","/GameZone/Games/Guess_Who/script.js":"_assets/de8c656c44bb26a7009c.js","/Games/Guess_Who/script.js":"_assets/de8c656c44bb26a7009c.js","/Guess_Who/script.js":"_assets/de8c656c44bb26a7009c.js","/script.js":"_assets/de8c656c44bb26a7009c.js","https://kunjgit.github.io/GameZone/Games/Guess_Who/images/lara.png":"_assets/10f9d883b9360a132c71.png","/GameZone/Games/Guess_Who/images/lara.png":"_assets/10f9d883b9360a132c71.png","/Games/Guess_Who/images/lara.png":"_assets/10f9d883b9360a132c71.png","/Guess_Who/images/lara.png":"_assets/10f9d883b9360a132c71.png","/images/lara.png":"_assets/10f9d883b9360a132c71.png","/lara.png":"_assets/10f9d883b9360a132c71.png","https://kunjgit.github.io/GameZone/Games/Guess_Who/images/zelda.png":"_assets/8df3a70ce4d55dff6070.png","/GameZone/Games/Guess_Who/images/zelda.png":"_assets/8df3a70ce4d55dff6070.png","/Games/Guess_Who/images/zelda.png":"_assets/8df3a70ce4d55dff6070.png","/Guess_Who/images/zelda.png":"_assets/8df3a70ce4d55dff6070.png","/images/zelda.png":"_assets/8df3a70ce4d55dff6070.png","/zelda.png":"_assets/8df3a70ce4d55dff6070.png","https://kunjgit.github.io/GameZone/Games/Guess_Who/images/samus.png":"_assets/5b8185e1550c4a8b5dee.png","/GameZone/Games/Guess_Who/images/samus.png":"_assets/5b8185e1550c4a8b5dee.png","/Games/Guess_Who/images/samus.png":"_assets/5b8185e1550c4a8b5dee.png","/Guess_Who/images/samus.png":"_assets/5b8185e1550c4a8b5dee.png","/images/samus.png":"_assets/5b8185e1550c4a8b5dee.png","/samus.png":"_assets/5b8185e1550c4a8b5dee.png"};
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
