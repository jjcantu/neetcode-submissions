class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];

        function dfs(idx, sum, subset) {
            if (sum === target) {
                result.push([...subset])
                return;
            }

            if (idx >= nums.length || sum > target) return;

            subset.push(nums[idx])
            // include current num
            dfs(idx, sum + nums[idx], subset)
            subset.pop();

            // exclue current num
            dfs(idx + 1, sum, subset)
        }


        dfs(0, 0, [])
        return result;
    }
}
