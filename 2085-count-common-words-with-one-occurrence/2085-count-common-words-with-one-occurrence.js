function checkTimesInArray(array, element) {

    let count = 0;

    array.forEach(ele => {
        if (ele === element) {
            count += 1;
        }
    });

    return count;
}


/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
    
    let result = 0;

    words1.forEach(word1 => {
        if (checkTimesInArray(words1, word1) == 1 && checkTimesInArray(words2, word1) == 1 ) {
            result++;
        }
    });

    return result;

};