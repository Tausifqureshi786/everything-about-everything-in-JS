
// Q1. count how many vowels in a string 

function countVowels (val ) {
    let vowels = ['a','e', 'i', 'o', 'u'];
    let counter = 0;
    for(let i = 0; i<val.length; i++){
        // console.log(val[i]);
        for(let j=0; j<vowels.length; j++){
            if(val[i] === vowels[j]) {
                counter++
            }
        }
    }
    console.log(counter)
}

// countVowels("amin")

// Q2. reverse a string using loops
function reverseString( val) {
    let str = '';
    for(let i = val.length-1; i >= 0 ;i--) {
        str+= val[i];
    }

    console.log(str)
}

// reverseString("str")

// Q3. find largest number in an array

function findLargestNumInArr(arr) {
    let largestNum = arr[0];
    for(let i =1; i< arr.length; i++){
        if(arr[i] > largestNum) {
            largestNum = arr[i];
        }
    }
    return largestNum;
}

// Use a loop to create a new array without duplicate values.
function removeDuplicates(arr) {
    let newArr = []
    for(let i = 0; i< arr.length; i++) {
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i])
        }
    }

    return newArr;
}

// removeDuplicates([1,2,3,4,22,1,2,])

/* 
Use nested loops to print this pattern:

*
**
***
****
*****

*/


function patternPrinting(num) {
    let stars = "";
    for(let i =1; i<=num; i++) {
        for(let j =1; j<=i; j++){
            stars += "*";
        }
    }

    console.log(stars);
}

