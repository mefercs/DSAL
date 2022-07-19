# Object oriented 

In python there is a similar spread operator as JS( ... ), called splat operator ( * ), and it is used to package and unpackage values.

```py
#unpacke example
numbers = [1,2,3,4,5]
n2 = [ *numbers ] # n = [1,2,3,4,5]

#package example 

first, *middle, last = "Hello World"
# middle = "ello Worl" | first = "H" | last = "d"
```


