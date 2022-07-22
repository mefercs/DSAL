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
We need to take care of the `__bool__`.

<img src="https://imgs.search.brave.com/S1H4_Ib5RLJF04nx8K5VJJr864MkbZqGzOmSZ0ol8n0/rs:fit:331:390:1/g:ce/aHR0cHM6Ly9kb3Ru/ZXR0dXRvcmlhbHMu/bmV0L3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzA3L3dvcmQt/aW1hZ2UtMTI2LnBu/Zw"> 
