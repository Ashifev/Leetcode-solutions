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
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);  // Dummy node to build the result list
    let current = dummy;
    let carry = 0;
    
    while (l1 !== null || l2 !== null || carry > 0) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);  // Carry for next addition
        
        current.next = new ListNode(sum % 10);  // Create new node
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    
    return dummy.next;  // Return the next node after dummy
};