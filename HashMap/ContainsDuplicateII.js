/**
 * Given an integer array nums and an integer k, return true if there are two
 * distinct indices i and j in the array such that nums[i] = nums[j]
 * and abs(i-j) <= k
 */

let containsNearbyDuplicate = function (nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (i - map.get(nums[i]) <= k) {
      return true;
    }
    map.set(nums[i], i);
  }
  return false;
};
