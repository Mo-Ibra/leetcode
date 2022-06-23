/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {

    let result = [];

    nums1.forEach(num => {
        if (nums2.indexOf(num) != -1 ) {
            result.push(num);
        }
    });

    let unique = [...new Set(result)];
    
    return unique;
};