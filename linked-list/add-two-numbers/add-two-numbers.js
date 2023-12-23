/*
Definition for singly-linked list.

function ListNode(val) {
    this.val = val
    this.next = null
}

*/

const addTwoNumbers = (l1, l2) => {
    
    let result = new ListNode(0)
    let currentNode = result
    let carryOver = 0
    while(l1 !== null || l2 !== null) {
        const v1 = l1?.val || 0
        const v2 = l2?.val || 0
        let sum = v1 + v2 + carryOver
        carryOver = Math.floor(sum / 10)
        sum = sum % 10
        currentNode.next = new ListNode(sum)
        curentNode = currentNode.next    
        l1 = l1?.next
        l2 = l2?.next
    }

    if (carryOver > 0) {
        currentNode.next = new ListNode(carryOver)
    }
    return result.next
}