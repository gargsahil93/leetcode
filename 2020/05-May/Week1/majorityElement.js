/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let len = nums.length, len2 = len/2;
    let map = {};
    for (let i = 0; i < len; i++) {
        if (map[nums[i]] === undefined) map[nums[i]] = 1;
        else map[nums[i]]++;
        if (map[nums[i]] > len2) return nums[i];
    }
};
