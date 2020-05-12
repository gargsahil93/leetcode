/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    let biggest = 1;
    let first = 0, last = 0, min = nums[0]-limit, max = nums[0]+limit;
    while(last < nums.length-1) {
        last++;
        let num = nums[last];
        if (num >= min && num <= max) {
            min = Math.max(min, num - limit);
            max = Math.min(max, num + limit);
        } else {
            if (last - first > biggest) biggest = last - first;
            let lastMin = num - limit, lastMax = num + limit;
            first = last;
            while(nums[first-1] >= lastMin && nums[first-1] <= lastMax) {
                lastMin = Math.max(lastMin, nums[first-1]-limit);
                lastMax = Math.min(lastMax, nums[first-1]+limit);
                first--;
            }
            min = lastMin;
            max = lastMax;
        }
    }
    if (last - first + 1 > biggest) biggest = last - first + 1;
    return biggest;
};