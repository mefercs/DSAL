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

- Aplications: Word count frequency
