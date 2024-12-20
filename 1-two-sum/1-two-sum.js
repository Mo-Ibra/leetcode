/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = {};
    
    for(let i = 0; i< nums.length; i++){
        if(hash[target - nums[i]] !== undefined) {
            return [i, hash[target - nums[i]]];
        }
        
        hash[nums[i]] = i;
    }

    return [];
};