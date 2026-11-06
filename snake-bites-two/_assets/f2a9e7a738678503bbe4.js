import { isFn } from '/_assets/35cd96883427a7b8dca0.js';
export const gridCreate = (width, height, cellValueOrFactory = null) => {
    const grid = [];
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            grid[x] = grid[x] || [];
            grid[x][y] = isFn(cellValueOrFactory)
                ? cellValueOrFactory(x, y)
                : cellValueOrFactory;
        }
    }
    return grid;
};
