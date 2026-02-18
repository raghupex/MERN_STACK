console.log("---- Section 1 ----");

let name = "Alex";
let age = 25;
let isStudent = true;
console.log("Name:", name);
console.log("Age:", age);
console.log("Student:", isStudent);

let a = 10;
let b = 20;
a = a + b;
b = a - b;
a = a - b;
console.log("After swap - a:", a, "b:", b);

let x = 10;
let y = x;
y = 20;
console.log("x after changing y:", x); // 10

const pi = 3.14;
const radius = 5;
const area = pi * radius * radius;
console.log("Area:", area);


console.log("---- Section 2 ----");

let num1 = 15;
let num2 = 4;
console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
console.log("Remainder:", num1 % num2);

console.log('5 + "5":', 5 + "5"); // "55"
console.log('5 - "2":', 5 - "2"); // 3
console.log("true + 1:", true + 1); // 2

let number = 120;
if (number > 100) console.log("Greater than 100");
else if (number === 100) console.log("Equal to 100");
else console.log("Less than 100");

console.log("5 == '5':", 5 == "5");   // true
console.log("5 === '5':", 5 === "5"); // false

let checkAge = 30;
if (checkAge >= 18 && checkAge <= 60) console.log("Eligible");
else console.log("Not eligible");


console.log("---- Section 3 ----");

let num = 15;
if (num % 2 === 0) console.log(num, "is Even");
else console.log(num, "is Odd");

if (num % 3 === 0 && num % 5 === 0) console.log("FizzBuzz");
else if (num % 3 === 0) console.log("Fizz");
else if (num % 5 === 0) console.log("Buzz");

let day = 3;
switch(day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid day");
}

console.log("Numbers 1-20:");
for(let i = 1; i <= 20; i++) {
    console.log(i);
}
console.log("Even numbers 1-20:");
for(let i = 1; i <= 20; i++) {
    if(i % 2 === 0) console.log(i);
}

let N = 10;
let sum = 0;
let i = 1;
while(i <= N) {
    sum += i;
    i++;
}
console.log("Sum 1 to", N, ":", sum);

// Break & continue
console.log("Break & Continue Example:");
for(let i = 1; i <= 10; i++) {
    if(i === 5) continue; // skip 5
    if(i === 8) break;    // stop at 8
    console.log(i);
}


console.log("---- Section 4 ----");

function sumNumbers(a, b) {
    return a + b;
}
console.log("Sum function:", sumNumbers(3, 7));

const sumNumbersArrow = (a, b) => a + b;
console.log("Arrow sum:", sumNumbersArrow(3, 7));

function isPrime(n) {
    if(n < 2) return false;
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0) return false;
    }
    return true;
}
console.log("Is 11 prime?", isPrime(11));

// Reverse string
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("Reverse 'hello':", reverseString("hello"));

function test() {
    return;
    console.log("Hello");
}
console.log("Test function output:", test());

function largestNumber(arr) {
    return Math.max(...arr);
}
console.log("Largest number:", largestNumber([5, 10, 3, 20]));


console.log("---- Section 5 ----");

function calculateGrade(marks) {
    if(marks >= 90) return "A";
    if(marks >= 75) return "B";
    if(marks >= 50) return "C";
    return "Fail";
}

let studentName = "Alex";
let studentMarks = 82;

let grade = calculateGrade(studentMarks);
let result = (grade === "Fail") ? "Not Passed" : "Passed";

console.log("Student:", studentName);
console.log("Marks:", studentMarks);
console.log("Grade:", grade);
console.log("Result:", result);
