/**
 * Given a string s, find the first non-repeating character in it
 * and return its index. If it does not exist, return -1
 */

let firstUniqChar = function (s) {
  let map = new Map();

  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.get(s[i]) + 1 || 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) return i;
  }

  return -1;
};
