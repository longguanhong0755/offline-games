# 离线网页游戏合集

这是一个集中存放可离线运行网页游戏的项目。当前共收录 **557 款**游戏，每款游戏使用独立子目录，由根目录的 `server.py` 读取 `games.json` 并提供本地静态服务。

## 运行方式

运行环境：Windows + Chrome / Edge + Python 3。

双击 `启动游戏.cmd`。启动器只启动本地服务并在终端打印全部地址，不会自动打开浏览器标签。选择需要的地址在浏览器中打开即可；关闭启动器终端窗口会停止服务。

也可以手动运行：

```powershell
python -B server.py
```

游戏存档保存在浏览器本地存储中。请固定使用相同端口打开对应游戏，否则浏览器可能会将其识别为不同站点。

## 特殊离线模式

### YORG.io 3

启动页面：<http://localhost:8767/>

- 生存模式：标准单机玩法，红色水晶和蓝色精华正常消耗。
- 创造模式：两种资源无限、瞬间建造、皮肤/地图/难度/成就/建筑升级全部解锁。
- 创造模式仍从零开局，不预置建筑或额外进度；不显示右下角创造模式悬浮面板。
- 游戏内快捷键：`T` 跳过一天、`P` 生成僵尸、`H` 清除僵尸、`J` 填满仓库、`K` 修复全部。
- “皮肤 & 商品店”和“成就”页保留本地可用内容，在线付款、广告、云同步和多人项目已移除。

### Idle Mining Empire

启动页面：<http://localhost:8768/>

- 普通模式：10 元开局，现金有限，保留完整经营流程和离线收益。
- 创造模式：同样从零开始，现金和闲置收入显示为 `∞`；购买矿区、雇佣经理、升级设备和解除障碍全部免费。
- 两种模式使用各自独立的浏览器本地存档，切换模式不会覆盖另一份进度。
- 已移除广告、统计、账号、支付和其他在线服务。
- 窄屏或竖屏窗口会自动加边居中，保持游戏原始宽高比。

