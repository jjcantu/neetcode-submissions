class Solution {
    /**
     * @param {string} wwwwww
w     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const SFreqMap = new Map();
        const TFreqMap = new Map();

        for (let i = 0; i < s.length; i++) {
            const letterS = s[i]
            const letterT = t[i]

            const oldValS = SFreqMap.get(letterS) || 0;
            const newValS = oldValS + 1
            SFreqMap.set(letterS, newValS)

            const oldValT = TFreqMap.get(letterT) || 0;
            const newValT = oldValT + 1;
            TFreqMap.set(letterT, newValT)
        }


        for (const [key] of SFreqMap) {
            console.log('key', key)
            console.log('SFreqMpa', SFreqMap)
            console.log('TFreqMap', TFreqMap)

            if (SFreqMap.get(key) !== TFreqMap.get(key)) {
                return false
            }
        }

        return true;
    }
}
