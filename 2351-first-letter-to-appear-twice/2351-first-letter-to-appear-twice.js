/**
 * @param {string} s
 * @return {character}
 */
const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index)

var repeatedCharacter = function(s) {

    let myArray = s.split('');

    let result = [];

    let duplicateValues = toFindDuplicates(myArray);

    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] === myArray[i + 1]) {
            result.push(myArray[i]);
            // return myArray[i];
        }
    }

    if (duplicateValues)  {
        console.log(duplicateValues[0])
        return duplicateValues[0]
    }

    console.log(result[0])
    return result[0];
};