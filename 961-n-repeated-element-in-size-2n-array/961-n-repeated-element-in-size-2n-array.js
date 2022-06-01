/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {

    let uniqueArray = [];
    let repeatedNumber = [];

    nums.forEach(num => {
        if (!uniqueArray.includes(num)) {
            uniqueArray.push(num);
        } else {
            repeatedNumber.push(num);
        }
    });

    return repeatedNumber[0];
};