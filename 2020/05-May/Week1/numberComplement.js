/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let findMid = (i, j) => {
        if (i === j) return i;
        let mid = Math.floor((i+j)/2);
        return num < Math.pow(2, mid) ? findMid(i, mid) : findMid(mid+1, j);
    };
    return num ^ (Math.pow(2, findMid(1, 32)) - 1);
};