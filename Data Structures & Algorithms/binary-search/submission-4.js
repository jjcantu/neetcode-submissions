class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // set left pointer
        // set right pointer
        // find mid point and move pointers
        // depending on the comparsion between target and
        // nums[mid]
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const mid = Math.floor((right + left ) / 2)
            const midValue = nums[mid]

            if (midValue > target) {
                right = mid - 1;
            } else if (midValue < target) {
                left = mid + 1;
            } else {
                return mid
            }
        }

        return -1;
    }
}
