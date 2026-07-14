class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const result = [];

        this.backtrack(0, 0, n, "", result)

        return result;
    }

    backtrack(openedN, closedN, n, stack, result) {
        if (openedN === closedN && openedN === n) {
            result.push(stack);
            return;
        }

        if (n > openedN) {
            this.backtrack(openedN + 1, closedN, n, stack + "(", result)
        }

        if (openedN > closedN) {
            this.backtrack(openedN, closedN + 1, n, stack + ")", result)
        }
    }
}
