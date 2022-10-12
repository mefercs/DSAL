## PreOrder and Postorder Traversals of General Trees

### PreOrder Tree traversal
In this method the root is visited first and then subtrees rooted,
and its children are traversed recusively.

```
Algorithm preorder(T,p): 
  perform the "visit" action for position p
  for each child c in T.children(p) do 
    preorder(T,c)
```
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfAPF9--Vx-1A6Gq3J85E42WtyRO8pY4NOuw&usqp=CAU" alt="PreOrder" height="300"/>

### PostOrder Tree traversal
It traverses recusively the subtrees rooted at the children of the 
root first, and then visits the root.

 ```
 Algorithm postorder(T,c): 
   for each child c in T.children(p) do 
     postoredr(T,c)
   perform the "visit" action for p
 ```
 <img src="https://s3.ap-south-1.amazonaws.com/afteracademy-server-uploads/how-to-traverse-in-a-tree-postorder-13146c73f47dcf88.png" alt="postorder" height="300"/>

### Breadth-First Tree Traversal
We visit all the position at depth *d* before we visit the positions 
at depth *d+1*.

```
Algorithm breadthfirst(T): 
  Initialize queue Q to contain T.root()
  while Q not empty do
    p = Q.dequeue()    {p is the oldest entry in the queue}
    perform the "visit" action for position p
    for each child c in T.children(p) do
      Q.enqueue(c) {add p's children to the end of the queue for later visits}
```
<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--tjMTJZx2--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n28vjy9759lvwwd59j6d.png" alt="breath-depth" height="300"/>

### Inorder Traversal of a Binary Tree
It can viewed as visiting the nodes of T "from left to right"
```
Algorithm inorder(p): 
  if p has a left child lc then
    inorder(lc)
    perform the "visit" action for position p
    if p has a right child rc then
      indorder(rc)
```

<img src="https://www.techiedelight.com/wp-content/uploads/Inorder-Traversal.png" alt="Inorder" height="200"/> 
<img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Threaded_tree.svg" alt="indorder" height='200'/>

### Implementing Tree traversals in python

|Method|Action|
|---|---|
|`T.positions()`|Generate an iteration of all positions of `T`|
|`iter(T)`|Generate an iteration of all element stored within the tree `T`|

#### Preorder Traversal

<details>

<summary>Complete implementation with preordert traversal</summary>

