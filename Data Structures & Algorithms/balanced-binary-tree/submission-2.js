/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        const dfs = (root) => {
            if (!root) return [true, 0];

            const heightLeft = dfs(root.left)
            const heightRight = dfs(root.right)
            const isBalanced = Math.abs(heightLeft[1] - heightRight[1]) <= 1
                && heightLeft[0] && heightRight[0]

            return [isBalanced, 1 + Math.max(heightLeft[1], heightRight[1])]
        }

        const result = dfs(root)
        return result[0]
    }
}
