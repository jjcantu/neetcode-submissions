class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0
        let result = 0;
        const charSet = new Set();

        for (let r = 0; r < s.length; r++) {
            while (charSet.has(s[r])) {
                charSet.delete(s[left])
                left++;
            }
            charSet.add(s[r])
            result = Math.max(result, r - left + 1)
        }

        return result;
    }
}
