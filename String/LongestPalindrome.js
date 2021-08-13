let longestPalindrome = function (s) {
  let map = new Map();
  let result = 0;
  for (i = 0; i < s.length; i++) {
    map.set(s[i], map.get(s[i]) + 1 || 1);

    if (map.get(s[i]) % 2 === 0) {
      result += 2;
    }
  }
  return s.length > result ? result + 1 : result;
};

/*
Ex1 



*/
