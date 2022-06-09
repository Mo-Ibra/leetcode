/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {

    let result = [];

    for (let i = 0; i < 10; i++) {
        if (num.toString().includes(i.toString() + i.toString() + i.toString())) {
            result.push(i);
        }
    };

    let maxNumber = Math.max(...result).toString()

    if (result.length > 0) {
        return maxNumber + maxNumber + maxNumber;
    } else {
        return ""
    };
};