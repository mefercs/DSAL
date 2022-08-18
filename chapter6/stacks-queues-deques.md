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
|`S.top()`|`L[-1]` - is like the visualization |
|`len(S)`|`len(L)`|
|`S.is_empty()`|`len(L)==0`|

The space usage for a stack ADT in implemented with a list in python is O(n), and the complexity times are the same as a normal list.

## Implementations
- They can reverse data
- They can store a last ocurrence.

# QUEUES ADT

- **FIFO (first-in, first-out) - this means the first with more time waiting in the queue will be returned.**
The **access and deletion** -operations are restricted to the first element in the queue, and the **insert** operations is restricted to the back of the sequence.

|Queue methods|Realization with python list|
|---|---|
|`Q.enqueue(e)`|`basic` - adds element at the end|
|`Q.dequeue()`|`basic` - returns the first element of the front, or an error if the list is empty|
|`Q.first()`| - Returns a reference to the first element|
|`Q.is_empty()`| - true if is empty|
|`len(Q)`| - Return the elements within|
Implenting this ADT is more inneficient than a normal stack ADT, for example in a stack, the list contains the same lenght as the stack, but en queues, the python list can contain more elements than the queue, if we are often using 
dequeue and enqueue methods.

#### implement a queue
- We can use an extra index(to implement this ADT), to follow the current front, and replacing a reference in the queue with a reference to `None`.
- We can use an array circularly: We use a current index of the f:**front** and also the array should have a fixed length, which we'll use to create a circular behavior with the next formular $f=(f+1)$%length
  - The formula will loop when we pass the last index element, and start from 0.
  - At the end we keep track of the `data`(reference to a list instance),`size`(current number of element within the QUEUE) and `front`(index of the first element of the QUEUE) variables.
- `None` allows python to claim for unused memory. Because python internally have a references counts, and when this reaches zero the object is inaccessible, thus the system reclaims that memory for future use.
- When resizing we reallocate our old data because the arithmetic formula could have flaws.
* All the time complexities are O(1), except for `enqueue()` and `dequeue` which have an amortized O(1) but O(n) worst case.
