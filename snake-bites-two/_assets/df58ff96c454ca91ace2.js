import freeGlobal from '/_assets/0b65c37b3c1ce6d1800c.js';

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

export default root;
