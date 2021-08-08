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
 * @param {number} targetSum
 * @return {number}
 */
let pathSum = function (root, targetSum) {
  //Edge case
  if (root === null) return 0;

  //Process
  let dfs = function (root, sum) {
    count = 0;
    //Edge case
    if (root === null) return 0;
    if (root.val === sum) count++;

    // Process and Recursion
    count += dfs(root.left, sum - root.val);
    count += dfs(root.right, sum - root.val);

    return count;
  };

  //Recursion
  return dfs(root.sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
};
