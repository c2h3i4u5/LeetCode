/**
 * @param {number[]} arr
 * @return {boolean}
 * using Hash table (in javascript "Map()" function)
 */
var checkIfExist = function (arr) {
  const hashTable = {};

  for (let i = 0; i < arr.length; i++) {
    const currValue = arr[i];

    if (hashTable[currValue] !== undefined) {
      return true;
    }
    hashTable[currValue / 2] = currValue;
    hashTable[currValue * 2] = currValue;
  }
  console.log(hashTable);
  return false;
};

checkIfExist([-2, 0, 10, -19, 4, 6, -8]);
