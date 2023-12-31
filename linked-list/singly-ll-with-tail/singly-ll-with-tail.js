class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }
}


class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    getByIndex(index) {
        if (index < 0 || index >= this.length ) return null
        let currentNode = this.head
        for(let i = 0; i < index; i++ ) {
            currentNode = currentNode.next
        }
        return currentNode        
    }

    setByIndex(index, value) {
        if (index < 0 || index > this.length ) return false
        if(index === this.length) return !!this.push(value)
        if(index === 0) return !!this.unshift(value)
        
        const prevNode = this.getByIndex(index-1)
        const newNode = new Node(value)
        
        newNode.next = prevNode.next
        prevNode.next = newNode

        this.length++

        return true
    }

    remove(index) {
        if (index < 0 || index > this.length) return undefined
        if (index === this.length - 1) this.pop()
        if (index === 0) this.shift()

        const prevNode = this.getByIndex(index-1)
        const removedNode = prevNode.next
        prevNode.next = preveNode.next.next

        this.length--

        return removedNode;
    }
    // reverse in place
    reverse() {        
        let node = this.head
        this.head = this.tail
        this.tail = node;

        let next;
        let prev = null;
        while(node.next) {
            next = node.next
            node.next = prev // having a hard time visulizing this...

            prev = node
            node = next
        }
        // for(let i = 0; i < this.length; i++) {
        //     next = node.next
        //     node.next = prev
        //     prev = node
        //     node = next
        // }
        return this
    }

    print() {
        const arr = []
        let current = this.head

        while(current.next) {
            arr.push(current.val)
            current = current.next
        }
        // console.log(arr)        
    }

    set(index, value) {
        const node = this.getByIndex(index)
        if(node === null) {            
            return false
        }
        node.value = value;
        return true

    }

    push(val) {
        const newNode = new Node(val)
        if(!this.head) {
            this.head = newNode
            this.head.next = newNode          
            this.tail = this.head
            this.length++
            return this
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    pop() {
        if(!this.head) return undefined
        let current = this.head
        let newTail = current
        while(current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        return current

    }

    shift() {
        if(!this.head) return undefined

        const oldHead = this.head
        this.head = this.head.next
        this.length--
        if(this.length === 0) {
            this.tail = null
        }
        return oldHead
    }

    unshift(val) {
        const newNode = new Node(val)        
        const oldHead = this.head
        if(!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this      
    }
}

module.exports = SinglyLinkedList