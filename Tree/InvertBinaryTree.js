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
 * @return {TreeNode}
 */
let invertTree = function (root) {
  //Edge case
  if (root === null) return 0;

  //Process
  let left = root.left;

  //Recursion
  root.left = invertTree(root.right);
  root.right = invertTree(left);

  return root;
};
