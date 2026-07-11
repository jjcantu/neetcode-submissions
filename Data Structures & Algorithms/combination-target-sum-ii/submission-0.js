class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const result = []
        candidates.sort((a,b) => a-b);

        function dfs(idx, subset, sum) {
            if (sum === target) {
                result.push([...subset])
                return;
            }

            if (idx >= candidates.length || sum > target) {
                return;
            }

            const candidate = candidates[idx];
            subset.push(candidate);

            dfs(idx + 1, subset, sum + candidate);
            subset. pop();

            while (idx + 1 > candidates.length || candidate === candidates[idx + 1]) {
                idx += 1
            }
            dfs(idx + 1, subset, sum)
        }

        dfs (0, [], 0)
        return result;
    }
}
