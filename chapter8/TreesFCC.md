# Tree 

Contain nodes, which points to other nodes

- Root: A node that has no parent.
- Leaf: A node that has no children.

# Binary tree

- Every node has at most 2 children.
- Exactly 1 root.
- Excatly 1 path b/2 root and any node.
- Empty tree: is also an binary tree.

# Depth first traversal

We must go deeper in the tree until we can't anymore and then 
we can go across. We can get it with a stack 
- Time complexity is: O(n) 
- Space complexity is: O(n)
where n is the number of nodes

```py
def depth_first_value(root: Node)->None:
    """Depth first traversal algorithm"""

    stack : list[Node] = [root]

    while len(stack)>0:
        current : Node = stack.pop()
        print(current._element)
        if current._right is not None: 
            stack.append(current._right)
        if current._left is not None: 
            stack.append(current._left)

def depthFirstTraversal(root):
  """This is the recursive form"""
  if root is None: 
    return []
    leftValues = depthFirstTraversal(root.left) 
    rightValues = depthFirstTraversal(root.right)
  return [root.element, *leftValues, *rightValues]
```

# Breath first traversal

We go layer by layer, instead to go deeper. We can get it with a Queue.
The time complexity is assuming a O(1) removing and adding Queue operations.
- Time complexity is: O(n) 
- Space complexity is: O(n)
where n is the number of nodes
