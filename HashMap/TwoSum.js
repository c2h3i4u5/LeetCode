/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  //using Hash Map
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      let result = [];
      result = [map.get(target - nums[i]), i];
      return result;
    } else {
      map.set(nums[i], i);
    }
  }
};

/*
[2,7,11,15] target 9, return[0,1]

[3,2,4] target 6, return[1,2]

*/

/**
 * Leetcode 167.
 * Two Sum II - Input array is sorted
 */

let twoSum = function (nums, target) {
  //using two pointer
  let p1 = 0;
  let p2 = nums.length - 1;
  let result = [];
  while (p1 < p2) {
    let sum = nums[p1] + nums[p2];

    if (sum === target) {
      result = [p1 + 1, p2 + 1];
      return result;
    } else if (sum > target) {
      p2--;
    } else {
      p1++;
    }
  }
  return null;
};
