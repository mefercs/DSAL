fn+mayús+tab = desired screenshot

## TYPED ARRAYS

We now specify the amount of memory we give to an array.

| Type              | Each Element size in bytes |
| ----------------- | -------------------------- |
| Int8Array         | 1                          |
| Uint8Array        | 1                          |
| Uint8ClampedArray | 1                          |
| Int16Array        | 2                          |
| Uint16Array       | 2                          |
| Int32Array        | 4                          |
| Uint32Array       | 4                          |
| Float32Array      | 4                          |
| Float64Array      | 8                          |

We can declare it directly with the next code:

```js
var i8 = new Int8Array(3); //a 8bits array with 3 slots
```

We can also also create a buffer to specify in bytes how much space we need to reserve in multiples of 2 :

```js
var byteSize = 6; //byte size
var buffer = new ArrayBuffer(byteSize);
var i8View = new Int16Array(buffer);
```

## STACK

They store data, in a way we can traverse it backwards, it follows a LIFO
type of service.

## QUEUE

They follow the FIFO principle.

## PRIORITY QUEUE

Is similar as a queue but the items have aditional information that specifies
their pritority, hence, they are inserted in the queue in a different manner.

## CIRCULAR QUEUE

It is queue with a fixed size to store items. It's useful for streaming media.

## SET

It is used to simple check the presence of an item.

## MAPS AND HASH TABLES

## NODES IN A LINKED LIST

A linked list a linear collection of data elements called nodes.
Each node contains at least `element` and `node` which points to.

- Double linkedList: Even if it's better we need more space in memory.

## TREES

A subtree refers to all the descendants of a particular node.

- A tree is unbalanced when there is at most 1 node of difference between the minimum and maximum height.
  - The height is the distance between the root and any node in the tree.
  - In a balanced tree all the leafs exist in the same height or at most one level apart.
  - It's important becuase it defines the efficency of the operations.
- **Depth-first traversal**: The tree is traveled as deeply as possible before the search continues with another subtree.
  - In-order: left-most node and ends at the right-most node.
    - The add root, is in the middle of left and right addings
  - Pre-order: All the roots before the leafs.
    - The add root is before the left and right addings
  - Post-order: All the leafs before the roots.
    - The add root is at the end of the left and right addings
- **Breadh-First** traversal: Here we explore all the nodes per level before
  continuing on the next level, queues are usuall in the implementation 
  as a helper data structure.
- **Delete a Node in a binary tree**: We can encounter 3 cases
  when deleting a node: 
  - Leaf Node: The node has zero children. Simply remove it.
  - One child: The target has one child. Link the remaining child
    with the parent.
  - Two child: Target has left and right node.
  - [FCC SOLUTION :( FOR 3 CASES](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-delete-a-node-with-two-children-in-a-binary-search-tree/301639)
- **Invert a binary tree**: Is the mirror image of the tree
  ```js
  this.invert = function(node=this.root){
    if(!node) return; 
    [node.left,node.right] = [node.right,node.left] //this is the entire logic to solve the problem
    //we did it with deconstruction
    this.invert(node.left) 
    this.invert(node.right)
  }
  ```
- **Trie Search Tree**: Commonly used to hold strings, or associative arrays or
  dynamic arrays where keys are strings. Very good at storing sets of data
  when many keys will have overlapping prefixes. For example all the words
  in a dictionary. All the strings sharing prefixes should  come from a common node.
  - They are also known as digital tree or prefix tree. 
  - The leafs are the word completed
  - The nodes can store multiple children nodes.

- **Binary heap**: Is a partially ordered *binary *tree which satisfies the heap property.
  - heap property: Satisfies a relation between parent and children.
  In the binary heap are present 2 situations, becuase there is not a left greater and right lower
  or viceversa, just greater both or smaller both children:
  - Max heap: All parent nodes are greater or equal to their children.
  - Min heap: All the child nodes are greater or equal to their parents.
  They are completed binary trees, that means that all the levels are full filled
  except for the last level, in witch case, all the keys are as left as possible, so
  the last level is filled from left to right.
  Using an array they can be implemented with the array for index i the children
  are `2*i+1` and `2*i+2`, the structure follow the next form [a,b,c,d,e,f,g,...] and parent 
  Math.floor((i-1)/2).
  To simplify the structure we can use the next form [null,a,b,c,d,e,f,g...]
  and in that way the children are `2*i`(left) and `2*i+1`(right), therefore the parent is
  Math.floor(i/2).
  - Remove elements: We find the greatest elements, and set it as the root, because
    we always remove the greatest value, which is the root. 
  - Use cases:
    - They can be used to implement a priority queue.
  -Heap sort
