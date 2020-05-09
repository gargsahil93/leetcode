/**
 * @param {number} num
 * @return {boolean}
 */
let sqMap = {};
let sq = (x) => {
    if (!sqMap[x]) sqMap[x] = x*x;
    return sqMap[x];
};
let isPerfectSquare = function(num) {
    let checkBetween = (a, b) => {
        if (a >= b) return sq(a) === num;
        let mid = Math.floor((a+b)/2);
        let s = sq(mid);
        if (s === num) return true;
        return s < num ? checkBetween(mid+1, b) : checkBetween(a, mid-1);
    };
    return checkBetween(1, 100000);
};