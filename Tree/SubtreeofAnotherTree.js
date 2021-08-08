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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
let isSubtree = function (root, subRoot) {
  let helper = function (root, subRoot) {
    //Edge case
    if (root === null && subRoot === null) return true;
    if (root === null || subRoot === null) return false;
    if (root.val !== subRoot.val) return false;

    //Process and Recursion
    return helper(root.left, subRoot.left) && helper(root.right, subRoot.right);
  };

  //Edge case
  if (root === null) return false;

  //Process and Recusion
  return (
    helper(root, subRoot) ||
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  );
};

/*





*/