```py
from typing import Iterator 
#It allow us me to indicate Iterator return type 
class Tree:
    class Position:
        def element(self):
            raise NotImplemented('must be implemented')
        def __eq__(self, __o: object) -> bool:
            raise NotImplemented('must be implemented')
        def __ne__(self, other) -> bool:
            return not ( self==other)
    def root( self ): 
        raise NotImplemented('must be implemented')
    def parent( self , p:Position ) : 
        raise NotImplemented('must be implemented')
    def num_children( self , p:Position ) -> int:
        raise NotImplemented('must be implemented')
    def children( self , p:Position ):
        raise NotImplemented('must be implemented')
    def __len__( self )  -> int: 
        raise NotImplemented('must be implemented')
    def is_root( self , p :Position) -> bool: 
        return self.root() == p
    def is_leaf( self , p :Position) -> bool: 
        return self.num_children(p) == 0
    def is_empty( self ) -> bool:
        return len(self) == 0

class BinaryTree(Tree):
    def left(self, p): 
        raise NotImplemented('must be implemented')
    def right(self,p): 
        raise NotImplemented('must be implemented')
    def sibling(self,p):
        parent = self.parent(p)
        if parent is None:
            return None
        else: 
            if p == self.left(parent): 
                return self.right(parent)
            else: 
                return self.left(parent)
    def children(self, p):
        if self.left(p) is not None: 
            yield self.left(p) 
        if self.right(p) is not None: 
            yield self.right(p)

class LinkedBinaryTree(BinaryTree): 
    """Linked representation of a binary tree structure"""
    class _Node: 
        __slots__ = '_element','_parent','_left','_right'
        def __init__(self, element=None, parent=None, left=None, right=None):
            self._element = element
            self._parent = parent
            self._right = right
            self._left = left
    class Position(BinaryTree.Position): 
        """Abstraction representing the location of a single element"""
        def __init__(self,container,node) -> None:
            """It shouldn't be invoked by the user"""
            self._container = container
            self._node = node
        def element(self):
            """Return the element stored in this position"""
            return self._node._element
        def __eq__(self,other) -> bool:
            """Return True if other is a Position representing the same location"""
            return type(other) is type(self) and other._node is self._node
    def _validate(self,p:Position) -> _Node:
        """Return associated Node, if position is valid"""
        if not isinstance(p,self.Position):
            raise TypeError('p msut be proper Position type!')
        if p._container is not self:
            raise ValueError('p does not belongs to this Tree/Container')
        if p._node._parent is p._node: #Convention for deprecated nodes
            raise ValueError('p is no longer valid')
        return p._node
    def _make_position(self,node: _Node|None) -> Position|None: 
        """Return Position instance for given node(or None if no node)"""
        return self.Position(self,node) if node is not None else None

    def __init__(self) -> None:
        """Create an initially empty binary Tree"""
        self._root = None 
        self._size = 0
    def __len__(self) -> int:
        """Return the total number of elements the tree"""
        return self._size
    def root(self) -> Position|None: 
        """Return the root position of the tree( Or None if its empty )"""
        return self._make_position(self._root)
    def parent(self, p:Position) -> Position|None: 
        """Return the Position of the p's parent(Or None if p is the root)"""
        node = self._validate(p)
        return self._make_position(node._parent) 
    def left(self,p)-> Position|None:
        """Return the Position of the p's left child( or None if no left child )"""
        node = self._validate(p)
        return self._make_position(node._left)
    def right(self,p) -> Position|None:
        """Return the Position of p's right child( or None if no right child )"""
        node = self._validate(p)
        return self._make_position(node._right)
    def num_children(self, p:Position) -> int:
        """Return the number of childen of position p"""
        node = self._validate(p)
        count = 0 
        if node._left is not None:
            count+=1
        if node._right is not None:
            count+=1
        return count
    def _add_root(self,e) -> Position|None: 
        """Place element e at the root of an EMPTY TREE and return the new Position
        
        Raise ValueError if tree nonempty
        """
        if self._root is not None: raise ValueError("Root Exists")
        self._size = 1
        self._root = self._Node(e)
        return self._make_position(self._root)
    def _add_left(self,p,e)->Position|None: 
        """Create a new left child for Position p, storing element e
        Return the position of the new node
        Raise ValueError if Position p is invalid or p already has a left child
        """
        node = self._validate(p)
        if node._left is not None: raise ValueError("Left child already exists!")
        self._size +=1
        node._left = self._Node(e,node)
        return self._make_position(node._left)
    def _add_right(self,p,e) -> Position|None:
        """Create a new right child for Position p, storing element e
        Return the Position of new node. 
        Raise ValueError if Position p is invalid or p already has a right child
        """
        node = self._validate(p)
        if node._right is not None: raise ValueError("The right child already exists!")
        self._size+=1
        node._right = self._Node(e,node)
        return self._make_position(node._right)
    def _replace(self,p:Position,e):
        """Replace the element at position p with e, and return old element"""
        node = self._validate(p)
        old = node._element
        node._element = e
        return old
    def _delete(self,p:Position):
        """Delete the node at Position p, and replace it with its child if any
        Return the element that had been stored at position p
        Raise ValueError if Position p is invalid or p has 2 children
        """
        node = self._validate(p)
        if self.num_children(p) == 2: raise ValueError("The position has 2 children")
        child = node._left if node._left else node._right
        if child is not None:
            child._parent = node._parent #child's grandparent becomes the new parent
        if node is self._root:
            self._root = child
        else:
            parent = node._parent
            if node is parent._left: 
                parent._left = child
            else: 
                parent._right = child
                self._size-=1
                node._parent = node
                return node._element
    def _attach(self,p:Position,t1,t2)-> None:
        """Attach trees t1 and t2 as left and right subtrees of external p"""
        node = self._validate(p)
        if not self.is_leaf(p): raise ValueError('position must be leaf')
        if not type(self) is type(t1) is type(t2): #The 3 trees should be the same type
            raise TypeError('Three types must match')
        self._size += len(t1) + len(t2)
        if not t1.is_empty():
            t1._root._parent = node
            node._left = t1._root
            t1._root = None # because we already have a root reference
            t1._size = 0 
        if not t2.is_empty():
            t2._root._parent = node
            node._right = t2._root
            t2._root = None 
            t2._size = 0
    def preorder(self)-> Iterator[Position]: 
        """Generate a preorder iteration of positions in the tree"""
        if not self.is_empty():
            for p in self._subtree_preorder(self.root()): 
                yield p
    def _subtree_preorder(self,p)->Iterator:
        """Generate a preorder iteration of positions in subtre rooted at p"""
        #this generates recusively the children an the main position p
        #we are only generating the position, we don't include the action itself
        yield p
        #the base case is when p is leaf
        for c in self.children(p):
            for other in self._subtree_preorder(c):
                yield other
    def positions(self) -> Iterator[Position]:
        """Generate an iteration of the tree's positions."""
        return self.preorder() #return entire preorder iteration

```

</details>

