class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let res = []
        // sort interger array so that we avoid providing duplicates in the answer array.

        nums.sort((a,b) => a-b);

        for(var i = 0; i < nums.length; i++) {
        if(nums[i] > 0) break;            
        if(i > 0 && nums[i] === nums[i-1]) continue;

        let left = i + 1
        let right = nums.length - 1

        while(left < right ) {
            const sum = nums[i] + nums[left] + nums[right]

            if(sum < 0) {
                left++
            } else if(sum > 0) {
                right--
            } else {
                res.push([nums[i], nums[left], nums[right]])
                left++
                right--            
                while(left < right && nums[left] === nums[left-1]) {
                    left++
                }
            }
        }
    }
    return res;
    }
}
