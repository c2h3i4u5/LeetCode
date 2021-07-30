/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let newArr = [];
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      newArr.push(nums[i]);
    } else {
      if (max < newArr.length) max = newArr.length;
      newArr = [];
    }
  }
  return max < newArr.length ? newArr.length : max;
};

findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]);

//   if (nums.length < 2 && nums[0] === 1) return 1;

//   let count = 0;
//   let max_count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 1) {
//       count++;
//     } else {
//       if (max_count < count) {
//         max_count = count;
//       }
//       count = 0;
//     }
//   }
//   if (max_count < count) return count;
//   return max_count;
