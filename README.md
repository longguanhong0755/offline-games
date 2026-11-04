# 离线网页游戏合集

一个用于集中存放可离线运行的网页游戏的项目。每款游戏使用独立子目录，统一由根目录的 `server.py` 提供本地静态服务。

## 当前包含

| 游戏 | 目录 | 本地地址 |
| --- | --- | --- |
| YORG.io 经典版 | `yorg.io/` | <http://localhost:8766/> |
| YORG.io 3 | `yorg3.io/` | <http://localhost:8767/> |
| Idle Mining Empire | `idle-mining-empire/` | <http://localhost:8768/>（选择模式） |

## 运行方式

运行环境：Windows + Chrome / Edge + Python 3。

双击 `启动游戏.cmd`，脚本会启动本地服务并打开全部游戏页面。关闭启动器打开的终端窗口即可停止服务。

也可以手动运行：

```powershell
python -B server.py
```

游戏存档保存在浏览器本地存储中。请固定使用相同端口打开对应游戏，否则浏览器可能会将其识别为不同站点。

## 目录结构

```text
.
├─ yorg.io/                 # YORG.io 经典版
├─ yorg3.io/                # YORG.io 3
├─ idle-mining-empire/      # Idle Mining Empire
├─ server.py                # 本地静态服务器
├─ 启动游戏.cmd             # 一键启动脚本
├─ README.md
└─ README.txt
```

## Idle Mining Empire 离线双模式版

启动页面：<http://localhost:8768/>

- 普通模式：10 元开局，现金有限，保留完整经营流程和离线收益。
- 创造模式：同样从零开始，初始没有矿区、经理和额外升级。
- 创造模式中现金和闲置收入显示为 `∞`；购买矿区、雇佣经理、升级设备和解除障碍全部免费。
- 两种模式使用各自独立的浏览器本地存档，切换模式不会覆盖另一份进度。
- 已移除广告、统计、账号、支付和其他在线服务；奖励按钮直接在本地结算。
- 窄屏或竖屏窗口会自动加边并居中，保持游戏原始宽高比，不再横向压缩画面。
- 不额外添加游戏内悬浮面板，保持原游戏界面。

直接入口：

- 普通模式：<http://localhost:8768/game.html?mode=normal>
- 创造模式：<http://localhost:8768/game.html?mode=creative>

## 后续添加游戏

1. 在仓库根目录新建一个独立的游戏目录，例如 `new-game/`。
2. 在 `server.py` 中为新目录分配一个未使用的本地端口。
3. 在启动脚本和启动器说明中增加对应入口。

## 离线与安全说明

- 游戏只通过 `localhost` 访问，不向局域网开放。
- 已移除或停用不必要的在线、支付、账号、多人、排行榜、广告、云同步和社交功能。
- 当前端口为 `8766`、`8767`、`8768`，不恢复已占用的 `8765`。

## 版权

各游戏及素材版权归原作者所有。本仓库保存的是基于公开网页制作的个人离线版本，仅供学习、备份和个人离线使用，请勿用于商业传播。

原始站点：

- <https://yorg.io/>
- <https://yorg3.io/>
- <https://brainrotclicker.io/idle-mining-empire>
