var preorderTraversal = function (root) {
  let data = [];

  function traverse(root) {
    data.push(root.val);
    if (root.left) return traverse(root.left);
    if (root.right) return traverse(root.right);
  }

  traverse(root);
  return data;
};
