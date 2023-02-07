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

// ###############  LINKED LIST  ###############
//EMPTY

// ###############  TREES  ###############
function isBinarySearchTree(tree) {
  //check if the tree if a binary tree
  const isBinarySubTree = (node) =>
    !node || //an empty node counts as a biarny tree.
    ((!node.left || node.left.value < node.value) && //check if there is a left node, if does, check if correctly comppletes the condition
      (!node.right || node.right.value > node.value) && // check if there is a right node, if does, check if correctly completes the binary tree condition
      isBinarySubTree(node.left) && //execute the same for all the left nodes
      isBinarySubTree(node.right)); // execute the function for all the right nodes.
  return isBinarySubTree(tree.root);
}
const findMinHeight = function (node = this.root, height = 0) {
  if (!this.root) return -1;
  const checkMin = (node) => {
    if (!node) return 0;
    return 1 + Math.min(checkMin(node.left), checkMin(node.right));
  };
  return checkMin(this.root) - 1;
};
const findMaxHeight = function (node = this.root) {
  if (!this.root) return -1;
  const checkMax = (node) => {
    if (!node) return 0;
    return 1 + Math.max(checkMax(node.left), checkMax(node.right));
  };
  return checkMax(this.root) - 1;
};
const isBalanced = function () {
  return this.findMaxHeight() - this.findMinHeight() <= 1;
};

// DEPTH-FIRST:  Inorder, preorder, postorder traversals
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.inoder = function () {
    if (!this.root) return null;
    const traversal = (node) => {
      if (!node) return [];
      let nodes = traversal(node.left); //Here we are adding all the left nodes
      nodes.push(node.value); //adds the root inorder traversal
      nodes.push(...traversal(node.right)); // Here we are adding all the right adds the root inorder traversal
      return nodes; //return the resulting values
    };
    return traversal(this.root);
  };
  this.preorder = function () {
    if (!this.root) return null;
    const traverse = (node) => {
      if (!node) return [];
      let nodes = [node.value]; //adds the root (inorder)
      nodes.push(...traverse(node.left)); // adds the left
      nodes.push(...traverse(node.right)); // adds the right
      return nodes;
    };
    return traverse(this.root);
  };
  this.postorder = function () {
    if (!this.root) return null;
    const traverse = (node) => {
      if (!node) return [];
      let nodes = [...traverse(node.left)]; //adds all the left values
      nodes.push(...traverse(node.right)); //adds all the rigth values
      nodes.push(node.value); // add the root (post order)
      return nodes;
    };
    return traverse(this.root);
  };
}

// BREADH-FIRST
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  this.levelOrder = function () {
    if (!this.root) return null;
    let queue = [this.root];
    let values = [];
    while (queue.length != 0) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      values.push(node.value);
    }
    return values;
  };
  this.reverseLevelOrder = function () {
    if (!this.root) return null;
    let queue = [this.root];
    let values = [];
    while (queue.length != 0) {
      let node = queue.shift();
      if (node.right) queue.push(node.right);
      if (node.left) queue.push(node.left);
      values.push(node.value)
    }
    return values
  };
}
