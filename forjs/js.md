# Js concepts

The `const` keyword only prevents **reassingment**, because array and functions can mutate.
- It's more easy to use the arrow function, also remember we can also use default parameters.
* The rest parameters 
```js
function howMany(...args){
//We can catch multiple parameters and store them in the `args` list
}
```
The spread operator is created by reference, that means they can mutate the original array.

## Destructing assignment to assign variable from objects

```js
//ex.
const { name: userName, age: userAge } = user;
//We can do it with arrays as well, here arr=[3,4,5,7]
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
```

### Some string stuff 
```js
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;
```
Simple object creation
```js
const createPerson = (name,age,gender)=>({name,age,gender})
```
