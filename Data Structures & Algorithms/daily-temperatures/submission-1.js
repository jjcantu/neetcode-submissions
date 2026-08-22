class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const result = Array.from({ length: temperatures.length }).fill(0);

        for (let i = 0; i < temperatures.length; i++) {
            const currentDayTemp = temperatures[i]

            while (stack.length && currentDayTemp > stack[stack.length - 1][0]) {
                const [_, warmestDayIdx] = stack.pop()
                const elapsedDays = i - warmestDayIdx;
                result[warmestDayIdx] = elapsedDays
            }
            
            stack.push([currentDayTemp, i])
        }

        return result;
    }
}
