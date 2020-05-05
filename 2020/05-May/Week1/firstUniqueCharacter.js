/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = Array(26), index;
    [...s].forEach((ch, i) => {
        let code = ch.charCodeAt() - 97;
        map[code] = map[code] === undefined ? i : -1;
    });
    map.forEach(i => {
        if (i !== undefined && i !== -1 && (index === undefined || i < index)) index = i;
    });
    return index === undefined ? -1 : index ;
};
