const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]];

class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const queue = [];
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const visited = new Set();

        function addCell(row, col) {
            if (
                row < 0 || 
                row >= ROWS || 
                col < 0 || 
                col >= COLS ||
                visited.has(`${row},${col}`) ||
                grid[row][col] === -1 
                ) {
                    return;
                }
                visited.add(`${row},${col}`)
                queue.push([row, col])
        }

        for (let r = 0; r < ROWS; r++ ) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 0) {
                    queue.push([r, c])
                    visited.add(`${r},${c}`)
                }
            }
        }


        let distance = 0;
        while (queue.length) {
            const queueLength = queue.length;
            for (let i = 0; i < queueLength; i++) {
                const [r, c] = queue.shift();
                grid[r][c] = distance;
                addCell(r+1, c);
                addCell(r-1, c);
                addCell(r, c + 1);
                addCell(r, c - 1);
            }
            distance += 1
        }
    }
}
