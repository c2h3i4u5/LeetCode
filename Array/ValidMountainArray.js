/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) {
    return false;
  }
  let first = 0;
  let last = arr.length - 1;

  while (arr[first] < arr[first + 1]) {
    first++;
  }
  while (arr[last] < arr[last - 1]) {
    last--;
  }

  if (first === 0 || last === arr.length - 1) {
    return false;
  }
  return first === last ? true : false;
};
console.log(validMountainArray([0, 3, 2, 1]));
console.log(validMountainArray([0, 1, 2, 3]));
console.log(validMountainArray([3, 2, 1, 0]));
