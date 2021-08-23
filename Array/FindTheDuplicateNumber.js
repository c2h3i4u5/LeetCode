let findDuplicate = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.get(nums[i]) + 1 || 1);
    if (map.get(nums[i]) === 2) {
      return nums[i];
    }
  }
};

/**
 *
 * nums = [1,3,4,2,2] return 2
 * nums = [3,1,3,4,2] return 3
 * nums = [1,1] return 1
 *
 * 1 <= n <= 10^5
 * nums.length = n + 1 , means the length of nums is at least 2
 *
 * set a Hash map, loop over nums
 * if key has value 2, return the key
 *
 */
