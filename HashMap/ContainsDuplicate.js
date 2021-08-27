/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return true;
    } else {
      map.set(nums[i], i);
    }
  }
  return false;
};

/**
 * Given an integer nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 *
 * using Hash Map, loop over the given array and check if it is in Hash map then return true
 * if it not then add the value to hash map
 */

let containsDuplicate = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return true;
    } else {
      map.set(nums[i], i);
    }
  }
  return false;
};
