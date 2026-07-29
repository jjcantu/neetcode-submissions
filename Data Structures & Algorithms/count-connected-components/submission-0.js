class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const adjList = Array.from({ length: n }, () => []);
        // keep for cycle detection
        const visited = Array.from({ length: n}, () => false)
        let result = 0;

        for (let [node1, node2] of edges) {
            adjList[node1].push(node2)
            adjList[node2].push(node1)
        }

        const dfs = (node) => {
            for (const neighbor of adjList[node]) {
                if(!visited[neighbor]) {
                    visited[neighbor] = true
                    dfs(neighbor)
                }
            }
        }

        for (let node =0; node < n; node++) {
            if (!visited[node]) {
                visited[node] = true
                dfs(node)
                result++;
            }
        }

        return result;
    }
}
