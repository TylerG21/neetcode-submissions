class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // take a string array and return a single string.
        // When we decode we will need to know how to decode. Maybe store strings length
        //so we can use that in the decode process.
        if(strs.length === 0) {
            return ""
        }
        let sizes = []
        let response = ""
        for(let s of strs) {
            sizes.push(s.length)
        }
        for(let sz of sizes){
            response += sz + ","
        }
        response += '#'

        for(let string of strs){
            response+= string;
        }
        console.log('butter response', response)
        return response

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // take a single string and return an array of strings.
    if(str.length === 0) return []


    let sizes = []
    let response = []
    let i = 0

    while(str[i] !=="#") {
        let current = ""
        while(str[i] !== ",") {
            current += str[i]
            i++
        }
        sizes.push(parseInt(current))
        i++
    }
    i++;
    for(let sz of sizes) {
        response.push(str.substr(i,sz));
        i += sz
    }
    return response
    }
}
