class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value){
    if(this.length === 0){
      let node = new Node(value);
      this.first = node;
      this.last = node;
      this.length ++;
      return this;
    }
    let node = new Node(value);
    this.last.next = node;
    this.last = node;
    return this;
  }
  dequeue(){
    if(this.length === 1){
      this.last = null;
    }
    let next = this.first.next;
    this.first = next;
    return this
  }
  //isEmpty;
}

const myQueue = new Queue();

myQueue.enqueue("Joy")
myQueue.enqueue("Matt")
myQueue.enqueue("Pavel")
myQueue.enqueue("Samir")

console.log(myQueue.peek());
myQueue.dequeue()
console.log(myQueue.peek());
myQueue.dequeue()
console.log(myQueue.peek());
myQueue.dequeue()
console.log(myQueue.peek());
myQueue.dequeue()
