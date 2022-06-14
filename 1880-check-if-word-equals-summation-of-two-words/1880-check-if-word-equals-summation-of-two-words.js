/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
    let englishCharacters = {
        'a': 0,
        'b': 1,
        'c': 2,
        'd': 3,
        'e': 4,
        'f': 5,
        'g': 6,
        'h': 7,
        'i': 8,
        'j': 9,
        'k': 10,
        'l': 11,
        'm': 12,
        'n': 13,
        'o': 14,
        'p': 15,
        'q': 16,
        'r': 17,
        's': 18,
        't': 19,
        'u': 20,
        'v': 21,
        'w': 22,
        'x': 23,
        'y': 24,
        'z': 25
    };

    let firstArray = firstWord.split('');

    let firstArrayResult = [];

    let secondArray = secondWord.split('');

    let secondArrayResult = [];

    let targetArray = targetWord.split('');

    let targetArrayResult = [];

    for (let i = 0; i < firstArray.length; i++) {
        console.log(englishCharacters[firstArray[i]]);
        firstArrayResult.push(englishCharacters[firstArray[i]]);
    }

    for (let i = 0; i < secondArray.length; i++) {
        console.log(englishCharacters[secondArray[i]]);
        secondArrayResult.push(englishCharacters[secondArray[i]]);
    }

    for (let i = 0; i < targetArray.length; i++) {
        console.log(englishCharacters[targetArray[i]]);
        targetArrayResult.push(englishCharacters[targetArray[i]]);
    }

    let firstNumber = Number(firstArrayResult.join(''));
    let secondNumber = Number(secondArrayResult.join(''));
    let targetNumber = Number(targetArrayResult.join(''));

    if (firstNumber + secondNumber === targetNumber) {
        return true;
    } else {
        return false;
    }
};