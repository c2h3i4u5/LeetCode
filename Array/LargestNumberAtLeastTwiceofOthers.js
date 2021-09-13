/**
 * You are given an integer array nums where the largest integer is unique.
 * Determine whether the largest element in the array is at least twice as much as every
 * other number is the array. If it is, return the index of the larget element,
 * or return -1 otherwise
 */

let dominantIndex = function (nums) {
  let max = 0;
  let indexMax = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      indexMax = i;
    }
  }

  for (let k = 0; k < nums.length; k++) {
    if (nums[k] !== max && nums[k] * 2 <= max) {
      count++;
    }
  }

  if (count === nums.length - 1) {
    return indexMax;
  } else {
    return -1;
  }
};
