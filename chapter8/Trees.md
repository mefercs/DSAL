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


| Position Method | Meaning |
|---|---|
| `p.element()` | Return the element on stored on **p** |
|  |  |

Accessors methods for a tree

| Tree method | Meaning |
|---|---|
| `T.root()` | Return the Root position of T or None if empty |
| `T.is_root(p)`  | True if *p* is the root of the tree *T* |
| `T.parent(p)` | Return the parent of *p* or None if it's the root |
| `T.num_children(p)` | Number of children of position *p* |
| `T.children(p)` | Generate an iteration of the children of **p** |
| `T.is_leat(p)` | True if *p* doesn't have any children |
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
```

</details>
