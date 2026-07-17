class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const result = [];
        const board = this.buildBoard(n)
        const col = new Set();
        const positiveDiag = new Set(); // (r + c)
        const negativeDiag = new Set(); // (r - c)

        const dfs = (r) => {
            if (r >= n) {
                result.push(board.map((row) => row.join('')));
                return;
            }

            for (let c = 0; c < n; c++) {
                if (col.has(c) || positiveDiag.has(r + c) || negativeDiag.has(r - c)) {
                    continue;
                }

                col.add(c);
                positiveDiag.add(r+c);
                negativeDiag.add(r-c);
                board[r][c] = 'Q';

                dfs(r + 1);

                col.delete(c);
                positiveDiag.delete(r + c);
                negativeDiag.delete(r - c);
                board[r][c] = '.';
            }
        }

        dfs(0)
        return result;
    }

    buildBoard(n) {
        const board = [];

        for (let i = 0; i < n; i++) {
            board.push([]);
            for (let j = 0; j < n; j++) {
                board[i][j] = "."
            }
        }

        return board;
    }
}
