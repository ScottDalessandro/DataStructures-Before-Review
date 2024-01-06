class HashTable {
    table = new Array(200)
    numItems = 0

    _hash(key, tableLength) {
       let hash = 17 // prime number
       // Notes: Get a deeper understanding on why
       // Prime numbers are valued. I know it helps
       // spread distribution better but I need a deeper
       // understanding...

       for(let i = 0; i < key.length; i++) {
        hash = (hash * key.charCodeAt(i)) % (tableLength || this.table.length)
       }       
       return hash
    }

    get(key) {
      const idx = this._hash(key)      
      if (!this.table[idx]) return null
      // worst case O(n) o
      return this.table[idx].find(x => x[0] === key)[1]     
    }

    has(key) {        
        const idx = this._hash(key)
        if (!this.table[idx]) return null        
        return this.table[idx].find(x => x[0] === key) ? true : false

    }

    resize(){
        const newTable = new Array(table.length * 2)

        this.table.forEach(item => {
            if(item) {
                item.forEach(([key, value]) => {
                    const idx = this._hash(key, newTable.length)
                    if (this.table[idx]) {
                        newTable[idx].push([key,value])
                       } else {
                        newTable[idx] = [[key,value]]        
                       }
                })
            }
        })
        this.table = newTable
    }

    add(key, value) {
       const idx = this._hash(key)
       if(this.has(key)) numItems++
       const loadFactor = this.numItems / this.table.length
       if(loadFactor > 0.8) {
        this.resize()
       }


       if (this.table[idx]) {
        this.table[idx].push([key,value])
       } else {
        this.table[idx] = [[key,value]]        
       }
    }

    remove(key) {

    }

    list() {

    }

    count(){

    }

    
}

module.exports = {
    HashTable    
}