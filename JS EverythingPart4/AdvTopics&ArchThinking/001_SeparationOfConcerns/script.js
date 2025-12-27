
let ul = document.querySelector("ul");
let btn = document.querySelector("button");


function add(n1,n2) {
    return n1 + n2;
}


btn.addEventListener("click", function () {
    const num1 = Math.floor(Math.random()*10);
    const num2 = Math.floor(Math.random()*10);

    let finalAdd = add(num1, num2);
    let li = document.createElement("li");
    li.textContent = finalAdd;
    ul.appendChild(li);
});

