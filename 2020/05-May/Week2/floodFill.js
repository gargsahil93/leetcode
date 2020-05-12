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
        image[x][y] = newColor;
        if (x > 0 && image[x-1][y] === color) fill(x-1, y);
        if (x < image.length-1 && image[x+1][y] === color) fill(x+1, y);
        if (image[x][y-1] === color) fill(x, y-1);
        if (image[x][y+1] === color) fill(x, y+1);
    };
    if (color !== newColor) fill(sr, sc);
    return image;
};
