const hash = (key, max) => {    
    let hash = 0;
    for(let i = 0; i < key.length; i++) {
        hash += key[i].charCodeAt()
    }    
    return hash % max
}

class HashTable {
    buckets = new Array(3)
    size = 0

    add(key, value) {        
        const idx = hash(key, this.buckets.length)
        if(!this.buckets[idx]) {
           this.buckets[idx] = [[key, value]]
           return true

        }
        const hasKey = this.buckets[idx].filter(bucket => bucket[0] === key)        
        if(!hasKey.length) {
            this.buckets[idx].push([key, value])
        } else {
            return new Error('Key is already stored')
        }
    }
}


const ht = new HashTable()
// ht.add('beckett', 'happy birthday!')
// ht.add('tatum', '7 months old!')
// ht.add('Cassandra', '35 years young!')
console.log(ht.add('Sa;lsdkjf;lkasdjfl;adskfj;adskfjasd;lfkadjskfjadsl;kfjlasdfl', 'hello'))
console.log(ht.add('Sa;lsdkjf;lkasdjfl;adskfj;adskfjasd;lfkadjskfjadsl;kfjlasdfl', 'hello'))