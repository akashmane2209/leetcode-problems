// https://leetcode.com/problems/delete-node-in-a-linked-list/

/*

Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.

It is guaranteed that the node to be deleted is not a tail node in the list.

Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

*/

/**
 * Definition for singly-linked list.

 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
let list;
let head = null;
function createList(values = []) {
    values.forEach(v => {
        const node = ListNode(v);
        if (head === null) {
            head = node;
        } else {
            let tempHead = head;
            while (tempHead.next !== null) {
                tempHead = tempHead.next;
            }
            tempHead.next = node;
        }
    })
}

function ListNode(val) {
    return {
        val: val,
        next: null
    }
}
var deleteNode = function (node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

createList([4, 5, 1, 9]);
deleteNode( {val: 5, next: { val: 1, next: { val: 9, next: null }}} )