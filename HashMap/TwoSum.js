/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
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
