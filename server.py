from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from functools import partial
from pathlib import Path
from urllib.parse import urlsplit
import json
import os
import threading
import time

ROOT = Path(__file__).resolve().parent
REGISTRY = ROOT / 'games.json'

DEFAULT_GAMES = [
    {'name': 'YORG.io 经典版', 'slug': 'yorg.io', 'directory': 'yorg.io', 'port': 8766, 'enabled': True},
    {'name': 'YORG.io 3', 'slug': 'yorg3.io', 'directory': 'yorg3.io', 'port': 8767, 'enabled': True},
    {'name': 'Idle Mining Empire', 'slug': 'idle-mining-empire', 'directory': 'idle-mining-empire', 'port': 8768, 'enabled': True},
    {'name': 'Hextris', 'slug': 'hextris-io', 'directory': 'hextris-io', 'port': 8770, 'enabled': True},
    {'name': '2048', 'slug': '2048-io', 'directory': '2048-io', 'port': 8771, 'enabled': True},
    {'name': 'Spider Solitaire', 'slug': 'spider-solitaire-io', 'directory': 'spider-solitaire-io', 'port': 8772, 'enabled': True},
    {'name': 'Tic-Tac-Toe', 'slug': 'playtictactoe', 'directory': 'playtictactoe', 'port': 8773, 'enabled': True},
    {'name': 'Snake', 'slug': 'playsnake', 'directory': 'playsnake', 'port': 8774, 'enabled': True},
    {'name': 'Doodle Jump', 'slug': 'doodlejump', 'directory': 'doodlejump', 'port': 8776, 'enabled': True},
    {'name': 'Klondike Solitaire', 'slug': 'playklondike', 'directory': 'playklondike', 'port': 8777, 'enabled': True},
    {'name': 'Checkers', 'slug': 'playcheckers', 'directory': 'playcheckers', 'port': 8778, 'enabled': True},
    {'name': 'Wordle', 'slug': 'wordle', 'directory': 'wordle', 'port': 8779, 'enabled': True},
    {'name': 'Hoppenhelm', 'slug': 'hoppenhelm', 'directory': 'hoppenhelm', 'port': 8780, 'enabled': True},
    {'name': 'Minesweeper', 'slug': 'minesweeper', 'directory': 'minesweeper', 'port': 8781, 'enabled': True},
    {'name': '2048 Classic', 'slug': '2048-original', 'directory': '2048-original', 'port': 8782, 'enabled': True},
    {'name': 'American Football Challenge', 'slug': 'american-football-challenge', 'directory': 'american-football-challenge', 'port': 8783, 'enabled': True},
    {'name': 'Guess Who', 'slug': 'guess-who', 'directory': 'guess-who', 'port': 8784, 'enabled': True},
    {'name': 'Free Mahjong', 'slug': 'free-mahjong', 'directory': 'free-mahjong', 'port': 8785, 'enabled': True},
    {'name': 'JavaScript Tetris', 'slug': 'javascript-tetris', 'directory': 'javascript-tetris', 'port': 8786, 'enabled': True},
    {'name': '1024 Moves', 'slug': 'gz-1024-moves', 'directory': 'gz-1024-moves', 'port': 9000, 'enabled': True},
    {'name': '16 Puzzle', 'slug': 'gz-16-puzzle', 'directory': 'gz-16-puzzle', 'port': 9001, 'enabled': True},
    {'name': '2048', 'slug': '2048', 'directory': '2048', 'port': 9002, 'enabled': True},
    {'name': '2048 Win', 'slug': 'gz-2048-win', 'directory': 'gz-2048-win', 'port': 9003, 'enabled': True},
    {'name': '3D Snake', 'slug': 'gz-3d-snake', 'directory': 'gz-3d-snake', 'port': 9004, 'enabled': True},
    {'name': '8 Puzzle', 'slug': 'gz-8-puzzle', 'directory': 'gz-8-puzzle', 'port': 9005, 'enabled': True},
    {'name': 'Adventure Game', 'slug': 'gz-adventure-game', 'directory': 'gz-adventure-game', 'port': 9006, 'enabled': True},
    {'name': 'Ai Chess Game', 'slug': 'gz-ai-chess-game', 'directory': 'gz-ai-chess-game', 'port': 9007, 'enabled': True},
    {'name': 'Airballoon', 'slug': 'gz-airballoon', 'directory': 'gz-airballoon', 'port': 9008, 'enabled': True},
    {'name': 'Alien Invasion', 'slug': 'gz-alien-invasion', 'directory': 'gz-alien-invasion', 'port': 9009, 'enabled': True},
    {'name': 'Alien Shooters', 'slug': 'gz-alien-shooters', 'directory': 'gz-alien-shooters', 'port': 9010, 'enabled': True},
    {'name': 'Alphabet Learning Game', 'slug': 'gz-alphabet-learning-game', 'directory': 'gz-alphabet-learning-game', 'port': 9011, 'enabled': True},
    {'name': 'Anagram Checker Game', 'slug': 'gz-anagram-checker-game', 'directory': 'gz-anagram-checker-game', 'port': 9012, 'enabled': True},
    {'name': 'Anagram Word Game', 'slug': 'gz-anagram--word-game', 'directory': 'gz-anagram--word-game', 'port': 9013, 'enabled': True},
    {'name': 'Angry Bird', 'slug': 'gz-angry-bird', 'directory': 'gz-angry-bird', 'port': 9014, 'enabled': True},
    {'name': 'Anime Clicker', 'slug': 'gz-anime-clicker', 'directory': 'gz-anime-clicker', 'port': 9015, 'enabled': True},
    {'name': 'Ant Smasher', 'slug': 'gz-ant-smasher', 'directory': 'gz-ant-smasher', 'port': 9016, 'enabled': True},
    {'name': 'Aquasort Game', 'slug': 'gz-aquasort-game', 'directory': 'gz-aquasort-game', 'port': 9017, 'enabled': True},
    {'name': 'Arkanoid Game', 'slug': 'gz-arkanoid-game', 'directory': 'gz-arkanoid-game', 'port': 9018, 'enabled': True},
    {'name': 'Asteroids 3D', 'slug': 'gz-asteroids-3d', 'directory': 'gz-asteroids-3d', 'port': 9019, 'enabled': True},
    {'name': 'Astronaunt Runner', 'slug': 'gz-astronaunt-runner', 'directory': 'gz-astronaunt-runner', 'port': 9020, 'enabled': True},
    {'name': 'Atari Breakout', 'slug': 'gz-atari-breakout', 'directory': 'gz-atari-breakout', 'port': 9021, 'enabled': True},
    {'name': 'Atlas Game', 'slug': 'gz-atlas-game', 'directory': 'gz-atlas-game', 'port': 9022, 'enabled': True},
    {'name': 'Automated Rock Paper Scissor', 'slug': 'gz-automated-rock-paper-scissor', 'directory': 'gz-automated-rock-paper-scissor', 'port': 9023, 'enabled': True},
    {'name': 'Avoider Game', 'slug': 'gz-avoider-game', 'directory': 'gz-avoider-game', 'port': 9024, 'enabled': True},
    {'name': 'Bad Depot', 'slug': 'gz-bad-depot', 'directory': 'gz-bad-depot', 'port': 9025, 'enabled': True},
    {'name': 'Bad Luck Brian', 'slug': 'gz-bad-luck-brian', 'directory': 'gz-bad-luck-brian', 'port': 9026, 'enabled': True},
    {'name': 'Baghchal', 'slug': 'baghchal', 'directory': 'baghchal', 'port': 9027, 'enabled': True},
    {'name': 'Ball In Maze', 'slug': 'gz-ball-in-maze', 'directory': 'gz-ball-in-maze', 'port': 9028, 'enabled': True},
    {'name': 'Ball Shooting Game', 'slug': 'gz-ball-shooting-game', 'directory': 'gz-ball-shooting-game', 'port': 9029, 'enabled': True},
    {'name': 'Balloon Buster', 'slug': 'gz-balloon-buster', 'directory': 'gz-balloon-buster', 'port': 9030, 'enabled': True},
    {'name': 'Baseketball', 'slug': 'gz-baseketball', 'directory': 'gz-baseketball', 'port': 9031, 'enabled': True},
    {'name': 'Bash Mole', 'slug': 'gz-bash-mole', 'directory': 'gz-bash-mole', 'port': 9032, 'enabled': True},
    {'name': 'Bear Hunter Ninja', 'slug': 'gz-bear-hunter-ninja', 'directory': 'gz-bear-hunter-ninja', 'port': 9033, 'enabled': True},
    {'name': 'Beat A Mole', 'slug': 'gz-beat-a-mole', 'directory': 'gz-beat-a-mole', 'port': 9034, 'enabled': True},
    {'name': 'Beyonder', 'slug': 'gz-beyonder', 'directory': 'gz-beyonder', 'port': 9035, 'enabled': True},
    {'name': 'Bird Game', 'slug': 'gz-bird-game', 'directory': 'gz-bird-game', 'port': 9036, 'enabled': True},
    {'name': 'Black Hole Square', 'slug': 'black-hole-square', 'directory': 'black-hole-square', 'port': 9037, 'enabled': True},
    {'name': 'Black Jack', 'slug': 'gz-black-jack', 'directory': 'gz-black-jack', 'port': 9038, 'enabled': True},
    {'name': 'Blackjackjs', 'slug': 'blackjackjs', 'directory': 'blackjackjs', 'port': 9039, 'enabled': True},
    {'name': 'Blast Zone', 'slug': 'gz-blast-zone', 'directory': 'gz-blast-zone', 'port': 9040, 'enabled': True},
    {'name': 'Blink Beat', 'slug': 'gz-blink-beat', 'directory': 'gz-blink-beat', 'port': 9041, 'enabled': True},
    {'name': 'Block Building', 'slug': 'gz-block-building', 'directory': 'gz-block-building', 'port': 9042, 'enabled': True},
    {'name': 'Block Buster', 'slug': 'gz-block-buster', 'directory': 'gz-block-buster', 'port': 9043, 'enabled': True},
    {'name': 'Block Game', 'slug': 'gz-block-game', 'directory': 'gz-block-game', 'port': 9044, 'enabled': True},
    {'name': 'Block Ninja', 'slug': 'gz-block-ninja', 'directory': 'gz-block-ninja', 'port': 9045, 'enabled': True},
    {'name': 'Boom Blast', 'slug': 'gz-boom-blast', 'directory': 'gz-boom-blast', 'port': 9046, 'enabled': True},
    {'name': 'Bouncing Ball Game', 'slug': 'gz-bouncing-ball-game', 'directory': 'gz-bouncing-ball-game', 'port': 9047, 'enabled': True},
    {'name': 'Bow And Arrow', 'slug': 'gz-bow-and-arrow', 'directory': 'gz-bow-and-arrow', 'port': 9048, 'enabled': True},
    {'name': 'Bow Arrow', 'slug': 'gz-bow-arrow', 'directory': 'gz-bow-arrow', 'port': 9049, 'enabled': True},
    {'name': 'Brain Burst Game', 'slug': 'gz-brain-burst-game', 'directory': 'gz-brain-burst-game', 'port': 9050, 'enabled': True},
    {'name': 'Brain Card Game', 'slug': 'gz-brain-card-game', 'directory': 'gz-brain-card-game', 'port': 9051, 'enabled': True},
    {'name': 'Brain Color Mastermind', 'slug': 'gz-brain-color-mastermind', 'directory': 'gz-brain-color-mastermind', 'port': 9052, 'enabled': True},
    {'name': 'Break Out Game', 'slug': 'break-out-game', 'directory': 'break-out-game', 'port': 9053, 'enabled': True},
    {'name': 'Breakout', 'slug': 'gz-breakout', 'directory': 'gz-breakout', 'port': 9054, 'enabled': True},
    {'name': 'Brick And Ball', 'slug': 'gz-brick-and-ball', 'directory': 'gz-brick-and-ball', 'port': 9055, 'enabled': True},
    {'name': 'Brick Breaker', 'slug': 'gz-brick-breaker', 'directory': 'gz-brick-breaker', 'port': 9056, 'enabled': True},
    {'name': 'Brick Buster', 'slug': 'gz-brick-buster', 'directory': 'gz-brick-buster', 'port': 9057, 'enabled': True},
    {'name': 'Building Block Game', 'slug': 'gz-building-block-game', 'directory': 'gz-building-block-game', 'port': 9058, 'enabled': True},
    {'name': 'Bullethell', 'slug': 'bullethell', 'directory': 'bullethell', 'port': 9059, 'enabled': True},
    {'name': 'Bulls And Cows', 'slug': 'gz-bulls-and-cows', 'directory': 'gz-bulls-and-cows', 'port': 9060, 'enabled': True},
    {'name': 'Bulls Eye', 'slug': 'gz-bulls-eye', 'directory': 'gz-bulls-eye', 'port': 9061, 'enabled': True},
    {'name': 'Bullseyegame', 'slug': 'gz-bullseyegame', 'directory': 'gz-bullseyegame', 'port': 9062, 'enabled': True},
    {'name': 'Bunny Is Lost', 'slug': 'gz-bunny-is-lost', 'directory': 'gz-bunny-is-lost', 'port': 9063, 'enabled': True},
    {'name': 'Cable Maze', 'slug': 'gz-cable-maze', 'directory': 'gz-cable-maze', 'port': 9064, 'enabled': True},
    {'name': 'Caesar Cipher', 'slug': 'gz-caesar-cipher', 'directory': 'gz-caesar-cipher', 'port': 9065, 'enabled': True},
    {'name': 'Candy Match Saga', 'slug': 'gz-candy-match-saga', 'directory': 'gz-candy-match-saga', 'port': 9066, 'enabled': True},
    {'name': 'Candybox', 'slug': 'candybox', 'directory': 'candybox', 'port': 9067, 'enabled': True},
    {'name': 'Caretaker', 'slug': 'gz-caretaker', 'directory': 'gz-caretaker', 'port': 9068, 'enabled': True},
    {'name': 'Cartoon Character Guessing Game', 'slug': 'gz-cartoon-character-guessing-game', 'directory': 'gz-cartoon-character-guessing-game', 'port': 9069, 'enabled': True},
    {'name': 'Cast And Catch', 'slug': 'gz-cast-and-catch', 'directory': 'gz-cast-and-catch', 'port': 9070, 'enabled': True},
    {'name': 'Cat Goric', 'slug': 'gz-cat-goric', 'directory': 'gz-cat-goric', 'port': 9071, 'enabled': True},
    {'name': 'Catch Craze', 'slug': 'gz-catch-craze', 'directory': 'gz-catch-craze', 'port': 9072, 'enabled': True},
    {'name': 'Catch Him', 'slug': 'gz-catch-him', 'directory': 'gz-catch-him', 'port': 9073, 'enabled': True},
    {'name': 'Catch Me Game', 'slug': 'gz-catch-me-game', 'directory': 'gz-catch-me-game', 'port': 9074, 'enabled': True},
    {'name': 'Catch Stars', 'slug': 'gz-catch-stars', 'directory': 'gz-catch-stars', 'port': 9075, 'enabled': True},
    {'name': 'Catch The Ball', 'slug': 'gz-catch-the-ball', 'directory': 'gz-catch-the-ball', 'port': 9076, 'enabled': True},
    {'name': 'Catch The Bunny', 'slug': 'gz-catch-the-bunny', 'directory': 'gz-catch-the-bunny', 'port': 9077, 'enabled': True},
    {'name': 'Catch The Falling Object', 'slug': 'gz-catch-the-falling-object', 'directory': 'gz-catch-the-falling-object', 'port': 9078, 'enabled': True},
    {'name': 'Catch The Falling Stars', 'slug': 'gz-catch-the-falling-stars', 'directory': 'gz-catch-the-falling-stars', 'port': 9079, 'enabled': True},
    {'name': 'Catchtheball', 'slug': 'gz-catchtheball', 'directory': 'gz-catchtheball', 'port': 9080, 'enabled': True},
    {'name': 'Charon Jr', 'slug': 'gz-charon-jr', 'directory': 'gz-charon-jr', 'port': 9081, 'enabled': True},
    {'name': 'Chess Game', 'slug': 'gz-chess-game', 'directory': 'gz-chess-game', 'port': 9082, 'enabled': True},
    {'name': 'Chess Game Computer', 'slug': 'gz-chess-game-computer', 'directory': 'gz-chess-game-computer', 'port': 9083, 'enabled': True},
    {'name': 'Chrome Dino Game', 'slug': 'gz-chrome-dino-game', 'directory': 'gz-chrome-dino-game', 'port': 9084, 'enabled': True},
    {'name': 'Chrome Dinosaur Game', 'slug': 'gz-chrome-dinosaur-game', 'directory': 'gz-chrome-dinosaur-game', 'port': 9085, 'enabled': True},
    {'name': 'City Builder Game', 'slug': 'gz-city-builder-game', 'directory': 'gz-city-builder-game', 'port': 9086, 'enabled': True},
    {'name': 'Click Circle', 'slug': 'gz-click-circle', 'directory': 'gz-click-circle', 'port': 9087, 'enabled': True},
    {'name': 'Code Cracker', 'slug': 'gz-code-cracker', 'directory': 'gz-code-cracker', 'port': 9088, 'enabled': True},
    {'name': 'Color Blast', 'slug': 'gz-color-blast', 'directory': 'gz-color-blast', 'port': 9089, 'enabled': True},
    {'name': 'Color Matcher', 'slug': 'gz-color-matcher', 'directory': 'gz-color-matcher', 'port': 9090, 'enabled': True},
    {'name': 'Color Shifter', 'slug': 'gz-color-shifter', 'directory': 'gz-color-shifter', 'port': 9091, 'enabled': True},
    {'name': 'Color Swap', 'slug': 'gz-color-swap', 'directory': 'gz-color-swap', 'port': 9092, 'enabled': True},
    {'name': 'Color Switch Challenger', 'slug': 'gz-color-switch-challenger', 'directory': 'gz-color-switch-challenger', 'port': 9093, 'enabled': True},
    {'name': 'Color The Page', 'slug': 'gz-color-the-page', 'directory': 'gz-color-the-page', 'port': 9094, 'enabled': True},
    {'name': 'Color Turner', 'slug': 'gz-color-turner', 'directory': 'gz-color-turner', 'port': 9095, 'enabled': True},
    {'name': 'Colour Generator Game', 'slug': 'gz-colour-generator-game', 'directory': 'gz-colour-generator-game', 'port': 9096, 'enabled': True},
    {'name': 'Computer Bingo', 'slug': 'gz-computer-bingo', 'directory': 'gz-computer-bingo', 'port': 9097, 'enabled': True},
    {'name': 'Connect Four', 'slug': 'gz-connect-four', 'directory': 'gz-connect-four', 'port': 9098, 'enabled': True},
    {'name': 'Connect4', 'slug': 'gz-connect4', 'directory': 'gz-connect4', 'port': 9099, 'enabled': True},
    {'name': 'Cooking Challenge Game', 'slug': 'gz-cooking-challenge-game', 'directory': 'gz-cooking-challenge-game', 'port': 9100, 'enabled': True},
    {'name': 'Corona Shooter', 'slug': 'gz-corona-shooter', 'directory': 'gz-corona-shooter', 'port': 9101, 'enabled': True},
    {'name': 'Cosmic Blast', 'slug': 'gz-cosmic-blast', 'directory': 'gz-cosmic-blast', 'port': 9102, 'enabled': True},
    {'name': 'Cosmic Coin Collector', 'slug': 'gz-cosmic-coin-collector', 'directory': 'gz-cosmic-coin-collector', 'port': 9103, 'enabled': True},
    {'name': 'Country Guesser Game', 'slug': 'gz-country-guesser-game', 'directory': 'gz-country-guesser-game', 'port': 9104, 'enabled': True},
    {'name': 'Crack The Code', 'slug': 'gz-crack-the-code', 'directory': 'gz-crack-the-code', 'port': 9105, 'enabled': True},
    {'name': 'Cross The River Game', 'slug': 'gz-cross-the-river-game', 'directory': 'gz-cross-the-river-game', 'port': 9106, 'enabled': True},
    {'name': 'Cross The Road', 'slug': 'gz-cross-the-road', 'directory': 'gz-cross-the-road', 'port': 9107, 'enabled': True},
    {'name': 'Css Crossword', 'slug': 'gz-css-crossword', 'directory': 'gz-css-crossword', 'port': 9108, 'enabled': True},
    {'name': 'Css Select', 'slug': 'gz-css-select', 'directory': 'gz-css-select', 'port': 9109, 'enabled': True},
    {'name': 'Cubes2', 'slug': 'cubes2', 'directory': 'cubes2', 'port': 9110, 'enabled': True},
    {'name': 'Dante', 'slug': 'gz-dante', 'directory': 'gz-dante', 'port': 9111, 'enabled': True},
    {'name': 'Death By Hamster', 'slug': 'gz-death-by-hamster', 'directory': 'gz-death-by-hamster', 'port': 9112, 'enabled': True},
    {'name': 'Destroyer', 'slug': 'gz-destroyer', 'directory': 'gz-destroyer', 'port': 9113, 'enabled': True},
    {'name': 'Diablo_Web', 'slug': 'diablo-web', 'directory': 'diablo-web', 'port': 9114, 'enabled': True},
    {'name': 'Diamond Run', 'slug': 'gz-diamond-run', 'directory': 'gz-diamond-run', 'port': 9115, 'enabled': True},
    {'name': 'Dice Roller', 'slug': 'gz-dice-roller', 'directory': 'gz-dice-roller', 'port': 9116, 'enabled': True},
    {'name': 'Dinosaur Memory Game', 'slug': 'gz-dinosaur-memory-game', 'directory': 'gz-dinosaur-memory-game', 'port': 9117, 'enabled': True},
    {'name': 'Dodge The Blocks', 'slug': 'gz-dodge-the-blocks', 'directory': 'gz-dodge-the-blocks', 'port': 9118, 'enabled': True},
    {'name': 'Doodle Draw', 'slug': 'gz-doodle-draw', 'directory': 'gz-doodle-draw', 'port': 9119, 'enabled': True},
    {'name': 'Doremon Puzzle', 'slug': 'gz-doremon-puzzle', 'directory': 'gz-doremon-puzzle', 'port': 9120, 'enabled': True},
    {'name': 'Dot Connect', 'slug': 'gz-dot-connect', 'directory': 'gz-dot-connect', 'port': 9121, 'enabled': True},
    {'name': 'Dot Dash', 'slug': 'gz-dot-dash', 'directory': 'gz-dot-dash', 'port': 9122, 'enabled': True},
    {'name': 'Drag And Drop Puzzle', 'slug': 'gz-drag-and-drop-puzzle', 'directory': 'gz-drag-and-drop-puzzle', 'port': 9123, 'enabled': True},
    {'name': 'Dragon Tower', 'slug': 'gz-dragon-tower', 'directory': 'gz-dragon-tower', 'port': 9124, 'enabled': True},
    {'name': 'Dragon World Game', 'slug': 'gz-dragon-world-game', 'directory': 'gz-dragon-world-game', 'port': 9125, 'enabled': True},
    {'name': 'Drawing App', 'slug': 'gz-drawing-app', 'directory': 'gz-drawing-app', 'port': 9126, 'enabled': True},
    {'name': 'Drawing Board', 'slug': 'drawing-board', 'directory': 'drawing-board', 'port': 9127, 'enabled': True},
    {'name': 'Drum Kit', 'slug': 'gz-drum-kit', 'directory': 'gz-drum-kit', 'port': 9128, 'enabled': True},
    {'name': 'Drum Kit Game', 'slug': 'gz-drum-kit-game', 'directory': 'gz-drum-kit-game', 'port': 9129, 'enabled': True},
    {'name': 'Dsa Quiz Game', 'slug': 'gz-dsa-quiz-game', 'directory': 'gz-dsa-quiz-game', 'port': 9130, 'enabled': True},
    {'name': 'Duckhunt', 'slug': 'gz-duckhunt', 'directory': 'gz-duckhunt', 'port': 9131, 'enabled': True},
    {'name': 'Dungeon Crawler', 'slug': 'gz-dungeon-crawler', 'directory': 'gz-dungeon-crawler', 'port': 9132, 'enabled': True},
    {'name': 'Earth Destroyer', 'slug': 'gz-earth-destroyer', 'directory': 'gz-earth-destroyer', 'port': 9133, 'enabled': True},
    {'name': 'Earth Guardian', 'slug': 'gz-earth-guardian', 'directory': 'gz-earth-guardian', 'port': 9134, 'enabled': True},
    {'name': 'Elemental Riddles', 'slug': 'gz-elemental-riddles', 'directory': 'gz-elemental-riddles', 'port': 9135, 'enabled': True},
    {'name': 'Emoji Charades', 'slug': 'gz-emoji-charades', 'directory': 'gz-emoji-charades', 'port': 9136, 'enabled': True},
    {'name': 'Emoji Intruder', 'slug': 'gz-emoji-intruder', 'directory': 'gz-emoji-intruder', 'port': 9137, 'enabled': True},
    {'name': 'Emoji Puzzle Game', 'slug': 'gz-emoji-puzzle-game', 'directory': 'gz-emoji-puzzle-game', 'port': 9138, 'enabled': True},
    {'name': 'Emudevz', 'slug': 'emudevz', 'directory': 'emudevz', 'port': 9139, 'enabled': True},
    {'name': 'Escape', 'slug': 'gz-escape', 'directory': 'gz-escape', 'port': 9140, 'enabled': True},
    {'name': 'Escaperoom', 'slug': 'gz-escaperoom', 'directory': 'gz-escaperoom', 'port': 9141, 'enabled': True},
    {'name': 'Etch A Sketch', 'slug': 'gz-etch-a-sketch', 'directory': 'gz-etch-a-sketch', 'port': 9142, 'enabled': True},
    {'name': 'Everyones Sky', 'slug': 'gz-everyones-sky', 'directory': 'gz-everyones-sky', 'port': 9143, 'enabled': True},
    {'name': 'Factors Game', 'slug': 'factors-game', 'directory': 'factors-game', 'port': 9144, 'enabled': True},
    {'name': 'Fall Down', 'slug': 'gz-fall-down', 'directory': 'gz-fall-down', 'port': 9145, 'enabled': True},
    {'name': 'Falling Blocks', 'slug': 'gz-falling-blocks', 'directory': 'gz-falling-blocks', 'port': 9146, 'enabled': True},
    {'name': 'Fidget Spinner Game', 'slug': 'gz-fidget-spinner-game', 'directory': 'gz-fidget-spinner-game', 'port': 9147, 'enabled': True},
    {'name': 'Fifteen_Puzzle_Maker', 'slug': 'fifteen-puzzle-maker', 'directory': 'fifteen-puzzle-maker', 'port': 9148, 'enabled': True},
    {'name': 'Find The Ball', 'slug': 'gz-find-the-ball', 'directory': 'gz-find-the-ball', 'port': 9149, 'enabled': True},
    {'name': 'Flames Game', 'slug': 'gz-flames-game', 'directory': 'gz-flames-game', 'port': 9150, 'enabled': True},
    {'name': 'Flappy Bird', 'slug': 'gz-flappy-bird', 'directory': 'gz-flappy-bird', 'port': 9151, 'enabled': True},
    {'name': 'Flappy Bird Ai', 'slug': 'flappy-bird-ai', 'directory': 'flappy-bird-ai', 'port': 9152, 'enabled': True},
    {'name': 'Flip Card Game', 'slug': 'gz-flip-card-game', 'directory': 'gz-flip-card-game', 'port': 9153, 'enabled': True},
    {'name': 'Flip Coin', 'slug': 'gz-flip-coin', 'directory': 'gz-flip-coin', 'port': 9154, 'enabled': True},
    {'name': 'Foosball', 'slug': 'gz-foosball', 'directory': 'gz-foosball', 'port': 9155, 'enabled': True},
    {'name': 'Forgotten Hill The Wardrobe 3', 'slug': 'forgotten-hill-the-wardrobe-3', 'directory': 'forgotten-hill-the-wardrobe-3', 'port': 9156, 'enabled': True},
    {'name': 'Four In Row', 'slug': 'gz-four-in-row', 'directory': 'gz-four-in-row', 'port': 9157, 'enabled': True},
    {'name': 'Free Bird', 'slug': 'gz-free-bird', 'directory': 'gz-free-bird', 'port': 9158, 'enabled': True},
    {'name': 'Fruit Catching Game', 'slug': 'gz-fruit-catching-game', 'directory': 'gz-fruit-catching-game', 'port': 9159, 'enabled': True},
    {'name': 'Fruit Ninja', 'slug': 'gz-fruit-ninja', 'directory': 'gz-fruit-ninja', 'port': 9160, 'enabled': True},
    {'name': 'Fruitcatcher', 'slug': 'gz-fruitcatcher', 'directory': 'gz-fruitcatcher', 'port': 9161, 'enabled': True},
    {'name': 'Fruity Fortune', 'slug': 'gz-fruity-fortune', 'directory': 'gz-fruity-fortune', 'port': 9162, 'enabled': True},
    {'name': 'Funny Travelling Airport', 'slug': 'funny-travelling-airport', 'directory': 'funny-travelling-airport', 'port': 9163, 'enabled': True},
    {'name': 'Galaxy Rider', 'slug': 'gz-galaxy-rider', 'directory': 'gz-galaxy-rider', 'port': 9164, 'enabled': True},
    {'name': 'Game Box', 'slug': 'game-box', 'directory': 'game-box', 'port': 9165, 'enabled': True},
    {'name': 'Ganesh Qr Maker', 'slug': 'gz-ganesh-qr-maker', 'directory': 'gz-ganesh-qr-maker', 'port': 9166, 'enabled': True},
    {'name': 'Get The Pigeon', 'slug': 'gz-get-the-pigeon', 'directory': 'gz-get-the-pigeon', 'port': 9167, 'enabled': True},
    {'name': 'Ghost Busting Game', 'slug': 'gz-ghost-busting-game', 'directory': 'gz-ghost-busting-game', 'port': 9168, 'enabled': True},
    {'name': 'Ghost Surf', 'slug': 'gz-ghost-surf', 'directory': 'gz-ghost-surf', 'port': 9169, 'enabled': True},
    {'name': 'Gita Shloka Generator', 'slug': 'gz-gita-shloka-generator', 'directory': 'gz-gita-shloka-generator', 'port': 9170, 'enabled': True},
    {'name': 'Glitch Buster', 'slug': 'gz-glitch-buster', 'directory': 'gz-glitch-buster', 'port': 9171, 'enabled': True},
    {'name': 'Goal Rush', 'slug': 'gz-goal-rush', 'directory': 'gz-goal-rush', 'port': 9172, 'enabled': True},
    {'name': 'Gofish', 'slug': 'gz-gofish', 'directory': 'gz-gofish', 'port': 9173, 'enabled': True},
    {'name': 'Gravity Simulation Game', 'slug': 'gz-gravity-simulation-game', 'directory': 'gz-gravity-simulation-game', 'port': 9174, 'enabled': True},
    {'name': 'Guess Game', 'slug': 'guess-game', 'directory': 'guess-game', 'port': 9175, 'enabled': True},
    {'name': 'Guess The Ball', 'slug': 'gz-guess-the-ball', 'directory': 'gz-guess-the-ball', 'port': 9176, 'enabled': True},
    {'name': 'Guess The Celeb', 'slug': 'gz-guess-the-celeb', 'directory': 'gz-guess-the-celeb', 'port': 9177, 'enabled': True},
    {'name': 'Guess The Correct Logo', 'slug': 'gz-guess-the-correct-logo', 'directory': 'gz-guess-the-correct-logo', 'port': 9178, 'enabled': True},
    {'name': 'Guess The Friends Name', 'slug': 'gz-guess-the-friends-name', 'directory': 'gz-guess-the-friends-name', 'port': 9179, 'enabled': True},
    {'name': 'Guess The Number', 'slug': 'gz-guess-the-number', 'directory': 'gz-guess-the-number', 'port': 9180, 'enabled': True},
    {'name': 'Guess The Song', 'slug': 'gz-guess-the-song', 'directory': 'gz-guess-the-song', 'port': 9181, 'enabled': True},
    {'name': 'Guess The Weapon', 'slug': 'gz-guess-the-weapon', 'directory': 'gz-guess-the-weapon', 'port': 9182, 'enabled': True},
    {'name': 'Guess Who', 'slug': 'gz-guess-who', 'directory': 'gz-guess-who', 'port': 9183, 'enabled': True},
    {'name': 'Hand Cricket', 'slug': 'gz-hand-cricket', 'directory': 'gz-hand-cricket', 'port': 9184, 'enabled': True},
    {'name': 'Hangman', 'slug': 'gz-hangman', 'directory': 'gz-hangman', 'port': 9185, 'enabled': True},
    {'name': 'Hangman Game', 'slug': 'gz-hangman-game', 'directory': 'gz-hangman-game', 'port': 9186, 'enabled': True},
    {'name': 'Harmony Mixer', 'slug': 'gz-harmony-mixer', 'directory': 'gz-harmony-mixer', 'port': 9187, 'enabled': True},
    {'name': 'Hexsweep Game', 'slug': 'gz-hexsweep-game', 'directory': 'gz-hexsweep-game', 'port': 9188, 'enabled': True},
    {'name': 'Hide And Seek', 'slug': 'gz-hide-and-seek', 'directory': 'gz-hide-and-seek', 'port': 9189, 'enabled': True},
    {'name': 'Highway 404', 'slug': 'gz-highway-404', 'directory': 'gz-highway-404', 'port': 9190, 'enabled': True},
    {'name': 'Highway Race', 'slug': 'gz-highway-race', 'directory': 'gz-highway-race', 'port': 9191, 'enabled': True},
    {'name': 'Hit Target', 'slug': 'gz-hit-target', 'directory': 'gz-hit-target', 'port': 9192, 'enabled': True},
    {'name': 'Hit The Hamster', 'slug': 'gz-hit-the-hamster', 'directory': 'gz-hit-the-hamster', 'port': 9193, 'enabled': True},
    {'name': 'Hitormiss', 'slug': 'gz-hitormiss', 'directory': 'gz-hitormiss', 'port': 9194, 'enabled': True},
    {'name': 'Hityourfriend', 'slug': 'gz-hityourfriend', 'directory': 'gz-hityourfriend', 'port': 9195, 'enabled': True},
    {'name': 'Hold The Cloud', 'slug': 'gz-hold-the-cloud', 'directory': 'gz-hold-the-cloud', 'port': 9196, 'enabled': True},
    {'name': 'Horse Racing Game Javascript', 'slug': 'horse-racing-game-javascript', 'directory': 'horse-racing-game-javascript', 'port': 9197, 'enabled': True},
    {'name': 'Html5 Controller Tester', 'slug': 'gz-html5-controller-tester', 'directory': 'gz-html5-controller-tester', 'port': 9198, 'enabled': True},
    {'name': 'I Want To Google The Game', 'slug': 'gz-i-want-to-google-the-game', 'directory': 'gz-i-want-to-google-the-game', 'port': 9199, 'enabled': True},
    {'name': 'Iknowyou Mind Reading Game', 'slug': 'gz-iknowyou-mind-reading-game', 'directory': 'gz-iknowyou-mind-reading-game', 'port': 9200, 'enabled': True},
    {'name': 'Infernal Throne', 'slug': 'gz-infernal-throne', 'directory': 'gz-infernal-throne', 'port': 9201, 'enabled': True},
    {'name': 'Infinite Runner Game', 'slug': 'gz-infinite-runner-game', 'directory': 'gz-infinite-runner-game', 'port': 9202, 'enabled': True},
    {'name': 'Intellect Quest', 'slug': 'gz-intellect-quest', 'directory': 'gz-intellect-quest', 'port': 9203, 'enabled': True},
    {'name': 'Interactive Quizzing', 'slug': 'gz-interactive-quizzing', 'directory': 'gz-interactive-quizzing', 'port': 9204, 'enabled': True},
    {'name': 'Javascript Roulette', 'slug': 'javascript-roulette', 'directory': 'javascript-roulette', 'port': 9205, 'enabled': True},
    {'name': 'Johnny Smiter', 'slug': 'gz-johnny-smiter', 'directory': 'gz-johnny-smiter', 'port': 9206, 'enabled': True},
    {'name': 'Junojs', 'slug': 'gz-junojs', 'directory': 'gz-junojs', 'port': 9207, 'enabled': True},
    {'name': 'Keyboard Hero', 'slug': 'gz-keyboard-hero', 'directory': 'gz-keyboard-hero', 'port': 9208, 'enabled': True},
    {'name': 'Keysymphony', 'slug': 'gz-keysymphony', 'directory': 'gz-keysymphony', 'port': 9209, 'enabled': True},
    {'name': 'Kill The Bird', 'slug': 'gz-kill-the-bird', 'directory': 'gz-kill-the-bird', 'port': 9210, 'enabled': True},
    {'name': 'King Of Pirates Quiz', 'slug': 'gz-king-of-pirates-quiz', 'directory': 'gz-king-of-pirates-quiz', 'port': 9211, 'enabled': True},
    {'name': 'Labyrinth', 'slug': 'gz-labyrinth', 'directory': 'gz-labyrinth', 'port': 9212, 'enabled': True},
    {'name': 'Labyrinth', 'slug': 'labyrinth', 'directory': 'labyrinth', 'port': 9213, 'enabled': True},
    {'name': 'Lamb Lane', 'slug': 'gz-lamb-lane', 'directory': 'gz-lamb-lane', 'port': 9214, 'enabled': True},
    {'name': 'Laserdarts', 'slug': 'gz-laserdarts', 'directory': 'gz-laserdarts', 'port': 9215, 'enabled': True},
    {'name': 'Letter Sleuth', 'slug': 'gz-letter-sleuth', 'directory': 'gz-letter-sleuth', 'port': 9216, 'enabled': True},
    {'name': 'Lighthouse', 'slug': 'gz-lighthouse', 'directory': 'gz-lighthouse', 'port': 9217, 'enabled': True},
    {'name': 'Little Red Game', 'slug': 'gz-little-red-game', 'directory': 'gz-little-red-game', 'port': 9218, 'enabled': True},
    {'name': 'Lol2D Ver1', 'slug': 'lol2d-ver1', 'directory': 'lol2d-ver1', 'port': 9219, 'enabled': True},
    {'name': 'Lost In The Maze 3D', 'slug': 'gz-lost-in-the-maze-3d', 'directory': 'gz-lost-in-the-maze-3d', 'port': 9220, 'enabled': True},
    {'name': 'Love Calculator Game', 'slug': 'gz-love-calculator-game', 'directory': 'gz-love-calculator-game', 'port': 9221, 'enabled': True},
    {'name': 'Love Result Predictor', 'slug': 'gz-love-result-predictor', 'directory': 'gz-love-result-predictor', 'port': 9222, 'enabled': True},
    {'name': 'Lunar Lander', 'slug': 'gz-lunar-lander', 'directory': 'gz-lunar-lander', 'port': 9223, 'enabled': True},
    {'name': 'Madlibs', 'slug': 'gz-madlibs', 'directory': 'gz-madlibs', 'port': 9224, 'enabled': True},
    {'name': 'Magic Square', 'slug': 'gz-magic-square', 'directory': 'gz-magic-square', 'port': 9225, 'enabled': True},
    {'name': 'Make Me Laugh', 'slug': 'gz-make-me-laugh', 'directory': 'gz-make-me-laugh', 'port': 9226, 'enabled': True},
    {'name': 'Mamba Mayhem', 'slug': 'gz-mamba-mayhem', 'directory': 'gz-mamba-mayhem', 'port': 9227, 'enabled': True},
    {'name': 'Mancala Game', 'slug': 'gz-mancala-game', 'directory': 'gz-mancala-game', 'port': 9228, 'enabled': True},
    {'name': 'Mario Game', 'slug': 'gz-mario-game', 'directory': 'gz-mario-game', 'port': 9229, 'enabled': True},
    {'name': 'Mario Matching Game', 'slug': 'gz-mario-matching-game', 'directory': 'gz-mario-matching-game', 'port': 9230, 'enabled': True},
    {'name': 'Mastemind', 'slug': 'gz-mastemind', 'directory': 'gz-mastemind', 'port': 9231, 'enabled': True},
    {'name': 'Matching Pair', 'slug': 'gz-matching-pair', 'directory': 'gz-matching-pair', 'port': 9232, 'enabled': True},
    {'name': 'Math Game', 'slug': 'gz-math-game', 'directory': 'gz-math-game', 'port': 9233, 'enabled': True},
    {'name': 'Math Race Game', 'slug': 'gz-math-race-game', 'directory': 'gz-math-race-game', 'port': 9234, 'enabled': True},
    {'name': 'Mathquiz', 'slug': 'gz-mathquiz', 'directory': 'gz-mathquiz', 'port': 9235, 'enabled': True},
    {'name': 'Maths Sprint Game', 'slug': 'gz-maths-sprint-game', 'directory': 'gz-maths-sprint-game', 'port': 9236, 'enabled': True},
    {'name': 'Max and Mink', 'slug': 'max-and-mink-play-online-for-free-poki', 'directory': 'max-and-mink-play-online-for-free-poki', 'port': 9237, 'enabled': True},
    {'name': 'Maximiseboxes', 'slug': 'gz-maximiseboxes', 'directory': 'gz-maximiseboxes', 'port': 9238, 'enabled': True},
    {'name': 'Maze Game', 'slug': 'gz-maze-game', 'directory': 'gz-maze-game', 'port': 9239, 'enabled': True},
    {'name': 'Maze Of Cables', 'slug': 'gz-maze-of-cables', 'directory': 'gz-maze-of-cables', 'port': 9240, 'enabled': True},
    {'name': 'Maze Runner', 'slug': 'gz-maze-runner', 'directory': 'gz-maze-runner', 'port': 9241, 'enabled': True},
    {'name': 'Mazegame', 'slug': 'gz-mazegame', 'directory': 'gz-mazegame', 'port': 9242, 'enabled': True},
    {'name': 'Mazerunner', 'slug': 'gz-mazerunner', 'directory': 'gz-mazerunner', 'port': 9243, 'enabled': True},
    {'name': 'Memorization Card', 'slug': 'gz-memorization-card', 'directory': 'gz-memorization-card', 'port': 9244, 'enabled': True},
    {'name': 'Memory Cards Game', 'slug': 'gz-memory-cards-game', 'directory': 'gz-memory-cards-game', 'port': 9245, 'enabled': True},
    {'name': 'Memory Flip', 'slug': 'gz-memory-flip', 'directory': 'gz-memory-flip', 'port': 9246, 'enabled': True},
    {'name': 'Memory Game', 'slug': 'gz-memory-game', 'directory': 'gz-memory-game', 'port': 9247, 'enabled': True},
    {'name': 'Memory Matching Game', 'slug': 'gz-memory-matching-game', 'directory': 'gz-memory-matching-game', 'port': 9248, 'enabled': True},
    {'name': 'Menja', 'slug': 'gz-menja', 'directory': 'gz-menja', 'port': 9249, 'enabled': True},
    {'name': 'Menja Block Breaker', 'slug': 'gz-menja-block-breaker', 'directory': 'gz-menja-block-breaker', 'port': 9250, 'enabled': True},
    {'name': 'Minesweeper', 'slug': 'gz-minesweeper', 'directory': 'gz-minesweeper', 'port': 9251, 'enabled': True},
    {'name': 'Minesweeper Easy', 'slug': 'gz-minesweeper-easy', 'directory': 'gz-minesweeper-easy', 'port': 9252, 'enabled': True},
    {'name': 'Modulo Game', 'slug': 'gz-modulo-game', 'directory': 'gz-modulo-game', 'port': 9253, 'enabled': True},
    {'name': 'Morse Code Generator', 'slug': 'gz-morse-code-generator', 'directory': 'gz-morse-code-generator', 'port': 9254, 'enabled': True},
    {'name': 'Movie Guessing Game', 'slug': 'gz-movie-guessing-game', 'directory': 'gz-movie-guessing-game', 'port': 9255, 'enabled': True},
    {'name': 'Mrfakegame', 'slug': 'gz-mrfakegame', 'directory': 'gz-mrfakegame', 'port': 9256, 'enabled': True},
    {'name': 'Music Guess Game', 'slug': 'gz-music-guess-game', 'directory': 'gz-music-guess-game', 'port': 9257, 'enabled': True},
    {'name': 'Musical Floor', 'slug': 'gz-musical-floor', 'directory': 'gz-musical-floor', 'port': 9258, 'enabled': True},
    {'name': 'Musical Memory', 'slug': 'gz-musical-memory', 'directory': 'gz-musical-memory', 'port': 9259, 'enabled': True},
    {'name': 'My Mine Sweeper', 'slug': 'gz-my-mine-sweeper', 'directory': 'gz-my-mine-sweeper', 'port': 9260, 'enabled': True},
    {'name': 'Norman The Necromancer', 'slug': 'gz-norman-the-necromancer', 'directory': 'gz-norman-the-necromancer', 'port': 9261, 'enabled': True},
    {'name': 'Noughts And Crosses', 'slug': 'gz-noughts-and-crosses', 'directory': 'gz-noughts-and-crosses', 'port': 9262, 'enabled': True},
    {'name': 'Numeral Whiz', 'slug': 'gz-numeral-whiz', 'directory': 'gz-numeral-whiz', 'port': 9263, 'enabled': True},
    {'name': 'Observe The Cloud', 'slug': 'gz-observe-the-cloud', 'directory': 'gz-observe-the-cloud', 'port': 9264, 'enabled': True},
    {'name': 'Oh Flip', 'slug': 'gz-oh-flip', 'directory': 'gz-oh-flip', 'port': 9265, 'enabled': True},
    {'name': 'Omf 2097 Remastered', 'slug': 'omf-2097-remastered', 'directory': 'omf-2097-remastered', 'port': 9266, 'enabled': True},
    {'name': 'Operation Ironhold', 'slug': 'operation-ironhold', 'directory': 'operation-ironhold', 'port': 9267, 'enabled': True},
    {'name': 'Othello', 'slug': 'gz-othello', 'directory': 'gz-othello', 'port': 9268, 'enabled': True},
    {'name': 'Otherworldly Odyssey', 'slug': 'gz-otherworldly-odyssey', 'directory': 'gz-otherworldly-odyssey', 'port': 9269, 'enabled': True},
    {'name': 'Pac Fpom', 'slug': 'pac-fpom', 'directory': 'pac-fpom', 'port': 9270, 'enabled': True},
    {'name': 'Pacific Air Battle', 'slug': 'gz-pacific-air-battle', 'directory': 'gz-pacific-air-battle', 'port': 9271, 'enabled': True},
    {'name': 'Packabunchas', 'slug': 'gz-packabunchas', 'directory': 'gz-packabunchas', 'port': 9272, 'enabled': True},
    {'name': 'Pacman Game', 'slug': 'pacman-game', 'directory': 'pacman-game', 'port': 9273, 'enabled': True},
    {'name': 'Path Finder', 'slug': 'gz-path-finder', 'directory': 'gz-path-finder', 'port': 9274, 'enabled': True},
    {'name': 'Pattern Creation Game', 'slug': 'gz-pattern-creation-game', 'directory': 'gz-pattern-creation-game', 'port': 9275, 'enabled': True},
    {'name': 'Penalty Shootout Game', 'slug': 'gz-penalty-shootout-game', 'directory': 'gz-penalty-shootout-game', 'port': 9276, 'enabled': True},
    {'name': 'Pendulum', 'slug': 'pendulum', 'directory': 'pendulum', 'port': 9277, 'enabled': True},
    {'name': 'Penpointerfight', 'slug': 'gz-penpointerfight', 'directory': 'gz-penpointerfight', 'port': 9278, 'enabled': True},
    {'name': 'Piano', 'slug': 'gz-piano', 'directory': 'gz-piano', 'port': 9279, 'enabled': True},
    {'name': 'Pianotiles Game', 'slug': 'gz-pianotiles-game', 'directory': 'gz-pianotiles-game', 'port': 9280, 'enabled': True},
    {'name': 'Pictionary Game', 'slug': 'gz-pictionary-game', 'directory': 'gz-pictionary-game', 'port': 9281, 'enabled': True},
    {'name': 'Pinball', 'slug': 'gz-pinball', 'directory': 'gz-pinball', 'port': 9282, 'enabled': True},
    {'name': 'Ping Pong Multiplayer', 'slug': 'gz-ping-pong-multiplayer', 'directory': 'gz-ping-pong-multiplayer', 'port': 9283, 'enabled': True},
    {'name': 'Pixel Painter', 'slug': 'gz-pixel-painter', 'directory': 'gz-pixel-painter', 'port': 9284, 'enabled': True},
    {'name': 'Pixel Smash', 'slug': 'gz-pixel-smash', 'directory': 'gz-pixel-smash', 'port': 9285, 'enabled': True},
    {'name': 'Pixels From Space', 'slug': 'gz-pixels-from-space', 'directory': 'gz-pixels-from-space', 'port': 9286, 'enabled': True},
    {'name': 'Planet Game', 'slug': 'gz-planet-game', 'directory': 'gz-planet-game', 'port': 9287, 'enabled': True},
    {'name': 'Plankman', 'slug': 'gz-plankman', 'directory': 'gz-plankman', 'port': 9288, 'enabled': True},
    {'name': 'Platform Game', 'slug': 'gz-platform-game', 'directory': 'gz-platform-game', 'port': 9289, 'enabled': True},
    {'name': 'Pokemon Ball Finder', 'slug': 'gz-pokemon-ball-finder', 'directory': 'gz-pokemon-ball-finder', 'port': 9290, 'enabled': True},
    {'name': 'Pokemon Stats Card', 'slug': 'gz-pokemon-stats-card', 'directory': 'gz-pokemon-stats-card', 'port': 9291, 'enabled': True},
    {'name': 'Poker Dice', 'slug': 'gz-poker-dice', 'directory': 'gz-poker-dice', 'port': 9292, 'enabled': True},
    {'name': 'Pong', 'slug': 'gz-pong', 'directory': 'gz-pong', 'port': 9293, 'enabled': True},
    {'name': 'Pong Ecsy', 'slug': 'pong-ecsy', 'directory': 'pong-ecsy', 'port': 9294, 'enabled': True},
    {'name': 'Pop The Bubbles', 'slug': 'gz-pop-the-bubbles', 'directory': 'gz-pop-the-bubbles', 'port': 9295, 'enabled': True},
    {'name': 'Puzzel Winner', 'slug': 'gz-puzzel-winner', 'directory': 'gz-puzzel-winner', 'port': 9296, 'enabled': True},
    {'name': 'Puzzle Game', 'slug': 'gz-puzzle-game', 'directory': 'gz-puzzle-game', 'port': 9297, 'enabled': True},
    {'name': 'Quick Click', 'slug': 'gz-quick-click', 'directory': 'gz-quick-click', 'port': 9298, 'enabled': True},
    {'name': 'Quick Math', 'slug': 'gz-quick-math', 'directory': 'gz-quick-math', 'port': 9299, 'enabled': True},
    {'name': 'Quickfingers', 'slug': 'gz-quickfingers', 'directory': 'gz-quickfingers', 'port': 9300, 'enabled': True},
    {'name': 'Quiz Game', 'slug': 'gz-quiz-game', 'directory': 'gz-quiz-game', 'port': 9301, 'enabled': True},
    {'name': 'Quiz It Out', 'slug': 'gz-quiz-it-out', 'directory': 'gz-quiz-it-out', 'port': 9302, 'enabled': True},
    {'name': 'Quizify', 'slug': 'gz-quizify', 'directory': 'gz-quizify', 'port': 9303, 'enabled': True},
    {'name': 'Quizzapp', 'slug': 'gz-quizzapp', 'directory': 'gz-quizzapp', 'port': 9304, 'enabled': True},
    {'name': 'Random Advice Generator', 'slug': 'gz-random-advice-generator', 'directory': 'gz-random-advice-generator', 'port': 9305, 'enabled': True},
    {'name': 'Random Joke Generator', 'slug': 'gz-random-joke-generator', 'directory': 'gz-random-joke-generator', 'port': 9306, 'enabled': True},
    {'name': 'Reaction Teaser', 'slug': 'gz-reaction-teaser', 'directory': 'gz-reaction-teaser', 'port': 9307, 'enabled': True},
    {'name': 'Reaction Time', 'slug': 'gz-reaction-time', 'directory': 'gz-reaction-time', 'port': 9308, 'enabled': True},
    {'name': 'Recognizing Figures', 'slug': 'gz-recognizing-figures', 'directory': 'gz-recognizing-figures', 'port': 9309, 'enabled': True},
    {'name': 'Rectangular', 'slug': 'gz-rectangular', 'directory': 'gz-rectangular', 'port': 9310, 'enabled': True},
    {'name': 'Reflex Game', 'slug': 'gz-reflex-game', 'directory': 'gz-reflex-game', 'port': 9311, 'enabled': True},
    {'name': 'Remember The Color', 'slug': 'gz-remember-the-color', 'directory': 'gz-remember-the-color', 'port': 9312, 'enabled': True},
    {'name': 'Response Reaction', 'slug': 'gz-response-reaction', 'directory': 'gz-response-reaction', 'port': 9313, 'enabled': True},
    {'name': 'Retro Dungeon Puzzle', 'slug': 'gz-retro-dungeon-puzzle', 'directory': 'gz-retro-dungeon-puzzle', 'port': 9314, 'enabled': True},
    {'name': 'Reverse Memory', 'slug': 'gz-reverse-memory', 'directory': 'gz-reverse-memory', 'port': 9315, 'enabled': True},
    {'name': 'Riddle Game', 'slug': 'gz-riddle-game', 'directory': 'gz-riddle-game', 'port': 9316, 'enabled': True},
    {'name': 'Riddle Room', 'slug': 'gz-riddle-room', 'directory': 'gz-riddle-room', 'port': 9317, 'enabled': True},
    {'name': 'Risky Nav', 'slug': 'gz-risky-nav', 'directory': 'gz-risky-nav', 'port': 9318, 'enabled': True},
    {'name': 'Rock Paper Scissor', 'slug': 'gz-rock-paper-scissor', 'directory': 'gz-rock-paper-scissor', 'port': 9319, 'enabled': True},
    {'name': 'Rock Paper Scissors', 'slug': 'gz-rock-paper-scissors', 'directory': 'gz-rock-paper-scissors', 'port': 9320, 'enabled': True},
    {'name': 'Rock Paper Scissors Lizard Spock', 'slug': 'gz-rock-paper-scissors-lizard-spock', 'directory': 'gz-rock-paper-scissors-lizard-spock', 'port': 9321, 'enabled': True},
    {'name': 'Rocket Ride', 'slug': 'gz-rocket-ride', 'directory': 'gz-rocket-ride', 'port': 9322, 'enabled': True},
    {'name': 'Rocket Shooter', 'slug': 'gz-rocket-shooter', 'directory': 'gz-rocket-shooter', 'port': 9323, 'enabled': True},
    {'name': 'Rocket Showdown', 'slug': 'gz-rocket-showdown', 'directory': 'gz-rocket-showdown', 'port': 9324, 'enabled': True},
    {'name': 'Roulette', 'slug': 'gz-roulette', 'directory': 'gz-roulette', 'port': 9325, 'enabled': True},
    {'name': "Rubik'S Solver", 'slug': 'gz-rubiks-solver', 'directory': 'gz-rubiks-solver', 'port': 9326, 'enabled': True},
    {'name': 'Run Dora Run', 'slug': 'gz-run-dora-run', 'directory': 'gz-run-dora-run', 'port': 9327, 'enabled': True},
    {'name': 'Samurai Fighting Game', 'slug': 'gz-samurai-fighting-game', 'directory': 'gz-samurai-fighting-game', 'port': 9328, 'enabled': True},
    {'name': 'Save Princess', 'slug': 'gz-save-princess', 'directory': 'gz-save-princess', 'port': 9329, 'enabled': True},
    {'name': 'Save The Forest', 'slug': 'gz-save-the-forest', 'directory': 'gz-save-the-forest', 'port': 9330, 'enabled': True},
    {'name': 'Sciarra Of Colors', 'slug': 'gz-sciarra-of-colors', 'directory': 'gz-sciarra-of-colors', 'port': 9331, 'enabled': True},
    {'name': 'Scifi Alchemy', 'slug': 'gz-scifi-alchemy', 'directory': 'gz-scifi-alchemy', 'port': 9332, 'enabled': True},
    {'name': 'Screen Pet Game', 'slug': 'gz-screen-pet-game', 'directory': 'gz-screen-pet-game', 'port': 9333, 'enabled': True},
    {'name': 'Scrollzz', 'slug': 'scrollzz', 'directory': 'scrollzz', 'port': 9334, 'enabled': True},
    {'name': 'Shadow Pokeguess', 'slug': 'gz-shadow-pokeguess', 'directory': 'gz-shadow-pokeguess', 'port': 9335, 'enabled': True},
    {'name': 'Shape Blocks', 'slug': 'gz-shape-blocks', 'directory': 'gz-shape-blocks', 'port': 9336, 'enabled': True},
    {'name': 'Shoot The Balloon', 'slug': 'gz-shoot-the-balloon', 'directory': 'gz-shoot-the-balloon', 'port': 9337, 'enabled': True},
    {'name': 'Short Circuit', 'slug': 'gz-short-circuit', 'directory': 'gz-short-circuit', 'port': 9338, 'enabled': True},
    {'name': 'Shpere', 'slug': 'gz-shpere', 'directory': 'gz-shpere', 'port': 9339, 'enabled': True},
    {'name': 'Shroomknight', 'slug': 'gz-shroomknight', 'directory': 'gz-shroomknight', 'port': 9340, 'enabled': True},
    {'name': 'Simon Game Challenge', 'slug': 'gz-simon-game-challenge', 'directory': 'gz-simon-game-challenge', 'port': 9341, 'enabled': True},
    {'name': 'Single Player Solitaire', 'slug': 'gz-single-player-solitaire', 'directory': 'gz-single-player-solitaire', 'port': 9342, 'enabled': True},
    {'name': 'Sky Dodge', 'slug': 'gz-sky-dodge', 'directory': 'gz-sky-dodge', 'port': 9343, 'enabled': True},
    {'name': 'Slice Storm', 'slug': 'gz-slice-storm', 'directory': 'gz-slice-storm', 'port': 9344, 'enabled': True},
    {'name': 'Slide Master Puzzle', 'slug': 'gz-slide-master-puzzle', 'directory': 'gz-slide-master-puzzle', 'port': 9345, 'enabled': True},
    {'name': 'Slide Puzzle', 'slug': 'gz-slide-puzzle', 'directory': 'gz-slide-puzzle', 'port': 9346, 'enabled': True},
    {'name': 'Sliding Puzzle', 'slug': 'gz-sliding-puzzle', 'directory': 'gz-sliding-puzzle', 'port': 9347, 'enabled': True},
    {'name': 'Slime Attack Game', 'slug': 'gz-slime-attack-game', 'directory': 'gz-slime-attack-game', 'port': 9348, 'enabled': True},
    {'name': 'Slotjs', 'slug': 'slotjs', 'directory': 'slotjs', 'port': 9349, 'enabled': True},
    {'name': 'Smashing Blocks', 'slug': 'gz-smashing-blocks', 'directory': 'gz-smashing-blocks', 'port': 9350, 'enabled': True},
    {'name': 'Snail Game', 'slug': 'gz-snail-game', 'directory': 'gz-snail-game', 'port': 9351, 'enabled': True},
    {'name': 'Snake', 'slug': 'gz-snake', 'directory': 'gz-snake', 'port': 9352, 'enabled': True},
    {'name': 'Snake Game', 'slug': 'snake-game', 'directory': 'snake-game', 'port': 9353, 'enabled': True},
    {'name': 'Snake Game 2D', 'slug': 'snake-game-2d', 'directory': 'snake-game-2d', 'port': 9354, 'enabled': True},
    {'name': 'Snake Game P5', 'slug': 'snake-game-p5', 'directory': 'snake-game-p5', 'port': 9355, 'enabled': True},
    {'name': 'Snake Gun Water', 'slug': 'gz-snake-gun-water', 'directory': 'gz-snake-gun-water', 'port': 9356, 'enabled': True},
    {'name': 'Snake Ladder', 'slug': 'gz-snake-ladder', 'directory': 'gz-snake-ladder', 'port': 9357, 'enabled': True},
    {'name': 'Snake Vue3', 'slug': 'snake-vue3', 'directory': 'snake-vue3', 'port': 9358, 'enabled': True},
    {'name': 'Snake Water Gun', 'slug': 'gz-snake-water-gun', 'directory': 'gz-snake-water-gun', 'port': 9359, 'enabled': True},
    {'name': 'Snake.Io', 'slug': 'snake-io', 'directory': 'snake-io', 'port': 9360, 'enabled': True},
    {'name': 'Snooze', 'slug': 'gz-snooze', 'directory': 'gz-snooze', 'port': 9361, 'enabled': True},
    {'name': 'Snowball2', 'slug': 'snowball2', 'directory': 'snowball2', 'port': 9362, 'enabled': True},
    {'name': 'Snowboarder', 'slug': 'snowboarder', 'directory': 'snowboarder', 'port': 9363, 'enabled': True},
    {'name': 'Snowling', 'slug': 'snowling', 'directory': 'snowling', 'port': 9364, 'enabled': True},
    {'name': 'Soccer', 'slug': 'gz-soccer', 'directory': 'gz-soccer', 'port': 9365, 'enabled': True},
    {'name': 'Solitaire', 'slug': 'gz-solitaire', 'directory': 'gz-solitaire', 'port': 9366, 'enabled': True},
    {'name': 'Sonic The Hedgehog', 'slug': 'gz-sonic-the-hedgehog', 'directory': 'gz-sonic-the-hedgehog', 'port': 9367, 'enabled': True},
    {'name': 'Space Dominators', 'slug': 'gz-space-dominators', 'directory': 'gz-space-dominators', 'port': 9368, 'enabled': True},
    {'name': 'Space Drifter', 'slug': 'gz-space-drifter', 'directory': 'gz-space-drifter', 'port': 9369, 'enabled': True},
    {'name': 'Space Explorer', 'slug': 'gz-space-explorer', 'directory': 'gz-space-explorer', 'port': 9370, 'enabled': True},
    {'name': 'Space Gun', 'slug': 'gz-space-gun', 'directory': 'gz-space-gun', 'port': 9371, 'enabled': True},
    {'name': 'Space Huggers', 'slug': 'gz-space-huggers', 'directory': 'gz-space-huggers', 'port': 9372, 'enabled': True},
    {'name': 'Space Invaders', 'slug': 'gz-space-invaders', 'directory': 'gz-space-invaders', 'port': 9373, 'enabled': True},
    {'name': 'Space War', 'slug': 'gz-space-war', 'directory': 'gz-space-war', 'port': 9374, 'enabled': True},
    {'name': 'Spaceducts', 'slug': 'gz-spaceducts', 'directory': 'gz-spaceducts', 'port': 9375, 'enabled': True},
    {'name': 'Spacehuggers', 'slug': 'spacehuggers', 'directory': 'spacehuggers', 'port': 9376, 'enabled': True},
    {'name': 'Spaceminer', 'slug': 'spaceminer', 'directory': 'spaceminer', 'port': 9377, 'enabled': True},
    {'name': 'Spacepi', 'slug': 'gz-spacepi', 'directory': 'gz-spacepi', 'port': 9378, 'enabled': True},
    {'name': 'Spelling Bee', 'slug': 'gz-spelling-bee', 'directory': 'gz-spelling-bee', 'port': 9379, 'enabled': True},
    {'name': 'Spirograph', 'slug': 'gz-spirograph', 'directory': 'gz-spirograph', 'port': 9380, 'enabled': True},
    {'name': 'Squared Lines', 'slug': 'gz-squared-lines', 'directory': 'gz-squared-lines', 'port': 9381, 'enabled': True},
    {'name': 'Squashing Your Enemy', 'slug': 'gz-squashing-your-enemy', 'directory': 'gz-squashing-your-enemy', 'port': 9382, 'enabled': True},
    {'name': 'Star Trek Trivia', 'slug': 'gz-star-trek-trivia', 'directory': 'gz-star-trek-trivia', 'port': 9383, 'enabled': True},
    {'name': 'Steam Punk', 'slug': 'gz-steam-punk', 'directory': 'gz-steam-punk', 'port': 9384, 'enabled': True},
    {'name': 'Steampunk Flappybird', 'slug': 'gz-steampunk-flappybird', 'directory': 'gz-steampunk-flappybird', 'port': 9385, 'enabled': True},
    {'name': 'Stolen Sword', 'slug': 'gz-stolen-sword', 'directory': 'gz-stolen-sword', 'port': 9386, 'enabled': True},
    {'name': 'Stone Paper Scissor', 'slug': 'gz-stone-paper-scissor', 'directory': 'gz-stone-paper-scissor', 'port': 9387, 'enabled': True},
    {'name': 'Subway Surfers', 'slug': 'gz-subway-surfers', 'directory': 'gz-subway-surfers', 'port': 9388, 'enabled': True},
    {'name': 'Sudoku', 'slug': 'gz-sudoku', 'directory': 'gz-sudoku', 'port': 9389, 'enabled': True},
    {'name': 'Sudoku Light Theme', 'slug': 'gz-sudoku-light-theme', 'directory': 'gz-sudoku-light-theme', 'port': 9390, 'enabled': True},
    {'name': 'Super Mario Run', 'slug': 'gz-super-mario-run', 'directory': 'gz-super-mario-run', 'port': 9391, 'enabled': True},
    {'name': 'Supercold', 'slug': 'supercold', 'directory': 'supercold', 'port': 9392, 'enabled': True},
    {'name': 'Swift', 'slug': 'gz-swift', 'directory': 'gz-swift', 'port': 9393, 'enabled': True},
    {'name': 'Taptaptap', 'slug': 'taptaptap', 'directory': 'taptaptap', 'port': 9394, 'enabled': True},
    {'name': 'Target Torrent', 'slug': 'gz-target-torrent', 'directory': 'gz-target-torrent', 'port': 9395, 'enabled': True},
    {'name': 'Tech Memory Block', 'slug': 'gz-tech-memory-block', 'directory': 'gz-tech-memory-block', 'port': 9396, 'enabled': True},
    {'name': 'Technical Mind Game', 'slug': 'gz-technical-mind-game', 'directory': 'gz-technical-mind-game', 'port': 9397, 'enabled': True},
    {'name': 'Tenacity', 'slug': 'gz-tenacity', 'directory': 'gz-tenacity', 'port': 9398, 'enabled': True},
    {'name': 'Tennis', 'slug': 'gz-tennis', 'directory': 'gz-tennis', 'port': 9399, 'enabled': True},
    {'name': 'The Labyrinth Of Death', 'slug': 'gz-the-labyrinth-of-death', 'directory': 'gz-the-labyrinth-of-death', 'port': 9400, 'enabled': True},
    {'name': 'The Last Spartan', 'slug': 'gz-the-last-spartan', 'directory': 'gz-the-last-spartan', 'port': 9401, 'enabled': True},
    {'name': 'The Raising Fighting Spirits', 'slug': 'gz-the-raising-fighting-spirits', 'directory': 'gz-the-raising-fighting-spirits', 'port': 9402, 'enabled': True},
    {'name': 'Thirteen', 'slug': 'gz-thirteen', 'directory': 'gz-thirteen', 'port': 9403, 'enabled': True},
    {'name': 'Tic Tac Toe', 'slug': 'gz-tic-tac-toe', 'directory': 'gz-tic-tac-toe', 'port': 9404, 'enabled': True},
    {'name': 'Tic Tac Toe Game', 'slug': 'gz-tic-tac-toe-game', 'directory': 'gz-tic-tac-toe-game', 'port': 9405, 'enabled': True},
    {'name': 'Tic Tac Toe Neon', 'slug': 'gz-tic-tac-toe-neon', 'directory': 'gz-tic-tac-toe-neon', 'port': 9406, 'enabled': True},
    {'name': 'Tile Game', 'slug': 'gz-tile-game', 'directory': 'gz-tile-game', 'port': 9407, 'enabled': True},
    {'name': 'Tilting Maze', 'slug': 'gz-tilting-maze', 'directory': 'gz-tilting-maze', 'port': 9408, 'enabled': True},
    {'name': 'Timber Terry', 'slug': 'gz-timber-terry', 'directory': 'gz-timber-terry', 'port': 9409, 'enabled': True},
    {'name': 'Tinker Jump Master', 'slug': 'gz-tinker-jump-master', 'directory': 'gz-tinker-jump-master', 'port': 9410, 'enabled': True},
    {'name': 'Tjmj', 'slug': 'tjmj', 'directory': 'tjmj', 'port': 9411, 'enabled': True},
    {'name': 'Touch No Fire Game', 'slug': 'gz-touch-no-fire-game', 'directory': 'gz-touch-no-fire-game', 'port': 9412, 'enabled': True},
    {'name': 'Touch The Ball', 'slug': 'gz-touch-the-ball', 'directory': 'gz-touch-the-ball', 'port': 9413, 'enabled': True},
    {'name': 'Tower Block Game', 'slug': 'gz-tower-block-game', 'directory': 'gz-tower-block-game', 'port': 9414, 'enabled': True},
    {'name': 'Tower Blocks', 'slug': 'gz-tower-blocks', 'directory': 'gz-tower-blocks', 'port': 9415, 'enabled': True},
    {'name': 'Tower Defence Game', 'slug': 'gz-tower-defence-game', 'directory': 'gz-tower-defence-game', 'port': 9416, 'enabled': True},
    {'name': 'Tower Defense', 'slug': 'gz-tower-defense', 'directory': 'gz-tower-defense', 'port': 9417, 'enabled': True},
    {'name': 'Tower Of Hanoi', 'slug': 'gz-tower-of-hanoi', 'directory': 'gz-tower-of-hanoi', 'port': 9418, 'enabled': True},
    {'name': 'Tower Stack', 'slug': 'gz-tower-stack', 'directory': 'gz-tower-stack', 'port': 9419, 'enabled': True},
    {'name': 'Traffic Run', 'slug': 'gz-traffic-run', 'directory': 'gz-traffic-run', 'port': 9420, 'enabled': True},
    {'name': 'Trashem', 'slug': 'gz-trashem', 'directory': 'gz-trashem', 'port': 9421, 'enabled': True},
    {'name': 'Treasure Hunt', 'slug': 'gz-treasure-hunt', 'directory': 'gz-treasure-hunt', 'port': 9422, 'enabled': True},
    {'name': 'Trex Run', 'slug': 'gz-trex-run', 'directory': 'gz-trex-run', 'port': 9423, 'enabled': True},
    {'name': 'Triangle Back To Home', 'slug': 'gz-triangle-back-to-home', 'directory': 'gz-triangle-back-to-home', 'port': 9424, 'enabled': True},
    {'name': 'Trihand Tactics', 'slug': 'gz-trihand-tactics', 'directory': 'gz-trihand-tactics', 'port': 9425, 'enabled': True},
    {'name': 'Trio Match', 'slug': 'gz-trio-match', 'directory': 'gz-trio-match', 'port': 9426, 'enabled': True},
    {'name': 'Truth And Dare', 'slug': 'gz-truth-and-dare', 'directory': 'gz-truth-and-dare', 'port': 9427, 'enabled': True},
    {'name': 'Turn On The Light', 'slug': 'gz-turn-on-the-light', 'directory': 'gz-turn-on-the-light', 'port': 9428, 'enabled': True},
    {'name': 'Tuxocide', 'slug': 'tuxocide', 'directory': 'tuxocide', 'port': 9429, 'enabled': True},
    {'name': 'Typing Game', 'slug': 'gz-typing-game', 'directory': 'gz-typing-game', 'port': 9430, 'enabled': True},
    {'name': 'Typing Speed Test Game', 'slug': 'gz-typing-speed-test-game', 'directory': 'gz-typing-speed-test-game', 'port': 9431, 'enabled': True},
    {'name': 'Typing Speed Test2', 'slug': 'gz-typing-speed-test2', 'directory': 'gz-typing-speed-test2', 'port': 9432, 'enabled': True},
    {'name': 'Ultimate Football Manager', 'slug': 'gz-ultimate-football-manager', 'directory': 'gz-ultimate-football-manager', 'port': 9433, 'enabled': True},
    {'name': 'Unlock The Lock', 'slug': 'gz-unlock-the-lock', 'directory': 'gz-unlock-the-lock', 'port': 9434, 'enabled': True},
    {'name': 'Uno Game With Computer', 'slug': 'gz-uno-game-with-computer', 'directory': 'gz-uno-game-with-computer', 'port': 9435, 'enabled': True},
    {'name': 'Uxu', 'slug': 'gz-uxu', 'directory': 'gz-uxu', 'port': 9436, 'enabled': True},
    {'name': 'Virtual Pet', 'slug': 'gz-virtual-pet', 'directory': 'gz-virtual-pet', 'port': 9437, 'enabled': True},
    {'name': 'Vlackjack', 'slug': 'vlackjack', 'directory': 'vlackjack', 'port': 9438, 'enabled': True},
    {'name': 'Wault Master', 'slug': 'gz-wault-master', 'directory': 'gz-wault-master', 'port': 9439, 'enabled': True},
    {'name': 'Whack A Mole', 'slug': 'gz-whack-a-mole', 'directory': 'gz-whack-a-mole', 'port': 9440, 'enabled': True},
    {'name': 'Whack A Mole Mario Version', 'slug': 'gz-whack-a-mole-mario-version', 'directory': 'gz-whack-a-mole-mario-version', 'port': 9441, 'enabled': True},
    {'name': 'Wheel Of Fortune', 'slug': 'gz-wheel-of-fortune', 'directory': 'gz-wheel-of-fortune', 'port': 9442, 'enabled': True},
    {'name': 'Wheel Of Fortunes', 'slug': 'gz-wheel-of-fortunes', 'directory': 'gz-wheel-of-fortunes', 'port': 9443, 'enabled': True},
    {'name': 'Which Color', 'slug': 'gz-which-color', 'directory': 'gz-which-color', 'port': 9444, 'enabled': True},
    {'name': 'Wildcard Bonanza', 'slug': 'gz-wildcard-bonanza', 'directory': 'gz-wildcard-bonanza', 'port': 9445, 'enabled': True},
    {'name': 'Witty Word Quest', 'slug': 'gz-witty-word-quest', 'directory': 'gz-witty-word-quest', 'port': 9446, 'enabled': True},
    {'name': 'Word Association', 'slug': 'gz-word-association', 'directory': 'gz-word-association', 'port': 9447, 'enabled': True},
    {'name': 'Word Association Game', 'slug': 'gz-word-association-game', 'directory': 'gz-word-association-game', 'port': 9448, 'enabled': True},
    {'name': 'Word Beater', 'slug': 'word-beater', 'directory': 'word-beater', 'port': 9449, 'enabled': True},
    {'name': 'Word Blitz', 'slug': 'gz-word-blitz', 'directory': 'gz-word-blitz', 'port': 9450, 'enabled': True},
    {'name': 'Word Peaks', 'slug': 'word-peaks', 'directory': 'word-peaks', 'port': 9451, 'enabled': True},
    {'name': 'Wordchain', 'slug': 'gz-wordchain', 'directory': 'gz-wordchain', 'port': 9452, 'enabled': True},
    {'name': 'Wordled', 'slug': 'wordled', 'directory': 'wordled', 'port': 9453, 'enabled': True},
    {'name': 'Wordscramble', 'slug': 'gz-wordscramble', 'directory': 'gz-wordscramble', 'port': 9454, 'enabled': True},
    {'name': 'Wordsprint', 'slug': 'gz-wordsprint', 'directory': 'gz-wordsprint', 'port': 9455, 'enabled': True},
    {'name': 'Xonix Js', 'slug': 'xonix-js', 'directory': 'xonix-js', 'port': 9456, 'enabled': True},
    {'name': 'Zombie Shooter', 'slug': 'gz-zombie-shooter', 'directory': 'gz-zombie-shooter', 'port': 9457, 'enabled': True},
    {'name': 'Zurbo', 'slug': 'gz-zurbo', 'directory': 'gz-zurbo', 'port': 9458, 'enabled': True},
]


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, fmt, *args):
        pass

    def do_GET(self):
        # YORG still asks for leaderboard endpoints in offline mode. Answer locally.
        if urlsplit(self.path).path.startswith('/offline-api/'):
            path = urlsplit(self.path).path
            if path.endswith('/highscore/total'):
                payload = {'Entries': {}}
            elif path.endswith('/highscore/current'):
                payload = {'Entries': [], 'PlayerRank': 0}
            elif path.endswith('/game/create'):
                payload = {'GameId': 'offline-local-game'}
            elif path.endswith('/game/update'):
                payload = {'success': True}
            else:
                payload = {}
            body = json.dumps(payload, ensure_ascii=False).encode('utf-8')
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Content-Length', str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        super().do_GET()

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        self.send_header('X-Content-Type-Options', 'nosniff')
        super().end_headers()


