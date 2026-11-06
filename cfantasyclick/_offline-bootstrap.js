(() => {
  "use strict";
  const RUNTIME_MAP = {"https://louisalflame.github.io/CFantasyClick/css/bootstrap.min.css":"_assets/eece6e0c65b7007ab0eb.css","/CFantasyClick/css/bootstrap.min.css":"_assets/eece6e0c65b7007ab0eb.css","/css/bootstrap.min.css":"_assets/eece6e0c65b7007ab0eb.css","/bootstrap.min.css":"_assets/eece6e0c65b7007ab0eb.css","https://louisalflame.github.io/CFantasyClick/js/jquery-1.11.0.min.js":"_assets/b294e973896f8f874e90.js","/CFantasyClick/js/jquery-1.11.0.min.js":"_assets/b294e973896f8f874e90.js","/js/jquery-1.11.0.min.js":"_assets/b294e973896f8f874e90.js","/jquery-1.11.0.min.js":"_assets/b294e973896f8f874e90.js","https://louisalflame.github.io/CFantasyClick/js/bootstrap/bootstrap.min.js":"_assets/2979f9a6e32fc42c3e74.js","/CFantasyClick/js/bootstrap/bootstrap.min.js":"_assets/2979f9a6e32fc42c3e74.js","/js/bootstrap/bootstrap.min.js":"_assets/2979f9a6e32fc42c3e74.js","/bootstrap/bootstrap.min.js":"_assets/2979f9a6e32fc42c3e74.js","/bootstrap.min.js":"_assets/2979f9a6e32fc42c3e74.js","https://louisalflame.github.io/CFantasyClick/js/bignumber.min.js":"_assets/b0a484d63cbe088b3982.js","/CFantasyClick/js/bignumber.min.js":"_assets/b0a484d63cbe088b3982.js","/js/bignumber.min.js":"_assets/b0a484d63cbe088b3982.js","/bignumber.min.js":"_assets/b0a484d63cbe088b3982.js","https://louisalflame.github.io/CFantasyClick/js/lib/level.js":"_assets/0fe0aef3e390a76049ef.js","/CFantasyClick/js/lib/level.js":"_assets/0fe0aef3e390a76049ef.js","/js/lib/level.js":"_assets/0fe0aef3e390a76049ef.js","/lib/level.js":"_assets/0fe0aef3e390a76049ef.js","/level.js":"_assets/0fe0aef3e390a76049ef.js","https://louisalflame.github.io/CFantasyClick/js/LZstring/lz-string.min.js":"_assets/9d1a0ef07a2ea5faa8cd.js","/CFantasyClick/js/LZstring/lz-string.min.js":"_assets/9d1a0ef07a2ea5faa8cd.js","/js/LZstring/lz-string.min.js":"_assets/9d1a0ef07a2ea5faa8cd.js","/LZstring/lz-string.min.js":"_assets/9d1a0ef07a2ea5faa8cd.js","/lz-string.min.js":"_assets/9d1a0ef07a2ea5faa8cd.js","https://louisalflame.github.io/CFantasyClick/js/lib/item.js":"_assets/cdeb989526986a8bd020.js","/CFantasyClick/js/lib/item.js":"_assets/cdeb989526986a8bd020.js","/js/lib/item.js":"_assets/cdeb989526986a8bd020.js","/lib/item.js":"_assets/cdeb989526986a8bd020.js","/item.js":"_assets/cdeb989526986a8bd020.js","https://louisalflame.github.io/CFantasyClick/js/lib/stand.js":"_assets/ee95b51bfd26092dbe58.js","/CFantasyClick/js/lib/stand.js":"_assets/ee95b51bfd26092dbe58.js","/js/lib/stand.js":"_assets/ee95b51bfd26092dbe58.js","/lib/stand.js":"_assets/ee95b51bfd26092dbe58.js","/stand.js":"_assets/ee95b51bfd26092dbe58.js","https://louisalflame.github.io/CFantasyClick/js/lib/nameMaker.js":"_assets/f0fff9cabef9b6b228b7.js","/CFantasyClick/js/lib/nameMaker.js":"_assets/f0fff9cabef9b6b228b7.js","/js/lib/nameMaker.js":"_assets/f0fff9cabef9b6b228b7.js","/lib/nameMaker.js":"_assets/f0fff9cabef9b6b228b7.js","/nameMaker.js":"_assets/f0fff9cabef9b6b228b7.js","https://louisalflame.github.io/CFantasyClick/js/lib/click.js":"_assets/e9900803a5c6110cf267.js","/CFantasyClick/js/lib/click.js":"_assets/e9900803a5c6110cf267.js","/js/lib/click.js":"_assets/e9900803a5c6110cf267.js","/lib/click.js":"_assets/e9900803a5c6110cf267.js","/click.js":"_assets/e9900803a5c6110cf267.js","https://louisalflame.github.io/CFantasyClick/js/lib/skill.js":"_assets/f71ec2e3341c155e00c8.js","/CFantasyClick/js/lib/skill.js":"_assets/f71ec2e3341c155e00c8.js","/js/lib/skill.js":"_assets/f71ec2e3341c155e00c8.js","/lib/skill.js":"_assets/f71ec2e3341c155e00c8.js","/skill.js":"_assets/f71ec2e3341c155e00c8.js","https://louisalflame.github.io/CFantasyClick/js/lib/timer.js":"_assets/bdb34125302082aec228.js","/CFantasyClick/js/lib/timer.js":"_assets/bdb34125302082aec228.js","/js/lib/timer.js":"_assets/bdb34125302082aec228.js","/lib/timer.js":"_assets/bdb34125302082aec228.js","/timer.js":"_assets/bdb34125302082aec228.js","https://louisalflame.github.io/CFantasyClick/js/vue.js":"_assets/2e92215ebf30eaabe4d4.js","/CFantasyClick/js/vue.js":"_assets/2e92215ebf30eaabe4d4.js","/js/vue.js":"_assets/2e92215ebf30eaabe4d4.js","/vue.js":"_assets/2e92215ebf30eaabe4d4.js"};
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
