class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        const closeOrOpen = {
            ")" : "(",
            "]" : "[",
            "}" : "{"
        }

        for(let char of s) {
            if(closeOrOpen[char]) {
                if(
                    stack.length > 0 &&
                    stack[stack.length - 1] === closeOrOpen[char]
                ) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(char)
            }

        }
            return stack.length === 0

    }
}
