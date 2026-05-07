class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        if(nums.length === 0) return []

        var result = []

        for(let i = 0; i < nums.length; i++) {
            let product = 1
            for(let j = 0; j < nums.length; j++) {
                if(i === j) { 
                    continue
                }
                else {
                    product *= nums[j]
                }
            }
                result.push(product)

        }

    return result

    }

}
