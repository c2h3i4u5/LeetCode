let isIsomorphic = function (s, t) {
  let map_s_t = new Map();
  let map_t_s = new Map();
  for (i = 0; i < s.length; i++) {
    if (!map_s_t.get(s[i]) && !map_t_s.get(t[i])) {
      map_s_t.set(s[i], t[i]);
      map_t_s.set(t[i], s[i]);
    }

    if (map_s_t.get(s[i]) !== t[i] || map_t_s.get(t[i]) !== s[i]) {
      return false;
    }
  }
  return true;
};

/*

badc and baba, return false
paper and title, return true

** 需要考慮兩種情況，s不等於t，t不等於s 

1. loop over string1, if is not in a map, put it into map 
(map (key, value) =>(string1, string2))

2. if map already has the key, check the value is equal to string2
if not return false


*/
