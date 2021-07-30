/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let temp = heights.concat();
  let count = 0;

  temp = temp.sort((a, b) => {
    return a - b;
  });

  for (let index = 0; index < heights.length; index++) {
    if (heights[index] !== temp[index]) {
      count++;
    }
  }

  return count;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
console.log(heightChecker([5, 1, 2, 3, 4]));
