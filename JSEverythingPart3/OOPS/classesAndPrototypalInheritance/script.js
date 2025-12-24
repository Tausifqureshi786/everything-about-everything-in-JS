class User {

    constructor(name,address, username,  email) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.username = username;
        this.role = "user";
    }

    write(text) {
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name} : ${text}`;

        document.body.appendChild(h1);
    }
}

class Admin extends User {
    constructor(name,address, username,  email,) {
        super(name,address, username, email);
        this.role = "admin";
    }

    remove() {
        document.querySelectorAll("h1").forEach(function(h1) {
            h1.remove();
        });

    }

}

let u1 = new User("John Doe", "123 Main St", "johndoe", "john@example.com");
let u2 = new User("Harshita", "Delhi", "harshitaaa", "hey2@gmail.com");
let a1 = new Admin("Admin User", "Admin Address", "adminuser", "admin@example.com");



// protoytypal inheritance 

let coffe = {
    color: "dark",
    drink: function () {
        console.log(`Drinking coffee : ${this.color}`);
    }
}

let arabicaCoffee = Object.create(coffe);
arabicaCoffee.taste = "bitter";
arabicaCoffee.drink();