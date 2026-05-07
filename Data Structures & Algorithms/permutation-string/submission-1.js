class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
checkInclusion(s1, s2) {
    let l = 0
    let s1Map = new Map()
    let s2Map = new Map()

    for(var i = 0; i < s1.length; i++) {
        s1Map.set(s1[i], (s1Map.get(s1[i]) || 0) + 1)
        s2Map.set(s2[i], (s2Map.get(s2[i]) || 0) + 1)
    }

    function mapsMatch() {
        for(let [key, val] of s1Map) {
            if(s2Map.get(key) !== val) return false
        }
        return true
    }

    if(mapsMatch()) return true

    for(let r = s1.length; r < s2.length; r++) {
        s2Map.set(s2[r], (s2Map.get(s2[r]) || 0) + 1)
        s2Map.set(s2[l], (s2Map.get(s2[l]) || 0) - 1)
        if(s2Map.get(s2[l]) === 0) s2Map.delete(s2[l])
        l++
        if(mapsMatch()) return true
    }


    return false
}}
