import { Speed } from '/_assets/70485fd07f8327cbbef7.js';
import { Board, Canvas } from '/_assets/f1ea86d4940ac78e8557.js';
export class FastPlayer {
    constructor() {
        this.color = "#3366FF";
        this.index = FastPlayer.items_index;
        ++FastPlayer.items_index;
        ++FastPlayer.items_active;
    }
    handle_collision(snake) {
        snake.set_speed(Speed.FAST);
        this.destroy();
    }
    draw() {
        if (!this.position) {
            return;
        }
        let x = (this.position.X * Board.block_size) + 2;
        let y = (this.position.Y * Board.block_size) + 2;
        let size = Board.block_size - 4;
        Canvas.draw_rect(x, y, size, size, this.color);
    }
    destroy() {
        Board.remove_object_at(this.position);
        delete FastPlayer.instances[this.index];
        --FastPlayer.items_active;
    }
}
FastPlayer.instances = {};
FastPlayer.items_index = 0;
FastPlayer.items_active = 0;
