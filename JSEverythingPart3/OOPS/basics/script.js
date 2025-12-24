
// constructor function
function CreatePencil(name, price, color) {

    this.name = name;
    this.price = price;
    this.color = color; 

}

CreatePencil.prototype.write = function(text) {
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color
        document.body.appendChild(h1);

    }

let pencil1 = new CreatePencil("Natraj", 10, "blue");
let pencil2 = new CreatePencil("Apsara", 10, "green");


