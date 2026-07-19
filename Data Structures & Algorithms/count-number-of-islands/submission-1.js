const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]];

class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let result = 0;
        const visited = new Set()
        
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === '1' && !visited.has(`${r},${c}`)) {
                    this.dfs(r,c, visited, grid)
                    result += 1;
                }
            }
        }

        return result;
    }

    dfs(row, col, visited, grid) {
        const key = `${row},${col}`;

        if (row >= grid.length || row < 0 || col >= grid[0].length || col < 0 || grid[row][col] === '0' || visited.has(key)) {
            return;
        }

        visited.add(key);

        for (const direction of DIRECTIONS) {
            const [dr, dc] = direction;
            this.dfs(row + dr, col + dc, visited, grid)
        }
    }
}
