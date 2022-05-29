/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    console.log(s);

    let myArray = s.split('');

    let result = [];

    // myArray[4] = 'c';
    // myArray[5] = 'o';
    // myArray[6] = 'd';
    // myArray[7] = 'e';
    // myArray[0] = 'l';
    // myArray[2] = 'e';
    // myArray[1] = 'e';
    // myArray[3] = 't';

    let increment = 0;

    // for (let i = 0; i < myArray.length; i++) {
    //     // console.log(myArray[i]);
    //     // myArray[indices[increment]] = myArray[i];
    //     // increment++;
    //     myArray[indices[increment]] = myArray[i];
    //     increment++;
    // };

    myArray.forEach(element => {
        result[indices[increment]] = element;
        increment++;
    });

    console.log(myArray);
    console.log(result);
    return result.join('');
};