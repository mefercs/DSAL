// ###############  TYPED ARRAYS ############### 

var i8 = new Int8Array(5); // ex. of a typed array
console.log(
  "This is a 8bits array with 5 slots: [" + i8 + "] -> length: " + i8.byteLength
);

var byteSize = 6; //multiples of 2
var buffer = new ArrayBuffer(byteSize);
var i8Buffer = new Int16Array(buffer);
console.log(
  "This is a 16bits array created with a buffer array: [" +
    i8Buffer +
    "] -> length: " +
    i8Buffer.byteLength
);

// ############### STACK ############### 

class Stack {
  constructor() {
    this.collection = [];
  }
  pop() {
    return this.collection.pop();
  }
  push(value) {
    collection.push(value);
  }
  peek() {
    return this.collection[this.collection.length - 1];
  }
  isEmpty() {
    return this.collection.length == 0;
  }
  clear() {
    this.collection = [];
  }
}

// ############### QUEUE ############### 

class Queue {
  constructor() {
    this.collection = [];
  }
  enqueue(value) {
    this.collection.unshift(value);
  }
  dequeue() {
    return this.collection.pop();
  }
  size() {
    return this.collection.length;
  }
  front() {
    return this.collection[this.collection.length];
  }
  isEmpty() {
    return this.collection.length == 0;
  }
}

// ############### PRIORITY QUEUE ############### 

class PriorityQueue {
  constructor() {
    this.collection = [];
  }
  printCollection = function () {
    console.log(this.collection);
  };
  size = function () {
    return this.collection.length;
  };
  front = function () {
    return this.collection[0][0];
  };
  isEmpty = function () {
    return this.collection.length == 0;
  };
  enqueue = function (value) {
    let priority = value[1];
    let i = this.collection.length - 1;
    let current = this.collection[i];
    while (i >= 0 && priority < current[1]) {
      i -= 1;
    }
    this.collection.splice(i + 1, 0, value);
  };
  dequeue = function () {
    let element = this.collection.shift();
    return element[0];
  };
}

// ############### CIRCULAR QUEUE ############### 

class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size;
    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }
  enqueue(item) {
    if (this.write == this.read && this.queue[this.write] != null) {
      return null;
    }
    let cIndex = this.write;
    this.queue[cIndex] = item;
    this.write = this.write + 1;
    if (this.write == this.max) this.write = 0;
    return this.queue[cIndex];
  }
  dequeue() {
    if (this.queue[this.read] == null) return null;
    let cIndex = this.read;
    let current = this.queue[cIndex];
    this.queue[cIndex] = null;
    this.read = this.read + 1;
    if (this.read == this.max) this.read = 0;
    return current;
  }
}
