/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
    let x = [], next;
    arr.forEach(a => {
        if (next === undefined) next = a;
        else next = next^a;
        x.push(next);
    });
    let count = 0;
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            for (let k = j; k < arr.length; k++) {
                if ((x[j-1]^x[i-1]) === (x[k]^x[j-1])) count++;
            }
        }
    }
    return count;
};