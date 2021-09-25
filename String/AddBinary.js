/**
 * Given two binary strings a and b, return their sum as a binary string.
 */

/**
 *
 * @param {string} a
 * @param {string} b
 *
 * set a parameter call carry, which is use to 進位時
 *
 */

let addBinary = function (a, b) {
  let carry = 0;
  let aLength = a.length - 1;
  let bLength = b.length - 1;
  let result = "";

  while (aLength >= 0 && bLength >= 0) {
    if (carry === 0) {
      if (a[aLength] === "0" && b[bLength] === "0") {
        result = "0" + result;
        aLength--;
        bLength--;
      } else if (
        (a[aLength] === "1" && b[bLength] === "0") ||
        (a[aLength] === "0" && b[bLength] === "1")
      ) {
        result = "1" + result;
        aLength--;
        bLength--;
      } else {
        carry = 1;
        result = "0" + result;
        aLength--;
        bLength--;
      }
    } else {
      if (a[aLength] === "0" && b[bLength] === "0") {
        result = "1" + result;
        carry = 0;
        aLength--;
        bLength--;
      } else if (
        (a[aLength] === "1" && b[bLength] === "0") ||
        (a[aLength] === "0" && b[bLength] === "1")
      ) {
        result = "0" + result;
        carry = 1;
        aLength--;
        bLength--;
      } else {
        carry = 0;
        result = "1" + result;
        aLength--;
        bLength--;
      }
    }
  }

  while (aLength >= 0) {
    if (carry === 0) {
      if (a[aLength] === "0") {
        result = "0" + result;
        aLength--;
      } else {
        carry = 1;
        result = "1" + result;
        aLength--;
      }
    } else {
      if (a[aLength] === "0") {
        carry = 0;
        result = "1" + result;
        aLength--;
      } else {
        carry = 1;
        result = "0" + result;
        aLength--;
      }
    }
  }

  while (bLength >= 0) {
    if (carry === 0) {
      if (b[bLength] === "0") {
        result = "0" + result;
        bLength--;
      } else {
        carry = 1;
        result = "1" + result;
        bLength--;
      }
    } else {
      if (b[bLength] === "0") {
        carry = 0;
        result = "1" + result;
        bLength--;
      } else {
        carry = 1;
        result = "0" + result;
        bLength--;
      }
    }
  }

  if (carry === 1) {
    result = "1" + result;
  }
  return result;
};
