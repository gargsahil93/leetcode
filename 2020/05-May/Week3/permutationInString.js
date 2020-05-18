/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var checkInclusion = function(p, s) {
    let pLen = p.length;
    if (s.length < pLen) return [];
    let map = {}, nZero=0;
    [...p].forEach(ch => {
        if (map[ch] === undefined) map[ch] = 1, nZero++;
        else map[ch]++;
    });
    for (let i = 0; i < p.length; i++) {
        let ch = s[i];
        if (map[ch] !== undefined) {
            map[ch]--;
            if (map[ch] === 0) nZero--;
            else if (map[ch] === -1) nZero++;
        }
    }
    let res = [];
    if (nZero === 0) return true;
    for (let i = pLen; i < s.length; i++) {
        let ch = s[i];
        let rCh = s[i-pLen];
        if (ch !== rCh) {
            if (map[ch] !== undefined) {
                map[ch]--;
                if (map[ch] === 0) nZero--;
                else if (map[ch] === -1) nZero++;
            }
            if (map[rCh] !== undefined) {
                map[rCh]++;
                if (map[rCh] === 0) nZero--;
                else if (map[rCh] === 1) nZero++;
            }
        }

        if (nZero === 0) return true;
    }
    return false;
};