export class Projectile {
    constructor(game, x, y, isEnemy = false) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = 4;
        this.height = 15;
        this.speed = isEnemy ? 4 : -7;
        this.isEnemy = isEnemy;
        this.markedForDeletion = false;
        // Projectile color/glow
        this.color = isEnemy ? '#FF6B6B' : '#a8ffdb'; // Red for enemy, Mint for player
    }

    update() {
        this.y += this.speed;
        if (this.y > this.game.height || this.y < 0) {
            this.markedForDeletion = true;
        }
    }

    draw(ctx) {
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;

        ctx.beginPath();
        ctx.roundRect(this.x - this.width / 2, this.y, this.width, this.height, 2);
        ctx.fill();
        ctx.restore();
    }
}
