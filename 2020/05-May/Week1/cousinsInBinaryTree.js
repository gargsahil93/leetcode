/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let cousins = [{
        parent : undefined,
        el : root
    }], cousinLen = cousins.length;
    while (cousinLen > 0) {
        let children = [];
        for (let i = 0; i < cousinLen; i++) {
            let c = cousins[i];
            let el = c.el;
            if (el.val === x || el.val === y) {
                for (let j = i+1; j < cousinLen; j++) {
                    if (cousins[j].el.val === x || cousins[j].el.val === y) {
                        return c.parent !== cousins[j].parent;
                    }
                }
                return false;
            }
            if (el.left) {
                children.push({
                    parent : el,
                    el : el.left
                });
            }
            if (el.right) {
                children.push({
                    parent : el,
                    el : el.right
                });
            }
        }
        cousins = children;
        cousinLen = cousins.length;
    }
    return false;
};
