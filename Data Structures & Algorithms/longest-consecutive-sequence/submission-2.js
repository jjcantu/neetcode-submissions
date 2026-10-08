class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums)
        let longest = 0;

        for (let num of numSet) {
            if (!numSet.has(num - 1)) {
                let currentLength = 1;
                while (numSet.has(num + currentLength)) {
                    currentLength++;
                }

                longest = Math.max(longest, currentLength)
            }
        }

        return longest;
    }
}
