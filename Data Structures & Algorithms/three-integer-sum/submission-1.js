class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // loops through nums
        // set left ptr to num[i+1]
        // set right ptr to num[nums.length - 1]
        const sortedNums = nums.sort((a,b) => a-b);
        const result = [];

        for (let i = 0; i < sortedNums.length; i++) {
            if (i > 0 && sortedNums[i] === sortedNums[i-1]) {
                continue;
            }

            let left = i + 1
            let right = sortedNums.length - 1;

            while (left < right) {
                const sum = 
                    sortedNums[i] + sortedNums[left] + sortedNums[right]

                if (sum > 0) {
                    right -= 1
                } else if (sum < 0) {
                    left += 1
                } else {
                    result.push([sortedNums[i], 
                        sortedNums[left], 
                        sortedNums[right]])
                    left += 1
                    while (sortedNums[left] === sortedNums[left - 1] &&
                        left < right) {
                        left += 1
                    }
                }
            }
        }

        return result;
    }
}
