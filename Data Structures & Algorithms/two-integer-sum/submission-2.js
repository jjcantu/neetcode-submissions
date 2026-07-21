class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numToIdx = {};

        for (let i = 0; i < nums.length; i++) {
            const number = nums[i];
            const compliment = target - number;

            if (compliment in numToIdx) {
                return [i, numToIdx[compliment]]
            }

            numToIdx[number] = i;
        }
    }
}
