let number = [1,2,3,4,5]
// find sum of numbers in array
let numberSum  = number.reduce((acumulator, currentValue) => {
    return acumulator + currentValue
})
console.log(numberSum)

//add a new number to the array
number.push(6)
console.log(number)
//remove the first number from the array
number.shift()
console.log(number)

//reverse the array
number.reverse()
console.log(number)

//find a specific nhumber in the array
let findNumber = number.find((num) => {
    return num === 5
})
console.log(findNumber)
//find a specific nhumber in the array using filter
let findNumberFilter = number.filter((num) => {
    return num === 5
})
console.log(findNumberFilter)

//multiply every number in the array with 2 with map
let product = number.map((n) => {
    return n * 2
})
console.log(product)


//multiply every number in the array with 2 with reduce

// let productr  = number.reduce((acumulator, currentValue) => {
//     return acumulator + (currentValue * 2)
// })
// console.log(productr)

//find numbers in array greater than 3
let greaterThanThree = number.filter(n =>  n > 3)  
console.log(greaterThanThree)


// find first number in array that is divisible by 2

let divisibleByTwo = number.find(n => n % 2 === 0)



console.log(divisibleByTwo)




