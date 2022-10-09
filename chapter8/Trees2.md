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

### PostOrder Tree traversal
It traverses recusively the subtrees rooted at the children of the 
root first, and then visits the root.

 ```
 Algorithm postorder(T,c): 
   for each child c in T.children(p) do 
     postoredr(T,c)
   perform the "visit" action for p
 ```

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

### Inorder Traversal of a Binary Tree
It can viewed as visition the nodes of T "from left to right"

![Inorder traversal representation]("https://www.techiedelight.com/wp-content/uploads/Inorder-Traversal.png")
