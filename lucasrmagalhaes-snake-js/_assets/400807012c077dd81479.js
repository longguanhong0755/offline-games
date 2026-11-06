import { state } from "/_assets/88d537dafee3853f035b.js";
import { render } from "/_assets/920bc67d2b4c3745f6ea.js";
import { resetGame } from "/_assets/2efb678d768467656a3c.js";
import { bindInputs } from "/_assets/a76348a0ba596af7e527.js";
import { bindUI, applyDifficulty, syncSpeedFromSlider, syncUI } from "/_assets/29b59ef72d25cabc194a.js";
import { applySkin } from "/_assets/f3abf4edf1b0e9a8633c.js";
import { evaluateAchievements } from "/_assets/38b3713ef9108a18ede4.js";

bindUI();
bindInputs();
evaluateAchievements({ announce: false });
applySkin(state.currentSnake, true);
if (state.activeDifficulty) applyDifficulty(state.activeDifficulty);
else syncSpeedFromSlider();
resetGame();
syncUI();
requestAnimationFrame(render);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("sw.js", { updateViaCache: "none" }).catch(() => {});
    });
}
