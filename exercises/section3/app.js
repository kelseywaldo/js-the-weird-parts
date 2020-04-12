// OPERATOR EXAMPLE
/******************************

In the example below. `+` is an operator, which is actually a function

function +(a, b) {
  return a + b
}

this is 'infix' notation

*/

var a = 3 + 4;
console.log(a);

// PRECEDENCE EXAMPLE
/********************************

In the example below a, b, and c are set to 4
because the assignment operator (=) has an associativity of right-to-left
(right-associative)

*/

var a = 2;
var b = 3;
var c = 4;

a = b = c;

console.log(a);
console.log(b);
console.log(c);

// COERCION EXAMPLE
/********************************

In the example below, 1 is coerced into a string. Then, '1' is concatenated
with '2', resulting in '12'

To reduce some of the weirdness caused by coercion, we can use the strict equality
operators (=== and !===) which will ensure the values have the same type. 

== should only be used if you're aware that the
values being compared should be coerced.

*/

var a = 1 + '2';

console.log(a, typeof(a));

console.log(Number(undefined));
console.log(Number(null));



// COMPARISON OPERATORS EXAMPLE
/********************************

In the first example below, we have two less than operators. To figure out which one is
run first, we can look at the associativity table and find that the less than operator
has L -> R associativity.

This means that 3 < 2 will run first. 

3 < 2 will return false.

So what's really happening below is false < 1

The less than operator is expecting two numbers, so will try to coerce false to a number.
To see what number false is coerced to, we can check using Number(false) - which returns 0.

0 < 1 will return true

The second example is similar:

-2 < -1
true

Number(true)
1

1 < 1
-> false

*/

console.log(3 < 2 < 1);
console.log(-2 < -1 < 1)

// EXISTENCE AND BOOLEANS EXAMPLE
/********************************

An `if ()` statement will coerce the value inside the parens to a Boolean.

Boolean(false)
Boolean(undefined)
Boolean(null)
Boolean('')
Boolean(0)

....all return false

This is one example of how we can use coercion to our advantage - to see if something has a value.

*/

var a = false;
var b = undefined;
var c = null;
var d = '';
var e = 0;

if (a) console.log('a exists!');
if (b) console.log('b exists!');
if (c) console.log('c exists!');
if (d) console.log('d exists!');
if (e) console.log('e exists!');

if (!a && !b && !c && !d && !e) console.log('a through e do not exist!');

// DEFAULT VALUES EXAMPLE
/********************************

What happens if you call the greet function without a parameter?

JS doesn't care - it won't throw an error, will be called with undefined
and coerces the values to a string.

*/

function greet(name) {
  console.log('Hello ' + name);
}

function greetWithDefaultName(name) {
  name = name || 'you!';
  console.log('Hello ' + name);
}

function greetWithDefaultNameES6(name = 'world!') {
  console.log('Hello ' + name);
}

greet('Kelsey');
greet();
greetWithDefaultName();
greetWithDefaultNameES6();