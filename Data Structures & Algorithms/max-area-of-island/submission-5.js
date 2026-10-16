class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let ROWS = grid.length;
        let COLS = grid[0].length;
        let maxAreaOfIsland = 0;
        const visited = new Set();
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]

        const dfs = (r, c) => {
            if (r >= ROWS || 
                r < 0 || 
                c >= COLS || 
                c < 0 ||
                grid[r][c] === 0) {
                    return 0;
                }

            const positionKey = `${r},${c}`
            if (visited.has(positionKey)) {
                return 0;
            }
            visited.add(positionKey);

            let area = 1
            for (const [dr, dc] of directions) {
                area += dfs(r + dr, c + dc)
            }

            return area
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                // if node is water and has not been visited
                const positionKey = `${r},${c}`
                if (!visited.has(positionKey) && grid[r][c] === 1) {
                    const area = dfs(r, c, 0);
                    maxAreaOfIsland = Math.max(maxAreaOfIsland, area);
                }
            }
        }

        return maxAreaOfIsland;
    }
}
