/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {

    if (!nums.length) return 0;
    if (nums.length < 2) return nums[0];
    if (nums.includes(0)) return 0;

    let closest = 0;

    for (let i = 0; i < nums.length; i++) {
        if (closest === 0) {
            closest = nums[i]
        } else if (nums[i] > 0 && nums[i] <= Math.abs(closest)) {
            closest = nums[i]
        } else if (nums[i] < 0 && - nums[i] < Math.abs(closest)) {
            closest = nums[i]
        }
    }

    return closest;
}