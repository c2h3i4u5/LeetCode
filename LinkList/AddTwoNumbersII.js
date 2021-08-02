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
 *
 * 7 > 2 > 4 > 3
 *     5 > 6 > 4
 * return
 * 7 > 8 > 0 > 7
 */
var addTwoNumbers = function (l1, l2) {
  let l1stack = buildStack(l1);
  let l2stack = buildStack(l2);
  let carry = 0;
  let head = new ListNode(0);

  while (l1stack.length > 0 || l2stack.length > 0 || carry > 0) {
    let x = l1stack.length > 0 ? l1stack.pop() : 0;
    let y = l2stack.length > 0 ? l2stack.pop() : 0;
    let sum = x + y + carry;
    let node = new ListNode(sum % 10);
    carry = sum / 10;
    node.next = head.next;
    head.next = node;
  }
  return head.next;
};

let buildStack = function (temp) {
  let result = [];
  while (temp) {
    result.push(temp);
    temp = temp.next;
  }
  return result;
};
