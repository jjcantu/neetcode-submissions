class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        /* 
            use binary search to find the side that has
            the smaller element.
            
            if right ptr is smaller than middle
            this must mean that the minimum element is
            in the right side of the nums array

            [3,4,5,6,1,2]
            L.   M.    R.

            [3,4,5,6,1,2]
                    LM, R
               

            if nums[right] < nums[middle]
            set left ptr to mid + 1
            set mid to mid
        */

        let left = 0
        let right = nums.length - 1
        let minimum = Infinity;

        while (left <= right) {
            // are we in the sorted portion?
            if (nums[left] < nums[right]) {
                // if so...
                minimum = Math.min(minimum, nums[left]);
                break;
            }
            const middle = Math.floor((left + right) / 2);
            minimum = Math.min(minimum, nums[middle])

            // minimum has to be on left side
            if (nums[left] <= nums[middle]) {
                 left = middle + 1;
            // minimum has to be on right side
            } else {
                right = middle - 1;
            }
        }

        return minimum
    }
}
