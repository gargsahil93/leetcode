/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let color = image[sr][sc];
    let fill = (x, y) => {
        if (x >= 0 && y >= 0 && x< image.length && image[0].length && image[x][y] === color) {
            image[x][y] = newColor;
            fill(x-1, y);
            fill(x+1, y);
            fill(x, y-1);
            fill(x, y+1);
        }
    };
    if (color !== newColor) fill(sr, sc);
    return image;
};
