class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // if all prereqs have been taken 
        let indegree = Array(numCourses).fill(0)
        let adj = Array.from({length: numCourses}, () => []);

        for (let [src, dest] of prerequisites) {
            indegree[dest]++
            adj[src].push(dest);
        }

        let queue = [];

        for (let i = 0; i < numCourses; i++) {
            if (indegree[i] === 0) {
                queue.push(i);
            }
        }

        let finish = 0
        while (queue.length) {
            let currentNode = queue.shift();
            finish++;

            for (let neighbor of adj[currentNode]) {
                indegree[neighbor]--;
                if (indegree[neighbor] === 0) {
                    queue.push(neighbor)
                }
            }
        }

        return finish === numCourses;
    }
}
