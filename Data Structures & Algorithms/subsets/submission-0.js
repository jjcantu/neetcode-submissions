class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [];
        const subset = [];

        const dfs = (idx) => {
            if (idx >= nums.length) {
                result.push([...subset]);
                return;
            }

            subset.push(nums[idx]);

            dfs(idx + 1);
            subset.pop();
            dfs(idx + 1);
        }
        dfs(0) 
        return result
    }
}
