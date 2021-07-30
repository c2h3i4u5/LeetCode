/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let pointer_1 = 0;
  let pointer_2 = 1;

  if (nums.length < 2) return nums.length;

  for (let i = 0; i < nums.length; i++) {
    if (nums[pointer_1] === nums[pointer_2]) {
      pointer_2++;
    } else {
      pointer_1++;
      nums[pointer_1] = nums[pointer_2];
      pointer_2++;
    }
  }
  return pointer_1;
  //   console.log(pointer_1 );
};

console.log(removeDuplicates([1, 1, 2, 2, 2, 3, 3]));
