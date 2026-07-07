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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        const res = [0];
        this.dfs(root, res)

        return res[0];
    }

    dfs(node, result) {
        if (!node) return 0;

        const left = this.dfs(node.left, result);
        const right = this.dfs(node.right, result);
        result[0] = Math.max(result[0], left + right);
        return 1 + Math.max(left, right)
    }
}
