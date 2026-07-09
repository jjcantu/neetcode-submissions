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
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) return []

        const queue = [root]
        const result = []

        while (queue.length) {
            const currentLevelLength = queue.length;

            for (let i = 0; i < currentLevelLength; i++) {
                const currentNode = queue.shift()

                if (i === currentLevelLength - 1) {
                    result.push(currentNode.val)
                }

                if (currentNode.left) {
                    queue.push(currentNode.left)
                }

                if (currentNode.right) {
                    queue.push(currentNode.right);
                }
            }
        }

        return result;
    }
}
