class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 0;
        let right = Math.max(...piles);
        let result = right;

        while (left <= right) {
            let k = Math.floor((left + right) / 2); // number of bananas eaten in an hour
            let hours = 0;
            for (const pile of piles) {
                hours += Math.ceil(pile / k)
            }

            // might be able to eat quicker so decrement right pointer
            if (hours <= h) {
                result = Math.min(result, k)
                right = k - 1;
            // else we're taking too long to eat a pile
            } else {
                left = k + 1;
            }
        }

        return result
    }
}
