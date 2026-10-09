class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = {};

        for (const string of strs) {
            const count = new Array(26).fill(0);
            for (const char of string) {
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }
            const key = count.join(',')
            if (!result[key]) {
                result[key] = []
            }
            result[key].push(string)
        }

        return Object.values(result);
    }
}
