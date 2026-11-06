import { state, settings } from "/_assets/88d537dafee3853f035b.js";
import { SNAKES } from "/_assets/adf56c913e3399ce8e59.js";
import { isSkinUnlocked } from "/_assets/38b3713ef9108a18ede4.js";

export function skinById(name) {
    return SNAKES[name] || SNAKES.verdao;
}

export function applySkin(name, persist = true) {
    let id = SNAKES[name] ? name : "verdao";
    if (persist && !isSkinUnlocked(id)) id = "verdao";
    const skin = SNAKES[id];
    if (persist) {
        state.currentSnake = id;
        localStorage.setItem("snakeCharacter", id);
    }
    settings.snakeColor = skin.body;
    settings.headColor = skin.head;
    settings.eyeColor = skin.eye;
    if (state.players && state.players[0]) state.players[0].skin = skin;
    document.documentElement.style.setProperty("--accent", skin.body);
    return skin;
}
