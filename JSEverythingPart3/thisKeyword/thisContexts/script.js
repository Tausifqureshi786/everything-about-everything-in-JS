
let obj = {
  name: "Tausif",
  sayName: function () {
    console.log(this);
  },
};

document.querySelector("h1").addEventListener("click", function() {
    this.style.color = "red";
    console.log(this.style.color)
});


class Abcd {
    constructor(){
        console.log(this);
        // this.a = 12;
    }
}

let val = new Abcd();

let obj2 = {
  name: "Tausif",
  sayName2: function () {
	  let defg = () => {
		   console.log(this)
	   }
	   defg();
  },
};

obj2.sayName2();