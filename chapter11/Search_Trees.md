## Binary Search Trees 11.1

- Inorder Traversal: traverse the tree just with the left nodes.
- Recursive traversal: Travese the right nodes.

- 11.1.2 Searches:
- 11.1.3 Insertions and Deletions:
  The Insertion is simple, we always add a node as leaf, but with
  deletion, is not as simply, if the node has 1 child, replace the
  node with that child, if it has 2, then we locate the predecessor
  for our current node ( r=before(p) ), then we replace the node
  for our current position p, with r which is the predecessor, and
  then we remove r on the previous position.
- 11.1.4 Python implementation:
- 11.1.5 Performance of a Binary Search Tree: A binary tree is a good
  implementation of a map if the height is small.  in the best case
  the height is $h=\lceil log(n+1)\rceil-1$
