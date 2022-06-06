/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {

    let myArray = [];

    nums.forEach(num => {
        myArray.push(num * num);
    });

    let sortArray = myArray.sort((a, b) => a - b);

    return sortArray;
};