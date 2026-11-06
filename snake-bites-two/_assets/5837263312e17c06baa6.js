import { isFn } from '/_assets/35cd96883427a7b8dca0.js';
import { getRandomIntInclusive } from '/_assets/812cf717a0f964e1419f.js';
import { createGameLoop } from '/_assets/f36412eb0d3bb656c189.js';
import { Piece } from '/_assets/f6f51a79d8d0c548b225.js';
import { Board } from '/_assets/cceaf9bb5c2ed4dc1cf5.js';
import { Snake } from '/_assets/63ca14b6a3e83bed4336.js';
import { Apple } from '/_assets/51f594147f985ecdcfe0.js';
import { Obstacle } from '/_assets/a51f217527abc9ea2ffb.js';
import { Bonus } from '/_assets/bb80ebf578365ad5ae6d.js';
import { GAME_EVENT } from '/_assets/32d5eddb7d86ac917f7d.js';
const defaultFactoryOptions = {
    twoPlayers: false,
    x: 23,
    y: 13,
    updateTickFrequencyHz: 5,
    obstaclesCount: 3,
    // the lower value, the higher prob (1 on each bonus like event)
    bonusProbability: 2,
    eatAppleScore: 2,
    eatBonusScore: 5,
};
// this is a game mechanics config manager mostly... (not a core game domain object)
export class Game {
    static KEY = {
        A: 65,
        S: 83,
        D: 68,
        W: 87,
        //
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        //
        SPACEBAR: 32,
        ESCAPE: 27,
    };
    static create(options = {}) {
        options = { ...defaultFactoryOptions, ...options };
        // console.log(options);
        // setup board
        const board = new Board(options.x, options.y);
        // setup snakes
        let snakes = [new Snake(3, Piece.DIRECTION.NORTH)];
        options.twoPlayers && snakes.push(new Snake(3, Piece.DIRECTION.NORTH));
        snakes = snakes.map((s, idx) => {
            const i = idx + 1;
            s.custom = { ...s.custom, cssClass: `snake${i}` };
            s.label = `Player${i}`;
            return s;
        });
        // console.log(snakes.length);
        const xHalf = Math.floor(options.x / 2);
        const yHalf = Math.floor(options.y / 2);
        if (snakes.length === 2) {
            const qtr = Math.floor(xHalf / 2);
            board.setPiece(xHalf + qtr, yHalf, snakes[0]);
            board.setPiece(xHalf - qtr, yHalf, snakes[1]);
        }
        else {
            board.setPiece(xHalf, yHalf, snakes[0]);
        }
        // set up first apple
        board.setPieceAtRandomEmptyXY(new Apple());
        // maybe set up obstacles
        if (options.obstaclesCount > 0) {
            for (let i = 0; i < options.obstaclesCount; i++) {
                board.setPieceAtRandomEmptyXY(new Obstacle());
            }
        }
        // speed config (will effect score updates as well)
        let hz = Math.round(options.updateTickFrequencyHz);
        // set up typical game mechanics
        board.pubsub.subscribe(GAME_EVENT.SNAKE_EATS_APPLE, (snake) => {
            snake.addPostMoveTailAtoms(2);
            board.setPieceAtRandomEmptyXY(new Apple());
            snake.score.update((v) => v + options.eatAppleScore + hz);
            if (options.bonusProbability) {
                const bonus = getRandomIntInclusive(1, Math.abs(options.bonusProbability));
                if (!board.hasPiece(Bonus) && bonus === 1) {
                    const bonus = new Bonus();
                    const [x, y] = board.setPieceAtRandomEmptyXY(bonus);
                    // auto remove bonus...
                    setTimeout(() => {
                        const cell = board.cell(x, y);
                        if (cell === bonus)
                            board.setPiece(x, y, null);
                    }, getRandomIntInclusive(5_000, 15_000));
                }
            }
        });
        board.pubsub.subscribe(GAME_EVENT.SNAKE_EATS_BONUS, (snake) => {
            snake.score.update((v) => v + options.eatBonusScore + hz);
        });
        // setup game loop (do not start yet)
        const loop = createGameLoop(() => ({
            // decrease one hz if two...
            updateTickFrequencyHz: Math.max(2, options.twoPlayers ? hz - 1 : hz),
        }), () => {
            try {
                board.update();
            }
            catch (e) {
                console.warn(e.toString());
                loop.stop();
            }
        }, (ts) => options.renderFn(board), () => isFn(options.setUpFn) && options.setUpFn(board), () => isFn(options.tearDownFn) && options.tearDownFn(board));
        // setup keymap handler
        const keyMap = snakes.reduce((memo, snake, idx) => {
            memo = { ...memo, ...Game._createControlBindingsMap(loop, snake, !idx) };
            return memo;
        }, {});
        const onKeydown = (e) => {
            if (keyMap[e.keyCode]) {
                keyMap[e.keyCode]();
            }
        };
        return { board, snakes, loop, onKeydown };
    }
    static _createControlBindingsMap(loop, snake, useArrows = true) {
        if (!snake)
            return {};
        return {
            [Game.KEY.ESCAPE]: () => {
                if (loop.state.get().isPaused) {
                    loop.togglePause();
                }
            },
            [Game.KEY.SPACEBAR]: () => {
                if (loop.state.get().isRunning) {
                    loop.togglePause();
                }
            },
            [useArrows ? Game.KEY.LEFT : Game.KEY.A]: () => {
                if (!loop.state.get().isPaused) {
                    snake.nextWest();
                }
                loop.start();
            },
            [useArrows ? Game.KEY.RIGHT : Game.KEY.D]: () => {
                if (!loop.state.get().isPaused) {
                    snake.nextEast();
                }
                loop.start();
            },
            [useArrows ? Game.KEY.UP : Game.KEY.W]: () => {
                if (!loop.state.get().isPaused) {
                    snake.nextNorth();
                }
                loop.start();
            },
            [useArrows ? Game.KEY.DOWN : Game.KEY.S]: () => {
                if (!loop.state.get().isPaused) {
                    snake.nextSouth();
                }
                loop.start();
            },
        };
    }
}
