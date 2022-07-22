# Objects in Python
<details>
<summary>
</summary>
</details>

The identifiers are similar as assign by reference. They work with memory address of the object.
An identifier can be associated with any type of object and has no declared type, the object which it refers have the definite type.
So when we do something like *var1=var2* they will point to the same reference and when we change the var1 this will not affect to var2.
<details>
<summary>
Instantiation
</summary>
Create a new instance of a class, invoking his constructor.
</details>
<details>
<summary>
Literal Instantiation
</summary>
The variable assignation in python is made by the Literal Instantiation, for example 

```py
var1 = 20.3
#instance of float(), because *everything* in python is an object
```

</details>
<details>
<summary>
Methods
</summary>
Member functions of a class.
</details>
<details>
<summary>
*Accessors* and *Mutators*
</summary>
- Accessors: Don't chage the object state.
- Mutators: Do change the states of an object. Also known as update methods.
</details>
<details>
<summary>
What does *immutable class* mean?
</summary>
That means each object of that class have a fixed value upon Instantiation.Altough an identifier referencing that object can be changed.
</details>

|CLASS|IMMUTABLE|
|-------|------|
|bool|x|
|int|x| 
|float|x| 
|list||
|tuple|x|
|str|x| 
|set||
|frozenset|x|
|dict||
|chr|x|

#### Bool class

The default constructor (bool()) returns false and we can create a bool value with bool(*value*), 
with numbers bool() returns *true* if nonzero also strings, lists nonempty.

#### Int Class

The default constructor *int()* can be used to convert to a int type; for example int("3") == 3 or int(3.2) == 3. 
If we use a string that is not supposed to be a number, python will throw a *ValueError*.
- Convertion to another base (binary, ex, oc...) can be done with int("number",base)
  - Ex. int("7f",16) == 127

#### Float Class

As well as int(), this tries to return the equivalent float-value when we use the constructor with a value.
But this doesn't work with strings.

#### List Class

It stores a *sequence of references* to its elements, the constructor *list()* can accept any parameter of an *iterable* type.
- Iterable examples strings, list, tuples, sets, dictionaries, Ex. list("hello") will produce ['h','e','l','l','o']

#### Tuple Class

Immutable sequence. The literals are within *()*, and to put a single element we need to use a comma, otherwise this will be interpreted as a number with ().
Ex. (18,) != (18)

#### Str Class

Immutable sequence of characters. And are more compact than list and tuple.
- To use reserved characters we use a slash.

#### Set and frozenset Classes

- Set : Collection without duplicates. It has a highly optimize method to check if a element is in the set.
  - Without elements order.
  - We can store only *immutable* objects.
  - Set literals are with *{}*.
  - The constructor is similar as list(), ex. set("hello") = {'h','e','l','o'}

#### Dict Class

We can use the constructor :-> *dict(pairs)* where pairs is = [( ga , Irish ), ( de , German )]

# Expressions, Operators and precedence
- is = same identity
- is not = different identity
- == : equivalent
- != : not equivalent
*is* is like ===.
- // : integer division
- % : modulo
- val *in* s : containment check
- val *not in* s : non-containment check
- *del* s[n] : removes the n element of the list.
- s1 | s2 the union of s1 and s2
- s1 & s2 the intersection of s1 and s2
- s1 − s2 the set of elements in s1 but not s2
- s1 ˆ s2 the set of elements in precisely one of s1 or s2

#### Chaining comparasion
```py
1 <=x+y <= 10 
#is equals to
1<=x+y and x+y<=10 

#Had we written in the opposite order, data[j] would eventually rise IndexError
while j < len(data) and data[j] != X :
j += 1
```
#### Difference between += and = 
For list += will change the original array for an alias, and  = will asign the alias only.
`This only happens with a mutable object such as a list`

```py
alpha = [1, 2, 3]
beta = alpha # an alias for alpha
beta += [4, 5] # extends the original list with two more elements
beta = beta + [6, 7] # reassigns beta to a new list [1, 2, 3, 4, 5, 6, 7]
print(alpha) # will be [1, 2, 3, 4, 5]
```
#### Control flow
If in a if,elif,else; the first if condition is succeded,no other elif's,else will be executed.
In the other hand a body of if,if,if,if; All will be checked even with the first if codition succeded.
#### Loops
- break :  immediately terminate the loop.
- continue : Current iteration stops.

# FUNCTIONS
An activation record is activated within a function, which includes a namespace to manage the local scope.
An identifier within a function has no relation with any identifier outside the local scope. Altought identifirs in different scope can be the alias for the same object.
## Return statement
A return statement without an argument, returns the *None* value. If return statement no specified within a function, at the function's end a *None* will be returned.
### Information passing
- Formal parameters : Identifiers with expected parameters.
- Actual parameters : Parameters sent by the caller.
`An advantage to Python’s mechanism for passing information to and from a
function is that objects are not copied`, that means they are passed by reference, they can mutate the original data if they original data is passed as parameter.
#### Mutable parameters.
To break a reference to a mutable object, we only need to reassign a variable assigned to a mutable object.
#### Default parameter values
Known as *polymorphic*, which are functions with predifined parameter values.

```py
def foo(m,i=0,you="crack"):
#But is illegal if we don't define subsequence defined values, ex. 
def foo(m, a,i=0, x, y =19) #x must continue with the defined paramters
```

