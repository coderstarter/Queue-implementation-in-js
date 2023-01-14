class Queue {
    constructor(value) {
        this.qu = [];
    }
    enqueue(val) {
        this.qu.push(val);
    }
    dequeue() {
        this.qu.shift();
    }
    print() {
        console.log(this.qu)
    }
    front() {
        if (!this.qu.length) {
            return null;
        }
        return this.qu[0];
    }
    search(ele) {
        return this.qu.includes(ele);
    }
    length() {
        return this.qu.length;
    }
}


const q = new Queue();
q.enqueue(1);
q.enqueue(12)
q.enqueue(13)
q.enqueue(15)
q.enqueue(134)
q.enqueue(13)
q.print()
q.dequeue()
q.print()
console.log(q.front())
q.print()
console.log(q.search(134))

/*
search : o(n)
enqueue : o(1)
dequeue: o(1)
get first peek : o(1)

*/
