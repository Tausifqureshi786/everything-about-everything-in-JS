
let form =  document.querySelector("form");
let username =  document.querySelector("#name");
let role =  document.querySelector("#role");
let bio =  document.querySelector("#bio");
let photo =  document.querySelector("#photo");


const userManager = {
    users: [{
            username: "abcd1", 
            role: "abcd",
            bio: "abcd",
            photo: "https://images.unsplash.com/photo-1766039132515-ea88dc3950bd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            username: "abcd2", 
            role: "abcd",
            bio: "abcd",
            photo: "https://images.unsplash.com/photo-1766039132515-ea88dc3950bd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            username: "abcd3", 
            role: "abcd",
            bio: "abcd",
            photo: "https://images.unsplash.com/photo-1766039132515-ea88dc3950bd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            username: "abcd4", 
            role: "abcd",
            bio: "abcd",
            photo: "https://images.unsplash.com/photo-1766039132515-ea88dc3950bd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
        },{
            username: "abcd5", 
            role: "abcd",
            bio: "abcd",
            photo: "https://images.unsplash.com/photo-1766039132515-ea88dc3950bd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
        },
    ],
    init: function () {
        form.addEventListener("submit", this.submitForm.bind(this));
        this.renderUI();
    },
    submitForm: function (e) {
        e.preventDefault();
        this.addUser();
        
    },
    addUser: function () {
        this.users.push({
            username: username.value, 
            role: role.value,
            bio: bio.value,
            photo: photo.value,
        })

        form.reset();
        this.renderUI();

    },
    renderUI: function () {
        document.querySelector(".users").innerHTML = "";
        this.users.forEach((user) => {
            const card = document.createElement("div");
      card.className ="card bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blue-100 hover:scale-105 transition";

      // Image
      const img = document.createElement("img");
      img.className =
        "w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-200 shadow";
      img.src = user.photo;
      img.alt = "User Photo";
      card.appendChild(img);

      // Name
      const name = document.createElement("h2");
      name.className = "text-2xl font-bold mb-1 text-blue-700";
      name.textContent = user.username;
      card.appendChild(name);

      // Role
      const role = document.createElement("p");
      role.className = "text-purple-500 mb-2 font-medium";
      role.textContent = user.role;
      card.appendChild(role);

      // Description
      const desc = document.createElement("p");
      desc.className = "text-gray-700 text-center";
      desc.textContent = user.bio;
      card.appendChild(desc);

      // Finally, append the card wherever needed, for example:

      document.querySelector(".users").appendChild(card);
        })

      let cardsArr = document.querySelectorAll(".card");

      // I have to call remove user inside an eventlistener
      if(cardsArr.length > 0) {
            cardsArr.forEach(  (card, index) =>  {
                card.addEventListener("click", () => {
                    // remove the index from the main users array
                    this.removeUser(index)

                });
            });
        }
    },
    removeUser: function (index) {
        this.users.splice(index, 1);
        this.renderUI();
    },
}

userManager.init();

 
