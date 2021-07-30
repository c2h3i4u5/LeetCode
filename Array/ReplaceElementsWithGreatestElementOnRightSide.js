/**
 *
 *  @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (array) {
  if (array.length === 1) {
    array[0] = -1;
    return array;
  }

  for (let i = 0; i < array.length; i++) {
    let max = 0;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] > max) {
        array[i] = array[j];
        max = array[j];
      }
    }
  }
  array[array.length - 1] = -1;
  return array;
};

console.log(replaceElements([17]));
console.log(replaceElements([17, 18, 5, 4, 6, 1]));
