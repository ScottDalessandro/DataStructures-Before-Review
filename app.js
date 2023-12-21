const LinkedList = require('./linked-list-0.0.1-beta.js')

const ll = LinkedList.fromValues(10,20,30,40)
ll.print()
console.log(ll.getByIndex(0).value)