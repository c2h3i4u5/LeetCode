let judgeSquareSum = function (c) {
  let p1 = 0;
  let p2 = c - 1;

  while (p1 < p2) {
    let sum = p1 * p1 + p2 * p2;
    if (sum === c) {
      return true;
    } else if (sum > c) {
      p2--;
    } else {
      p1++;
    }
  }
  return false;
};
