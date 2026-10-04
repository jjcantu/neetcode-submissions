let DELIMITER = "#"

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = '';

        for (const string of strs) {
            const lengthOfString = string.length;
            const encodedPortion =      
                `${lengthOfString}${DELIMITER}${string}`;
            
            encodedString += encodedPortion
        }

        return encodedString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decodedStringsArr = [];
        let currentLength = 0

        while (currentLength < str.length) {
            let pointerAtPound = currentLength;
            while (str[pointerAtPound] !== '#') {
                pointerAtPound += 1
            }
        const length = 
                Number(str.slice(currentLength, pointerAtPound));
            const startOfWord = pointerAtPound + 1
            const endOfWord = startOfWord + length;
            const word = str.slice(startOfWord, endOfWord)
            decodedStringsArr.push(word)
            currentLength = endOfWord
        }   

        return decodedStringsArr;         
    }
}
