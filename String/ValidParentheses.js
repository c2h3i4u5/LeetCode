/**
 * @param {string} s
 * @return {boolean}
 */

let isValid = function (s) {
  let stack = [];
  console.log(s);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(")");
    } else if (s[i] === "[") {
      stack.push("]");
    } else if (s[i] === "{") {
      stack.push("}");
    } else {
      if (s[i] !== stack.pop()) return false;
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};

console.log("5278");

// var isValid = function (s) {
//   if (s.length % 2 !== 0) return false;
//   let stack = [];

//   for (temp of s) {
//     if (temp === "(" || temp === "[" || temp === "{") stack.push(temp);
//     if (stack.length === 0) return false;

//     if (temp === ")") {
//       if (stack[stack.length - 1] === "(") {
//         stack.pop();
//       }
//     } else if (temp === "]") {
//       if (stack[stack.length - 1] === "[") {
//         stack.pop();
//       }
//     } else {
//       if (stack[stack.length - 1] === "{") {
//         stack.pop();
//       }
//     }
//   }
//   if (stack.length === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
