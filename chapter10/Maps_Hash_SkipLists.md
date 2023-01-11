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
  - **[(ai+b)mod p] mod N**, where N is the size of the bucket, p is a prime number a and b are random numbers choosen from [0,p-1] with a>0 and i is the integer to map.

### Separate chaining
Is a simply way for dealing with collisions, where each bucket
A[j] store its own secondary container. This is the collision
resolution rule. In the worst case, the operations are proportional
to the size of the bucket items, if we have a good hash function
to index the n items of our map in a bucket of capacity N, each
bucket size is [n/N], So the core map operations run in O( [ n/N ] ).
The ratio $\lambda=n/N$
