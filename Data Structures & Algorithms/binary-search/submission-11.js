class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let leftIdx = 0;
        let rightIdx = nums.length - 1;
    
        while (leftIdx <= rightIdx) {
            const middleIdx = Math.floor(( leftIdx + rightIdx ) / 2);
            const valueAtMiddle = nums[middleIdx];

            console.log("middleIdx", middleIdx)
            console.log("valueAtMiddle", valueAtMiddle)

            if (valueAtMiddle > target) {
                rightIdx = middleIdx - 1
            } else if (valueAtMiddle < target) {
                leftIdx = middleIdx + 1 
            } else {
                return middleIdx
            }
        }

        return -1;
    }
}
