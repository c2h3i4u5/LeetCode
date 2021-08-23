let reverseVowels = function (s) {
  let left = 0;
  let right = s.length - 1;
  let arr = s.split("");
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  while (left < right) {
    if (vowels.indexOf(arr[left]) !== -1 && vowels.indexOf(arr[right]) !== -1) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    } else if (vowels.indexOf(arr[left]) === -1) {
      left++;
    } else if (vowels.indexOf(arr[right]) === -1) {
      right--;
    }
  }
  return arr.join("");
};

/**
 * let an array contain all vowels (a,e,i,o,u,A,E,I,O,U)
 * split string into an array
 *
 * using two pointer (left and right) to loop over the array
 * if string[left] and string[right] both are vowels swap it, and move left/right pointer
 * else if string[left] is not vowel move forward
 * else string[right] is not vowel move backward
 */
