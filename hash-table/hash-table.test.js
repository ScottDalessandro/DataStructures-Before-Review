const { HashTable } = require('./hash-table')
describe('HashTable', () => {

    describe('hash table properties', () => {
        test('contains a table property', () => {
            const hashTable = new HashTable()
            expect(hashTable.table).toBeDefined()
        })
        test('contains a size property', () => {
            const hashTable = new HashTable()
            expect(hashTable.size).toBeDefined()
        })
    })
    describe('get', () => {
        test.todo('retrieves a value when provided a key')
        test.todo('returns undefined when a key is not stored')
    })

    describe('put', () => {})
})