let count = 0;
let seconds = 3;
let progress = document.querySelector(".progress-bar");
let statusBar = document.querySelector(".status");

let interval = setInterval(function () {
    if(count < 100){
        count++;
        progress.style.width = `${count}%`;
        statusBar.textContent = `${count}%`;
    } 
    else {
        document.querySelector("h3").textContent = "Downloaded.";
        clearInterval(interval);

    }

}, (seconds * 1000) / 100);