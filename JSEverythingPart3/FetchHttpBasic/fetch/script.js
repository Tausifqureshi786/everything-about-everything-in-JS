


function getUsers() {
    document.querySelector(".userList").innerHTML = "";
    fetch("https://randomuser.me/api/?results=3")
    .then(rawdata => rawdata.json())
    .then(data => {
        data.results.forEach((user) => {
            // console.log(user)
                    // Card container
            const card = document.createElement("div");
            card.className = "bg-gray-800 rounded-lg shadow-lg p-6 w-80";

            // Image
            const img = document.createElement("img");
            img.className = "w-24 h-24 rounded-full mx-auto mb-4";
            img.src = user.picture.large;
            img.alt = "User";

            // Name
            const name = document.createElement("h2");
            name.className = "text-2xl font-bold text-center text-white";
            name.textContent = user.name.first + " " +  user.name.last;

            // Role
            const email = document.createElement("h2");
            email.className = "text-center text-gray-400 mt-2";
            email.textContent = user.email;
    

            // Append all elements to card
            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(email);
    
            // Append card to body (or any container)
            document.querySelector(".userList").appendChild(card);
        });

    })
}

getUsers();

document.querySelector(".refreshBtn").addEventListener("click", function () {
    getUsers();
});