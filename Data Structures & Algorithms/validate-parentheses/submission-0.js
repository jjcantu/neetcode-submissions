class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // loop through string
        // if char is opening character
        // push onto stack
        // else check top of stack if 
        // current character matches the
        // close to open[charcater].
        // if it a closing character, stack.pop()
        // at end of the loop check length of stack
        // if empty return true, else false

        const closeToOpen = { ")": "(", "}": "{", "]": "["}
        const stack = [];
        
        for (const character of s) {
            // if stack exists and last element is an matching opening character -> pop
            if (stack.length && stack[stack.length - 1] === closeToOpen[character]) {
                stack.pop();
            } else {
                stack.push(character)
            }
        }

        return !stack.length > 0;
    }
}
