/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let p1 = 0;
  let p2 = nums.length - 1;

  while (p1 !== p2) {
    if (nums[p1] % 2 === 1) {
      [nums[p1], nums[p2]] = [nums[p2], nums[p1]];
      p2--;
    } else {
      p1++;
    }
  }
  return nums;
};

console.log(sortArrayByParity([0, 0, 0]));
console.log(sortArrayByParity([2, 4, 2, 4]));
console.log(sortArrayByParity([3, 1, 2, 4]));
