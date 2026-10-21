class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // k is the number of characters that can be changed
        // return longest same character string

        let left = 0
        const charMap = {};
        let longestRepeatingChar = 0;
        let maxFrequencyChar = 0;

        for (let right = 0; right < s.length; right++) {
            charMap[s[right]] = 1 + (charMap[s[right]] || 0)
            maxFrequencyChar = Math.max(maxFrequencyChar, charMap[s[right]])

            // if string is not in valid state
            while ((right - left + 1) - maxFrequencyChar > k ) {
                charMap[s[left]]--; // decrement since we're moving left pointer
                left++
            }


            const windowSize = right - left + 1
            longestRepeatingChar = Math.max(longestRepeatingChar, windowSize)
        }

        return longestRepeatingChar
    }
}
