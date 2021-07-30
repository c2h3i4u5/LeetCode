/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function (head, insertVal) {
  if (head === null) {
    let temp = new Node(insertVal);
    temp.next = temp;
    return temp;
  }

  let pre = head;
  let curr = head.next;

  while (true) {
    if (pre.val <= insertVal && insertVal <= curr.val) {
      break;
    }

    if (pre.val > curr.val && (insertVal > pre.val || insertVal < curr.val)) {
      break;
    }
    pre = curr;
    curr = curr.next;

    if (pre === head) {
      break;
    }
  }

  let dummy = new Node(insertVal);
  pre.next = dummy;
  dummy.next = curr;
  return head;
};
