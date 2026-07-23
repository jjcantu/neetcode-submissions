class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const ROWS = heights.length;
        const COLS = heights[0].length;
        const result = [];
        const pacificSet = new Set();
        const atlanticSet = new Set();

        const dfs = (r, c, prevHeight, visited) => {
            const key = `${r},${c}`
            if (
                r < 0 || 
                r >= ROWS || 
                c < 0 || 
                c >= COLS || 
                visited.has(key) ||
                prevHeight > heights[r][c]
                ) {
                    return;
                }
                visited.add(key)

                dfs(r + 1, c, heights[r][c], visited)
                dfs(r - 1, c, heights[r][c], visited)
                dfs(r, c + 1, heights[r][c], visited)
                dfs(r, c - 1, heights[r][c], visited)
        }

        for (let c = 0; c < COLS; c++) {
            dfs(0, c, heights[0][c], pacificSet)
            dfs(ROWS - 1, c, heights[ROWS - 1][c], atlanticSet)
        }

        for (let r = 0; r < ROWS; r++) {
            dfs(r, 0, heights[r][0], pacificSet)
            dfs(r, COLS - 1, heights[r][COLS - 1], atlanticSet)
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                const key = `${r},${c}`
                if (pacificSet.has(key) && atlanticSet.has(key)) {
                    result.push([r,c])
                }
            }
        }

        return result;
    }
}
