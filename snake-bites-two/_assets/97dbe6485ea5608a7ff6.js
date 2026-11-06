import template from "/_assets/9b2c0d8fff7df15d9b6b.js";
import { gameLoopState, lastCollision, scores, twoPlayerSwitch } from "/_assets/ad7875aa823261b01ba1.js";
import { EJS } from "/_assets/feb4950d305234d9fe2f.js";
import { createComponentFactory } from "/_assets/9c1ba9c5ce7fc4bae5f4.js";
import { initialize } from "/_assets/ce4bb3e9cde959d26cee.js";

export const cmpModal = createComponentFactory({
	_tplOver: null,
	_tplIntro: null,
	init() {
		this.subscribe(twoPlayerSwitch);
		this.subscribe(gameLoopState);
		this.$on('button.single', 'click', () => twoPlayerSwitch.set(false));
		this.$on('button.multi', 'click', () => twoPlayerSwitch.set(true));
		this.$on('button.again', 'click', () => {
			gameLoopState.update((prev) => ({ ...prev, wasRunning: false }));
			initialize();
		});
		this.render();
	},
	render() {
		const { wasRunning, isRunning, isPaused } = gameLoopState.get();
		if (isRunning || isPaused) {
			this.hide();
		} else if (wasRunning) {
			this._renderGameOver();
		} else {
			this._renderIntro();
		}
	},
	_renderIntro() {
		this.show();
		const two = twoPlayerSwitch.get();
		this.$el.innerHTML = this.templateIntro({
			single: !two,
			multi: two,
			icon: EJS.icon_check_circle({}),
		});
		this.qs(`button.${two ? 'multi' : 'single'}`).focus();
	},
	_renderGameOver: function () {
		this.show();
		const two = twoPlayerSwitch.get();
		const { collidingPieces } = lastCollision.get();
		let detail;
		if (two) {
			// special case head-to-head collision - higher score wins
			if (collidingPieces.length === 2) {
				let score1 = collidingPieces[0].score.get();
				let score2 = collidingPieces[1].score.get();
				if (score1 === score2) {
					detail = `Head to head with equal score! No winner...`;
				} else {
					collidingPieces.sort((a, b) => b.score.get() - a.score.get());
					detail = `Winner is ${collidingPieces[0].label}!`;
				}
			} else {
				const win = { Player1: 'Player2', Player2: 'Player1' };
				const s = collidingPieces[0];
				detail = `Winner is ${win[s.label]}!`;
			}
		} else {
			detail = `Your score is ${scores.get().score1}.`;
		}
		this.$el.innerHTML = this.templateGameOver({ detail });
		this.qs('button.again').focus();
	},
	get templateIntro() {
		if (!this._tplIntro) {
			this._tplIntro = template(`
				<h1>Choose...</h1>
				<div class="buttons">
					<button class="single">
						<%= data.single ? data.icon : '' %> Single player
					</button>
					or
					<button class="multi">
						<%= data.multi ? data.icon : '' %> Two players
					</button>
				</div>
				<h2>...and hit any arrow key to start!</h2>
			`, { variable: 'data' })
		}
		return this._tplIntro;
	},
	get templateGameOver() {
		if (!this._tplOver) {
			this._tplOver = template(`
				<h1>Game over!</h1>
				<h2><%= data.detail %></h2>
				<div class="buttons">
					<button class="again">Play again</button>
				</div>
			`, { variable: 'data' })
		}
		return this._tplOver;
	},
});
