/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
    
    let evenNumbers = [];
    let oddNumbers = [];

    nums.forEach(num => {
        if (num % 2 == 0) {
            evenNumbers.push(num);
        } else {
            oddNumbers.push(num);
        }
    });

    let result = [];

    evenNumbers.forEach((num1, index) => {
        const num2 = oddNumbers[index];
        result.push(num1);
        result.push(num2);
    });

    return result;
};