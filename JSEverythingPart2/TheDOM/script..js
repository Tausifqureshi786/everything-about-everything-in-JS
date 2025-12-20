 
let h1 = document.querySelector("h1")

h1.classList.add("hulu")

let list = document.querySelectorAll("li")

list.forEach(function (val) {
    console.log(val.textContent)
})

let div = document.querySelector("div")

div.setAttribute("title", "hey")

// remove a disabled attribute from a button

let btn = document.querySelector("button")
btn.removeAttribute("disabled")

let element = document.createElement("li")
element.textContent = "New Task"

let ul = document.querySelector("ul")

ul.appendChild(element);