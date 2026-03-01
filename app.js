var name = "Alice"; // Function-scoped, hoisted - avoid in modern JavaScript
let age = 25; //block-scoped, can be reassigned
const PI = 3.14159; // Block-scoped, cannot be reassigned

let score = 0;
score = 10; // OK - reassigment allowed for let

const MAX = 100;
// MAX = 200; // TypeError: Assignment to constant variable.

let homeAddress = "31 Montrose Drive";
let userAge = 32;

console.log(homeAddress)