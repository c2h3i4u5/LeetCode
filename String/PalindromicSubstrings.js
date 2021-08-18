let countSubstrings = function (s) {
  let count = 0;
  for (i = 0; i < s.length; i++) {
    helper(s, i, i); // for odd length string
    helper(s, i, i + 1); // for evev length string
  }
  return count;

  function helper(s, low, high) {
    while (low >= 0 && high <= s.length && s[low] === s[high]) {
      count += 1;
      low -= 1;
      high += 1;
    }
  }
};

/*
There are two type of palindromes, odd and even length palindrome
Odd length: has a single character in the middle e.g. 'civic'
Even length: has two character in the middle e.g. 'noon'


input s = 'aaa', return 6, palindrome strings: a, a, a, aa, aa, aaa
input s = 'bb', return 3, palindrome strings: b, b, bb

*/
