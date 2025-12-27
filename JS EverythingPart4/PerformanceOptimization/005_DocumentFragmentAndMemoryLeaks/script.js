
// add the element nodes into a space intead of adding them directly into the DOM

let space = document.createDocumentFragment();

for(let i =0; i < 100000; i++){
    const li = document.createElement("li")
    li.textContent = i;
    space.appendChild(li);
}

// document.append(space);




// Memory Leaks in setInterval 
let count = 0;

const int = setInterval(function() {
    if(count < 10){
        count++;
        console.log(count);
    } else {
        clearInterval(int);
        console.log("finished")
    }
} , 1000);