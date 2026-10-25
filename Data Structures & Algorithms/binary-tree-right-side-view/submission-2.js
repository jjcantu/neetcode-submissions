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
        /* 
            iterative BFS
            check if node is last in currentLevel, the last idx
            if so push node
            append node children onto queue
        */

        if (!root) return [];

        const queue = [root];
        const rightSideViewNodes = [];

        while (queue.length) {
            const currentLevelLength = queue.length;

            for (let i = 0; i < currentLevelLength; i++) {
                let atLastNodeInLevel;

                if (i === currentLevelLength - 1) { // indicates at last node, if true
                    atLastNodeInLevel = true
                }
                const currentNode = queue.shift();

                console.log('currentNode', currentNode.val)
                console.log('atLastNodeInLevel', atLastNodeInLevel)

                if (currentNode.left) {
                    queue.push(currentNode.left)
                }

                if (currentNode.right) {
                    queue.push(currentNode.right)
                }

                if (!atLastNodeInLevel) continue
                rightSideViewNodes.push(currentNode.val)
            }
        }

        return rightSideViewNodes

    }   
}
