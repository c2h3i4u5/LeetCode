/**
 * You're given stings jewels representing the type of stones that are
 * jewels, and stones representing the stones you have. Each character
 * in stones is a type of stone you have. You want to know how many of
 * the stones you have are also jewels.
 */
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

let numJewelsInStones = function (jewels, stones) {
  let map = new Map();
  let result = 0;

  for (let i of jewels) {
    map.set(i, true);
  }

  for (let i of stones) {
    if (map.has(i)) {
      result++;
    }
  }

  return result;
};
