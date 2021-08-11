/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let n = temperatures.length;
  let stack = [];
  let result = [];

  result.length = n;
  result.fill(0);

  for (let curIndex = 0; curIndex < n; curIndex++) {
    while (
      stack.length > 0 &&
      temperatures[curIndex] > temperatures[stack[stack.length - 1]]
    ) {
      let resultIndex = stack.pop();
      result[resultIndex] = curIndex - resultIndex;
    }
    stack.push(curIndex);
  }

  return result;
};
