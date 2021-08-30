let findRestaurant = function (list1, list2) {
  let result = [];
  let min = Number.MAX_VALUE;
  let map = new Map();

  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i);
  }

  for (let i = 0; i < list2.length; i++) {
    if (map.has(list2[i])) {
      let sum = i + map.get(list2[i]);
      if (i + map.get(list2[i]) < min) {
        min = sum;
        result = [];
        result.push(list2[i]);
      } else if (sum === min) {
        result.push(list2[i]);
      }
    }
  }

  return result;
};
