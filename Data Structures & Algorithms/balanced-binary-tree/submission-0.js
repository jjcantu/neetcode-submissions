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
        const result = this.dfs(root)

        return result[0]
    }

    dfs (root) {
        if (!root) return [true, 0];

        const left = this.dfs(root.left);
        const right = this.dfs(root.right);

        const isBalanced = left[0] && right[0] && Math.abs(left[1] - right [1]) <= 1;

        return [isBalanced, 1 + Math.max(left[1], right[1])]
    }
}
