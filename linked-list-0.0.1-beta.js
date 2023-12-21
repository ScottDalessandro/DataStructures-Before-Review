class LinkedList {
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
    constructor(value, next = null) {
        this.value = value
        this.next = next  
    }
}

LinkedList.fromValues = function (...values) {
    const ll = new LinkedList()
    // reverse order: constantly inserting at the beginning 
    // so the last value we insert is actually the first.
    Array.from(values).reverse().forEach( (val) => {
        ll.insertAtHead(val)
    })    
    return ll;
}

module.exports = LinkedList