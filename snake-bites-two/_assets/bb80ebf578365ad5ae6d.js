import { Piece } from '/_assets/f6f51a79d8d0c548b225.js';
import { Atom } from '/_assets/f1b75e4f0ffde7f8b684.js';
export class Bonus extends Piece {
    constructor() {
        super();
        this._preUpdateSortOrder = 30;
        this._atoms = [new Atom(this, Atom.TYPE.BONUS, 0, 0)];
    }
}
