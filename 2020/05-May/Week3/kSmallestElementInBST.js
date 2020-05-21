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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    
    let cont = true, res;
    let navigate = (root) => {
        if (!root) return;
        navigate(root.left);
        if (cont) {
            k--;
            if (k === 0) cont = false, res = root.val;
            else navigate(root.right);
        }   
    }
    navigate(root);
    return res;
};