class HashTable {
    table = new Array(200)
    size = 0

    _hash(key) {
       let hash = 0
       for(let i = 0; i < key.length; i++) {
        hash+= key.charCodeAt(i)
       }       
       return hash
    }

    get(key) {
        
    }

    add(key, value) {
       
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