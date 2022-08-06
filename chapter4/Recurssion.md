# Recurssion
Is when a function makes one or more calls to itself.
- Factorial = The permutations of sequence.
- In python when a function is called a structure known as **activation record** or **frame** is created to store information about the progress.
- There is a different activation record for each active function call.

# File systems

- File-system directories = Folders

# Algorithm time complexity

We only account for each operation that is performed upon a particular **activation**.

- Amortization : Don't choose the worst case, use an "average".
  - It's not entirely the average <a href="https://yourbasic.org/algorithms/amortized-time-complexity-analysis/">Amortization meaning</a>
- Sometimes, is an inefficient way to solve a problem, we need to care when we execute twice recursssion within a problem,
it tends have a time complexity of $*O*(2^{n})$ which is one of the worst complexity times.

- Infinite recursion: When we don't reach a base case.
- We need to ensure, our recursion is in some way progressing toward the base case.
- The recursion depth of python is 1000.
  - but we can change it with the os module.
- **Linear Recursion** : at most one recursive call per function.

# Power O(log(n)) with recursion

```py
def power(x,n)->int:
    if n==0: 
        return 1
    else:
        partial = power(x,n//2)
        result = partial * partial
        if n%2==1: 
            result*=x
        return result
```

# Binary recursion
When a function uses 2 recursive calls

# Designing Recursive algorithms

- Test for base cases: It should not be a recursive call.
- Recur : It makes progress toward a base case.

# Parameterizing a recursion 
This is importand because adding extra parameters can save us more memory, and gain more efficiency.

# Tail recurssion
Any tail recursion can be implemented in a loop.


last was 180 of recurssion 
