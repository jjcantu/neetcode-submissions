const DIRECTIONS = [[-1, 0], [1,0], [0, 1], [0, -1]]

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxArea = 0;
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const visited = new Set();

        const dfs = (row, col) => {
            const key = `${row},${col}`;

            if (row < 0 || row >= ROWS || col < 0 || col >= COLS || visited.has(key) || grid[row][col] === 0) {
                return 0;
            }

            visited.add(key)

            let area = 1

            for (const direction of DIRECTIONS) {
                const [dr, dc] = direction;

                area += dfs(row + dr, col + dc);
            }

            return area
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) {
                    const area = dfs(r, c, 0)
                    maxArea = Math.max(maxArea, area);
                }
            }
        }

        return maxArea;
    }
}
