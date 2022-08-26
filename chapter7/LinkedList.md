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

266 was the last page

# Circularly Linked Lists
# Doubly Linked Lists
# The positional list ADT
# Sorting a Positional List
