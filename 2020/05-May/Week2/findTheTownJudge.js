/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    let trusts = Array(N).fill(1), reverseTrustMap = Array(N).fill(0);
    trust.forEach(t => {
        delete trusts[t[0]-1];
        reverseTrustMap[t[1]-1]++;
    });
    let x = trusts.findIndex((p, i) => {
        return p && reverseTrustMap[i] === N-1;
    });
    return x === -1 ? -1 : x+1;
};