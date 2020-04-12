# Section 3: Types and Operators


## Vocabulary

**Coercion**
- Converting a value from one type to another

**Dynamic typing/Dynamically-typed**
- You don't explicitly tell the engine what type of data a variable holds, it figures it out while your code is running. Variables can hold different types of values because it's all figured out during execution. (Many languages outside of JS are statically typed, where you must define what type of data a variable will hold ahead of time)

**Operators**
- A special function that is syntactically (written) different. Generally, operators take 2 parameters and return 1 result
  - Precedence - which operator function gets called 1st 
  - Associativity - what order operator functions get called in when functions have the same precedence (L -> R or R -> L)

**Primitive types**
- A type of data that represents a single value (that is, not an object). In JS:
  - `Undefined` - represents lack of existence (you shouldn't set a variable to this)
  - `null` - lack of existence (you can set a variable to this)
  - boolean
  - number - floating point number (there's always some decimals). Unlike other programming languages there's only 1 number type - and it can make math weird
  - string
  - symbol - used in ES6


## Useful references
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness