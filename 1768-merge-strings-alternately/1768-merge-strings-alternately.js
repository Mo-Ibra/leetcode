/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {

    let result = [];

    let firstArray = word1.split('');
    let secondArray = word2.split('');

    let getLenght = [firstArray.length, secondArray.length];

    let maxLength = Math.max(...getLenght);

    for (let i = 0; i < maxLength; i++) {
        if (firstArray[i] !== undefined) {
            result.push(firstArray[i]);
        }
        if (secondArray[i] !== undefined) {
            result.push(secondArray[i]);
        }
    }

    return result.join('');
};