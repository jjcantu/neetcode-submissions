class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        /* 
            while s[right] is not in set, right++

            longestSubstring = Math.max(longestSubstring, right - left + 1)
        */
        let left = 0
        let longestSubstringWithoutRepeatingChar = 0;
        let charSet = new Set();


        /* 
            z x y z x y z
                L   R   
        */
        for (let right = 0; right < s.length; right++) {
            while (charSet.has(s[right])) {
                charSet.delete(s[left])
                left++
            }

            charSet.add(s[right])
            const currentLength = right - left + 1
            longestSubstringWithoutRepeatingChar = Math.max(longestSubstringWithoutRepeatingChar, currentLength)
        }

        return longestSubstringWithoutRepeatingChar
    }
}
