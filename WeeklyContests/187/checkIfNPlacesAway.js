/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let lastIndex;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num === 1) {
            if (lastIndex !== undefined && i-lastIndex-1 < k) {
                return false;
            }
            lastIndex = i;
        }
    }
    return true;
};