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

// ###############  SET  ###############

class Set {
  constructor() {
    this.dictionary = {};
    this.length = 0;
  }
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  values() {
    return Object.values(this.dictionary); //we are storing it in values
  }
  size() {
    return this.length;
  }
  add(item) {
    if (this.dictionary.hasOwnProperty(item)) {
      return false;
    }
    this.dictionary[item] = item;
    this.length += 1;
    return true;
  }
  remove(item) {
    if (!this.dictionary.hasOwnProperty(item)) return false;
    delete this.dictionary[item];
    this.length -= 1;
    return true;
  }
  union(setB) {
    let setNew = new Set();
    const addElement = (e) => setNew.add(e);
    this.values().forEach(addElement);
    setB.values().forEach(addElement);
    return setNew;
  }
}
// ############### MAP ###############
var Map = function () {
  this.collection = {};
  // Only change code below this line
  this.add = (key, value) => {
    this.collection[key] = value;
  };
  this.remove = (key) => {
    delete this.collection[key];
  };
  this.get = (key) => {
    return this.collection[key];
  };
  this.has = (key) => {
    return this.collection[key] != undefined;
  };
  this.values = () => {
    return Object.values(this.collection);
  };
  this.size = () => {
    return Object.keys(this.collection).length;
  };
  this.clear = () => {
    for (let item in this.collection) {
      delete this.collection[item];
    }
  };
  // Only change code above this line
};

// ###############  MAP  ###############
let called = 0;
let hash = (string) => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
let HashTable = function () {
  this.collection = {};
  // Only change code below this line
  this.add = (key, value) => {
    const hashedKey = hash(key);
    this.collection[hashedKey] = this.collection[hashedKey] || {};
    this.collection[hashedKey][key] = value;
  };
  this.lookup = (key) => {
    const hashedKey = hash(key);
    return this.collection[hashedKey][key];
  };
  this.remove = (key) => {
    const hashedKey = hash(key);
    delete this.collection[hashedKey][key];
    if (Object.keys(this.collection[hashedKey]).length == 0)
      delete this.collection[hashedKey];
  };
};
