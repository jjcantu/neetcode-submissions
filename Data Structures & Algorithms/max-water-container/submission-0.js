class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // left and right pointers
        // calculate the area of the rectangle
        // choose the min(height[left], height[right]) 
        // multiple min by right - left + 1
        // while left <= right

        let left = 0;
        let right = heights.length - 1;
        let maxArea = 0;

        while (left < right) {
            const height = Math.min(heights[left], heights[right]);
            const length = right - left;
            const area = height * length;
            maxArea = Math.max(maxArea, area);

            if (heights[left] < heights[right]) {
                left++;
            } else if (heights[left] > heights[right]) {
                right--;
            } else {
                left++;
                right--;
            }
        }

        return maxArea;
    }
}
