
// first class functions -> Functions can be treated as values 

function abcd(val) {
    val();
}

let sayHello = () => {
    console.log("hello")
}


//  function calls
// abcd(function () {
//     console.log("hey")
// })

// abcd(sayHello)

// high order functions 

// use rest parameter to accept any number of scores and return the total 

function returnTotal(...val) {
    let sum = 0;
    for(let i = 0; i<val.length; i++){
        sum = sum + i;
    }
    console.log(sum)

}

// returnTotal(1,2,3,4,5,6,7,8,9)