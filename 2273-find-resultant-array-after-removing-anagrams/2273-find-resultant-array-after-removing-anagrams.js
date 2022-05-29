/**
 * @param {string[]} words
 * @return {string[]}
 */
// var filterArray = function (arr) {
//     var unique = [];
//     arr.forEach(element => {
//         if (!unique.includes(element)) {
//             unique.push(element);
//         } else {
//             unique.push(undefined);
//         }
//     });
//     return unique;
// }

// var removeAnagrams = function (words) {
//     // sort it 
//     // filter array and make the another numbers undefined
//     // forloop on last result and get numbers who is not undefined like [0, 5]
//     // return these numbers from words array

//     let arrayAfterSort = [];

//     let result = [];

//     words.forEach(element => {
//         arrayAfterSort.push(element.split('').sort().join(''));
//     });

//     // console.log(filterArray(arrayAfterSort));
//     let afterFilter = filterArray(arrayAfterSort);

//     let arrOfIndex = [];

//     for (let i = 0; i < afterFilter.length; i++) {
//         if (afterFilter[i] !== undefined) {
//             arrOfIndex.push(i);
//         }
//     };

//     arrOfIndex.forEach(ele => {
//         result.push(words[ele]);
//     });

//     console.log(result);
//     return result;
// };

/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    const temp = []; // [orginalWord, reOrderWord]
    const res = []; 
    for(let i = 0; i < words.length; i++) {
        let reOderWord = words[i].split('').sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0)).join(''); // sort to know it is a anagrams or not
        if(!temp[0] || temp[1] !== reOderWord) {
            temp[0] = words[i];
            temp[1] = reOderWord;
            res.push(words[i])
        }
    }
    return res
};