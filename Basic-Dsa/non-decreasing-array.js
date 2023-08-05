/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    
    // Tracking value of array is change or not
    let changed = false;

    for (let i = 0; i < nums.length - 1; i++) {
        
        // If Current index follow the rule
        if (nums[i] <= nums[i+1]) {
            continue;
        }

        // Return false if we have to modify value of array more than one time
        if (changed) {
            return false;
        }

        if (i === 0 || nums[i+1] >= nums[i-1]) {
            nums[i] = nums[i+1];
            changed = true;
            
        } else {
            nums[i+1] = nums[i];
            changed = true;
        }
    }

    return true;
};
