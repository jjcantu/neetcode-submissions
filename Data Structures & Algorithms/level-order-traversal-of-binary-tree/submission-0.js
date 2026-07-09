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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return []

        const queue = [root]
        const result = [];

        while (queue.length) {
            const currentLevelLength = queue.length; // 1
            const level = []; // []

            for (let i = 0; i < currentLevelLength; i++) {
                const currentNode = queue.shift(); // 1

                if (currentNode.left) {
                    queue.push(currentNode.left)
                }

                if (currentNode.right) {
                    queue.push(currentNode.right)
                }

                level.push(currentNode.val)
            }

            result.push(level);
        }

        return result;
    }
}
