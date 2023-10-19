class HashMap{
    constructor(){
        this.hashmap = {};
    }
    insert(key, value) {
        if (key in this.hashmap) {
            this.hashmap[key] = value;
        } else this.hashmap[key] = value;
    }
    getValue(key) {
        return this.hashmap[key];
    }
    delete(key) {
        delete this.hashmap[key];
        return this.hashmap;
    }
}

let school = new HashMap;
school.insert(1, 'A');
school.insert(2, 'B');
school.insert(3, 'C');

console.log(school);
console.log(school.getValue(3));
