class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const freqSet = new Set()

        for (const num of nums) {
            if (freqSet.has(num)) {
                return true;
            }

            freqSet.add(num)
        }

        return false;
    }
}
