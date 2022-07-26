# TYPESCRIPT
The primive types are the same as JS
- boolean
- number
- null
- string
- undefined
If TS can infer the type it assigns the type `any` to the variable. This could happen when we don't assign a value to a variable name.
```ts
let someVar:any; || let someVar;

someVar = 10
someVar = "hola" //will no produce any error because someVar is  any type
```
## tsconfig.json
The main tsconfig body contains the next info:
- compilerOptions: Rules for the TS compiler.
  - target : version of JS
  - module : syntax to import and export modules.
  - strictNullChecks : means that null and undefined can only by used if thery are assigned explicitly.
- include: Which files are included. `["**/*.ts"]` meant for everything.

```json
{
  "compilerOptions": {
    "target": "es2017",
    "module": "commonjs",
    "strictNullChecks": true
  },
  "include": ["**/*.ts"]
}
```
