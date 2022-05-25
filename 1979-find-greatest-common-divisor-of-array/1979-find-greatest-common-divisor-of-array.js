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
            // if (isFloat(smallOFNums / increment)) {
            //     increment--;
            // } else {
            //     increment--;
            // }
            increment--;
            console.log(increment);
        }
        console.log(increment);
        console.log('solved');

        return increment;
    };

    console.log('Can divid');

    return smallOFNums;
};
