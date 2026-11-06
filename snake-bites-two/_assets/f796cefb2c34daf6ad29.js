import identity from '/_assets/152c43149691b31cb9bc.js';
import overRest from '/_assets/2680f289bb332cf28f3a.js';
import setToString from '/_assets/2a1ef073af2370f4bf32.js';

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

export default baseRest;
