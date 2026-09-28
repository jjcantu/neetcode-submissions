class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = new Map();

        for (let i = 0; i < strs.length; i++) {
            const charCounter = new Array(26).fill(0);

            for (const letter of strs[i]) {
                charCounter[letter.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }

            const key = charCounter.join(',')
            if (!result.has(key)) {
                result.set(key, [])
            }

            result.get(key).push(strs[i])
        }

        return [...result.values()];
    }
}
