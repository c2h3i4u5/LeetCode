let findRestaurant = function (list1, list2) {
  let result = [];
  let map = new Map();

  for (let i of list1) {
    map.set(i, 1);
  }

  for (let i of list2) {
    if (map.has(i)) {
      result.push(i);
    }
  }
  return result;
};
