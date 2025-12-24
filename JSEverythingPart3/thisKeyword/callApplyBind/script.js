// call apply bind 

let obj = {
    name: "harsh",
};

function abcd(a,b,c) {
    console.log(this, a,b,c);
}

// this will make the value of this to obj
// abcd.call(obj, 1,2,3); // arguments after obj are passed as normal arguments

abcd.apply(obj, [1,2,3])
