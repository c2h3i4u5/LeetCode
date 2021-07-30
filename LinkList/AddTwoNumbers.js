/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let sum = 0;
  let carrier = 0;
  let dummy = new ListNode(0);
  let result = dummy;

  while (l1 !== null || l2 !== null || carrier > 0) {
    sum = 0;

    if (l1 !== null) {
      sum = sum + l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum = sum + l2.val;
      l2 = l2.next;
    }
    sum = sum + carrier;

    dummy.next = new ListNode(sum % 10);
    carrier = Math.floor(sum / 10);
    dummy = dummy.next;
  }

  return result.next;
};
