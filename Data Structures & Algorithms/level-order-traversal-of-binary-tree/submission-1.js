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
        const levelOrdered = [];

        while (queue.length) {
            const currentLevelLength = queue.length;
            const level = []

            for (let i = 0; i < currentLevelLength; i++) {
                const node = queue.shift(); // <- get first element

                level.push(node.val)

                if (node.left) {
                    queue.push(node.left)
                }

                if (node.right) {
                    queue.push(node.right)
                }
            }

            levelOrdered.push(level)
        }

        return levelOrdered;
    }
}
