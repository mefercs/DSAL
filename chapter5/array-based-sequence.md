# Array based sequence

* Read appendix A table.

- Amortized time complexity: is used for algorithms that have expensive operations that happen only rarely.
- Asymtotic analysis: Defines the mathematical boundation/framing of its run-time performance.
- 1 byte = 8 bits
Each byte of memory is associated with a unique number that serves as the address. Python keep track of the assoctiation between an identifier and a memory address.
- A character in a string uses 2 bytes of memory.Each location in an array is called **cell**. Every cell uses the same amount of memory.
- A higher level of abstraction means more simplicity.

To avoid list use the same amount of memory per element, python uses references to store data. In that way each element of the list can use their own bytes and avoid the same amount of memory principle from **arrays**.

- because a list stores **references** an object can be an element of 2 or more lists that reference the same object.
- With python slicing, we only create a list to the same references in range defined by the user.
- When the objects referenced are immutable there is no problem.
For example `temp[2]=14`, this doesn't change the object in cell 3, it only changes its reference to a different object in this case `15`.
  - another example `[0]*7` in python means 7 cells that references the same object, in this case the `0` object. This can't cause tons of problems because is an immutable object.

> **shallow copy** : a list that references the same objects of other list.

- The `list.extend(newList)` method from lists, only adds references to the original list. Thus `newList` and `list` share references.

- Compact arrays have more benefits over referencial structures in terms of performance.
Because there is no specific memory devoted to storage the sequence of memory references.
- we get actual number of bytes being used for the primary storage of any object, we use the `getsizeof` function of the  `sys` module
- With the `array` module we can create array type sequences. (Note they are not compact arrays, which can be created with the `ctypes` module)

```py
primes = array('i',[2,3,5,7,11,13,17]) #The 'i' means to indicate the type code.
# In this case integers.
```

## Dynamic array
Python's list follow this sleight hand, which always have a underlying array with a greater capacity than our actual lenght of the list.
For example when we create a 5 python list, python have reserved an underlying array with 8 elements length. When the new list is initialized the older one is reclaimed by the system.
- a 64-bit machine architecture, means  each memory address is a 64-bit number(i.e., 8 bytes)
- We literally change replace a full fixed list for another with a large number of space for references and retrieve the old list to the system.

## Python Lists Class
- Time operations for immutable lists and tuples 

|operation| running time|
|---|---|
|`len(data)`|O(1)|
|`data[j]`|O(1)|
|`data.count(value)`|O(n)|
|`data.index(value)`|O(k)|
|`value in data`|O(k+1)|
|`data1 == data2`|O(k+1)|
|`data[j:k]`|O(k-j+1)|
|`data1 + data2`|O(n1 + n2)|
|`c*data`|O(cn)|

#### Amortized operations
|Operation|Running time|
|---|---|
|`data[j] == val`|O(1)|
|`data.append(val)`|O(1) x|
|`data.insert(k,value)`|O(n-k+1) x|
|`data.pop()`|O(1) x|
|`data.pop(k)`|O(n-k+1) x|
|`data.remove(k) | del data[k]`|O(n) x|
|`data1.extend(data2) | data1+=data2`|O(len(data2))|
|`data.reverse()`|O(n)|
|`data.sort()`|O(nlogn)|

----

Always is better to use an appropieate python method, because they are natively implemented in a compiled language rather than python interpreter.

- For example `extend` vs `for - append`, extend is quite better, because it was designed to join 2 lists.
- Lists comprehension syntax is significantly faster than building the list  with a loop method and append.
- As well as `myList = [0]*n` is more efficient than a loop~append method.

- There is a problem working with string because they are immutable, i.e.:
```py
letters = ''
for c in document:
  if c.isalpha(): 
    letters += c
```
This is quite inneficient, because it consumes a O(n^2) instead O(n) as imagined, because always is created a new string object, to prevent this issue we can implement another method as showed next:
```py
temp = [] 
for c in document: 
  if c.isalpha():
    temp.append(c)
letters = ''.join(temp)
```
- Exists a **reference counts** in the python interpreter for each object to determine if catch it with the garbage collector.

## Multidimensional data sets
- Create a 2-dimensional array without referencing the second dimension with a single lists.
```py
data = [[0]*columns for _ in range(rows)]
```

Last page 224
R-5.5

