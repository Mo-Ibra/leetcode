function containsDuplicates(array) {
    if (array.length !== new Set(array).size) {
        return true;
    }

    return false;
}


/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {

    const count = {};

    arr.forEach(element => {
        count[element] = (count[element] || 0) + 1;
    });

    var array = Object.keys(count)
        .map(function (key) {
            return count[key];
        });

    if (!containsDuplicates(array)) {
        return true;
    }

    return false;
};