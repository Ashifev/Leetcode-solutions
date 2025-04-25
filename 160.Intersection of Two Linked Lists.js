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
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;

    let dummy1 = headA, dummy2 = headB;

    while (dummy1 !== dummy2) {
        dummy1 = dummy1 ? dummy1.next : headB;
        dummy2 = dummy2 ? dummy2.next : headA;
    }

    return dummy1;
};