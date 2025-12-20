let input = document.querySelector("input");
let span = document.querySelector("span")

input.addEventListener("input", function () {
    let count = 20 - input.value.length
    span.textContent = count
    
    if(count < 0){
        span.style.color = "red";
    } else {
        span.style.color = "black";
    }
})