/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let ar = Array(26).fill(0);
    [...magazine].forEach(ch => {
        ar[ch.charCodeAt(0)-97]++;
    });
    for (let i = 0; i < ransomNote.length; i++) {
        let ch = ransomNote[i].charCodeAt(0)-97;
        ar[ch]--;
        if (ar[ch] === -1) return false;
    }
    return true;
};