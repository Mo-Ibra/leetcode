/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {

    let result = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('Divid % 3 and % 5');
            result.push('FizzBuzz');
        } else if (i % 3 == 0) {
            console.log('Divid % 3')
            result.push('Fizz');
        } else if (i % 5 == 0) {
            console.log('Divid % 5');
            result.push('Buzz');
        } else {
            console.log(i);
            result.push(i.toString());
        }
    };

    return result;
};