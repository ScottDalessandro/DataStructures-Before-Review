const LinkedList = require('./linked-list-0.0.1-beta.js')

describe('#insertAtHead', () => {
    test('it adds the element to the beginning of the list', () => {
        const ll = new LinkedList()
        ll.insertAtHead(10)
        const oldHead = ll.head
        ll.insertAtHead(20)
        
        expect(ll.head.value).toBe(20)
        expect(ll.head.next).toBe(oldHead)
        expect(ll.length).toBe(2)
    })
})

describe('#getByIndex', () => {
    describe('with index less than 0', () => {
        test('it describes null', () => {
            const ll = LinkedList.fromValues(10, 20)            
            expect(ll.getByIndex(-1)).toBeNull()
        })
    })
    describe('with index greater than list length', () => {
        test('it returns null', () => {
            const ll = LinkedList.fromValues(10, 20)            
            expect(ll.getByIndex(5)).toBeNull()
        })
    })

    describe('with index 0', () => {
        test('it returns the head', () => {
            const ll = LinkedList.fromValues(10,20)            
            expect(ll.getByIndex(0)).toBe(10)
        })
    })

    describe('with index in the middle', () => {
        test('it returns the element at that index', () => {
            const ll = LinkedList.fromValues(10,20,30,40)                    
            expect(ll.getByIndex(2)).toBe(30)
        })
    })

})