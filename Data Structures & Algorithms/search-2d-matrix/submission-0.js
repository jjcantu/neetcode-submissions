class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let left = 0;
        let right = matrix.length - 1;

        while (left <= right) {
            const midpoint = Math.floor((left + right) / 2);
            const arr = matrix[midpoint];
            let arrLeft = 0
            let arrRight = arr.length - 1;

            if (arr[0] < target) {
                left = midpoint + 1;
            } else if (arr[0] > target) {
                right = midpoint - 1;
            } 
            
            while (arrLeft <= arrRight) {
                const arrMidpoint = Math.floor((arrLeft + arrRight ) / 2);

                if (arr[arrMidpoint] < target) {
                    arrLeft = arrMidpoint + 1;
                } else if (arr[arrMidpoint] > target) {
                    arrRight = arrMidpoint - 1;
                } else {
                    return true;
                }
            }
        }

        return false;
    }
}
