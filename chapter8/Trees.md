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

| Accessors |
| Tree method | Meaning |
|---|---|
| `T.root()` | Return the Root position of T or None if empty |
| `T.is_root(p)`  | True if *p* is the root of the tree *T* |

