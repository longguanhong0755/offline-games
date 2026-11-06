import baseSetToString from '/_assets/75d18e54921591874d3d.js';
import shortOut from '/_assets/1b8768641ee4b7605124.js';

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

export default setToString;
