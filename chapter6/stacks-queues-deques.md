- Abstract: Show the essential and hide the details.
- ADT: Abstract data type, means we know how to implement the data type, but we don't need to know how is working under the hood, because only need the functionality of that ADT.
- Adapter pattern: we use an existing class(to create an instance of that class), to implement our desired ADT.
- Always is more effecient initialize a list of length *n* than it is to start with an empty list and append *n* items.

## Create an specific error class

- 236 | 258 pair matching page

```py
class MyEmptyMethod(Exception): #Note it inherits from Exception class
  pass
```

# STACKS ADT 

- **LIFO (last-in, first-out)**

|Stack method|Realization with python list|
|---|---|
|`S.push(e)`|`L.append(e)`|
|`S.pop()`|`L.pop()`|
|`S.top()`|`L[-1]`|
|`len(S)`|`len(L)`|
|`S.is_empty()`|`len(L)==0`|
The space usage for a stack ADT in implemented with a list in python is O(n), and the complexity times are the same as a normal list.

## Implementations
- They can reverse data
- They can store a last ocurrence.

# QUEUES ADT

- **FIFO (first-in, first-out) - this means the first with more time waiting in the queue will be returned.**

