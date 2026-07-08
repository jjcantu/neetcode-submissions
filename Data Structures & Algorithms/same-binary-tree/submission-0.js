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
        const queue = [[p, q]];

        while (queue.length) {
            const [treeOneNode, treeTwoNode] = queue.shift();

            if (!treeOneNode && !treeTwoNode) continue;
            if (!treeOneNode || !treeTwoNode) return false;
            if (treeOneNode.val !== treeTwoNode.val) return false;


            queue.push([treeOneNode.left, treeTwoNode.left])
            queue.push([treeOneNode.right, treeTwoNode.right])
        }

        return true;
    }
}
