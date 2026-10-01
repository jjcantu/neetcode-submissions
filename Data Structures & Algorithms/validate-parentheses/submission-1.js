class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
            // the first character we would see in the string
    // is an opening bracket, so ( || { || [
    // push closing bracket onto stack, when see open bracket.
    // pop element off of stop if element is the correct open to closing bracket.
    // return length of stack at end, if len is 0 return true, else false
    const stack = [];
    const closeToOpen = { ")": "(", "]": "[", "}": "{" };

    for (const char of s) {
        // if top of stack equals to closing element, pop.
        // else push.
        if (closeToOpen[char]) {
            if (stack[stack.length - 1] === closeToOpen[char]) {
                stack.pop();
            } else { // stack not correctly closed in order
                return false;
            }
        } else {
            stack.push(char)
        }
    }

    return stack.length === 0
    }
}
