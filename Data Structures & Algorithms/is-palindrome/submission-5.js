class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphanumeric (character) {
        return(
            (character >='a' && character <='z') ||
            (character >='A' && character <='Z') ||
            (character >='0' && character <='9') 
        );
    }

    isPalindrome(s) {
        let newStr = ''

        for(let character of s) {
            if(this.isAlphanumeric(character)) {
                newStr += character.toLowerCase();
            }
        }
        return newStr === newStr.split('').reverse().join('');
    }
}
