import { loadGame, saveGame } from '/_assets/4686c2e5c5b363c8f116.js';
import { initCustomCursor, hideLoader, updateUI, createFloatingText } from '/_assets/f526b2def9c9cf29ae34.js';
import { initAudio, setupAudioControls, playSound, startMusic } from '/_assets/f57d5f279d69cdf5fb0a.js';
import { startEmissionTimer, startPassiveEffects } from '/_assets/b3ac8466086b8ab9e8f7.js';
import { checkDailyBonus, buyUpgrade, buyArtifact, levelUp } from '/_assets/5158451805add5c7b409.js';
import { gameState } from '/_assets/ef15aaa0d96c889ff8da.js';

let hasInteracted = false;

document.addEventListener('DOMContentLoaded', () => {
    loadGame();
    initCustomCursor();
    initAudio();

    setTimeout(hideLoader, 1400);

    startEmissionTimer();
    startPassiveEffects();
    checkDailyBonus();

    updateUI();

    setupAudioControls();
    setupShopEvents();
    setupMainClickEvent();
});

function setupShopEvents() {
    document.querySelectorAll('[data-upgrade]').forEach((button) => {
        button.addEventListener('click', () => buyUpgrade(button.dataset.upgrade));
    });

    document.querySelectorAll('[data-artifact]').forEach((button) => {
        button.addEventListener('click', () => buyArtifact(button.dataset.artifact));
    });
}

function setupMainClickEvent() {
    const artifactButton = document.getElementById('artifact-button');
    const artifactImage = document.getElementById('main-artifact');

    if (!artifactButton || !artifactImage) return;

    artifactButton.addEventListener('click', (event) => {
        if (!hasInteracted) {
            hasInteracted = true;
            startMusic();
        }

        gameState.money += gameState.clickPower;
        playSound('click');

        const currentArtProgress = gameState.artifactData.find((data) => data.id === gameState.currentArtifactId);

        if (currentArtProgress) {
            currentArtProgress.currentClicks += 1;
            if (currentArtProgress.currentClicks >= currentArtProgress.clicksForNextLevel) {
                levelUp(currentArtProgress);
            }
        }

        createFloatingText(event.clientX, event.clientY, `+${gameState.clickPower} KPN`);

        artifactImage.style.transform = 'scale(0.95)';
        setTimeout(() => {
            artifactImage.style.transform = '';
        }, 50);

        saveGame();
        updateUI();
    });
}
