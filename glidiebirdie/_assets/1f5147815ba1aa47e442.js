/** Browser entry. Wires modules and starts the frame loop. No boot on import. */
import { configureCanvasForDPR, dom, onDprChange } from '/_assets/6adc6b69e9420e721f09.js';
import { rebuildSpriteCaches } from '/_assets/8c784dab5f336c04dbda.js';
import { updateDerivedPhysics } from '/_assets/12b4556c94b046c827ee.js';
import {
  bindDrawerControls,
  bindTutorial,
  captureSereneScreenshot,
  registerServiceWorker,
  syncUiState,
  toggleFullscreen,
  toggleMute,
  togglePause,
  togglePostcard,
} from '/_assets/6daf50f2f66a04b83a23.js';
import { bindMobileControls } from '/_assets/883dd893301093eab196.js';
import { resetGame, restartRun } from '/_assets/cd288c8220574856ffe8.js';
import { loop } from '/_assets/9503f59eeef48d825d3e.js';

export function boot() {
  onDprChange(rebuildSpriteCaches);
  configureCanvasForDPR();
  updateDerivedPhysics();
  resetGame();
  bindDrawerControls();
  bindMobileControls();
  bindTutorial();
  registerServiceWorker();
  syncUiState();
  dom.pauseToggle?.addEventListener('click', () => togglePause());
  dom.postcardButton?.addEventListener('click', () => togglePostcard());
  dom.postcardCopyBtn?.addEventListener('click', () => captureSereneScreenshot());
  dom.muteToggle?.addEventListener('click', () => toggleMute());
  dom.restartButton?.addEventListener('click', () => restartRun());
  dom.fullscreenToggle?.addEventListener('click', () => toggleFullscreen());
  requestAnimationFrame(loop);
}
