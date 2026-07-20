class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const queue = [];
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let elapsedMinutes = 0;

        const addCell = (r, c) => {
            if (
                r < 0 || 
                r >= ROWS || 
                c < 0 || 
                c >= COLS ||
                grid[r][c] !== 1
                ) {
                return;
            }

            grid[r][c] = 2;
            queue.push([r,c])
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 2) {
                    queue.push([r, c]);
                }
            }
        }

        while (queue.length) {
            const queueLength = queue.length;
            for (let i = 0; i < queueLength; i++) {
                const [r, c] = queue.shift() 
                addCell(r + 1, c);
                addCell(r - 1, c);
                addCell(r, c + 1);
                addCell(r, c - 1);
            }

            if (queue.length) {
                elapsedMinutes++;
            }
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) {
                    return -1
                }
            }
        }

        return elapsedMinutes;
    }
}
