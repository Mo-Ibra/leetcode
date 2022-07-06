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

    // const maxValue = Math.max(...Object.values(myObj));

    // console.log(myObj);
    // console.log(maxValue);

    let myKey = 0;
    let maxValue = 0;

    for (const key in myObj) {
        // console.log(key);
        // console.log(myObj[key]);
        if (myObj[key] > maxValue) {
            myKey = key;
            maxValue = myObj[key]
        }
    };

    console.log(Number(myKey));
    // console.log(maxValue);

    return Number(myKey);
};