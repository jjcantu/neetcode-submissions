/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null;

        const oldToNew = new Map();

        const dfs = (node) => {
            if (oldToNew.has(node)) {
                return oldToNew.get(node)
            }

            // make a copy of current node
            const copyOfNode = new Node(node.val)
            oldToNew.set(node, copyOfNode)

            for (const neighbor of node.neighbors) {
                copyOfNode.neighbors.push(dfs(neighbor))
            }

            return copyOfNode
        }

        return dfs(node)
    }
}
