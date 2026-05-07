class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphaNumeric(character) {
        return (
            (character >= "a" && character <= "z" ) ||
            (character >= "0" && character <= "9" )
        )
    
    }



    isPalindrome(s) {
        let lower = s.toLowerCase().split().join("")
        let newStr = ""

         for(let c of lower) {
            if(this.isAlphaNumeric(c)) {
                newStr += (c)
            }
         }
        return newStr === newStr.split('').reverse().join("")
    }
}
