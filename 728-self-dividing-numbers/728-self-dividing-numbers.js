/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const isDivisible = num => {
    let n = num;
    while (num) {
        let temp = num % 10;
        if (n % temp !== 0) {
            return false;
        };
        num = Math.floor(num / 10);
    };
    return true;
};

var selfDividingNumbers = function (left, right) {
    let generateArray = [];
    let result = [];
    while (left <= right) {
        generateArray.push(left);
        left++;
    }
    generateArray.forEach(element => {
        if (isDivisible(element)) {
            result.push(element);
        }
    });
    
    return result;
};