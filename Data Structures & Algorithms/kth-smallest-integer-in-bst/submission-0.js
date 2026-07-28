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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        // traverse tree, store all values
        // in an sorted array or heap.
        // subtract from k, while k > 0
        // when k === 0 return element
        // leverage binary search tree properties using DFS.
        const sortedNodes = [];

        const dfs = (node) => {
            if (!node) return;

            if (node.left) dfs(node.left)
            sortedNodes.push(node.val)
            if (node.right) dfs(node.right)
        }

        dfs(root)
        return sortedNodes[k - 1]
    }
}
