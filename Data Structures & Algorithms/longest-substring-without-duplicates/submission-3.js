// class Solution {
//     /**
//      * @param {string} s
//      * @return {number}
//      */
//     lengthOfLongestSubstring(s) {
//         let left = 0
//         let charCount = {}
//         let result = 0;

//         for (let right = 0; right < s.length; right++) {
//             charCount[s[right]] = (charCount[s[right]] || 0) + 1;

//             while (charCount[s[right]] > 1) {
//                 charCount[s[left]]--;
//                 left++;
//             }

//             result = Math.max(result, right - left + 1)
//         }

//         return result;
//     }
// }

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0
        let charCount = new Set();
        let result = 0;

        for (let right = 0; right < s.length; right++) {
            while (charCount.has(s[right])) {
                charCount.delete(s[left])
                left++;
            }

            charCount.add(s[right])

            result = Math.max(result, right - left + 1)
        }

        return result;
    }
}
