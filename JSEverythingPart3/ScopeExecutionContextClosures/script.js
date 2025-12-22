function createToaster(config) {
    let parent = document.querySelector(".parent");
    return function (str) {
        let div = document.createElement("div");
        div.textContent = str;
        div.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black" } px-6 py-3 rounded-lg shadow-lg notification-toaster`;

        parent.appendChild(div);

        if(config.positionX !== "left" || config.positionY !== "top") {
          parent.className += ` ${config.positionX === "right" ? "right-5" : "left-5"} ${config.positionY === "bottom" ? "bottom-5" : "top-5" }`;  
        }

        setTimeout(function () {
           parent.removeChild(div);
        }, config.duration * 1000); 

    }
}

let toaster = createToaster({
    positionX: "left",
    positionY: "top",
    theme: "light",
    duration: 3, 
});

toaster("Dowload Done");

setTimeout(() => {
    toaster("Tausif Qureshi said hi!");

}, 2000)