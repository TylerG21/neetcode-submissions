class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numsCount = new Map()
        // sort nums 
        const sorted = nums.sort((a,b) => a-b)

        for(const num of sorted) {
            const found = numsCount.has(num)

            if(found) {
               const currentCount = numsCount.get(num)
               numsCount.set(num, currentCount + 1)
            } else {
                numsCount.set(num, 1)
            }
        }
        
        const numsArray = [...numsCount]
        const sortedByCount = numsArray.sort((a,b) => b[1] - a[1]) 
        const takeFirstk = sortedByCount.slice(0, k)
        const result = takeFirstk.map(pair => pair[0])

        return result

    }
}
