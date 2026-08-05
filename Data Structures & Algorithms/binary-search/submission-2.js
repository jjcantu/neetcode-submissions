class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    // input must be sorted for binary search to work
    search(nums, target) {
        // set left and right pointer
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            // compare to value and update pointers accordingly
            const midPoint = Math.floor((left + right) / 2);

            if (nums[midPoint] < target) {
                left = midPoint + 1;
            } else if (nums[midPoint] > target) {
                right = midPoint - 1;
            } else {
                return midPoint
            }
        }
        
        return -1;
    }
}
