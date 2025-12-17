// Create an Object
// Create an object called person with properties:
// name
// age
// city

let person = {
    name: "Tausif",
    age: 24,
    city: "Ahmedabad"
}

// Access Object Properties
// Given:
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022
};
// Print the brand and year.

console.log(car.brand, car.year)


// Update Object Values
// Update the age property of the person object to a new value.

person.age = 25;


const student = {
	name: 'John',
	age: 20
}

for( const key in student){
	console.log(`${key} : ${student[key]}`)
}

// Count Properties
// Write a program to count how many properties an object has.

let propertyCount = 0
for(const key in student) {
    propertyCount++;
}
console.log(propertyCount)


// Nested Object Access
// Given a nested object, access a deeply nested value.
let user = {
  name: "Ali",
  address: {
    city: "Ahmedabad",
    pincode: 380015
  }
};
// Print the city.

console.log( user.address.city)

let user2 = {
name:"Ali",
address: {
city:"Ahmedabad",
pincode:380015
  }
};

console.log(Object.entries(user2))

// Difficult question :

// Given an array:
// ["apple", "banana", "apple", "orange", "banana", "apple"]
// 👉 Use an object to find the value that appears most frequently.
