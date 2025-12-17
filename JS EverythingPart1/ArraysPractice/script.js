//Q1. Access Elements
// Given an array:
let fruits = ["apple", "banana", "mango"];
// Print the first and last element of the array.
console.log(fruits[0],fruits[2])

//Q.2 Create an array of numbers and:
// Add a number to the end using push()
// Add a number to the beginning using unshift()
let numArr = [1,2,3,4,5]
numArr.push(32)
numArr.unshift(31)

//Q3. Write code to find the length of an array and print it.
console.log(numArr.length)

// 🟡 INTERMEDIATE (3 Questions)
 
//Q4. Count Occurrences
// Count how many times a specific value appears in an array.
// Example:
// [1, 2, 3, 2, 4, 2] → count occurrences of 2

function countOccurrences(arr, val) {
    let counter = 0;
    arr.forEach(function(value) {
        if(value === val){
            counter++;
        }
    })
    console.log(counter)
}

//Q5.  Reverse an Array
// Reverse an array without using reverse().
function reverseArray(arr) {
    let newArr = [];
    for(let i = arr.length-1; i>=0; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}



//Q6. Remove Duplicates
// Create a new array that removes duplicate values.
// Example:
// [1, 2, 2, 3, 4, 4] → [1, 2, 3, 4]

function removeDuplicates(arr) {
    let newArr = []
    for(let i = 0; i<arr.length; i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr

}

//Q7. Second Largest Number
// Find the second largest number in an array.
// Example: [10, 5, 8, 20] → 10

function secondLargestNumber(arr) {
    // sort the array
    arr = arr.sort(function(a,b){
        return a - b;
    })
    // pop the array 
    arr.pop()
    // return the last number
    return arr[arr.length-1]
}

// [1, 2, 3, 4] → [2, 3, 4, 1]
 
function rotateArray(arr){
    let num = arr.shift()
    arr.push(num)
    return arr
}