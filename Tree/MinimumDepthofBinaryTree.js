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
var minDepth = function (root) {
  //Edge case
  if (root === null) return 0;

  //Process
  let left = minDepth(root.left);
  let right = minDepth(root.right);
  if (left === 0 || right === 0) return left + right + 1;

  //Recursion
  return Math.min(left, right) + 1;
};
