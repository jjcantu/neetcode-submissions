class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        /* 
            goal is to insert newInterval into intervals by merging.

            1st step: find all intervals prior to newInterval[0] (startTime)
            push them into mergedInterval Array

            2nd step: find all overlapping intervals with newInterval. Select the min of both
            intervals[idx][0] and newInterval[0]

            find max intervals[idx][1] newInterval[1]
            set these values to newInterval[0] for min and newInterval[1] for max

            push onto mergedIntervals array.

            last step: push all intervals[idx][1] > newInterval[1]
        */
        const mergedIntervals = [];
        let idx = 0;
        const lengthOfIntervals = intervals.length;

        while (idx < lengthOfIntervals && intervals[idx][1] < newInterval[0]) {
            mergedIntervals.push(intervals[idx]) // push non-overlapping intervals before newInterval startTime
            idx++;
        }

        // merge overlapping intervals
        while (idx < lengthOfIntervals && intervals[idx][0] <= newInterval[1]) {
            newInterval[0] = Math.min(newInterval[0], intervals[idx][0])
            newInterval[1] = Math.max(newInterval[1], intervals[idx][1])
            idx++;
        }

        // now we have merged intervals, push merged interval onto mergedIntervals
        mergedIntervals.push(newInterval)

        // push rest of intervals after new interval endtime
        while (idx < lengthOfIntervals) {
            mergedIntervals.push(intervals[idx])
            idx++
        }

        return mergedIntervals;
    }
}
