/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
 
    let rightSum = 0;
    for(let i = 0; i < nums.length; i++) {
        
        rightSum += nums[i]; 
    }
 
    let leftSum  = 0;
    
    for(let i = 0; i < nums.length; i++) {
        
        // Subtracting the current element from right sum
        rightSum -= nums[i];
        
        // If pivot index is found
        if(rightSum === leftSum) {
            return i;
        }
        
        // Adding current element to left sum
        leftSum += nums[i];
    }
    
    // No pivot index is found
    return -1;
 
};
