const SinglyLinkedList = require('./singly-ll-with-tail')

describe('singly linked list with head', () => {
    test('it has, tail, head, and length propertis', () => {
        const sll = new SinglyLinkedList()

        expect(sll.head).toBeNull()
        expect(sll.tail).toBeNull()
        expect(sll.length).toBe(0)
    })
})

describe('#getByIndex', () => {
    test('with index less than 0', () => {
        const sll = new SinglyLinkedList()
        sll.push(5)

        expect(sll.getByIndex(-2)).toBeNull()
    })

    test('with index greater or equal to the length of Linked List', () => {
        const sll = new SinglyLinkedList()
        sll.push(10)

        expect(sll.getByIndex(1)).toBeNull()
        expect(sll.getByIndex(5)).toBeNull()
    })

    test('gets the value based on the index', () => {
        const sll = new SinglyLinkedList()
        sll.push(20)
        sll.push(10)
        sll.push(5)

        expect(sll.getByIndex(1)).toEqual({value: 10, next: { value: 5, next: null }})
    })
})

describe('#set', () => {
    test('with index greater or equal to the length of Linked List', () => {
        const sll = new SinglyLinkedList()
        sll.push(10)

        expect(sll.set(1)).toBe(false)
        expect(sll.set(5)).toBe(false)
    })})

    test('returns true if value is updated', () => {
        const sll = new SinglyLinkedList()
        sll.push(10)
        sll.push(12)
        sll.push(3)

        expect(sll.set(1,22)).toBe(true)
        expect(sll.getByIndex(1).value).toBe(22)
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

        expect(lastValueInLL.value).toBe(0)
        expect(sll.tail.value).toBe(1)
        expect(sll.length).toBe(5)
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

        expect(firsValueInLL.value).toBe(5)
        expect(sll.head.value).toBe(4)
        expect(sll.length).toBe(5)
    })
})

describe('#unshift', () => {
    test('add a value at the beginning of a linked list when having neither head, tail, and length is 0', () => {
        const sll = new SinglyLinkedList()
        sll.unshift(5)

        expect(sll.head.value).toBe(5)
        expect(sll.tail.value).toBe(5)
        expect(sll.length).toBe(1)
    })
})