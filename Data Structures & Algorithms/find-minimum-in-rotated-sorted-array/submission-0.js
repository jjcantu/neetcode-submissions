class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0
        let right = nums.length - 1;
        let result = nums[0];

        while (left <= right) {
            if (nums[left] < nums[right]) {
                result = Math.min(result, nums[left]);
                break;
            }

            const mid = Math.floor((left + right) / 2);
            result = Math.min(result, nums[mid])

            if (nums[mid] >= nums[right]) { // the min is on the right portion
                left = mid + 1
            } else if (nums[mid] <= nums[right]) { // the min is on the left portion
                right = mid - 1;
            }
        }

        return result;
    }
}
