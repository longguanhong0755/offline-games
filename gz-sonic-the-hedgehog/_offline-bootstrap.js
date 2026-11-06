(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kunjgit.github.io/GameZone/Games/Sonic_The_Hedgehog/bulma.css":"_assets/ba313f65407a08c666c8.css","/GameZone/Games/Sonic_The_Hedgehog/bulma.css":"_assets/ba313f65407a08c666c8.css","/Games/Sonic_The_Hedgehog/bulma.css":"_assets/ba313f65407a08c666c8.css","/Sonic_The_Hedgehog/bulma.css":"_assets/ba313f65407a08c666c8.css","/bulma.css":"_assets/ba313f65407a08c666c8.css","https://kunjgit.github.io/GameZone/Games/Sonic_The_Hedgehog/style.css":"_assets/e9878944f26da7562941.css","/GameZone/Games/Sonic_The_Hedgehog/style.css":"_assets/e9878944f26da7562941.css","/Games/Sonic_The_Hedgehog/style.css":"_assets/e9878944f26da7562941.css","/Sonic_The_Hedgehog/style.css":"_assets/e9878944f26da7562941.css","/style.css":"_assets/e9878944f26da7562941.css","https://kunjgit.github.io/GameZone/Games/Sonic_The_Hedgehog/assests/gameLogo.png":"_assets/82110284fc0a16aec89c.png","/GameZone/Games/Sonic_The_Hedgehog/assests/gameLogo.png":"_assets/82110284fc0a16aec89c.png","/Games/Sonic_The_Hedgehog/assests/gameLogo.png":"_assets/82110284fc0a16aec89c.png","/Sonic_The_Hedgehog/assests/gameLogo.png":"_assets/82110284fc0a16aec89c.png","/assests/gameLogo.png":"_assets/82110284fc0a16aec89c.png","/gameLogo.png":"_assets/82110284fc0a16aec89c.png","https://kunjgit.github.io/GameZone/Games/Sonic_The_Hedgehog/assests/keyboard.png":"_assets/7838199047519fcd5508.png","/GameZone/Games/Sonic_The_Hedgehog/assests/keyboard.png":"_assets/7838199047519fcd5508.png","/Games/Sonic_The_Hedgehog/assests/keyboard.png":"_assets/7838199047519fcd5508.png","/Sonic_The_Hedgehog/assests/keyboard.png":"_assets/7838199047519fcd5508.png","/assests/keyboard.png":"_assets/7838199047519fcd5508.png","/keyboard.png":"_assets/7838199047519fcd5508.png","https://kunjgit.github.io/GameZone/Games/Sonic_The_Hedgehog/script.js":"_assets/bd5a97d16fdf338c553a.js","/GameZone/Games/Sonic_The_Hedgehog/script.js":"_assets/bd5a97d16fdf338c553a.js","/Games/Sonic_The_Hedgehog/script.js":"_assets/bd5a97d16fdf338c553a.js","/Sonic_The_Hedgehog/script.js":"_assets/bd5a97d16fdf338c553a.js","/script.js":"_assets/bd5a97d16fdf338c553a.js","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/ajax/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/libs/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/font-awesome/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/5.15.3/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/css/all.min.css":"_assets/d87ddf917b7a1449ab45.css","/all.min.css":"_assets/d87ddf917b7a1449ab45.css","https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap":"_assets/e5a8a86613d5dfb3290a.css","/css2":"_assets/e5a8a86613d5dfb3290a.css","/css2?family=Press+Start+2P&display=swap":"_assets/e5a8a86613d5dfb3290a.css","https://fonts.googleapis.com/css2":"_assets/e5a8a86613d5dfb3290a.css","https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js":"_assets/874706b2b1311a0719b5.js","/ajax/libs/jquery/2.1.1/jquery.min.js":"_assets/874706b2b1311a0719b5.js","/libs/jquery/2.1.1/jquery.min.js":"_assets/874706b2b1311a0719b5.js","/jquery/2.1.1/jquery.min.js":"_assets/874706b2b1311a0719b5.js","/2.1.1/jquery.min.js":"_assets/874706b2b1311a0719b5.js","/jquery.min.js":"_assets/874706b2b1311a0719b5.js","https://kunjgit.github.io/GameZone/Games/Sonic_The_Hedgehog/assests/ground1.jpg":"_assets/d8badbadcfcbfeea489b.jpg","/GameZone/Games/Sonic_The_Hedgehog/assests/ground1.jpg":"_assets/d8badbadcfcbfeea489b.jpg","/Games/Sonic_The_Hedgehog/assests/ground1.jpg":"_assets/d8badbadcfcbfeea489b.jpg","/Sonic_The_Hedgehog/assests/ground1.jpg":"_assets/d8badbadcfcbfeea489b.jpg","/assests/ground1.jpg":"_assets/d8badbadcfcbfeea489b.jpg","/ground1.jpg":"_assets/d8badbadcfcbfeea489b.jpg","https://kunjgit.github.io/GameZone/Games/Sonic_The_Hedgehog/sonic/01.png":"_assets/62ede506a5cd2d1ab93e.png","/GameZone/Games/Sonic_The_Hedgehog/sonic/01.png":"_assets/62ede506a5cd2d1ab93e.png","/Games/Sonic_The_Hedgehog/sonic/01.png":"_assets/62ede506a5cd2d1ab93e.png","/Sonic_The_Hedgehog/sonic/01.png":"_assets/62ede506a5cd2d1ab93e.png","/sonic/01.png":"_assets/62ede506a5cd2d1ab93e.png","/01.png":"_assets/62ede506a5cd2d1ab93e.png","https://kunjgit.github.io/GameZone/Games/Sonic_The_Hedgehog/assests/ring2.gif":"_assets/605e77553ae9eda62445.gif","/GameZone/Games/Sonic_The_Hedgehog/assests/ring2.gif":"_assets/605e77553ae9eda62445.gif","/Games/Sonic_The_Hedgehog/assests/ring2.gif":"_assets/605e77553ae9eda62445.gif","/Sonic_The_Hedgehog/assests/ring2.gif":"_assets/605e77553ae9eda62445.gif","/assests/ring2.gif":"_assets/605e77553ae9eda62445.gif","/ring2.gif":"_assets/605e77553ae9eda62445.gif","https://kunjgit.github.io/GameZone/Games/Sonic_The_Hedgehog/assests/eggman2.gif":"_assets/73eea897392994060741.gif","/GameZone/Games/Sonic_The_Hedgehog/assests/eggman2.gif":"_assets/73eea897392994060741.gif","/Games/Sonic_The_Hedgehog/assests/eggman2.gif":"_assets/73eea897392994060741.gif","/Sonic_The_Hedgehog/assests/eggman2.gif":"_assets/73eea897392994060741.gif","/assests/eggman2.gif":"_assets/73eea897392994060741.gif","/eggman2.gif":"_assets/73eea897392994060741.gif","https://kunjgit.github.io/GameZone/Games/Sonic_The_Hedgehog/assests/spikes.png":"_assets/755fdcb988991a7be84f.png","/GameZone/Games/Sonic_The_Hedgehog/assests/spikes.png":"_assets/755fdcb988991a7be84f.png","/Games/Sonic_The_Hedgehog/assests/spikes.png":"_assets/755fdcb988991a7be84f.png","/Sonic_The_Hedgehog/assests/spikes.png":"_assets/755fdcb988991a7be84f.png","/assests/spikes.png":"_assets/755fdcb988991a7be84f.png","/spikes.png":"_assets/755fdcb988991a7be84f.png","https://kunjgit.github.io/GameZone/Games/Sonic_The_Hedgehog/assests/eggman.gif":"_assets/9f3ec5162261926b83b3.gif","/GameZone/Games/Sonic_The_Hedgehog/assests/eggman.gif":"_assets/9f3ec5162261926b83b3.gif","/Games/Sonic_The_Hedgehog/assests/eggman.gif":"_assets/9f3ec5162261926b83b3.gif","/Sonic_The_Hedgehog/assests/eggman.gif":"_assets/9f3ec5162261926b83b3.gif","/assests/eggman.gif":"_assets/9f3ec5162261926b83b3.gif","/eggman.gif":"_assets/9f3ec5162261926b83b3.gif","https://fonts.gstatic.com/s/pressstart2p/v16/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2":"_assets/afec86997fdaf54af1f5.woff2","/s/pressstart2p/v16/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2":"_assets/afec86997fdaf54af1f5.woff2","/pressstart2p/v16/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2":"_assets/afec86997fdaf54af1f5.woff2","/v16/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2":"_assets/afec86997fdaf54af1f5.woff2","/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2":"_assets/afec86997fdaf54af1f5.woff2","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/font-awesome/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/5.15.3/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/webfonts/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","/fa-solid-900.woff2":"_assets/d0b4256abed724815856.woff2","https://kunjgit.github.io/GameZone/Games/Sonic_The_Hedgehog/audio/greenHill.mp3":"_assets/ca44a69e4750671cbefa.mp3","/GameZone/Games/Sonic_The_Hedgehog/audio/greenHill.mp3":"_assets/ca44a69e4750671cbefa.mp3","/Games/Sonic_The_Hedgehog/audio/greenHill.mp3":"_assets/ca44a69e4750671cbefa.mp3","/Sonic_The_Hedgehog/audio/greenHill.mp3":"_assets/ca44a69e4750671cbefa.mp3","/audio/greenHill.mp3":"_assets/ca44a69e4750671cbefa.mp3","/greenHill.mp3":"_assets/ca44a69e4750671cbefa.mp3"};
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
