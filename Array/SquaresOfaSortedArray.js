/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let result = [];
  let min = 0;
  let max = nums.length - 1;

  for (let temp = nums.length - 1; temp >= 0; temp--) {
    if (Math.abs(nums[min]) > Math.abs(nums[max])) {
      result[temp] = nums[min] * nums[min];
      min++;
    } else {
      result[temp] = nums[max] * nums[max];
      max--;
    }
  }
  return result;
};

sortedSquares([-4, -1, 0, 3, 10]);
