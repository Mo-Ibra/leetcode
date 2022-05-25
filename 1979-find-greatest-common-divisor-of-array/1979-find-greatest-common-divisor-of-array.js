/**
 * @param {number[]} nums
 * @return {number}
 */
function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
}

var findGCD = function (nums) {
    let greatOfNums = Math.max(...nums);
    let smallOFNums = Math.min(...nums);

    let increment = 100;

    if (greatOfNums % smallOFNums !== 0) {
        while (isFloat(greatOfNums / increment) || isFloat(smallOFNums / increment)) {
            increment--;
        }
        return increment;
    };
    return smallOFNums;
};
