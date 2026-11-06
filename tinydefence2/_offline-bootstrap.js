(() => {
  "use strict";
  const RUNTIME_MAP = {"https://milchreis.github.io/tinydefence2/assets/css/main.css":"_assets/a6a5f0ac10ef4a549392.css","/tinydefence2/assets/css/main.css":"_assets/a6a5f0ac10ef4a549392.css","/assets/css/main.css":"_assets/a6a5f0ac10ef4a549392.css","/css/main.css":"_assets/a6a5f0ac10ef4a549392.css","/main.css":"_assets/a6a5f0ac10ef4a549392.css","https://milchreis.github.io/tinydefence2/assets/js/maps.js":"_assets/232552f9ca93341c397d.js","/tinydefence2/assets/js/maps.js":"_assets/232552f9ca93341c397d.js","/assets/js/maps.js":"_assets/232552f9ca93341c397d.js","/js/maps.js":"_assets/232552f9ca93341c397d.js","/maps.js":"_assets/232552f9ca93341c397d.js","https://milchreis.github.io/tinydefence2/assets/js/utils.js":"_assets/28705e4dab14f144e07e.js","/tinydefence2/assets/js/utils.js":"_assets/28705e4dab14f144e07e.js","/assets/js/utils.js":"_assets/28705e4dab14f144e07e.js","/js/utils.js":"_assets/28705e4dab14f144e07e.js","/utils.js":"_assets/28705e4dab14f144e07e.js","https://milchreis.github.io/tinydefence2/assets/js/tower.js":"_assets/86514b8335233add41bd.js","/tinydefence2/assets/js/tower.js":"_assets/86514b8335233add41bd.js","/assets/js/tower.js":"_assets/86514b8335233add41bd.js","/js/tower.js":"_assets/86514b8335233add41bd.js","/tower.js":"_assets/86514b8335233add41bd.js","https://milchreis.github.io/tinydefence2/assets/js/towermanager.js":"_assets/0de7a271c76f62f0d255.js","/tinydefence2/assets/js/towermanager.js":"_assets/0de7a271c76f62f0d255.js","/assets/js/towermanager.js":"_assets/0de7a271c76f62f0d255.js","/js/towermanager.js":"_assets/0de7a271c76f62f0d255.js","/towermanager.js":"_assets/0de7a271c76f62f0d255.js","https://milchreis.github.io/tinydefence2/assets/js/defencegame.js":"_assets/70812d7fae0925861aee.js","/tinydefence2/assets/js/defencegame.js":"_assets/70812d7fae0925861aee.js","/assets/js/defencegame.js":"_assets/70812d7fae0925861aee.js","/js/defencegame.js":"_assets/70812d7fae0925861aee.js","/defencegame.js":"_assets/70812d7fae0925861aee.js","https://milchreis.github.io/tinydefence2/assets/js/enemy.js":"_assets/63807c72fc3befa8c5d6.js","/tinydefence2/assets/js/enemy.js":"_assets/63807c72fc3befa8c5d6.js","/assets/js/enemy.js":"_assets/63807c72fc3befa8c5d6.js","/js/enemy.js":"_assets/63807c72fc3befa8c5d6.js","/enemy.js":"_assets/63807c72fc3befa8c5d6.js","https://milchreis.github.io/tinydefence2/libs/phaser.min.js":"_assets/49184a28fa28967f8cca.js","/tinydefence2/libs/phaser.min.js":"_assets/49184a28fa28967f8cca.js","/libs/phaser.min.js":"_assets/49184a28fa28967f8cca.js","/phaser.min.js":"_assets/49184a28fa28967f8cca.js","https://milchreis.github.io/tinydefence2/assets/js/states/boot.js":"_assets/892ffaeea6df1ae3efe5.js","/tinydefence2/assets/js/states/boot.js":"_assets/892ffaeea6df1ae3efe5.js","/assets/js/states/boot.js":"_assets/892ffaeea6df1ae3efe5.js","/js/states/boot.js":"_assets/892ffaeea6df1ae3efe5.js","/states/boot.js":"_assets/892ffaeea6df1ae3efe5.js","/boot.js":"_assets/892ffaeea6df1ae3efe5.js","https://milchreis.github.io/tinydefence2/assets/js/ui/uioverlay.js":"_assets/b053b0f658378c720b46.js","/tinydefence2/assets/js/ui/uioverlay.js":"_assets/b053b0f658378c720b46.js","/assets/js/ui/uioverlay.js":"_assets/b053b0f658378c720b46.js","/js/ui/uioverlay.js":"_assets/b053b0f658378c720b46.js","/ui/uioverlay.js":"_assets/b053b0f658378c720b46.js","/uioverlay.js":"_assets/b053b0f658378c720b46.js","https://milchreis.github.io/tinydefence2/assets/js/ui/ui.js":"_assets/a7a143aa337f361c6bbd.js","/tinydefence2/assets/js/ui/ui.js":"_assets/a7a143aa337f361c6bbd.js","/assets/js/ui/ui.js":"_assets/a7a143aa337f361c6bbd.js","/js/ui/ui.js":"_assets/a7a143aa337f361c6bbd.js","/ui/ui.js":"_assets/a7a143aa337f361c6bbd.js","/ui.js":"_assets/a7a143aa337f361c6bbd.js","https://milchreis.github.io/tinydefence2/assets/js/ui/buildmenubehaviour.js":"_assets/19e03e661f2cfe130150.js","/tinydefence2/assets/js/ui/buildmenubehaviour.js":"_assets/19e03e661f2cfe130150.js","/assets/js/ui/buildmenubehaviour.js":"_assets/19e03e661f2cfe130150.js","/js/ui/buildmenubehaviour.js":"_assets/19e03e661f2cfe130150.js","/ui/buildmenubehaviour.js":"_assets/19e03e661f2cfe130150.js","/buildmenubehaviour.js":"_assets/19e03e661f2cfe130150.js","https://milchreis.github.io/tinydefence2/assets/js/ui/buildmenu.js":"_assets/09c3766d50e28f6ae63e.js","/tinydefence2/assets/js/ui/buildmenu.js":"_assets/09c3766d50e28f6ae63e.js","/assets/js/ui/buildmenu.js":"_assets/09c3766d50e28f6ae63e.js","/js/ui/buildmenu.js":"_assets/09c3766d50e28f6ae63e.js","/ui/buildmenu.js":"_assets/09c3766d50e28f6ae63e.js","/buildmenu.js":"_assets/09c3766d50e28f6ae63e.js","https://milchreis.github.io/tinydefence2/assets/js/ui/levelselection.js":"_assets/0a9bc4f2368736d427cf.js","/tinydefence2/assets/js/ui/levelselection.js":"_assets/0a9bc4f2368736d427cf.js","/assets/js/ui/levelselection.js":"_assets/0a9bc4f2368736d427cf.js","/js/ui/levelselection.js":"_assets/0a9bc4f2368736d427cf.js","/ui/levelselection.js":"_assets/0a9bc4f2368736d427cf.js","/levelselection.js":"_assets/0a9bc4f2368736d427cf.js","https://milchreis.github.io/tinydefence2/assets/js/states/menu.js":"_assets/cc3066865ef428968564.js","/tinydefence2/assets/js/states/menu.js":"_assets/cc3066865ef428968564.js","/assets/js/states/menu.js":"_assets/cc3066865ef428968564.js","/js/states/menu.js":"_assets/cc3066865ef428968564.js","/states/menu.js":"_assets/cc3066865ef428968564.js","/menu.js":"_assets/cc3066865ef428968564.js","https://milchreis.github.io/tinydefence2/assets/js/states/preload.js":"_assets/d6fdf277fc1aeb00fa77.js","/tinydefence2/assets/js/states/preload.js":"_assets/d6fdf277fc1aeb00fa77.js","/assets/js/states/preload.js":"_assets/d6fdf277fc1aeb00fa77.js","/js/states/preload.js":"_assets/d6fdf277fc1aeb00fa77.js","/states/preload.js":"_assets/d6fdf277fc1aeb00fa77.js","/preload.js":"_assets/d6fdf277fc1aeb00fa77.js","https://milchreis.github.io/tinydefence2/assets/js/main.js":"_assets/a4e01ebe973c5f155400.js","/tinydefence2/assets/js/main.js":"_assets/a4e01ebe973c5f155400.js","/assets/js/main.js":"_assets/a4e01ebe973c5f155400.js","/js/main.js":"_assets/a4e01ebe973c5f155400.js","/main.js":"_assets/a4e01ebe973c5f155400.js","https://milchreis.github.io/tinydefence2/assets/js/states/game.js":"_assets/3605e1cb4c7aa992289e.js","/tinydefence2/assets/js/states/game.js":"_assets/3605e1cb4c7aa992289e.js","/assets/js/states/game.js":"_assets/3605e1cb4c7aa992289e.js","/js/states/game.js":"_assets/3605e1cb4c7aa992289e.js","/states/game.js":"_assets/3605e1cb4c7aa992289e.js","/game.js":"_assets/3605e1cb4c7aa992289e.js","https://milchreis.github.io/tinydefence2/assets/towers/Cannon/properties.json":"_assets/89da9fda750f7c12f683.json","/tinydefence2/assets/towers/Cannon/properties.json":"_assets/89da9fda750f7c12f683.json","/assets/towers/Cannon/properties.json":"_assets/89da9fda750f7c12f683.json","/towers/Cannon/properties.json":"_assets/89da9fda750f7c12f683.json","/Cannon/properties.json":"_assets/89da9fda750f7c12f683.json","/properties.json":"_assets/89da9fda750f7c12f683.json","https://milchreis.github.io/tinydefence2/assets/images/loading.png":"_assets/692dca35380b157c16ea.png","/tinydefence2/assets/images/loading.png":"_assets/692dca35380b157c16ea.png","/assets/images/loading.png":"_assets/692dca35380b157c16ea.png","/images/loading.png":"_assets/692dca35380b157c16ea.png","/loading.png":"_assets/692dca35380b157c16ea.png","https://milchreis.github.io/tinydefence2/assets/images/enemy.png":"_assets/8b4f0d893c238ceb42b8.png","/tinydefence2/assets/images/enemy.png":"_assets/8b4f0d893c238ceb42b8.png","/assets/images/enemy.png":"_assets/8b4f0d893c238ceb42b8.png","/images/enemy.png":"_assets/8b4f0d893c238ceb42b8.png","/enemy.png":"_assets/8b4f0d893c238ceb42b8.png","https://milchreis.github.io/tinydefence2/assets/images/selection.png":"_assets/0c9948209d52eb0177a1.png","/tinydefence2/assets/images/selection.png":"_assets/0c9948209d52eb0177a1.png","/assets/images/selection.png":"_assets/0c9948209d52eb0177a1.png","/images/selection.png":"_assets/0c9948209d52eb0177a1.png","/selection.png":"_assets/0c9948209d52eb0177a1.png","https://milchreis.github.io/tinydefence2/assets/images/logo.png":"_assets/e64537483a40239140c7.png","/tinydefence2/assets/images/logo.png":"_assets/e64537483a40239140c7.png","/assets/images/logo.png":"_assets/e64537483a40239140c7.png","/images/logo.png":"_assets/e64537483a40239140c7.png","/logo.png":"_assets/e64537483a40239140c7.png","https://milchreis.github.io/tinydefence2/assets/images/enemyCrab.png":"_assets/650125fb60d2d1c787e5.png","/tinydefence2/assets/images/enemyCrab.png":"_assets/650125fb60d2d1c787e5.png","/assets/images/enemyCrab.png":"_assets/650125fb60d2d1c787e5.png","/images/enemyCrab.png":"_assets/650125fb60d2d1c787e5.png","/enemyCrab.png":"_assets/650125fb60d2d1c787e5.png","https://milchreis.github.io/tinydefence2/assets/images/ui/menuButtons.png":"_assets/3ada53103ad5c5d268dc.png","/tinydefence2/assets/images/ui/menuButtons.png":"_assets/3ada53103ad5c5d268dc.png","/assets/images/ui/menuButtons.png":"_assets/3ada53103ad5c5d268dc.png","/images/ui/menuButtons.png":"_assets/3ada53103ad5c5d268dc.png","/ui/menuButtons.png":"_assets/3ada53103ad5c5d268dc.png","/menuButtons.png":"_assets/3ada53103ad5c5d268dc.png","https://milchreis.github.io/tinydefence2/assets/images/ui/buttonCoverage.png":"_assets/1f12173e85ccf89c7f4d.png","/tinydefence2/assets/images/ui/buttonCoverage.png":"_assets/1f12173e85ccf89c7f4d.png","/assets/images/ui/buttonCoverage.png":"_assets/1f12173e85ccf89c7f4d.png","/images/ui/buttonCoverage.png":"_assets/1f12173e85ccf89c7f4d.png","/ui/buttonCoverage.png":"_assets/1f12173e85ccf89c7f4d.png","/buttonCoverage.png":"_assets/1f12173e85ccf89c7f4d.png","https://milchreis.github.io/tinydefence2/assets/images/ui/menuElements.png":"_assets/0c7230e772b86b3de1b4.png","/tinydefence2/assets/images/ui/menuElements.png":"_assets/0c7230e772b86b3de1b4.png","/assets/images/ui/menuElements.png":"_assets/0c7230e772b86b3de1b4.png","/images/ui/menuElements.png":"_assets/0c7230e772b86b3de1b4.png","/ui/menuElements.png":"_assets/0c7230e772b86b3de1b4.png","/menuElements.png":"_assets/0c7230e772b86b3de1b4.png","https://milchreis.github.io/tinydefence2/assets/images/ui/buttonLevel.png":"_assets/54827aed15de3d597cf3.png","/tinydefence2/assets/images/ui/buttonLevel.png":"_assets/54827aed15de3d597cf3.png","/assets/images/ui/buttonLevel.png":"_assets/54827aed15de3d597cf3.png","/images/ui/buttonLevel.png":"_assets/54827aed15de3d597cf3.png","/ui/buttonLevel.png":"_assets/54827aed15de3d597cf3.png","/buttonLevel.png":"_assets/54827aed15de3d597cf3.png","https://milchreis.github.io/tinydefence2/assets/images/ui/buttonMenuNav.png":"_assets/1234ade11d2c04f0ab49.png","/tinydefence2/assets/images/ui/buttonMenuNav.png":"_assets/1234ade11d2c04f0ab49.png","/assets/images/ui/buttonMenuNav.png":"_assets/1234ade11d2c04f0ab49.png","/images/ui/buttonMenuNav.png":"_assets/1234ade11d2c04f0ab49.png","/ui/buttonMenuNav.png":"_assets/1234ade11d2c04f0ab49.png","/buttonMenuNav.png":"_assets/1234ade11d2c04f0ab49.png","https://milchreis.github.io/tinydefence2/assets/fonts/font.png":"_assets/a4e470a2080990a078b2.png","/tinydefence2/assets/fonts/font.png":"_assets/a4e470a2080990a078b2.png","/assets/fonts/font.png":"_assets/a4e470a2080990a078b2.png","/fonts/font.png":"_assets/a4e470a2080990a078b2.png","/font.png":"_assets/a4e470a2080990a078b2.png","https://milchreis.github.io/tinydefence2/assets/fonts/font_green.png":"_assets/5fc4475b9bbb6a2ae482.png","/tinydefence2/assets/fonts/font_green.png":"_assets/5fc4475b9bbb6a2ae482.png","/assets/fonts/font_green.png":"_assets/5fc4475b9bbb6a2ae482.png","/fonts/font_green.png":"_assets/5fc4475b9bbb6a2ae482.png","/font_green.png":"_assets/5fc4475b9bbb6a2ae482.png","https://milchreis.github.io/tinydefence2/assets/fonts/font_red.png":"_assets/cfdf272adfca6b7fa366.png","/tinydefence2/assets/fonts/font_red.png":"_assets/cfdf272adfca6b7fa366.png","/assets/fonts/font_red.png":"_assets/cfdf272adfca6b7fa366.png","/fonts/font_red.png":"_assets/cfdf272adfca6b7fa366.png","/font_red.png":"_assets/cfdf272adfca6b7fa366.png","https://milchreis.github.io/tinydefence2/assets/maps/Level1/map.json":"_assets/b4c72c782a9472b467bc.json","/tinydefence2/assets/maps/Level1/map.json":"_assets/b4c72c782a9472b467bc.json","/assets/maps/Level1/map.json":"_assets/b4c72c782a9472b467bc.json","/maps/Level1/map.json":"_assets/b4c72c782a9472b467bc.json","/Level1/map.json":"_assets/b4c72c782a9472b467bc.json","/map.json":"_assets/b4c72c782a9472b467bc.json","https://milchreis.github.io/tinydefence2/assets/fonts/font.fnt":"_assets/6eb0f4683b6216192da6.fnt","/tinydefence2/assets/fonts/font.fnt":"_assets/6eb0f4683b6216192da6.fnt","/assets/fonts/font.fnt":"_assets/6eb0f4683b6216192da6.fnt","/fonts/font.fnt":"_assets/6eb0f4683b6216192da6.fnt","/font.fnt":"_assets/6eb0f4683b6216192da6.fnt","https://milchreis.github.io/tinydefence2/assets/fonts/font_green.fnt":"_assets/dd08442ffa5d15f6fa85.fnt","/tinydefence2/assets/fonts/font_green.fnt":"_assets/dd08442ffa5d15f6fa85.fnt","/assets/fonts/font_green.fnt":"_assets/dd08442ffa5d15f6fa85.fnt","/fonts/font_green.fnt":"_assets/dd08442ffa5d15f6fa85.fnt","/font_green.fnt":"_assets/dd08442ffa5d15f6fa85.fnt","https://milchreis.github.io/tinydefence2/assets/fonts/font_red.fnt":"_assets/4f3119c6f0c198071019.fnt","/tinydefence2/assets/fonts/font_red.fnt":"_assets/4f3119c6f0c198071019.fnt","/assets/fonts/font_red.fnt":"_assets/4f3119c6f0c198071019.fnt","/fonts/font_red.fnt":"_assets/4f3119c6f0c198071019.fnt","/font_red.fnt":"_assets/4f3119c6f0c198071019.fnt","https://milchreis.github.io/tinydefence2/assets/maps/Level1/map.png":"_assets/5e90f0c687838970156a.png","/tinydefence2/assets/maps/Level1/map.png":"_assets/5e90f0c687838970156a.png","/assets/maps/Level1/map.png":"_assets/5e90f0c687838970156a.png","/maps/Level1/map.png":"_assets/5e90f0c687838970156a.png","/Level1/map.png":"_assets/5e90f0c687838970156a.png","/map.png":"_assets/5e90f0c687838970156a.png","https://milchreis.github.io/tinydefence2/assets/maps/BeachDefense/map.json":"_assets/788749a46403d00d6395.json","/tinydefence2/assets/maps/BeachDefense/map.json":"_assets/788749a46403d00d6395.json","/assets/maps/BeachDefense/map.json":"_assets/788749a46403d00d6395.json","/maps/BeachDefense/map.json":"_assets/788749a46403d00d6395.json","/BeachDefense/map.json":"_assets/788749a46403d00d6395.json","https://milchreis.github.io/tinydefence2/assets/maps/BeachDefense/map.png":"_assets/d23632a556b0df800aed.png","/tinydefence2/assets/maps/BeachDefense/map.png":"_assets/d23632a556b0df800aed.png","/assets/maps/BeachDefense/map.png":"_assets/d23632a556b0df800aed.png","/maps/BeachDefense/map.png":"_assets/d23632a556b0df800aed.png","/BeachDefense/map.png":"_assets/d23632a556b0df800aed.png","https://milchreis.github.io/tinydefence2/assets/towers/Cannon/tower_1.png":"_assets/637b7d1bd9610746ebe8.png","/tinydefence2/assets/towers/Cannon/tower_1.png":"_assets/637b7d1bd9610746ebe8.png","/assets/towers/Cannon/tower_1.png":"_assets/637b7d1bd9610746ebe8.png","/towers/Cannon/tower_1.png":"_assets/637b7d1bd9610746ebe8.png","/Cannon/tower_1.png":"_assets/637b7d1bd9610746ebe8.png","/tower_1.png":"_assets/637b7d1bd9610746ebe8.png","https://milchreis.github.io/tinydefence2/assets/towers/Cannon/bullet_1.png":"_assets/e46d3de2f5d9d6a5c06f.png","/tinydefence2/assets/towers/Cannon/bullet_1.png":"_assets/e46d3de2f5d9d6a5c06f.png","/assets/towers/Cannon/bullet_1.png":"_assets/e46d3de2f5d9d6a5c06f.png","/towers/Cannon/bullet_1.png":"_assets/e46d3de2f5d9d6a5c06f.png","/Cannon/bullet_1.png":"_assets/e46d3de2f5d9d6a5c06f.png","/bullet_1.png":"_assets/e46d3de2f5d9d6a5c06f.png","https://milchreis.github.io/tinydefence2/assets/towers/Cannon/tower_2.png":"_assets/de507d832b34d64d4a42.png","/tinydefence2/assets/towers/Cannon/tower_2.png":"_assets/de507d832b34d64d4a42.png","/assets/towers/Cannon/tower_2.png":"_assets/de507d832b34d64d4a42.png","/towers/Cannon/tower_2.png":"_assets/de507d832b34d64d4a42.png","/Cannon/tower_2.png":"_assets/de507d832b34d64d4a42.png","/tower_2.png":"_assets/de507d832b34d64d4a42.png","https://milchreis.github.io/tinydefence2/assets/towers/Cannon/tower_3.png":"_assets/1db5ed2d1bc1c74b5ca3.png","/tinydefence2/assets/towers/Cannon/tower_3.png":"_assets/1db5ed2d1bc1c74b5ca3.png","/assets/towers/Cannon/tower_3.png":"_assets/1db5ed2d1bc1c74b5ca3.png","/towers/Cannon/tower_3.png":"_assets/1db5ed2d1bc1c74b5ca3.png","/Cannon/tower_3.png":"_assets/1db5ed2d1bc1c74b5ca3.png","/tower_3.png":"_assets/1db5ed2d1bc1c74b5ca3.png","https://milchreis.github.io/tinydefence2/assets/towers/Cannon/tower_4.png":"_assets/2fe13d3472e266b68782.png","/tinydefence2/assets/towers/Cannon/tower_4.png":"_assets/2fe13d3472e266b68782.png","/assets/towers/Cannon/tower_4.png":"_assets/2fe13d3472e266b68782.png","/towers/Cannon/tower_4.png":"_assets/2fe13d3472e266b68782.png","/Cannon/tower_4.png":"_assets/2fe13d3472e266b68782.png","/tower_4.png":"_assets/2fe13d3472e266b68782.png","https://milchreis.github.io/tinydefence2/assets/towers/Cannon/tower_5.png":"_assets/51695673d5eab4a773b9.png","/tinydefence2/assets/towers/Cannon/tower_5.png":"_assets/51695673d5eab4a773b9.png","/assets/towers/Cannon/tower_5.png":"_assets/51695673d5eab4a773b9.png","/towers/Cannon/tower_5.png":"_assets/51695673d5eab4a773b9.png","/Cannon/tower_5.png":"_assets/51695673d5eab4a773b9.png","/tower_5.png":"_assets/51695673d5eab4a773b9.png"};
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
