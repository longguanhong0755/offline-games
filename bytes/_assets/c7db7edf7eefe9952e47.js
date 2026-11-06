import { Speed } from '/_assets/70485fd07f8327cbbef7.js';
import { Board, Canvas } from '/_assets/f1ea86d4940ac78e8557.js';
export class SlowPlayer {
    constructor() {
        this.color = "#3366FF";
        this.index = SlowPlayer.items_index;
        ++SlowPlayer.items_index;
        ++SlowPlayer.items_active;
    }
    handle_collision(snake) {
        snake.set_speed(Speed.SLOW);
        this.destroy();
    }
    draw() {
        if (!this.position) {
            return;
        }
        var x = (this.position.X * Board.block_size) + 2;
        var y = (this.position.Y * Board.block_size) + 2;
        var size = Board.block_size - 4;
        Canvas.draw_rect(x, y, size, size, this.color);
    }
    destroy() {
        Board.remove_object_at(this.position);
        delete SlowPlayer.instances[this.index];
        --SlowPlayer.items_active;
    }
}
SlowPlayer.instances = {};
SlowPlayer.items_index = 0;
SlowPlayer.items_active = 0;
