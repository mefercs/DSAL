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
        parent = self.parent()
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

## Linked Structure for binary trees

> NODE REPRESENTATION



