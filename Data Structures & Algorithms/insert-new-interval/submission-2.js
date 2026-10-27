class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let idx = 0;
        const mergedIntervals = [];

        // push intervals that are before new interval and not overlapping
        while (idx < intervals.length && intervals[idx][1] < newInterval[0]) {
            mergedIntervals.push(intervals[idx])
            idx++
        }

        while (idx < intervals.length && intervals[idx][0] <= newInterval[1]) {
            newInterval[0] = Math.min(newInterval[0], intervals[idx][0])
            newInterval[1] = Math.max(newInterval[1], intervals[idx][1])
            idx++
        }
        mergedIntervals.push(newInterval)

        while (idx < intervals.length) {
            mergedIntervals.push(intervals[idx])
            idx++
        }

        return mergedIntervals
    }
}
