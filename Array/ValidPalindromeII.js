let validPalindrome = function (s) {
  //   let arr = s.split("");
  let helper = function (s, left, right) {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };

  for (let left = 0, right = s.length - 1; left < right; left++, right--) {
    if (s[left] !== s[right]) {
      return helper(s, left, right - 1) || helper(s, left + 1, right);
    }
  }
  return true;
};

/**
 * s = "aba",  return true
 * s = "abca", return true
 * s = "abc",  return false
 *
 * a palindrome structure, means forware and backware has the same value
 * using two pointer [left, right] and loop over the string
 */
