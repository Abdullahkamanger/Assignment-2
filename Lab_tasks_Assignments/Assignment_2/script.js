//Task 1: Largest of Three Numbers

let num1 = 24
let num2 = 42
let num3 = 15

if (num1 > num2 && num1 > num3) {
    console.log(num1 + " is the largest number.");
} else if (num2 > num1 && num2 > num3) {
    console.log(num2 + " is the largest number.");
} else {
    console.log(num3 + " is the largest number.");
}

/* or we can do this like this*/
let largest = Math.max(num1, num2, num3);
console.log(largest + " is the largest number.");
/* or we can do this like this*/
let largestNumber = num1;
if (num2 > largestNumber) {
    largestNumber = num2;
}
if (num3 > largestNumber) {
    largestNumber = num3;
}
console.log(largestNumber + " is the largest number.");


//Task 2: Positive, Negative or Zero
let number = -5;
if (number > 0) {
    console.log(number + " is a positive number.");
} else if (number < 0) {
    console.log(number + " is a negative number.");
} else {
    console.log(number + " is zero.");
}

    //Task 3: Simple Login System
    let correctUsernmae = "admin";
    let correctPassword = "password123";
    let userEnteredUsername = "admin";
    let userEnteredPassword = "password123";

    if (userEnteredUsername.toLowerCase() === correctUsernmae.toLowerCase() && userEnteredPassword.toLowerCase() === correctPassword.toLowerCase()) {
        console.log("Login successful!");
    } else {
        console.log("Invalid username or password.");
    }


    //Task 3: Electricity Bill
    /*0–100 → 10 per unit
• 101–200 → 15 per unit
• 200+ → 20 per unit*/

let unitsConsumed = 150;
let billAmount = 0;
if (unitsConsumed <= 100) {
    billAmount = unitsConsumed * 10;
} else if (unitsConsumed <= 200) {
    billAmount = (100 * 10) + ((unitsConsumed - 100) * 15);
} else {
    billAmount = (100 * 10) + (100 * 15) + ((unitsConsumed - 200) * 20);
}
console.log("The electricity bill is: Rs." + billAmount);

//Task 4: Print Even Numbers 1–50

console.log("Even numbers from 1 to 50:");
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }}

    //Task 5: Reverse Counting

console.log("Reverse counting from 20 to 1:");
for (let i = 20; i >= 1; i--) {
    console.log(i);
}

//Task 6: Factorial Calculator
let numberForFactorial = 5;
let factorial = 1;
for (let i = 1; i <= numberForFactorial; i++) {
    factorial *= i;
}
console.log("The factorial of " + numberForFactorial + " is: " + factorial);

//Task 7: Count Digits
let numberForCounting = 12345;
let count = 0;
while (numberForCounting > 0) {
    count++;
    numberForCounting = Math.floor(numberForCounting / 10);
}
console.log("The number of digits in the given number is: " + count);

//Task 8: Sum of Even Numbers (1–100)

let sumEven = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    }
}
console.log("The sum of even numbers from 1 to 100 is: " + sumEven);

//Task 9: Prime Number Checker

let numberToCheck = 29;
let isPrime = true;
if (numberToCheck <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(numberToCheck); i++) {
        if (numberToCheck % i === 0) {
            isPrime = false;
            break;
        }
    }
}
console.log(numberToCheck + " is " + (isPrime ? "a prime number." : "not a prime number."));

//Task 10: ATM Machine

let balance = 4000;
let withdrawalAmount = 500;
if (withdrawalAmount <= balance) {
    balance -= withdrawalAmount;
    console.log("Withdrawal successful! Remaining balance: Rs." + balance);
} else {
    console.log("Insufficient balance. Withdrawal failed.");
}


//Task 11: Password Strength Checker
let passwordToCheck = "P@ssw0rd123";
let hasUpperCase = /[A-Z]/.test(passwordToCheck);
let hasLowerCase = /[a-z]/.test(passwordToCheck);
let hasDigit = /\d/.test(passwordToCheck);
let hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(passwordToCheck);
let isLongEnough = passwordToCheck.length >= 8;

if (hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar && isLongEnough) {
    console.log("Password is strong.");
} else {
    console.log("Password is weak. It should be at least 8 characters long and include uppercase letters, lowercase letters, digits, and special characters.");
}

//Task 12: FizzBuzz

console.log("FizzBuzz from 1 to 100:");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}