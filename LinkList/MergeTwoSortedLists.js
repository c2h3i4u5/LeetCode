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
var mergeTwoLists = function (l1, l2) {
  let result = new ListNode(0);
  let dummy;
  dummy = result;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      dummy.next = l1;
      l1 = l1.next;
    } else {
      dummy.next = l2;
      l2 = l2.next;
    }
    dummy = dummy.next;
  }
  while (l1) {
    dummy.next = l1;
    dummy = dummy.next;
    l1 = l1.next;
  }
  while (l2) {
    dummy.next = l2;
    dummy = dummy.next;
    l2 = l2.next;
  }

  return result;
};
