/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (head === null) return false;
  let node = new ListNode(0);
  node.next = head;
  let slow = node;
  let fast = head;

  while (n > 0) {
    fast = fast.next;
    n--;
  }

  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  if (slow.next === null) {
    slow.next = null;
  } else {
    slow.next = slow.next.next;
  }

  return node.next;
};
