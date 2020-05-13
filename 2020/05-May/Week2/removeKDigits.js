/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let index = 0;
    while (k-- > 0) {
        while (num[index] <= num[index+1] && index < num.length-1) index++;
        num = num.slice(0, index) + num.slice(index+1);
        if (index) {
            index--;
        }
    }
    if (num[0] === '0') {
        let i = 0;
        while(num[i+1] === '0') i++;
        num = num.slice(i+1);
    }
    return num || '0';
};
