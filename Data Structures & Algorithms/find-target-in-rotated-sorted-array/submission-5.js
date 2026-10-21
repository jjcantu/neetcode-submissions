class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const middle = Math.floor((left + right ) / 2);
            if (nums[middle] === target) {
                return middle;
            }


            /*
                [3,4,5,6,1,2]
                 L.  M.    R.  


                1. Find pivot point -> min
                2. compare target to pivot point -> determines if target is in left portion or right portion
                3. continue with binary search
             */

            // left sorted portion
            if (nums[left] <= nums[middle]) {
                if (nums[middle] < target || target < nums[left]) {
                    left = middle + 1
                } else {
                    right = middle - 1
                }
            // right sorted portion
            } else {
                if (nums[middle] > target || target > nums[right]) {
                    right = middle - 1
                } else {
                    left = middle + 1
                }
            }
        }
        

        return -1
    }
}
