/** not finish
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (k === 0) {
    return nums;
  }
  let pop_num = 0;
  for (let i = 0; i < k; i++) {
    pop_num = nums.pop();
    nums.unshift(pop_num);
  }

  return nums;
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);
