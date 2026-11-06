(() => {
  "use strict";
  const RUNTIME_MAP = {"https://arknights-guess.online/_next/static/chunks/186k7s44qhig5.css":"_assets/dd5bb81955357784fbb2.css","/_next/static/chunks/186k7s44qhig5.css":"_assets/dd5bb81955357784fbb2.css","/static/chunks/186k7s44qhig5.css":"_assets/dd5bb81955357784fbb2.css","/chunks/186k7s44qhig5.css":"_assets/dd5bb81955357784fbb2.css","/186k7s44qhig5.css":"_assets/dd5bb81955357784fbb2.css","https://arknights-guess.online/icons/menu-daily.png":"_assets/a5bbd917033664ae104b.png","/icons/menu-daily.png":"_assets/a5bbd917033664ae104b.png","/menu-daily.png":"_assets/a5bbd917033664ae104b.png","https://arknights-guess.online/icons/menu-classic.png":"_assets/5645caf293813d908d43.png","/icons/menu-classic.png":"_assets/5645caf293813d908d43.png","/menu-classic.png":"_assets/5645caf293813d908d43.png","https://arknights-guess.online/_next/static/chunks/10tv053cd_rp3.js":"_assets/89be62cb26a65ba1cd9e.js","/_next/static/chunks/10tv053cd_rp3.js":"_assets/89be62cb26a65ba1cd9e.js","/static/chunks/10tv053cd_rp3.js":"_assets/89be62cb26a65ba1cd9e.js","/chunks/10tv053cd_rp3.js":"_assets/89be62cb26a65ba1cd9e.js","/10tv053cd_rp3.js":"_assets/89be62cb26a65ba1cd9e.js","https://arknights-guess.online/_next/static/chunks/40m_vx-pue_li.js":"_assets/429098a0ecaeb9c11f36.js","/_next/static/chunks/40m_vx-pue_li.js":"_assets/429098a0ecaeb9c11f36.js","/static/chunks/40m_vx-pue_li.js":"_assets/429098a0ecaeb9c11f36.js","/chunks/40m_vx-pue_li.js":"_assets/429098a0ecaeb9c11f36.js","/40m_vx-pue_li.js":"_assets/429098a0ecaeb9c11f36.js","https://arknights-guess.online/icons/menu-multi.png":"_assets/73ee19e875da4d7ff6b1.png","/icons/menu-multi.png":"_assets/73ee19e875da4d7ff6b1.png","/menu-multi.png":"_assets/73ee19e875da4d7ff6b1.png","https://arknights-guess.online/_next/static/chunks/28ejmsdn8cw5h.js":"_assets/3ba6741c8d2383cf1fda.js","/_next/static/chunks/28ejmsdn8cw5h.js":"_assets/3ba6741c8d2383cf1fda.js","/static/chunks/28ejmsdn8cw5h.js":"_assets/3ba6741c8d2383cf1fda.js","/chunks/28ejmsdn8cw5h.js":"_assets/3ba6741c8d2383cf1fda.js","/28ejmsdn8cw5h.js":"_assets/3ba6741c8d2383cf1fda.js","https://arknights-guess.online/icons/menu-party.png":"_assets/c845418ae4a23a3dbcb7.png","/icons/menu-party.png":"_assets/c845418ae4a23a3dbcb7.png","/menu-party.png":"_assets/c845418ae4a23a3dbcb7.png","https://arknights-guess.online/_next/static/chunks/1no6yqs96pzq2.js":"_assets/35b180a720839653cae2.js","/_next/static/chunks/1no6yqs96pzq2.js":"_assets/35b180a720839653cae2.js","/static/chunks/1no6yqs96pzq2.js":"_assets/35b180a720839653cae2.js","/chunks/1no6yqs96pzq2.js":"_assets/35b180a720839653cae2.js","/1no6yqs96pzq2.js":"_assets/35b180a720839653cae2.js","https://arknights-guess.online/_next/static/chunks/turbopack-3d8fep5sqcb7-.js":"_assets/a5d00b94ae75edb2ab48.js","/_next/static/chunks/turbopack-3d8fep5sqcb7-.js":"_assets/a5d00b94ae75edb2ab48.js","/static/chunks/turbopack-3d8fep5sqcb7-.js":"_assets/a5d00b94ae75edb2ab48.js","/chunks/turbopack-3d8fep5sqcb7-.js":"_assets/a5d00b94ae75edb2ab48.js","/turbopack-3d8fep5sqcb7-.js":"_assets/a5d00b94ae75edb2ab48.js","https://arknights-guess.online/_next/static/chunks/0_q6llncat6dh.js":"_assets/16d604f74409cd4a25ce.js","/_next/static/chunks/0_q6llncat6dh.js":"_assets/16d604f74409cd4a25ce.js","/static/chunks/0_q6llncat6dh.js":"_assets/16d604f74409cd4a25ce.js","/chunks/0_q6llncat6dh.js":"_assets/16d604f74409cd4a25ce.js","/0_q6llncat6dh.js":"_assets/16d604f74409cd4a25ce.js","https://arknights-guess.online/_next/static/chunks/43jumj3tlxey_.js":"_assets/719abb888133bcdccdc8.js","/_next/static/chunks/43jumj3tlxey_.js":"_assets/719abb888133bcdccdc8.js","/static/chunks/43jumj3tlxey_.js":"_assets/719abb888133bcdccdc8.js","/chunks/43jumj3tlxey_.js":"_assets/719abb888133bcdccdc8.js","/43jumj3tlxey_.js":"_assets/719abb888133bcdccdc8.js","https://arknights-guess.online/_next/static/chunks/2f_k6q3fazgbq.js":"_assets/a9b841d94ecba3860805.js","/_next/static/chunks/2f_k6q3fazgbq.js":"_assets/a9b841d94ecba3860805.js","/static/chunks/2f_k6q3fazgbq.js":"_assets/a9b841d94ecba3860805.js","/chunks/2f_k6q3fazgbq.js":"_assets/a9b841d94ecba3860805.js","/2f_k6q3fazgbq.js":"_assets/a9b841d94ecba3860805.js","https://arknights-guess.online/_next/static/chunks/0un5oef30t7pr.js":"_assets/9498de132337b6fa9ac3.js","/_next/static/chunks/0un5oef30t7pr.js":"_assets/9498de132337b6fa9ac3.js","/static/chunks/0un5oef30t7pr.js":"_assets/9498de132337b6fa9ac3.js","/chunks/0un5oef30t7pr.js":"_assets/9498de132337b6fa9ac3.js","/0un5oef30t7pr.js":"_assets/9498de132337b6fa9ac3.js","https://arknights-guess.online/_next/static/chunks/0e8s94wvhk8u-.js":"_assets/5cbf23d264dc9585e531.js","/_next/static/chunks/0e8s94wvhk8u-.js":"_assets/5cbf23d264dc9585e531.js","/static/chunks/0e8s94wvhk8u-.js":"_assets/5cbf23d264dc9585e531.js","/chunks/0e8s94wvhk8u-.js":"_assets/5cbf23d264dc9585e531.js","/0e8s94wvhk8u-.js":"_assets/5cbf23d264dc9585e531.js","https://arknights-guess.online/_next/static/chunks/0nq6z5n2sdmaw.js":"_assets/fa7ef9ef7dcc946c0dae.js","/_next/static/chunks/0nq6z5n2sdmaw.js":"_assets/fa7ef9ef7dcc946c0dae.js","/static/chunks/0nq6z5n2sdmaw.js":"_assets/fa7ef9ef7dcc946c0dae.js","/chunks/0nq6z5n2sdmaw.js":"_assets/fa7ef9ef7dcc946c0dae.js","/0nq6z5n2sdmaw.js":"_assets/fa7ef9ef7dcc946c0dae.js","https://arknights-guess.online/_next/static/chunks/1i-mh_g9-aeg_.js":"_assets/f05dd43bb2fae6a5ef06.js","/_next/static/chunks/1i-mh_g9-aeg_.js":"_assets/f05dd43bb2fae6a5ef06.js","/static/chunks/1i-mh_g9-aeg_.js":"_assets/f05dd43bb2fae6a5ef06.js","/chunks/1i-mh_g9-aeg_.js":"_assets/f05dd43bb2fae6a5ef06.js","/1i-mh_g9-aeg_.js":"_assets/f05dd43bb2fae6a5ef06.js","https://arknights-guess.online/_next/static/chunks/28eaow9ibvdpt.js":"_assets/c4706c7b291665a0e97a.js","/_next/static/chunks/28eaow9ibvdpt.js":"_assets/c4706c7b291665a0e97a.js","/static/chunks/28eaow9ibvdpt.js":"_assets/c4706c7b291665a0e97a.js","/chunks/28eaow9ibvdpt.js":"_assets/c4706c7b291665a0e97a.js","/28eaow9ibvdpt.js":"_assets/c4706c7b291665a0e97a.js","https://arknights-guess.online/multiplayer/__next._tree.txt?_rsc=5CB68i4pnAekjehf":"_assets/3ba218a9f0d7b06fa34a.txt","/multiplayer/__next._tree.txt":"_assets/3ba218a9f0d7b06fa34a.txt","/multiplayer/__next._tree.txt?_rsc=5CB68i4pnAekjehf":"_assets/3ba218a9f0d7b06fa34a.txt","/__next._tree.txt":"_assets/3ba218a9f0d7b06fa34a.txt","https://arknights-guess.online/multiplayer/__next._tree.txt":"_assets/3ba218a9f0d7b06fa34a.txt","https://arknights-guess.online/daily/__next._tree.txt?_rsc=5CB68i4pnAekjehf":"_assets/cab1048b97d954e60ba7.txt","/daily/__next._tree.txt":"_assets/cab1048b97d954e60ba7.txt","/daily/__next._tree.txt?_rsc=5CB68i4pnAekjehf":"_assets/cab1048b97d954e60ba7.txt","https://arknights-guess.online/daily/__next._tree.txt":"_assets/cab1048b97d954e60ba7.txt","https://arknights-guess.online/party/__next._tree.txt?_rsc=5CB68i4pnAekjehf":"_assets/7ac022074d338a59c980.txt","/party/__next._tree.txt":"_assets/7ac022074d338a59c980.txt","/party/__next._tree.txt?_rsc=5CB68i4pnAekjehf":"_assets/7ac022074d338a59c980.txt","https://arknights-guess.online/party/__next._tree.txt":"_assets/7ac022074d338a59c980.txt","https://arknights-guess.online/game/__next._tree.txt?_rsc=5CB68i4pnAekjehf":"_assets/1a86a6042e1105a23bbe.txt","/game/__next._tree.txt":"_assets/1a86a6042e1105a23bbe.txt","/game/__next._tree.txt?_rsc=5CB68i4pnAekjehf":"_assets/1a86a6042e1105a23bbe.txt","https://arknights-guess.online/game/__next._tree.txt":"_assets/1a86a6042e1105a23bbe.txt","https://arknights-guess.online/multiplayer/__next._head.txt?_rsc=7h4NYy5eoyMcNlUN":"_assets/121f67f346a8ec1e5107.txt","/multiplayer/__next._head.txt":"_assets/121f67f346a8ec1e5107.txt","/multiplayer/__next._head.txt?_rsc=7h4NYy5eoyMcNlUN":"_assets/121f67f346a8ec1e5107.txt","/__next._head.txt":"_assets/121f67f346a8ec1e5107.txt","https://arknights-guess.online/multiplayer/__next._head.txt":"_assets/121f67f346a8ec1e5107.txt","https://arknights-guess.online/multiplayer/__next._index.txt?_rsc=yIp22O3xgPPxC28X":"_assets/691e38cd48f649ecd4ba.txt","/multiplayer/__next._index.txt":"_assets/691e38cd48f649ecd4ba.txt","/multiplayer/__next._index.txt?_rsc=yIp22O3xgPPxC28X":"_assets/691e38cd48f649ecd4ba.txt","/__next._index.txt":"_assets/691e38cd48f649ecd4ba.txt","https://arknights-guess.online/multiplayer/__next._index.txt":"_assets/691e38cd48f649ecd4ba.txt","https://arknights-guess.online/party/__next._head.txt?_rsc=7h4NYy5eoyMcNlUN":"_assets/121f67f346a8ec1e5107.txt","/party/__next._head.txt":"_assets/121f67f346a8ec1e5107.txt","/party/__next._head.txt?_rsc=7h4NYy5eoyMcNlUN":"_assets/121f67f346a8ec1e5107.txt","https://arknights-guess.online/party/__next._head.txt":"_assets/121f67f346a8ec1e5107.txt","https://arknights-guess.online/party/__next.party.txt?_rsc=d00sAFofSni7bR2w":"_assets/0dc3187103d705271da9.txt","/party/__next.party.txt":"_assets/0dc3187103d705271da9.txt","/party/__next.party.txt?_rsc=d00sAFofSni7bR2w":"_assets/0dc3187103d705271da9.txt","/__next.party.txt":"_assets/0dc3187103d705271da9.txt","https://arknights-guess.online/party/__next.party.txt":"_assets/0dc3187103d705271da9.txt","https://arknights-guess.online/party/__next.party.__PAGE__.txt?_rsc=_IAGgMEIdguwySaG":"_assets/9bb63cea749ce6770d50.txt","/party/__next.party.__PAGE__.txt":"_assets/9bb63cea749ce6770d50.txt","/party/__next.party.__PAGE__.txt?_rsc=_IAGgMEIdguwySaG":"_assets/9bb63cea749ce6770d50.txt","/__next.party.__PAGE__.txt":"_assets/9bb63cea749ce6770d50.txt","https://arknights-guess.online/party/__next.party.__PAGE__.txt":"_assets/9bb63cea749ce6770d50.txt","https://arknights-guess.online/multiplayer/__next.multiplayer.txt?_rsc=cX9TLx46gWpRtAZe":"_assets/0dc3187103d705271da9.txt","/multiplayer/__next.multiplayer.txt":"_assets/0dc3187103d705271da9.txt","/multiplayer/__next.multiplayer.txt?_rsc=cX9TLx46gWpRtAZe":"_assets/0dc3187103d705271da9.txt","/__next.multiplayer.txt":"_assets/0dc3187103d705271da9.txt","https://arknights-guess.online/multiplayer/__next.multiplayer.txt":"_assets/0dc3187103d705271da9.txt","https://arknights-guess.online/_next/static/chunks/2_sbgao9ywf4-.js":"_assets/e172ea02944073b178a6.js","/_next/static/chunks/2_sbgao9ywf4-.js":"_assets/e172ea02944073b178a6.js","/static/chunks/2_sbgao9ywf4-.js":"_assets/e172ea02944073b178a6.js","/chunks/2_sbgao9ywf4-.js":"_assets/e172ea02944073b178a6.js","/2_sbgao9ywf4-.js":"_assets/e172ea02944073b178a6.js","https://arknights-guess.online/_next/static/chunks/351b9mr0s6qrw.js":"_assets/4bf11ae27f1111bd941f.js","/_next/static/chunks/351b9mr0s6qrw.js":"_assets/4bf11ae27f1111bd941f.js","/static/chunks/351b9mr0s6qrw.js":"_assets/4bf11ae27f1111bd941f.js","/chunks/351b9mr0s6qrw.js":"_assets/4bf11ae27f1111bd941f.js","/351b9mr0s6qrw.js":"_assets/4bf11ae27f1111bd941f.js","https://arknights-guess.online/_next/static/chunks/2_q7eprv8p7_q.js":"_assets/d0494c45becb99425266.js","/_next/static/chunks/2_q7eprv8p7_q.js":"_assets/d0494c45becb99425266.js","/static/chunks/2_q7eprv8p7_q.js":"_assets/d0494c45becb99425266.js","/chunks/2_q7eprv8p7_q.js":"_assets/d0494c45becb99425266.js","/2_q7eprv8p7_q.js":"_assets/d0494c45becb99425266.js","https://arknights-guess.online/_next/static/chunks/1tbq2yqcpv--_.js":"_assets/8127b6408d32e2a3f690.js","/_next/static/chunks/1tbq2yqcpv--_.js":"_assets/8127b6408d32e2a3f690.js","/static/chunks/1tbq2yqcpv--_.js":"_assets/8127b6408d32e2a3f690.js","/chunks/1tbq2yqcpv--_.js":"_assets/8127b6408d32e2a3f690.js","/1tbq2yqcpv--_.js":"_assets/8127b6408d32e2a3f690.js","https://arknights-guess.online/_next/static/chunks/05qkwqpyql_z0.js":"_assets/8efb3dc3a6e23be2390d.js","/_next/static/chunks/05qkwqpyql_z0.js":"_assets/8efb3dc3a6e23be2390d.js","/static/chunks/05qkwqpyql_z0.js":"_assets/8efb3dc3a6e23be2390d.js","/chunks/05qkwqpyql_z0.js":"_assets/8efb3dc3a6e23be2390d.js","/05qkwqpyql_z0.js":"_assets/8efb3dc3a6e23be2390d.js","https://arknights-guess.online/multiplayer/__next.multiplayer.__PAGE__.txt?_rsc=-akDxdskyvI42-Yd":"_assets/a61d0d472870ff71a49d.txt","/multiplayer/__next.multiplayer.__PAGE__.txt":"_assets/a61d0d472870ff71a49d.txt","/multiplayer/__next.multiplayer.__PAGE__.txt?_rsc=-akDxdskyvI42-Yd":"_assets/a61d0d472870ff71a49d.txt","/__next.multiplayer.__PAGE__.txt":"_assets/a61d0d472870ff71a49d.txt","https://arknights-guess.online/multiplayer/__next.multiplayer.__PAGE__.txt":"_assets/a61d0d472870ff71a49d.txt","https://arknights-guess.online/game/__next._head.txt?_rsc=7h4NYy5eoyMcNlUN":"_assets/121f67f346a8ec1e5107.txt","/game/__next._head.txt":"_assets/121f67f346a8ec1e5107.txt","/game/__next._head.txt?_rsc=7h4NYy5eoyMcNlUN":"_assets/121f67f346a8ec1e5107.txt","https://arknights-guess.online/game/__next._head.txt":"_assets/121f67f346a8ec1e5107.txt","https://arknights-guess.online/game/__next.game.txt?_rsc=PPamMJyUObDmAaqI":"_assets/0dc3187103d705271da9.txt","/game/__next.game.txt":"_assets/0dc3187103d705271da9.txt","/game/__next.game.txt?_rsc=PPamMJyUObDmAaqI":"_assets/0dc3187103d705271da9.txt","/__next.game.txt":"_assets/0dc3187103d705271da9.txt","https://arknights-guess.online/game/__next.game.txt":"_assets/0dc3187103d705271da9.txt","https://arknights-guess.online/game/__next.game.__PAGE__.txt?_rsc=ftTrMQF0lAApnFgB":"_assets/a55ca2fa17094e51c647.txt","/game/__next.game.__PAGE__.txt":"_assets/a55ca2fa17094e51c647.txt","/game/__next.game.__PAGE__.txt?_rsc=ftTrMQF0lAApnFgB":"_assets/a55ca2fa17094e51c647.txt","/__next.game.__PAGE__.txt":"_assets/a55ca2fa17094e51c647.txt","https://arknights-guess.online/game/__next.game.__PAGE__.txt":"_assets/a55ca2fa17094e51c647.txt","https://arknights-guess.online/_next/static/chunks/2n8ynk7e91nr_.js":"_assets/63f014ceac0740caf2f1.js","/_next/static/chunks/2n8ynk7e91nr_.js":"_assets/63f014ceac0740caf2f1.js","/static/chunks/2n8ynk7e91nr_.js":"_assets/63f014ceac0740caf2f1.js","/chunks/2n8ynk7e91nr_.js":"_assets/63f014ceac0740caf2f1.js","/2n8ynk7e91nr_.js":"_assets/63f014ceac0740caf2f1.js","https://arknights-guess.online/daily/__next._head.txt?_rsc=7h4NYy5eoyMcNlUN":"_assets/121f67f346a8ec1e5107.txt","/daily/__next._head.txt":"_assets/121f67f346a8ec1e5107.txt","/daily/__next._head.txt?_rsc=7h4NYy5eoyMcNlUN":"_assets/121f67f346a8ec1e5107.txt","https://arknights-guess.online/daily/__next._head.txt":"_assets/121f67f346a8ec1e5107.txt","https://arknights-guess.online/daily/__next.daily.txt?_rsc=Z2FNe9QSTi6eDVmj":"_assets/0dc3187103d705271da9.txt","/daily/__next.daily.txt":"_assets/0dc3187103d705271da9.txt","/daily/__next.daily.txt?_rsc=Z2FNe9QSTi6eDVmj":"_assets/0dc3187103d705271da9.txt","/__next.daily.txt":"_assets/0dc3187103d705271da9.txt","https://arknights-guess.online/daily/__next.daily.txt":"_assets/0dc3187103d705271da9.txt","https://arknights-guess.online/daily/__next.daily.__PAGE__.txt?_rsc=0TkBAtQ7fauAl5JI":"_assets/00de01839f9be8e1c199.txt","/daily/__next.daily.__PAGE__.txt":"_assets/00de01839f9be8e1c199.txt","/daily/__next.daily.__PAGE__.txt?_rsc=0TkBAtQ7fauAl5JI":"_assets/00de01839f9be8e1c199.txt","/__next.daily.__PAGE__.txt":"_assets/00de01839f9be8e1c199.txt","https://arknights-guess.online/daily/__next.daily.__PAGE__.txt":"_assets/00de01839f9be8e1c199.txt","https://arknights-guess.online/_next/static/chunks/3k3n9nbiytkya.js":"_assets/add5f1acac6f5eecc9c9.js","/_next/static/chunks/3k3n9nbiytkya.js":"_assets/add5f1acac6f5eecc9c9.js","/static/chunks/3k3n9nbiytkya.js":"_assets/add5f1acac6f5eecc9c9.js","/chunks/3k3n9nbiytkya.js":"_assets/add5f1acac6f5eecc9c9.js","/3k3n9nbiytkya.js":"_assets/add5f1acac6f5eecc9c9.js","https://arknights-guess.online/_next/static/chunks/08n5sg-bdetgw.js":"_assets/fc1d4d2f5bcfbbc42929.js","/_next/static/chunks/08n5sg-bdetgw.js":"_assets/fc1d4d2f5bcfbbc42929.js","/static/chunks/08n5sg-bdetgw.js":"_assets/fc1d4d2f5bcfbbc42929.js","/chunks/08n5sg-bdetgw.js":"_assets/fc1d4d2f5bcfbbc42929.js","/08n5sg-bdetgw.js":"_assets/fc1d4d2f5bcfbbc42929.js","https://arknights-guess.online/__next._head.txt?_rsc=7h4NYy5eoyMcNlUN":"_assets/121f67f346a8ec1e5107.txt","/__next._head.txt?_rsc=7h4NYy5eoyMcNlUN":"_assets/121f67f346a8ec1e5107.txt","https://arknights-guess.online/__next._head.txt":"_assets/121f67f346a8ec1e5107.txt","https://arknights-guess.online/__next.__PAGE__.txt?_rsc=8nTjltbQWvg6NcbE":"_assets/1faa0d2e4ecbda6ee465.txt","/__next.__PAGE__.txt":"_assets/1faa0d2e4ecbda6ee465.txt","/__next.__PAGE__.txt?_rsc=8nTjltbQWvg6NcbE":"_assets/1faa0d2e4ecbda6ee465.txt","https://arknights-guess.online/__next.__PAGE__.txt":"_assets/1faa0d2e4ecbda6ee465.txt","https://arknights-guess.online/_next/static/chunks/3khk55k6xpuj6.js":"_assets/2439a97c2ff398752524.js","/_next/static/chunks/3khk55k6xpuj6.js":"_assets/2439a97c2ff398752524.js","/static/chunks/3khk55k6xpuj6.js":"_assets/2439a97c2ff398752524.js","/chunks/3khk55k6xpuj6.js":"_assets/2439a97c2ff398752524.js","/3khk55k6xpuj6.js":"_assets/2439a97c2ff398752524.js","https://arknights-guess.online/_next/static/chunks/09qwnjn4czz2s.js":"_assets/92958f570189b616abd0.js","/_next/static/chunks/09qwnjn4czz2s.js":"_assets/92958f570189b616abd0.js","/static/chunks/09qwnjn4czz2s.js":"_assets/92958f570189b616abd0.js","/chunks/09qwnjn4czz2s.js":"_assets/92958f570189b616abd0.js","/09qwnjn4czz2s.js":"_assets/92958f570189b616abd0.js"};
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
