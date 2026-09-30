class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequencyMap = {};
        const bucketArray = Array.from({ length: nums.length + 1 }, () => []);

        // count frequency of numbers
        for (const num of nums) {
            frequencyMap[num] = (frequencyMap[num] || 0) + 1
        }

        for (const num in frequencyMap) {
            // frequency map keys = number
            // frequency map values = # of occurences of number
            const count = frequencyMap[num]
            bucketArray[count].push(num)
        }

        const mostFrequentElements = [];
        for (let i = bucketArray.length - 1; i > 0; i--) {
            for (const number of bucketArray[i]) {
                mostFrequentElements.push(number)

                if (mostFrequentElements.length === k) {
                   return mostFrequentElements;
                }
            }
        }
    }
}
