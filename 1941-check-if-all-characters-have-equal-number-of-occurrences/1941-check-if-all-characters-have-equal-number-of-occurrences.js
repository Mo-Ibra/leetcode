/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (x) {
    let myArray = x.split('');

    const numberOfCharacters = {};

    myArray.forEach(function (u) {
        numberOfCharacters[u] = (numberOfCharacters[u] || 0) + 1;
    });

    console.log(numberOfCharacters);

    const values = Object.values(numberOfCharacters);

    var unique = values.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });

    if (unique.length === 1) {
        console.log('true')
        return true;
    } else {
        console.log('false');
        return false;
    }
}