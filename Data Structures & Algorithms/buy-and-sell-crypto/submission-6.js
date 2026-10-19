class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maximumProfit = 0
        let left = 0
        let right = 1

        while (right < prices.length) {
            console.log('left', left)
            console.log('right', right)

            // if price at left is greater than right
            // increase left pointer
            // don't want to buy high and sell low...

            // if price at right is higher than price at left
            // recalculate the profit to see if difference is higher than max
            if (prices[left] > prices[right]) {
                left = right;
            } else if (prices[left] < prices[right]) {
                const profit = prices[right] - prices[left]
                maximumProfit = Math.max(maximumProfit, profit)
            }
            right++;
        }

        return maximumProfit
    }
}
