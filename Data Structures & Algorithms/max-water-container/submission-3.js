class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        /* two pointer approach where we must find the max area of the
        rectangle, area of rec = L * H 
        
        go through every possible combination of tallest left and 
        right walls and calculate the area. keep the max.
        */

        let left = 0;
        let right = heights.length - 1;
        let maxArea = 0;

        while (left < right) {
            const minHeight = Math.min(heights[left], heights[right]);
            const length = right - left;
            const area = minHeight * length
            maxArea = Math.max(maxArea, area);

            // if right wall is taller
            if (heights[left] < heights[right]) {
                left += 1;
            // if left wall is taller
            } else {
                right -= 1;
            }
        }

        return maxArea;
    }
}
