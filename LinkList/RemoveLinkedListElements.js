var removeElements = function (head, val) {
  if (!head) return null;

  let prev;
  let temp = new ListNode(0);

  prev = temp;

  temp.next = head;

  while (head) {
    if (head !== val) {
      prev = head;
    } else {
      prev.next = head.next;
    }
    head = head.next;
  }
  return temp.next;
};
