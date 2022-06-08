/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function (num1, num2) {

    let firstNumber = num1;
    let secondNumber = num2;

    let result = 0;

    while (firstNumber > 0 && secondNumber > 0) {
        if (firstNumber > secondNumber) {
            firstNumber = firstNumber - secondNumber;
            result++;
        } else if (firstNumber < secondNumber) {
            secondNumber = secondNumber - firstNumber;
            result++;
        } else if (firstNumber === secondNumber) {
            firstNumber = firstNumber - secondNumber;
            result++;
        };
    }

    console.log(result);

    return result;
};