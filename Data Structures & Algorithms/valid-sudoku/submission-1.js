class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const squares = new Map();
        const rows = new Map();
        const cols = new Map();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === '.') continue;

                const cellValue = board[r][c]
                const squareKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`;

                if (
                    (rows.get(r) && rows.get(r).has(board[r][c])) ||
                    (cols.get(c) && cols.get(c).has(board[r][c])) ||
                    (squares.get(squareKey) &&
                        squares.get(squareKey).has(board[r][c]))
                ) {
                    return false;
                }

                if (!rows.get(r)) rows.set(r, new Set())
                if (!cols.get(c)) cols.set(c, new Set())
                if (!squares.get(squareKey)) squares.set(squareKey, new Set());

                rows.get(r).add(cellValue)
                cols.get(c).add(cellValue)
                squares.get(squareKey).add(cellValue)
            }
        }

        return true;
    }
}
