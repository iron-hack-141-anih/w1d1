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
