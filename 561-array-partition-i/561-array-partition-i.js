/**
 * @param {number[]} nums
 * @return {number}
 */

Array.prototype.chunk = function (size) {

    let result = [];

    while (this.length) {
        result.push(this.splice(0, size));
    }

    return result;
}

var arrayPairSum = function (nums) {
        // sort number 
        // get the small number of first two
        // and small of second 
        // and etc..
        // return sum of all numbers;

    let sortNums = nums.sort((a, b) => a - b);
    let chunk = sortNums.chunk(2);

    let arrayOfResult = [];
    let result = 0;

    console.log(chunk);

    console.log(chunk.length);

    for (let i = 0; i < chunk.length; i++) {
        arrayOfResult.push(Math.min(...chunk[i]));
        result += Math.min(...chunk[i]);
    }

    console.log(result);

    return result;
};