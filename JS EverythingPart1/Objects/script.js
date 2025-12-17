const user = {
    name: "Tausif",
    address: {
        city: "Ahmedabad",
        pin: 380001,
        locations: {
            lat: 23.2, 
            lng: 77.4,
        },
    },
};

let {lat, lng} = user.address.locations;

let obj = {
    name: "harsh",
    age: 26,
    email: "test@test.com",

}

for(let key in obj) {
    console.log(key , obj[key])
}

 let obj2 = Object.assign({price: Infinity}, obj)

 // computed

 // Deep Clones

 let object = {
    name: "harsh",
    age: 26,
    email: "test@test.com",
    address: {
        city: bhopal,
    },
};

// how to copy an object ()

let object2 = JSON.parse(JSON.stringify(obj));


// Optional Chaining 
console.log(object?.address?.city)

