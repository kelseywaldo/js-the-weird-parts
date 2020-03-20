# Section 2: Execution Contexts and Lexical Environments


## Vocabulary

**Compiler**
- A compiler is a software program that transforms high-level source code that is written by a developer in a high-level programming language into a low level object code (binary code) in machine language, which can be understood by the processor

**Execution context**
- A wrapper to help manage the code that is running
- There are lots of lexical environments. Which one is currently running is managed via execution contexts. It can contain things beyond what's written in your code.
- Anytime you invoke a function, a new execution context is created and placed in the execution stack
- 2 Phases:
  - Creation phase: we have global object, this, sets up memory space for variables and functions (hoisting). Hoisting is _not_ moving code to the top of the file. Functions and variables exist in memory. During this phase, a function and code is stored in memory. Variable assignment, however, doesn't take place until the code is executed. Variables are set to `undefined` during this phase
  - Code execution: the execution context runs your code line by line

**Global**
- Not inside a function

**Global execution context**
- The JavaScript engine that runs your code creates a global execution context, which will wrap the code currently being executed, and create 1) a global object and 2) 'this'

**Hoisting**
- Variables are setup and set to undefined
- Functions are assigned in memory 

**Interpreter**

**Invocation**
- Running a function. In JavaScript, by using parenthesis i.e: `invoked()`

**Lexical environment**
- Where something sits physically in the code you write. A lexical environment exists in programming languages in which _where_ you write something is important.

**Object**
- A collection of name/value pairs

**Scope chain**
- Scope - where can I reference a variable
- Chain - reference to outer environment (lexically)

**Single threaded**
- One command is being executed at a time

**Synchronous**
- One at a time, in order that it appears

**Syntax Parser** 
- A program that reads your code, determines what it does, and if it's grammar is valid.

**Undefined**
- A special value/keyword that says the variable has not been set. This is different from 'not defined' error. 

> Note: never set a variable to undefined. It's best to let undefined mean:
> "I, the programmer, never set the value of X". This makes it easier to debug.

**Variable environment**
- Where the variables live and how they relate to each other in memory


## Exercise

1) Run application and open browser dev tools
2) Execution context was created:
    * this: in this context, the browser window
    * window: the global object inside browsers
4) Run the application and see that `b`, `c`, and `d` are accessible from the window object and have global scope
