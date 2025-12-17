let arr = [1,2,3,1,4,5,6] 

arr.forEach(function(val) {
    console.log(val)
})

// use map only when you want to create a new array based on the given array 

let newArr = arr.map(function(val) {
    return 12;
})

let arr2 = [1,2,3,4,5,6,7,8,9,90]

let newArr2 = arr2.filter( function (val){
    return true
})

let ans = arr.reduce(function(accumulator, val) {
    return accumulator + val
}, 0)

// return the first existing element from the array or object that satisfies the check condition

let va = arr.find(function(val) {
    return val === 1
})

// some

let any = arr.some(function(val) {
    return val > 85
})

// every 

let eve = arr.every(function(val){
    return val > 5;
})

// destructuring 

let arr3 = [1,2,3,4,5]
let [a,b,,c] = arr3

console.log(a,b,c)

// spread operator 

let array = [1,2,3,4,5,6,7,8,9]
let array2 = [...array]

// Array Questions to solve

let colors = ["Green", "Yellow"];

// adds the last two string at the 1st index 
colors.splice(1,0, "Red", "Blue")

let items = [1,2,3,4,5,6]
let newarr = items.slice(1,4);
console.log(newarr)

let ar = [2,5,1,11,87,56]

ar.sort( (a, b) => {
    return a - b;
})





