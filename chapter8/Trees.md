# TREES

## GENERAL TREES

Is an ADT that stores elements hierarchically. With the exception of the top element, each element of the tree have a *parent* element and zero or more *children* elements. Tipacally we call the top element the **root**  of the tree.

Being a **tree** T, as a set of nodes storing element having a parent-child relationship:
- If T is nonempty, it has a **root** element that has no parent.
- Every node has a parent *w*, and each node with parent *w* is a child of *w*.
- 2 nodes of the same parent are **siblings**.
- A node is **external** if it has no children, also known as **leaves**.
- A node is **internal** if it has one or more children.
- A subtree is the tree consisting in all the descendants of v in T( Including v itself ).
- An **Edge** is a pair of nodes (u,v) such that u is the parent of v or viceversa.
- A **path** is like the paths in linux. Ex. /home/mefercs/Documents/CodeExamples/notes/DSAL/chapter8/Trees.md
- A tree is ordered, when there is a well-defined order between the children of each node.

### THE TREE ADT
We define a tree using **Positions** that satisfy parent-child relationships of a tree.
Accessors methods for a tree

| Tree method | Meaning |
|---|---|
| `T.root()` | Return the Root position of T or None if empty |
| `T.is_root(p)`  | True if *p* is the root of the tree *T* |
| `T.parent(p)` | Return the parent of *p* or None if it's the root |
| `T.num_children(p)` | Number of children of position *p* |
| `T.children(p)` | Generate an iteration of the children of **p** |
| `T.is_leaf(p)` | True if *p* doesn't have any children |
| `len(T)` | Number of elements contained in **T** |
| `T.positions()` | Generate an iteration of all **positions** of the tree **T** |
| `iter(T)` | Generate an iteration of all **elements** stored within T |

- All the methods that accept a position return a `ValueError` if that position is invalid for T.

### Tree Abstract Base class

<details>
<summary>
  Tree Abstract Base Class
</summary>

```py
class Tree:
    """Abstract base class representing a tree structure"""
    class Position:
        """ Abstraction that represents the location of a single element """
        def element(self)->None: 
            """ Returns the element stored in this Position"""
            raise NotImplemented("must be implemented by subclass")
        def __eq__(self,other) -> bool:
            raise NotImplemented("must be implemented by subclass")
        def __ne__(self,other) -> bool:
            return not (self==other)
    def root( self ):
        """Returns the Root Position or None if the Tree is empty"""
        raise NotImplemented("must be implemented by subclass")
    def parent( self , p ):
        """Return the parent Position or None if p is root"""
        raise NotImplemented("must be implemented by subclass")
    def num_children( self , p ): 
        """Return the number of children that Position p has"""
        raise NotImplemented("must be implemented by subclass")
    def children( self , p ): 
        """Generate an iteration of Position representing p's children"""
        raise NotImplemented("must be implemented by subclass")
    def __len__(self): 
        """Total number of ELEMENTS of the Tree"""
        raise NotImplemented("must be implemented by subclass")
    def is_root(self, p) -> bool: 
        """True if Position p is the Root of the Tree"""
        return self.root() == p
    def is_leaf(self,p) -> bool: 
        """True if position p doesn't have any children"""
        return self.num_children(p) == 0
    def is_empty(self):
        """True if the tree is empty"""
        return len(self) == 0
```

</details>

### Depth and height

- **DEPTH**: Number of ancestors of **p** excluding p itself(Being p a position of a node of a treee T).
  - Recursively is defined by: 
    1. If p is the root, then the depth of p is 0.
    2. Otherwise, the depth of p is one plus the depth of the parent of p.
  - Runs in O(n) worst case time, where n is the total number of nodes in a T branch.

<details>

<summary>Implementation code</summary>

```py
def depth(self, p):
  if self.is_root(p):
    return 0 
  else:
    return 1 + self.depth( self.parent(p) )
```
</details>

- **HEIGHT**:
  - The height of a nonempty tree is the height of the *root* of T, with a position **p** we don't take in count the position itself.
  - Recursively defined by: 
    1. If p is a leaf, then the height of p is 0.
    2. Otherwise, the height of p is one more than the maximum of the heights of p's children.


## BINARY TREES

Is an ordered tree with the following properties: 
  - Every node has at most 2 children.
  - Each child node is labeled as being either *left child* or a *right child*.
  - A left child precedes a right child in the order of children of a node.
- A binary tree is consired **full** or **proper** if its nodes has exactly 2 or 0 children, otherwise it's called improper.
- An example is a **decision tree** which consists on yes/no questions.

A binary tree Recursively consists on: 
- A node r, called the root of T , that stores an element
- A binary tree (possibly empty), called the left subtree of T
- A binary tree (possibly empty), called the right subtree of T

<details>

<summary>Binary tree base class</summary>

```py
class BinaryTree(Tree): 
    """Abstract base class representing a binary tree structure"""
    def left(self,p): 
        """Return a Position representing p's left child or None if p doesn't have a left child"""
        raise NotImplementedError('must by implemented by a subclass')
    def right(self,p): 
        """Return a Position representing p's right child or None if p doesn't have a right child"""
        raise NotImplementedError('must by implemented by a subclass')
    def sibling(self, p): 
        """Return a Position representing p's sibling (or None if no sibling)"""
        parent = self.parent(p)
        if parent is None:
            return None #p is the root
        else:
            if p == self.left(parent):
                return self.right(parent)
            else:
                return self.left(parent)
    def children(self,p): 
        """Generate an iteration of Position representing p's children"""
        if self.left(p) is not None:
            yield self.left(p)
        if self.right(p) is not None:
            yield self.right(p)
```

</details>

### Binary tree Abstract data type

|Method|Meaning|
|---|---|
| `T.left(p)` |Return the position of the left child of p, or None if p is empty|
| `T.right(p)` |Return the position of the right child of p, or None if p is empty|
| `T.sibling(p)` | Return the position of p's sibling, or None if p has no siblings|

## IMPLEMENTING TREES

### Linked Structure for binary trees


|Method|Action|
|---|---|
|`T.add_root(e):`|Create the root and return a *Position* or error if already exists|
|`T.add_left(p,e):`|Returns a *Position* left child of p, or error if already exists|
|`T.add_rigth(p,e):`|The same as `add_left(p,e)` but to the right|
|`T.replace(p,e):`|Replace and return the old element with `e`|
|`T.delete(p):`|Remove the node at position P replacing it with its child if any or error if has 2 children|
|`T.attach(p,Tree1,Tree2):`|If p is a leaf then Tree1 and Tree2 are attach as subtrees to the left and right child respectively|

<details>

<summary>COMPLETE LINKED BINARY TREE IMPLEMENTATION</summary>

```py

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
        def __init__(self, element=None, parent=None, left=None, right=None) -> None:
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
    def parent(self, p) -> Position|None: 
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
    def num_children(self, p) -> int:
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
    def _attach(self,p:Position,t1,t2):
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
```

</details>

### Array-based representation of a binary tree

Were we number the position of T. For every position *p*  of T, let $f(p)$  be the integer defined as follows.
- If *p* is the root of T, then $f(p)=0$
- If *p* is the left child of *q* then $f(p)=2f(q)+1$
- if *p* is the right child of *q* then $f(p)=2f(q)+2$
- The parent of position *p* is $\lfloor (f(p)-1)/2 \rfloor$
The funtion *f* is known as **level numbering**, they are not necessarily consecutive, becasue there are nodes that has no children. They follow a *potenttial* sequence.

