/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {

    let randomCharacters = [];
    let countDeplicatedNumbers = 0;

    for (let i = 0; i < n; i++) {
        randomCharacters.push('a');
    }

    randomCharacters.forEach(() => {
        countDeplicatedNumbers = (countDeplicatedNumbers || 0) + 1;
    });

    if (countDeplicatedNumbers % 2 == 0 ) {
        randomCharacters[0] = 'b';
    }

    return randomCharacters.join('');
}