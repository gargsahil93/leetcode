/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let findBad = (i, j) => {
            if (i === j) return i;
            let mid = Math.floor((i+j)/2);
            return isBadVersion(mid) === true ? findBad(i, mid) : findBad(mid+1, j);
        }
        return findBad(1, n);
    };
};