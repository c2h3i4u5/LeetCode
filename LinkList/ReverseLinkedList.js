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
 */
var reverseList = function (head) {
  if (head === null) {
    return null;
  }
  let prev = null;
  let temp;
  while (head !== null) {
    temp = head.next;
    head.next = prev;

    prev = head; //update prev
    head = temp; //update head
  }
  return prev;
};
