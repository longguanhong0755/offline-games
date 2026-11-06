// @ts-check
/* global Noty */
import { Game } from "/_assets/d0d17b9efa7dd2f10f7d.js";
import { settings } from "/_assets/c44d1ea749ba160dc01c.js";
import { notify } from "/_assets/19f86650942b96cbe2c5.js";

var game;
var isFocused = true;

window.onload = function () {
    game = new Game();

    // If there's a save stored in localStorage, load it
    game.load();

    // Set up autosaving every 10 seconds
    // notify("Game saved") is in this function so that other calls to game.save() don't notify when not necessary
    // TODO: make a settings option for how long between saves

    const saveAndNotify = function (game) {
        game.save();
        if (isFocused) {
            notify("Game saved");
        }
        setTimeout(saveAndNotify, settings.saveTime * 1000, game);
    };
    setTimeout(saveAndNotify, 10 * 1000, game);

    game.tick();

    window.addEventListener("blur", function () {
        isFocused = false;
    });

    window.addEventListener("focus", function () {
        isFocused = true;
    });

    window.addEventListener("keydown", function (e) { game.handleKey.call(game, e.key.toUpperCase()); });
};

export { game };
