import baseIsNative from '/_assets/1557c70dbb11eba112c6.js';
import getValue from '/_assets/afff70502a4a536f971f.js';

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

export default getNative;
