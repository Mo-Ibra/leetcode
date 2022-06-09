/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
	let maxArr = [];

	for (let i = 0; i < matrix.length; i++) {
		maxArr.push(matrix[i].reduce((a, c) => a + c));
	}
	
	let maxNum = Math.max(...maxArr);
	let indexOfMaxNum = maxArr.indexOf(maxNum);
	let luckyRow = matrix[indexOfMaxNum];
	let minNum = Math.min(...luckyRow);
	let indexRowMin = luckyRow.indexOf(minNum);

	for(let j = 0; j < matrix.length; j++) {

		if(matrix[j][indexRowMin] > minNum) {
			return [];
		}
	}

	return [minNum];
};