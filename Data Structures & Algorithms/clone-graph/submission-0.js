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
        const oldToNew = new Map;

        const dfs = (node) => {
            if (!node) return null;

            if (oldToNew.has(node)) {
                return oldToNew.get(node);
            }

            const copyNode = new Node(node.val);
            oldToNew.set(node, copyNode);

            for (const neighbor of node.neighbors) {
                copyNode.neighbors.push(dfs(neighbor));
            }

            return copyNode
        }

        return dfs(node);
    }
}
