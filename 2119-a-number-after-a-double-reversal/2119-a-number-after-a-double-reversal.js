/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {

    let beforeReverse = num;

    let afterReverse = Number(num.toString().split('').reverse().join(''));
    
    if (beforeReverse.toFixed().length === afterReverse.toFixed().length) {
        return true;
    } else {
        return false;
    }
};