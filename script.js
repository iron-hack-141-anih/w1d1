console.log("Hello Ironhackers! I am your new instructor");

// this is a comment
/*
    this
    is
    a
    multiple
    line
    comment
*/

// variable declaration
var firstName;

// assignment
firstName = "Montasar";

// variable declaration and initialization
var age = 28;

console.log("My name is " + firstName + " and I am " + age);

// let lets us change the value of a variable
let city = "Berlin";
city = "Paris";

console.log(city); // "Paris"

// const declares a constant variable
const country = "Germany";
// country = "France"; -> error

// var, let and const are keywords
// what comes after is the variable name

// = is the assignment operator
// what comes after is the value

// you can declare multiple variables with let (or var)
let phoneNumber, email;
console.log(phoneNumber); // undefined

// let to;
// let be;
// let commented;

// avoid, variable names should be self descriptive
let k = 12;
let j = k * 3;

// variable names should be as concise as possible

// variable names should be in lowercase
// if multiple word name, then camelCase

// exception for global constants
const MAXIMUM_SIZE = 4800;

// Number data type
let mileage = 140000; // integer
let engineVolume = 1.6; // floating point value

// basic expression operators: +, -, *, /

// addition
let ageNextYear = 28 + 1;
// age + 1
console.log("next year: ", ageNextYear);

// subtract
let ageLastYear = 28 - 1;
console.log("last year: ", ageLastYear);

// multiply
let ageTriple = age * 3;
console.log("triple: ", ageTriple);

// divide
let halfAge = age / 2;
console.log("half: ", halfAge);

// modulo (useful to find multiples, e.g find if a number is odd or even)
let evenRemainder = age % 2;
console.log("even remainder: ", evenRemainder);

let oddRemainder = 41 % 2;
console.log("odd remainder: ", oddRemainder);

// exponential
// base ** exponent
let tenPowerOf3 = 10 ** 3;

// operator precedence is the same as in maths
let randomNumber = 2 + 2 * 2; // 6
let anotherRandomNumber = (2 + 2) * 2; // 8

// assignment operators
// addition
let a = 1;
// a = a + 1;
a += 1;
console.log("a: ", a); // 1
// subtraction
// a = a - 1;
a -= 1;
console.log("a: ", a); // 0
// multiplication
// a = a * 3;
a *= 3;
// divide
a /= 2;
// modulo
a %= 2;
// exponent
a **= 10;
let b = 9;
b **= 0.5; // -> calculates the root
// Math.sqrt(b) -> 3
console.log(b); //3

// const cannot be reassigned
const c = 41;
// c += 2; -> error
const answerToLifeAndEverything = c + 1;
console.log(c); // 41

console.log(2 / 0); // Infinity
const impossibleToCompute = "Abc" / 2;
console.log(impossibleToCompute);
