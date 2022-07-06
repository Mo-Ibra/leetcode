/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const arr = nums;

    const count = {};

    for (const element of arr) {
        if (count[element]) {
            count[element] += 1;
        } else {
            count[element] = 1;
        }
    }

    const myObj = count;

    let myKey = 0;
    let maxValue = 0;

    for (const key in myObj) {
        if (myObj[key] > maxValue) {
            myKey = key;
            maxValue = myObj[key]
        }
    };
    
    return Number(myKey);
};