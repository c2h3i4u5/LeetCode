/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// var moveZeroes = function (nums) {
//   if (nums.length === 1) return nums;

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === 0 && nums[j] !== 0) {
//         [nums[i], nums[j]] = [nums[j], nums[i]];
//       }
//     }
//   }
//   return nums;
// };

// console.log(moveZeroes([0]));
// console.log(moveZeroes([0, 1, 0, 3, 12]));
// console.log(moveZeroes([0, 0, 1, 3, 12]));
// console.log(moveZeroes([12, 0, 1, 3, 0]));

//---------------------------------------------------------------

let moveZeroes = function (nums) {
  if (nums.length === 0) return nums;

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count] = nums[i];
      count++;
    }
  }

  for (let j = count; j < nums.length; j++) {
    nums[j] = 0;
  }
  return nums;
};

/*
must do this in-place without making a copy of the array


nums = [0,1,0,3,12] return [1,3,12,0,0]




*/
