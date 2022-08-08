# Array based sequence

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


