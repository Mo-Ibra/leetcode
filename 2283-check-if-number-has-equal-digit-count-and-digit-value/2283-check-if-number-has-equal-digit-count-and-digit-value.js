/**
 * @param {string} num
 * @return {boolean}
 */
function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}

var digitCount = function (num) {

    let arrayOfNumbers = [];
    let arrayOfAppears = num.split('');

    for (let i = 0; i < arrayOfAppears.length; i++) {
        arrayOfNumbers.push(i.toString());
    };

    let indexOfArray = arrayOfNumbers.length;

    let result = [];

    for (let i = 0; i < indexOfArray; i++) {
        result.push(getOccurrence(arrayOfAppears, arrayOfNumbers[i]).toString());
    };

	// Check if the arrays are the same length
	if (result.length !== arrayOfAppears.length) return false;

	// Check if all items exist and are in the same order
	for (var i = 0; i < result.length; i++) {
		if (result[i] !== arrayOfAppears[i]) return false;
	}

	// Otherwise, return true;
	return true;
};