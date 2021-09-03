/**
 * Given an array of strings strs, group the anagrams together.
 * You can return the answer in any order.
 */

let groupAnagrams = function (strings) {
  let map = new Map();
  let result = [];
  for (current of strings) {
    let sortedStr = current.split("").sort().join("");

    if (!map.has(sortedStr)) {
      map.set(sortedStr, []);
    }
    map.get(sortedStr).push(current);
  }

  map.forEach((value, key) => {
    result.push(value);
  });
  return result;
};
