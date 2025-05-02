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
var swapPairs = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let curr = dummy;

    while (curr.next && curr.next.next) {
        let first = curr.next;
        let second = curr.next.next;

        curr.next = second;
        first.next = second.next;
        second.next = first;

        curr = curr.next.next;
    }

    return dummy.next;
};