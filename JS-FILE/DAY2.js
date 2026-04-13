1//  Declare three variables using var, let, and const. Store your name, age, and a boolean value. Print them.
var myName = "Shree";
let age = 22;
const isStudent = true;

console.log(myName);
console.log(age);
console.log(isStudent);

2//  Declare a variable without assigning a value. Print it. Then assign null to another variable and print it. What is the difference?
var undefinedVariable;
console.log(undefinedVariable); // undefined

var nullVariable = null;
console.log(nullVariable); // null

// Difference: undefined means a variable has been declared but not assigned a value, while null is an intentional assignment of "nothing" or "empty".

3//  Create variables of type: string, number, boolean, bigint, null, undefined. Use typeof and print the result for each.
var stringVar = "Hello, World!";
var numberVar = 42;
var booleanVar = true;
var bigintVar = 9007199254740991n;
var nullVar = null;
var undefinedVar;

console.log(typeof stringVar); // string
console.log(typeof numberVar); // number
console.log(typeof booleanVar); // boolean
console.log(typeof bigintVar); // bigint
console.log(typeof nullVar); // object
console.log(typeof undefinedVar); // undefined

4//  Create two variables:
// One storing "10"
var stringNumber = "10";
// One storing "hello"
var helloString = "hello";
// Multiply both with 2 separately. What is the output?
var multipliedStringNumber = stringNumber * 2; // 20 (string "10" is coerced to number)
var multipliedHelloString = helloString * 2; // NaN (string "hello" cannot be coerced to number)

5//  Convert the text student name into:
// camelCase  = studentName
// PascalCase  = StudentName
// snake_case  = student_name
// kebab-case  = student-name

6// Declare two numbers and perform all Arithmetic operations:
// + 
var num1 = 10;
var num2 = 5;
console.log("Addition:", num1 + num2);
// -
console.log("Subtraction:", num1 - num2);
// *
console.log("Multiplication:", num1 * num2);
// /
console.log("Division:", num1 / num2);
// %
console.log("Modulo:", num1 % num2);

7//  Declare a variable with value 10. Apply:
// +=
var num3 = 10;
num3 += 5; // num3 = num3 + 5
console.log("After +=:", num3);
// -=
num3 -= 3; // num3 = num3 - 3
console.log("After -=:", num3);
// *=
num3 *= 2; // num3 = num3 * 2
console.log("After *=:", num3);
// /=
num3 /= 4; // num3 = num3 / 4
console.log("After /=:", num3);
// Print the result after each step.

8//  Compare the following and write the output:
// 10 == "10"
console.log(10 == "10"); // true (type coercion)
// 10 === "10"
console.log(10 === "10"); // false (no type coercion)
// 10 != "10"
console.log(10 != "10"); // false (type coercion)
// 10 !== "10"
console.log(10 !== "10"); // true (no type coercion)

9//  Create two variables: age and hasID.
// Write a condition to check:
  
// Eligible if age > 18 AND hasID is true
var myage = 20;
var hasID = true;
if (myage > 18 && hasID) {
    console.log("Eligible");
}
// Not eligible if age < 18 OR hasID is false
var age2 = 16;
var hasID2 = false;
if (age2 < 18 || !hasID2) {
    console.log("Not eligible");
}

10// Predict Output
// var a;
// console.log(a);---------undefined

// a = 5;
// console.log(a);---------5

// console.log(typeof NaN);------- number
// console.log(typeof null);------object

