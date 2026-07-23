class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        
        const stack = []
        const operators = {
            "+": (num1, num2) => num1+ num2,
            "-": (num1, num2) => num1 - num2,
            "*": (num1, num2) => num1 * num2,
            "/": (num1, num2) => Math.trunc(num1 / num2),
        }

        for(let char of tokens) {
            if(operators[char]) {
                let num2 = stack.pop()
                let num1 = stack.pop()
                // parseInt needed because char is a string
                stack.push(operators[char](parseInt(num1), parseInt(num2)))
            } else {
                stack.push(char)
            }
        }

        return stack[stack.length - 1]
     
    }
}
