class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsSet = new Set()

        nums.forEach(e => {
            numsSet.add(e)
        })

    if(numsSet.size === nums.length) {
        return false
    } else {
    return true
    }
    }
}
