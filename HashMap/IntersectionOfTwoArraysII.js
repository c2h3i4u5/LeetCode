/**
 * Given two integer arrays nums1 and nums2, return an array ot their intersection.
 * Each element in the result must appear as many times as it shows in both arrays
 * and you may return the result in any order.
 */

let intersect = function (nums1, nums2) {
  let map1 = new Map();
  let map2 = new Map();
  let resultMap = new Map();
  let result = [];
  for (let i of nums1) {
    map1.set(i, map1.get(i) + 1 || 1);
  }
  for (let i of nums2) {
    map2.set(i, map2.get(i) + 1 || 1);
  }

  for (let i of nums2) {
    if (map1.has(i)) {
      if (map1.get(i) > map2.get(i)) {
        resultMap.set(i, map2.get(i));
      } else {
        resultMap.set(i, map1.get(i));
      }
    }
  }

  resultMap.forEach((value, key) => {
    let count = value;
    for (count; count > 0; count--) {
      result.push(key);
    }
  });

  return result;
};
