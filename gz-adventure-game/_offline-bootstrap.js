(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Adventure_Game/style.css":"_assets/70e8603eb7ac8c5f05a0.css","/GameZone/Games/Adventure_Game/style.css":"_assets/70e8603eb7ac8c5f05a0.css","/Games/Adventure_Game/style.css":"_assets/70e8603eb7ac8c5f05a0.css","/Adventure_Game/style.css":"_assets/70e8603eb7ac8c5f05a0.css","/style.css":"_assets/70e8603eb7ac8c5f05a0.css","https://kunjgit.github.io/GameZone/Games/Adventure_Game/script.js":"_assets/b3b15af85775dd47a5a7.js","/GameZone/Games/Adventure_Game/script.js":"_assets/b3b15af85775dd47a5a7.js","/Games/Adventure_Game/script.js":"_assets/b3b15af85775dd47a5a7.js","/Adventure_Game/script.js":"_assets/b3b15af85775dd47a5a7.js","/script.js":"_assets/b3b15af85775dd47a5a7.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/all.min.css":"_assets/d87ddf917b7a1449ab45.css","https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js":"_assets/160a426ff2894252cd7c.js","/ajax/libs/jquery/3.3.1/jquery.min.js":"_assets/160a426ff2894252cd7c.js","/libs/jquery/3.3.1/jquery.min.js":"_assets/160a426ff2894252cd7c.js","/jquery/3.3.1/jquery.min.js":"_assets/160a426ff2894252cd7c.js","/3.3.1/jquery.min.js":"_assets/160a426ff2894252cd7c.js","/jquery.min.js":"_assets/160a426ff2894252cd7c.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/creepyCorridor-_161.png":"_assets/c6a90b398c55de1df8da.png","/s.cdpn.io/217233/creepyCorridor-_161.png":"_assets/c6a90b398c55de1df8da.png","/217233/creepyCorridor-_161.png":"_assets/c6a90b398c55de1df8da.png","/creepyCorridor-_161.png":"_assets/c6a90b398c55de1df8da.png","https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/creepyBackpack.png":"_assets/59b420ff0a9acdcdfe9d.png","/s.cdpn.io/217233/creepyBackpack.png":"_assets/59b420ff0a9acdcdfe9d.png","/217233/creepyBackpack.png":"_assets/59b420ff0a9acdcdfe9d.png","/creepyBackpack.png":"_assets/59b420ff0a9acdcdfe9d.png","https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/corridorMainCharacter.gif":"_assets/d6bb98a20204a18883a2.gif","/s.cdpn.io/217233/corridorMainCharacter.gif":"_assets/d6bb98a20204a18883a2.gif","/217233/corridorMainCharacter.gif":"_assets/d6bb98a20204a18883a2.gif","/corridorMainCharacter.gif":"_assets/d6bb98a20204a18883a2.gif","https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/spookyEyes.gif":"_assets/92ec3fbc3fbcaea3229e.gif","/s.cdpn.io/217233/spookyEyes.gif":"_assets/92ec3fbc3fbcaea3229e.gif","/217233/spookyEyes.gif":"_assets/92ec3fbc3fbcaea3229e.gif","/spookyEyes.gif":"_assets/92ec3fbc3fbcaea3229e.gif","https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/swingingLantern.gif":"_assets/f2ac61036c11e9d56397.gif","/s.cdpn.io/217233/swingingLantern.gif":"_assets/f2ac61036c11e9d56397.gif","/217233/swingingLantern.gif":"_assets/f2ac61036c11e9d56397.gif","/swingingLantern.gif":"_assets/f2ac61036c11e9d56397.gif","https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/corridorLift.png":"_assets/a7318fe575d21784273c.png","/s.cdpn.io/217233/corridorLift.png":"_assets/a7318fe575d21784273c.png","/217233/corridorLift.png":"_assets/a7318fe575d21784273c.png","/corridorLift.png":"_assets/a7318fe575d21784273c.png","https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/mineLogo.gif":"_assets/49cff369df7e0917a3c9.gif","/s.cdpn.io/217233/mineLogo.gif":"_assets/49cff369df7e0917a3c9.gif","/217233/mineLogo.gif":"_assets/49cff369df7e0917a3c9.gif","/mineLogo.gif":"_assets/49cff369df7e0917a3c9.gif","https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/arrowMovement.png":"_assets/9acee3236a54abf03533.png","/s.cdpn.io/217233/arrowMovement.png":"_assets/9acee3236a54abf03533.png","/217233/arrowMovement.png":"_assets/9acee3236a54abf03533.png","/arrowMovement.png":"_assets/9acee3236a54abf03533.png","https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/padlockBig.png":"_assets/ea9cfd041d93ed0ae2e6.png","/s.cdpn.io/217233/padlockBig.png":"_assets/ea9cfd041d93ed0ae2e6.png","/217233/padlockBig.png":"_assets/ea9cfd041d93ed0ae2e6.png","/padlockBig.png":"_assets/ea9cfd041d93ed0ae2e6.png","https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/creepyCorridor-24.png":"_assets/96559667c769f03d4b07.png","/s.cdpn.io/217233/creepyCorridor-24.png":"_assets/96559667c769f03d4b07.png","/217233/creepyCorridor-24.png":"_assets/96559667c769f03d4b07.png","/creepyCorridor-24.png":"_assets/96559667c769f03d4b07.png","https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/creepyCorridor-_094.png":"_assets/79c135dff36ca95eb7dc.png","/s.cdpn.io/217233/creepyCorridor-_094.png":"_assets/79c135dff36ca95eb7dc.png","/217233/creepyCorridor-_094.png":"_assets/79c135dff36ca95eb7dc.png","/creepyCorridor-_094.png":"_assets/79c135dff36ca95eb7dc.png","https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/creepyCorridor-_062.png":"_assets/445299e2d47f9ea670e6.png","/s.cdpn.io/217233/creepyCorridor-_062.png":"_assets/445299e2d47f9ea670e6.png","/217233/creepyCorridor-_062.png":"_assets/445299e2d47f9ea670e6.png","/creepyCorridor-_062.png":"_assets/445299e2d47f9ea670e6.png","https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/creepyCorridor-_166.png":"_assets/37b4536a00a4f43e9f37.png","/s.cdpn.io/217233/creepyCorridor-_166.png":"_assets/37b4536a00a4f43e9f37.png","/217233/creepyCorridor-_166.png":"_assets/37b4536a00a4f43e9f37.png","/creepyCorridor-_166.png":"_assets/37b4536a00a4f43e9f37.png","https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/tilemaps.png":"_assets/9870b9e5e390c5e1de80.png","/s.cdpn.io/217233/tilemaps.png":"_assets/9870b9e5e390c5e1de80.png","/217233/tilemaps.png":"_assets/9870b9e5e390c5e1de80.png","/tilemaps.png":"_assets/9870b9e5e390c5e1de80.png","https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/creepyCorridor-_168.png":"_assets/20e5ec9686aff6b072ed.png","/s.cdpn.io/217233/creepyCorridor-_168.png":"_assets/20e5ec9686aff6b072ed.png","/217233/creepyCorridor-_168.png":"_assets/20e5ec9686aff6b072ed.png","/creepyCorridor-_168.png":"_assets/20e5ec9686aff6b072ed.png","https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/creepyCorridor-_035.png":"_assets/7f1323f04de13d41e720.png","/s.cdpn.io/217233/creepyCorridor-_035.png":"_assets/7f1323f04de13d41e720.png","/217233/creepyCorridor-_035.png":"_assets/7f1323f04de13d41e720.png","/creepyCorridor-_035.png":"_assets/7f1323f04de13d41e720.png","https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/creepyCorridor-25.png":"_assets/b3a77307ffb365acfdfb.png","/s.cdpn.io/217233/creepyCorridor-25.png":"_assets/b3a77307ffb365acfdfb.png","/217233/creepyCorridor-25.png":"_assets/b3a77307ffb365acfdfb.png","/creepyCorridor-25.png":"_assets/b3a77307ffb365acfdfb.png","https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/doorLocked.png":"_assets/b4960420854c171101d6.png","/s.cdpn.io/217233/doorLocked.png":"_assets/b4960420854c171101d6.png","/217233/doorLocked.png":"_assets/b4960420854c171101d6.png","/doorLocked.png":"_assets/b4960420854c171101d6.png","https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/creepyCorridor-_169.png":"_assets/923c3cefc98ba95a4a91.png","/s.cdpn.io/217233/creepyCorridor-_169.png":"_assets/923c3cefc98ba95a4a91.png","/217233/creepyCorridor-_169.png":"_assets/923c3cefc98ba95a4a91.png","/creepyCorridor-_169.png":"_assets/923c3cefc98ba95a4a91.png","https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/beam.gif":"_assets/03ffa7949e79ac203e07.gif","/s.cdpn.io/217233/beam.gif":"_assets/03ffa7949e79ac203e07.gif","/217233/beam.gif":"_assets/03ffa7949e79ac203e07.gif","/beam.gif":"_assets/03ffa7949e79ac203e07.gif","https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/creepyCorridor-_148.png":"_assets/a765fbb8e75a8eaddf66.png","/s.cdpn.io/217233/creepyCorridor-_148.png":"_assets/a765fbb8e75a8eaddf66.png","/217233/creepyCorridor-_148.png":"_assets/a765fbb8e75a8eaddf66.png","/creepyCorridor-_148.png":"_assets/a765fbb8e75a8eaddf66.png","https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/waterOn.gif":"_assets/bbb4935cbfc674af1604.gif","/s.cdpn.io/217233/waterOn.gif":"_assets/bbb4935cbfc674af1604.gif","/217233/waterOn.gif":"_assets/bbb4935cbfc674af1604.gif","/waterOn.gif":"_assets/bbb4935cbfc674af1604.gif","https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/apple.gif":"_assets/e9a622ea6efad8e8ddd9.gif","/s.cdpn.io/217233/apple.gif":"_assets/e9a622ea6efad8e8ddd9.gif","/217233/apple.gif":"_assets/e9a622ea6efad8e8ddd9.gif","/apple.gif":"_assets/e9a622ea6efad8e8ddd9.gif","https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pickInventory.gif":"_assets/5715a641d840f631f5d1.gif","/s.cdpn.io/217233/pickInventory.gif":"_assets/5715a641d840f631f5d1.gif","/217233/pickInventory.gif":"_assets/5715a641d840f631f5d1.gif","/pickInventory.gif":"_assets/5715a641d840f631f5d1.gif","https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/plankInventory.gif":"_assets/9252ad0ade02493a66db.gif","/s.cdpn.io/217233/plankInventory.gif":"_assets/9252ad0ade02493a66db.gif","/217233/plankInventory.gif":"_assets/9252ad0ade02493a66db.gif","/plankInventory.gif":"_assets/9252ad0ade02493a66db.gif","https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/note1.gif":"_assets/c62f205ace8cc8a0e936.gif","/s.cdpn.io/217233/note1.gif":"_assets/c62f205ace8cc8a0e936.gif","/217233/note1.gif":"_assets/c62f205ace8cc8a0e936.gif","/note1.gif":"_assets/c62f205ace8cc8a0e936.gif","https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/note2.gif":"_assets/b7ef9ae3e4feacbc1d39.gif","/s.cdpn.io/217233/note2.gif":"_assets/b7ef9ae3e4feacbc1d39.gif","/217233/note2.gif":"_assets/b7ef9ae3e4feacbc1d39.gif","/note2.gif":"_assets/b7ef9ae3e4feacbc1d39.gif","https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/note3.gif":"_assets/836662f86814d3ad2780.gif","/s.cdpn.io/217233/note3.gif":"_assets/836662f86814d3ad2780.gif","/217233/note3.gif":"_assets/836662f86814d3ad2780.gif","/note3.gif":"_assets/836662f86814d3ad2780.gif","https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/handleInventory.gif":"_assets/6c70da5a13edc01c3834.gif","/s.cdpn.io/217233/handleInventory.gif":"_assets/6c70da5a13edc01c3834.gif","/217233/handleInventory.gif":"_assets/6c70da5a13edc01c3834.gif","/handleInventory.gif":"_assets/6c70da5a13edc01c3834.gif","https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/fusesInventory.gif":"_assets/7aa1e14a850d6a21af33.gif","/s.cdpn.io/217233/fusesInventory.gif":"_assets/7aa1e14a850d6a21af33.gif","/217233/fusesInventory.gif":"_assets/7aa1e14a850d6a21af33.gif","/fusesInventory.gif":"_assets/7aa1e14a850d6a21af33.gif","https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/dynamiteInventory.gif":"_assets/d24bf428062f785b8645.gif","/s.cdpn.io/217233/dynamiteInventory.gif":"_assets/d24bf428062f785b8645.gif","/217233/dynamiteInventory.gif":"_assets/d24bf428062f785b8645.gif","/dynamiteInventory.gif":"_assets/d24bf428062f785b8645.gif","https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/04B_03__.TTF":"_assets/81126eb33bfeef91afd0.ttf","/s.cdpn.io/217233/04B_03__.TTF":"_assets/81126eb33bfeef91afd0.ttf","/217233/04B_03__.TTF":"_assets/81126eb33bfeef91afd0.ttf","/04B_03__.TTF":"_assets/81126eb33bfeef91afd0.ttf"};
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
