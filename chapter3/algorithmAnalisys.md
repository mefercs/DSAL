# Algorithm analisys
- **Data structure** is a systematic way of organizing and accessing data.
- **Algorithm** is a step-by-step procedure for performing some task in finite amount of time.

# THE SEVEN MAIN FUNCTIONS
- **CONSTANT FUNCTION** -> f(n) = c. A fixed constant. They are basic operations in a computer.
  - i.e. 2,5,7,8,1000, operations. 
- **LOGARITHM FUNCTION** -> f(n) = log_b(n), where b = base, it is quite common to use b = 2. In algorithms we omit the base supossing it is 2.
  - In Algorithms we use log(n) as log_2(n).
  - This works if and only if `b^2 = n `
    * log_b(ac) = log_b(a) + log_b(c) 
    * log_b(a/c) = log_b(a) − log_b(c)
    * log_b(`a^c`) = c * log_b(a)
    * log_b(a)= log_d(a)/log_d(b)
    * `b^log_d(a)`= `a^log_d(b)`
- **LINEAR FUNCTION** -> f(n) = n, represents a basic operatio for each element.
- **N log(N) FUNCTION** -> f(n) = nlog(n) : Each element it's executed by log(n) times.
- **THE CUADRATIC FUNTION** -> f(n) = n^2 : That means each element it's executed n times. N^2 operations.
- **CUBIC FUNCTION** -> f(n) = n^3 
- **EXPONENTIAL FUNCTION** -> f(n) = b^n : The number of operations is incresing b times for each iteration.
  - 1 + 2 + 4 + 8 + · · · + 2^(n−1) = 2^(n) −1,

|constant|logarithm|linear|nlog(n)|quadratic|cubic|exponential|
|---|---|---|---|---|---|---|
|1|log(n)|n|nlog(n)|n^2|n^3|a^|

Where a > 1 constant.

## Primitive operations (constant execution time)
Like a number 3 or 5 execution. O(1). With a fixed number of primitive operations.

- Assigning an indentifier to an object.
- Determining the object associated with an identifier.
- Performing an arithmetic operation.
- Comparing 2 numbers
- Acessing a SINGLE element of a python list by index.
- Calling a function (excluding the operations executed by the function).
- Returning by a function.
Sometimes treat it as f(n). Where n is the input size. And to analyze Algorithms we use the **worst-case**.

