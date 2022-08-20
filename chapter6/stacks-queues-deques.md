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

<details>

<summary>Adapted pattern with a list of a queue.</summary>

```py
class Empty(Exception):
    pass

class Queue:
    DEFAULT_CAPACITY = 10 
    # Here we defined the queue with the default size
    def __init__(self) -> None:
        self._data = [None]*Queue.DEFAULT_CAPACITY
        self._size = 0  # that means there is no elements stored
        self._front = 0 # the front starts at 0 index
    def __len__(self):
        return self._size
    def is_empty(self):
        return self._size == 0
    def first(self):
        if self.is_empty():
            raise Empty('Queue is empty')
        return self._data[self._front]
    def dequeue(self):
        if self.is_empty():
            raise Empty('Queue is empty')
        answer = self._data[self._front]
        self._data[self._front] = None
        self._front = (self._front+1)% len(self._data)
        self._size -= 1
        if 0< self._size < len(self._data)//4:
            self._resize(len(self._data)//2)
        return answer
    def enqueue(self, e):
        if self._size == len(self._data):
            self._resize(2*len(self._data))
        avail = (self._front + self._size) % len(self._data)
        self._data[avail] = e
        self._size+=1
    def _resize(self,cap):
        old = self._data 
        self._data = [None]*cap
        walk = self._front
        for k in range(self._size):
            self._data[k] = old[walk]
            walk = (1+walk)%len(old)
        self._front = 0 
```
</details>

- We can use an extra index(to implement this ADT), to follow the current front, and replacing a reference in the queue with a reference to `None`.
- We can use an array circularly: We use a current index of the f:**front** and also the array should have a fixed length, which we'll use to create a circular behavior with the next formular $f=(f+1)$%length
  - The formula will loop when we pass the last index element, and start from 0.
  - At the end we keep track of the `data`(reference to a list instance),`size`(current number of element within the QUEUE) and `front`(index of the first element of the QUEUE) variables.
- `None` allows python to claim for unused memory. Because python internally have a references counts, and when this reaches zero the object is inaccessible, thus the system reclaims that memory for future use.
- When resizing we reallocate our old data because the arithmetic formula could have flaws.
* All the time complexities are O(1), except for `enqueue()` and `dequeue` which have an amortized O(1) but O(n) worst case.
* The space complexity is O(n)

# DECK ADT
- It's like a combination of a stack and a queue.
Supports deletion and inserting in both, front and the back of the queue.

|Deck method||
|---|---|
|`D.add_first(e)`|Add element to the front of D|
|`D.add_last(e)`|Add element to the back of D|
|`D.delete_first`|Remove and return the first element|
|`D.delete_last`|Remove and return the last element|

DECK ADT accessors

|`D.first()`|Retreive a reference, doesn't remove|
|`D.last()`|Retreive a reference, doesn't remove|
|`D.is_empty()`| True if it's empty|
|`len(D)`||
