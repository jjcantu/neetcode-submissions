class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        /* set left and right ptr on matrix.
            check target against matrix[i][matrix[i].length - 1]
            if element at matrix[i] > target left = 
        */
        let left = 0
        let right = matrix.length - 1;

        while (left <= right) {
            const middleRowIdx = Math.floor((left + right) / 2);

            const lastElPos = matrix[middleRowIdx].length - 1
            // if the start element is greater than target but last el isn't.
            if (matrix[middleRowIdx][0] <= target && 
                matrix[middleRowIdx][lastElPos] >= target) {
                    let rowLeft = 0
                    let rowRight = lastElPos;

                    while (rowLeft <= rowRight) {
                        let middleIdx = Math.floor((rowLeft + rowRight) / 2);

                        if (matrix[middleRowIdx][middleIdx] > target) {
                            rowRight = middleIdx - 1;
                        } else if (matrix[middleRowIdx][middleIdx] < target) {
                            rowLeft = middleIdx + 1;
                        } else {
                            return true;
                        }
                    }

                    return false
            } else if (matrix[middleRowIdx][lastElPos] >= target) {
                right = middleRowIdx - 1;
            } else {
                left = middleRowIdx + 1;
            }
        }

        return false;
    }
}
