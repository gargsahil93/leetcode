/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let map = {};
    paths.forEach(path => {
        map[path[0]] = path[1];
    });
    let s = paths[0][0];
    while (map[s] !== undefined) {
        s = map[s];
    }
    return s;
};