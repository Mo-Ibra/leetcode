/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {

    let myArray = [];
    let deplicatedNumbers = [];

    nums.forEach(num => {
        if (myArray.includes(num)){
            deplicatedNumbers.push(num)
        } else {
            myArray.push(num);
        }
    });

    console.log(myArray);
    console.log(deplicatedNumbers);

    let result = myArray.filter(num => {
        if (!deplicatedNumbers.includes(num)) {
            return num
        }
    });

    let resultOfSum = 0;

    result.forEach(number => {
        resultOfSum += number;
    });

    console.log(resultOfSum);

    return resultOfSum;
};