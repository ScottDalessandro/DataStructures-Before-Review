class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    insertAtHead(data) {
        const newNode = new Node(data, this.head)
        this.head = newNode
        this.length++
    }

    getByIndex(index) {                             
        if (index >= this.length || index < 0) return null
        let currentNode = this.head;
        for(let i = 0; i < index; i++) {
            currentNode = currentNode.next
        }
        return currentNode
    }

    print() {
        // write a function that prints out the linked list
        let output = ''
        let currentNode = this.head
        
        while (currentNode) {
            output+= `${currentNode.value} --> `
            currentNode = currentNode.next
        }
        output+= JSON.stringify(currentNode)
        console.log(output)
        console.log('done')        
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