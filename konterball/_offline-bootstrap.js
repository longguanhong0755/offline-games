(() => {
  "use strict";
  const RUNTIME_MAP = {"https://konterball.com/images/icon-unmute-cbfe8e0389.svg":"_assets/def072353f9125cfcf0f.svg","/images/icon-unmute-cbfe8e0389.svg":"_assets/def072353f9125cfcf0f.svg","/icon-unmute-cbfe8e0389.svg":"_assets/def072353f9125cfcf0f.svg","https://konterball.com/stylesheets/app-77a2fade0e.css":"_assets/d6f3f2f61a605b9e34f3.css","/stylesheets/app-77a2fade0e.css":"_assets/d6f3f2f61a605b9e34f3.css","/app-77a2fade0e.css":"_assets/d6f3f2f61a605b9e34f3.css","https://konterball.com/images/icon-cardboard-74a97f8947.svg":"_assets/67d68625fac950afa56a.svg","/images/icon-cardboard-74a97f8947.svg":"_assets/67d68625fac950afa56a.svg","/icon-cardboard-74a97f8947.svg":"_assets/67d68625fac950afa56a.svg","https://konterball.com/images/icon-reset-pose-19a7e0b347.svg":"_assets/3907977a7abfeed14086.svg","/images/icon-reset-pose-19a7e0b347.svg":"_assets/3907977a7abfeed14086.svg","/icon-reset-pose-19a7e0b347.svg":"_assets/3907977a7abfeed14086.svg","https://konterball.com/images/webvr-badge-4029327217.svg":"_assets/466e6498827c904e3f9f.svg","/images/webvr-badge-4029327217.svg":"_assets/466e6498827c904e3f9f.svg","/webvr-badge-4029327217.svg":"_assets/466e6498827c904e3f9f.svg","https://konterball.com/images/rotate-screen/phone-37002e7eb5.svg":"_assets/65d05111db3c393f498e.svg","/images/rotate-screen/phone-37002e7eb5.svg":"_assets/65d05111db3c393f498e.svg","/rotate-screen/phone-37002e7eb5.svg":"_assets/65d05111db3c393f498e.svg","/phone-37002e7eb5.svg":"_assets/65d05111db3c393f498e.svg","https://konterball.com/lib/cannon.js":"_assets/a09b160791513f44c0d3.js","/lib/cannon.js":"_assets/a09b160791513f44c0d3.js","/cannon.js":"_assets/a09b160791513f44c0d3.js","https://konterball.com/lib/webvr-polyfill.js":"_assets/32c8598e950dc3a429c6.js","/lib/webvr-polyfill.js":"_assets/32c8598e950dc3a429c6.js","/webvr-polyfill.js":"_assets/32c8598e950dc3a429c6.js","https://konterball.com/images/rotate-screen/x-9992968367.svg":"_assets/8e115f07813a034824a5.svg","/images/rotate-screen/x-9992968367.svg":"_assets/8e115f07813a034824a5.svg","/rotate-screen/x-9992968367.svg":"_assets/8e115f07813a034824a5.svg","/x-9992968367.svg":"_assets/8e115f07813a034824a5.svg","https://konterball.com/images/rotate-screen/checkmark-ed9b2c4593.svg":"_assets/c83118004ec419b01e06.svg","/images/rotate-screen/checkmark-ed9b2c4593.svg":"_assets/c83118004ec419b01e06.svg","/rotate-screen/checkmark-ed9b2c4593.svg":"_assets/c83118004ec419b01e06.svg","/checkmark-ed9b2c4593.svg":"_assets/c83118004ec419b01e06.svg","https://konterball.com/images/logo-wild-a5caf9957a.svg":"_assets/410e96ad2aedbb78aa68.svg","/images/logo-wild-a5caf9957a.svg":"_assets/410e96ad2aedbb78aa68.svg","/logo-wild-a5caf9957a.svg":"_assets/410e96ad2aedbb78aa68.svg","https://konterball.com/images/icon-arrow-c99e442b86.svg":"_assets/7564ec2e8d2a4625406e.svg","/images/icon-arrow-c99e442b86.svg":"_assets/7564ec2e8d2a4625406e.svg","/icon-arrow-c99e442b86.svg":"_assets/7564ec2e8d2a4625406e.svg","https://konterball.com/images/icon-note-3a6b504e9f.svg":"_assets/a64a2377bf5504f11fd5.svg","/images/icon-note-3a6b504e9f.svg":"_assets/a64a2377bf5504f11fd5.svg","/icon-note-3a6b504e9f.svg":"_assets/a64a2377bf5504f11fd5.svg","https://konterball.com/fonts/AntiqueOlive.woff2":"_assets/ae6d6fd0d1059b73e4bd.woff2","/fonts/AntiqueOlive.woff2":"_assets/ae6d6fd0d1059b73e4bd.woff2","/AntiqueOlive.woff2":"_assets/ae6d6fd0d1059b73e4bd.woff2","https://konterball.com/fonts/FuturaItalic.woff2":"_assets/6b549131a219cf90786c.woff2","/fonts/FuturaItalic.woff2":"_assets/6b549131a219cf90786c.woff2","/FuturaItalic.woff2":"_assets/6b549131a219cf90786c.woff2","https://konterball.com/javascripts/app-e5fd9e50e61ae97d1f6e.js":"_assets/bc9c67d9cbc27c46f707.js","/javascripts/app-e5fd9e50e61ae97d1f6e.js":"_assets/bc9c67d9cbc27c46f707.js","/app-e5fd9e50e61ae97d1f6e.js":"_assets/bc9c67d9cbc27c46f707.js","https://konterball.com/audio/output.ogg":"_assets/a51bb26c99d2119b111d.ogg","/audio/output.ogg":"_assets/a51bb26c99d2119b111d.ogg","/output.ogg":"_assets/a51bb26c99d2119b111d.ogg","https://konterball.com/audio/loops/loop1-bass.mp3":"_assets/a91d975338407fe46499.mp3","/audio/loops/loop1-bass.mp3":"_assets/a91d975338407fe46499.mp3","/loops/loop1-bass.mp3":"_assets/a91d975338407fe46499.mp3","/loop1-bass.mp3":"_assets/a91d975338407fe46499.mp3","https://konterball.com/audio/loops/loop1-bass-pad.mp3":"_assets/e8940e40debf63ff6bb4.mp3","/audio/loops/loop1-bass-pad.mp3":"_assets/e8940e40debf63ff6bb4.mp3","/loops/loop1-bass-pad.mp3":"_assets/e8940e40debf63ff6bb4.mp3","/loop1-bass-pad.mp3":"_assets/e8940e40debf63ff6bb4.mp3","https://konterball.com/audio/loops/loop1-bass-pad-synth.mp3":"_assets/a811f42420e2779283d8.mp3","/audio/loops/loop1-bass-pad-synth.mp3":"_assets/a811f42420e2779283d8.mp3","/loops/loop1-bass-pad-synth.mp3":"_assets/a811f42420e2779283d8.mp3","/loop1-bass-pad-synth.mp3":"_assets/a811f42420e2779283d8.mp3","https://konterball.com/audio/loops/waiting.mp3":"_assets/ff336057e18620d6a5eb.mp3","/audio/loops/waiting.mp3":"_assets/ff336057e18620d6a5eb.mp3","/loops/waiting.mp3":"_assets/ff336057e18620d6a5eb.mp3","/waiting.mp3":"_assets/ff336057e18620d6a5eb.mp3","https://konterball.com/models/paddle.obj":"_assets/e0dc40a9fb3a12cdd410.obj","/models/paddle.obj":"_assets/e0dc40a9fb3a12cdd410.obj","/paddle.obj":"_assets/e0dc40a9fb3a12cdd410.obj","https://konterball.com/fonts/AntiqueOlive.json":"_assets/4dc3b184a2c18832d13a.json","/fonts/AntiqueOlive.json":"_assets/4dc3b184a2c18832d13a.json","/AntiqueOlive.json":"_assets/4dc3b184a2c18832d13a.json","https://konterball.com/fonts/Futura.json":"_assets/645e6b4e212b8b487d18.json","/fonts/Futura.json":"_assets/645e6b4e212b8b487d18.json","/Futura.json":"_assets/645e6b4e212b8b487d18.json","https://konterball.com/animations/1player-v3.json":"_assets/615ec97a0383331b1c75.json","/animations/1player-v3.json":"_assets/615ec97a0383331b1c75.json","/1player-v3.json":"_assets/615ec97a0383331b1c75.json","https://konterball.com/animations/2player-v3.json":"_assets/fc5a4d013e410d7880b8.json","/animations/2player-v3.json":"_assets/fc5a4d013e410d7880b8.json","/2player-v3.json":"_assets/fc5a4d013e410d7880b8.json","https://konterball.com/models/arrows.obj":"_assets/4af35fcb9f5cfe80769c.obj","/models/arrows.obj":"_assets/4af35fcb9f5cfe80769c.obj","/arrows.obj":"_assets/4af35fcb9f5cfe80769c.obj"};
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
