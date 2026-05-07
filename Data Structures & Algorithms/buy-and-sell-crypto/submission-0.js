class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let leftPointer = 0 
        let rightPointer = 1 
        let maxProfit = 0
    
        
       while(rightPointer < prices.length) {
         if(prices[leftPointer] < prices[rightPointer]) {
            let profit = prices[rightPointer] - prices[leftPointer]
            maxProfit = Math.max(maxProfit, profit)
         } else {
            leftPointer = rightPointer;
         }
         rightPointer++;
       }
        return maxProfit
    }
}
