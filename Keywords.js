// can not be redeclared
let x = 10;
let x = 20; // SyntaxError: Identifier 'x' has already been declared

// valid 
let x = 10;
x = 20; // No error

for (let i = 0; i < 10; i++) {
  const x = 10;
}

console.log(x); // ReferenceError: x is not defined
