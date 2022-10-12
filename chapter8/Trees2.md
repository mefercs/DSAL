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

