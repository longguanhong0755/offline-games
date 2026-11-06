(() => {
  "use strict";
  const RUNTIME_MAP = {"https://mc.liukairui.me/css/index-979658a3.css":"_assets/3f34903cbe4e74439798.css","/css/index-979658a3.css":"_assets/3f34903cbe4e74439798.css","/index-979658a3.css":"_assets/3f34903cbe4e74439798.css","https://mc.liukairui.me/registerSW.js":"_assets/9742073ef7fc795e7673.js","/registerSW.js":"_assets/9742073ef7fc795e7673.js","https://mc.liukairui.me/js/index-08fba026.js":"_assets/07a7f4624168cb35044a.js","/js/index-08fba026.js":"_assets/07a7f4624168cb35044a.js","/index-08fba026.js":"_assets/07a7f4624168cb35044a.js","https://mc.liukairui.me/ogg/leaves-2babd9a1.ogg":"_assets/2babd9a14a5bf730aeee.ogg","/ogg/leaves-2babd9a1.ogg":"_assets/2babd9a14a5bf730aeee.ogg","/leaves-2babd9a1.ogg":"_assets/2babd9a14a5bf730aeee.ogg","https://mc.liukairui.me/ogg/leaves-b7636085.ogg":"_assets/b7636085c1872a96449e.ogg","/ogg/leaves-b7636085.ogg":"_assets/b7636085c1872a96449e.ogg","/leaves-b7636085.ogg":"_assets/b7636085c1872a96449e.ogg","https://mc.liukairui.me/ogg/nether-46b2cfa0.ogg":"_assets/46b2cfa0d00b02d82347.ogg","/ogg/nether-46b2cfa0.ogg":"_assets/46b2cfa0d00b02d82347.ogg","/nether-46b2cfa0.ogg":"_assets/46b2cfa0d00b02d82347.ogg","https://mc.liukairui.me/ogg/brick-c82e373e.ogg":"_assets/c82e373e639fbd646d4d.ogg","/ogg/brick-c82e373e.ogg":"_assets/c82e373e639fbd646d4d.ogg","/brick-c82e373e.ogg":"_assets/c82e373e639fbd646d4d.ogg","https://mc.liukairui.me/ogg/gravel-55a610c8.ogg":"_assets/55a610c8739c045a6534.ogg","/ogg/gravel-55a610c8.ogg":"_assets/55a610c8739c045a6534.ogg","/gravel-55a610c8.ogg":"_assets/55a610c8739c045a6534.ogg","https://mc.liukairui.me/ogg/stone-95820d0b.ogg":"_assets/95820d0b75e8d223bb5e.ogg","/ogg/stone-95820d0b.ogg":"_assets/95820d0b75e8d223bb5e.ogg","/stone-95820d0b.ogg":"_assets/95820d0b75e8d223bb5e.ogg","https://mc.liukairui.me/ogg/brick-d5608db8.ogg":"_assets/d5608db83901080e03e4.ogg","/ogg/brick-d5608db8.ogg":"_assets/d5608db83901080e03e4.ogg","/brick-d5608db8.ogg":"_assets/d5608db83901080e03e4.ogg","https://mc.liukairui.me/ogg/grass-3619fdb8.ogg":"_assets/3619fdb8f8aad57a48d4.ogg","/ogg/grass-3619fdb8.ogg":"_assets/3619fdb8f8aad57a48d4.ogg","/grass-3619fdb8.ogg":"_assets/3619fdb8f8aad57a48d4.ogg","https://mc.liukairui.me/ogg/wood-de868b31.ogg":"_assets/de868b3119b03ad42cbe.ogg","/ogg/wood-de868b31.ogg":"_assets/de868b3119b03ad42cbe.ogg","/wood-de868b31.ogg":"_assets/de868b3119b03ad42cbe.ogg","https://mc.liukairui.me/ogg/wood-f950e9c5.ogg":"_assets/f950e9c5638398ea3119.ogg","/ogg/wood-f950e9c5.ogg":"_assets/f950e9c5638398ea3119.ogg","/wood-f950e9c5.ogg":"_assets/f950e9c5638398ea3119.ogg","https://mc.liukairui.me/ogg/grass-21bd69b6.ogg":"_assets/21bd69b639eb2cddd3cd.ogg","/ogg/grass-21bd69b6.ogg":"_assets/21bd69b639eb2cddd3cd.ogg","/grass-21bd69b6.ogg":"_assets/21bd69b639eb2cddd3cd.ogg","https://mc.liukairui.me/ogg/pumpkin-68fbefd3.ogg":"_assets/68fbefd35376514b11f6.ogg","/ogg/pumpkin-68fbefd3.ogg":"_assets/68fbefd35376514b11f6.ogg","/pumpkin-68fbefd3.ogg":"_assets/68fbefd35376514b11f6.ogg","https://mc.liukairui.me/ogg/soulsand-19c8693f.ogg":"_assets/19c8693fa9087f6e520e.ogg","/ogg/soulsand-19c8693f.ogg":"_assets/19c8693fa9087f6e520e.ogg","/soulsand-19c8693f.ogg":"_assets/19c8693fa9087f6e520e.ogg","https://mc.liukairui.me/ogg/snow-9821036a.ogg":"_assets/9821036a9933416e5c78.ogg","/ogg/snow-9821036a.ogg":"_assets/9821036a9933416e5c78.ogg","/snow-9821036a.ogg":"_assets/9821036a9933416e5c78.ogg","https://mc.liukairui.me/ogg/netherrack-0ddb6d24.ogg":"_assets/0ddb6d245b550a04a168.ogg","/ogg/netherrack-0ddb6d24.ogg":"_assets/0ddb6d245b550a04a168.ogg","/netherrack-0ddb6d24.ogg":"_assets/0ddb6d245b550a04a168.ogg","https://mc.liukairui.me/ogg/sand-1315a12d.ogg":"_assets/1315a12dde4e9473a177.ogg","/ogg/sand-1315a12d.ogg":"_assets/1315a12dde4e9473a177.ogg","/sand-1315a12d.ogg":"_assets/1315a12dde4e9473a177.ogg","https://mc.liukairui.me/ogg/gravel-0ab687ad.ogg":"_assets/0ab687ad74071c1ee9e8.ogg","/ogg/gravel-0ab687ad.ogg":"_assets/0ab687ad74071c1ee9e8.ogg","/gravel-0ab687ad.ogg":"_assets/0ab687ad74071c1ee9e8.ogg","https://mc.liukairui.me/ogg/nether-a8674a3c.ogg":"_assets/a8674a3c6f0d85935735.ogg","/ogg/nether-a8674a3c.ogg":"_assets/a8674a3c6f0d85935735.ogg","/nether-a8674a3c.ogg":"_assets/a8674a3c6f0d85935735.ogg","https://mc.liukairui.me/ogg/netherrack-33f0f679.ogg":"_assets/33f0f679479f93811f77.ogg","/ogg/netherrack-33f0f679.ogg":"_assets/33f0f679479f93811f77.ogg","/netherrack-33f0f679.ogg":"_assets/33f0f679479f93811f77.ogg","https://mc.liukairui.me/ogg/sand-74ef2fa1.ogg":"_assets/74ef2fa1b6c52356ffa9.ogg","/ogg/sand-74ef2fa1.ogg":"_assets/74ef2fa1b6c52356ffa9.ogg","/sand-74ef2fa1.ogg":"_assets/74ef2fa1b6c52356ffa9.ogg","https://mc.liukairui.me/ogg/soulsand-ea30f020.ogg":"_assets/ea30f02098c95ec2f362.ogg","/ogg/soulsand-ea30f020.ogg":"_assets/ea30f02098c95ec2f362.ogg","/soulsand-ea30f020.ogg":"_assets/ea30f02098c95ec2f362.ogg","https://mc.liukairui.me/ogg/water-24a2e0c4.ogg":"_assets/24a2e0c41b51b70125b5.ogg","/ogg/water-24a2e0c4.ogg":"_assets/24a2e0c41b51b70125b5.ogg","/water-24a2e0c4.ogg":"_assets/24a2e0c41b51b70125b5.ogg","https://mc.liukairui.me/ogg/snow-12a5dab4.ogg":"_assets/12a5dab48ec7469ecd31.ogg","/ogg/snow-12a5dab4.ogg":"_assets/12a5dab48ec7469ecd31.ogg","/snow-12a5dab4.ogg":"_assets/12a5dab48ec7469ecd31.ogg","https://mc.liukairui.me/svg/logo-minecraft-c510db5a.svg":"_assets/c510db5a9d5fc52a2f50.svg","/svg/logo-minecraft-c510db5a.svg":"_assets/c510db5a9d5fc52a2f50.svg","/logo-minecraft-c510db5a.svg":"_assets/c510db5a9d5fc52a2f50.svg","https://mc.liukairui.me/jpg/background-da959051.jpg":"_assets/da95905180f826e6223f.jpg","/jpg/background-da959051.jpg":"_assets/da95905180f826e6223f.jpg","/background-da959051.jpg":"_assets/da95905180f826e6223f.jpg","https://mc.liukairui.me/ttf/mplus_hzk_12-52c0ba5f.ttf":"_assets/52c0ba5f0f19609ff62f.ttf","/ttf/mplus_hzk_12-52c0ba5f.ttf":"_assets/52c0ba5f0f19609ff62f.ttf","/mplus_hzk_12-52c0ba5f.ttf":"_assets/52c0ba5f0f19609ff62f.ttf","https://mc.liukairui.me/png/acaciaLeaves-c754a553.png":"_assets/c754a553c295d81c49cf.png","/png/acaciaLeaves-c754a553.png":"_assets/c754a553c295d81c49cf.png","/acaciaLeaves-c754a553.png":"_assets/c754a553c295d81c49cf.png","https://mc.liukairui.me/png/brickBlock-07255cbb.png":"_assets/07255cbb5afccb054812.png","/png/brickBlock-07255cbb.png":"_assets/07255cbb5afccb054812.png","/brickBlock-07255cbb.png":"_assets/07255cbb5afccb054812.png","https://mc.liukairui.me/png/birchLeaves-dff360ec.png":"_assets/dff360ec91f87d15aa4f.png","/png/birchLeaves-dff360ec.png":"_assets/dff360ec91f87d15aa4f.png","/birchLeaves-dff360ec.png":"_assets/dff360ec91f87d15aa4f.png","https://mc.liukairui.me/png/bedrock-22bdb1bf.png":"_assets/22bdb1bf7c30096606f4.png","/png/bedrock-22bdb1bf.png":"_assets/22bdb1bf7c30096606f4.png","/bedrock-22bdb1bf.png":"_assets/22bdb1bf7c30096606f4.png","https://mc.liukairui.me/png/andesite-00d3c7f0.png":"_assets/00d3c7f0fd4df938ebfd.png","/png/andesite-00d3c7f0.png":"_assets/00d3c7f0fd4df938ebfd.png","/andesite-00d3c7f0.png":"_assets/00d3c7f0fd4df938ebfd.png","https://mc.liukairui.me/png/coalOre-80f56a68.png":"_assets/80f56a68d2d0037f61e2.png","/png/coalOre-80f56a68.png":"_assets/80f56a68d2d0037f61e2.png","/coalOre-80f56a68.png":"_assets/80f56a68d2d0037f61e2.png","https://mc.liukairui.me/png/clayBlock-ecac5d17.png":"_assets/ecac5d1702289ddd8448.png","/png/clayBlock-ecac5d17.png":"_assets/ecac5d1702289ddd8448.png","/clayBlock-ecac5d17.png":"_assets/ecac5d1702289ddd8448.png","https://mc.liukairui.me/png/cobblestone-613b82f7.png":"_assets/613b82f76eec448ce0ce.png","/png/cobblestone-613b82f7.png":"_assets/613b82f76eec448ce0ce.png","/cobblestone-613b82f7.png":"_assets/613b82f76eec448ce0ce.png","https://mc.liukairui.me/png/diamondOre-e6c54469.png":"_assets/e6c544699319260ec278.png","/png/diamondOre-e6c54469.png":"_assets/e6c544699319260ec278.png","/diamondOre-e6c54469.png":"_assets/e6c544699319260ec278.png","https://mc.liukairui.me/png/diorite-ff88062a.png":"_assets/ff88062a94490651d26d.png","/png/diorite-ff88062a.png":"_assets/ff88062a94490651d26d.png","/diorite-ff88062a.png":"_assets/ff88062a94490651d26d.png","https://mc.liukairui.me/png/blockDiamond-a6a8018a.png":"_assets/a6a8018a1225983120a5.png","/png/blockDiamond-a6a8018a.png":"_assets/a6a8018a1225983120a5.png","/blockDiamond-a6a8018a.png":"_assets/a6a8018a1225983120a5.png","https://mc.liukairui.me/png/endStone-9df1d017.png":"_assets/9df1d017b510a4c22d58.png","/png/endStone-9df1d017.png":"_assets/9df1d017b510a4c22d58.png","/endStone-9df1d017.png":"_assets/9df1d017b510a4c22d58.png","https://mc.liukairui.me/png/glass-a6c5a125.png":"_assets/a6c5a1256181a24aeaa5.png","/png/glass-a6c5a125.png":"_assets/a6c5a1256181a24aeaa5.png","/glass-a6c5a125.png":"_assets/a6c5a1256181a24aeaa5.png","https://mc.liukairui.me/png/blockGold-801c6d7a.png":"_assets/801c6d7afe0cea5e80c5.png","/png/blockGold-801c6d7a.png":"_assets/801c6d7afe0cea5e80c5.png","/blockGold-801c6d7a.png":"_assets/801c6d7afe0cea5e80c5.png","https://mc.liukairui.me/png/granite-ec21a949.png":"_assets/ec21a949572b0a839b47.png","/png/granite-ec21a949.png":"_assets/ec21a949572b0a839b47.png","/granite-ec21a949.png":"_assets/ec21a949572b0a839b47.png","https://mc.liukairui.me/png/gravel-0382de17.png":"_assets/0382de170ddd601943e1.png","/png/gravel-0382de17.png":"_assets/0382de170ddd601943e1.png","/gravel-0382de17.png":"_assets/0382de170ddd601943e1.png","https://mc.liukairui.me/png/blockIron-9c2558f1.png":"_assets/9c2558f104d5c4bf613c.png","/png/blockIron-9c2558f1.png":"_assets/9c2558f104d5c4bf613c.png","/blockIron-9c2558f1.png":"_assets/9c2558f104d5c4bf613c.png","https://mc.liukairui.me/png/ironOre-1f1a2018.png":"_assets/1f1a2018fdba9045f2b4.png","/png/ironOre-1f1a2018.png":"_assets/1f1a2018fdba9045f2b4.png","/ironOre-1f1a2018.png":"_assets/1f1a2018fdba9045f2b4.png","https://mc.liukairui.me/png/blockLapisLazuli-c3f4365e.png":"_assets/c3f4365e08230fa4d3d3.png","/png/blockLapisLazuli-c3f4365e.png":"_assets/c3f4365e08230fa4d3d3.png","/blockLapisLazuli-c3f4365e.png":"_assets/c3f4365e08230fa4d3d3.png","https://mc.liukairui.me/png/netherBrickBlock-81c114e2.png":"_assets/81c114e2b8a2072f5cd1.png","/png/netherBrickBlock-81c114e2.png":"_assets/81c114e2b8a2072f5cd1.png","/netherBrickBlock-81c114e2.png":"_assets/81c114e2b8a2072f5cd1.png","https://mc.liukairui.me/png/lapisLazuliOre-9fe67945.png":"_assets/9fe67945000ffbde9fea.png","/png/lapisLazuliOre-9fe67945.png":"_assets/9fe67945000ffbde9fea.png","/lapisLazuliOre-9fe67945.png":"_assets/9fe67945000ffbde9fea.png","https://mc.liukairui.me/png/netherQuartzOre-c4fa0230.png":"_assets/c4fa02308878b4a2a8ec.png","/png/netherQuartzOre-c4fa0230.png":"_assets/c4fa02308878b4a2a8ec.png","/netherQuartzOre-c4fa0230.png":"_assets/c4fa02308878b4a2a8ec.png","https://mc.liukairui.me/png/netherrack-5f9c4be6.png":"_assets/5f9c4be6ee48d08636e6.png","/png/netherrack-5f9c4be6.png":"_assets/5f9c4be6ee48d08636e6.png","/netherrack-5f9c4be6.png":"_assets/5f9c4be6ee48d08636e6.png","https://mc.liukairui.me/png/noteBlock-9c9e43e0.png":"_assets/9c9e43e0a9737c1c475b.png","/png/noteBlock-9c9e43e0.png":"_assets/9c9e43e0a9737c1c475b.png","/noteBlock-9c9e43e0.png":"_assets/9c9e43e0a9737c1c475b.png","https://mc.liukairui.me/png/polishedDiorite-ae4b8158.png":"_assets/ae4b8158997dc9eace1d.png","/png/polishedDiorite-ae4b8158.png":"_assets/ae4b8158997dc9eace1d.png","/polishedDiorite-ae4b8158.png":"_assets/ae4b8158997dc9eace1d.png","https://mc.liukairui.me/png/polishedGranite-62d175b7.png":"_assets/62d175b76981b362d165.png","/png/polishedGranite-62d175b7.png":"_assets/62d175b76981b362d165.png","/polishedGranite-62d175b7.png":"_assets/62d175b76981b362d165.png","https://mc.liukairui.me/png/blockQuartz-3621c649.png":"_assets/3621c64911ead598b31a.png","/png/blockQuartz-3621c649.png":"_assets/3621c64911ead598b31a.png","/blockQuartz-3621c649.png":"_assets/3621c64911ead598b31a.png","https://mc.liukairui.me/png/redSand-e67f2aa9.png":"_assets/e67f2aa998a733d3d834.png","/png/redSand-e67f2aa9.png":"_assets/e67f2aa998a733d3d834.png","/redSand-e67f2aa9.png":"_assets/e67f2aa998a733d3d834.png","https://mc.liukairui.me/png/redstoneOre-236d8f81.png":"_assets/236d8f81ac887eda6285.png","/png/redstoneOre-236d8f81.png":"_assets/236d8f81ac887eda6285.png","/redstoneOre-236d8f81.png":"_assets/236d8f81ac887eda6285.png","https://mc.liukairui.me/png/blockRedstone-440f1ae2.png":"_assets/440f1ae271a73abd49e8.png","/png/blockRedstone-440f1ae2.png":"_assets/440f1ae271a73abd49e8.png","/blockRedstone-440f1ae2.png":"_assets/440f1ae271a73abd49e8.png","https://mc.liukairui.me/png/sand-8b1ef695.png":"_assets/8b1ef6952fb7561be39f.png","/png/sand-8b1ef695.png":"_assets/8b1ef6952fb7561be39f.png","/sand-8b1ef695.png":"_assets/8b1ef6952fb7561be39f.png","https://mc.liukairui.me/png/soulsand-fd73f582.png":"_assets/fd73f5825bd281817fc8.png","/png/soulsand-fd73f582.png":"_assets/fd73f5825bd281817fc8.png","/soulsand-fd73f582.png":"_assets/fd73f5825bd281817fc8.png","https://mc.liukairui.me/png/water-db2a988b.png":"_assets/db2a988bd5f6be4f60b4.png","/png/water-db2a988b.png":"_assets/db2a988bd5f6be4f60b4.png","/water-db2a988b.png":"_assets/db2a988bd5f6be4f60b4.png","https://mc.liukairui.me/png/terracotta-1b5635d4.png":"_assets/1b5635d456e6ebc2251e.png","/png/terracotta-1b5635d4.png":"_assets/1b5635d456e6ebc2251e.png","/terracotta-1b5635d4.png":"_assets/1b5635d456e6ebc2251e.png","https://mc.liukairui.me/png/cactus-a9740386.png":"_assets/a9740386e351d1f85223.png","/png/cactus-a9740386.png":"_assets/a9740386e351d1f85223.png","/cactus-a9740386.png":"_assets/a9740386e351d1f85223.png","https://mc.liukairui.me/png/acaciaWood-e21d7b47.png":"_assets/e21d7b47e3cb3cb55fa2.png","/png/acaciaWood-e21d7b47.png":"_assets/e21d7b47e3cb3cb55fa2.png","/acaciaWood-e21d7b47.png":"_assets/e21d7b47e3cb3cb55fa2.png","https://mc.liukairui.me/png/birchWood-55380871.png":"_assets/55380871f72e8265c385.png","/png/birchWood-55380871.png":"_assets/55380871f72e8265c385.png","/birchWood-55380871.png":"_assets/55380871f72e8265c385.png","https://mc.liukairui.me/png/chiseledSandstone-80a13f4c.png":"_assets/80a13f4c484c3394cf5b.png","/png/chiseledSandstone-80a13f4c.png":"_assets/80a13f4c484c3394cf5b.png","/chiseledSandstone-80a13f4c.png":"_assets/80a13f4c484c3394cf5b.png","https://mc.liukairui.me/png/dispenser-bfcaa545.png":"_assets/bfcaa545fce42efce897.png","/png/dispenser-bfcaa545.png":"_assets/bfcaa545fce42efce897.png","/dispenser-bfcaa545.png":"_assets/bfcaa545fce42efce897.png","https://mc.liukairui.me/png/emeraldOre-aaa24f96.png":"_assets/aaa24f9628e94e77e24e.png","/png/emeraldOre-aaa24f96.png":"_assets/aaa24f9628e94e77e24e.png","/emeraldOre-aaa24f96.png":"_assets/aaa24f9628e94e77e24e.png","https://mc.liukairui.me/png/grassBlock-a0e0af3c.png":"_assets/a0e0af3c32d678657289.png","/png/grassBlock-a0e0af3c.png":"_assets/a0e0af3c32d678657289.png","/grassBlock-a0e0af3c.png":"_assets/a0e0af3c32d678657289.png","https://mc.liukairui.me/png/mycelium-547e2a42.png":"_assets/547e2a4231b05a7518c8.png","/png/mycelium-547e2a42.png":"_assets/547e2a4231b05a7518c8.png","/mycelium-547e2a42.png":"_assets/547e2a4231b05a7518c8.png","https://mc.liukairui.me/png/podzol-0c6d143e.png":"_assets/0c6d143ee1d8f31b572d.png","/png/podzol-0c6d143e.png":"_assets/0c6d143ee1d8f31b572d.png","/podzol-0c6d143e.png":"_assets/0c6d143ee1d8f31b572d.png","https://mc.liukairui.me/png/pumpkin-08639625.png":"_assets/08639625a45d4c09e285.png","/png/pumpkin-08639625.png":"_assets/08639625a45d4c09e285.png","/pumpkin-08639625.png":"_assets/08639625a45d4c09e285.png","https://mc.liukairui.me/png/redSandstone-16da80d2.png":"_assets/16da80d2717ac9a08c12.png","/png/redSandstone-16da80d2.png":"_assets/16da80d2717ac9a08c12.png","/redSandstone-16da80d2.png":"_assets/16da80d2717ac9a08c12.png","https://mc.liukairui.me/png/snowblock-e93fdeea.png":"_assets/e93fdeea43638fd9584e.png","/png/snowblock-e93fdeea.png":"_assets/e93fdeea43638fd9584e.png","/snowblock-e93fdeea.png":"_assets/e93fdeea43638fd9584e.png"};
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