## 游戏目录

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
| 20 | 1024 Moves | `gz-1024-moves/` | <http://localhost:9000/> |
| 21 | 16 Puzzle | `gz-16-puzzle/` | <http://localhost:9001/> |
| 22 | 2048 | `2048/` | <http://localhost:9002/> |
| 23 | 2048 Win | `gz-2048-win/` | <http://localhost:9003/> |
| 24 | 3D Snake | `gz-3d-snake/` | <http://localhost:9004/> |
| 25 | 8 Puzzle | `gz-8-puzzle/` | <http://localhost:9005/> |
| 26 | Adventure Game | `gz-adventure-game/` | <http://localhost:9006/> |
| 27 | Ai Chess Game | `gz-ai-chess-game/` | <http://localhost:9007/> |
| 28 | Airballoon | `gz-airballoon/` | <http://localhost:9008/> |
| 29 | Alien Invasion | `gz-alien-invasion/` | <http://localhost:9009/> |
| 30 | Alien Shooters | `gz-alien-shooters/` | <http://localhost:9010/> |
| 31 | Alphabet Learning Game | `gz-alphabet-learning-game/` | <http://localhost:9011/> |
| 32 | Anagram Checker Game | `gz-anagram-checker-game/` | <http://localhost:9012/> |
| 33 | Anagram Word Game | `gz-anagram--word-game/` | <http://localhost:9013/> |
| 34 | Angry Bird | `gz-angry-bird/` | <http://localhost:9014/> |
| 35 | Anime Clicker | `gz-anime-clicker/` | <http://localhost:9015/> |
| 36 | Ant Smasher | `gz-ant-smasher/` | <http://localhost:9016/> |
| 37 | Aquasort Game | `gz-aquasort-game/` | <http://localhost:9017/> |
| 38 | Arkanoid Game | `gz-arkanoid-game/` | <http://localhost:9018/> |
| 39 | Asteroids 3D | `gz-asteroids-3d/` | <http://localhost:9019/> |
| 40 | Astronaunt Runner | `gz-astronaunt-runner/` | <http://localhost:9020/> |
| 41 | Atari Breakout | `gz-atari-breakout/` | <http://localhost:9021/> |
| 42 | Atlas Game | `gz-atlas-game/` | <http://localhost:9022/> |
| 43 | Automated Rock Paper Scissor | `gz-automated-rock-paper-scissor/` | <http://localhost:9023/> |
| 44 | Avoider Game | `gz-avoider-game/` | <http://localhost:9024/> |
| 45 | Bad Depot | `gz-bad-depot/` | <http://localhost:9025/> |
| 46 | Bad Luck Brian | `gz-bad-luck-brian/` | <http://localhost:9026/> |
| 47 | Baghchal | `baghchal/` | <http://localhost:9027/> |
| 48 | Ball In Maze | `gz-ball-in-maze/` | <http://localhost:9028/> |
| 49 | Ball Shooting Game | `gz-ball-shooting-game/` | <http://localhost:9029/> |
| 50 | Balloon Buster | `gz-balloon-buster/` | <http://localhost:9030/> |
| 51 | Baseketball | `gz-baseketball/` | <http://localhost:9031/> |
| 52 | Bash Mole | `gz-bash-mole/` | <http://localhost:9032/> |
| 53 | Bear Hunter Ninja | `gz-bear-hunter-ninja/` | <http://localhost:9033/> |
| 54 | Beat A Mole | `gz-beat-a-mole/` | <http://localhost:9034/> |
| 55 | Beyonder | `gz-beyonder/` | <http://localhost:9035/> |
| 56 | Bird Game | `gz-bird-game/` | <http://localhost:9036/> |
| 57 | Black Hole Square | `black-hole-square/` | <http://localhost:9037/> |
| 58 | Black Jack | `gz-black-jack/` | <http://localhost:9038/> |
| 59 | Blackjackjs | `blackjackjs/` | <http://localhost:9039/> |
| 60 | Blast Zone | `gz-blast-zone/` | <http://localhost:9040/> |
| 61 | Blink Beat | `gz-blink-beat/` | <http://localhost:9041/> |
| 62 | Block Building | `gz-block-building/` | <http://localhost:9042/> |
| 63 | Block Buster | `gz-block-buster/` | <http://localhost:9043/> |
| 64 | Block Game | `gz-block-game/` | <http://localhost:9044/> |
| 65 | Block Ninja | `gz-block-ninja/` | <http://localhost:9045/> |
| 66 | Boom Blast | `gz-boom-blast/` | <http://localhost:9046/> |
| 67 | Bouncing Ball Game | `gz-bouncing-ball-game/` | <http://localhost:9047/> |
| 68 | Bow And Arrow | `gz-bow-and-arrow/` | <http://localhost:9048/> |
| 69 | Bow Arrow | `gz-bow-arrow/` | <http://localhost:9049/> |
| 70 | Brain Burst Game | `gz-brain-burst-game/` | <http://localhost:9050/> |
| 71 | Brain Card Game | `gz-brain-card-game/` | <http://localhost:9051/> |
| 72 | Brain Color Mastermind | `gz-brain-color-mastermind/` | <http://localhost:9052/> |
| 73 | Break Out Game | `break-out-game/` | <http://localhost:9053/> |
| 74 | Breakout | `gz-breakout/` | <http://localhost:9054/> |
| 75 | Brick And Ball | `gz-brick-and-ball/` | <http://localhost:9055/> |
| 76 | Brick Breaker | `gz-brick-breaker/` | <http://localhost:9056/> |
| 77 | Brick Buster | `gz-brick-buster/` | <http://localhost:9057/> |
| 78 | Building Block Game | `gz-building-block-game/` | <http://localhost:9058/> |
| 79 | Bullethell | `bullethell/` | <http://localhost:9059/> |
| 80 | Bulls And Cows | `gz-bulls-and-cows/` | <http://localhost:9060/> |
| 81 | Bulls Eye | `gz-bulls-eye/` | <http://localhost:9061/> |
| 82 | Bullseyegame | `gz-bullseyegame/` | <http://localhost:9062/> |
| 83 | Bunny Is Lost | `gz-bunny-is-lost/` | <http://localhost:9063/> |
| 84 | Cable Maze | `gz-cable-maze/` | <http://localhost:9064/> |
| 85 | Caesar Cipher | `gz-caesar-cipher/` | <http://localhost:9065/> |
| 86 | Candy Match Saga | `gz-candy-match-saga/` | <http://localhost:9066/> |
| 87 | Candybox | `candybox/` | <http://localhost:9067/> |
| 88 | Caretaker | `gz-caretaker/` | <http://localhost:9068/> |
| 89 | Cartoon Character Guessing Game | `gz-cartoon-character-guessing-game/` | <http://localhost:9069/> |
| 90 | Cast And Catch | `gz-cast-and-catch/` | <http://localhost:9070/> |
| 91 | Cat Goric | `gz-cat-goric/` | <http://localhost:9071/> |
| 92 | Catch Craze | `gz-catch-craze/` | <http://localhost:9072/> |
| 93 | Catch Him | `gz-catch-him/` | <http://localhost:9073/> |
| 94 | Catch Me Game | `gz-catch-me-game/` | <http://localhost:9074/> |
| 95 | Catch Stars | `gz-catch-stars/` | <http://localhost:9075/> |
| 96 | Catch The Ball | `gz-catch-the-ball/` | <http://localhost:9076/> |
| 97 | Catch The Bunny | `gz-catch-the-bunny/` | <http://localhost:9077/> |
| 98 | Catch The Falling Object | `gz-catch-the-falling-object/` | <http://localhost:9078/> |
| 99 | Catch The Falling Stars | `gz-catch-the-falling-stars/` | <http://localhost:9079/> |
| 100 | Catchtheball | `gz-catchtheball/` | <http://localhost:9080/> |
| 101 | Charon Jr | `gz-charon-jr/` | <http://localhost:9081/> |
| 102 | Chess Game | `gz-chess-game/` | <http://localhost:9082/> |
| 103 | Chess Game Computer | `gz-chess-game-computer/` | <http://localhost:9083/> |
| 104 | Chrome Dino Game | `gz-chrome-dino-game/` | <http://localhost:9084/> |
| 105 | Chrome Dinosaur Game | `gz-chrome-dinosaur-game/` | <http://localhost:9085/> |
| 106 | City Builder Game | `gz-city-builder-game/` | <http://localhost:9086/> |
| 107 | Click Circle | `gz-click-circle/` | <http://localhost:9087/> |
| 108 | Code Cracker | `gz-code-cracker/` | <http://localhost:9088/> |
| 109 | Color Blast | `gz-color-blast/` | <http://localhost:9089/> |
| 110 | Color Matcher | `gz-color-matcher/` | <http://localhost:9090/> |
| 111 | Color Shifter | `gz-color-shifter/` | <http://localhost:9091/> |
| 112 | Color Swap | `gz-color-swap/` | <http://localhost:9092/> |
| 113 | Color Switch Challenger | `gz-color-switch-challenger/` | <http://localhost:9093/> |
| 114 | Color The Page | `gz-color-the-page/` | <http://localhost:9094/> |
| 115 | Color Turner | `gz-color-turner/` | <http://localhost:9095/> |
| 116 | Colour Generator Game | `gz-colour-generator-game/` | <http://localhost:9096/> |
| 117 | Computer Bingo | `gz-computer-bingo/` | <http://localhost:9097/> |
| 118 | Connect Four | `gz-connect-four/` | <http://localhost:9098/> |
| 119 | Connect4 | `gz-connect4/` | <http://localhost:9099/> |
| 120 | Cooking Challenge Game | `gz-cooking-challenge-game/` | <http://localhost:9100/> |
| 121 | Corona Shooter | `gz-corona-shooter/` | <http://localhost:9101/> |
| 122 | Cosmic Blast | `gz-cosmic-blast/` | <http://localhost:9102/> |
| 123 | Cosmic Coin Collector | `gz-cosmic-coin-collector/` | <http://localhost:9103/> |
| 124 | Country Guesser Game | `gz-country-guesser-game/` | <http://localhost:9104/> |
| 125 | Crack The Code | `gz-crack-the-code/` | <http://localhost:9105/> |
| 126 | Cross The River Game | `gz-cross-the-river-game/` | <http://localhost:9106/> |
| 127 | Cross The Road | `gz-cross-the-road/` | <http://localhost:9107/> |
| 128 | Css Crossword | `gz-css-crossword/` | <http://localhost:9108/> |
| 129 | Css Select | `gz-css-select/` | <http://localhost:9109/> |
| 130 | Cubes2 | `cubes2/` | <http://localhost:9110/> |
| 131 | Dante | `gz-dante/` | <http://localhost:9111/> |
| 132 | Death By Hamster | `gz-death-by-hamster/` | <http://localhost:9112/> |
| 133 | Destroyer | `gz-destroyer/` | <http://localhost:9113/> |
| 134 | Diablo_Web | `diablo-web/` | <http://localhost:9114/> |
| 135 | Diamond Run | `gz-diamond-run/` | <http://localhost:9115/> |
| 136 | Dice Roller | `gz-dice-roller/` | <http://localhost:9116/> |
| 137 | Dinosaur Memory Game | `gz-dinosaur-memory-game/` | <http://localhost:9117/> |
| 138 | Dodge The Blocks | `gz-dodge-the-blocks/` | <http://localhost:9118/> |
| 139 | Doodle Draw | `gz-doodle-draw/` | <http://localhost:9119/> |
| 140 | Doremon Puzzle | `gz-doremon-puzzle/` | <http://localhost:9120/> |
| 141 | Dot Connect | `gz-dot-connect/` | <http://localhost:9121/> |
| 142 | Dot Dash | `gz-dot-dash/` | <http://localhost:9122/> |
| 143 | Drag And Drop Puzzle | `gz-drag-and-drop-puzzle/` | <http://localhost:9123/> |
| 144 | Dragon Tower | `gz-dragon-tower/` | <http://localhost:9124/> |
| 145 | Dragon World Game | `gz-dragon-world-game/` | <http://localhost:9125/> |
| 146 | Drawing App | `gz-drawing-app/` | <http://localhost:9126/> |
| 147 | Drawing Board | `drawing-board/` | <http://localhost:9127/> |
| 148 | Drum Kit | `gz-drum-kit/` | <http://localhost:9128/> |
| 149 | Drum Kit Game | `gz-drum-kit-game/` | <http://localhost:9129/> |
| 150 | Dsa Quiz Game | `gz-dsa-quiz-game/` | <http://localhost:9130/> |
| 151 | Duckhunt | `gz-duckhunt/` | <http://localhost:9131/> |
| 152 | Dungeon Crawler | `gz-dungeon-crawler/` | <http://localhost:9132/> |
| 153 | Earth Destroyer | `gz-earth-destroyer/` | <http://localhost:9133/> |
| 154 | Earth Guardian | `gz-earth-guardian/` | <http://localhost:9134/> |
| 155 | Elemental Riddles | `gz-elemental-riddles/` | <http://localhost:9135/> |
| 156 | Emoji Charades | `gz-emoji-charades/` | <http://localhost:9136/> |
| 157 | Emoji Intruder | `gz-emoji-intruder/` | <http://localhost:9137/> |
| 158 | Emoji Puzzle Game | `gz-emoji-puzzle-game/` | <http://localhost:9138/> |
| 159 | Emudevz | `emudevz/` | <http://localhost:9139/> |
| 160 | Escape | `gz-escape/` | <http://localhost:9140/> |
| 161 | Escaperoom | `gz-escaperoom/` | <http://localhost:9141/> |
| 162 | Etch A Sketch | `gz-etch-a-sketch/` | <http://localhost:9142/> |
| 163 | Everyones Sky | `gz-everyones-sky/` | <http://localhost:9143/> |
| 164 | Factors Game | `factors-game/` | <http://localhost:9144/> |
| 165 | Fall Down | `gz-fall-down/` | <http://localhost:9145/> |
| 166 | Falling Blocks | `gz-falling-blocks/` | <http://localhost:9146/> |
| 167 | Fidget Spinner Game | `gz-fidget-spinner-game/` | <http://localhost:9147/> |
| 168 | Fifteen_Puzzle_Maker | `fifteen-puzzle-maker/` | <http://localhost:9148/> |
| 169 | Find The Ball | `gz-find-the-ball/` | <http://localhost:9149/> |
| 170 | Flames Game | `gz-flames-game/` | <http://localhost:9150/> |
| 171 | Flappy Bird | `gz-flappy-bird/` | <http://localhost:9151/> |
| 172 | Flappy Bird Ai | `flappy-bird-ai/` | <http://localhost:9152/> |
| 173 | Flip Card Game | `gz-flip-card-game/` | <http://localhost:9153/> |
| 174 | Flip Coin | `gz-flip-coin/` | <http://localhost:9154/> |
| 175 | Foosball | `gz-foosball/` | <http://localhost:9155/> |
| 176 | Forgotten Hill The Wardrobe 3 | `forgotten-hill-the-wardrobe-3/` | <http://localhost:9156/> |
| 177 | Four In Row | `gz-four-in-row/` | <http://localhost:9157/> |
| 178 | Free Bird | `gz-free-bird/` | <http://localhost:9158/> |
| 179 | Fruit Catching Game | `gz-fruit-catching-game/` | <http://localhost:9159/> |
| 180 | Fruit Ninja | `gz-fruit-ninja/` | <http://localhost:9160/> |
| 181 | Fruitcatcher | `gz-fruitcatcher/` | <http://localhost:9161/> |
| 182 | Fruity Fortune | `gz-fruity-fortune/` | <http://localhost:9162/> |
| 183 | Funny Travelling Airport | `funny-travelling-airport/` | <http://localhost:9163/> |
| 184 | Galaxy Rider | `gz-galaxy-rider/` | <http://localhost:9164/> |
| 185 | Game Box | `game-box/` | <http://localhost:9165/> |
| 186 | Ganesh Qr Maker | `gz-ganesh-qr-maker/` | <http://localhost:9166/> |
| 187 | Get The Pigeon | `gz-get-the-pigeon/` | <http://localhost:9167/> |
| 188 | Ghost Busting Game | `gz-ghost-busting-game/` | <http://localhost:9168/> |
| 189 | Ghost Surf | `gz-ghost-surf/` | <http://localhost:9169/> |
| 190 | Gita Shloka Generator | `gz-gita-shloka-generator/` | <http://localhost:9170/> |
| 191 | Glitch Buster | `gz-glitch-buster/` | <http://localhost:9171/> |
| 192 | Goal Rush | `gz-goal-rush/` | <http://localhost:9172/> |
| 193 | Gofish | `gz-gofish/` | <http://localhost:9173/> |
| 194 | Gravity Simulation Game | `gz-gravity-simulation-game/` | <http://localhost:9174/> |
| 195 | Guess Game | `guess-game/` | <http://localhost:9175/> |
| 196 | Guess The Ball | `gz-guess-the-ball/` | <http://localhost:9176/> |
| 197 | Guess The Celeb | `gz-guess-the-celeb/` | <http://localhost:9177/> |
| 198 | Guess The Correct Logo | `gz-guess-the-correct-logo/` | <http://localhost:9178/> |
| 199 | Guess The Friends Name | `gz-guess-the-friends-name/` | <http://localhost:9179/> |
| 200 | Guess The Number | `gz-guess-the-number/` | <http://localhost:9180/> |
| 201 | Guess The Song | `gz-guess-the-song/` | <http://localhost:9181/> |
| 202 | Guess The Weapon | `gz-guess-the-weapon/` | <http://localhost:9182/> |
| 203 | Guess Who | `gz-guess-who/` | <http://localhost:9183/> |
| 204 | Hand Cricket | `gz-hand-cricket/` | <http://localhost:9184/> |
| 205 | Hangman | `gz-hangman/` | <http://localhost:9185/> |
| 206 | Hangman Game | `gz-hangman-game/` | <http://localhost:9186/> |
| 207 | Harmony Mixer | `gz-harmony-mixer/` | <http://localhost:9187/> |
| 208 | Hexsweep Game | `gz-hexsweep-game/` | <http://localhost:9188/> |
| 209 | Hide And Seek | `gz-hide-and-seek/` | <http://localhost:9189/> |
| 210 | Highway 404 | `gz-highway-404/` | <http://localhost:9190/> |
| 211 | Highway Race | `gz-highway-race/` | <http://localhost:9191/> |
| 212 | Hit Target | `gz-hit-target/` | <http://localhost:9192/> |
| 213 | Hit The Hamster | `gz-hit-the-hamster/` | <http://localhost:9193/> |
| 214 | Hitormiss | `gz-hitormiss/` | <http://localhost:9194/> |
| 215 | Hityourfriend | `gz-hityourfriend/` | <http://localhost:9195/> |
| 216 | Hold The Cloud | `gz-hold-the-cloud/` | <http://localhost:9196/> |
| 217 | Horse Racing Game Javascript | `horse-racing-game-javascript/` | <http://localhost:9197/> |
| 218 | Html5 Controller Tester | `gz-html5-controller-tester/` | <http://localhost:9198/> |
| 219 | I Want To Google The Game | `gz-i-want-to-google-the-game/` | <http://localhost:9199/> |
| 220 | Iknowyou Mind Reading Game | `gz-iknowyou-mind-reading-game/` | <http://localhost:9200/> |
| 221 | Infernal Throne | `gz-infernal-throne/` | <http://localhost:9201/> |
| 222 | Infinite Runner Game | `gz-infinite-runner-game/` | <http://localhost:9202/> |
| 223 | Intellect Quest | `gz-intellect-quest/` | <http://localhost:9203/> |
| 224 | Interactive Quizzing | `gz-interactive-quizzing/` | <http://localhost:9204/> |
| 225 | Javascript Roulette | `javascript-roulette/` | <http://localhost:9205/> |
| 226 | Johnny Smiter | `gz-johnny-smiter/` | <http://localhost:9206/> |
| 227 | Junojs | `gz-junojs/` | <http://localhost:9207/> |
| 228 | Keyboard Hero | `gz-keyboard-hero/` | <http://localhost:9208/> |
| 229 | Keysymphony | `gz-keysymphony/` | <http://localhost:9209/> |
| 230 | Kill The Bird | `gz-kill-the-bird/` | <http://localhost:9210/> |
| 231 | King Of Pirates Quiz | `gz-king-of-pirates-quiz/` | <http://localhost:9211/> |
| 232 | Labyrinth | `gz-labyrinth/` | <http://localhost:9212/> |
| 233 | Labyrinth | `labyrinth/` | <http://localhost:9213/> |
| 234 | Lamb Lane | `gz-lamb-lane/` | <http://localhost:9214/> |
| 235 | Laserdarts | `gz-laserdarts/` | <http://localhost:9215/> |
| 236 | Letter Sleuth | `gz-letter-sleuth/` | <http://localhost:9216/> |
| 237 | Lighthouse | `gz-lighthouse/` | <http://localhost:9217/> |
| 238 | Little Red Game | `gz-little-red-game/` | <http://localhost:9218/> |
| 239 | Lol2D Ver1 | `lol2d-ver1/` | <http://localhost:9219/> |
| 240 | Lost In The Maze 3D | `gz-lost-in-the-maze-3d/` | <http://localhost:9220/> |
| 241 | Love Calculator Game | `gz-love-calculator-game/` | <http://localhost:9221/> |
| 242 | Love Result Predictor | `gz-love-result-predictor/` | <http://localhost:9222/> |
| 243 | Lunar Lander | `gz-lunar-lander/` | <http://localhost:9223/> |
| 244 | Madlibs | `gz-madlibs/` | <http://localhost:9224/> |
| 245 | Magic Square | `gz-magic-square/` | <http://localhost:9225/> |
| 246 | Make Me Laugh | `gz-make-me-laugh/` | <http://localhost:9226/> |
| 247 | Mamba Mayhem | `gz-mamba-mayhem/` | <http://localhost:9227/> |
| 248 | Mancala Game | `gz-mancala-game/` | <http://localhost:9228/> |
| 249 | Mario Game | `gz-mario-game/` | <http://localhost:9229/> |
| 250 | Mario Matching Game | `gz-mario-matching-game/` | <http://localhost:9230/> |
| 251 | Mastemind | `gz-mastemind/` | <http://localhost:9231/> |
| 252 | Matching Pair | `gz-matching-pair/` | <http://localhost:9232/> |
| 253 | Math Game | `gz-math-game/` | <http://localhost:9233/> |
| 254 | Math Race Game | `gz-math-race-game/` | <http://localhost:9234/> |
| 255 | Mathquiz | `gz-mathquiz/` | <http://localhost:9235/> |
| 256 | Maths Sprint Game | `gz-maths-sprint-game/` | <http://localhost:9236/> |
| 257 | Max and Mink | `max-and-mink-play-online-for-free-poki/` | <http://localhost:9237/> |
| 258 | Maximiseboxes | `gz-maximiseboxes/` | <http://localhost:9238/> |
| 259 | Maze Game | `gz-maze-game/` | <http://localhost:9239/> |
| 260 | Maze Of Cables | `gz-maze-of-cables/` | <http://localhost:9240/> |
| 261 | Maze Runner | `gz-maze-runner/` | <http://localhost:9241/> |
| 262 | Mazegame | `gz-mazegame/` | <http://localhost:9242/> |
| 263 | Mazerunner | `gz-mazerunner/` | <http://localhost:9243/> |
| 264 | Memorization Card | `gz-memorization-card/` | <http://localhost:9244/> |
| 265 | Memory Cards Game | `gz-memory-cards-game/` | <http://localhost:9245/> |
| 266 | Memory Flip | `gz-memory-flip/` | <http://localhost:9246/> |
| 267 | Memory Game | `gz-memory-game/` | <http://localhost:9247/> |
| 268 | Memory Matching Game | `gz-memory-matching-game/` | <http://localhost:9248/> |
| 269 | Menja | `gz-menja/` | <http://localhost:9249/> |
| 270 | Menja Block Breaker | `gz-menja-block-breaker/` | <http://localhost:9250/> |
| 271 | Minesweeper | `gz-minesweeper/` | <http://localhost:9251/> |
| 272 | Minesweeper Easy | `gz-minesweeper-easy/` | <http://localhost:9252/> |
| 273 | Modulo Game | `gz-modulo-game/` | <http://localhost:9253/> |
| 274 | Morse Code Generator | `gz-morse-code-generator/` | <http://localhost:9254/> |
| 275 | Movie Guessing Game | `gz-movie-guessing-game/` | <http://localhost:9255/> |
| 276 | Mrfakegame | `gz-mrfakegame/` | <http://localhost:9256/> |
| 277 | Music Guess Game | `gz-music-guess-game/` | <http://localhost:9257/> |
| 278 | Musical Floor | `gz-musical-floor/` | <http://localhost:9258/> |
| 279 | Musical Memory | `gz-musical-memory/` | <http://localhost:9259/> |
| 280 | My Mine Sweeper | `gz-my-mine-sweeper/` | <http://localhost:9260/> |
| 281 | Norman The Necromancer | `gz-norman-the-necromancer/` | <http://localhost:9261/> |
| 282 | Noughts And Crosses | `gz-noughts-and-crosses/` | <http://localhost:9262/> |
| 283 | Numeral Whiz | `gz-numeral-whiz/` | <http://localhost:9263/> |
| 284 | Observe The Cloud | `gz-observe-the-cloud/` | <http://localhost:9264/> |
| 285 | Oh Flip | `gz-oh-flip/` | <http://localhost:9265/> |
| 286 | Omf 2097 Remastered | `omf-2097-remastered/` | <http://localhost:9266/> |
| 287 | Operation Ironhold | `operation-ironhold/` | <http://localhost:9267/> |
| 288 | Othello | `gz-othello/` | <http://localhost:9268/> |
| 289 | Otherworldly Odyssey | `gz-otherworldly-odyssey/` | <http://localhost:9269/> |
| 290 | Pac Fpom | `pac-fpom/` | <http://localhost:9270/> |
| 291 | Pacific Air Battle | `gz-pacific-air-battle/` | <http://localhost:9271/> |
| 292 | Packabunchas | `gz-packabunchas/` | <http://localhost:9272/> |
| 293 | Pacman Game | `pacman-game/` | <http://localhost:9273/> |
| 294 | Path Finder | `gz-path-finder/` | <http://localhost:9274/> |
| 295 | Pattern Creation Game | `gz-pattern-creation-game/` | <http://localhost:9275/> |
| 296 | Penalty Shootout Game | `gz-penalty-shootout-game/` | <http://localhost:9276/> |
| 297 | Pendulum | `pendulum/` | <http://localhost:9277/> |
| 298 | Penpointerfight | `gz-penpointerfight/` | <http://localhost:9278/> |
| 299 | Piano | `gz-piano/` | <http://localhost:9279/> |
| 300 | Pianotiles Game | `gz-pianotiles-game/` | <http://localhost:9280/> |
| 301 | Pictionary Game | `gz-pictionary-game/` | <http://localhost:9281/> |
| 302 | Pinball | `gz-pinball/` | <http://localhost:9282/> |
| 303 | Ping Pong Multiplayer | `gz-ping-pong-multiplayer/` | <http://localhost:9283/> |
| 304 | Pixel Painter | `gz-pixel-painter/` | <http://localhost:9284/> |
| 305 | Pixel Smash | `gz-pixel-smash/` | <http://localhost:9285/> |
| 306 | Pixels From Space | `gz-pixels-from-space/` | <http://localhost:9286/> |
| 307 | Planet Game | `gz-planet-game/` | <http://localhost:9287/> |
| 308 | Plankman | `gz-plankman/` | <http://localhost:9288/> |
| 309 | Platform Game | `gz-platform-game/` | <http://localhost:9289/> |
| 310 | Pokemon Ball Finder | `gz-pokemon-ball-finder/` | <http://localhost:9290/> |
| 311 | Pokemon Stats Card | `gz-pokemon-stats-card/` | <http://localhost:9291/> |
| 312 | Poker Dice | `gz-poker-dice/` | <http://localhost:9292/> |
| 313 | Pong | `gz-pong/` | <http://localhost:9293/> |
| 314 | Pong Ecsy | `pong-ecsy/` | <http://localhost:9294/> |
| 315 | Pop The Bubbles | `gz-pop-the-bubbles/` | <http://localhost:9295/> |
| 316 | Puzzel Winner | `gz-puzzel-winner/` | <http://localhost:9296/> |
| 317 | Puzzle Game | `gz-puzzle-game/` | <http://localhost:9297/> |
| 318 | Quick Click | `gz-quick-click/` | <http://localhost:9298/> |
| 319 | Quick Math | `gz-quick-math/` | <http://localhost:9299/> |
| 320 | Quickfingers | `gz-quickfingers/` | <http://localhost:9300/> |
| 321 | Quiz Game | `gz-quiz-game/` | <http://localhost:9301/> |
| 322 | Quiz It Out | `gz-quiz-it-out/` | <http://localhost:9302/> |
| 323 | Quizify | `gz-quizify/` | <http://localhost:9303/> |
| 324 | Quizzapp | `gz-quizzapp/` | <http://localhost:9304/> |
| 325 | Random Advice Generator | `gz-random-advice-generator/` | <http://localhost:9305/> |
| 326 | Random Joke Generator | `gz-random-joke-generator/` | <http://localhost:9306/> |
| 327 | Reaction Teaser | `gz-reaction-teaser/` | <http://localhost:9307/> |
| 328 | Reaction Time | `gz-reaction-time/` | <http://localhost:9308/> |
| 329 | Recognizing Figures | `gz-recognizing-figures/` | <http://localhost:9309/> |
| 330 | Rectangular | `gz-rectangular/` | <http://localhost:9310/> |
| 331 | Reflex Game | `gz-reflex-game/` | <http://localhost:9311/> |
| 332 | Remember The Color | `gz-remember-the-color/` | <http://localhost:9312/> |
| 333 | Response Reaction | `gz-response-reaction/` | <http://localhost:9313/> |
| 334 | Retro Dungeon Puzzle | `gz-retro-dungeon-puzzle/` | <http://localhost:9314/> |
| 335 | Reverse Memory | `gz-reverse-memory/` | <http://localhost:9315/> |
| 336 | Riddle Game | `gz-riddle-game/` | <http://localhost:9316/> |
| 337 | Riddle Room | `gz-riddle-room/` | <http://localhost:9317/> |
| 338 | Risky Nav | `gz-risky-nav/` | <http://localhost:9318/> |
| 339 | Rock Paper Scissor | `gz-rock-paper-scissor/` | <http://localhost:9319/> |
| 340 | Rock Paper Scissors | `gz-rock-paper-scissors/` | <http://localhost:9320/> |
| 341 | Rock Paper Scissors Lizard Spock | `gz-rock-paper-scissors-lizard-spock/` | <http://localhost:9321/> |
| 342 | Rocket Ride | `gz-rocket-ride/` | <http://localhost:9322/> |
| 343 | Rocket Shooter | `gz-rocket-shooter/` | <http://localhost:9323/> |
| 344 | Rocket Showdown | `gz-rocket-showdown/` | <http://localhost:9324/> |
| 345 | Roulette | `gz-roulette/` | <http://localhost:9325/> |
| 346 | Rubik'S Solver | `gz-rubiks-solver/` | <http://localhost:9326/> |
| 347 | Run Dora Run | `gz-run-dora-run/` | <http://localhost:9327/> |
| 348 | Samurai Fighting Game | `gz-samurai-fighting-game/` | <http://localhost:9328/> |
| 349 | Save Princess | `gz-save-princess/` | <http://localhost:9329/> |
| 350 | Save The Forest | `gz-save-the-forest/` | <http://localhost:9330/> |
| 351 | Sciarra Of Colors | `gz-sciarra-of-colors/` | <http://localhost:9331/> |
| 352 | Scifi Alchemy | `gz-scifi-alchemy/` | <http://localhost:9332/> |
| 353 | Screen Pet Game | `gz-screen-pet-game/` | <http://localhost:9333/> |
| 354 | Scrollzz | `scrollzz/` | <http://localhost:9334/> |
| 355 | Shadow Pokeguess | `gz-shadow-pokeguess/` | <http://localhost:9335/> |
| 356 | Shape Blocks | `gz-shape-blocks/` | <http://localhost:9336/> |
| 357 | Shoot The Balloon | `gz-shoot-the-balloon/` | <http://localhost:9337/> |
| 358 | Short Circuit | `gz-short-circuit/` | <http://localhost:9338/> |
| 359 | Shpere | `gz-shpere/` | <http://localhost:9339/> |
| 360 | Shroomknight | `gz-shroomknight/` | <http://localhost:9340/> |
| 361 | Simon Game Challenge | `gz-simon-game-challenge/` | <http://localhost:9341/> |
| 362 | Single Player Solitaire | `gz-single-player-solitaire/` | <http://localhost:9342/> |
| 363 | Sky Dodge | `gz-sky-dodge/` | <http://localhost:9343/> |
| 364 | Slice Storm | `gz-slice-storm/` | <http://localhost:9344/> |
| 365 | Slide Master Puzzle | `gz-slide-master-puzzle/` | <http://localhost:9345/> |
| 366 | Slide Puzzle | `gz-slide-puzzle/` | <http://localhost:9346/> |
| 367 | Sliding Puzzle | `gz-sliding-puzzle/` | <http://localhost:9347/> |
| 368 | Slime Attack Game | `gz-slime-attack-game/` | <http://localhost:9348/> |
| 369 | Slotjs | `slotjs/` | <http://localhost:9349/> |
| 370 | Smashing Blocks | `gz-smashing-blocks/` | <http://localhost:9350/> |
| 371 | Snail Game | `gz-snail-game/` | <http://localhost:9351/> |
| 372 | Snake | `gz-snake/` | <http://localhost:9352/> |
| 373 | Snake Game | `snake-game/` | <http://localhost:9353/> |
| 374 | Snake Game 2D | `snake-game-2d/` | <http://localhost:9354/> |
| 375 | Snake Game P5 | `snake-game-p5/` | <http://localhost:9355/> |
| 376 | Snake Gun Water | `gz-snake-gun-water/` | <http://localhost:9356/> |
| 377 | Snake Ladder | `gz-snake-ladder/` | <http://localhost:9357/> |
| 378 | Snake Vue3 | `snake-vue3/` | <http://localhost:9358/> |
| 379 | Snake Water Gun | `gz-snake-water-gun/` | <http://localhost:9359/> |
| 380 | Snake.Io | `snake-io/` | <http://localhost:9360/> |
| 381 | Snooze | `gz-snooze/` | <http://localhost:9361/> |
| 382 | Snowball2 | `snowball2/` | <http://localhost:9362/> |
| 383 | Snowboarder | `snowboarder/` | <http://localhost:9363/> |
| 384 | Snowling | `snowling/` | <http://localhost:9364/> |
| 385 | Soccer | `gz-soccer/` | <http://localhost:9365/> |
| 386 | Solitaire | `gz-solitaire/` | <http://localhost:9366/> |
| 387 | Sonic The Hedgehog | `gz-sonic-the-hedgehog/` | <http://localhost:9367/> |
| 388 | Space Dominators | `gz-space-dominators/` | <http://localhost:9368/> |
| 389 | Space Drifter | `gz-space-drifter/` | <http://localhost:9369/> |
| 390 | Space Explorer | `gz-space-explorer/` | <http://localhost:9370/> |
| 391 | Space Gun | `gz-space-gun/` | <http://localhost:9371/> |
| 392 | Space Huggers | `gz-space-huggers/` | <http://localhost:9372/> |
| 393 | Space Invaders | `gz-space-invaders/` | <http://localhost:9373/> |
| 394 | Space War | `gz-space-war/` | <http://localhost:9374/> |
| 395 | Spaceducts | `gz-spaceducts/` | <http://localhost:9375/> |
| 396 | Spacehuggers | `spacehuggers/` | <http://localhost:9376/> |
| 397 | Spaceminer | `spaceminer/` | <http://localhost:9377/> |
| 398 | Spacepi | `gz-spacepi/` | <http://localhost:9378/> |
| 399 | Spelling Bee | `gz-spelling-bee/` | <http://localhost:9379/> |
| 400 | Spirograph | `gz-spirograph/` | <http://localhost:9380/> |
| 401 | Squared Lines | `gz-squared-lines/` | <http://localhost:9381/> |
| 402 | Squashing Your Enemy | `gz-squashing-your-enemy/` | <http://localhost:9382/> |
| 403 | Star Trek Trivia | `gz-star-trek-trivia/` | <http://localhost:9383/> |
| 404 | Steam Punk | `gz-steam-punk/` | <http://localhost:9384/> |
| 405 | Steampunk Flappybird | `gz-steampunk-flappybird/` | <http://localhost:9385/> |
| 406 | Stolen Sword | `gz-stolen-sword/` | <http://localhost:9386/> |
| 407 | Stone Paper Scissor | `gz-stone-paper-scissor/` | <http://localhost:9387/> |
| 408 | Subway Surfers | `gz-subway-surfers/` | <http://localhost:9388/> |
| 409 | Sudoku | `gz-sudoku/` | <http://localhost:9389/> |
| 410 | Sudoku Light Theme | `gz-sudoku-light-theme/` | <http://localhost:9390/> |
| 411 | Super Mario Run | `gz-super-mario-run/` | <http://localhost:9391/> |
| 412 | Supercold | `supercold/` | <http://localhost:9392/> |
| 413 | Swift | `gz-swift/` | <http://localhost:9393/> |
| 414 | Taptaptap | `taptaptap/` | <http://localhost:9394/> |
| 415 | Target Torrent | `gz-target-torrent/` | <http://localhost:9395/> |
| 416 | Tech Memory Block | `gz-tech-memory-block/` | <http://localhost:9396/> |
| 417 | Technical Mind Game | `gz-technical-mind-game/` | <http://localhost:9397/> |
| 418 | Tenacity | `gz-tenacity/` | <http://localhost:9398/> |
| 419 | Tennis | `gz-tennis/` | <http://localhost:9399/> |
| 420 | The Labyrinth Of Death | `gz-the-labyrinth-of-death/` | <http://localhost:9400/> |
| 421 | The Last Spartan | `gz-the-last-spartan/` | <http://localhost:9401/> |
| 422 | The Raising Fighting Spirits | `gz-the-raising-fighting-spirits/` | <http://localhost:9402/> |
| 423 | Thirteen | `gz-thirteen/` | <http://localhost:9403/> |
| 424 | Tic Tac Toe | `gz-tic-tac-toe/` | <http://localhost:9404/> |
| 425 | Tic Tac Toe Game | `gz-tic-tac-toe-game/` | <http://localhost:9405/> |
| 426 | Tic Tac Toe Neon | `gz-tic-tac-toe-neon/` | <http://localhost:9406/> |
| 427 | Tile Game | `gz-tile-game/` | <http://localhost:9407/> |
| 428 | Tilting Maze | `gz-tilting-maze/` | <http://localhost:9408/> |
| 429 | Timber Terry | `gz-timber-terry/` | <http://localhost:9409/> |
| 430 | Tinker Jump Master | `gz-tinker-jump-master/` | <http://localhost:9410/> |
| 431 | Tjmj | `tjmj/` | <http://localhost:9411/> |
| 432 | Touch No Fire Game | `gz-touch-no-fire-game/` | <http://localhost:9412/> |
| 433 | Touch The Ball | `gz-touch-the-ball/` | <http://localhost:9413/> |
| 434 | Tower Block Game | `gz-tower-block-game/` | <http://localhost:9414/> |
| 435 | Tower Blocks | `gz-tower-blocks/` | <http://localhost:9415/> |
| 436 | Tower Defence Game | `gz-tower-defence-game/` | <http://localhost:9416/> |
| 437 | Tower Defense | `gz-tower-defense/` | <http://localhost:9417/> |
| 438 | Tower Of Hanoi | `gz-tower-of-hanoi/` | <http://localhost:9418/> |
| 439 | Tower Stack | `gz-tower-stack/` | <http://localhost:9419/> |
| 440 | Traffic Run | `gz-traffic-run/` | <http://localhost:9420/> |
| 441 | Trashem | `gz-trashem/` | <http://localhost:9421/> |
| 442 | Treasure Hunt | `gz-treasure-hunt/` | <http://localhost:9422/> |
| 443 | Trex Run | `gz-trex-run/` | <http://localhost:9423/> |
| 444 | Triangle Back To Home | `gz-triangle-back-to-home/` | <http://localhost:9424/> |
| 445 | Trihand Tactics | `gz-trihand-tactics/` | <http://localhost:9425/> |
| 446 | Trio Match | `gz-trio-match/` | <http://localhost:9426/> |
| 447 | Truth And Dare | `gz-truth-and-dare/` | <http://localhost:9427/> |
| 448 | Turn On The Light | `gz-turn-on-the-light/` | <http://localhost:9428/> |
| 449 | Tuxocide | `tuxocide/` | <http://localhost:9429/> |
| 450 | Typing Game | `gz-typing-game/` | <http://localhost:9430/> |
| 451 | Typing Speed Test Game | `gz-typing-speed-test-game/` | <http://localhost:9431/> |
| 452 | Typing Speed Test2 | `gz-typing-speed-test2/` | <http://localhost:9432/> |
| 453 | Ultimate Football Manager | `gz-ultimate-football-manager/` | <http://localhost:9433/> |
| 454 | Unlock The Lock | `gz-unlock-the-lock/` | <http://localhost:9434/> |
| 455 | Uno Game With Computer | `gz-uno-game-with-computer/` | <http://localhost:9435/> |
| 456 | Uxu | `gz-uxu/` | <http://localhost:9436/> |
| 457 | Virtual Pet | `gz-virtual-pet/` | <http://localhost:9437/> |
| 458 | Vlackjack | `vlackjack/` | <http://localhost:9438/> |
| 459 | Wault Master | `gz-wault-master/` | <http://localhost:9439/> |
| 460 | Whack A Mole | `gz-whack-a-mole/` | <http://localhost:9440/> |
| 461 | Whack A Mole Mario Version | `gz-whack-a-mole-mario-version/` | <http://localhost:9441/> |
| 462 | Wheel Of Fortune | `gz-wheel-of-fortune/` | <http://localhost:9442/> |
| 463 | Wheel Of Fortunes | `gz-wheel-of-fortunes/` | <http://localhost:9443/> |
| 464 | Which Color | `gz-which-color/` | <http://localhost:9444/> |
| 465 | Wildcard Bonanza | `gz-wildcard-bonanza/` | <http://localhost:9445/> |
| 466 | Witty Word Quest | `gz-witty-word-quest/` | <http://localhost:9446/> |
| 467 | Word Association | `gz-word-association/` | <http://localhost:9447/> |
| 468 | Word Association Game | `gz-word-association-game/` | <http://localhost:9448/> |
| 469 | Word Beater | `word-beater/` | <http://localhost:9449/> |
| 470 | Word Blitz | `gz-word-blitz/` | <http://localhost:9450/> |
| 471 | Word Peaks | `word-peaks/` | <http://localhost:9451/> |
| 472 | Wordchain | `gz-wordchain/` | <http://localhost:9452/> |
| 473 | Wordled | `wordled/` | <http://localhost:9453/> |
| 474 | Wordscramble | `gz-wordscramble/` | <http://localhost:9454/> |
| 475 | Wordsprint | `gz-wordsprint/` | <http://localhost:9455/> |
| 476 | Xonix Js | `xonix-js/` | <http://localhost:9456/> |
| 477 | Zombie Shooter | `gz-zombie-shooter/` | <http://localhost:9457/> |
| 478 | Zurbo | `gz-zurbo/` | <http://localhost:9458/> |
| 479 | Aaagario | `aaagario/` | <http://localhost:9459/> |
| 480 | Afterglow | `afterglow/` | <http://localhost:9460/> |
| 481 | Alwaysfreshaqua | `alwaysfreshaqua/` | <http://localhost:9461/> |
| 482 | Anno2018 | `anno2018/` | <http://localhost:9462/> |
| 483 | Ball Game | `ball-game/` | <http://localhost:9463/> |
| 484 | Binding Of Isaac Webgame | `binding-of-isaac-webgame/` | <http://localhost:9464/> |
| 485 | Bitcoin Clicker | `bitcoin-clicker/` | <http://localhost:9465/> |
| 486 | Blockcatcher | `blockcatcher/` | <http://localhost:9466/> |
| 487 | Candyclicker Web | `candyclicker-web/` | <http://localhost:9467/> |
| 488 | Canvas Td | `canvas-td/` | <http://localhost:9468/> |
| 489 | Chain Drop Lab | `chain-drop-lab/` | <http://localhost:9469/> |
| 490 | Chromacoil | `chromacoil/` | <http://localhost:9470/> |
| 491 | Clickerultimate.Github.Io | `clickerultimate-github-io/` | <http://localhost:9471/> |
| 492 | Contra Remake | `contra-remake/` | <http://localhost:9472/> |
| 493 | Crossy Road | `crossy-road/` | <http://localhost:9473/> |
| 494 | Cube Composer | `cube-composer/` | <http://localhost:9474/> |
| 495 | Cursorball | `cursorball/` | <http://localhost:9475/> |
| 496 | Dogeminerce | `dogeminerce/` | <http://localhost:9476/> |
| 497 | Drone Simulator | `drone-simulator/` | <http://localhost:9477/> |
| 498 | Eightqueens | `eightqueens/` | <http://localhost:9478/> |
| 499 | Fazenda Inteligente Cbr | `fazenda-inteligente-cbr/` | <http://localhost:9479/> |
| 500 | Flopsed | `flopsed/` | <http://localhost:9480/> |
| 501 | Frogmania | `frogmania/` | <http://localhost:9481/> |
| 502 | Gddemo | `gddemo/` | <http://localhost:9482/> |
| 503 | Giantshaftenterprises | `giantshaftenterprises/` | <http://localhost:9483/> |
| 504 | Glorr | `glorr/` | <http://localhost:9484/> |
| 505 | Google Chrome Dino | `google-chrome-dino/` | <http://localhost:9485/> |
| 506 | Gravitywell | `gravitywell/` | <http://localhost:9486/> |
| 507 | Gta Vice City Wasm | `gta-vice-city-wasm/` | <http://localhost:9487/> |
| 508 | Hexsweep | `hexsweep/` | <http://localhost:9488/> |
| 509 | Hormuz Minesweeper | `hormuz-minesweeper/` | <http://localhost:9489/> |
| 510 | Idle Traveller | `idle-traveller/` | <http://localhost:9490/> |
| 511 | Incremental V2.0.0 | `incremental-v2-0-0/` | <http://localhost:9491/> |
| 512 | Inert | `inert/` | <http://localhost:9492/> |
| 513 | Invaders | `invaders/` | <http://localhost:9493/> |
| 514 | Isocitysim | `isocitysim/` | <http://localhost:9494/> |
| 515 | Js Hero | `js-hero/` | <http://localhost:9495/> |
| 516 | Konterball | `konterball/` | <http://localhost:9496/> |
| 517 | Librecorsa | `librecorsa/` | <http://localhost:9497/> |
| 518 | Maimai Restaurant Huiyan | `maimai-restaurant-huiyan/` | <http://localhost:9498/> |
| 519 | Material Snake | `material-snake/` | <http://localhost:9499/> |
| 520 | Mazebert Simulation | `mazebert-simulation/` | <http://localhost:9500/> |
| 521 | Mineworld | `mineworld/` | <http://localhost:9501/> |
| 522 | Neon Mayhem | `neon-mayhem/` | <http://localhost:9502/> |
| 523 | Neon Serpent | `neon-serpent/` | <http://localhost:9503/> |
| 524 | Ngx Snake | `ngx-snake/` | <http://localhost:9504/> |
| 525 | Parachuting Robots | `parachuting-robots/` | <http://localhost:9505/> |
| 526 | Pawpaw Arena | `pawpaw-arena/` | <http://localhost:9506/> |
| 527 | Petripals | `petripals/` | <http://localhost:9507/> |
| 528 | Phaser Catch The Cat | `phaser-catch-the-cat/` | <http://localhost:9508/> |
| 529 | Ping Pong Game | `ping-pong-game/` | <http://localhost:9509/> |
| 530 | Pk2 | `pk2/` | <http://localhost:9510/> |
| 531 | Quick Dungeon Crawler Rpg Od | `quick-dungeon-crawler-rpg-od/` | <http://localhost:9511/> |
| 532 | Quickclick | `quickclick/` | <http://localhost:9512/> |
| 533 | Rbg | `rbg/` | <http://localhost:9513/> |
| 534 | Retroflightsim | `retroflightsim/` | <http://localhost:9514/> |
| 535 | Roguelike Idle | `roguelike-idle/` | <http://localhost:9515/> |
| 536 | Rubiks Cube | `rubiks-cube/` | <http://localhost:9516/> |
| 537 | Server Survival | `server-survival/` | <http://localhost:9517/> |
| 538 | Snack Hole Game | `snack-hole-game/` | <http://localhost:9518/> |
| 539 | Snake Remake | `snake-remake/` | <http://localhost:9519/> |
| 540 | Snakeball | `snakeball/` | <http://localhost:9520/> |
| 541 | Sokoban | `sokoban/` | <http://localhost:9521/> |
| 542 | Stalker Clicker | `stalker-clicker/` | <http://localhost:9522/> |
| 543 | Star Battle | `star-battle/` | <http://localhost:9523/> |
| 544 | Summer Cycle | `summer-cycle/` | <http://localhost:9524/> |
| 545 | Tactix Mind Game | `tactix-mind-game/` | <http://localhost:9525/> |
| 546 | Territory Clash | `territory-clash/` | <http://localhost:9526/> |
| 547 | Threecraft | `threecraft/` | <http://localhost:9527/> |
| 548 | Tictactoe | `tictactoe/` | <http://localhost:9528/> |
| 549 | Tinydefence2 | `tinydefence2/` | <http://localhost:9529/> |
| 550 | Top Trumps | `top-trumps/` | <http://localhost:9530/> |
| 551 | Tower Bloxx | `tower-bloxx/` | <http://localhost:9531/> |
| 552 | Typer | `typer/` | <http://localhost:9532/> |
| 553 | Village Of Chaos | `village-of-chaos/` | <http://localhost:9533/> |
| 554 | Webtetris | `webtetris/` | <http://localhost:9534/> |
| 555 | Yahtzee | `yahtzee/` | <http://localhost:9535/> |
| 556 | Yoalphabet | `yoalphabet/` | <http://localhost:9536/> |
| 557 | Yt Rock Paper Scissors Game | `yt-rock-paper-scissors-game/` | <http://localhost:9537/> |

## 离线与安全说明

- 游戏只通过 `localhost` 访问，不向局域网开放。
- 广告、统计、账号、支付、多人、排行榜、云同步和社交分享等在线功能已移除或禁用。
- 新导入游戏均经过无头浏览器离线审计：外部请求、404、失败请求、JavaScript 页面异常和控制台错误为 0。
- `8765` 不使用；现有特殊模式仍固定在 `8766`、`8767`、`8768`。

## 版权

各游戏及素材版权归原作者所有。本仓库保存的是基于公开网页制作的个人离线版本，仅供学习、备份和个人离线使用，请勿用于商业传播。
