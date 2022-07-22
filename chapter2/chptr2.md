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
