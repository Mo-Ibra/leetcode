/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {

    let result = 0;

    words.forEach(word => {
        if (s.startsWith(word)) {
            result++;
        }
    });
    
    return result;
};