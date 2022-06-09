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

    if (result.length > 0) {
        console.log(Math.max(...result).toString() + Math.max(...result).toString() + Math.max(...result).toString());
        return Math.max(...result).toString() + Math.max(...result).toString() + Math.max(...result).toString();
    } else {
        return ""
    };
};