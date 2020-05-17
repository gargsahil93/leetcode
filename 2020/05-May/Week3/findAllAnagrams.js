/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let sLen = s.length, pLen = p.length;
    if (sLen < pLen) return [];
    let map = {}, nZero=0, eZero=0;
    [...p].forEach(ch => {
        if (map[ch] === undefined) map[ch] = 1, nZero++;
        else map[ch]++;
    });
    for (let i = 0; i < p.length; i++) {
        let ch = s[i];
        if (map[ch] !== undefined) {
            map[ch]--;
            if (map[ch] === 0) eZero++;
            else if (map[ch] === -1) eZero--;
        }
    }
    let res = [];
    if (eZero === nZero) res.push(0);
    for (let i = pLen; i < sLen; i++) {
        let ch = s[i];
        let rCh = s[i-pLen];
        if (ch !== rCh) {
            if (map[ch] !== undefined) {
                map[ch]--;
                if (map[ch] === 0) eZero++;
                else if (map[ch] === -1) eZero--;
            }
            if (map[rCh] !== undefined) {
                map[rCh]++;
                if (map[rCh] === 0) eZero++;
                else if (map[rCh] === 1) eZero--;
            }
        }

        if (eZero === nZero) res.push(i-p.length+1);
    }
    return res;
};