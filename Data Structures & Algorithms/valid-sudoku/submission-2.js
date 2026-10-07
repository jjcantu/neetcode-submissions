class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const ROWS = board.length;
        const COLS = board[0].length;
        const rowSet = new Set(); 
        const colSet = new Set();
        const boxSet = new Set();


        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (board[r][c] === '.') continue

                const rowToValue = `${r},${board[r][c]}`
                const colToValue = `${c},${board[r][c]}`

                if (rowSet.has(rowToValue) || 
                    colSet.has(colToValue)) {
                        return false;
                }
                rowSet.add(rowToValue)
                colSet.add(colToValue)

                const boxPosition = 
                    `${Math.floor(r / 3)},${Math.floor(c / 3)}`
                const boxPositionToValue = 
                    `${boxPosition},${board[r][c]}`

                if (boxSet.has(boxPositionToValue)) {
                    return false
                }
                boxSet.add(boxPositionToValue)
            }
        }

        return true;
    }
}
