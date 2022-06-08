/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
        return ele != value;
    });
}

var canBeTypedWords = function (text, brokenLetters) {

    let myArray = text.split(' ');
    let brokenWordsArray = brokenLetters.split('');
    let passed = text.split(' ');

    myArray.forEach(text => {
        for (let i = 0; i < brokenWordsArray.length; i++) {
            if (text.includes(brokenWordsArray[i])) {
                passed = arrayRemove(passed, text);
            }
        }
    });

    return passed.length;
};