/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    
    let result = 0;

    grid.forEach(num => {
        num.forEach(n => {
            if (n.toString().startsWith('-')) {
                result += 1;
            }
        });
    });

    console.log(result);

    return result;

};