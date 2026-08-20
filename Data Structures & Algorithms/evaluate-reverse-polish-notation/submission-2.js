class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (const token of tokens) {
            if (token === '+') {
                const result = stack.pop() + stack.pop()
                stack.push(result)
            } else if (token === '-') {
                const a = stack.pop();
                const b = stack.pop();
                const result = b - a;
                stack.push(result)
            } else if (token === '*') {
                const result = stack.pop() * stack.pop()
                stack.push(result)
            } else if (token === '/') {
                const a = stack.pop();
                const b = stack.pop()

                const result = Math.trunc(b / a)
                stack.push(result)
            } else {
                stack.push(Number(token))
            }
        }

        return stack.pop();
    }
}
