let findLHS = function (nums) {
  let map = new Map();
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    // collect all number to a hashmap
    map.set(nums[i], map.get(nums[i]) + 1 || 1);
  }

  for (let [key, value] of map) {
    if (map.get(key - 1)) {
      result = Math.max(result, value + map.get(key - 1));
    }
  }
  return result;
};
