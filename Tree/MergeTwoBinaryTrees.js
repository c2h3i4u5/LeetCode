/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */

let mergeTrees = function (root1, root2) {
  if (root1 === null && root2 === null) {
    return null;
  } else if (root1 === null) {
    return root2;
  } else if (root2 === null) {
    return root1;
  }

  let newRoot = new TreeNode(0);
  newRoot.val = root1.val + root2.val;

  newRoot.left = mergeTrees(root1.left, root2.left);
  newRoot.right = mergeTrees(root1.right, root2.right);

  return newRoot;
};
