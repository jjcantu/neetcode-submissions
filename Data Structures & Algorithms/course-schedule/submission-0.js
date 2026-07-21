class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let indegree = Array(numCourses).fill(0);
        let adjList = Array.from({ length: numCourses }, () => []);

        for (let [src, dst] of prerequisites) {
            indegree[dst]++;
            adjList[src].push(dst);
        }

        let queue = [];
        for (let i = 0; i < numCourses; i++) {
            if (indegree[i] === 0) {
                queue.push(i)
            }
        }

        let finished = 0;
        while (queue.length) {
            const currentNode = queue.shift();
            finished++
            for (let neighbor of adjList[currentNode]) {
                indegree[neighbor]--;
                if (indegree[neighbor] === 0) {
                    queue.push(neighbor)
                }
            }
        }

        return finished === numCourses;
    }
}
