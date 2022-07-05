/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let myArray = nums.length;
    let mySet = new Set([...nums]).size;

    if (myArray !== mySet) return true;
    return false;

};