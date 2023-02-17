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
  - LINK FOR TREE CASES: <a src="https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-delete-a-node-with-two-children-in-a-binary-search-tree/301639"></a>

