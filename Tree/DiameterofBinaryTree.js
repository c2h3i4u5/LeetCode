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
 * @return {number}
 */
let diameterOfBinaryTree = function (root) {
  let maxPath = 0;

  let maxDepth = function (root) {
    if (root === null || root === undefined) return 0;
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    if (left + right > maxPath) maxPath = left + right;
    return 1 + Math.max(left, right);
  };

  maxDepth(root);
  return maxPath;
};
