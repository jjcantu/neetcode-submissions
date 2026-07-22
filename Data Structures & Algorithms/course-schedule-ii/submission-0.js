class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const indegrees = Array(numCourses).fill(0)
        const adjList = Array.from({ length: numCourses}, () => []);

        // build the adjList and the indegrees
        for (const [src, dest] of prerequisites) {
            indegrees[dest]++;
            adjList[src].push(dest);
        }

        let queue = [];
        // push nodes with no deps in queue
        for (let i = 0; i < numCourses; i++) {
            if (indegrees[i] === 0) {
                queue.push(i)
            }
        }

        let finished = 0;
        let output = Array(numCourses);
        while (queue.length) {
            const currentNode = queue.shift();
            output[numCourses - finished - 1] = currentNode
            finished++;

            for (const neighbor of adjList[currentNode]) {
                indegrees[neighbor]--;

                if (indegrees[neighbor] === 0) {
                    queue.push(neighbor)
                }

            }
        }

        if (finished !== numCourses) {
            return [];
        }

        return output;
    }
}
