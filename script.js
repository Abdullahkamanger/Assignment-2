// task 1


let num1 =200
let num2 = 100
let num3 = 500

if(num1 > num2 && num1 > num3){
    console.log(num1)
}else if(num2 > num1 && num2 > num3){
    console.log(num2)
}else if(num3 > num1 && num3 > num2){
    console.log(num3)
}

/* OR */

let max = Math.max(num1, num2, num3)
console.log(max)

/* OR */

let maxNum = num1;

if(num2 > maxNum){
    maxNum = num2
}else if(num3 > maxNum){
    maxNum = num3
}else{
    maxNum = num1
}

console.log(maxNum)

// task 2
let numberSign = -5

if(numberSign > 0){
    console.log("The number is positive")
}else if(numberSign < 0){
    console.log("The number is negative")
}else{
    console.log("The number is zero")
}
//task 3
//simple login sysytem

let correctUsername = "admin"
let correctPassword = "1234"

userEnteredUsername = "Admin"
userEnteredPassword = "1234"

if(userEnteredUsername.toLowerCase() === correctUsername.toLowerCase() && userEnteredPassword.toLowerCase() === correctPassword.toLowerCase()){
    console.log("Login successful")
}else{
    console.log("Login failed")
}


// task 4: Electricity bill calculator

let unitsConsumed = 150
let billAmount = 0

if(unitsConsumed <= 100){
    billAmount = unitsConsumed * 10
}else if(unitsConsumed > 100 && unitsConsumed <= 200){
     billAmount = (100 * 10) + ((unitsConsumed - 100) * 15)
}else{
    billAmount = (100 * 10) + (100 * 15) + ((unitsConsumed - 200) * 20)
}

console.log("Total bill amount: " + billAmount)

// task 4: print even numbers from 1 to 150

for(let i = 1; i <= 150; i++){
    if(i % 2 === 0){
        console.log(i)
    }}

    // task 5 print numbers from 20 to 1 in reverse
    for(let i=20; i>=1; i--){
        console.log(i)
    }

    // task 6 : factoriall of a number
    let number = 5
    let factorial = 1

   if(number === 0 || number === 1){
    factorial = 1
   }else{
    for(let i=1; i<=number; i++){
        // factorial *= i
        factorial = factorial * i
    }
 }
console.log(`Factorial of ${number} is ${factorial}`)

   /// using recursive function
    // function calculateFactorial(num){
    //     if(num === 0 || num === 1){
    //         return 1
    //     }else{
    //         return num * calculateFactorial(num - 1)
    //     }
     
    // }

    // task 7:count digits of a number
    let num = 12345
    let count = 0
    while(num > 0){
        num = Math.floor(num / 10)
        count++
    }
    console.log("Number of digits: " + count)

    // tasl 8: check if a number is prime
    let primeNum = 29
    let isPrime = true
    if(primeNum <= 1){
        isPrime = false
    }
    for(let i=2; i<=Math.sqrt(primeNum); i++){
        if(primeNum % i === 0){
            isPrime = false
            break
        }
    }
    if(isPrime){
        console.log(primeNum + " is a prime number")
    }else{
        console.log(primeNum + " is not a prime number")
    }