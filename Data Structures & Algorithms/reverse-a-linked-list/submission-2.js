/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let curr = head;

        while (curr) { // while we're on a node. 
            let temp = curr.next; // store next node in temp
            curr.next = prev; // set next node point to curr node - 1
            prev = curr; // prev point to curr node
            curr = temp; // move curr pointer to next node
        }

        return prev; // return new head of linked list
    }
}
