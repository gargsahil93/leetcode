/**
 * @param {number} num
 * @return {number}
 */
let map = {};
let getPow = (n) => {
    if(map[n]) return map[n];
    map[n] = Math.pow(2, n);
    return map[n];
};

var findComplement = function(num) {
    let findMid = (i, j) => {
        if (i === j) return i;
        let mid = Math.floor((i+j)/2);
        return num < getPow(mid) ? findMid(i, mid) : findMid(mid+1, j);
    };
    return num ^ (getPow(findMid(1, 32)) - 1);
};