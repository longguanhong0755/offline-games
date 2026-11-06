(() => {
  "use strict";
  const RUNTIME_MAP = {"https://ondras.github.io/goldfish/js/promise.js":"_assets/e6434a3ed72166a1fcd7.js","/goldfish/js/promise.js":"_assets/e6434a3ed72166a1fcd7.js","/js/promise.js":"_assets/e6434a3ed72166a1fcd7.js","/promise.js":"_assets/e6434a3ed72166a1fcd7.js","https://ondras.github.io/goldfish/js/rot.min.js":"_assets/0dbc19ea47258e45971a.js","/goldfish/js/rot.min.js":"_assets/0dbc19ea47258e45971a.js","/js/rot.min.js":"_assets/0dbc19ea47258e45971a.js","/rot.min.js":"_assets/0dbc19ea47258e45971a.js","https://ondras.github.io/goldfish/js/game.js":"_assets/a43e3489647ed7130e9b.js","/goldfish/js/game.js":"_assets/a43e3489647ed7130e9b.js","/js/game.js":"_assets/a43e3489647ed7130e9b.js","/game.js":"_assets/a43e3489647ed7130e9b.js","https://ondras.github.io/goldfish/js/rules.js":"_assets/cabc77f544ce2a2da541.js","/goldfish/js/rules.js":"_assets/cabc77f544ce2a2da541.js","/js/rules.js":"_assets/cabc77f544ce2a2da541.js","/rules.js":"_assets/cabc77f544ce2a2da541.js","https://ondras.github.io/goldfish/js/xy.js":"_assets/09134a41b8c00263c831.js","/goldfish/js/xy.js":"_assets/09134a41b8c00263c831.js","/js/xy.js":"_assets/09134a41b8c00263c831.js","/xy.js":"_assets/09134a41b8c00263c831.js","https://ondras.github.io/goldfish/js/status.js":"_assets/4e980bd28279b6bbdd6b.js","/goldfish/js/status.js":"_assets/4e980bd28279b6bbdd6b.js","/js/status.js":"_assets/4e980bd28279b6bbdd6b.js","/status.js":"_assets/4e980bd28279b6bbdd6b.js","https://ondras.github.io/goldfish/js/stats.js":"_assets/e87800893fe6fb95ccc2.js","/goldfish/js/stats.js":"_assets/e87800893fe6fb95ccc2.js","/js/stats.js":"_assets/e87800893fe6fb95ccc2.js","/stats.js":"_assets/e87800893fe6fb95ccc2.js","https://ondras.github.io/goldfish/js/entity.js":"_assets/7c5033fd139e7519f760.js","/goldfish/js/entity.js":"_assets/7c5033fd139e7519f760.js","/js/entity.js":"_assets/7c5033fd139e7519f760.js","/entity.js":"_assets/7c5033fd139e7519f760.js","https://ondras.github.io/goldfish/js/cell.seaweed.js":"_assets/adacc5c9774fe8a94a3d.js","/goldfish/js/cell.seaweed.js":"_assets/adacc5c9774fe8a94a3d.js","/js/cell.seaweed.js":"_assets/adacc5c9774fe8a94a3d.js","/cell.seaweed.js":"_assets/adacc5c9774fe8a94a3d.js","https://ondras.github.io/goldfish/js/cell.staircase.js":"_assets/b3a02fe7f185fee009a2.js","/goldfish/js/cell.staircase.js":"_assets/b3a02fe7f185fee009a2.js","/js/cell.staircase.js":"_assets/b3a02fe7f185fee009a2.js","/cell.staircase.js":"_assets/b3a02fe7f185fee009a2.js","https://ondras.github.io/goldfish/js/cell.js":"_assets/732c80ea09d35b149c61.js","/goldfish/js/cell.js":"_assets/732c80ea09d35b149c61.js","/js/cell.js":"_assets/732c80ea09d35b149c61.js","/cell.js":"_assets/732c80ea09d35b149c61.js","https://ondras.github.io/goldfish/js/cell.bubble.js":"_assets/6e8d169ddf5c4d06e68c.js","/goldfish/js/cell.bubble.js":"_assets/6e8d169ddf5c4d06e68c.js","/js/cell.bubble.js":"_assets/6e8d169ddf5c4d06e68c.js","/cell.bubble.js":"_assets/6e8d169ddf5c4d06e68c.js","https://ondras.github.io/goldfish/js/cell.rod.js":"_assets/2b4b08d75b3bdab63463.js","/goldfish/js/cell.rod.js":"_assets/2b4b08d75b3bdab63463.js","/js/cell.rod.js":"_assets/2b4b08d75b3bdab63463.js","/cell.rod.js":"_assets/2b4b08d75b3bdab63463.js","https://ondras.github.io/goldfish/js/item.js":"_assets/ad783574d5180e291225.js","/goldfish/js/item.js":"_assets/ad783574d5180e291225.js","/js/item.js":"_assets/ad783574d5180e291225.js","/item.js":"_assets/ad783574d5180e291225.js","https://ondras.github.io/goldfish/js/item.stat.js":"_assets/d99ac8fed05c39e32ce8.js","/goldfish/js/item.stat.js":"_assets/d99ac8fed05c39e32ce8.js","/js/item.stat.js":"_assets/d99ac8fed05c39e32ce8.js","/item.stat.js":"_assets/d99ac8fed05c39e32ce8.js","https://ondras.github.io/goldfish/js/item.quest.js":"_assets/63089e074a19ce0bf70f.js","/goldfish/js/item.quest.js":"_assets/63089e074a19ce0bf70f.js","/js/item.quest.js":"_assets/63089e074a19ce0bf70f.js","/item.quest.js":"_assets/63089e074a19ce0bf70f.js","https://ondras.github.io/goldfish/js/slot.js":"_assets/4b360abbfe9380d49b3e.js","/goldfish/js/slot.js":"_assets/4b360abbfe9380d49b3e.js","/js/slot.js":"_assets/4b360abbfe9380d49b3e.js","/slot.js":"_assets/4b360abbfe9380d49b3e.js","https://ondras.github.io/goldfish/js/being.js":"_assets/513acc395b034cdfc42a.js","/goldfish/js/being.js":"_assets/513acc395b034cdfc42a.js","/js/being.js":"_assets/513acc395b034cdfc42a.js","/being.js":"_assets/513acc395b034cdfc42a.js","https://ondras.github.io/goldfish/js/being.fisher.js":"_assets/98eba36e10052fab5b63.js","/goldfish/js/being.fisher.js":"_assets/98eba36e10052fab5b63.js","/js/being.fisher.js":"_assets/98eba36e10052fab5b63.js","/being.fisher.js":"_assets/98eba36e10052fab5b63.js","https://ondras.github.io/goldfish/js/being.enemy.js":"_assets/103e7abf2bf9426c71b4.js","/goldfish/js/being.enemy.js":"_assets/103e7abf2bf9426c71b4.js","/js/being.enemy.js":"_assets/103e7abf2bf9426c71b4.js","/being.enemy.js":"_assets/103e7abf2bf9426c71b4.js","https://ondras.github.io/goldfish/js/enemies.js":"_assets/e8d05d7088c2fa77afca.js","/goldfish/js/enemies.js":"_assets/e8d05d7088c2fa77afca.js","/js/enemies.js":"_assets/e8d05d7088c2fa77afca.js","/enemies.js":"_assets/e8d05d7088c2fa77afca.js","https://ondras.github.io/goldfish/js/player.js":"_assets/38aa422b884c24db8bcb.js","/goldfish/js/player.js":"_assets/38aa422b884c24db8bcb.js","/js/player.js":"_assets/38aa422b884c24db8bcb.js","/player.js":"_assets/38aa422b884c24db8bcb.js","https://ondras.github.io/goldfish/js/inventory.slot.js":"_assets/820d510040583991d30a.js","/goldfish/js/inventory.slot.js":"_assets/820d510040583991d30a.js","/js/inventory.slot.js":"_assets/820d510040583991d30a.js","/inventory.slot.js":"_assets/820d510040583991d30a.js","https://ondras.github.io/goldfish/js/inventory.js":"_assets/4c2d7abf26bcc5f3bbd2.js","/goldfish/js/inventory.js":"_assets/4c2d7abf26bcc5f3bbd2.js","/js/inventory.js":"_assets/4c2d7abf26bcc5f3bbd2.js","/inventory.js":"_assets/4c2d7abf26bcc5f3bbd2.js","https://ondras.github.io/goldfish/js/level.js":"_assets/2511d88c7515d947fb43.js","/goldfish/js/level.js":"_assets/2511d88c7515d947fb43.js","/js/level.js":"_assets/2511d88c7515d947fb43.js","/level.js":"_assets/2511d88c7515d947fb43.js","https://ondras.github.io/goldfish/js/level.cavern.js":"_assets/f16f2ca609ea02dc4192.js","/goldfish/js/level.cavern.js":"_assets/f16f2ca609ea02dc4192.js","/js/level.cavern.js":"_assets/f16f2ca609ea02dc4192.js","/level.cavern.js":"_assets/f16f2ca609ea02dc4192.js","https://ondras.github.io/goldfish/js/level.overview.js":"_assets/390b270d08c6ff5d4ef4.js","/goldfish/js/level.overview.js":"_assets/390b270d08c6ff5d4ef4.js","/js/level.overview.js":"_assets/390b270d08c6ff5d4ef4.js","/level.overview.js":"_assets/390b270d08c6ff5d4ef4.js","https://ondras.github.io/goldfish/js/textbuffer.js":"_assets/a78fcd1715f3e7d64401.js","/goldfish/js/textbuffer.js":"_assets/a78fcd1715f3e7d64401.js","/js/textbuffer.js":"_assets/a78fcd1715f3e7d64401.js","/textbuffer.js":"_assets/a78fcd1715f3e7d64401.js","https://ondras.github.io/goldfish/js/progress.js":"_assets/8e9f378b0e6355fb01c5.js","/goldfish/js/progress.js":"_assets/8e9f378b0e6355fb01c5.js","/js/progress.js":"_assets/8e9f378b0e6355fb01c5.js","/progress.js":"_assets/8e9f378b0e6355fb01c5.js","https://ondras.github.io/goldfish/js/help.js":"_assets/128d28f371bd03e9dd30.js","/goldfish/js/help.js":"_assets/128d28f371bd03e9dd30.js","/js/help.js":"_assets/128d28f371bd03e9dd30.js","/help.js":"_assets/128d28f371bd03e9dd30.js","https://ondras.github.io/goldfish/js/quests.js":"_assets/417082084bb2763dc175.js","/goldfish/js/quests.js":"_assets/417082084bb2763dc175.js","/js/quests.js":"_assets/417082084bb2763dc175.js","/quests.js":"_assets/417082084bb2763dc175.js","https://ondras.github.io/goldfish/style.css":"_assets/b77ea7b0b1675c741e30.css","/goldfish/style.css":"_assets/b77ea7b0b1675c741e30.css","/style.css":"_assets/b77ea7b0b1675c741e30.css","https://ondras.github.io/goldfish/fish.txt":"_assets/2d9b791ef7ccfe98b08c.txt","/goldfish/fish.txt":"_assets/2d9b791ef7ccfe98b08c.txt","/fish.txt":"_assets/2d9b791ef7ccfe98b08c.txt"};
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
