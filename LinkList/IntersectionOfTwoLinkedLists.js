/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) {
    return fasle;
  }

  let listA = headA;
  let listB = headB;
  let m = 1;
  let n = 1;
  let first = 0;

  while (listA !== null) {
    listA = listA.next;
    m++;
  }
  while (listB !== null) {
    listB = listB.next;
    n++;
  }
  if (m > n) {
    first = m - n;
    while (first > 0) {
      headA = headA.next;
      first--;
    }
  } else {
    first = n - m;
    while (first > 0) {
      headB = headB.next;
      first--;
    }
  }

  while (headA !== null) {
    if (headA === headB) {
      return headA;
    }
    headA = headA.next;
    headB = headB.next;
  }
  return null;
};
