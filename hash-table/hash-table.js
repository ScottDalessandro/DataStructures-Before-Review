class HashTable {
    table = new Array(200)    

    _hash(key) {
       let hash = 17 // prime number
       // Notes: Get a deeper understanding on why
       // Prime numbers are valued. I know it helps
       // spread distribution better but I need a deeper
       // understanding...

       for(let i = 0; i < key.length; i++) {
        hash = (hash * key.charCodeAt(i)) % this.table.length
       }       
       return hash
    }

    get(key) {
      const idx = this._hash(key)
      console.log(idx)
      if (!this.table[idx]) return null
      return this.table[idx].find(x => x[0] === key)[1]     
    }

    add(key, value) {
       const idx = this._hash(key)
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