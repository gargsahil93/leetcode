/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let set = new Set([...J]);
    return [...S].reduce((acc, ch) => {
        if (set.has(ch)) acc++;
        return acc;
    }, 0);
};