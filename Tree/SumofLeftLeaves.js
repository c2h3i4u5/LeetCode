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
let sumOfLeftLeaves = function (root) {
  let isLeaf = function (node) {
    if (node === null) return false;
    return node.left === null && node.right === null;
  };

  //Edge case
  if (root === null) return 0;

  //Process
  if (isLeaf(root.left)) return root.left.val + sumOfLeftLeaves(root.right);

  //Recursion
  return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};
