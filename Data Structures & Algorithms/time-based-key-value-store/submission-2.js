class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.get(key)) {
            this.keyStore.set(key, [])
        }

        const keyVal = this.keyStore.get(key)
        keyVal.push([value, timestamp])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let result = "";
        const values = this.keyStore.get(key)

        if (!values) return ""

        let left = 0
        let right = values.length - 1

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            // only set result if timestamp is less than
            if (values[mid][1] <= timestamp) {
                result = values[mid][0]
                left = mid + 1
            } else if (values[mid][1] >= timestamp) {
                right = mid - 1
            }
        }

        return result
    }
}
