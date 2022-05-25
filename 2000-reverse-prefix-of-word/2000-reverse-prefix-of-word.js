/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    let indexOfChuck = word.indexOf(ch) + 1;
    let getTheChuck = word.slice(0, indexOfChuck);
    let reverseChuck = getTheChuck.split('').reverse().join('');
    let result = word.replace(getTheChuck, reverseChuck);
    return result;
};