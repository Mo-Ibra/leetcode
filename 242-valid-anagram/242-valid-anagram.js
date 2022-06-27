/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {

    if (s.length !== t.length) return false;

    let firstArray = s.split('');
    let secondArray = t.split('');
    
    if (firstArray.sort().join('') === secondArray.sort().join('')) {
        return true;
    }

    return false;

};