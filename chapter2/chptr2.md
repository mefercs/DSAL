# Object oriented 
- instance variables : created with self. 
- class variables : defined in the class namespace.
- `__init__` is a method executed as soon as an object of a class is instantiated.
- Protected member uses a single underscore `_memberName`
- Private member uses double underscores `__memberName`
- In python there is a similar spread operator as JS( ... ), called splat operator ( * ), and it is used to package and unpackage values.
- `_` allow us to throw values we are not going to use. Also in numbers literals(instantiation) we can use it for readability.
  - i.e. `x = 10_000_000_000`
- `__` is for only class use, because it tells the python interpreter to rewrite the name to avoid conflict with a subclass.
  - so, python interpreter changes the `__originalName` to `_className__originalName` this is known as the Mangling this is known as the Mangling.

```py
#unpacke example
numbers = [1,2,3,4,5]
n2 = [ *numbers ] # n = [1,2,3,4,5]

#package example 
first, *middle, last = "Hello World"
# middle = "ello Worl" | first = "H" | last = "d"
```
- Modularity : Components of a sofware separeted into functional modules.
- Abstraction: Distill a complicated system down to its most fundamental parts.
- ADS : Abstract data types : Data structures which have undergoing the abstraction paradigm.
- Encapsulation: Don't reveal internal details of the software/element, mantaining a public interface for that software/element. 
- ABC : Abstract Base Class : Provides a blueprint for other classes.
- Duck typing: Infers behaviors.
- Design pattern : Describes the solution to a 'typical' software problem.

#### Software development
- CRC card : Class Responsability Collaborator : Divide the work realized by a program. Assign each Responsability a class component.
- Functions are named with underscores. Ex. my_function_name()
- Constant values are all capital with underscore spaces.
#### Testing and debugging
- Testing: Check th correctness of a program
- Debugging: Keep track of the program to found errors in execution time.
- **unit testing** when we first test elements that doesn't depend in other ones, that is, test components in isolation.
One way to do unit testing in the same file is with `if __name__ == __main__` because it only executes code within the namespace that is executed in the directly on that module.
- The simplest technique for debuggin is with print statements

# Classes
- `self` serves to identify the current instance of a class.
- We call **accessors** to the members that allow us to read a class property.

## operator overloading
To summarize the built-in classes have define some  operators, for example the int class have defined the `+` operator, when we add 2 numbers the operator
will return the sum, but when we define a new class is **undefined** but we can give it a definition with the technique called **operator overloa**.
- `__add__` is the name of the method to overload the `+` operator.
When we use the `+` in an int instance called a, and we add it an instance b
```py
a + b #returns the sum -> common syntax
a.__add__(b) #returns the sum -> special method form
a.__radd__(b) #This stands for right add, and applies for all the overload functions
# It 'intverts' the function instead of a+b uses b+a
```
## NON - operator overloading
For example with str(foo), we can define a method `__str__()` in foo, which returns a str() adapted string to portray the class.
We need to take care of the `__bool__`, because when `__len__` is defined, `if bool(foo):` is evaluated, will base its return with the `__len__` method.
- If we try to use a particular special method on a user-defined class, the standard sytax that relies upon that method will raise an exception.
<img style="margin:0px auto"  src="https://imgs.search.brave.com/S1H4_Ib5RLJF04nx8K5VJJr864MkbZqGzOmSZ0ol8n0/rs:fit:331:390:1/g:ce/aHR0cHM6Ly9kb3Ru/ZXR0dXRvcmlhbHMu/bmV0L3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzA3L3dvcmQt/aW1hZ2UtMTI2LnBu/Zw"> 

## Python's exception herarchy and inheritance
The ultra father is `BaseException` where all the error derivate.

- To create a class inherintance we use `Class ClassName( ParentClass ):`
  - in the `def __init__` we declare the same variables as `ParentClass` with the `ClassName` variables and with the `super().__init__()` we initialize the `ParentClass` variables, then we use `self.var` to initialize the Child fields.
  - To call a Parent class member we can use `super().member()`.

## Abstract base classes
A class that serves as a blueprint for other classes. And cannot be instantiated.
- We can use Abstract base clasess with the `import abc`
With the `metaclass = ABCMeta` we can create an ABC, and with the `@Abstractmethod` decorator we can leave a
abc's method empty because it'll take an inherint implementation.

## Namespaces and Object-orientation

- **NAMESPACE** It's an abstraction that manages the identifiers defined in a particular scope.
- **self** causes to instroduce a identifier to the instance namespace, it stablish the entries.
- Mutable object are shared within inherinted classes until you reassign that mutable object. And you lost sharing when you reassign the mutable object.
  - This also happens with immutables, but as they are treated different.
- **Class data member** : Is a variable that share all the instances of that class, it can be accessed with `ClassName.identifier`
- Python uses a different mechanism to represent instance namespaces to avoid the use of an auxiliary dictionary.
  - we can declare the namespace identifiers with `__slot__ == "first","second" ...`, if we do so, the we'll need to add also a `__slot__` method in each subclass only with their respect member to avoid instance dictionaries.
### Name resolution
- First python search in **instance namespace** then in **class namespace** an so on in the inheritance hierarchy. if no value associated found, an attribute error is raised.

## Shallow and deep copying

- `=` only create an alias for an object identifier.
- Shallow copy : because the new object created is not a object alias, now, is a reference to each object of the original object.
  - It doesn't create a copy of its elements, only a reference.
  - To create a new instance of a mutable class, instead of creating only the alias, we use the object constructor.
    - i.e. `listCopy = list(originalList)`
- Deep copy : An object with its own **copy** of element references.
### copy module
- copy.shallowcopy() : creates a shallow copy of its arguments.
- copy.deepcopy() : creates a deep copy of its arguments.
