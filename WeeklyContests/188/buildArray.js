/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let res = [], lastEl = 0;
    target.forEach(el => {
        if (el !== lastEl+1) {
            for (let i = lastEl+1; i < el; i++) {
                res.push('Push', 'Pop');
            }
        }
        res.push('Push');
        lastEl = el;
    });
    return res;
};