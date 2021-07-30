/** not finish
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let result = [];
  let temp = [];
  let connt = 0;

  for (let i = 0; i < nums.length; i++) {
    result[nums[i]] = nums[i];
  }

  return result;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
