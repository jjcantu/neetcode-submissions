class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // keep longest num in varaible
        // use set to check if s[i] is in s
        // if true -> left++
        // if false -> right++ + max(prevLongest, longest)

        let left = 0
        let right = 0
        const charSet = new Set(); // use size property
        let longestNonRepeatingSubstring = 0;

        while (right < s.length) {

            /* 
                "zxyzxyz"
                    L  R
             */
            // repeating characters
            if (charSet.has(s[right])) {
                // increment left point until s[right] is no longer in charSet
                while (charSet.has(s[right])) {
                    charSet.delete(s[left])
                    left++;
                }
            // does not have repeating characters
            } else {
                charSet.add(s[right])
                
                const currentLength = right - left + 1;
                longestNonRepeatingSubstring = 
                    Math.max(longestNonRepeatingSubstring, currentLength)
                right++;
            }
        }

        return longestNonRepeatingSubstring;
    }
}
