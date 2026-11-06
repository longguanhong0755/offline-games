// The home page: the row of pals, and the "Press Start to Play" button.
import { HOME_PALS, homePal } from '/_assets/12a401e6bc6879e8d325.js';
import { goTo, watchLoading } from '/_assets/fe9fc07ba1e5fdb9ea1d.js';
import { splitOnTap } from '/_assets/333e27169c8b5204cb44.js';

// "Growing the colony…" while the next screen loads.
watchLoading();

const friends = document.querySelector('.friends');
friends?.append(...HOME_PALS.map(homePal));
// An easter egg: tap a pal and she divides in two.
splitOnTap(friends);

const startButton = document.querySelector('.start-btn');

if (startButton) {
  const label = startButton.textContent;

  startButton.addEventListener('click', () => {
    startButton.textContent = 'Opening picker...';
    startButton.disabled = true;

    setTimeout(() => {
      goTo('./pal-picker.html');
    }, 250);
  });

  // When you come back with the browser's Back button, the browser may show
  // this page exactly as it was left, still saying "Opening picker...".
  // Put the button back the way it started.
  window.addEventListener('pageshow', () => {
    startButton.textContent = label;
    startButton.disabled = false;
  });
}
