/**
 * Given a non-empty array of integers nums, every element appears twice except for one.
 * Find that single one. You must implement a solution with a linear runtime complexity
 * and use only constant extra space.
 *
 *
 * using hash map, first i need loop over the nums to store value into hash map
 * and then loop over again to check which value appear just once
 * [key, value] => [number, appear time]
 */

let singleNumber = function (nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.get(nums[i]) + 1 || 1);
  }

  for (let j = 0; j < nums.length; j++) {
    if (map.get(nums[j]) === 1) {
      return nums[j];
    }
  }
};
