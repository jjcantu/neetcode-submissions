class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const result = [];
        nums.sort((a,b) => a-b);
        
        function backtrack(idx, subset) {
            if (idx >= nums.length) {
                result.push([...subset]);
                return;
            }

            subset.push(nums[idx]);
            backtrack(idx + 1, subset);
            subset.pop();

            while (idx + 1 < nums.length && nums[idx] === nums[idx+1]) {
                idx += 1
            }

            backtrack(idx + 1, subset);
        }

        backtrack(0, []);
        return result
    }
}
