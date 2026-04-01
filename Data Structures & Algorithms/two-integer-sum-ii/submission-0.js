class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;

        while (left < right) {
            const result = numbers[left] + numbers[right]
            if (result === target) return [left + 1, right + 1]

            if (result < target) {
                left += 1
            } else if (result > target) {
                right -= 1
            }
        }

        return [];
    }
}
