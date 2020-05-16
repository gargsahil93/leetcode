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
var oddEvenList = function(head) {
    let odd = head, even, isNextOdd = false, oddHead = head, evenHead;
    while(head && head.next) {
        head = head.next;
        if (isNextOdd) {
            odd.next = head;
            odd = odd.next;
        } else {
            if (!even) even = evenHead = head;
            else {
                even.next = head;
                even = even.next;
            }
        }
        isNextOdd = !isNextOdd;
    }
    if (odd) odd.next = evenHead;
    if (even) even.next = null;
    return oddHead;
};