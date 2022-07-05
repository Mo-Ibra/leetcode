/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let myArray = [];

    for (let i = 0; i < nums.length; i++) {
        if (myArray.indexOf(nums[i]) === -1) {
            myArray.push(nums[i]);
        } else {
            return true;
        }
    };
    
    return false;

};