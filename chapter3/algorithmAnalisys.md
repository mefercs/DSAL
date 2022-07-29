# Algorithm analisys
- **Data structure** is a systematic way of organizing and accessing data.
- **Algorithm** is a step-by-step procedure for performing some task in finite amount of time.

# TIME OPERATIONS

<a href="https://wiki.python.org/moin/TimeComplexity#list">Python Time Complexities</a>

| OPERATION | TIME OPERATION |
|---|---|
| len(data) | O(1) |
| data[index] | O(1) |
| sorted(data) | nlog(n) |


- References to a list's elements are stored in continous blocks of memory.
  -` A = [0] *n` has O(n)

# THE SEVEN MAIN FUNCTIONS
- **CONSTANT FUNCTION** -> f(n) = c. A fixed constant. They are basic operations in a computer.
  - i.e. 2,5,7,8,1000, operations. 
- **LOGARITHM FUNCTION** -> f(n) = log_b(n), where b = base, it is quite common to use b = 2. In algorithms we omit the base supossing it is 2.
  - In Algorithms we use log(n) as log_2(n).
  - This works if and only if `b^2 = n `
    * log_b(ac) = log_b(a) + log_b(c) 
    * log_b(a/c) = log_b(a) − log_b(c)
    * log_b(`a^c`) = c * log_b(a)
    * log_b(a)= log_d(a)/log_d(b)
    * `b^log_d(a)`= `a^log_d(b)`
- **LINEAR FUNCTION** -> f(n) = n, represents a basic operatio for each element.
- **N log(N) FUNCTION** -> f(n) = nlog(n) : Each element it's executed by log(n) times.
- **THE CUADRATIC FUNTION** -> f(n) = n^2 : That means each element it's executed n times. N^2 operations.
- **CUBIC FUNCTION** -> f(n) = n^3 
- **EXPONENTIAL FUNCTION** -> f(n) = b^n : The number of operations is incresing b times for each iteration.
  - 1 + 2 + 4 + 8 + · · · + 2^(n−1) = 2^(n) −1,

|constant|logarithm|linear|nlog(n)|quadratic|cubic|exponential|
|---|---|---|---|---|---|---|
|1|log(n)|n|nlog(n)|n^2|n^3|a^|

Where a > 1 constant.

## Primitive operations (constant execution time)
Like a number 3 or 5 execution. O(1). With a fixed number of primitive operations.

- Assigning an indentifier to an object.
- Determining the object associated with an identifier.
- Performing an arithmetic operation.
- Comparing 2 numbers
- Acessing a SINGLE element of a python list by index.
- Calling a function (excluding the operations executed by the function).
- Returning by a function.

Sometimes treat it as f(n). Where n is the input size. And to analyze Algorithms we use the **worst-case**.

We analyzy with a system that disregards the constant factors.

## The BIG-Oh notation

We say f(n) is O(g(n))  if exist a real constant c>0 where f(n) <= cg(n) and also n>=n0 where n0>=1
```diff
- 8n + 5 is O(n)
Because there is a constan c and n0 in such a way that O(n) >= 8n + 5, for example c =13 and n0=1
8(1)+5 <= 13(1) => 13=13 which is true
- 5n^4 + 3n^3 + 2n^2 + n + 2 is O(n^4) 
```
It's used to give a global reference of the functions that describes the execution times for a data set.

## Big-Omega
Is just the O(n) opposite.

## Big-Theta
To say 2 functions grow at the same rate.

---

One way to prove our claims is sometimes given an example, or the non-existence of a counterexample.
We can prove also with "contra" attack, for example the normal way to say "if q is not true, then p is not true".

---

## Justification Techniques

* Example: Let a and b be integers. If ab is even, then a is even or b is even.
Justification: To justify this claim, consider the contrapositive, “If a is odd and
b is odd, then ab is odd.” So, suppose a = 2 j + 1 and b = 2k + 1, for some integers
j and k. Then ab = 4 jk + 2 j + 2k + 1 = 2(2 jk + j + k) + 1; hence, ab is odd.

* Contradiction: Stablisht that statement `q` is true by first supposing `q` is false.
* Induction: Start with something known to be true, and then proves that for a `n` amount is true.
  - We first start with n=1, then for n=2,3,4,5...k, then we justify that the inductive step is true for n>k.
    -  we show “if q(j) is true for all j < n, then q(n) is true.”
```diff
- REHEARSE INDUCTION
```

* Loop invariants

