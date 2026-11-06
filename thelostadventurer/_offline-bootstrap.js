(() => {
  "use strict";
  const RUNTIME_MAP = {"https://letumfalx.github.io/TheLostAdventurer/assets/js/GMPixi/object/container.js":"_assets/d16c6ff671ff229e554d.js","/TheLostAdventurer/assets/js/GMPixi/object/container.js":"_assets/d16c6ff671ff229e554d.js","/assets/js/GMPixi/object/container.js":"_assets/d16c6ff671ff229e554d.js","/js/GMPixi/object/container.js":"_assets/d16c6ff671ff229e554d.js","/GMPixi/object/container.js":"_assets/d16c6ff671ff229e554d.js","/object/container.js":"_assets/d16c6ff671ff229e554d.js","/container.js":"_assets/d16c6ff671ff229e554d.js","https://letumfalx.github.io/TheLostAdventurer/assets/js/GMPixi/data/xml.js":"_assets/85fc97117a2532fb4432.js","/TheLostAdventurer/assets/js/GMPixi/data/xml.js":"_assets/85fc97117a2532fb4432.js","/assets/js/GMPixi/data/xml.js":"_assets/85fc97117a2532fb4432.js","/js/GMPixi/data/xml.js":"_assets/85fc97117a2532fb4432.js","/GMPixi/data/xml.js":"_assets/85fc97117a2532fb4432.js","/data/xml.js":"_assets/85fc97117a2532fb4432.js","/xml.js":"_assets/85fc97117a2532fb4432.js","https://letumfalx.github.io/TheLostAdventurer/assets/js/GMPixi/data/json.js":"_assets/ccef89419a5ea14fefd0.js","/TheLostAdventurer/assets/js/GMPixi/data/json.js":"_assets/ccef89419a5ea14fefd0.js","/assets/js/GMPixi/data/json.js":"_assets/ccef89419a5ea14fefd0.js","/js/GMPixi/data/json.js":"_assets/ccef89419a5ea14fefd0.js","/GMPixi/data/json.js":"_assets/ccef89419a5ea14fefd0.js","/data/json.js":"_assets/ccef89419a5ea14fefd0.js","/json.js":"_assets/ccef89419a5ea14fefd0.js","https://letumfalx.github.io/TheLostAdventurer/assets/js/GMPixi/object/room.js":"_assets/46a0b52bc110b88bf6a1.js","/TheLostAdventurer/assets/js/GMPixi/object/room.js":"_assets/46a0b52bc110b88bf6a1.js","/assets/js/GMPixi/object/room.js":"_assets/46a0b52bc110b88bf6a1.js","/js/GMPixi/object/room.js":"_assets/46a0b52bc110b88bf6a1.js","/GMPixi/object/room.js":"_assets/46a0b52bc110b88bf6a1.js","/object/room.js":"_assets/46a0b52bc110b88bf6a1.js","/room.js":"_assets/46a0b52bc110b88bf6a1.js","https://letumfalx.github.io/TheLostAdventurer/assets/js/GMPixi/other/background.js":"_assets/e7a748ee29fdb654f172.js","/TheLostAdventurer/assets/js/GMPixi/other/background.js":"_assets/e7a748ee29fdb654f172.js","/assets/js/GMPixi/other/background.js":"_assets/e7a748ee29fdb654f172.js","/js/GMPixi/other/background.js":"_assets/e7a748ee29fdb654f172.js","/GMPixi/other/background.js":"_assets/e7a748ee29fdb654f172.js","/other/background.js":"_assets/e7a748ee29fdb654f172.js","/background.js":"_assets/e7a748ee29fdb654f172.js","https://letumfalx.github.io/TheLostAdventurer/assets/js/GMPixi/other/title.js":"_assets/c46258598a1cc562ee67.js","/TheLostAdventurer/assets/js/GMPixi/other/title.js":"_assets/c46258598a1cc562ee67.js","/assets/js/GMPixi/other/title.js":"_assets/c46258598a1cc562ee67.js","/js/GMPixi/other/title.js":"_assets/c46258598a1cc562ee67.js","/GMPixi/other/title.js":"_assets/c46258598a1cc562ee67.js","/other/title.js":"_assets/c46258598a1cc562ee67.js","/title.js":"_assets/c46258598a1cc562ee67.js","https://letumfalx.github.io/TheLostAdventurer/assets/js/GMPixi/vector/collision.js":"_assets/76cf1340eea3056e3db1.js","/TheLostAdventurer/assets/js/GMPixi/vector/collision.js":"_assets/76cf1340eea3056e3db1.js","/assets/js/GMPixi/vector/collision.js":"_assets/76cf1340eea3056e3db1.js","/js/GMPixi/vector/collision.js":"_assets/76cf1340eea3056e3db1.js","/GMPixi/vector/collision.js":"_assets/76cf1340eea3056e3db1.js","/vector/collision.js":"_assets/76cf1340eea3056e3db1.js","/collision.js":"_assets/76cf1340eea3056e3db1.js","https://letumfalx.github.io/TheLostAdventurer/assets/js/GMPixi/other/prompt.js":"_assets/057e1b154d4276f52fd0.js","/TheLostAdventurer/assets/js/GMPixi/other/prompt.js":"_assets/057e1b154d4276f52fd0.js","/assets/js/GMPixi/other/prompt.js":"_assets/057e1b154d4276f52fd0.js","/js/GMPixi/other/prompt.js":"_assets/057e1b154d4276f52fd0.js","/GMPixi/other/prompt.js":"_assets/057e1b154d4276f52fd0.js","/other/prompt.js":"_assets/057e1b154d4276f52fd0.js","/prompt.js":"_assets/057e1b154d4276f52fd0.js","https://letumfalx.github.io/TheLostAdventurer/assets/js/GMPixi/other/level.js":"_assets/1e75f614adb2c911744e.js","/TheLostAdventurer/assets/js/GMPixi/other/level.js":"_assets/1e75f614adb2c911744e.js","/assets/js/GMPixi/other/level.js":"_assets/1e75f614adb2c911744e.js","/js/GMPixi/other/level.js":"_assets/1e75f614adb2c911744e.js","/GMPixi/other/level.js":"_assets/1e75f614adb2c911744e.js","/other/level.js":"_assets/1e75f614adb2c911744e.js","/level.js":"_assets/1e75f614adb2c911744e.js","https://letumfalx.github.io/TheLostAdventurer/assets/js/GMPixi/other/player.js":"_assets/4d44e14c7103c74dc213.js","/TheLostAdventurer/assets/js/GMPixi/other/player.js":"_assets/4d44e14c7103c74dc213.js","/assets/js/GMPixi/other/player.js":"_assets/4d44e14c7103c74dc213.js","/js/GMPixi/other/player.js":"_assets/4d44e14c7103c74dc213.js","/GMPixi/other/player.js":"_assets/4d44e14c7103c74dc213.js","/other/player.js":"_assets/4d44e14c7103c74dc213.js","/player.js":"_assets/4d44e14c7103c74dc213.js","https://letumfalx.github.io/TheLostAdventurer/assets/js/GMPixi/other/block.js":"_assets/a1b4a9eab3654e9700c0.js","/TheLostAdventurer/assets/js/GMPixi/other/block.js":"_assets/a1b4a9eab3654e9700c0.js","/assets/js/GMPixi/other/block.js":"_assets/a1b4a9eab3654e9700c0.js","/js/GMPixi/other/block.js":"_assets/a1b4a9eab3654e9700c0.js","/GMPixi/other/block.js":"_assets/a1b4a9eab3654e9700c0.js","/other/block.js":"_assets/a1b4a9eab3654e9700c0.js","/block.js":"_assets/a1b4a9eab3654e9700c0.js","https://letumfalx.github.io/TheLostAdventurer/assets/js/GMPixi/other/mask.js":"_assets/7f20e4875ead549df26a.js","/TheLostAdventurer/assets/js/GMPixi/other/mask.js":"_assets/7f20e4875ead549df26a.js","/assets/js/GMPixi/other/mask.js":"_assets/7f20e4875ead549df26a.js","/js/GMPixi/other/mask.js":"_assets/7f20e4875ead549df26a.js","/GMPixi/other/mask.js":"_assets/7f20e4875ead549df26a.js","/other/mask.js":"_assets/7f20e4875ead549df26a.js","/mask.js":"_assets/7f20e4875ead549df26a.js","https://letumfalx.github.io/TheLostAdventurer/assets/js/GMPixi/other/lose.js":"_assets/59d45c94aab1358695e2.js","/TheLostAdventurer/assets/js/GMPixi/other/lose.js":"_assets/59d45c94aab1358695e2.js","/assets/js/GMPixi/other/lose.js":"_assets/59d45c94aab1358695e2.js","/js/GMPixi/other/lose.js":"_assets/59d45c94aab1358695e2.js","/GMPixi/other/lose.js":"_assets/59d45c94aab1358695e2.js","/other/lose.js":"_assets/59d45c94aab1358695e2.js","/lose.js":"_assets/59d45c94aab1358695e2.js","https://letumfalx.github.io/TheLostAdventurer/assets/js/GMPixi/other/win.js":"_assets/ff04ef2efd5e346c4091.js","/TheLostAdventurer/assets/js/GMPixi/other/win.js":"_assets/ff04ef2efd5e346c4091.js","/assets/js/GMPixi/other/win.js":"_assets/ff04ef2efd5e346c4091.js","/js/GMPixi/other/win.js":"_assets/ff04ef2efd5e346c4091.js","/GMPixi/other/win.js":"_assets/ff04ef2efd5e346c4091.js","/other/win.js":"_assets/ff04ef2efd5e346c4091.js","/win.js":"_assets/ff04ef2efd5e346c4091.js","https://letumfalx.github.io/TheLostAdventurer/assets/js/GMPixi/util.js":"_assets/61c57c2b9aae2d784637.js","/TheLostAdventurer/assets/js/GMPixi/util.js":"_assets/61c57c2b9aae2d784637.js","/assets/js/GMPixi/util.js":"_assets/61c57c2b9aae2d784637.js","/js/GMPixi/util.js":"_assets/61c57c2b9aae2d784637.js","/GMPixi/util.js":"_assets/61c57c2b9aae2d784637.js","/util.js":"_assets/61c57c2b9aae2d784637.js","https://letumfalx.github.io/TheLostAdventurer/assets/js/GMPixi/game.js":"_assets/7b7e82f2e83ddd0261c4.js","/TheLostAdventurer/assets/js/GMPixi/game.js":"_assets/7b7e82f2e83ddd0261c4.js","/assets/js/GMPixi/game.js":"_assets/7b7e82f2e83ddd0261c4.js","/js/GMPixi/game.js":"_assets/7b7e82f2e83ddd0261c4.js","/GMPixi/game.js":"_assets/7b7e82f2e83ddd0261c4.js","/game.js":"_assets/7b7e82f2e83ddd0261c4.js","https://letumfalx.github.io/TheLostAdventurer/assets/js/GMPixi/math.js":"_assets/900b053b3ceacc6b9ccb.js","/TheLostAdventurer/assets/js/GMPixi/math.js":"_assets/900b053b3ceacc6b9ccb.js","/assets/js/GMPixi/math.js":"_assets/900b053b3ceacc6b9ccb.js","/js/GMPixi/math.js":"_assets/900b053b3ceacc6b9ccb.js","/GMPixi/math.js":"_assets/900b053b3ceacc6b9ccb.js","/math.js":"_assets/900b053b3ceacc6b9ccb.js","https://letumfalx.github.io/TheLostAdventurer/assets/js/pixi.min.js":"_assets/11f69ab969c6b9ea10f7.js","/TheLostAdventurer/assets/js/pixi.min.js":"_assets/11f69ab969c6b9ea10f7.js","/assets/js/pixi.min.js":"_assets/11f69ab969c6b9ea10f7.js","/js/pixi.min.js":"_assets/11f69ab969c6b9ea10f7.js","/pixi.min.js":"_assets/11f69ab969c6b9ea10f7.js","https://letumfalx.github.io/TheLostAdventurer/assets/js/index.js":"_assets/65cfe1b22877542f48c6.js","/TheLostAdventurer/assets/js/index.js":"_assets/65cfe1b22877542f48c6.js","/assets/js/index.js":"_assets/65cfe1b22877542f48c6.js","/js/index.js":"_assets/65cfe1b22877542f48c6.js","/index.js":"_assets/65cfe1b22877542f48c6.js","https://letumfalx.github.io/TheLostAdventurer/assets/sprite/dash.png":"_assets/04d9f6ddbb8467323a37.png","/TheLostAdventurer/assets/sprite/dash.png":"_assets/04d9f6ddbb8467323a37.png","/assets/sprite/dash.png":"_assets/04d9f6ddbb8467323a37.png","/sprite/dash.png":"_assets/04d9f6ddbb8467323a37.png","/dash.png":"_assets/04d9f6ddbb8467323a37.png","https://letumfalx.github.io/TheLostAdventurer/assets/sprite/door0001.png":"_assets/6fc17793cece74995b90.png","/TheLostAdventurer/assets/sprite/door0001.png":"_assets/6fc17793cece74995b90.png","/assets/sprite/door0001.png":"_assets/6fc17793cece74995b90.png","/sprite/door0001.png":"_assets/6fc17793cece74995b90.png","/door0001.png":"_assets/6fc17793cece74995b90.png","https://letumfalx.github.io/TheLostAdventurer/assets/sprite/door0002.png":"_assets/7d32dfb4f0961f302b53.png","/TheLostAdventurer/assets/sprite/door0002.png":"_assets/7d32dfb4f0961f302b53.png","/assets/sprite/door0002.png":"_assets/7d32dfb4f0961f302b53.png","/sprite/door0002.png":"_assets/7d32dfb4f0961f302b53.png","/door0002.png":"_assets/7d32dfb4f0961f302b53.png","https://letumfalx.github.io/TheLostAdventurer/assets/sprite/info1.png":"_assets/d039489efeddaa2d9563.png","/TheLostAdventurer/assets/sprite/info1.png":"_assets/d039489efeddaa2d9563.png","/assets/sprite/info1.png":"_assets/d039489efeddaa2d9563.png","/sprite/info1.png":"_assets/d039489efeddaa2d9563.png","/info1.png":"_assets/d039489efeddaa2d9563.png","https://letumfalx.github.io/TheLostAdventurer/assets/sprite/gameover.png":"_assets/f48c5b149f1d9ebe8410.png","/TheLostAdventurer/assets/sprite/gameover.png":"_assets/f48c5b149f1d9ebe8410.png","/assets/sprite/gameover.png":"_assets/f48c5b149f1d9ebe8410.png","/sprite/gameover.png":"_assets/f48c5b149f1d9ebe8410.png","/gameover.png":"_assets/f48c5b149f1d9ebe8410.png","https://letumfalx.github.io/TheLostAdventurer/assets/sprite/info2.png":"_assets/fbd04eca13eceebeb33e.png","/TheLostAdventurer/assets/sprite/info2.png":"_assets/fbd04eca13eceebeb33e.png","/assets/sprite/info2.png":"_assets/fbd04eca13eceebeb33e.png","/sprite/info2.png":"_assets/fbd04eca13eceebeb33e.png","/info2.png":"_assets/fbd04eca13eceebeb33e.png","https://letumfalx.github.io/TheLostAdventurer/assets/sprite/controls.png":"_assets/d4679ce8c0bc015547ef.png","/TheLostAdventurer/assets/sprite/controls.png":"_assets/d4679ce8c0bc015547ef.png","/assets/sprite/controls.png":"_assets/d4679ce8c0bc015547ef.png","/sprite/controls.png":"_assets/d4679ce8c0bc015547ef.png","/controls.png":"_assets/d4679ce8c0bc015547ef.png","https://letumfalx.github.io/TheLostAdventurer/assets/sprite/bg.png":"_assets/9d8d0fe2be40b11b23af.png","/TheLostAdventurer/assets/sprite/bg.png":"_assets/9d8d0fe2be40b11b23af.png","/assets/sprite/bg.png":"_assets/9d8d0fe2be40b11b23af.png","/sprite/bg.png":"_assets/9d8d0fe2be40b11b23af.png","/bg.png":"_assets/9d8d0fe2be40b11b23af.png","https://letumfalx.github.io/TheLostAdventurer/assets/sprite/info3.png":"_assets/a124295c632019ad42ab.png","/TheLostAdventurer/assets/sprite/info3.png":"_assets/a124295c632019ad42ab.png","/assets/sprite/info3.png":"_assets/a124295c632019ad42ab.png","/sprite/info3.png":"_assets/a124295c632019ad42ab.png","/info3.png":"_assets/a124295c632019ad42ab.png","https://letumfalx.github.io/TheLostAdventurer/assets/sprite/spike0001.png":"_assets/73671107a0a4dbd4ad73.png","/TheLostAdventurer/assets/sprite/spike0001.png":"_assets/73671107a0a4dbd4ad73.png","/assets/sprite/spike0001.png":"_assets/73671107a0a4dbd4ad73.png","/sprite/spike0001.png":"_assets/73671107a0a4dbd4ad73.png","/spike0001.png":"_assets/73671107a0a4dbd4ad73.png","https://letumfalx.github.io/TheLostAdventurer/assets/sprite/spike0002.png":"_assets/fc5f1aae54e95a95cd17.png","/TheLostAdventurer/assets/sprite/spike0002.png":"_assets/fc5f1aae54e95a95cd17.png","/assets/sprite/spike0002.png":"_assets/fc5f1aae54e95a95cd17.png","/sprite/spike0002.png":"_assets/fc5f1aae54e95a95cd17.png","/spike0002.png":"_assets/fc5f1aae54e95a95cd17.png","https://letumfalx.github.io/TheLostAdventurer/assets/sprite/tile.png":"_assets/87a3ab09fa00e88c16b8.png","/TheLostAdventurer/assets/sprite/tile.png":"_assets/87a3ab09fa00e88c16b8.png","/assets/sprite/tile.png":"_assets/87a3ab09fa00e88c16b8.png","/sprite/tile.png":"_assets/87a3ab09fa00e88c16b8.png","/tile.png":"_assets/87a3ab09fa00e88c16b8.png","https://letumfalx.github.io/TheLostAdventurer/assets/sprite/title.png":"_assets/233983c5eee20dc912f9.png","/TheLostAdventurer/assets/sprite/title.png":"_assets/233983c5eee20dc912f9.png","/assets/sprite/title.png":"_assets/233983c5eee20dc912f9.png","/sprite/title.png":"_assets/233983c5eee20dc912f9.png","/title.png":"_assets/233983c5eee20dc912f9.png","https://letumfalx.github.io/TheLostAdventurer/assets/sprite/youwin.png":"_assets/715b75606352a54e833c.png","/TheLostAdventurer/assets/sprite/youwin.png":"_assets/715b75606352a54e833c.png","/assets/sprite/youwin.png":"_assets/715b75606352a54e833c.png","/sprite/youwin.png":"_assets/715b75606352a54e833c.png","/youwin.png":"_assets/715b75606352a54e833c.png","https://letumfalx.github.io/TheLostAdventurer/assets/sprite/empty.png":"_assets/bf7c37dbca6e35aa7c21.png","/TheLostAdventurer/assets/sprite/empty.png":"_assets/bf7c37dbca6e35aa7c21.png","/assets/sprite/empty.png":"_assets/bf7c37dbca6e35aa7c21.png","/sprite/empty.png":"_assets/bf7c37dbca6e35aa7c21.png","/empty.png":"_assets/bf7c37dbca6e35aa7c21.png","https://letumfalx.github.io/TheLostAdventurer/assets/xml/dash.xml":"_assets/55dbc29fbbd7bfcfdb86.xml","/TheLostAdventurer/assets/xml/dash.xml":"_assets/55dbc29fbbd7bfcfdb86.xml","/assets/xml/dash.xml":"_assets/55dbc29fbbd7bfcfdb86.xml","/xml/dash.xml":"_assets/55dbc29fbbd7bfcfdb86.xml","/dash.xml":"_assets/55dbc29fbbd7bfcfdb86.xml","https://letumfalx.github.io/TheLostAdventurer/assets/json/level1.json":"_assets/ffbc2f0d5f112e38d95a.json","/TheLostAdventurer/assets/json/level1.json":"_assets/ffbc2f0d5f112e38d95a.json","/assets/json/level1.json":"_assets/ffbc2f0d5f112e38d95a.json","/json/level1.json":"_assets/ffbc2f0d5f112e38d95a.json","/level1.json":"_assets/ffbc2f0d5f112e38d95a.json","https://letumfalx.github.io/TheLostAdventurer/assets/json/level3.json":"_assets/c0b14f5ee90aea255fca.json","/TheLostAdventurer/assets/json/level3.json":"_assets/c0b14f5ee90aea255fca.json","/assets/json/level3.json":"_assets/c0b14f5ee90aea255fca.json","/json/level3.json":"_assets/c0b14f5ee90aea255fca.json","/level3.json":"_assets/c0b14f5ee90aea255fca.json","https://letumfalx.github.io/TheLostAdventurer/assets/json/level2.json":"_assets/dc8b1ef1d0a12cc4414d.json","/TheLostAdventurer/assets/json/level2.json":"_assets/dc8b1ef1d0a12cc4414d.json","/assets/json/level2.json":"_assets/dc8b1ef1d0a12cc4414d.json","/json/level2.json":"_assets/dc8b1ef1d0a12cc4414d.json","/level2.json":"_assets/dc8b1ef1d0a12cc4414d.json","https://letumfalx.github.io/TheLostAdventurer/assets/json/level5.json":"_assets/53812c8ae08dea4d82e7.json","/TheLostAdventurer/assets/json/level5.json":"_assets/53812c8ae08dea4d82e7.json","/assets/json/level5.json":"_assets/53812c8ae08dea4d82e7.json","/json/level5.json":"_assets/53812c8ae08dea4d82e7.json","/level5.json":"_assets/53812c8ae08dea4d82e7.json","https://letumfalx.github.io/TheLostAdventurer/assets/json/level4.json":"_assets/5511a3d01618cdf2c089.json","/TheLostAdventurer/assets/json/level4.json":"_assets/5511a3d01618cdf2c089.json","/assets/json/level4.json":"_assets/5511a3d01618cdf2c089.json","/json/level4.json":"_assets/5511a3d01618cdf2c089.json","/level4.json":"_assets/5511a3d01618cdf2c089.json"};
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
