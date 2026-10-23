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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        const pQueue = [p];
        const qQueue = [q];

        while (pQueue.length) {
            const pCurrentNode = pQueue.shift();
            const qCurrentNode = qQueue.shift();

            // if both are null -> balanced for now
            if (!pCurrentNode && !qCurrentNode) {
                continue;
            }

            // if one is null but not both -> false
            if (!pCurrentNode || !qCurrentNode) {
                return false
            }


            // if both nodes exist but val is not equal -> false
            if (pCurrentNode.val !== qCurrentNode.val) {
                return false
            }

            pQueue.push(pCurrentNode.left)
            qQueue.push(qCurrentNode.left)

            pQueue.push(pCurrentNode.right)
            qQueue.push(qCurrentNode.right)

        }

        return true;
    }
}
