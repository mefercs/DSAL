Nodes are a lightweight object, that mantains a reference to other node/s in order to reprensent a linear order sequence.

# Singly Linked Lists
An node that stores a reference to an object and another node of the list, or it can reference None instead another node, if this is the list end.
- We store also the `head` and the `tail`, we can idenfity the tail if that node has `None` as its Node reference.
- Traversing the list is also known as link hopping or pointer hopping.
- It's common to store the tail reference and have a Node elements count(**size** of the list).
- The times for an STACK ADP implementation are all constant worst cases, much better than a list implementation, and the space usage is the same `O(n)`

### Basic node implementation with python
```py
# as we are only use it to store a nothing else, we only need the initialization function (__init__)
class _Node: #Is a private variable because is used within the linked list
  __slots__ = '_element','_next' #To streamline memory, in order to avoid the dict namespace creation
  def __init__(self, element, next): 
    self._element = element
    self._next = next
```

### Insertions
  - After an insertion we increment by 1 the size of the list.
### Removing 
  - After a removing operation, make sure to decrement by 1 the size of the list.
#### Insert a new node in the head of the linked list
First we create a new Node instance, then we store the element's refenrce, and the `next` variable made it point to the head node reference, in order to change the head value reference to the new node.
#### Inserting a new node at the tail of the linked list. 
First create the new Node and store its reference element, then assign its `next` reference to `None` instead a new node. after that, assign the `next` tail reference node to the new Created node, continue assigning now tail to the last node.


# Circularly Linked Lists

## implement a queue with a CLL

<details>

<summary> 
Circular Queue implementation ( Without rotate )
</summary>

```py
class Queue: 
    #We have defined the node class
    class _Node:
        __slots__ = "_element", "_next" #tuple literal instantiation
        def __init__(self, element, next):
            self._element = element 
            self_next = next
    def __init__(self): 
        self._size = 0
        self._tail = None 
    def __len__(self):
        return self._size 
    def is_empty(self) : 
        return self._size == 0
    def enqueue(self, element):
        node = self._Node( element, None )
        if self.is_empty(): 
            node._next = node
        else: 
            node._next = self._tail._next
            self._tail._next = node
        self._tail = node
        self._size +=1
        print( f"Enqueued ( {element} )" )
    def dequeue(self): 
        if self.is_empty(): 
            print("The Queue is empty")
            return
        value = self._tail._next._element 
        oldNode = self._tail._next
        self._tail._next = oldNode._next
        self._size -=1
        print(f"Element removed ({value})")
```
</details>

As this ADT has a circular implementation, that connects the tail with the head to close the linked list, we only need the tail reference.
|Variables of the CLL ADT| description|
|---|---|
|`_tail`| Reference to the tail node|
|`_size`| Elements within the list|
- When enqueue is called, a new node is placed just after the tail but before the current head, and then the new node becomes the tail.
- It contains an additional method `rotate()`

# Doubly Linked Lists

# The positional list ADT
# Sorting a Positional List
