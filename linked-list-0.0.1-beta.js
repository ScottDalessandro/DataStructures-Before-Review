export default class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    insertAtHead(data) {
        this.head = new Node(data, this.head)
        this.length++
    }
    
}

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next  
    }
}