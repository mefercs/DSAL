Nodes are a lightweight object, that mantains a reference to other node/s in order to reprensent a linear order sequence.
- Assingning to None variables helps the python garbage collector
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
- The base methods for the doubly linked list are: 
  1. len(L)
  2. is_empty() 
  3. `_insert_between(element, previous_node, next_node)`
  4. `_delete_node(node)`
- and the base node implemenation is the next
```py 
class _Node:
  __slots__ = '_element','_prev','_next'
  def __init__(self, element, prev, next):
    self._element = element
    self._prev = prev
    self._next = next
```

<details> 

<summary> 
This is the real basic structure that we need to follow
</summary>

```py
class _DoublyLinkedBase: 
    class _Node: 
        __slots__ = '_element','_prev','_next' #this is to stremaline the memory 
        def __init__(self, element, prev, next): 
            self._element = element
            self._prev = prev
            self._next = next
    
    def __init__(self): 
        self._header = self._Node(None,None,None)
        self._trailer= self._Node(None,None,None)
        self._header._next = self._trailer
        self._trailer._prev = self._header #here is the sentinels definition, pointing between themself
        self._size = 0 
    def __len__(self): 
        return self._size
    def is_empty(self): 
        return self._size == 0
    def _insert_between(self, e, predecessor, sucessor): 
        newnode = self._Node(e, predecessor, sucessor)
        predecessor._next = newnode
        sucessor._prev = newnode
        self._size +=1
        return newnode
    def _delete_node(self,node): 
        element = node._element
        predecessor = node._prev
        sucessor = node._next
        predecessor._next = sucessor
        sucessor._prev =predecessor 
        self._size -= 1
        node._next = node._prev = node._element = None #helps the garbage collector
        return element
```
</details>

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
#implementation of the base doubly list with a Deck
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
Give us the ability to identify the location of an element. The **position** acts as a marker or token within the broader positional List.
The only method supported is `p.element()`, to delete an position element, we just invalidate that position assigning their values to `None`.
- Now the first() and last() methods will return **position** instead of elements, and we can obtain that element using `L.first().element()`
- We work with positions, and not with elements directly as we did before in the Doubly linked lists.

|method|action|
|---|---|
|`L.first()`|Return the position of the first element of L, or None if L is empty|
|`L.last()`|Return the position of the last element of L, or None if L is empty|
|`L.before(p)`|Return the position of the immediately before position p, or None if p is the first position|
|`L.after(p)`|Return the position of L immediately after position p, or None if p is the last position|
|`L.is_empty()`|Return True if L does not contain any elements|
|`len(L)`|Return the number of elements in the list|
|`iter(L)`|Return a forward iterator for the elements of the List|
|`L.add_first(e)`|Insert a new element e at the front of L, returning the position of the new element|
|`L.add_last(e)`|Insert a new elemen e just before position p in L, returning the position of the new element|
|`L.replace(p,e)`|Replace the element at position p with element e, returning the element formely at position p|
|`L.delete(p)`|Remove and return the element at position p in L, invalidating the position|



#### Validating positions
Each time the **PositionalList** class accepts a new position as a parameter, we want to verify that the position is valid, if so, determine the underlying node associated with the position. 
- With the container reference we can robustly detect when a caller sends a position instance that does not belong to the indicated list.

#### Access and update methods
- The methods rely on the `_valitade` method to *unwrap* any position that is sent.
- The methods also rely on the `_make_position` method to *wrap* nodes as Position instances to return to the user.

<details>
<summary>
Implementation with the previous doubly linked list
</summary>

```py
class PositionalList(_DoublyLinkedList):
    #-----------nested positional class
    class Position:
        def __init__(self, container, node): 
            self._container = container 
            self._node = node
        def element(self): 
            return self._node._element
        def __eq__(self,other): 
            #return true if other is a position representing the same location
            return type(other) is type(self) and other._node is self._node
        def __ne__(self, other): 
            return not (self==other)

    def _validate(self, p): 
        """Return position's node or raise an appropiate error if invalid"""
        if not isinstance(p, self.Position): 
            print("p must be proper position type")
        if p._container is not self:
            print('p does not belong this container')
        if p._node._nest is None:
            print('p is no longer valid')
        return p._node

    def _make_position(self, node): 
        if node is self._header or node is self._trailer:
            return None #sentinels, boundary violation
        else:
            return self.Position(self, node)
    def first(self): 
        return self._make_position(self._header._next)
    def last(self): 
        return self._make_position(self._trailer._prev)
    def after(self,p): 
        node = self._validate(p)
        return self._make_position(node._next)
    def __iter__(self):
        cursor = self.first() 
        while cursor is not None: 
            yield cursor.element()
            cursor = self.after(cursor)
    def _insert_between(self, e, predecessor, sucessor): 
        node = super()._insert_between(e, predecessor, sucessor)
        return self._make_position(node)
    def add_first(self, e): 
        return self._insert_between(e, self._header, self._header._next)
    def add_last(self,e): 
        return self._insert_between(e, self._trailer._prev, self._trailer)
    def add_before(self, p, e):
        original = self._validate(p) 
        return self._insert_between(e, original._prev, original)
    def add_after(self, p, e): 
        original = self._validate(p)
        return self._insert_between(e, original, original._next)
    def delete(self, p): 
        original = self._validate(p)
        return self._delete_node(original)
    def replace(self,p,e):
        original = self._validate._element
        old_value = original._element
        original._element = e 
        return old_value
```
</details>

# Sorting a Positional List


