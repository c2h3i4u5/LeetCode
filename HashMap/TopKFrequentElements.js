/**
 * Given an integer array nums and an integer k, return the k most frequent elements.
 * You may return the answer in any order.
 */

let topKFrequent = function (nums, k) {
  //wrong answer
  let result = [];
  let first = 0;
  let second = 0;
  let map = new Map();

  for (let i of nums) {
    map.set(i, map.get(i) + 1 || 1);

    if (map.has(i)) {
      if (map.get(i) > first) {
        second = first;
        first = map.get(i);
      }
    }
  }
  result.push(first);
  result.push(second);

  return result;
};