class QuietServer(ThreadingHTTPServer):
    daemon_threads = True

    def handle_error(self, request, client_address):
        pass


def load_games():
    if not REGISTRY.exists():
        return DEFAULT_GAMES
    try:
        data = json.loads(REGISTRY.read_text(encoding='utf-8'))
        games = data.get('games', []) if isinstance(data, dict) else data
        if not isinstance(games, list):
            raise ValueError('games must be a list')
        return games
    except Exception as exc:
        print(f'games.json 读取失败，使用内置列表：{exc}')
        return DEFAULT_GAMES


def serve(port, directory):
    handler = partial(QuietHandler, directory=str(directory))
    httpd = QuietServer(('localhost', port), handler)
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    return httpd


def main():
    os.chdir(ROOT)
    servers = []
    used_ports = set()

    for game in load_games():
        if not isinstance(game, dict) or game.get('enabled', True) is False:
            continue
        try:
            name = str(game.get('name') or game.get('slug') or '未命名游戏')
            port = int(game['port'])
            directory = (ROOT / str(game['directory'])).resolve()
            if not directory.is_relative_to(ROOT.resolve()):
                raise ValueError('目录超出项目根目录')
            if directory == ROOT.resolve() or not directory.is_dir():
                raise ValueError('游戏目录不存在')
            if port in used_ports:
                raise ValueError(f'端口重复：{port}')
            httpd = serve(port, directory)
        except Exception as exc:
            print(f'跳过 {game!r}：{exc}')
            continue
        used_ports.add(port)
        servers.append(httpd)
        url = f'http://localhost:{port}/'
        print(f'{name}: {url}')

    if not servers:
        print('没有可启动的游戏。请检查 games.json。')
        return

    print('离线游戏服务器已启动。关闭此窗口即可停止。')
    print('请复制上面的地址到浏览器打开；不会再自动打开大量页面。')

    try:
        while True:
            time.sleep(3600)
    except KeyboardInterrupt:
        for server in servers:
            server.shutdown()


if __name__ == '__main__':
    main()
