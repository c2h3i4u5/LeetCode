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
  let map = new Map();
  let resultMap = new Map();

  for (let i = 0; i < nums1.length; i++) {
    map.set(nums1[i], nums1[i]);
  }

  for (let i = 0; i < nums2.length; i++) {
    if (map.has(nums2[i])) {
      resultMap.set(nums2[i], nums2[i]);
    }
  }

  for (let [key, value] of resultMap) {
    result.push(value);
  }
  return result;
};
