/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    
    let firstArray = [];
    let secondArray = [];

    nums1.forEach(num => {
        if (nums2.indexOf(num) === -1 ){
            firstArray.push(num);
        }
    });

    nums2.forEach(num => {
        if (nums1.indexOf(num) === -1 ){
            secondArray.push(num);
        }
    });

    return [[...new Set(firstArray)], [...new Set(secondArray)]];
};