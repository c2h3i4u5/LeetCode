/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection.
 * Each element in the result must be unique and you may return the result in any order
 *
 * using hash map, loop over two arrays and add into two hash map
 * then check nums1 or nums2 array, if there is the same value in another hash map
 * if yes put it into a result array
 */

let intersection = function (nums1, nums2) {
  let result = [];
  let map1 = new Map();
  let map2 = new Map();
  for (let i = 0; i < nums1.length; i++) {
    map1.set(nums1[i], map1.get(nums1[i]) + 1 || 1);
  }
  for (let j = 0; j < nums2.length; j++) {
    map2.set(nums2[j], map2.get(nums2[j]) + 1 || 1);
  }

  for (let k = 0; k < nums2.length; k++) {
    if (map1.has(nums2[k])) {
      result.push(nums2[k]);
    }
  }
  return result;
};
