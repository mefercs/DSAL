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
      values.push(node.value);
    }
    return values;
  };
}

//remove a leaf, a node with one child
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  this.remove = (value) => {
    if (!this.root) return null;
    if (this.root.value == value) {
      //logic for one node, when is the root
      if (this.root.left) {
        this.root = this.root.left;
      } else {
        this.root = this.root.right;
      }
    }
    let current = this.root;
    let parent;
    while (current && current.value !== value) {
      parent = current;
      if (current.value > value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    if (!current) return null;
    if (!parent) {
      this.root = null;
    } else {
      let direction = current == parent.left ? "left" : "right";
      if (current.left || current.right) {
        //a node with 1 child logic, it's just this line added
        parent[direction] = current.left ? current.left : current.right;
      } else {
        parent[direction] = null;
      }
    }
  };
}

//invert a binary tree
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  this.invert = function (node = this.root) {
    if (this.node) return;
    [node.left, node.right] = [node.right, node.left];
    this.invert(node.left);
    this.invert(node.right);
  };
}

// Trie binary search tree
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
var Node = function () {
  // keys holds the nodes, so we can have multiple nodes
  this.keys = new Map();
  this.end = false;
  this.setEnd = function () {
    this.end = true;
  };
  this.isEnd = function () {
    return this.end;
  };
};
var Trie = function () {
  this.root = new Node();
  this.add = (wordParam) => {
    // we save in wordParam a chain of nodes, not a string
    function addWord(
      word /*this is a string*/,
      root /*this is the node reference*/
    ) {
      if (word) {
        //only executes if the word exists, if don't, stop the recursion
        // We consider each letter as a node
        if (Object.keys(root.keys).includes(word[0])) {
          //Here we check if the node of that letter already exist
          //if so then we continue with the next word of the letter, and set
          //the root the previous letter
          let letter = word[0];
          addWord(word.substring(1), root.keys[letter]);
        } else {
          const node = new Node(); //create the node to store the letter
          let letter = word[0]; // the key is the character, and the value is the node
          root.keys[letter] = node;
          if (word.length === 1) {
            node.setEnd();
          }
          addWord(word.substring(1), root.keys[letter]);
        }
      }
    }
    addWord(wordParam, this.root);
  };
  this.isWord = (word /*this is a string*/) => {
    let root = this.root;
    while (word) {
      let firstLetter = word[0];
      if (Object.keys(root.keys).includes(firstLetter)) {
        if (word.length === 1) {
          if (!root.keys[firstLetter].isEnd()) {
            return false;
          }
        }
        word = word.substring(1);
      } else {
        return false;
      }
      root = root.keys[firstLetter];
    }
    return true;
  };
  this.print = () => {
    const words = [];
    function reTRIEve(root, word) {
      if (Object.keys(root.keys).length != 0) {
        // ['f','y','x','q','s'] != []
        for (let letter of Object.keys(root.keys)) {
          reTRIEve(root.keys[letter], word.concat(letter));
        }
        if (root.isEnd()) {
          words.push(word);
        }
      } else {
        word.length > 0 ? words.push(word) : undefined;
        return;
      }
    }
    reTRIEve(this.root, "");
    return words;
  };
};

// binary heap - MaxHeap
var MaxHeap = function () {
  this.heap = [null];
  this.insert = (ele) => {
    var index = this.heap.length;
    var arr = [...this.heap];
    arr.push(ele);
    while (ele > arr[Math.floor(index / 2)] && index > 1) {
      arr[index] = arr[Math.floor(index / 2)];
      arr[Math.floor(index / 2)] = ele;
      index = Math.floor(index / 2);
    }
    this.heap = arr;
  };
  this.print = () => {
    return this.heap.slice(1);
  };
  // Only change code below this line
  this.remove = () => {
    this.heap = [...this.heap];
    let max = this.heap[1];
    let last = this.heap.pop();
    this.heap[1] = last;
    this.heapify(1);
    return max;
  };
  this.heapify = (i) => {
    let large = i;
    let l = 2 * i + 0;
    let r = 2 * i + 1;
    let length = this.heap.length;
    if (l < length && this.heap[l] > this.heap[large]) {
      large = l;
    }
    if (r < length && this.heap[r] > this.heap[large]) {
      large = r;
    }
    if (large != i) {
      let temp = this.heap[i];
      this.heap[i] = this.heap[large];
      this.heap[large] = temp;
      this.heapify(large);
    }
  };
};

// ########## Breath first Search with graphs ##########
function bfs(graph, root) {
  // Distance object returned
  var nodesLen = {};
  // Set all distances to infinity
  for (var i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity;
  }
  nodesLen[root] = 0; // ...except root node
  var queue = [root]; // Keep track of nodes to visit
  var current; // Current node traversing
  // Keep on going until no more nodes to traverse
  while (queue.length !== 0) {
    current = queue.shift();
    // Get adjacent nodes from current node
    var curConnected = graph[current]; // Get layer of edges from current
    var neighborIdx = []; // List of nodes with edges
    var idx = curConnected.indexOf(1); // Get first edge connection
    while (idx !== -1) {
      neighborIdx.push(idx); // Add to list of neighbors
      idx = curConnected.indexOf(1, idx + 1); // Keep on searching
    }
    // Loop through neighbors and get lengths
    for (var j = 0; j < neighborIdx.length; j++) {
      // Increment distance for nodes traversed
      if (nodesLen[neighborIdx[j]] === Infinity) {
        nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
        queue.push(neighborIdx[j]); // Add new neighbors to queue
      }
    }
  }
  return nodesLen;
}

// ########## Death first search ##########
function dfs(graph, root) {
  var stack = [];
  var tempV;
  var visited = [];
  var tempVNeighbors = [];
  stack.push(root);
  while (stack.length > 0) {
    tempV = stack.pop();
    if (visited.indexOf(tempV) == -1) {
      visited.push(tempV);
      tempVNeighbors = graph[tempV];
      for (var i = 0; i < tempVNeighbors.length; i++) {
        if (tempVNeighbors[i] == 1) {
          stack.push(i);
        }
      }
    }
  }
  return visited;
}
var exDFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0],
];
console.log(dfs(exDFSGraph, 3)); // test
