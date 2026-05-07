class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let charCounts = new Map()
        let l = 0
        let maxFreq = 0
        let maxLength = 0

        for(var r = 0; r < s.length; r++) {
            charCounts.set(s[r], (charCounts.get(s[r]) || 0) + 1)
            maxFreq = Math.max(maxFreq, charCounts.get(s[r]))

            if((r - l + 1) - maxFreq > k) {
                charCounts.set(s[l], charCounts.get(s[l]) - 1)
                l++
                maxFreq = Math.max(...charCounts.values())
            } 
            maxLength = Math.max(maxLength, r - l + 1)
        }

        return maxLength
    }
}
