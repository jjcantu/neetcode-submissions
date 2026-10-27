class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a,b) => a[0]-b[0]);
        const mergedIntervals = [];

        for (let i = 0; i < intervals.length; i++) {
            const currentInterval = [...intervals[i]]

            // if currentInterval endTime is greater than or equal to
            // nextInterval startTime
            while (i < intervals.length &&
                   i + 1 < intervals.length && 
                   currentInterval[1] >= intervals[i+1][0]) {
                    currentInterval[0] = Math.min(currentInterval[0],
                                             intervals[i+1][0])
                    currentInterval[1] = Math.max(currentInterval[1],
                                             intervals[i+1][1])
                    i++
                }

            mergedIntervals.push(currentInterval)
        }

        return mergedIntervals
    }
}
