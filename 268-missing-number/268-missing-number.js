/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {

    let actualSum = nums.length * (nums.length + 1) / 2;

    let sumOfArray = 0;

    for (let i = 0; i < nums.length; i++) {
        sumOfArray = sumOfArray + nums[i];
    }

    return actualSum - sumOfArray;
};