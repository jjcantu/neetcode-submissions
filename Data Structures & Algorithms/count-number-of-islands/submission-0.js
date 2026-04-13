class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if (!grid || !grid.length) return 0

        const rows = grid.length;
        const cols = grid[0].length;
        const directions = [[-1, 0], [1, 0], [0, 1], [0, -1]]
        const visited = new Set();

        function bfs(r, c) {
            const key = `${r},${c}`

            if (r < 0 || c < 0 || r >= rows || c >= cols) return;
            if (grid[r][c] === '0' || visited.has(key)) return;
            visited.add(key)

            for (const direction of directions) {
                const [dr, dc] = direction;

                bfs(r + dr, c + dc)
            }
        }

        let numOfIslands = 0;
        for (let r = 0; r < rows; r++) {
            for (let c = 0 ; c < cols; c++) {
                if (grid[r][c] === '1' && !visited.has(`${r},${c}`)) {
                    bfs(r,c)
                    numOfIslands++;
                }
            }
        }

        return numOfIslands;
    }
}
