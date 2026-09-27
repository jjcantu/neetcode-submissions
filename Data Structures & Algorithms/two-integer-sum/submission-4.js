class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // store number we've seen before

        // target - nums[i] = complement
        // if complement is in map
        // return [map[complement], idx] 

        const numberToIdx = new Map();

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i]

            if (numberToIdx.has(complement)) {
                const complementIdx = numberToIdx.get(complement);

                return [i, numberToIdx.get(complement)]
            }

            numberToIdx.set(nums[i], i)
        }
    }
}
