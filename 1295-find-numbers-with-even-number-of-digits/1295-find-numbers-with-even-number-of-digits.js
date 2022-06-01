/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {

    let arrayOfLength = [];
    let result = 0;

    nums.forEach(num => {
        arrayOfLength.push(num.toString().split('').length);
    });

    arrayOfLength.forEach(len => {
        if (len % 2 === 0) {
            result++;
        }
    })

    return result;

};