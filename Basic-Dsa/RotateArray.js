/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
    // Declaring array for storing rotated array
    let rotateArray = [];
    
    for(let i = 0; i < nums.length; i++)
     {
        // Storing each element in desired manner
         rotateArray[(i+k)%nums.length] = nums[i];
         
     }   
    
    for(let i = 0; i < nums.length; i++) 
     {
         // Tranferring each value of rotated array to original array
         nums[i] = rotateArray[i];
     }    
    
}; 
