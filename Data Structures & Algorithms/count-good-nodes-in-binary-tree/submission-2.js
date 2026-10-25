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
        if (!root) return 0

        // max node and maximum on path so far.
        const queue = [[root, -Infinity]];
        let numberOfGoodNodes = 0;

        while (queue.length) {
            const [currentNode, pathMax] = queue.shift();

            if (currentNode.val >= pathMax) {
                numberOfGoodNodes++;
            }

            const maxValue = Math.max(pathMax, currentNode.val)

            if (currentNode.left) {
                queue.push([currentNode.left, maxValue])
            }

            if (currentNode.right) {
                queue.push([currentNode.right, maxValue])
            }
        }

        return numberOfGoodNodes;
    }
}
