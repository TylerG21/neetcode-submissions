class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsSet = new Set()
        

        for(const num of nums) {
            numsSet.add(num)
        }

        if(numsSet.size === (nums.length)) {
            return false
        }

        return true

    }
}
