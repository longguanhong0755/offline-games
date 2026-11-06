(() => {
  "use strict";
  const RUNTIME_MAP = {"https://kwusv55.github.io/Cla-Go/lib/FXAAShader.js":"_assets/8a3ec6b28251523df1b4.js","/Cla-Go/lib/FXAAShader.js":"_assets/8a3ec6b28251523df1b4.js","/lib/FXAAShader.js":"_assets/8a3ec6b28251523df1b4.js","/FXAAShader.js":"_assets/8a3ec6b28251523df1b4.js","https://kwusv55.github.io/Cla-Go/lib/CopyShader.js":"_assets/249592106188290488cb.js","/Cla-Go/lib/CopyShader.js":"_assets/249592106188290488cb.js","/lib/CopyShader.js":"_assets/249592106188290488cb.js","/CopyShader.js":"_assets/249592106188290488cb.js","https://kwusv55.github.io/Cla-Go/lib/LuminosityHighPassShader.js":"_assets/3c8552bb514a01009c07.js","/Cla-Go/lib/LuminosityHighPassShader.js":"_assets/3c8552bb514a01009c07.js","/lib/LuminosityHighPassShader.js":"_assets/3c8552bb514a01009c07.js","/LuminosityHighPassShader.js":"_assets/3c8552bb514a01009c07.js","https://kwusv55.github.io/Cla-Go/lib/RenderPass.js":"_assets/3c1a07df004b36c1fac6.js","/Cla-Go/lib/RenderPass.js":"_assets/3c1a07df004b36c1fac6.js","/lib/RenderPass.js":"_assets/3c1a07df004b36c1fac6.js","/RenderPass.js":"_assets/3c1a07df004b36c1fac6.js","https://kwusv55.github.io/Cla-Go/lib/EffectComposer.js":"_assets/6c8bf2f6b06778fdadf7.js","/Cla-Go/lib/EffectComposer.js":"_assets/6c8bf2f6b06778fdadf7.js","/lib/EffectComposer.js":"_assets/6c8bf2f6b06778fdadf7.js","/EffectComposer.js":"_assets/6c8bf2f6b06778fdadf7.js","https://kwusv55.github.io/Cla-Go/css/style.css":"_assets/a2ba209e75bb81d0dd2b.css","/Cla-Go/css/style.css":"_assets/a2ba209e75bb81d0dd2b.css","/css/style.css":"_assets/a2ba209e75bb81d0dd2b.css","/style.css":"_assets/a2ba209e75bb81d0dd2b.css","https://kwusv55.github.io/Cla-Go/lib/ShaderPass.js":"_assets/f0d8d767e089c99ad04f.js","/Cla-Go/lib/ShaderPass.js":"_assets/f0d8d767e089c99ad04f.js","/lib/ShaderPass.js":"_assets/f0d8d767e089c99ad04f.js","/ShaderPass.js":"_assets/f0d8d767e089c99ad04f.js","https://kwusv55.github.io/Cla-Go/lib/three.min.js":"_assets/f34446bf875b5fb0dcd9.js","/Cla-Go/lib/three.min.js":"_assets/f34446bf875b5fb0dcd9.js","/lib/three.min.js":"_assets/f34446bf875b5fb0dcd9.js","/three.min.js":"_assets/f34446bf875b5fb0dcd9.js","https://kwusv55.github.io/Cla-Go/lib/UnrealBloomPass.js":"_assets/1a5b8476addc578c1792.js","/Cla-Go/lib/UnrealBloomPass.js":"_assets/1a5b8476addc578c1792.js","/lib/UnrealBloomPass.js":"_assets/1a5b8476addc578c1792.js","/UnrealBloomPass.js":"_assets/1a5b8476addc578c1792.js","https://kwusv55.github.io/Cla-Go/lib/Sky.js":"_assets/a4772d764751aeaf3053.js","/Cla-Go/lib/Sky.js":"_assets/a4772d764751aeaf3053.js","/lib/Sky.js":"_assets/a4772d764751aeaf3053.js","/Sky.js":"_assets/a4772d764751aeaf3053.js","https://kwusv55.github.io/Cla-Go/js/core.js":"_assets/8a3c87ab8ae523444218.js","/Cla-Go/js/core.js":"_assets/8a3c87ab8ae523444218.js","/js/core.js":"_assets/8a3c87ab8ae523444218.js","/core.js":"_assets/8a3c87ab8ae523444218.js","https://kwusv55.github.io/Cla-Go/js/audio.js":"_assets/9a32dbdd93800de45f56.js","/Cla-Go/js/audio.js":"_assets/9a32dbdd93800de45f56.js","/js/audio.js":"_assets/9a32dbdd93800de45f56.js","/audio.js":"_assets/9a32dbdd93800de45f56.js","https://kwusv55.github.io/Cla-Go/js/textures.js":"_assets/d9c0907bb60df3e1e0b1.js","/Cla-Go/js/textures.js":"_assets/d9c0907bb60df3e1e0b1.js","/js/textures.js":"_assets/d9c0907bb60df3e1e0b1.js","/textures.js":"_assets/d9c0907bb60df3e1e0b1.js","https://kwusv55.github.io/Cla-Go/js/world.js":"_assets/24e0e824da1af3b760ad.js","/Cla-Go/js/world.js":"_assets/24e0e824da1af3b760ad.js","/js/world.js":"_assets/24e0e824da1af3b760ad.js","/world.js":"_assets/24e0e824da1af3b760ad.js","https://kwusv55.github.io/Cla-Go/js/map.js":"_assets/a1493b35610b93dab03a.js","/Cla-Go/js/map.js":"_assets/a1493b35610b93dab03a.js","/js/map.js":"_assets/a1493b35610b93dab03a.js","/map.js":"_assets/a1493b35610b93dab03a.js","https://kwusv55.github.io/Cla-Go/js/nav.js":"_assets/045605ec4d6f7a88c94b.js","/Cla-Go/js/nav.js":"_assets/045605ec4d6f7a88c94b.js","/js/nav.js":"_assets/045605ec4d6f7a88c94b.js","/nav.js":"_assets/045605ec4d6f7a88c94b.js","https://kwusv55.github.io/Cla-Go/js/weapons.js":"_assets/90f35bb4e6d7e5cd64f2.js","/Cla-Go/js/weapons.js":"_assets/90f35bb4e6d7e5cd64f2.js","/js/weapons.js":"_assets/90f35bb4e6d7e5cd64f2.js","/weapons.js":"_assets/90f35bb4e6d7e5cd64f2.js","https://kwusv55.github.io/Cla-Go/js/models.js":"_assets/62cd5103f49f09988d38.js","/Cla-Go/js/models.js":"_assets/62cd5103f49f09988d38.js","/js/models.js":"_assets/62cd5103f49f09988d38.js","/models.js":"_assets/62cd5103f49f09988d38.js","https://kwusv55.github.io/Cla-Go/js/effects.js":"_assets/be02ce663b53acaf2de8.js","/Cla-Go/js/effects.js":"_assets/be02ce663b53acaf2de8.js","/js/effects.js":"_assets/be02ce663b53acaf2de8.js","/effects.js":"_assets/be02ce663b53acaf2de8.js","https://kwusv55.github.io/Cla-Go/js/ragdoll.js":"_assets/acd88950d653b8d5cf3a.js","/Cla-Go/js/ragdoll.js":"_assets/acd88950d653b8d5cf3a.js","/js/ragdoll.js":"_assets/acd88950d653b8d5cf3a.js","/ragdoll.js":"_assets/acd88950d653b8d5cf3a.js","https://kwusv55.github.io/Cla-Go/js/actor.js":"_assets/ba5f66fb1490787632c5.js","/Cla-Go/js/actor.js":"_assets/ba5f66fb1490787632c5.js","/js/actor.js":"_assets/ba5f66fb1490787632c5.js","/actor.js":"_assets/ba5f66fb1490787632c5.js","https://kwusv55.github.io/Cla-Go/js/bot.js":"_assets/4831a3e54253971f5d8b.js","/Cla-Go/js/bot.js":"_assets/4831a3e54253971f5d8b.js","/js/bot.js":"_assets/4831a3e54253971f5d8b.js","/bot.js":"_assets/4831a3e54253971f5d8b.js","https://kwusv55.github.io/Cla-Go/js/viewmodel.js":"_assets/4add3f0cbd117e282fe9.js","/Cla-Go/js/viewmodel.js":"_assets/4add3f0cbd117e282fe9.js","/js/viewmodel.js":"_assets/4add3f0cbd117e282fe9.js","/viewmodel.js":"_assets/4add3f0cbd117e282fe9.js","https://kwusv55.github.io/Cla-Go/js/hud.js":"_assets/7c4a38db43bf8040fe67.js","/Cla-Go/js/hud.js":"_assets/7c4a38db43bf8040fe67.js","/js/hud.js":"_assets/7c4a38db43bf8040fe67.js","/hud.js":"_assets/7c4a38db43bf8040fe67.js","https://kwusv55.github.io/Cla-Go/js/net.js":"_assets/78026588944cc9fc8a32.js","/Cla-Go/js/net.js":"_assets/78026588944cc9fc8a32.js","/js/net.js":"_assets/78026588944cc9fc8a32.js","/net.js":"_assets/78026588944cc9fc8a32.js","https://kwusv55.github.io/Cla-Go/js/game.js":"_assets/007a1663bc9fcdfa7b15.js","/Cla-Go/js/game.js":"_assets/007a1663bc9fcdfa7b15.js","/js/game.js":"_assets/007a1663bc9fcdfa7b15.js","/game.js":"_assets/007a1663bc9fcdfa7b15.js","https://kwusv55.github.io/Cla-Go/js/main.js":"_assets/5c7899d2411a6203db4e.js","/Cla-Go/js/main.js":"_assets/5c7899d2411a6203db4e.js","/js/main.js":"_assets/5c7899d2411a6203db4e.js","/main.js":"_assets/5c7899d2411a6203db4e.js"};
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
