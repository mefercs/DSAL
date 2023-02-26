const MaxHeap = function () {
  this.heap = [];
  this.parent = (index) => {
    return Math.floor((index - 1) / 2);
  };
  this.insert = (element) => {
    this.heap.push(element);
    this.heapifyUp(this.heap.length - 1);
  };
  this.heapifyUp = (index) => {
    let currentIndex = index,
      parentIndex = this.parent(currentIndex);
    while (
      currentIndex > 0 &&
      this.heap[currentIndex] > this.heap[parentIndex]
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.parent(parentIndex);
    }
  };
  this.swap = (index1, index2) => {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  };
  this.print = () => {
    return this.heap;
  };
  // Only change code below this line
  this.remove = function () {
    let last = this.heap[0];
    this.heap[0] = this.heap[this.heap.length];
    this.heap.pop();
    this.heapify(0);
  };

  this.heapify = function (index) {
    let large = index;
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    if (left < this.heap.length && this.heap[left] > this.heap[large]) {
      large = left;
    }
    if (right < this.heap.length && this.heap[right] > this.heap(large)) {
      large = right;
    }
    if (large != index) {
      this.swap(this.heap[index],this.heap[large])
      this.heapify(large);
    }
  };
  // Only change code above this line
};
