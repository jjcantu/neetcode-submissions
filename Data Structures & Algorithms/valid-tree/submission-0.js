class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    // what makes a valid tree
    // no cycles.
    // every node must be connected
    validTree(n, edges) {
        if (!n) return true

        const adjList = Array.from({ length: n }, () => []);
        const visited = new Set();

        for (let [node1, node2] of edges) {
            adjList[node1].push(node2)
            adjList[node2].push(node1)
        }

        const dfs = (node, prevNode) => {
            if (visited.has(node)) {
                return false
            }
            visited.add(node)

            for (const neighbor of adjList[node]) {
                if (neighbor === prevNode) continue;

                if (dfs(neighbor, node) === false) {
                    return false;
                }
            }
            return true;
        }

        return dfs(0, -1) && visited.size === n
    }
}
