/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let slope = (coordinates[1][1]-coordinates[0][1])/(coordinates[1][0]-coordinates[0][0]);
    for (let i = 2; i< coordinates.length; i++) {
        if ((coordinates[i][1]-coordinates[i-1][1])/(coordinates[i][0] - coordinates[i-1][0]) !== slope) return false;
    }
    return true;
};
