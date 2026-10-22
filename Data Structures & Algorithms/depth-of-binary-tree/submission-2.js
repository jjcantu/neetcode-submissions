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
        if (!root) return 0;

        const queue = [root];
        let depthOfTree = 0

        while (queue.length) {
            const currentLevelLength = queue.length;

            for (let i = 0; i < currentLevelLength; i++) {
                const currentNode = queue.shift();

                if (currentNode.left) {
                    queue.push(currentNode.left)
                }

                if (currentNode.right) {
                    queue.push(currentNode.right)
                }
            }
            
            depthOfTree++;
        }

        return depthOfTree;
    }
}
