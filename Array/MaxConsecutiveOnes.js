var findMaxConsecutiveOnes = function (nums) {
  let newArr = [];
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      newArr.push(nums[i]);
    } else {
      if (max < newArr.length) max = newArr.length;
      newArr = [];
    }
  }
  return max < newArr.length ? newArr.length : max;
};

findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]);

//   if (nums.length < 2 && nums[0] === 1) return 1;

//   let count = 0;
//   let max_count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 1) {
//       count++;
//     } else {
//       if (max_count < count) {
//         max_count = count;
//       }
//       count = 0;
//     }
//   }
//   if (max_count < count) return count;
//   return max_count;

let findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      count = 0;
    }
    max = Math.max(max, count);
  }
  return max;
};

/*
find the maximun number of consecutive of 1

nums = [1,1,0,1,1,1] return 3

when nums[i] = 1, count++
when nums[i] = 0, compare max and count, and reset count

*/
