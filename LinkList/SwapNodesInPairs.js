/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 *
 * 1 >> 2 >> 3 >> 4
 * 2 >> 1 >> 4 >> 3
 *
 */
var swapPairs = function (head) {
  let node = new ListNode(0);
  node.next = head;
  let prev = node;

  while (head && head.next) {
    let n1 = head;
    let n2 = head.next;

    prev.next = n2;
    n1.next = n2.next;
    n2.next = n1;

    prev = n1;
    head = n1.next;
  }

  return node.next;
};
