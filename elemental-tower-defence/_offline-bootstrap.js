(() => {
  "use strict";
  const RUNTIME_MAP = {"https://vidushisen.github.io/Elemental-Tower-Defence/styles.css":"_assets/0b06bdd62b30c3e516f6.css","/Elemental-Tower-Defence/styles.css":"_assets/0b06bdd62b30c3e516f6.css","/styles.css":"_assets/0b06bdd62b30c3e516f6.css","https://vidushisen.github.io/Elemental-Tower-Defence/js/main.js":"_assets/48ccc27d233aceec060c.js","/Elemental-Tower-Defence/js/main.js":"_assets/48ccc27d233aceec060c.js","/js/main.js":"_assets/48ccc27d233aceec060c.js","/main.js":"_assets/48ccc27d233aceec060c.js","https://vidushisen.github.io/Elemental-Tower-Defence/js/enemies.js":"_assets/428003e0b55b083b9cd1.js","/Elemental-Tower-Defence/js/enemies.js":"_assets/428003e0b55b083b9cd1.js","/js/enemies.js":"_assets/428003e0b55b083b9cd1.js","/enemies.js":"_assets/428003e0b55b083b9cd1.js","https://vidushisen.github.io/Elemental-Tower-Defence/js/map.js":"_assets/88354550705a2bbc6412.js","/Elemental-Tower-Defence/js/map.js":"_assets/88354550705a2bbc6412.js","/js/map.js":"_assets/88354550705a2bbc6412.js","/map.js":"_assets/88354550705a2bbc6412.js","https://vidushisen.github.io/Elemental-Tower-Defence/js/particles.js":"_assets/e851b339b3f38597a204.js","/Elemental-Tower-Defence/js/particles.js":"_assets/e851b339b3f38597a204.js","/js/particles.js":"_assets/e851b339b3f38597a204.js","/particles.js":"_assets/e851b339b3f38597a204.js","https://vidushisen.github.io/Elemental-Tower-Defence/js/reactions.js":"_assets/4dbe5312600af5d2970c.js","/Elemental-Tower-Defence/js/reactions.js":"_assets/4dbe5312600af5d2970c.js","/js/reactions.js":"_assets/4dbe5312600af5d2970c.js","/reactions.js":"_assets/4dbe5312600af5d2970c.js","https://vidushisen.github.io/Elemental-Tower-Defence/js/ui.js":"_assets/21f1e71b713a9290278e.js","/Elemental-Tower-Defence/js/ui.js":"_assets/21f1e71b713a9290278e.js","/js/ui.js":"_assets/21f1e71b713a9290278e.js","/ui.js":"_assets/21f1e71b713a9290278e.js","https://vidushisen.github.io/Elemental-Tower-Defence/js/towers.js":"_assets/b748ef73ad8eb0de7a5d.js","/Elemental-Tower-Defence/js/towers.js":"_assets/b748ef73ad8eb0de7a5d.js","/js/towers.js":"_assets/b748ef73ad8eb0de7a5d.js","/towers.js":"_assets/b748ef73ad8eb0de7a5d.js","https://vidushisen.github.io/Elemental-Tower-Defence/js/audio.js":"_assets/4e9405ae405994984af0.js","/Elemental-Tower-Defence/js/audio.js":"_assets/4e9405ae405994984af0.js","/js/audio.js":"_assets/4e9405ae405994984af0.js","/audio.js":"_assets/4e9405ae405994984af0.js"};
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
