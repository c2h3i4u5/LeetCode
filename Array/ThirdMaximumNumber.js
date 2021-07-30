/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let first = Number.NEGATIVE_INFINITY;
  let second = Number.NEGATIVE_INFINITY;
  let third = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first) {
      third = second;
      second = first;
      first = nums[i];
    } else if (nums[i] > second && nums[i] < first) {
      third = second;
      second = nums[i];
    } else if (nums[i] > third && nums[i] < second) {
      third = nums[i];
    }
  }
  return third === Number.NEGATIVE_INFINITY || third === second ? first : third;
};

console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([1, 2]));
console.log(thirdMax([1, 2, 3, 4, 3, 6, 7]));
console.log(thirdMax([1, 2, 2, 5, 3, 5]));
