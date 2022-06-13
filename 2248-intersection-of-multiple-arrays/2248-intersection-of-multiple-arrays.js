/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {

    let firstElement = [...nums[0]]

    for (let i = 0; i < nums.length; i++) {
        firstElement = firstElement.filter(n => nums[i].includes(n))
    }

    return firstElement.sort((a, b) => a - b)
};