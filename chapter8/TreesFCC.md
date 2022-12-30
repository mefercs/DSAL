# Tree 

Contain nodes, which points to other nodes

- Root: A node that has no parent.
- Leaf: A node that has no children.

# Binary tree

- Every node has at most 2 children.
- Exactly 1 root.
- Excatly 1 path b/2 root and any node.
- Empty tree: is also an binary tree.

## Depth first traversal

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

## Breath first traversal

We go layer by layer, instead to go deeper. We can get it with a Queue.
The time complexity is assuming a O(1) removing and adding Queue operations.
- Time complexity is: O(n) 
- Space complexity is: O(n)
where n is the number of nodes

It is better to use an iterative way to implement this algorithm.

```py 
def breathFirstValue(root:Node|None)->list[Any]:
    if root is not None:
        queue: list[Node] = [ root ]
        elements : list[Any]= []

        while len(queue)>0: 
            current : Node = queue.pop(0)
            elements.append(current.element)
            if current.left is not None: 
                queue.append(current.left)
            if current.right is not None:
                queue.append(current.right)

        return elements

    else:  #If root doesn't exist
        return []
```

## Tree Includes

We just need to use a traversal algorithm, to check a node contains our element, if so, then we stop the 
traversal.
- where n = # of nodes, the algorithm has a complexity time of: O(n), and the same with space complexity: O(n)
- We have 2 cases match(true) case, and null node(false) case.

- We can use the Implementation with a Depth first traversal, and when we find the number we return True

## Tree sum
```js
const treeSumRecursiveJS = (root) => { 
  if (!root) return 0; 
  return (root.element?root.element:0) + treeSum(root.left) + treeSum(root.right)
}


const treeSumIterativeJS = (root) => { 
  if (!root) return 0; 
  const stack = [root]
  let result = 0;
  while ( stack.length > 0 ){ 
    const current = stack.pop()
    current.element? result+=current.element:result+=0;
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  } 
  return result
}
```
```py
def treeSumRecursive(root:Node|None) ->int:
    if root is None:
        return 0
    return (root.element if root.element is not None else 0) + treeSum(root.left) + treeSum(root.right)

def treeSumIterative(root: Node|None) -> int:
    if root is None:
        return 0 
    stack:list[Node] = [root]
    result : int = 0
    while len(stack)>0:
        current:Node = stack.pop()
        element:int|None = current.element
        if element is not None:
            result += element
        if current.left is not None:
            stack.append( current.left )
        if current.right is not None: 
            stack.append( current.right )
    return result
```

## Minimum value of the tree 1:34:14 was the last stamp

```js
const treeMinimum = (root) => { 
  if (!root) return Infinity;
  const element = root.element?root.element:Infinity;
  return Math.min(element, treeMinimum(root.left), treeMinimum(root.right))
}
```

```py
def returnMin (root: Node|None)->int: 
    if root is None:
        return 99999;
    element:int = root.element if root.element is not None else 99999
    return min([element,returnMin(root.left), returnMin(root.right)])
```

## Max root to leave path sum
We start from the leaves, and scale up each layer, camparing between left and right children.

- Js implementation
```js
const returnMaxSumPath = (root) => { 
  if (!root) return 0
  return root.element + Math.max( returnMaxSumPath(root.left), returnMaxSumPath(root.right) )
}
```
- Python implementation 
```py
def returnMaxSumPath( root: Node|None ) -> int: 
    if root is None: 
        return 0
    return (root.element if root.element is not None else 0) + max( returnMaxSumPath(root.left), returnMaxSumPath(root.right))
```
