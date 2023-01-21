## TYPED ARRAYS

We now specify the amount of memory we give to an array.

| Type              | Each Element size in bytes |
| ----------------- | -------------------------- |
| Int8Array         | 1                          |
| Uint8Array        | 1                          |
| Uint8ClampedArray | 1                          |
| Int16Array        | 2                          |
| Uint16Array       | 2                          |
| Int32Array        | 4                          |
| Uint32Array       | 4                          |
| Float32Array      | 4                          |
| Float64Array      | 8                          |

We can declare it directly with the next code:

```js
var i8 = new Int8Array(3); //a 8bits array with 3 slots
```

We can also also create a buffer to specify in bytes how much space we need to reserve in multiples of 2 :

```js
var byteSize = 6; //byte size
var buffer = new ArrayBuffer(byteSize);
var i8View = new Int16Array(buffer);
```

## STACK

They store data, in a way we can traverse it backwards, it follows a LIFO
type of service.

## QUEUE

They follow the FIFO principle.

## PRIORITY QUEUE

Is similar as a queue but the items have aditional information that specifies
their pritority, hence, they are inserted in the queue in a different manner.

## CIRCULAR QUEUE

It is queue with a fixed size to store items. It's useful for streaming media.

## SET

It is used to simple check the presence of an item.

## MAPS AND  HASH TABLES
