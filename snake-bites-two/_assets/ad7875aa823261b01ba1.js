import { createStore } from "/_assets/48a641cd7a7381c20b9c.js";

export const scores = createStore({ score1: 0, score2: 0 });

export const twoPlayerSwitch = createStore(false);

export const boardHTML = createStore('');

export const gameLoopState = createStore({
	wasRunning: false, isRunning: false, isPaused: false
});

export const lastCollision = createStore({});

export const speed = createStore(5);

export const sound = createStore(true);
