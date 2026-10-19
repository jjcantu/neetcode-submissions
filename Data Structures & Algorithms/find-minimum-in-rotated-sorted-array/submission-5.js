class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0
        let right = nums.length - 1;
        let minimum = Infinity;

        while (left <= right) {
            // if array is sorted, return nums[left]
            if (nums[left] < nums[right]) {
                minimum = Math.min(minimum, nums[left])
                break;
            }

            const middle = Math.floor((left + right) / 2);
            minimum = Math.min(minimum, nums[middle])

            // [3,4,5,6,1,2]
            //  L.  M.    R. 
            // if nums[middle] > nums[left] -> min must be on left portion
            if (nums[left] <= nums[middle]) {
                left = middle + 1
            } else {
                right = middle - 1
            } 
        }

        return minimum;
    }
}
