import baseGetTag from '/_assets/3a9eebe37ba231eff038.js';
import isObjectLike from '/_assets/e45d69136695e8568c6f.js';

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

export default baseIsArguments;
