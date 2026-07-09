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
    goodNodes(root) {
        function dfs(node, maxValue) {
            if (!node) return 0;

            let result = 0;
            if (node.val >= maxValue) {
                result += 1
            }

            maxValue = Math.max(maxValue, node.val)
            result += dfs(node.left, maxValue)
            result += dfs(node.right, maxValue)
            
            console.log('result', result)
            return result;
        }

        return dfs(root, root.val)
    }
}
