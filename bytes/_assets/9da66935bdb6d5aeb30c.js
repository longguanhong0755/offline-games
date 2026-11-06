import { Direction, GameKey } from '/_assets/70485fd07f8327cbbef7.js';
import { Game } from '/_assets/31dea382c93a3e2a238e.js';
export class Controls {
    static process_input() {
        if (!Controls.last_key) {
            return;
        }
        switch (Controls.last_key) {
            case GameKey.UP:
                if (Game.player_one.direction != Direction.DOWN) {
                    Game.player_one.direction = Direction.UP;
                }
                break;
            case GameKey.DOWN:
                if (Game.player_one.direction != Direction.UP) {
                    Game.player_one.direction = Direction.DOWN;
                }
                break;
            case GameKey.LEFT:
                if (Game.player_one.direction != Direction.RIGHT) {
                    Game.player_one.direction = Direction.LEFT;
                }
                break;
            case GameKey.RIGHT:
                if (Game.player_one.direction != Direction.LEFT) {
                    Game.player_one.direction = Direction.RIGHT;
                }
                break;
            case 32:
                Game.player_one.jump();
        }
        Controls.last_key = null;
    }
}
Controls.last_key = null;
Controls.on_key_up = (ev) => { Controls.last_key = ev.keyCode; };
