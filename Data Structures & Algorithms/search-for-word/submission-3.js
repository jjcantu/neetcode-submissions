class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    // traverse the matrix using dfs
    // add cells to visited set so we won't revisit them
    // if we find a letter that matches the word parameter.
    // add it to a string
    // if we visit a cell that is not the next expected letter
    // backtrack and look into another direction
    // possible directions are up down left or right

    exist(board, word) {
        const ROWS = board.length;
        const COLS = board[0].length;

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                // if current cell is first letter of word
                if (this.dfs(r, c, board, new Set(), word, 0)) {
                    return true
                }
            }
        }

        return false

    }

    dfs (r, c, board, visited, word, idx) {
        if (idx === word.length) {
            return true;
        }

        if (r >= board.length || r < 0 || c >= board[0].length || c < 0) {
            return false;
        }


        if (board[r][c] !== word[idx]) {
            return false;
        }

        const key = `${r},${c}`
        if (visited.has(key)) {
            return false;
        }
        visited.add(key);

        const found = 
            this.dfs(r + 1, c, board, visited, word, idx + 1) ||
            this.dfs(r - 1, c, board, visited, word, idx + 1) ||
            this.dfs(r, c + 1, board, visited, word, idx + 1) ||
            this.dfs(r, c - 1, board, visited, word, idx + 1);
        
        visited.delete(key);

        return found;
    }
}
