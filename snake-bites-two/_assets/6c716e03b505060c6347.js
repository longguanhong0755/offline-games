import { isFn } from '/_assets/35cd96883427a7b8dca0.js';
export const gridForEach = (grid, cb) => {
    if (isFn(cb) && Array.isArray(grid)) {
        for (let x = 0; x < grid.length; x++) {
            if (Array.isArray(grid[0])) {
                for (let y = 0; y < grid[0].length; y++) {
                    cb(x, y, grid);
                }
            }
        }
    }
};
