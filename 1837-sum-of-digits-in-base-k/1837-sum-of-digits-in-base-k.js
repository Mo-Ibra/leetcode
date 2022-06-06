/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var sumBase = function(n, k) {

    let convertToAnotherBase = n.toString(k);

    let myArray = convertToAnotherBase.split('');

    let result = 0;

    myArray.forEach(number => {
        result += Number(number);
    });

    return result;
};