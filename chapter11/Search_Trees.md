* shift+i = go to definition in neovim.
* number + shift + d = go to specific line in neovim.
* TODO: Rehearse Template design pattern.
* TODO: Rehearse Factory method design pattern

## Binary Search Trees 11.1

- Inorder Traversal: traverse the tree just with the left nodes.
- Recursive traversal: Travese the right nodes.

- **11.1.3 Insertions and Deletions:**
  The Insertion is simple, we always add a node as leaf, but with
  deletion, is not as simply, if the node has 1 child, replace the
  node with that child, if it has 2, then we locate the predecessor
  for our current node ( r=before(p) ), then we replace the node
  for our current position p, with r which is the predecessor, and
  then we remove r on the previous position.

- **11.1.5 Performance of a Binary Search Tree: (480)** A binary tree is a good
  implementation of a map if the height is small.  in the best case
  the height is $h=\lceil log(n+1)\rceil-1$ . 
In the worst case the tree will have height *n* which is similar 
as a list implementation of the tree. That could happen if we 
introduce elements in increasing or decreasing order.

- **11.2 Balanced Search Trees**: 
  - Rotation: Is a operation to rebalance a binary tree.
  - Trinode-restructuring: we cosider x, its parent y and its grandparent z.
    - It is completed in O(1) time.
    Where the goal is to restructure the subtree rooted at z in order to reduce
    the path length to x and its subtrees. In practice it can be implemented in 2 ways:
    1. Single Rotation
    2. Double Rotation

- **11.2.1 Python Framework for Balancing Search trees**:
  - Hooks for rebalancing operations: 
    Hooks are included in the *delete* and *setitem* 
    functions, and also there is an special form for *getitem*, in a **splay tree**
    , to restructure the tree with the more frequent items to be closer to the root.
  - Nonpublic methods for rotating an restructuring: \
  - Factory for creating tree nodes: \

- **AVL trees** (481):    
  Is a binary tree with a rule that mantain logarithmic height worst-case (*height balance
  property*). Any binary tree that satisfies the height-balancing property is said to be
  an AVL tree.
  ![AVL tree example](https://learnersbucket.com/wp-content/uploads/2021/03/AVL-Tree-in-Javascript.png)  
  - height balance property: For every position p of T; the heigt of its children differ 
    by at most 1.

