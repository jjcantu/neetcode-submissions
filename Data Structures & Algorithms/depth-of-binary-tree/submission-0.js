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
    maxDepth(root) {
        return this.dfs(root, 0)
    }

    dfs(node, depth) {
        if (!node) return 0;

        console.log('depth', depth)

        const left = this.dfs(node.left, depth + 1);
        const right = this.dfs(node.right, depth + 1);

        const maxDepth = Math.max(left, right)

        return maxDepth + 1
    }
}
