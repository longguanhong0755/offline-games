import constant from '/_assets/cce774605f469fe731a3.js';
import defineProperty from '/_assets/08fe1a52a602829f143c.js';
import identity from '/_assets/152c43149691b31cb9bc.js';

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

export default baseSetToString;
