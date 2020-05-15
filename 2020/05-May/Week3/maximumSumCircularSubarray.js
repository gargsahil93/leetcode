/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function(A) {
    let max, min, sum=0, prevMax, prevMin;
    [...A].forEach(el => {
        if (max === undefined) {
            max = prevMax = el;
            min = prevMin = el;
        } else {
            prevMax = Math.max(el, prevMax + el);
            prevMin = Math.min(el, prevMin + el);
            if (max < prevMax) max = prevMax;
            if (min > prevMin) min = prevMin;
        }
        sum+=el;
    });
    return min === sum ? max : Math.max(max, sum-min);
};