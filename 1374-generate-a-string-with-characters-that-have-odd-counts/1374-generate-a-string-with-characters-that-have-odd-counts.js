/**
 * @param {number} n
 * @return {string}
 */
// var generateTheString = function (n) {

//     let randomCharacters = [];
//     let countDeplicatedNumbers = 0;

//     for (let i = 0; i < n; i++) {
//         randomCharacters.push('a');
//     }

//     randomCharacters.forEach(() => {
//         countDeplicatedNumbers = (countDeplicatedNumbers || 0) + 1;
//     });

//     if (countDeplicatedNumbers % 2 == 0 ) {
//         randomCharacters[0] = 'b';
//     }

//     return randomCharacters.join('');
// }

var generateTheString = function (n) {
    
    let result = [];

    if (n % 2 == 0) {
        for (let i = 0; i < n; i++) {
            result.push('a');
            result[0] = 'b';
        }
    } else {
        for (let i = 0; i < n; i++) {
            result.push('a');
        }
    }
    
    return result;
}