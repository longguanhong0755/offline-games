import apply from '/_assets/b2e6d04f093a956feef2.js';
import baseRest from '/_assets/f796cefb2c34daf6ad29.js';
import isError from '/_assets/bcd71260aa1aafae10ea.js';

/**
 * Attempts to invoke `func`, returning either the result or the caught error
 * object. Any additional arguments are provided to `func` when it's invoked.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Util
 * @param {Function} func The function to attempt.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {*} Returns the `func` result or error object.
 * @example
 *
 * // Avoid throwing errors for invalid selectors.
 * var elements = _.attempt(function(selector) {
 *   return document.querySelectorAll(selector);
 * }, '>_>');
 *
 * if (_.isError(elements)) {
 *   elements = [];
 * }
 */
var attempt = baseRest(function(func, args) {
  try {
    return apply(func, undefined, args);
  } catch (e) {
    return isError(e) ? e : new Error(e);
  }
});

export default attempt;
