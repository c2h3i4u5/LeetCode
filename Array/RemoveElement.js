/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let removeElement = function (nums, val) {
  let first = 0;
  let last = nums.length - 1;

  while (first <= last) {
    if (nums[first] === val) {
      [nums[first], nums[last]] = [nums[last], nums[first]];
      last--;
    } else {
      first++;
    }
  }
  return last + 1;
};

removeElement([3, 2, 2, 3], 3);
