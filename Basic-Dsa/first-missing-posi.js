/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    
    // Elminating negative value (loop 1)
    for(let i = 0; i < nums.length; i++) {
        
        // If negative value is found
        if(nums[i] < 0) {
            
            nums[i] = 0;
        } 
    }
    
    // Overwriting the values of array (loop 2)
    for(let i = 0; i < nums.length; i++) {
        
        let val = Math.abs(nums[i]);
        
        if(val >= 1 && nums[i] <= nums.length) {
            
            if(nums[val-1] > 0) {
                
                nums[val-1] *= -1;
            }
            else if(nums[val-1] == 0) {
                
                nums[val-1] = (nums.length+1) * -1;
            }
        }  
    }
    
    // Finding missing number in array (loop 3)
    for(let i = 1 ; i < (nums.length + 1); i++) {
        
        if(nums[i-1] >= 0) {
            return i;
        }  
    }
    
    // If element is not between 1 to nums.length
    // Then missing number is nums.length+1
    return (nums.length + 1);
    
};
