import getNative from '/_assets/b93d64fd14cab48b0ad9.js';

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

export default defineProperty;
