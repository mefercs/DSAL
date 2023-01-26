Dicts in python also known as maps or associative arrays. Python uses a dictionary
to represent each namespace.

# Map ADT

Important methods

| Method              | Action                                                                      |
| ------------------- | --------------------------------------------------------------------------- |
| `k in M`            | true if k is a key of M                                                     |
| `M.get(k,d=None)`   | return M[k] if k exists else returns d                                      |
| `M.setdefault(k,d)` | returns M[k] if k exists, else creates it and returns d                     |
| `M.pop(k,d=None)`   | removes K and returns M[k] if k exists else returns d or Error if d is None |
| `M.popitem()`       | Remove a random pair and returns it, Error if M is empty                    |
| `M.clear()`         | Remove all pairs                                                            |
| `M.keys()`          | Return a set-like view of M keys                                            |
| `M.values()`        | Return a set-like view of M values                                          |
| `M.items()`         | Return a set-like view of M pairs                                           |
| `M.update(M2)`      | M[k]=v for every (k,v) in M2                                                |
| `M==M2`             | True if M and M2 are identical pairs                                        |
| `M!=M2`             | True if M and M2 have not identical pairs                                   |

- Aplications:
  1. Word count frequency
  2. Categorizing data

# Hash tables

## Hash functions

Its goal is to map a key _k_ to an integer in the range of [0,N-1], where N is the capacity of the bucket array for a hash table.
That means with a hash function _h_, to store _h(k)_ in a bucket array(A) instead the key _k_,
in such way that _A[h(k)]_.

- Collision: when 2 items with the same hash value are in the same bucket.

We can view the evaluation of a hash function for a key _h(k)_ as 2 portions:

1. hash code: maps a key _k_ to an integer.
2. compression function: Maps the hash code into an integer within the range of indices [0,N-1] for a bucket array.
   We separate it with the porpuose of mantain the hash code independent of the hash table size.
   Just the compression function depends on the hash table size, the hash code can be used for
   a hash table of any size.

### Hash codes in python

`hash(<immutable_object>)` are just deemed immutable objects.
Just to ensure an hash code of an object
remains constant during its lifespan. As a
note **sets** use hash functions to store immutable
objects.

- If we use `hash(x)` is used with a mutable object, an error is raised.
- If we define `__eq__()`, then any implementation of `__hash__()` must be consistent.
  - Ex. "x==y" then "hash(x)==hash(y)"

### Compression Functions

The hash code is quite big to be suitable
for the bucket array, so we use a compression
function to map the hash code into a bucket
of [0,N-1] capacity. A good compression
functions is which minimizes the collisions
for a given set of distinct hash codes.

- Division method: maps an integer i to **i mod N**, it's more effective if it's an odd number.
- MAD method: Multiply-Add-and-Divide. It's more reliable than the past method, the probability of collisions is 1/N.
  - **[(ai+b)mod p] mod N**, where N is the size of the bucket, p is a prime number a and b are random numbers choosen from [0,p-1] with a>0 and i is the integer to map(the hash number).

## COLISION HANDLING SCHEMES

### Separate chaining

Is a simply way for dealing with collisions, where each bucket
A[j] store its own secondary container. This is the collision
resolution rule. In the worst case, the operations are proportional
to the size of the bucket items, if we have a good hash function
to index the n items of our map in a bucket of capacity N, each
bucket size is [n/N], So the core map operations run in O( [ n/N ] ).

The ratio $\lambda=n/N$ , also known as the **load factor** of the
hash table should be bounded by a small constant, prefarably below 1.
As long as $\lambda$ is O(1), the core operations should be run in O(1)
expected time.

### Open Addressing

This requires that the load factor is at most 1, and that items
are store in the cells of the bucket array itself.

- Linear Probing and its variants:
  - Linea Probing: If we try to insert an item (k,v) into a bucket A[j] where j=h(k) then we next try A[(j+1) mod N], if is also occupied then we try A[(j+2) mod N] and so on.
  - Quadractic Probing: Iteratively tries the buckets A[h(k)+f(i) mod N] for i=1,2,..., where f(i)=i^2, until finding and empty bucket.

The approach used by python to avoid clustering with open adressing
is to iteratively try buckets A[h(k)+f(i) mod N] where f(i) is
based on pseudo-random number generator. In python the load factor
enforcer <2/3.

## Load factors, rehashing and effeciency

- We should use load factors ($\lambda<1$) for hash tables using separate chaining.
- With a open addressing scheme with a linear probing we should mantain the load factor <= .5

When the load factor is exceeded is common to resize the table
to regain the lost load factor and reinsert all the objects
to the new table, even if we don't need to apply the hash function
we do need to apply a new compression function that takes in consideration
the new size of the table such process is known as **rehashing**.
It's a must, that the size should be at least the double of the original size when
rehashing.

### Efficency of hash tables.

If the hash function is good then we have expected the items to be
uniformly distributed in the N cells of the bucket array.

- Python works with dictionaries for store variables, functions, and all the stuff.

## Sorted Maps

If we want to store information with time stamps that would serve as a
reference for they key acting as an ID. It gives us the oportunity to
retrive efficently data according to the keys. They are useful when we
have time stamps or **ranges**.

- Exact Search: Look up the value for a given key.
- Sorted search tables: The map's items are store in a way that the keys are in increasing order.
  - With this approach we can use a binary search algorithm.

## Skip Lists 437

Is efficently in search an update operations, a Skip List S for a map M
consist in a series of lists, where each list stores a subset of the Items
of M sorted by increasing keys, with sentinels $-\infty$ and $+\infty$, and
layers also called **height**, where each item has 1/2 propability to stay on each
height. Due to ramdomization the time operations are just expected.

## Sets, multisets and multimaps 446

- Type inference: `x = type(int)()`: creates a concrete instance of the class listed in type() method.
  - In this way we can instance within the class itself.
  - `type(class)` returns a reference to that class, and `type(class)()` executes the contructor returned by `type(class)`
- Set: In essence is a map with just the keys. Unordered without duplicates collection. Indeed it's implementated using hash functions.
- Multisets(Bags): Set-like that allows duplicates.
- Multimap: The same key can be mapped to multiple values.

| Method | Action in set                                    |
| ------ | ------------------------------------------------ | ----------------------------------- |
| `S|T`  | Returns the union in a new set      |
| `S| =T`| Update S to be the union of S and T |
| `S&T`  | Returns a new set of the intersection of S and T |
| `S&=T` | Updates S to be the intersection of S and T      |
| `S^T`  | New set of the simmetryc difference              |
| `S^=T` | Updates S to be the simmetryc difference         |
| `S–T`  | New set with the elements in S but not in T      |
| `S–=T` | Updates S to be the elements in S but not in T   |
