const SinglyLinkedList = require('./singly-ll-with-tail')

describe('singly linked list with head', () => {
    test('it has, tail, head, and length propertis', () => {
        const sll = new SinglyLinkedList()

        expect(sll.head).toBeNull()
        expect(sll.tail).toBeNull()
        expect(sll.length).toBe(0)
    })
})

describe('#push', () => {
    
    test('with no head, tail, and length is 0', () => {
        const sll = new SinglyLinkedList()
        sll.push(5)

        expect(sll.head.value).toBe(5)
        expect(sll.tail.value).toBe(5)
        expect(sll.length).toBe(1)
    })
    
    test('adds a value to the end of the linked list', () => {
        const sll = new SinglyLinkedList()
        sll.push(5).push(4).push(3).push(1).push(0)
        
        expect(sll.length).toBe(5)
        expect(sll.head.value).toBe(5)
        expect(sll.tail.value).toBe(0)
    })
})

describe('#pop', () => {
    test('with no head, tail, and length is 0', () => {
        const sll = new SinglyLinkedList()

        const lastValueInLL = sll.pop()

        expect(lastValueInLL).toBeUndefined()
    })

    test('removes the last value in the linked list', () => {
        const sll = new SinglyLinkedList()
        sll.push(5).push(4).push(3).push(2).push(1).push(0)
        const lastValueInLL = sll.pop()

        expect(lasValueInLL).toBe(0)
        expect(SinglyLinkedList.tail.value).toBe(1)
        expect(SinglyLinkedList.length).toBe(4)
    })
})


describe('#shift', () => {
    test('with no head, tail and length is 0', () => {
        const sll = new SinglyLinkedList()

        const lastValueInLL = sll.shift()

        expect(lastValueInLL).toBeUndefined()
    })

    test('remove the first value in the linked list', () => {
        const sll = new SinglyLinkedList()
        sll.push(5).push(4).push(3).push(2).push(1).push(0)
        const firsValueInLL = sll.shift()

        expect(firsValueInLL).toBe(5)
        expect(SinglyLinkedList.head.value).toBe(4)
        expect(SinglyLinkedList.length).toBe(4)
    })
})

// describe('#unshift', () => {
//     test()
// })