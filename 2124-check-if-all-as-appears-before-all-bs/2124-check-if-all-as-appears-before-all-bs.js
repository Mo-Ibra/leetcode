/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {

    if (!s.includes('b')) return true;

    let myArray = s.split('');

    let firstB = s.indexOf('b');

    for (let i = firstB; i < myArray.length; i++) {
        if (myArray[i].includes('a')) return false;
    }

    return true;
};