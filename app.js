const LinkedList = require('./linked-list/singly/linked-list-0.0.1-beta.js')
const SinglyLinkedList = require('./linked-list/singly-ll-with-tail/singly-ll-with-tail.js')

const sll = new SinglyLinkedList()
sll.push(5).push(4).push(3).push(2).push(1).push(0)
const lastValueInLL = sll.pop()

console.log('lastValue', lastValueInLL)
console.log(sll)
console.log(sll.tail.value)