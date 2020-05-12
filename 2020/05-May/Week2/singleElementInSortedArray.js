/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    let findNum = (i, j) => {
        if (i === j) return nums[i];
        let mid = i + Math.floor((j-i)/2);
        let newI = i, newJ = mid;
        if (mid % 2 === 0) {
            if (nums[mid+1] === nums[mid]) newI=mid+2, newJ=j;
        } else if (nums[mid-1] === nums[mid]) {
            newI=mid+1, newJ=j;
        }
        return findNum(newI, newJ);
    };
    return findNum(0, nums.length-1);
};