/** Short vibration pulses. No-ops when reduced motion is on or the device cannot vibrate. */
import { state } from '/_assets/12b4556c94b046c827ee.js';

export function hapticTap() {
  if (state.reducedMotion) return;
  try {
    navigator.vibrate?.(10);
  } catch {
    /* swallow */
  }
}

export function hapticPulse(ms) {
  if (state.reducedMotion) return;
  try {
    navigator.vibrate?.(ms);
  } catch {
    /* swallow */
  }
}

