Nodes are a lightweight object, that mantains a reference to other node/s in order to reprensent a linear order sequence.

# Singly Linked Lists
An node that stores a reference to an object and another node of the list, or it can reference None instead another node, if this is the list end.
- We store also the `head` and the `tail`, we can identify the tail if that node has `None` as its Node reference.
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

``````

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

Here we have `header` and `trailer` to reference the head and the tail of the list respectively which are known as **sentinels** because they have a `None` value assigned to prev(header) and next(trailer), and also `None` in their elements cells.. And here each node contains `_next,_prev and _element`.

### Inserting and Deleting with a duoble linked list.

 As a result of deletion, that node will no longer be considered part of the list and it can be reclaimed by the system( i.e. the python garbage collector ).

 <details>

 <summary>
 Doubly linked list base class implementation with python
 </summary>

```py
class _DoublyLinkedList: 

    class _Node:
        __slots__ = '_element','_next','_prev'
        def __init__(self, element, prev, next):
            self._next = next
            self._element = element 
            self._prev=prev
    def __init__(self) -> None:
        self._header = self._Node(None,None,None)
        self._trailer= self._Node(None,None,None)
        self._header._next = self._trailer
        self._trailer._prev = self._header 
        self._size = 0 
    def __len__(self): 
        return self._size
    def is_empty(self) : 
        return self._size == 0
    def _insert_between(self, element, predecessor,sucessor):
        newNode = self._Node(element, predecessor, sucessor)
        predecessor._next = newNode
        sucessor._prev = newNode
        self._size +=1 
        return newNode
    def _delete_node(self, node):
        previous = node._prev
        nextNode = node._next
        nodeElement = node._element 
        previous._next = nextNode 
        nextNode._prev = previous 
        self._size -=1
        node._prev = node._next = node._element = None
        return nodeElement
//implementation of the base doubly list with a Deck
class LinkedDeque(_DoublyLinkedList): 
    def first(self):
        if self.is_empty(): 
            print("The Deck is empty")
            return 
        print(f"View to first ({self._header._next._element})")
        return self._header._next._element
    def last(self): 
        if self.is_empty():
            print("The Deck is empty")
            return 
        print(f"View to last ({self._trailer._prev._element})")
        return self._trailer._prev._element
    def insert_first(self,element):
        self._insert_between(element,self._header, self._header._next)
        print(f"Element added at the begin ({element})")
    def insert_last(self, element): 
        self._insert_between(element, self._trailer._prev, self._trailer)
        print(f"Element added at the end ({element})")
    def delete_first(self): 
        if self.is_empty(): 
            print("The Deck is empty")
            return
        return self._delete_node(self._header._next)
    def delete_last(self):
        if self.is_empty(): 
            print("The Deck is empty")
            return
        return self._delete_node(self._trailer._prev)
```

 </details>
  
# The positional list ADT
Give us the ability to identify the location of an element.

# Sorting a Positional List
