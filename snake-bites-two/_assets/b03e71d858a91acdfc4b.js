import eq from '/_assets/3a51729bde3af1d9bacf.js';
import isArrayLike from '/_assets/46956ba526a01c3371fe.js';
import isIndex from '/_assets/33b5bf1805dd076edfc1.js';
import isObject from '/_assets/fc44c8f265db1492ea04.js';

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

export default isIterateeCall;
