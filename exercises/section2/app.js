// in the browser this === the window
console.log(this);

var b;

var c = 'carrots';

try {
  console.log(a)
} catch {
  // a was _not_ in the file, and therefore not set to undefined during the creation phase
  console.log('a threw error: Uncaught ReferenceError: a is not defined')
}

if (b === undefined) {
  console.log('b is set to undefined during the creation phase');
}

b = 'bananas';

if (b !== undefined) {
  console.log(`b is now defined before being executed: ${b}`);
}

if (c !== undefined) {
  console.log(`c is defined: ${c}`)
}

d();

function d() {
  console.log('d is defined in memory during the creation phase')
}

// EXECUTION STACK EXAMPLE:
/*************************************

1. global execution first
2. e is invoked -> adds e() to execution stack
3. line by line through e():
- print 1
- f() added to execution stack
4. f() execution at top of stack:
- print 2
5. f() execution is completes. Finish e() execution now at top of stack
- print 3
6. execution stack clear, complete global execution
- print 4

*/

function e() {
  var myVar1;
  console.log('1');
  console.log(`myVar1 in e() execution context: ${myVar1}`);
  f();
  console.log('3');
}

function f() {
  var myVar1 = 2;
  console.log('2');
  console.log(`myVar1 in f() execution context: ${myVar1}`);
}

var myVar1 = 1;
console.log(`myVar1 in global execution context: ${myVar1}`);
e();
console.log('4')
console.log(`myVar1 in global execution context: ${myVar1}`);


// SCOPE CHAIN EXAMPLE 1
/***************************************
 
when g is invoked, myVar2 will be 1 because it's not defined within 
g() execution context, but is defined within the outer lexical environment 
(in this case the global execution context/scope)

*/

function g() {
  console.log(`myVar2: ${myVar2}`);
}

function h() {
  var myVar2 = 2;
  g();
}

var myVar2 = 1;
h();


// SCOPE CHAIN EXAMPLE 2
/***************************************
 
when j is invoked, myVar3 is not defined within the i() execution context, 
but is defined within the outer lexical environment (in this case the i())

*/

function i() {
  function j() {
    console.log(`myVar3: ${myVar3}`);
  }

  var myVar3 = 'defined in i()';
  j();
}

var myVar3 = 'defined in global scope';
i();