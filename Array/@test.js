/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length < 2) {
    return nums.length;
  }
  let p1 = 0;
  let p2 = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[p1] === nums[p2]) {
      p2++;
    } else {
      p1++;
      nums[p1] = nums[p2];
      p2++;
    }
  }
  return p1;
};

console.log(removeDuplicates([0, 0, 1, 1, 1]));
console.log(removeDuplicates([0, 1, 1, 1, 1, 2, 2, 3, 3, 4]));
