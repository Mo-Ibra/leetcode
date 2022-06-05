/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    
    let givenHight = [...heights];
    let sortedHight = heights.sort((a, b) => a - b);

    let theLength = sortedHight.length;

    let result = 0;
    
    for (let i = 0; i < theLength; i++) {
        if (givenHight[i] !== sortedHight[i]) {
            result++;
        }
    };
    
    return result;
};