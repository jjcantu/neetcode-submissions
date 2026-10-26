class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        const mergedIntervals = [];

        for (let i = 0; i < intervals.length; i++)  {
            const newInterval = [...intervals[i]];

            // if nextInterval starts before currentInterval endTime
            // this means theyre overlapping.
            while (i < intervals.length && i + 1 < intervals.length &&
            intervals[i+1][0] <= newInterval[1]) {
                newInterval[0] = Math.min(newInterval[0], intervals[i + 1][0])
                newInterval[1] = Math.max(newInterval[1], intervals[i + 1][1])
                i++
            }

            mergedIntervals.push(newInterval)
        }

        return mergedIntervals;
    }
}
