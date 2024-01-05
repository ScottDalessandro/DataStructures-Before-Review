const { HashTable } = require('./hash-table')
describe('HashTable', () => {

    describe('hash table properties', () => {
        test('contains a table property', () => {
            const hashTable = new HashTable()
            expect(hashTable.table).toBeDefined()
        })
        test.skip('contains a size property', () => {
            const hashTable = new HashTable()
            expect(hashTable.size).toBeDefined()
        })
    })
    describe('get', () => {
        test.todo('retrieves a value when provided a key')
        test.todo('returns undefined when a key is not stored')
    })

    describe('add', () => {
        test('adds a new key/value pair to the table', () => {
            const hashTable = new HashTable()
            hashTable.add('example', 200)            
            expect(hashTable.get('example')).toBe(200)

        })
        test('adds a new key/value pair to the same index aka stored at a collision', () => {
            const hashTable = new HashTable()
            hashTable.add('example', 200)
            hashTable.add('elpmaxe', 5000)
            expect(hashTable.get('elpmaxe')).toBe(5000)
            
        })
    })

    

    describe('remove', () => {
        test.todo('removes a value by key')
    })

    describe('list', () => {
        test.todo('gets all the keys')
    })

    describe('count', () => {
        test.todo('count the number of items in the table')
    })

    describe('_hash', () => {
        test('creates a hash code (integer) from a key', () => {
            // don't have insert implementation yet, using random key
            const hashTable = new HashTable()            
            expect(hashTable._hash('hello')).toBe(72)
        })
        test.skip('hash value stays within bounds of size', () => {
            const hashTable = new HashTable()
            // don't have insert implementation yet, hardcoding value into .table
            console.log(hashTable.table)
        })
    })
})