# 离线网页游戏合集

这是一个集中存放可离线运行网页游戏的项目。当前共收录 **19 款**游戏，每款游戏使用独立子目录，由根目录的 `server.py` 读取 `games.json` 并提供本地静态服务。

## 当前包含

| # | 游戏 | 目录 | 本地地址 |
|---:|---|---|---|
| 1 | YORG.io 经典版 | `yorg.io/` | <http://localhost:8766/> |
| 2 | YORG.io 3 | `yorg3.io/` | <http://localhost:8767/> |
| 3 | Idle Mining Empire | `idle-mining-empire/` | <http://localhost:8768/> |
| 4 | Hextris | `hextris-io/` | <http://localhost:8770/> |
| 5 | 2048 | `2048-io/` | <http://localhost:8771/> |
| 6 | Spider Solitaire | `spider-solitaire-io/` | <http://localhost:8772/> |
| 7 | Tic-Tac-Toe | `playtictactoe/` | <http://localhost:8773/> |
| 8 | Snake | `playsnake/` | <http://localhost:8774/> |
| 9 | Doodle Jump | `doodlejump/` | <http://localhost:8776/> |
| 10 | Klondike Solitaire | `playklondike/` | <http://localhost:8777/> |
| 11 | Checkers | `playcheckers/` | <http://localhost:8778/> |
| 12 | Wordle | `wordle/` | <http://localhost:8779/> |
| 13 | Hoppenhelm | `hoppenhelm/` | <http://localhost:8780/> |
| 14 | Minesweeper | `minesweeper/` | <http://localhost:8781/> |
| 15 | 2048 Classic | `2048-original/` | <http://localhost:8782/> |
| 16 | American Football Challenge | `american-football-challenge/` | <http://localhost:8783/> |
| 17 | Guess Who | `guess-who/` | <http://localhost:8784/> |
| 18 | Free Mahjong | `free-mahjong/` | <http://localhost:8785/> |
| 19 | JavaScript Tetris | `javascript-tetris/` | <http://localhost:8786/> |

## 运行方式

运行环境：Windows + Chrome / Edge + Python 3。

双击 `启动游戏.cmd`。启动器只启动本地服务并在终端打印全部地址，**不会自动打开大量浏览器标签**。选择需要的地址在浏览器中打开即可；关闭启动器终端窗口会停止服务。

也可以手动运行：

```powershell
python -B server.py
```

游戏存档保存在浏览器本地存储中。请固定使用相同端口打开对应游戏，否则浏览器可能会将其识别为不同站点。

## YORG.io 3 离线双模式

启动页面：<http://localhost:8767/>

- 生存模式：标准单机玩法，红色水晶和蓝色精华正常消耗。
- 创造模式：两种资源无限、瞬间建造、皮肤/地图/难度/成就/建筑升级全部解锁。
- 创造模式仍从零开局，不预置建筑或额外进度；不显示右下角创造模式悬浮面板。
- 所有已放置建筑和新建筑的升级选项自动解锁。
- 游戏内快捷键：`T` 跳过一天、`P` 生成僵尸、`H` 清除僵尸、`J` 填满仓库、`K` 修复全部。
- “皮肤 & 商品店”和“成就”页保留本地可用内容，在线付款、广告、云同步和多人项目已移除。

## Idle Mining Empire 离线双模式

启动页面：<http://localhost:8768/>

- 普通模式：10 元开局，现金有限，保留完整经营流程和离线收益。
- 创造模式：同样从零开始，现金和闲置收入显示为 `∞`；购买矿区、雇佣经理、升级设备和解除障碍全部免费。
- 两种模式使用各自独立的浏览器本地存档，切换模式不会覆盖另一份进度。
- 已移除广告、统计、账号、支付和其他在线服务。
- 窄屏或竖屏窗口会自动加边居中，保持游戏原始宽高比。

## 离线与安全说明

- 游戏只通过 `localhost` 访问，不向局域网开放。
- 广告、统计、账号、支付、多人、排行榜、云同步和社交分享等在线功能已移除或禁用。
- 已对本地资源、404、外部请求和 JavaScript 错误进行自动回归检查。
- 当前端口为 `8766`、`8767`、`8768`、`8770` 至 `8774`、`8776` 至 `8786`，不恢复已占用的 `8765`。

## 版权

各游戏及素材版权归原作者所有。本仓库保存的是基于公开网页制作的个人离线版本，仅供学习、备份和个人离线使用，请勿用于商业传播。

原始站点包括：

- <https://yorg.io/>
- <https://yorg3.io/>
- <https://brainrotclicker.io/idle-mining-empire>
- <https://hextris.io/>
- <https://2048.io/>
- <https://spider-solitaire.io/>
- <https://burcakkose.github.io/Minesweeper/>
- <https://markmesina.github.io/Javascript-Tetris/>
