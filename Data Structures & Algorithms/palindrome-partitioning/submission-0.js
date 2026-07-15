class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */

    // given s, a string
    // split s into an array
    // for every element in the array
    // include and exclude s[idx]
    // if currentString is a palindrome
    // result.push(currentstring)
    partition(s) {
        const result = [];
        const partition = [];

        const dfs = (idx) => {
            if (idx >= s.length) {
                result.push([...partition]);
                return;
            }

            for (let j = idx; j < s.length; j++ ) {
                if (this.isPalindrome(s, idx, j)) {
                    partition.push(s.slice(idx, j + 1))
                    dfs(j + 1);
                    partition.pop();
                }
            }
        }

        dfs(0)
        return result;
    }

    isPalindrome(s, left, right) {
        while (left < right) {
            if (s[left] != s[right]) {
                return false;
            }
            left += 1;
            right -= 1;
        }

        return true;
    }
}