#### Keyword argument
 A keyword argument is specified by explicitly
assigning an actual parameter to a formal parameter by name.For example, with
the above definition of function foo, a call foo(c=5) will invoke the function with
parameters a=10, b=20, c=5.
#### Built in functions
- char() : is a character encoding
- round(), pow(), abs(), divmod()
- reversed(), all(), any(), map()
- iter(), next()
- isinstance()
- hash()
- id()
- type()
#### Files
open() tries to open a file and retuns a proxy.
- MODES 
    - r : read
    - w : write (overwrites the entire file)
    - a : append
    - FOR BINARIES
    - rb 
    - wb
### Exception handling
To raise and exception we use the *raise*  keyword

```py
raise ErrorType("message") #raise an instance of a error type
#We can use the "sorry" philosophy with try-except
try: 
  #code...
except ErrorName: #It should be an idenfied error
  #do something
```
Because erros are objects that can be examined we can assign it an identifier
```py 
try:
  #code...
except ErrorName as e:#we caught the error with the identifier with "e"
  #code...

#We can also wrap multiple error instances with a parenthesis/tuple
try:
  #code...
except (ValueError, EOFError):
  #code...
```
*e* denotes the instance of the ErrorName exception that was thrown, with this except we can skip the remainin error. It's useful to know it. Or also we can pass the specific error with `pass`, in a iteration for example.
- If we don't know an error, or is an exceptional error we use `except:` and `finally:`

### Iterators and Generators

We have 2 mechanism for iteration, based in the following conventions:
- Iterator: Is an object that manages an iteration through a series of values.
- Iterable: Is an object, that produces an iterator via the syntax **iter(obj)**.
We can convert the list() to an iterator(because by default is an iterable), with the syntax iter(list_instance),
this is the for-loop's modus operandy. 
- It doesn't produce a copy of its own elements, instead mantains a current index into the original list.
- the range() produces its values one at a time, such a **lazy evaluation**.

#### Generators

They are used to create iterators. To create a generator, instead of **return** we use a **yield**. In a for loop, the generator will allow to continue when the yield's generator statement indicates the next value. Before that point, the procedure is temporary interrupted. 
- That is, result are computed only when requested.
- We can create an iterable(list, set, dict, str) with the generator, using the iterable constructor.
```py
iterable = list(generator)
iterable2 = set(generator)
```

# Conveniences

#### Conditional Conveniences

This is similar with ternary statement

```py
expr1 if condition else expr2
```

We can use it as a parameter in a function.

#### Comprehension Syntax

```py
my_list = [returned for element in iterable if condition]
my_dict_way = { k : k*k for k in range (1,n+1) }
```
retuned and conditin depends on element, but if-clause is optional.
And to produce a different iterable, we only need to change between (),[],{}.
- Take advantage for this feature, we can use it like a map() function.

#### Packing and unpacking of sequences 

Large amount of comma separated data, is treated as a tuple, even with no enclosing parenthesis.
```py
data = 2,4,56,6
#This is called automatic packing, and in the other hand we have unpacking.
a,b,c,d = range(7,11)
a,b,c,d = [1,2,3,4]
```

The `return x,y` returns a tuple (x,y) which can be unpackaged. 
The unpacking could be realised with any iterable type. 

```py
#This could be made in loop as well.
for x,y in [(7,2),(5,8),(6,4)]
for x,y in myMap.items()
```

#### Simultaneous Assignments

- Ex. `x,y,z = 6,5,3`
The right-hand side is first converted to a tuple, and then unpackaged.
* This give us the swapping advantage, ` x,y = x,y`
```py
temp = x
x = y 
y = temp
```
Is saving us the temp stuff.

#### Scopes and names

* Namespace : Variables, functions, classes of the current scope. Is a dict(python dictionary) of the objects of the current scope.
Python implements a namespace with its own dictionary that maps each identifying string (e.g., n ) to its associated value.
- To know the variables of the current scope we use the `dir()` method, which returns the current scope variables.
- To know the entire dictionary we use `vars()` method, is the dir() complete version.

#### First class objects

Instances that can be assigned to an identifier, passead as a parameter or returned by a function.

```py
scream = print
scream( "hello" )
#For example in max()
max( a , b , key=abs )
#key is an identifier assigned to the function abs
```

The scream example, now, it's introduced to the current namespace/scope with its value being the object `<build-in function print>`.
- The same concept is with classes.

#### Modules and import statement

Python's **import** statement loads object definitions from a module into the current namespace.

Even that namespace ~= scope because sometimes they mean something different.
* Please avoid the `from module import *` statement because it could cause objects' name conflict.
A module also is an object, namely first-class object.
* with `import math` we can avoid objects' name conflicts.
* Top-level commands : Anything with 0 identation.
* In python top-level statements are named as `__main__`. Even the inner functions are executed in the top-level scope `__main__`.
* `__name__` contains the scope of the code being executed as a string.
* `if __name__ = __main__:` : is a construct that embeds command within the module if the module is invoked as a script but not when the module is importent from another script.

#### Pseudo-Random Number generation

* `seed` is the place where the random number generator starts, the sequence generaterd for a given seed will always be the same.
- `choice(data)` returns a random element of the given sequence.
- `shuffle(data)` reorders pseudo-randomly.
