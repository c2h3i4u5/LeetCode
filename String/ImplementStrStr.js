/**
 * Implement strStr().
 * Return the index of the first occurence of needle in haystack, or -1
 * if needle is not part of haystack.
 *
 * Clarification:
 * What should we return when needle is an empty string?
 * This is a great question to ask during an interview.
 * For the purpose of this problem, we will return 0 when needle is an
 * empty string. This is consistent to C's strstr() and Java's indexOf().
 */

/**
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {nums}
 */

let strStr = function (haystack, needle) {
  let needleLength = needle.length - 1;
  let haystackLength = haystack.length - 1;
  let haystackChar = haystack.split("");
  let needleChar = needle.split("");
  let result = 0;

  if (haystack.length === 0 && needle.length === 0) return 0;
  if (needle.length === 0) return 0;

  for (let i = 0; i <= haystackLength; i++) {
    for (let j = 0; j <= needleLength; j++) {
      if (haystackChar[i + j] == needleChar[j]) {
        result++;
      }
      if (result === needle.length) {
        return i;
      }
    }
    result = 0;
  }
  return -1;
};

strStr("hello", "ll");
