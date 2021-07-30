/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let count = 0;
  let even_count = 0;

  for (let i = 0; i < nums.length; i++) {
    count = 0;
    while (nums[i]) {
      nums[i] = Math.floor(nums[i] / 10);
      count++;
    }
    if (!(count % 2)) {
      even_count++;
    }
  }
  console.log(even_count);
  return even_count;
};

findNumbers([12, 345, 2, 6, 7896]);
