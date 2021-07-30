/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let slow = head;
  let fast = head;

  let result = head;
  if (head === null || head.next === null) {
    return null;
  }

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) break;
  }

  if (fast !== slow) {
    return null;
  }

  while (result !== slow) {
    result = result.next;
    slow = slow.next;
  }
  return slow;
};
