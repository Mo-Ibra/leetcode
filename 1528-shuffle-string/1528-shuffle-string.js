/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {

    let myArray = s.split('');

    let result = [];

    let increment = 0;

    myArray.forEach(element => {
        result[indices[increment]] = element;
        increment++;
    });

    return result.join('');
};