let isAnagram = function (s1, s2) {
  if (s1.length !== s2.length) return false;

  let map1 = new Map();
  let map2 = new Map();

  for (let i in s1) {
    map1.set(s1[i], map1.get(s1[i]) + 1 || 1);
    map2.set(s2[i], map2.get(s2[i]) + 1 || 1);
  }

  for (let i in s1) {
    if (!(map1.get(s1[i]) === map2.get(s1[i]))) return false;
  }

  return true;
};
