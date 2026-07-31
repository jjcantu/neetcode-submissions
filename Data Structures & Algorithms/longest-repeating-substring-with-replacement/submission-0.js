class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // sliding window technique
        // hashMap to store number of characters.
        // for loop to recalcualte maxLength
        // while s[right] > k + 1
        // hashMap[s[left]]--
        // left++
        // XYAX -> XXXX
        // L  R
        // XYYX
        // numOfForeign
        let left = 0;
        let charCount = {};
        let result = 0;
        let maxFrequency = 0;


        for (let right = 0; right < s.length; right++) {
            charCount[s[right]] = (charCount[s[right]] || 0) + 1;
            maxFrequency = Math.max(maxFrequency, charCount[s[right]])


            while ((right - left + 1) - maxFrequency > k)  {
                charCount[s[left]]--;
                left++
            }

            result = Math.max(result, right - left + 1)
        }

        return result;
    }
}
