/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

var copyRandomList = function (head) {
  let findRandomIndex = function (temp) {
    let random = temp.random;
    let index = 0;
    while (temp) {
      if (temp === random) {
        return index;
      }
      temp = temp.next;
      index++;
    }
    return null;
  };
  if (head === null) return null;
  let result = new Node(0);
  result.next = head;
  let dummy;
  let random_index;
  while (head) {
    dummy = head;
    random_index = findRandomIndex(dummy);
    dummy.random = random_index;
    head = head.next;
  }

  return result.next;
};
