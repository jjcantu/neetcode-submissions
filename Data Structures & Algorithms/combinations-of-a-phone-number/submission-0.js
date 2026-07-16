const digitsToLetters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
};

class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (!digits) return []

        const result = [];

        const backtrack = (idx, string) => {
            if (idx >= digits.length) {
                result.push(string)
                return;
            }

            const letters = digitsToLetters[digits[idx]]
            for (let letter of letters) {
                backtrack(idx + 1, string + letter)
            }
        }

        backtrack(0, "");
        return result;
    }
}
