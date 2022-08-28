/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
  let counter = 0;
  
  while (!nums.every(element => element === 0)) {
    let min = Math.min(...nums.filter(element => element !== 0))
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) nums[i] -= min
    }

    counter++
  }

  return counter

};