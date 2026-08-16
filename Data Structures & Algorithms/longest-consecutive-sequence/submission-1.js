class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numberSet = new Set(nums);
        let longest = 0;

        for (let num of numberSet) {
            // if not start of sequence
            if (!numberSet.has(num - 1)) {
                let length = 1
                while (numberSet.has(num+length)) {
                    length++;
                }

                longest = Math.max(longest, length)
            }
        }

        return longest
    }
}
