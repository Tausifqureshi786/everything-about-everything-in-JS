let a = 12

let obj = {
    name: "tausif"
}

let number = 10

switch(number) {
    case number<20: 
        console.log("The number is 10")
        break; 
    default: 
        console.log("none matched")
}

/*
for(let i = 1; i<101 ; i++ ) {
    console.log(i)
}


let i = 1;
while(i<32){
    console.log(i);
    i++;
}

*/ 
// print even numbers from 1 to 20 using a for loop 

function printEvenNums() {
    for(let i = 1; i<=20; i++) {
        if(i%2 === 0) {
            console.log(i)
        }
    }
}

function printOddNums() {
    let i = 1;
    while(i <= 15) {
        if(i%2 === 1){
            console.log(i)
        }
        i++;
    }
}

// printOddNums()

function printFiveTable() {
    let i = 1;
    while(i <= 10){
        console.log(i * 5)
        i++
    }
}


function sumOfHunderds() {
    let i = 1;
    let sum = 0;
    while(i < 101){

        sum = sum + i;
        if(i === 100){
            console.log(sum);
        }
        i++;
    }
}

// sumOfHunderds()

function divisibleByThree() {
    
    for(let i = 1; i<51; i++) {
        if(i%3 === 0) {
            console.log(i)
        }
    }
}

// divisibleByThree()


function isEvenOrOdd() {
    let val = prompt("give a number")

    for(let i = 1; i<=val; i++) {
        if(i%2 === 0){
            console.log(`${i} is even`)
        } else {
            console.log(`${i} is odd`)
        }
    }
}

function isDivisibleByThreeAndFive() {
    let count = 0;

    for(let i = 1; i< 101; i++) {
        if(i%3 === 0 && i%5 === 0){
            count++;

        }
    }
    console.log(count)
}

// isDivisibleByThreeAndFive()

function stopAtMultipleOfSeven() {
    for(let i = 1; i<101; i++) {
        console.log(i)
        if(i % 7 === 0) {
            break;
        }
    }
}

// stopAtMultipleOfSeven()

function skipMultiplesOfThree() {
    for(let i = 1; i<21; i++) {
        if(i % 3 === 0 ) {
            continue;
        }
        console.log(i);
    }
}

// skipMultiplesOfThree()

function firstFiveOddNumbers() {
    let counter = 0;
    for( let i = 1; i< 101; i++){
        if(i%2 === 1 ){
            console.log(i);
            counter++;
        }

        if(counter === 5) break;
    }
}

firstFiveOddNumbers()