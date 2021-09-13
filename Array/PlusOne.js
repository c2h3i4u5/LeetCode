/**
 * You are given a large integer represented as an integer array digits, where each
 * digits[i] is the ith digit of the integer. The digits are ordered from most
 * significant to least significant in left-to-right. The large integer does not
 * contain any leading 0's.
 *
 * Increment the integer by one and return the resulting array of digits.
 */

/**
 * [9,9]
 * [9,8]
 * [8,9]
 */

let plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i] = digits[i] + 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  digits.unshift(1);
  return digits;
};
