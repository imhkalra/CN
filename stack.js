class Stack{
    constructor() {
        this.stack = [];
    }
    push(num) {
        this.stack.unshift(num); 
    }
    pop() {
        return this.stack.shift();
    }
    peek() {
        return this.stack[0];
    }
    size() {
        return this.stack.length;
    }
    isEmpty() {
        return this.stack.length == 0;
    }
}

class Queue {
    constructor() {
        this.queue = new Stack;
    }
    enqueue(num) {
        this.queue.push(num);
    }
    dequeue() {
        this.helper = new Stack;
        while (!this.queue.isEmpty()) {
            this.helper.push(this.queue.pop());
        }
        let output = this.helper.pop();
        while (!this.helper.isEmpty()) {
            this.queue.push(this.helper.pop());
        }
        return output;
    }
    size() {
        return this.queue.size();
    }
    isEmpty() {
        return this.queue.isEmpty();
    }
}

let Q1 = new Queue;
Q1.enqueue(1);
Q1.enqueue(2);
Q1.enqueue(3);
Q1.enqueue(4);
Q1.enqueue(5);
Q1.enqueue(6);
console.log(Q1);



function reverseQueue(queue) {
    let helper = new Stack;
    while (!queue.isEmpty()) {
        helper.push(queue.dequeue());
    }
    let newQ = new Queue;
    while (!helper.isEmpty()) {
        newQ.enqueue(helper.pop());
    }
    return newQ;
}


const Q2 = reverseQueue(Q1);
console.log(Q2.dequeue());
console.log(Q2.dequeue());
console.log(Q2.dequeue());
console.log(Q2.dequeue());






