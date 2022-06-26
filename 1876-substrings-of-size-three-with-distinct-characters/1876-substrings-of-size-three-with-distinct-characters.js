function isIsogram (str) {
    return !/(.).*\1/.test(str);
}

/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
    
    let myArray = s.split('');

    let arrayOfStrings = [];

    for (let i = 0; i < myArray.length; i++) {
        arrayOfStrings.push(myArray[i] + myArray[i + 1] + myArray[i + 2]);
    };

    let afterFilter = arrayOfStrings.filter(str => {
        if (!str.includes('undefined')) {
            return str;
        };
    });

    let result = afterFilter.filter(str => {
        if (isIsogram(str)) {
            return str;
        }
    });

    console.log(result);
    console.log(result.length);

    return result.length;
};