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
let longestUnivaluePath = function (root) {
  let dfs = function (root) {
    //Edge case
    if (root === null) return 0;

    //Process
    let left = dfs(root.left);
    let right = dfs(root.right);

    let leftPath =
      root.left !== null && root.left.val === root.val ? left + 1 : 0;
    let rightPath =
      root.right !== null && root.right.val === root.val ? right + 1 : 0;

    path = Math.max(path, leftPath + rightPath);

    //Recursion
    return Math.max(leftPath, rightPath);
  };

  let path = 0;
  dfs(root);
  return path;
};
