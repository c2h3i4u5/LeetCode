/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  while (m - 1 >= 0 && n - 1 >= 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[m + n - 1] = nums1[m - 1];
      m--;
    } else {
      nums1[m + n - 1] = nums2[n - 1];
      n--;
    }
  }
  while (n - 1 >= 0) {
    nums1[m + n - 1] = nums2[n - 1];
    n--;
  }

  console.log(nums1);
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

// let temp = 0;
// let result = [];
// let i = 0,
//   j = 0;
// while (i < m && j < n) {
//   if (nums1[i] < nums2[j]) {
//     result[temp] = nums1[i];
//     temp++;
//     i++;
//   } else {
//     result[temp] = nums2[j];
//     temp++;
//     j++;
//   }
// }

// while (i < m) {
//   result[temp] = nums1[i];
//   temp++;
//   i++;
// }
// while (j < n) {
//   result[temp] = nums2[j];
//   temp++;
//   j++;
// }
