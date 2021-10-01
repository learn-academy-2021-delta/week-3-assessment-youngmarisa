// ASSESSMENT 3: Coding practical questions with Jest

// const { expect } = require("@jest/globals")
// const { odd } = require("prelude-ls")
// const { number, array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
var num1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
var num2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//desclare a test function called 'arrayFibinacci'
describe ('fibonacciArray', () =>{
    // write a test method that describes what the function does
    // the function should take in a number value greater than 2 
    // the function should return an array of numbers that length containing the numbers of the Fibonacci sequence
    it('take in a number value greater than 2 and return an array of numbers that equal the length of the input number value with the numbers of the Fibonacci sequence', ()=>{
        // write an expect method for each input followed by the .toEqual matcher with the expected return 
        // expected return should be an array of numbers in the Fibonacci sequence with the length equal to the number value input
        expect(fibonacciArray(6)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibonacciArray(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})
//FAIL :(


// b) Create the function that makes the test pass.

//declare a function called fibonacciArray that takes in a number value
function fibonacciArray(number) {
    // declare a local variable to be an empty array
    let arrayNew = [];
    //in a fibonacci sequence, the first two numbers will always be one so set the zero and first indexes to equal 1
    arrayNew[0] = 1;
    arrayNew[1] = 1;
    //write a for loop that starts at the second index
    //the number input is equal to the length of the array so the function will loop through 6 times if the input number is 6
    for(i = 2; i <number; i++){
        //each value in the fibonacci Array is the sum of the two preceding values
        //for example the value 3 at the third index is the sum of the first and second index values (1 +2)
        //so for the value in the array at index i will equal the sum of the [index -1] + [index -2]
        arrayNew[i] = arrayNew[i - 1] + arrayNew[i - 2]
    }
    //return the values of the fibonacci sequence into the local empty array
    return arrayNew;
}
// log the function and pass in the number value
fibonacciArray(6)
fibonacciArray(10)
//PASS :)


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

// desclare a test function called 'oddArray'
describe ('oddArray', () =>{
    // write a test method that describes what the function does
    // the function should take in an array and return a new array with only odd numbers listed in numerical order
    it('takes in an array and returns a new array with only the odd numbers listed from least to greatest', ()=>{
        // write an expect method for each input followed by the .toEqual matcher with the expected return 
        // expected return should be an array of numbers with only the odd numbers listed from least to greatest
        expect(oddArray(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(oddArray(fullArr2)).toEqual([-823, 7, 23,])
    })
})
//FAIL :(

// // // b) Create the function that makes the test pass.



// function oddArray (array) {
//     var numArray = []
//     for (let i=0; i<array.length; i++){
//         if(typeof array[i] == "number" && array[i]%2 ===1){ Math.Abs
//             numArray.push(array[i])
//         }
//         if(array[i]<0){
//             Math.abs(array[i])
//             numArray.push(array[i])
//         }
//     }
//     return numArray.sort((a,b)=> a-b)
// }
// oddArray(fullArr1)
// oddArray(fullArr2)


// create a function called onlyOdd that takes in an array contianing different data types
const onlyOdd = (array) => {
    // create an empty array so we can push our newly sorted numbers into
    let newArray = []
    // write a for loop to iterate through the array so we can sort out the odd numbers
    for (let i=0; i<array.length; i++){
        // write an if statement 
        // the if statement will sort out only number data types by using "typeof"
        // AND it will sort out the number data types that are odd numbers (which will include negative odd numbers as well)
        //use Math.abs to extrapolate any negative numbers and use %2===1 to extrapolate the odd numbers 
      if(typeof array[i] == "number" && Math.abs(array[i])%2 === 1 ){
          // use .push to take the extrapolated odd numbers and add them to our empty array
        newArray.push(array[i])
      }
    }
    //use .sort() to organize the numbers in the new array from least to greatest
    return newArray.sort((a,b)=>a-b)
  }
// log the function and pass in the array
  oddArray(fullArr1)
  oddArray(fullArr2)
// PASS :)



// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []

//desclare a test function called 'oddArray'
describe ('sumArray', () =>{
    // write a test method that describes what the function does
    // the function should take in an array and return a new array of the accumulating sum
    it('takes in an array and returns a new array of the accumulating sum', ()=>{
        // write an expect method for each input followed by the .toEqual matcher with the expected return 
        // expected return should be an array of numbers of the accumulating sum (add index 0 to index 1 to return 6 as the new first index)
        //if the array is empty, the new array should also return an empty array
        //expect(sumArray(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(sumArray(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(sumArray(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(sumArray(numbersToAdd3)).toEqual([])
    })
})
// FAIL :(

// b) Create the function that makes the test pass.

//declare a function that takes in an array
const sumArray = (array) =>{
    //create a local variable sum that equals 0
    let sum = 0;
    //return a new array that iterates through the input array using .map
    //the new value will be the sum of that value being iterated plus the value at the index prior
    //+= addition assigment operator adds two values together and assigns the result to a variable
    return array.map(value => sum += value)
}
//log the function and pass in the array
sumArray(numbersToAdd1);
sumArray(numbersToAdd2);
sumArray(numbersToAdd3);
// PASS :)