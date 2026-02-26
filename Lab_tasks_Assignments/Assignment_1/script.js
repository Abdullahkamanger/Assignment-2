//part 1:variables and data types
//task:1 -- student information
console.log("Hello World");

let name = "Abdullah"
let age = 43
let isStudent = true

console.log(`my name is ${name}. I am ${age} years old. Student: ${isStudent}`)

//task:2 -- dta type checker

let string = "This is a string"
let number = 42
let boolean = false
let undefinedvariable
let nullvariable = null

console.log( typeof string) //string
console.log( typeof number) //number
console.log( typeof boolean) //boolean
console.log( typeof undefinedvariable) //undefined
console.log( typeof nullvariable) //object (this is a quirk in JavaScript, null is considered an object) to actually check this we can check it with condition
if (nullvariable === null) {
    console.log("nullvariable is null");    
} else {
    console.log("nullvariable is not null");
}


//task:3 --simple calculator
let num1 = 10
let num2 = 5
let sum = num1 + num2
let difference = num1 - num2
let product = num1 * num2
let quotient = num1 / num2
console.log(`Sum: ${sum}, Difference: ${difference}, Product: ${product}, Quotient: ${quotient}`)

//task:4 -- temperature converter
let celsius = 25
let fahrenheit = (celsius * 9/5) + 32
console.log(`${celsius}°C is equal to ${fahrenheit}°F`)

//part 2: Conditions

//task:5 -- even or odd
let numberToCheck = 7
if (numberToCheck % 2 === 0) {
    console.log(`${numberToCheck} is even`);
} else {
    console.log(`${numberToCheck} is odd`);
}

//task:6 -- grade calculator
let score = 85
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: Fail");

}


//task: 7 -- Age elegibility
let ageToCheck = 18
if (ageToCheck >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// part 3: Loops

//task:8 -- print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//task:9 -- multiplication table of 5
let numberForTable = 5
for (let i = 1; i <= 10; i++) {
    console.log(`${numberForTable} x ${i} = ${numberForTable * i}`);
}