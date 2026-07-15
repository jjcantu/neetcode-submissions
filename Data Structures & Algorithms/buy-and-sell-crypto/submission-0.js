class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0
        let left = 0
        let right = 1

        while (right < prices.length) {
            if (prices[right] > prices[left]) {
                const currentProfit = prices[right] - prices[left];
                maxProfit = Math.max(maxProfit, currentProfit);
            } else if (prices[left] > prices[right]) {
                left = right;
            }
            right++;
        }

        return maxProfit;
    }
}
