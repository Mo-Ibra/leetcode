/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    
    let result = 0;

    grid.forEach(num => {
        if (Array.isArray(num)) {
            num.forEach(n => {
                if (n.toString().startsWith('-')) {
                    result += 1;
                }
            });
        } else {
            if (n.toString().startsWith('-')) {
                result += 1;
            }
        }
    });

    console.log(result);

    return result;

};