/**
 * write an algorithm to determine if a number n is happy.
 */

let isHappy = function (n) {
  let str = n.toString().split("");
  let map = new Map();

  while (1) {
    let sum = 0;
    for (let i of str) {
      sum = sum + i * i;
    }
    if (map.has(sum)) {
      return false;
    } else if (sum === 1) {
      return true;
    } else {
      map.set(sum, 1);
    }

    str = sum.toString().split("");
  }
};
