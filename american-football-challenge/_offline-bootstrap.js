(() => {
  "use strict";
  const RUNTIME_MAP = {"https://g.w3technic.com/games/american-football-challenge/css/reset.css":"_assets/7b5be04e538eb27e858f.css","/games/american-football-challenge/css/reset.css":"_assets/7b5be04e538eb27e858f.css","/american-football-challenge/css/reset.css":"_assets/7b5be04e538eb27e858f.css","/css/reset.css":"_assets/7b5be04e538eb27e858f.css","/reset.css":"_assets/7b5be04e538eb27e858f.css","https://g.w3technic.com/games/american-football-challenge/css/main.css":"_assets/5c88f2f584f59bf1dc76.css","/games/american-football-challenge/css/main.css":"_assets/5c88f2f584f59bf1dc76.css","/american-football-challenge/css/main.css":"_assets/5c88f2f584f59bf1dc76.css","/css/main.css":"_assets/5c88f2f584f59bf1dc76.css","/main.css":"_assets/5c88f2f584f59bf1dc76.css","https://g.w3technic.com/games/american-football-challenge/css/orientation_utils.css":"_assets/c87ba53e0bd0857e8b1d.css","/games/american-football-challenge/css/orientation_utils.css":"_assets/c87ba53e0bd0857e8b1d.css","/american-football-challenge/css/orientation_utils.css":"_assets/c87ba53e0bd0857e8b1d.css","/css/orientation_utils.css":"_assets/c87ba53e0bd0857e8b1d.css","/orientation_utils.css":"_assets/c87ba53e0bd0857e8b1d.css","https://g.w3technic.com/games/american-football-challenge/css/ios_fullscreen.css":"_assets/d99ea542ab7b26c53aee.css","/games/american-football-challenge/css/ios_fullscreen.css":"_assets/d99ea542ab7b26c53aee.css","/american-football-challenge/css/ios_fullscreen.css":"_assets/d99ea542ab7b26c53aee.css","/css/ios_fullscreen.css":"_assets/d99ea542ab7b26c53aee.css","/ios_fullscreen.css":"_assets/d99ea542ab7b26c53aee.css","https://g.w3technic.com/games/american-football-challenge/js/jquery-3.2.1.min.js":"_assets/87083882cc6015984eb0.js","/games/american-football-challenge/js/jquery-3.2.1.min.js":"_assets/87083882cc6015984eb0.js","/american-football-challenge/js/jquery-3.2.1.min.js":"_assets/87083882cc6015984eb0.js","/js/jquery-3.2.1.min.js":"_assets/87083882cc6015984eb0.js","/jquery-3.2.1.min.js":"_assets/87083882cc6015984eb0.js","https://g.w3technic.com/games/american-football-challenge/js/createjs.min.js":"_assets/e439bebf8de2df058227.js","/games/american-football-challenge/js/createjs.min.js":"_assets/e439bebf8de2df058227.js","/american-football-challenge/js/createjs.min.js":"_assets/e439bebf8de2df058227.js","/js/createjs.min.js":"_assets/e439bebf8de2df058227.js","/createjs.min.js":"_assets/e439bebf8de2df058227.js","https://g.w3technic.com/games/american-football-challenge/js/howler.min.js":"_assets/125eddcb1755a757b5bf.js","/games/american-football-challenge/js/howler.min.js":"_assets/125eddcb1755a757b5bf.js","/american-football-challenge/js/howler.min.js":"_assets/125eddcb1755a757b5bf.js","/js/howler.min.js":"_assets/125eddcb1755a757b5bf.js","/howler.min.js":"_assets/125eddcb1755a757b5bf.js","https://g.w3technic.com/games/american-football-challenge/js/Three.js":"_assets/9bfe8e307ba0fd9ffeb6.js","/games/american-football-challenge/js/Three.js":"_assets/9bfe8e307ba0fd9ffeb6.js","/american-football-challenge/js/Three.js":"_assets/9bfe8e307ba0fd9ffeb6.js","/js/Three.js":"_assets/9bfe8e307ba0fd9ffeb6.js","/Three.js":"_assets/9bfe8e307ba0fd9ffeb6.js","https://g.w3technic.com/games/american-football-challenge/js/main.js":"_assets/1f353d57cea96410858f.js","/games/american-football-challenge/js/main.js":"_assets/1f353d57cea96410858f.js","/american-football-challenge/js/main.js":"_assets/1f353d57cea96410858f.js","/js/main.js":"_assets/1f353d57cea96410858f.js","/main.js":"_assets/1f353d57cea96410858f.js","https://g.w3technic.com/games/american-football-challenge/sprites/progress_bar.png":"_assets/2f88eaba16d71fb32a80.webp","/games/american-football-challenge/sprites/progress_bar.png":"_assets/2f88eaba16d71fb32a80.webp","/american-football-challenge/sprites/progress_bar.png":"_assets/2f88eaba16d71fb32a80.webp","/sprites/progress_bar.png":"_assets/2f88eaba16d71fb32a80.webp","/progress_bar.png":"_assets/2f88eaba16d71fb32a80.webp","https://g.w3technic.com/games/american-football-challenge/sprites/but_start.png":"_assets/6ab49bc058b92237b2cf.webp","/games/american-football-challenge/sprites/but_start.png":"_assets/6ab49bc058b92237b2cf.webp","/american-football-challenge/sprites/but_start.png":"_assets/6ab49bc058b92237b2cf.webp","/sprites/but_start.png":"_assets/6ab49bc058b92237b2cf.webp","/but_start.png":"_assets/6ab49bc058b92237b2cf.webp","https://g.w3technic.com/games/american-football-challenge/css/arial_rounded_mt_bold_bold-webfont.woff2":"_assets/fbcaab468e2a57702495.woff2","/games/american-football-challenge/css/arial_rounded_mt_bold_bold-webfont.woff2":"_assets/fbcaab468e2a57702495.woff2","/american-football-challenge/css/arial_rounded_mt_bold_bold-webfont.woff2":"_assets/fbcaab468e2a57702495.woff2","/css/arial_rounded_mt_bold_bold-webfont.woff2":"_assets/fbcaab468e2a57702495.woff2","/arial_rounded_mt_bold_bold-webfont.woff2":"_assets/fbcaab468e2a57702495.woff2","https://g.w3technic.com/games/american-football-challenge/sprites/200x200.jpg":"_assets/2dae0a22977269a23f4d.webp","/games/american-football-challenge/sprites/200x200.jpg":"_assets/2dae0a22977269a23f4d.webp","/american-football-challenge/sprites/200x200.jpg":"_assets/2dae0a22977269a23f4d.webp","/sprites/200x200.jpg":"_assets/2dae0a22977269a23f4d.webp","/200x200.jpg":"_assets/2dae0a22977269a23f4d.webp","https://g.w3technic.com/games/american-football-challenge/sprites/but_play.png":"_assets/8dde2f5048cad0d58295.webp","/games/american-football-challenge/sprites/but_play.png":"_assets/8dde2f5048cad0d58295.webp","/american-football-challenge/sprites/but_play.png":"_assets/8dde2f5048cad0d58295.webp","/sprites/but_play.png":"_assets/8dde2f5048cad0d58295.webp","/but_play.png":"_assets/8dde2f5048cad0d58295.webp","https://g.w3technic.com/games/american-football-challenge/sprites/but_exit.png":"_assets/6edf0d628678e0ae8763.webp","/games/american-football-challenge/sprites/but_exit.png":"_assets/6edf0d628678e0ae8763.webp","/american-football-challenge/sprites/but_exit.png":"_assets/6edf0d628678e0ae8763.webp","/sprites/but_exit.png":"_assets/6edf0d628678e0ae8763.webp","/but_exit.png":"_assets/6edf0d628678e0ae8763.webp","https://g.w3technic.com/games/american-football-challenge/sprites/but_restart_small.png":"_assets/4910a1a50f6a57d6b0c4.webp","/games/american-football-challenge/sprites/but_restart_small.png":"_assets/4910a1a50f6a57d6b0c4.webp","/american-football-challenge/sprites/but_restart_small.png":"_assets/4910a1a50f6a57d6b0c4.webp","/sprites/but_restart_small.png":"_assets/4910a1a50f6a57d6b0c4.webp","/but_restart_small.png":"_assets/4910a1a50f6a57d6b0c4.webp","https://g.w3technic.com/games/american-football-challenge/sounds/drop_bounce_grass.mp3":"_assets/04e59c5f45fdd639f9a2.mp3","/games/american-football-challenge/sounds/drop_bounce_grass.mp3":"_assets/04e59c5f45fdd639f9a2.mp3","/american-football-challenge/sounds/drop_bounce_grass.mp3":"_assets/04e59c5f45fdd639f9a2.mp3","/sounds/drop_bounce_grass.mp3":"_assets/04e59c5f45fdd639f9a2.mp3","/drop_bounce_grass.mp3":"_assets/04e59c5f45fdd639f9a2.mp3","https://g.w3technic.com/games/american-football-challenge/sounds/click.mp3":"_assets/9b2681bd9960a7394b2b.mp3","/games/american-football-challenge/sounds/click.mp3":"_assets/9b2681bd9960a7394b2b.mp3","/american-football-challenge/sounds/click.mp3":"_assets/9b2681bd9960a7394b2b.mp3","/sounds/click.mp3":"_assets/9b2681bd9960a7394b2b.mp3","/click.mp3":"_assets/9b2681bd9960a7394b2b.mp3","https://g.w3technic.com/games/american-football-challenge/sounds/keep_ball.mp3":"_assets/468ee8bfefa0d6f495b3.mp3","/games/american-football-challenge/sounds/keep_ball.mp3":"_assets/468ee8bfefa0d6f495b3.mp3","/american-football-challenge/sounds/keep_ball.mp3":"_assets/468ee8bfefa0d6f495b3.mp3","/sounds/keep_ball.mp3":"_assets/468ee8bfefa0d6f495b3.mp3","/keep_ball.mp3":"_assets/468ee8bfefa0d6f495b3.mp3","https://g.w3technic.com/games/american-football-challenge/sounds/win.mp3":"_assets/4cde46f804b8da35a032.mp3","/games/american-football-challenge/sounds/win.mp3":"_assets/4cde46f804b8da35a032.mp3","/american-football-challenge/sounds/win.mp3":"_assets/4cde46f804b8da35a032.mp3","/sounds/win.mp3":"_assets/4cde46f804b8da35a032.mp3","/win.mp3":"_assets/4cde46f804b8da35a032.mp3","https://g.w3technic.com/games/american-football-challenge/sounds/miss.mp3":"_assets/7078b60008ed6b4e2f02.mp3","/games/american-football-challenge/sounds/miss.mp3":"_assets/7078b60008ed6b4e2f02.mp3","/american-football-challenge/sounds/miss.mp3":"_assets/7078b60008ed6b4e2f02.mp3","/sounds/miss.mp3":"_assets/7078b60008ed6b4e2f02.mp3","/miss.mp3":"_assets/7078b60008ed6b4e2f02.mp3","https://g.w3technic.com/games/american-football-challenge/sounds/soundtrack.mp3":"_assets/1f19f26207fe05b70329.mp3","/games/american-football-challenge/sounds/soundtrack.mp3":"_assets/1f19f26207fe05b70329.mp3","/american-football-challenge/sounds/soundtrack.mp3":"_assets/1f19f26207fe05b70329.mp3","/sounds/soundtrack.mp3":"_assets/1f19f26207fe05b70329.mp3","/soundtrack.mp3":"_assets/1f19f26207fe05b70329.mp3","https://g.w3technic.com/games/american-football-challenge/sprites/bg_menu.jpg":"_assets/34ce9a1814733d01cb58.webp","/games/american-football-challenge/sprites/bg_menu.jpg":"_assets/34ce9a1814733d01cb58.webp","/american-football-challenge/sprites/bg_menu.jpg":"_assets/34ce9a1814733d01cb58.webp","/sprites/bg_menu.jpg":"_assets/34ce9a1814733d01cb58.webp","/bg_menu.jpg":"_assets/34ce9a1814733d01cb58.webp","https://g.w3technic.com/games/american-football-challenge/sprites/msg_box.png":"_assets/3abf3dc2d485fe19251f.webp","/games/american-football-challenge/sprites/msg_box.png":"_assets/3abf3dc2d485fe19251f.webp","/american-football-challenge/sprites/msg_box.png":"_assets/3abf3dc2d485fe19251f.webp","/sprites/msg_box.png":"_assets/3abf3dc2d485fe19251f.webp","/msg_box.png":"_assets/3abf3dc2d485fe19251f.webp","https://g.w3technic.com/games/american-football-challenge/sprites/bg_game.jpg":"_assets/f04cdc2f205961cbf0b9.jpg","/games/american-football-challenge/sprites/bg_game.jpg":"_assets/f04cdc2f205961cbf0b9.jpg","/american-football-challenge/sprites/bg_game.jpg":"_assets/f04cdc2f205961cbf0b9.jpg","/sprites/bg_game.jpg":"_assets/f04cdc2f205961cbf0b9.jpg","/bg_game.jpg":"_assets/f04cdc2f205961cbf0b9.jpg","https://g.w3technic.com/games/american-football-challenge/sprites/msg_box_small.png":"_assets/543f8f4ad2b33d4abc0b.webp","/games/american-football-challenge/sprites/msg_box_small.png":"_assets/543f8f4ad2b33d4abc0b.webp","/american-football-challenge/sprites/msg_box_small.png":"_assets/543f8f4ad2b33d4abc0b.webp","/sprites/msg_box_small.png":"_assets/543f8f4ad2b33d4abc0b.webp","/msg_box_small.png":"_assets/543f8f4ad2b33d4abc0b.webp","https://g.w3technic.com/games/american-football-challenge/sprites/audio_icon.png":"_assets/80e88cef58316de16d33.webp","/games/american-football-challenge/sprites/audio_icon.png":"_assets/80e88cef58316de16d33.webp","/american-football-challenge/sprites/audio_icon.png":"_assets/80e88cef58316de16d33.webp","/sprites/audio_icon.png":"_assets/80e88cef58316de16d33.webp","/audio_icon.png":"_assets/80e88cef58316de16d33.webp","https://g.w3technic.com/games/american-football-challenge/sprites/but_home.png":"_assets/cc9d2ae9871bb36b965c.webp","/games/american-football-challenge/sprites/but_home.png":"_assets/cc9d2ae9871bb36b965c.webp","/american-football-challenge/sprites/but_home.png":"_assets/cc9d2ae9871bb36b965c.webp","/sprites/but_home.png":"_assets/cc9d2ae9871bb36b965c.webp","/but_home.png":"_assets/cc9d2ae9871bb36b965c.webp","https://g.w3technic.com/games/american-football-challenge/sprites/but_restart.png":"_assets/973578b54532edd4ce7a.webp","/games/american-football-challenge/sprites/but_restart.png":"_assets/973578b54532edd4ce7a.webp","/american-football-challenge/sprites/but_restart.png":"_assets/973578b54532edd4ce7a.webp","/sprites/but_restart.png":"_assets/973578b54532edd4ce7a.webp","/but_restart.png":"_assets/973578b54532edd4ce7a.webp","https://g.w3technic.com/games/american-football-challenge/sprites/but_continue_big.png":"_assets/aa0fb704f0e4e63b0f73.webp","/games/american-football-challenge/sprites/but_continue_big.png":"_assets/aa0fb704f0e4e63b0f73.webp","/american-football-challenge/sprites/but_continue_big.png":"_assets/aa0fb704f0e4e63b0f73.webp","/sprites/but_continue_big.png":"_assets/aa0fb704f0e4e63b0f73.webp","/but_continue_big.png":"_assets/aa0fb704f0e4e63b0f73.webp","https://g.w3technic.com/games/american-football-challenge/sprites/but_level.png":"_assets/6c15f91937e7fafccece.webp","/games/american-football-challenge/sprites/but_level.png":"_assets/6c15f91937e7fafccece.webp","/american-football-challenge/sprites/but_level.png":"_assets/6c15f91937e7fafccece.webp","/sprites/but_level.png":"_assets/6c15f91937e7fafccece.webp","/but_level.png":"_assets/6c15f91937e7fafccece.webp","https://g.w3technic.com/games/american-football-challenge/sprites/gloves.png":"_assets/42a70327deaab5fd839d.webp","/games/american-football-challenge/sprites/gloves.png":"_assets/42a70327deaab5fd839d.webp","/american-football-challenge/sprites/gloves.png":"_assets/42a70327deaab5fd839d.webp","/sprites/gloves.png":"_assets/42a70327deaab5fd839d.webp","/gloves.png":"_assets/42a70327deaab5fd839d.webp","https://g.w3technic.com/games/american-football-challenge/sprites/but_continue.png":"_assets/b80d16f5d0cf8292470d.webp","/games/american-football-challenge/sprites/but_continue.png":"_assets/b80d16f5d0cf8292470d.webp","/american-football-challenge/sprites/but_continue.png":"_assets/b80d16f5d0cf8292470d.webp","/sprites/but_continue.png":"_assets/b80d16f5d0cf8292470d.webp","/but_continue.png":"_assets/b80d16f5d0cf8292470d.webp","https://g.w3technic.com/games/american-football-challenge/sprites/ball.png":"_assets/cb9ab2025edf2fbc24dc.webp","/games/american-football-challenge/sprites/ball.png":"_assets/cb9ab2025edf2fbc24dc.webp","/american-football-challenge/sprites/ball.png":"_assets/cb9ab2025edf2fbc24dc.webp","/sprites/ball.png":"_assets/cb9ab2025edf2fbc24dc.webp","/ball.png":"_assets/cb9ab2025edf2fbc24dc.webp","https://g.w3technic.com/games/american-football-challenge/sprites/but_yes.png":"_assets/c247a2a4e5480620230d.webp","/games/american-football-challenge/sprites/but_yes.png":"_assets/c247a2a4e5480620230d.webp","/american-football-challenge/sprites/but_yes.png":"_assets/c247a2a4e5480620230d.webp","/sprites/but_yes.png":"_assets/c247a2a4e5480620230d.webp","/but_yes.png":"_assets/c247a2a4e5480620230d.webp","https://g.w3technic.com/games/american-football-challenge/sprites/but_no.png":"_assets/490110e25f44290117a9.webp","/games/american-football-challenge/sprites/but_no.png":"_assets/490110e25f44290117a9.webp","/american-football-challenge/sprites/but_no.png":"_assets/490110e25f44290117a9.webp","/sprites/but_no.png":"_assets/490110e25f44290117a9.webp","/but_no.png":"_assets/490110e25f44290117a9.webp","https://g.w3technic.com/games/american-football-challenge/sprites/but_info.png":"_assets/4243cfd64009e2d8eb06.webp","/games/american-football-challenge/sprites/but_info.png":"_assets/4243cfd64009e2d8eb06.webp","/american-football-challenge/sprites/but_info.png":"_assets/4243cfd64009e2d8eb06.webp","/sprites/but_info.png":"_assets/4243cfd64009e2d8eb06.webp","/but_info.png":"_assets/4243cfd64009e2d8eb06.webp","https://g.w3technic.com/games/american-football-challenge/sprites/logo_ctl.png":"_assets/4c4500f566fe20bf479f.webp","/games/american-football-challenge/sprites/logo_ctl.png":"_assets/4c4500f566fe20bf479f.webp","/american-football-challenge/sprites/logo_ctl.png":"_assets/4c4500f566fe20bf479f.webp","/sprites/logo_ctl.png":"_assets/4c4500f566fe20bf479f.webp","/logo_ctl.png":"_assets/4c4500f566fe20bf479f.webp","https://g.w3technic.com/games/american-football-challenge/sprites/but_pause.png":"_assets/7f2925fad89a83446f90.webp","/games/american-football-challenge/sprites/but_pause.png":"_assets/7f2925fad89a83446f90.webp","/american-football-challenge/sprites/but_pause.png":"_assets/7f2925fad89a83446f90.webp","/sprites/but_pause.png":"_assets/7f2925fad89a83446f90.webp","/but_pause.png":"_assets/7f2925fad89a83446f90.webp","https://g.w3technic.com/games/american-football-challenge/sprites/arrow_right.png":"_assets/26dad124639918ef1353.webp","/games/american-football-challenge/sprites/arrow_right.png":"_assets/26dad124639918ef1353.webp","/american-football-challenge/sprites/arrow_right.png":"_assets/26dad124639918ef1353.webp","/sprites/arrow_right.png":"_assets/26dad124639918ef1353.webp","/arrow_right.png":"_assets/26dad124639918ef1353.webp","https://g.w3technic.com/games/american-football-challenge/sprites/arrow_left.png":"_assets/cd4762dda5379224bba5.webp","/games/american-football-challenge/sprites/arrow_left.png":"_assets/cd4762dda5379224bba5.webp","/american-football-challenge/sprites/arrow_left.png":"_assets/cd4762dda5379224bba5.webp","/sprites/arrow_left.png":"_assets/cd4762dda5379224bba5.webp","/arrow_left.png":"_assets/cd4762dda5379224bba5.webp","https://g.w3technic.com/games/american-football-challenge/sprites/ball_shadow.png":"_assets/a96b9555141dba6edc3e.webp","/games/american-football-challenge/sprites/ball_shadow.png":"_assets/a96b9555141dba6edc3e.webp","/american-football-challenge/sprites/ball_shadow.png":"_assets/a96b9555141dba6edc3e.webp","/sprites/ball_shadow.png":"_assets/a96b9555141dba6edc3e.webp","/ball_shadow.png":"_assets/a96b9555141dba6edc3e.webp","https://g.w3technic.com/games/american-football-challenge/sprites/gui_panel.png":"_assets/39bbf4468760ad282d94.webp","/games/american-football-challenge/sprites/gui_panel.png":"_assets/39bbf4468760ad282d94.webp","/american-football-challenge/sprites/gui_panel.png":"_assets/39bbf4468760ad282d94.webp","/sprites/gui_panel.png":"_assets/39bbf4468760ad282d94.webp","/gui_panel.png":"_assets/39bbf4468760ad282d94.webp","https://g.w3technic.com/games/american-football-challenge/sprites/help_mouse.png":"_assets/5096241fc30104bae78f.webp","/games/american-football-challenge/sprites/help_mouse.png":"_assets/5096241fc30104bae78f.webp","/american-football-challenge/sprites/help_mouse.png":"_assets/5096241fc30104bae78f.webp","/sprites/help_mouse.png":"_assets/5096241fc30104bae78f.webp","/help_mouse.png":"_assets/5096241fc30104bae78f.webp","https://g.w3technic.com/games/american-football-challenge/sprites/help_touch.png":"_assets/bcf04f9a76e7d3ba4601.webp","/games/american-football-challenge/sprites/help_touch.png":"_assets/bcf04f9a76e7d3ba4601.webp","/american-football-challenge/sprites/help_touch.png":"_assets/bcf04f9a76e7d3ba4601.webp","/sprites/help_touch.png":"_assets/bcf04f9a76e7d3ba4601.webp","/help_touch.png":"_assets/bcf04f9a76e7d3ba4601.webp","https://g.w3technic.com/games/american-football-challenge/sprites/but_fullscreen.png":"_assets/bc7eef4815c3d10e5086.webp","/games/american-football-challenge/sprites/but_fullscreen.png":"_assets/bc7eef4815c3d10e5086.webp","/american-football-challenge/sprites/but_fullscreen.png":"_assets/bc7eef4815c3d10e5086.webp","/sprites/but_fullscreen.png":"_assets/bc7eef4815c3d10e5086.webp","/but_fullscreen.png":"_assets/bc7eef4815c3d10e5086.webp","https://g.w3technic.com/games/american-football-challenge/sprites/quarterback.png":"_assets/0cc890277ec87072ee41.webp","/games/american-football-challenge/sprites/quarterback.png":"_assets/0cc890277ec87072ee41.webp","/american-football-challenge/sprites/quarterback.png":"_assets/0cc890277ec87072ee41.webp","/sprites/quarterback.png":"_assets/0cc890277ec87072ee41.webp","/quarterback.png":"_assets/0cc890277ec87072ee41.webp"};
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

  // Neutralize every external link, including links created by the game at runtime.
  function offlineNeutralizeLink(anchor) {
    if (!anchor || !anchor.getAttribute) return;
    const raw = anchor.getAttribute("href");
    if (!raw) return;
    try {
      const target = new URL(raw, document.baseURI);
      if (target.origin !== location.origin) {
        anchor.removeAttribute("href");
        anchor.removeAttribute("target");
        anchor.style.pointerEvents = "none";
      }
    } catch (_) {}
  }
  function offlineScanLinks(root) {
    if (!root || !root.querySelectorAll) return;
    root.querySelectorAll("a[href]").forEach(offlineNeutralizeLink);
    if (root.matches && root.matches("a[href]")) offlineNeutralizeLink(root);
  }
  document.addEventListener("DOMContentLoaded", () => offlineScanLinks(document), { once: true });
  new MutationObserver((records) => {
    for (const record of records) {
      if (record.type === "attributes") offlineNeutralizeLink(record.target);
      for (const node of record.addedNodes || []) offlineScanLinks(node);
    }
  }).observe(document.documentElement, { subtree: true, childList: true, attributes: true, attributeFilter: ["href"] });

})();
