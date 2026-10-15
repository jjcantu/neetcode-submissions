class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let ROWS = grid.length;
        let COLS = grid[0].length;
        const visited = new Set();
        let numberOfIslands = 0;
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]

        const dfs = (r, c) => {
            if (r >= ROWS || r < 0 || c >= COLS || c < 0 || 
                grid[r][c] === '0') {
                return;
            }

            const positionKey = `${r},${c}`
            if (visited.has(positionKey)) {
                return;
            }
            visited.add(positionKey)

            for (const [dr, dc] of directions) {
                dfs(r + dr, c + dc)
            }
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                // if we've visited the node already skip
                // if node is island and not visited, traverse and water.
                const positionKey = `${r},${c}`
                if (!visited.has(positionKey) && grid[r][c] === '1') {
                    dfs(r,c)
                    numberOfIslands += 1
                }
            }
        }

        return numberOfIslands;
    }
}
