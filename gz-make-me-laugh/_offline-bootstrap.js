(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Make_Me_Laugh/styles.css":"_assets/1e8adc564c8da232d7fc.css","/GameZone/Games/Make_Me_Laugh/styles.css":"_assets/1e8adc564c8da232d7fc.css","/Games/Make_Me_Laugh/styles.css":"_assets/1e8adc564c8da232d7fc.css","/Make_Me_Laugh/styles.css":"_assets/1e8adc564c8da232d7fc.css","/styles.css":"_assets/1e8adc564c8da232d7fc.css","https://kunjgit.github.io/GameZone/Games/Make_Me_Laugh/script.js":"_assets/699f1495b6ec453a6d89.js","/GameZone/Games/Make_Me_Laugh/script.js":"_assets/699f1495b6ec453a6d89.js","/Games/Make_Me_Laugh/script.js":"_assets/699f1495b6ec453a6d89.js","/Make_Me_Laugh/script.js":"_assets/699f1495b6ec453a6d89.js","/script.js":"_assets/699f1495b6ec453a6d89.js","https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js":"_assets/160a426ff2894252cd7c.js","/ajax/libs/jquery/3.3.1/jquery.min.js":"_assets/160a426ff2894252cd7c.js","/libs/jquery/3.3.1/jquery.min.js":"_assets/160a426ff2894252cd7c.js","/jquery/3.3.1/jquery.min.js":"_assets/160a426ff2894252cd7c.js","/3.3.1/jquery.min.js":"_assets/160a426ff2894252cd7c.js","/jquery.min.js":"_assets/160a426ff2894252cd7c.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/all.min.css":"_assets/d87ddf917b7a1449ab45.css","https://fonts.googleapis.com/css?family=Montserrat:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic":"_assets/655c54a113e02233c15c.css","/css":"_assets/35bd8f1ed342d41153ba.css","/css?family=Montserrat:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic":"_assets/655c54a113e02233c15c.css","https://fonts.googleapis.com/css":"_assets/35bd8f1ed342d41153ba.css","https://fonts.googleapis.com/css?family=Bagel+Fat+One:regular":"_assets/35bd8f1ed342d41153ba.css","/css?family=Bagel+Fat+One:regular":"_assets/35bd8f1ed342d41153ba.css","https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2":"_assets/06b16db7a969135d48d3.woff2","/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2":"_assets/06b16db7a969135d48d3.woff2","/montserrat/v31/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2":"_assets/06b16db7a969135d48d3.woff2","/v31/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2":"_assets/06b16db7a969135d48d3.woff2","/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2":"_assets/06b16db7a969135d48d3.woff2","https://fonts.gstatic.com/s/bagelfatone/v2/hYkPPucsQOr5dy02WmQr5Zkd4Blsvw.woff2":"_assets/115ac5b80f2bd487ab5d.woff2","/s/bagelfatone/v2/hYkPPucsQOr5dy02WmQr5Zkd4Blsvw.woff2":"_assets/115ac5b80f2bd487ab5d.woff2","/bagelfatone/v2/hYkPPucsQOr5dy02WmQr5Zkd4Blsvw.woff2":"_assets/115ac5b80f2bd487ab5d.woff2","/v2/hYkPPucsQOr5dy02WmQr5Zkd4Blsvw.woff2":"_assets/115ac5b80f2bd487ab5d.woff2","/hYkPPucsQOr5dy02WmQr5Zkd4Blsvw.woff2":"_assets/115ac5b80f2bd487ab5d.woff2","https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single":"_assets/7b3503274ebf99261e0b.json","/joke/Programming,Miscellaneous,Pun,Spooky":"_assets/7b3503274ebf99261e0b.json","/joke/Programming,Miscellaneous,Pun,Spooky?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single":"_assets/7b3503274ebf99261e0b.json","/Programming,Miscellaneous,Pun,Spooky":"_assets/7b3503274ebf99261e0b.json","https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky":"_assets/7b3503274ebf99261e0b.json","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","https://kunjgit.github.io/GameZone/Games/Make_Me_Laugh/assets/audio/not_funny.wav":"_assets/8234ed97d23288425426.wav","/GameZone/Games/Make_Me_Laugh/assets/audio/not_funny.wav":"_assets/8234ed97d23288425426.wav","/Games/Make_Me_Laugh/assets/audio/not_funny.wav":"_assets/8234ed97d23288425426.wav","/Make_Me_Laugh/assets/audio/not_funny.wav":"_assets/8234ed97d23288425426.wav","/assets/audio/not_funny.wav":"_assets/8234ed97d23288425426.wav","/audio/not_funny.wav":"_assets/8234ed97d23288425426.wav","/not_funny.wav":"_assets/8234ed97d23288425426.wav","https://kunjgit.github.io/GameZone/Games/Make_Me_Laugh/assets/audio/funny.wav":"_assets/a6ed78822e78c5f73230.wav","/GameZone/Games/Make_Me_Laugh/assets/audio/funny.wav":"_assets/a6ed78822e78c5f73230.wav","/Games/Make_Me_Laugh/assets/audio/funny.wav":"_assets/a6ed78822e78c5f73230.wav","/Make_Me_Laugh/assets/audio/funny.wav":"_assets/a6ed78822e78c5f73230.wav","/assets/audio/funny.wav":"_assets/a6ed78822e78c5f73230.wav","/audio/funny.wav":"_assets/a6ed78822e78c5f73230.wav","/funny.wav":"_assets/a6ed78822e78c5f73230.wav"};
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
