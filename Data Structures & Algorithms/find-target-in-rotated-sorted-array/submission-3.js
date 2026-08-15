class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0
        let right = nums.length - 1;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                right = mid
            }
        }

        // [3,4,5,6,1,2]
        //  L   M     R
        // if 5 is less than 2
        // left = 3

        const pivot = left

        // search first subarray
        const result = this.binarySearch(nums, target, 0, pivot - 1);
        if (result !== -1) {
            return result;
        }

        // if not found, search second subarray
        return this.binarySearch(nums, target, pivot, nums.length - 1);

    }

    binarySearch(nums, target, left, right) {
        while (left <= right) {
            const mid = Math.floor((left + right) / 2)

            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }
}
